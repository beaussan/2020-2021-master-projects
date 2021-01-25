![Logo](https://i.postimg.cc/mk0VQ4v6/Screenshot-20210124-181145.png)

# Gameplay

## Objectives

The project consists of a 2D multiplayer mini-game running on LAN.  
One game is played by teams, 2 teams appear at the respective ends of the map and have to compete against each other.  
A player has 3 health points and the ability to throw bombs with an explosion range. Getting hit by a bomb causes the loss of one hit point. When a player loses all his health points, he is out of the game.

**To start a game :**  
A player creates the game from the main menu and becomes host of the game.  
The other players will have access to this game via the lobby.

**To win a game, the objectives are simple:**

- Eliminate the players by throwing bombs at them.
- All the players on a team have reached the opposing side alive.

**There are several ways to lose:**

- All the players of a team have fallen off the map.
- All the players of a team have lost all their health points.

## Controls

The player can move in 2 directions, jump and throw bombs:

- Right ( right_arrow )
- Left ( left_arrow )
- Jump ( spacebar )
- Throwing a bomb ( a )

# Development

## Game engine

The development of the game is based on the Godot game engine, an open source game engine that was born on the self-financing platform : Patreon.
The engine allows us to develop in C# and/or GDScript, the native language of the engine. The GDScript syntax is close to that of Python and is mainly used for POC, testing and Quick-and-Dirty projects. As Godot is still under development and improvement, the C# support is not complete or coherently integrated. Our choice is therefore oriented towards GDScript.
Godot being open source no royalty is to be paid.

## Graphics

Creating our own graphic resources and visual identity would have taken too much time, so we turned to royalty-free resources corresponding to our vision, available on sites such as Itch.io

## Network

The player wishing to create a game hosts the server, the players can then join it and become clients of the server. The peers communicate with each other via RPC.  
Besides supplying an RPC and remote member variable set implementation, Godot adds the concept of network masters and puppets.

**Network master:** The network master of a node is the peer that has the ultimate authority over it.

This allows us to synchronise the server and the clients with each other.

# External resource

**Project Gitlab :** https://gitlab.com/bransle/do-not-stop-me-now ( Ask permission to access the project )  
**Godot documentation :** https://docs.godotengine.org/en/stable/index.html  
**Godot Patreon :** https://www.patreon.com/godotengine  
**Itch.io assets :** https://pixelfrog-store.itch.io/pirate-bomb

# Feedback

## Problem encountered

We wanted to use C# to have a more structured and typed project, unfortunately this slowed down the development because it added a layer of abstraction. We switched to GDScript to produce the project in the time allotted.
We also had everything to learn from the Godot engine, we started from scratch.

## The successes

It was a real pleasure to discover the problems of video games and to use a game engine. We managed to build the first alpha and be able to test it. It also allowed us to dissect certain problems, such as the functioning of the physics or the network.

## What we learned

In addition to the Godot game engine and the GDScript language, the problems of programming a video game are diverse and sometimes quite subtle, we were able to deepen our knowledge on the synchronisation of a server and the clients, the physics of a game engine.
