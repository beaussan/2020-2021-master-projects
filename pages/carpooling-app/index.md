# AutoStop APP

The main goal of this app is tto provide people the ability to share their trips and journeys

# Used technologies

For this project i've choosed to work with **flutter** as it's a crossPLatfom language, easy to use and can develop interfaces quickly, with **Firebase** as the back

## Authentication

The first fase of the creation of this app is to create an Authentication flow:
![Landing](https://i.ibb.co/fXBDVxF/Screenshot-20210125-153206.jpg)

- Subscribe with email and password
  ![Subscribe](https://i.ibb.co/wCGLpwR/SLiscreenshot-20210125-153228.jpg)
- Connect with email and password
  ![Login](https://i.ibb.co/YdcGWkS/Screenshot-20210125-153211.jpg)
- SigninWithGoogle
- i've used the silent signin so people can signin silntly even after closing the app

## Main page / Search page

the main provide the user the abillity to use search functionality based on 3 Chriterias :

- StartLocation :
- endLocation :
  - The input of the start and end location is a text field linked to a [PlacesAutocomplete widget](https://pub.dev/packages/flutter_places_autocomplete)
- StartDate using a DateTimePicker
- At the bottum i used a [SlideUpPanel](https://pub.dev/packages/sliding_up_panel) wich containes the list of Journeys posted by that user

## Post Page

The poste page is the part of the app that allows to user to post their journeys
using multipple inputs :

- StartLocation :
- endLocation :
- StartDate using a DateTimePicker
- Price inut with increment and decrement button
- number of passengers limiter to 4 persons
- Description field
- Post button

![post1](https://i.ibb.co/M96MXsd/Screenshot-20210125-153257.jpg)

## Profile page

Classic profile page with a picture of the user in the backgroud t the back
and a display for diffrent inforamations
![Profile](https://i.ibb.co/7CNs2KN/Screenshot-20210125-153246.jpg)
![post2](https://i.ibb.co/9bx1NZG/Screenshot-20210125-153301.jpg)

## SearchPage

Each time users searches about a journey using the specific criterias it will be redirected to the search page That build a listview containning the results returning by Firebase
![List1](https://i.ibb.co/Nsp84sq/Screenshot-20210125-153312.jpg)

## Route Page

it's the page that can display the route and calculate the distance between the two cities: the cities are already givin in parameter to the page.

in this page i've followed these steps :

- Use Geocoding to translate coordinates into a place address then get their Lat and Long
- Putting the markers of the cities
- Use [Polylines](https://pub.dev/packages/flutter_polyline_points) for drawing route between two places
- Calculate distance of that route:
  - to calculate the distance i didn't use the Geolocator pulgin to do it.
    it uses the haversine formula to get the distance between 2 points on a sphere.
    i used eucleudian distance between the Polylines and at the end i sum them

![Route1](https://i.ibb.co/dtB3fqn/Screenshot-20210125-153322.jpg)
![Route2](https://i.ibb.co/LtwQ4Vf/Screenshot-20210125-153336.jpg)

## Difficulties

Major difficulties i've faced is i had to take courses about the way the map API works and also for no sql databases because i've never worked with it

- Other difficulty if that i didn't know that flutter provides redy to use plugins so i lost a lot of time tying to ercreate them from scratch
- Other thing is my PC died (#smileys--emotion)

[GIT REPO](https://github.com/oussamaHJM/auto_stop)
