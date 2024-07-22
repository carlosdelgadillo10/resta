My Express Application

Una aplicación Node.js utilizando Express para realizar operaciones de resta.

 Instalación se hace con la contruccion ya que usa la de dockerhub
 Usando Docker

Construir la imagen:**

   ```bash
   docker build -t carlosdelgadillo/resta:v2 .
   docker run -d -p 8004:8004 carlosdelgadillo/resta:v2

