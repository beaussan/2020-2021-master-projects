# Les technologie

## Grafana

[Grafana](https://grafana.com/) est un logiciel de visualisation de donné. Il permet de faire des graphe extrement détalle facilement. Il est facilment interfacable avec de noubreuse source de donnée (InfluxDB, PostgreSQL, elastic ect).

L'une de ces grande force est sa communoté qui partage un grand nombre de module preconfiguré grace a la facilité d'importé et exporter facilment les Dashboards.

La posibilité de mettre des actions sur certain graph permet de transformé Grafana en un réel outil de supervision.

## InfluxDB

[InfluxDB](https://www.influxdata.com/products/influxdb/) est un systhéme de gestion de base de donnée orientée séries temporelles. Elle permet de stocker un grand nombre de donnée et est optimisé pour le requettage en fonction du temps.

C'est une BDD codé en GO qui utilise une syntaxe de requettage SQL-like. Sont editeur Influxdata mets a disposition d'autre outil qui s'intégre facilment avec.

## Telegraf

[Telegraf](https://www.influxdata.com/time-series-platform/telegraf/) est aussi un produit de Influxdata. C'est un connecteur qui permet de recuperer, uniformiser et envoyer les données à InfluxDB.

Des plugins sont disponible pour recupérer enormement de sources. Autant en [Input](https://github.com/influxdata/telegraf/tree/master/plugins/inputs) que en [Output](https://github.com/influxdata/telegraf/tree/master/plugins/outputs).

## CentOS 8

CentOS est un fork du systhéme d'exploitation `Red Hat`. Connu pour leur symbiose. CentOS permetet d'avoir un acces a la technologie et à la philosophie `Red Hat` (OS fiable et robuste avec une longue periode de suport) en open-source.

A noter qu'il a était recament annoncer que mettre fin au support de centOS 8 fin 2021 et modifier en profondeur la philosophie de CentOS. Au lieu d'un version stable et avec un long suport la nouvelle version `CentOS Stream` sera plutot une version en developement continue. Voici un liens vers une vidéo qui fait un point sur ce changement : https://youtu.be/oeF82IJ5R58

La version CentOS 8 est sortie en septembre 2019 et elle a apporter baucoup de changement. Notament le remplacement de docker comme gestionaire de conteneur par podman. C'est principalement pour ce changement que j'ai voulu utiliser cette OS.

## Podman

[Podman](https://podman.io/) est un gestionaire de conteneurisation comme `Docker`. Pousser par `Red Hat` il preomettent notament une meilleur securité des image conteneur. Il permette aussi une comptabilité avec les images docker.

## Docker

[Docker](https://www.docker.com/) est comme [Podman](./iot/Technologies#podman) un gestionaire de conteneurisation. Leader du marcher il est courament utiliser comme de nombreuse technologier d'ordonancement de contenaire comme k8s. Cepandant des alternative commence a imergé.
