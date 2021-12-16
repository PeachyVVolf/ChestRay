import os
from flask import Flask, request, jsonify, g
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import jwt_required, JWTManager, get_jwt_identity, create_access_token

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

#register
@app.route("/reg", methods=["POST"])
def create_user():
    Demail = request.json.get("email", None)
    Dpassword = request.json.get("password", None)
    Dname = request.json.get("name", None)
    Dage = request.json.get("age", None)
    Dgender = request.json.get("gender", None)

    user = Users.query.filter_by(email = Demail).first()
    if user is None:
        user = Users(name=Dname, age=Dage, gender=Dgender, email=Demail, password=Dpassword)
        db.session.add(user)
        db.session.commit()
        return jsonify(
            state=True)

    return jsonify({"msg": "Email Exists"}), 401
#login


@app.route("/token", methods=["POST"])
def create_token():
    Demail = request.json.get("email", None)
    Dpassword = request.json.get("password", None)
    if Users.query.filter_by(email = Demail).filter_by(password = Dpassword).first():
        userA = db.session.query(Users).filter_by(email = Demail).filter_by(password = Dpassword).first()
        access_token = create_access_token(identity=Demail)
        return jsonify({"access_token": access_token, "id": userA.id})

    return jsonify({"msg": "Incorrect email or password"}), 401

#display userdata
@app.route("/homedata", methods=["POST"])
def get_userData():
    Did = request.json.get("id", None)
    person = Users.query.filter_by(id=Did).first()
    return jsonify({"name": person.name, "email": person.email,
                    "gender":person.gender, "age":person.age})
    

if __name__ == "__main__":
    app.run(debug=True)