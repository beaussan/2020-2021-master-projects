# Introduction

The goal of this project was for me to learn how to develop a game on flutter.
I had no knowledge on flutter at that time and was curious of the possibility to create a game
compatible on Android and IOS.

## The idea of the game

At the start of my project, I was wondering what kind of game offline I can develop and would be interesting
for the players, then I was reminded of **Cookie clicker** :

![Alt text][id]

[id]: https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/d43fb770-96d1-11e6-a225-00163ec9f5fa/2891150878/cookie-clicker-screenshot.jpg 'Cookie clicker'

The goal of this game was to produce the largest amount of cookie possible automatically and rapidly, the players
needed to spam at the start of the game endlessly that giant cookie we can see at the center of the picture, in order later
to automate the production by using the bonus on the right corner of the screen.

I wanted my game to take some aspect of **Cookie Clicker**, so I made a quick list of what to use in it :

> **Principal goals :**
>
> - having an offline game with a level of difficulty increasing over time,
> - adding bonus items in order to help the player to pass each level with more ease,
> - allowing the player to start over the game with his item, in order to gain more money for the level he founded difficult to pass,

> **Auxiliary goals :**
>
> - synchronising the game with a database (Firecloud here), in order to update bosses, items...
> - allowing the user to share his score when he encounters a game over, the score can later be showed in a website

        which will be used for a ranking system.

## Rebirth Hero

With the possibility to start all over the game, I decided to call my game **Rebirth Hero**, I gave the application a
medieval style because I love this universe, in the links below we can see the three page of my application :

[Home screen](https://github.com/Unknow46/2020-2021-master-projects/blob/feat/rogue-like-clicker/pages/rogue-like-clicker/img/home_screen.jpg)

[Game screen](https://github.com/Unknow46/2020-2021-master-projects/blob/feat/rogue-like-clicker/pages/rogue-like-clicker/img/game_screen.jpg)

[Game over screen](https://github.com/Unknow46/2020-2021-master-projects/blob/feat/rogue-like-clicker/pages/rogue-like-clicker/img/game_over_screen.jpg)

In order to have a good display of my game I had to do some change at the start of my application :

```
dynamic main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  await SystemChrome.setPreferredOrientations([DeviceOrientation.portraitUp]).then((_) {
    runApp(const RebirthHero());
  });
}
```

In the code above I blocked the display of my screen to "portrait", because I found it easier to spam the screen that way.
I also had for goal to make my application responsive for any kind of devices, so I used two function in order to do so :

```
  double widthGame(BuildContext context) {
    return MediaQuery
        .of(context)
        .size
        .width;
  }

  double heightGame(BuildContext context) {
    return MediaQuery
        .of(context)
        .size
        .height;
  }
```

I used those two functions for the positioning of each widget in my application in order for them to not impact the game
display, the game itself is composed in two principals widgets :

```
  Widget moteurDeJeu(BuildContext context) {
    //Disposition du jeu en colonne
    return Column(
      children: <Widget>[
        game(),
        shop(),
      ],
    );
  }
```

The widget "**Game**" contains a list of widget which is the display of the assets, player and bosses, and the widget
**Shop** contains the bonus items of our player to help him defeat each boss with ease, and the rebirth button allowing
him to start over with his items acquired.

## Problems

After the setup of my local project, I wanted to add data to firecloud in order to retrieve them later on my application
for future updates (new bosses, items...), but I encounter a problem, when I was trying to call two collection references
with asynchronous function, my application retrieve the data of my first collection, but then load the game before retrieving
the second collection references, so I had to give up on that, instead at the game over screen I had an option to share
the score of the player which will show the name of the boss he lost to and his level.

## Next step

After encountering problems with the retrieval of data from firecloud with two collection, I will find first a way to
correct that, when it is done, I will create a website which will use the "**score**" collection, in order to have a
ranking system for the application, I will use it to motivate the player to try their best to be the first on the game.

## Conclusion

During this project I had the opportunity to learn how to develop on flutter, which is an amazing framework to develop
mobile application, it also posses a lot of package available on [pub.dev](https://pub.dev/), which help a lot for any
kind of application.

You can find my project APK [here](https://we.tl/t-hjmJHicDMf) , to see the current version of the game.
