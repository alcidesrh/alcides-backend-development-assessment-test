# Backend Prueba de Evaluación de Desarrollo

## Instalación

1. Instale Docker Compose, [install Docker Compose](https://docs.docker.com/compose/install/)
2. Ejecutar `docker-compose build --pull --no-cache` para construir imágenes frescas.
3. Ejecutar `docker-compose up`
4. Abrir en el navegador `https://localhost` aceptar el certificado TLS generado automáticamente
4. Abrir en el navegador `https://localhost/api` para ver la Api Rest documentada en Swagger [https://swagger.io/](https://swagger.io/)
6. Para detener los contenedores ejecutar `docker-compose down --remove-orphans`.

## Tecnología usada

* Php 8.1
* Symfony 6.0 [https://symfony.com](https://symfony.com)
* Api Platform 6.0 [https://api-platform.com/](https://api-platform.com/)
