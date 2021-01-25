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
#### What we learned:
- The basics of Face-api.js.
- build an face detection and recognition app using Face-api.js.
- how to use Face-api.js models.
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
#### What we learned:
- The basics of TensorFlow.js.
- build an object detection web app using TensorFlow.js.
- use COCO SSD model.
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
 For the python part we wanted to learn how to use DeepLearning and Computer Vision.
 For these two reasons we started tutorials about Opencv and Tensorflow.
 ## 1.Image Classification Tensorflow:
 The goal of this programme is to train a DeepLearning model in order to be able to classify clothing images.
 There are 10 classes (T-shirt, basketball...) and 70,000 images in 28x28 divided into two different sets, one for the test part and one for the training part.
 What we learned:
 . Review the key words of Deep learning
 . How to view and edit an image with matplotlib
 . How to evaluate a multiple classification model
 The difficulties:
 . We have already read a book about deep learning, so we was more or less familiar with the concepts mains concepts
 ## 2.Learn Opencv:
 During this period we tried to learn how to use opencv.
 So we went on the documentation (https://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_tutorials.html)
 and we started to read the different tutorials offered.
 Preferring interactive tutorials, we turned to youtube and a learning tutorial offered by freecodecamp.
 #### What we learned:
 - The basics of opencv
 - Drawing in a frame
 - Detecting faces thanks to Haar Cascade
 - Manipulate the different image transformers (blur, change the scale, draw contours...)
- Plot a picture with its pixel density curves
 #### The difficulties:
 - Geometry
 - Physics related to image processing
 ## 3.Detect Character in Video with Opencv:
 After having seen a new video on the subject, we decide to download a royalty-free film.
 So we recorded locally several faces of characters from this film on a sequence and tried to put a name on a face thanks to Opencv HaarCascade and the algo LBPHFaceRecognizer.
 #### What we learned:
 - Cutting a film
 - Using a face detection algorithm
 - Training a model
 - Save a model
 #### Difficulties:
 - Understanding the method
 - Understanding how labels work to put the right name on the right face
 ## 4. Detect If people wearing a mask or not:
 Mask wear detection here is what we tried to do for this project. we downloaded two dataset of about 400 photos with masked and unmasked people and tried to train a mask recognition model.
 The results remain bad for the moment, we don't master Opencv enough to optimize the photos processing and to modify the hyperparameters of the model.
 #### What we learned:
 - To better manipulate the images
 - Manipulating image colours
 #### Difficulties:
 - OpenCV is quite complicated
 - New and complicated things have a good start.
 - Despite some tutorial and practical reading, deep learning and computer vision is still complicated for us.
