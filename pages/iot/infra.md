# Infrastructure of the project

![Architecture](https://raw.githubusercontent.com/TheNoobProgrammeur/InfluxDB_Server/73df9573363f2f5ca454978a58148a34a4ce8751/img/Diagramme_V1.svg)

## Sources : rasberry PI 3

Rasberry is a microcomputer with a light OS. WIth little resources it enables however to make interesting actions. It is for instance commonly used as a sensor.It is for this purpose that I am using it in my project.

## Serveur : VM CentOS 8

I chose to use the OS centOS 8 to see these new functionalities.

However, the annouce of the end of its support during the project as the consequence that if I had to do my technological choices again, I would take another OS.

## Deployment by postemant

[problems]: ./#les-complications

Podman should have enabled me to deploy my stack on my server. To level the absence of an equivalent docker compose, I created a script to manage the deployment. However, the [problems] I encountered forced me to use docker.

## Utilisation deof docker

For my services, I used docker images to deploy them, in particular by orchestrating them with docker compose.
