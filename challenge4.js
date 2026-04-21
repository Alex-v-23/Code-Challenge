/* PROCESO DE RESOLUCIÓN:

Hoja de ruta técnica

Optimización con prototipos:
El método show se definió en el prototipo del constructor Image,
permitiendo que todas las instancias compartan la misma función
y evitando duplicación innecesaria en memoria.

Arquitectura de control:
El objeto images actúa como un gestor central,
integrando un arreglo dinámico para almacenar los objetos temporalmente.

Operaciones CRUD:
Se implementaron las funciones principales:
- add: agrega nuevos elementos.
- contains: valida si ya existen.
- edit: actualiza elementos existentes.
- delete: elimina elementos específicos.
Estas operaciones se apoyan en búsquedas por índice.

Invocación delegada:
El método de visualización general se diseñó para que el gestor
coordine la salida, llamando al método show de cada objeto.

Análisis de la lógica:

La solución se basa en la herencia prototípica,
lo que mejora la eficiencia en el uso de memoria.

El uso de métodos como .findIndex() y .splice()
permite modificar y eliminar elementos de forma precisa,
utilizando identificadores únicos como el título.

Este enfoque separa responsabilidades:
el gestor administra la colección,
mientras que cada objeto se encarga de mostrar su propia información.
*/

// --- 1. Constructor de Imágenes ---
function Image(title, artist, date) {
  this.title = title;
  this.artist = artist;
  this.date = date;
}

// Añadimos el método show al prototipo (Challenge #4)
Image.prototype.show = function () {
  console.log(`${this.title} (${this.artist}, ${this.date})`);
};

// --- 2. Objeto Gestor 'images' (Challenge #3 + #4) ---
const images = {
  list: [],

  contains: function (title) {
    return this.list.some((img) => img.title === title);
  },

  add: function (title, artist, date) {
    if (!this.contains(title)) {
      this.list.push(new Image(title, artist, date));
    }
  },

  // Nuevo método: Editar (Challenge #4)
  edit: function (title, artist, date) {
    const img = this.list.find((item) => item.title === title);
    if (img) {
      img.artist = artist;
      img.date = date;
    }
  },

  // Nuevo método: Borrar (Challenge #4)
  delete: function (title) {
    const index = this.list.findIndex((item) => item.title === title);
    if (index !== -1) {
      this.list.splice(index, 1);
    }
  },

  // Método show actualizado (Challenge #4)
  show: function () {
    this.list.forEach((img) => img.show());
  },

  clear: function () {
    this.list = [];
  },
};

// --- 3. PRUEBA DEL SCRIPT (Secuencia de la captura) ---
images.add("Mona Lisa", "Leonardo da Vinci", 1503);
images.add("The Last Supper", "Leonardo da Vinci", 1495);
images.add("The Starry Night", "Vincent van Gogh", 1889);

images.edit("Mona Lisa", "Leonardo da Vinci", 1504); // Se actualiza el año
images.delete("The Last Supper"); // Se elimina de la lista

images.show();
