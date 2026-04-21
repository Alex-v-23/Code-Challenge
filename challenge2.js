/* 
Definición del constructor:
Se creó una función constructora llamada Image, la cual utiliza la palabra clave this
para inicializar las propiedades de cada objeto.

Patrón Factory:
Se implementó una función de fábrica llamada getImage, que permite generar objetos
de forma directa, manteniendo un diseño desacoplado.

Instanciación de datos:
Se construyó el arreglo images1 utilizando el operador new, aplicándolo sobre los datos
originales mediante el método .map().

Transformación de datos:
Posteriormente, se generó un nuevo arreglo images2 a partir de images1,
empleando la función de fábrica para unificar y estandarizar la estructura de los objetos.

Salida de datos:
Finalmente, se recorrió el arreglo resultante para verificar en consola
que los objetos fueron creados correctamente.

Lógica aplicada:
La solución se basa en abstraer la creación de objetos.
Al combinar funciones constructoras con funciones de fábrica,
se logra un flujo más organizado donde cada objeto es independiente.

El uso de .map() permite transformar los datos sin modificar el arreglo original,
lo que facilita el mantenimiento y la escalabilidad del código.
*/

// 1. Función Constructora
function Image(title, artist, date) {
  this.title = title;
  this.artist = artist;
  this.date = date;
}

// 2. Funcion de "Factory"
function getImage(title, artist, date) {
  return {
    title: title,
    artist: artist,
    date: date,
  };
}

// Datos del ejercicio anterior (Base de datos)
const images = [
  { title: "Mona Lisa", artist: "Leonardo da Vinci", date: 1503 },
  { title: "The Last Supper", artist: "Leonardo da Vinci", date: 1495 },
  { title: "Starry Night", artist: "Vincent van Gogh", date: 1889 },
  // ... se asume el resto de la lista del reto anterior
];

// 3. Crear images1 usando el Constructor "new"
const images1 = images.map((img) => new Image(img.title, img.artist, img.date));

// 4. Crear images2 usando la Fabrica getImage a partir de images1
const images2 = images1.map((img) => getImage(img.title, img.artist, img.date));

// 5. Mostrar resultados
console.log("--- Contenido de images2 (Creado con Factory) ---");
images2.forEach((img) => {
  console.log(
    `Obra: ${img.title} | Artista: ${img.artist} | Fecha: ${img.date}`,
  );
});
