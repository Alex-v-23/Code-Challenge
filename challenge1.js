/* 
Para gestionar la colección de obras se utilizó un arreglo de objetos,
ya que esta estructura permite almacenar múltiples elementos manteniendo
relacionadas sus propiedades, como título, artista y año.

Para recorrer y mostrar la información, se empleó el método .forEach(),
que itera de forma sencilla sobre cada elemento del arreglo. Esto asegura
que los datos se mantengan organizados y facilita ampliar el inventario
sin necesidad de modificar la lógica de impresión en consola.
*/
const inventarioPinturas = [
  { titulo: "Mona Lisa", artista: "Leonardo da Vinci", anio: 1503 },
  { titulo: "The Last Supper", artista: "Leonardo da Vinci", anio: 1495 },
  { titulo: "Starry Night", artista: "Vincent van Gogh", anio: 1889 },
  { titulo: "The Scream", artista: "Edvard Munch", anio: 1893 },
  { titulo: "Guernica", artista: "Pablo Picasso", anio: 1937 },
  { titulo: "The Kiss", artista: "Gustav Klimt", anio: 1907 },
  {
    titulo: "Girl With a Pearl Earring",
    artista: "Johannes Vermeer",
    anio: 1665,
  },
  { titulo: "The Birth of Venus", artista: "Sandro Botticelli", anio: 1485 },
  { titulo: "Las Meninas", artista: "Diego Velázquez", anio: 1656 },
  { titulo: "The Creation of Adam", artista: "Michelangelo", anio: 1512 },
];

// Visualización de datos 
console.log("--- Inventario de Obras de Arte ---");

inventarioPinturas.forEach((pintura) => {
  console.log(
    `Obra: ${pintura.titulo} | Artista: ${pintura.artista} | Año: ${pintura.anio}`,
  );
});
