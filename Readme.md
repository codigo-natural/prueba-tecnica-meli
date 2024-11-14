### Mercadolibre Exam - GenAI & FFB Team

para dar solucion al primer reto al final de la solucion del algoritmo deje unos casos de uso y unos test, donde probe la funcionalidad del algoritmo.

para el reto 2 y 3 deje el archivo `.env.example` donde añadie las variables de entorno, estas variables se deberian usar en el archivo `.env` si clonas el repositorio para que funcione correctamente. 
Como base de datos use MongoDB, asi que si clonas el repositorio debes tener en cuenta traer la url de conexion de mongodb, si usas la pi que desplegue en aws hay lo podras probar sin problema, la url donde esta desplegada la api dentro de una instancia de EC2, la url de la API es la siguiente: 
[Link api](http://54.227.19.120:3000/api)

para usar la API recuerda los endpoints:

- [GET] [GET stats](http://54.227.19.120:3000/api/stats)
- [POST] [POST send dna to db](http://54.227.19.120:3000/api/mutant)
en este caso para crear por ejemplo puedes testear en postman enviando en el body de la solicitud lo siguiente: 
```JSON
{
  "dna": ["TTAG","GATG","ATTT","ATTA","AGAT"]
}
```

en el ultimo reto, use AWS para desplegar la API use un servicio de AMazon llamado Amazon Elastic Container Registry (ECR) que us servicio que permite almacenar el codigo de la api en un contenedor de Docker que luego usare en el servico de EC2 donde me permite dejar a disposicion del publico la API.


Como dato, no se pueden crear secuencias repetidas, por que estableci esa norma y dara error con un status 500, esto lo comento para que a la hora que realizes una solicitud post tengas en cuenta.
Al hacer la peticion tipo GET ya cuenta con secuencias creadas en base de datos por lo cual nos da respuesta exitosa.