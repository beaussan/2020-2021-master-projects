# Rasberry Monitoring

_Author : Antoine BERTHIER_

[influxdb]: ./iot/Technologies#influx-db
[telegraf]: ./iot/Technologies#telegraf
[podman]: ./iot/Technologies#podman
[centos8]: ./iot/Technologies#cent-os-8
[grafana]: ./iot/Technologies#grafana

## Introduction

Since I began in computing, I worked a lot on web technologies and on API creations. Because I worked too much on that, I wanted to see something else than code and API in that personal project. I wanted to work on infra and system administration.

My rasberry monitoring idea came from that. It was for me a good project to discover Iot technologiess such as [InfluxDB] and [Telegraf], but also deployment via [Podman] with few parts of system administration, namely the discovery of [Cent0S8]

## The project

The initial project was to get back sensor data plugged on the rasberry. However, the health situation prevented me from receving these sensor on time. I therefore changed my initial plans and decided to work on monitoring of system information which includes CPU and memory information.

For the monitoring part I wanted to use [Grafana] which is an extremely popular technology in displaying data.

## Implementation

To enable a portability, the Telegraph part that makes possible the recovery of data are in docker compose.

For the server part and the deployment of [Grafana] and [influxDB], I used a bash script that creates a `pod` and launches containers for the applications.

- The git deposit of client part : https://github.com/TheNoobProgrammeur/telegraf_client

- The git deposit of the server part : https://github.com/TheNoobProgrammeur/InfluxDB_Server

If the services were well launched and that Telegraf _seemed_ to connect well to the influxDB server, it was impossible to recover the data from [Grafana].

I thus had to change strategy in the server deployment, change that I will explain afterwards.

When all my services finally communicated well, I began to make graphs. I tested some of them, but I didn't take the time to explore the creation of the dashboard more than that.

## Complications

### Problems

After the stack implementation I observed that I didn't manage to get data back from [Grafana].

I checked the data transmission and the connexion between [telegraf] and [innfluxDB] as well as the connexion between [influxDB] and [Grafana].

I think that the mistake happened in the network interface between the [Podman] `pod` and the VM ports.

### Solution

To solve this problematic, I decided to use docker compose instead of [Podman]. In the first place Ididn't want to use docker because there were no official deposit for [Cent0S8] because `Red Hat` wanted to spotlight their technology [Podman]. Docker set up thus required to use CentOS 7 deposits. The usage of this solution was the opposite of CentOS philosophy that encourages to use official deposits.

However, there were changes in CentosOS wishes because a docker compatible setup procedure, CentOS 8 arrived arrived during my project.

I thus setup [Docker] on my CentOS server at the expense of [Podman]. It was also at the expense of one of my personal objectives which was to discover [Podman].

## Next Step

In order to finish this project, there are two important points to implement :

- Solve the problem linked to [Podman], as mentionned above.
- Use a unique table to manage rasberry's data.

## Conclusion

During this project, I was able to experience many technologies and to open myself on a new thematic. This project also enabled me to work more on system administration with Durant ce projet j'ai pu toucher de nombreuse technologie et m'ouvrir sur de nouvelle thematique. J'ai aussi pu travailler sur des tache plus administration notament avec la gestion des flux et de VM.
