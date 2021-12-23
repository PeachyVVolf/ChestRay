#This contains the functionality to get an image, run analysis on it and find how much chances of pneumonia it has

from tensorflow import keras
import numpy as np
from PIL import Image
import matplotlib.pyplot as plt

def predict_disease(filename, image_address):
    model = keras.models.load_model(filename)
    data = np.array(Image.open(image_address).resize((150,150)))
    temp = Image.fromarray(data)
    rgb_temp = temp.convert('RGB')
    plt.imshow(rgb_temp)
    final = np.array(rgb_temp)
    final = final[np.newaxis is None,:,:,:]
    final = final/255
    result = model.predict([[final]])
    return str(round(result[0][0]*100,2))+"%"

