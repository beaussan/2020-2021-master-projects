# Rasberry Monitoring

_Author : Antoine BERTHIER_

[influxdb]: ./iot/Technologies#influx-db
[telegraf]: ./iot/Technologies#telegraf
[podman]: ./iot/Technologies#podman
[centos8]: ./iot/Technologies#cent-os-8
[grafana]: ./iot/Technologies#grafana

## Introduction

Depuis mes debut en informatique j'ai fait énormément de web. Telment que j'en ai fait une over dose. C'est pour cella que dans je projet personelle j'avait la volonté de voire autre chose que du code et des API. Je voulais travailler sur de l'infra et de l'administration systhéme.

C'est de la que mes venue l'idée de monitoring des rasberry. C'etait pour moi un bon projet pour découvrire des technologie d'IoT tel que [InfluxDB] et [Telegraf] ainsie que le deploiment via [Podman] avec quelque micro touche d'administration systhéme notament la découverte de [CentOS8]

## Le projet

Le projet initiale était de récupéré les données de capteur branché au raberry. Mais la situation sanitaire ma empecher de recevoire les capeteur à temps. Je me suis donc rabatu sur le monitoring d'information systéme notament les infos CPU et mémoire.

Pour le monitoring je voulais utiliser [Grafana] qui est une technologie extraimement populaire dans l'affichage de données.

## Mise en place

Pour permettre une portabilité la partie Telegraf et recuperation des données sont en docker compose.

Pour la partie server et le deploiment du [Grafana] et de [InfluxDB], j'utilise un script bash qui crée un `pod` et y lance les conteneur pour les applications.

- Le depot git de la partie client : https://github.com/TheNoobProgrammeur/telegraf_client

- Le depot git de la partie server : https://github.com/TheNoobProgrammeur/InfluxDB_Server

Si les services ce lancé bien et que Télégrafe _semblé_ bien ce connecter au serveur influxDB il mes Imposible de récupéré les données depuis [Grafana]

J'ai donc du faire un changement de strategie dans le deploiment server que j'explique par la suite.

Quand tous mes services ont finis par bien communiqués j'ai commencer a faire des graph. J'en ai tester quelque un mais je n'ai pas pris le temps d'explorer la création de dashbord plus que ca.

De plus je n'ai lier qu'un rasberry sur les deux qui utiliser deux tableau de BDD diferant.

## Les complications

### problème

Aprés la mise en place de la stack j'ai pu constater que je n'arriver pas a récupere les données depuis [Grafana].

J'ai verifier la transmission des donnée et la connection entre [Telegraf] et [InfluxDB] de même que [InfluxDB] et [Grafana].

Je pense que l'erreur ce produisé dans l'interface réseau entre le `pod` de [Podman] et les port de la VM.

### solution

Pour résoudre cette problématique j'ai decidé de passer sur un deploiment en docker-compse. De base je ne voulais pas utiliser Docker car il n'y avait pas de depot officiel pour [CentOS8] car `Red Hat` voulais justement mettre en avant leur technologie [Podman]. L'installation de docker passer donc par l'utilisation des depot de CentOS 7. L'utilisation de cette solution était contraire de la philosophie Centos qui encourage l'utilisation des dépot officiel.

Cependant il y a eu changement dans la volonté de CentOS car une procedure d'installation de docker compatible Centos 8 est arrivé durant mon projet.

J'ai donc installer [Docker] sur mon serveur CentOS au détriment de [Podman]. Cette solution ma couter personelment cher car l'utilisation de [Podman] était justement l'un de mes objectif.

## Next Step

Pour finir ce projet il y a deux point important a mettre en place :

- Solutioné le probléme lier a [Podman] exprimer plus haut.
- Utiliser une table unique pour géré les données des rasberry.

## Conclusion

Durant ce projet j'ai pu toucher de nombreuse technologie et m'ouvrir sur de nouvelle thematique. J'ai aussi pu travailler sur des tache plus administration notament avec la gestion des flux et de VM.
