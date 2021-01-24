# Technology

## Grafana

[Grafana](https://grafana.com/) is a data visualisation software. It enables to make very detailed graph easily. It is easily interfacable with numerous data sources (InfluxDB, PostgreSQL; elastic, etc.)

One of its great strenghts is its community that shares a great number of preshaped modules thanks to the ease with which we can import and export dashboards.

The possibility to put actions on some graphs enables to transform Grafana into a real supervision tool.

## InfluxDB

[InfluxDB](https://www.influxdata.com/products/influxdb/) is a database management system oriented on temporal series. It enables to stock a great number of data and is optimised for queries that depend on time.

It is a database coded in GO that uses a SQL-like query syntax. Its publisher Influxdata puts other tools at its disposal that easily blend with it.

## Telegraf

[Telegraf](https://www.influxdata.com/time-series-platform/telegraf/) is also an Influxdata product. It is a connector that enables to get back, uniformise and send data to InfluxDB

Plugins are available to recover many sources. As well in [Input](https://github.com/influxdata/telegraf/tree/master/plugins/inputs) as in [Output](https://github.com/influxdata/telegraf/tree/master/plugins/outputs).

## CentOS 8

CentOS is a fork of `Red Hat` exploitation system. They are known for their symbiose. CentOS enables an access to `Red Hat` technology and philosophy (reliable and robust OS with a long support period) in open source.

It is to be noted that an announce was made that centOS 8 would be ended by the end of 2021, and that centOS philosophy would be deeply revised. Instead of a more stable version, with a long support, the new version,`CentOS Stream`, will be more a version in continuous development. Here is a link towards a video that reviews this change : https://youtu.be/oeF82IJ5R58.

## Podman

[Podman](https://podman.io/) is a containerisation manager like `Docker`. Encouraged by `Red Hat` they promise amongst other things a better security of container images. They also enable a compatibility with docker images.

## Docker

[Docker](https://www.docker.com/) is a containerisation manager like [Podman](./iot/Technologies#podman). Leader of the market, it is commonly used, like many sequencing container technologies, the same way as k8s. However, alternatives began to emerge.
