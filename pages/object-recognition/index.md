# Object recognition
_Authors : Zaydane Mokni && Ariless Tir_

[![N|Solid](https://lamachinerie.org/wp-content/uploads/2019/06/github.jpg)](https://github.com/zaydane-mokni/Ac-LabM2) 
# I. JavaScript 
### 1.Face-api.js : 
In this project we used the face-api.js which is a JavaScript module implements convolutional neural networks to solve for face detection and recognition of faces and face landmarks. The face-api.js use TensorFlow.js and it’s optimized for the desktop and mobile web use.
What we already did, is to identify a person given an image of his / her face. The way we do that, is to provide one or more images for each person we want to recognize, and we save it on a local file ‘images’ labeled with the name. So, after we compare the input image to the reference data, and we find the most similar reference image. If both images are similar enough, we output the person’s name.
Depending on the requirements of our project we loaded some models that we need, the model files are available on the repo and can be found here: 
https://github.com/justadudewhohacks/face-api.js/tree/master/weights
The model files can simply be provided as static assets in your web app or you can host them somewhere else and they can be loaded by specifying the route or URL to the files.
#### Installation : 
Install the dependencies and start the server.
```sh
$ cd faceApiJS 
$ npm install
$ npm start
```
Verify the deployment by navigating to your server address in your preferred browser.
```sh
127.0.0.1:3000
```
### 2. TensorFlow.js :
In this project, we explored TensorFlow.js, and the Coco SSD model for object detection.
The task of image classification is a staple deep learning application. You feed an image to the model, and it tells you its label, so our main idea is to create a simple React web app that takes as input your webcam live video feed and sends its frames to a pre-trained COCO SSD model to detect objects on it. 
To achieve our goals, we used COCO-SSD model which is a TensorFlow.js model that aims to localize and identify multiple objects in a single image, this model detects objects defined in the COCO dataset which is a large-scale object detection, segmentation, and captioning dataset.
#### Installation : 
Start the server Python 3.
```sh
$ cd TensorflowJS  
$ python3 -m http.server
```
Start the server Python 2.
```sh
$ cd TensorflowJS  
$ python -m SimpleHTTPServer
```
Verify the deployment by navigating to your server address in your preferred browser.
```sh
127.0.0.1:8000
```

# II. Python
