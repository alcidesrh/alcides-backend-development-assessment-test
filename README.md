# Backend Prueba de Evaluación de Desarrollo

A [Docker](https://www.docker.com/)-based installer and runtime for the [Symfony](https://symfony.com) web framework, with full [HTTP/2](https://symfony.com/doc/current/weblink.html), HTTP/3 and HTTPS support.

![CI](https://github.com/dunglas/symfony-docker/workflows/CI/badge.svg)

## Instalación

1. Instale Docker Compose, [install Docker Compose](https://docs.docker.com/compose/install/)
2. Ejecutar `docker-compose build --pull --no-cache` para construir imágenes frescas.
3. Ejecutar `docker-compose up`
4. Abrir en el navegador `https://localhost` aceptar el certificado TLS generado automáticamente
5. Para detener los contenedores ejecutar `docker-compose down --remove-orphans`.

## Tecnología usada

* Php 8.1
* Symfony 6.0 [Symfony](https://symfony.com)
* Api Platform 6.0 [Symfony](https://api-platform.com/)
