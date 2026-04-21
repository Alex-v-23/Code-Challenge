/* 
Gestor centralizado:
Se creó un objeto llamado images que funciona como administrador del inventario,
integrando tanto los datos como la lógica en una sola estructura.

Estado del sistema:
Se definió la propiedad list como un arreglo interno donde se almacenan
dinámicamente los objetos de arte.

Métodos principales:
Se implementaron funciones específicas para cada operación:
- contains: verifica si un elemento ya existe.
- add: inserta nuevos elementos de forma segura.
- show: recorre y muestra la información almacenada.
- clear: reinicia el estado del arreglo.

Consistencia de datos:
Se reutilizó el constructor Image para asegurar que cada elemento
mantenga la misma estructura.

Lógica aplicada:
La solución se basa en el encapsulamiento, agrupando funciones y datos
dentro de un mismo objeto para controlar mejor su uso.

Además, el método add utiliza validaciones para evitar duplicados,
lo que permite mantener un inventario ordenado, consistente y fácil de escalar.
*/

// Mantenemos el constructor del ejercicio anterior
function Image(title, artist, date) {
    this.title = title;
    this.artist = artist;
    this.date = date;
}

// Objeto administrador de imágenes
const images = {
    list: [],

    // Verifica si la imagen existe por título
    contains: function(title) {
        return this.list.some(img => img.title === title);
    },

    // Añade una imagen si no existe previamente
    add: function(title, artist, date) {
        if (!this.contains(title)) {
            const newImage = new Image(title, artist, date);
            this.list.push(newImage);
        } else {
            console.log(`La obra "${title}" ya se encuentra en el inventario.`);
        }
    },

    // Muestra todas las imágenes
    show: function() {
        if (this.list.length === 0) {
            console.log("El inventario está vacío.");
        } else {
            this.list.forEach(img => {
                console.log(`Título: ${img.title} | Artista: ${img.artist} | Año: ${img.date}`);
            });
        }
    },

    // Vacía la lista por completo
    clear: function() {
        this.list = [];
        console.log("Inventario limpiado con éxito.");
    }
};

// PRUEBA DEL SCRIPT (Secuencia de prueba)
images.add("Mona Lisa", "Leonardo da Vinci", 1503);
images.add("Starry Night", "Vincent van Gogh", 1889);
images.add("Mona Lisa", "Leonardo da Vinci", 1503); // Intento de duplicado
images.show();
images.clear();
images.show();