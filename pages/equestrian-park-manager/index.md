# Horse Management System

![hms_logo](./hms_icone328.png)

# introduction

Horse management system is a web application that allow Stable Supervisor to manage their stable and the Horse livery.

**link to the project**
https://github.com/BBR2394/HorseManagementSystem

## Project context

This project is a student project that took place in my Master degree at the catholic university of Lille. The goal is to make a 20 hours project, on the domain of our choice, so, I have chosen to make a web application.
The idea of this project came to me when I discuss with my family, that some existing solution to manage stable and horses in this stable, to follow their live and medication. So the final goal was to create a POC of this kind of project.

Also, the goal for me, is to develop and gain new skills in the web technologies in order to be more efficient, and more confidence too. And also to be able to start a project from scratch ; or to fully and better understand an existing project if I have to work on an existing project.

## The project : technical part

So it is a web application made with different technologies, which is composed of Two main part :
**for installation** read the README.md from the repository itself

- **the back end part** : Which is composed of a data manager and connect to the database. The technologies used is Node JS for the api management, and Postgre SQL as the database</br>
  **Why this choice ?**
  Because it is a technology I already practise, and, it is used a lot, so I wanted to improve my skill in it.
- **the front end part** : which is the user UI part to access to the application, this part communicate with the back using the api, that allow us to create different kind of front part, here, it is a web application made with Vue JS framework</br>
  **Why this choice ?** I already used this technologie too. However, it wasn't in the best condition, so, I wanted to train from scratch, all the basics in order to have better knowledge in it.
- **Database**
  The database system used is **Postgre SQL**</br>
  **Why this choice ?** - Postgre SQL is a relational database that work with almost the same SQL syntax.
  I have chosen this system because I wanted to continue to work with this syntax, in order to improve my knowledge and the general syntax.
  Postgre SQL has some advantages compare to MySQL and MariaDB
  And in my company, they used

## Project fulfillment and realization

This project allow me to progress in the web technologies chosen : Node JS and Vue JS. I discover a new CSS framework too : Bulma ; even if I couldn't take much time to create a nice user interface yet. I also train Postgre SQL request to work my knowledge in it.

I manage to create a "first draft" and a base that can support evolution and progression for this project.

The steps :
I firstly configure, and work mostly, one the back end part, because the front need to get data from the back, and some design need to be done correctly at the beginning of the project, so I create the database and the back. And so I used the software postman to make the test.

Secondly I work on the front, some basics part, with fake data and after, I connected the front to the back to get the data from this.

And finally I work on both part in turns, in order to add new functionality, or event fix some issue that happen, for example : I miss to get a specific data that I finally need from the back to the front, and in the other way too.

Until today, I manage to gain knowledge, to be more confident by creating from scratch a project, and to ush a basic project that can be improve and finally be running in a production environment.

## Issue during the realization

Some problem happened during the realization of the project

- General organization: </br> I used the hours of class more to initialize and start the project, and all the rest of the project has been done after these hours. And I had some difficulties to motivate myself to work the project all along the months
- time estimation :</br> And one of the other problem is I under estimated the time to develop the project, and all along the development, some issue and idea came that I should and must solve and implement in the project ...
- Some basic feature are not implemented yet :
  - a logging system for example.

## future evolution

Some future implementation can be done in a close future, like finished to implement the logging system.
Or even a mobile app : the goal to create an API, is to connect it with other kind of front application, and a mobile app could be very useful as new feature.
And other can be just after. However, some refactor of the code, clean up, and think about the design, should be done.

# Conclusion

Although the project is not fully done, I can continue to develop it in order to, first, just finished it, to continue to gain in knowledge.

However the first step is to clean and refactor the code, because I made some mistake and bad way to implement some feature : in the back part, for '/horse' path for the request are not made with the router, while I used it for the other routes.

Also I should add some tools to help me to develop : a CI/CD ; today CD/CI are something very useful but often forgotten in student project, so I could add one.

Finally, I am going to have another good and nice project that I could show my individual skill and knowledge for a job interview that I add to the other project made during all my student year, individual or in group.
