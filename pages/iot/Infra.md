# L'infra du projet

![Architecture](https://raw.githubusercontent.com/TheNoobProgrammeur/InfluxDB_Server/73df9573363f2f5ca454978a58148a34a4ce8751/img/Diagramme_V1.svg)

## Les soureces : rasbery PI 3

Le rasberry est un micro ordinateur avec un OS léget. Avec de petit resource il permet cepandant des faire des action interésante. Il est par exemple courament utiliser dans le role de capeteur. C'est a cette fin que je l'utilise pour mon projet.

## Serveur : VM CentOS 8

J'ai choisis d'utiliser l'os Centos 8 pour voir ces nouvelle fonctionalité.

cepandant l'annonce de la fin de son suport durant le projet fait que si je devais refaire mes choix technologique je prendrais un autre OS.

## Deploiment par postemant

[probles]: ./#les-complications

Podman devait me permettre de deployé ma stack sur mon serveur. Pour palier l'absance d'un equivalant de docker compose j'ai crée un script pour géré le déploiment. cependant les [probles] qui j'ai rencontre mon fait passer sur du Docker.

## Utilisation de docker

Pour mes serrvice j'ai utiliser des Image docker pour les deployé notament en les orquestrant avec docker compose.
