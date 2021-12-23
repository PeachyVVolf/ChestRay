#This file contains all the API's made for the POST and GET commands called by the frontend. Also, has the DB Model and 
#DB manipulation

import os
from datetime import datetime
from flask import Flask, request, jsonify, redirect, Response
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import jwt_required, JWTManager, get_jwt_identity, create_access_token
from werkzeug.utils import secure_filename
import json
import chestAPI
import chestAPI_AI

app = Flask(__name__)

# Setup the Flask-JWT-Extended extension
app.config["JWT_SECRET_KEY"] = os.environ.get('JWT_SECRET', 'sample key')  # Change this!
jwt = JWTManager(app)

#creating database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///chestray.db'
#initialize db
db = SQLAlchemy(app)

#create ur model
class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    gender = db.Column(db.String(1), nullable=False)
    email = db.Column(db.String(80), nullable=False, unique=True)
    password = db.Column(db.String(50), nullable=False)

    def __repr__(self):
        return '<Name %r>' % self.name

class Report(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    Diseases = db.Column(db.String)
    Probabilities = db.Column(db.String)

class Image(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    img = db.Column(db.Text, unique=True, nullable=False)
    name = db.Column(db.Text, nullable=False)
    mimetype = db.Column(db.Text, nullable=False)
    userID = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

class XRay(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    userID = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    report = db.Column(db.Integer, db.ForeignKey("report.id"), nullable=False)
    image = db.Column(db.Integer, db.ForeignKey("image.id"), nullable=False)
    date = db.Column(db.DateTime, default=datetime.utcnow)

#register user and add to Users table in db
@app.route("/reg", methods=["POST"])
def create_user():
    Demail = request.json.get("email", None) #get parameters sent from front end in the fetch options
    Dpassword = request.json.get("password", None)
    Dname = request.json.get("name", None)
    Dage = request.json.get("age", None)
    Dgender = request.json.get("gender", None)

    user = Users.query.filter_by(email = Demail).first() # find if email already exists
    if user is None:
        user = Users(name=Dname, age=Dage, gender=Dgender, email=Demail, password=Dpassword)
        db.session.add(user)
        db.session.commit()
        return jsonify(
            state=True)

    return jsonify({"msg": "Email Exists"}), 401

#login user by checking email and password passed in fetch 
@app.route("/token", methods=["POST"])
def create_token():
    Demail = request.json.get("email", None)
    Dpassword = request.json.get("password", None)
    if Users.query.filter_by(email = Demail).filter_by(password = Dpassword).first(): #filter by email and password
        userA = db.session.query(Users).filter_by(email = Demail).filter_by(password = Dpassword).first()
        access_token = create_access_token(identity=Demail) # if yes then generate access token for that email
        return jsonify({"access_token": access_token, "id": userA.id})

    return jsonify({"msg": "Incorrect email or password"}), 401

#return userdata for homepage
@app.route("/homedata", methods=["POST"])
def get_userData():
    Did = request.json.get("id", None) #get ID of user logged in
    person = Users.query.filter_by(id=Did).first() #searcg user data and return
    return jsonify({"name": person.name, "email": person.email,
                    "gender":person.gender, "age":person.age})

#get XrayData
@app.route("/xrays", methods=["POST"])
def getXRays():
    Did = request.json.get("id", None) #get ID of user logged in
    xrays = XRay.query.filter_by(userID=Did).all() # find all xray for that user
    outlist = []
    for xray in xrays:
        output = {"id":xray.id, "report":xray.report,# loop and add to a list
         "image":xray.image, "date":xray.date}
        outlist.append(output)
    return jsonify({'xray': outlist})

#Add Xray to DB
@app.route("/addxray", methods=["POST"])
def create_xray():
    Dimage = request.json.get("image", None)
    Did = request.json.get("id", None) #get image and user ID
    img = Image.query.filter(Image.id==Dimage).first() #if image wasnt already uploaded then can't generate xray report
    if not img:
        return(False)

    imgPath = "Images/"+img.name
    prob = chestAPI_AI.predict_disease("model.h5", imgPath)#else predict disease and generate reorot
    report = Report(Diseases="Pneumonia", Probabilities=prob)
    db.session.add(report)
    db.session.flush()
    xray = XRay(userID=Did, report=report.id, image=Dimage)
    db.session.add(xray)
    db.session.commit()
    return jsonify(
        state=True)

#Upload Image to DB
@app.route("/upload/<int:id>", methods=["POST"])
def uploadImage(id):
    pic=request.files["image"] # get input into form
    if not pic:
        return 'Picture not uploaded', 400

    filename = secure_filename(pic.filename)
    mimetype = pic.mimetype

    img = Image(img = pic.read(), name=filename, mimetype=mimetype, userID=id) #create image object type
    db.session.add(img)
    db.session.commit()
    url = "http://localhost:3000/generateReport"
    data = {}
    data['imgID'] = [{
        'id': img.id}
    ]
    with open("../frontend/public/temp.json", 'w') as outfile:
        json.dump(data, outfile)
    return (redirect(url)) #redirect to addXray page

#get Image from DB with /ID
@app.route("/getImg/<int:imgID>")
def get_img(imgID):
    img = Image.query.filter_by(id=imgID).first()
    if not img:
        return 'No Image', 404
    return Response(img.img, mimetype=img.mimetype )

#get Report from DB with /ID
@app.route("/getReport/<int:repID>")
def get_rep(repID):
    rep = Report.query.filter_by(id=repID).first()
    if not rep:
        return 'No Report', 404
    return jsonify({'disease': rep.Diseases, 'prob':rep.Probabilities})

#changePass of user logged in
@app.route("/changePass", methods=["POST"])
def change_pass():
    newEmail = request.json.get("newEmail", None)
    newPass = request.json.get("newPass", None) #get email and password that was input into the change pw form by user
    print(newPass)
    user = Users.query.filter_by(email=newEmail).first()
    if not user: #check if email exists
        return jsonify("Email doesn't exist"), 404
    user.password = newPass
    db.session.commit()#if yes then change password and commit
    return jsonify("Password Changed")

#changeProfileInfo
@app.route("/changeProfile", methods=["POST"])
def change_profile():
    newEmail = request.json.get("newEmail", None)
    newName = request.json.get("newName", None)
    newAge = request.json.get("newAge", None)
    newGender = request.json.get("newGender", None) #get Email, Name, Age, Gender passed in fetch
    user = Users.query.filter_by(email=newEmail).first() #if email exists change user info otherwise dont
    if not user:
        return jsonify("Email doesn't exist"), 404
    user.name = newName
    print(newName, newAge, newGender, newEmail)
    user.age = newAge
    user.email = newEmail
    user.gender = newGender
    db.session.commit()
    return jsonify("Info Changed")

#get Disease Treatment
@app.route("/diseaseTreatment")
def getDiseaseTreatment():
    treatmentInfo = chestAPI.disease_treatment("Pneumonia") #access api to get treatment info
    return jsonify(treatmentInfo)

#get Disease Information
@app.route("/diseaseInfo")
def getDiseaseInfo():
    treatmentInfo = chestAPI.disease_description("Pneumonia")#access api to get disease info
    return jsonify(treatmentInfo)

#delete rep
@app.route("/deleteRep", methods=["POST"])
def deleteRep():
    repID = request.json.get("repID", None)
    ray = XRay.query.filter(XRay.id==repID).first() #find and delte XRay but save img id
    rayImg = ray.image
    XRay.query.filter(XRay.id==repID).delete()
    db.session.commit()
    rep = XRay.query.filter(XRay.id==repID).first() #check if xray was deleted
    Image.query.filter(Image.id==rayImg).delete() #use img id to delete image
    db.session.commit()
    
    if not rep:
        print("deleted")
        return jsonify("Deleted")
    else:
        print("Not Deleted")
        return jsonify("Couldn't Delete Image")

# #AI Code
# @app.route("AICode")
# def get_AIStuff():

#     return (True)

if __name__ == "__main__":
    app.run(debug=True)