/* PROCESO DE RESOLUCIÓN:

Estrategia de resolución

Evaluación inicial:
Se comienza verificando la igualdad estricta (===) para detectar rápidamente
si ambos valores son idénticos o primitivos equivalentes.

Validación de tipos:
Se descartan casos inválidos comprobando que los valores no sean null
y que ambos pertenezcan al mismo tipo de dato.

Análisis de propiedades:
Se utiliza Object.keys() para obtener las propiedades de cada objeto,
comparando su cantidad y verificando que coincidan entre sí.

Comparación recursiva:
La función se llama a sí misma para evaluar estructuras anidadas,
permitiendo analizar objetos dentro de otros objetos.

Verificación de contenido:
Se comparan los valores directamente, evitando basarse en referencias
de memoria y enfocándose en la igualdad real de los datos.

Lógica aplicada:

La solución se basa en recursión profunda,
ideal para recorrer estructuras de datos anidadas.

En lugar de comparar referencias (lo cual puede dar resultados incorrectos
en objetos con el mismo contenido), se evalúa la igualdad estructural.

Esto garantiza que cada nivel del objeto sea validado correctamente,
devolviendo un valor booleano que indica si ambos datos son equivalentes.
*/

function deepComp(obj1, obj2) {
    // 1. Si son idénticos o valores simples, retornar true
    if (obj1 === obj2) return true;

    // 2. Si alguno no es objeto o es nulo, y no pasaron la prueba anterior, son diferentes
    if (typeof obj1 !== 'object' || obj1 === null || 
        typeof obj2 !== 'object' || obj2 === null) {
        return false;
    }

    // 3. Obtener las llaves de los objetos
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    // 4. Si no tienen la misma cantidad de propiedades, no son iguales
    if (keys1.length !== keys2.length) return false;

    // 5. Comparar cada propiedad
    for (let key of keys1) {
        // Si la propiedad no existe en el segundo objeto o su contenido es distinto (recursión)
        if (!keys2.includes(key) || !deepComp(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true;
}

// --- DATOS DE PRUEBA DE LA CAPTURA ---
let a = { x: [1, 2, 3, 4, 5], y: 0, z: { m: 'test', n: false } };
let b = { x: [1, 2, 3, 4, 5], y: 0, z: { m: 'test', n: false } };
let c = { x: [1, 2, 3, 4, 5, 6], y: 0, z: { m: 'test', n: false } };
let d = { x: [1, 2, 3, 4], y: 0, z: { m: 'test', n: false } };
let e = { x: [1, 2, 3, 4, 5], y: 0, z: { m: 'test', n: true } };
let f = { x: [1, 2, 3, 4, 5], y: -1, z: { m: 'test', n: false } };

console.log(deepComp(a, b)); // -> true
console.log(deepComp(a, c)); // -> false
console.log(deepComp(a, d)); // -> false
console.log(deepComp(a, e)); // -> false
console.log(deepComp(a, f)); // -> false