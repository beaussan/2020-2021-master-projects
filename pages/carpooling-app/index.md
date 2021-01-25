# AutoStop APP

The main goal of this app is tto provide people the ability to share their trips and journeys

# Used technologies

For this project i've choosed to work with **flutter** as it's a crossPLatfom language, easy to use and can develop interfaces quickly, with **Firebase** as the back

## Authentication

The first fase of the creation of this app is to create an Authentication flow:

- Subscribe with email and password
- Connect with email and password
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

## Profile page

Classic profile page with a picture of the user in the backgroud t the back
and a display for diffrent inforamations

## SearchPage

Each time users searches about a journey using the specific criterias it will be redirected to the search page That build a listview containning the results returning by Firebase

## Route Page

it's the page that can display the route and calculate the distance between the two cities in the input
