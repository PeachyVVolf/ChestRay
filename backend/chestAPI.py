import requests
def disease_treatment(name):
    url = "https://disease-detection.p.rapidapi.com/disease_precaution/" + str(name)

    headers = {
        'x-rapidapi-host': "disease-detection.p.rapidapi.com",
        'x-rapidapi-key': "18dba95acamsh0244c154b700c51p142d42jsnf4be5c33589a"
        }

    response = requests.request("GET", url, headers=headers)

    return(response.text)

def disease_description(name):
    url = "https://disease-detection.p.rapidapi.com/disease_description/"+ str(name)

    headers = {
        'x-rapidapi-host': "disease-detection.p.rapidapi.com",
        'x-rapidapi-key': "18dba95acamsh0244c154b700c51p142d42jsnf4be5c33589a"
        }

    response = requests.request("GET", url, headers=headers)

    return(response.text)

disease_description("Pneumonia")
disease_treatment("Pneumonia")