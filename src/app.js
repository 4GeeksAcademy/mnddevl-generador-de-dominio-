// Listas de pronombres, adjetivos y sustantivos
const pronombres = ["the", "our"];
const adjetivos = ["great", "big"];
const sustantivos = ["jogger", "racoon"];
const dominio = [".com", ".net"];

// Array para almacenar los nombres de dominio generados
const nombresDeDominios = [];

// Bucles anidados para generar todas las combinaciones posibles
for (let p = 0; p < pronombres.length; p++) {
  for (let a = 0; a < adjetivos.length; a++) {
    for (let s = 0; s < sustantivos.length; s++) {
      for (let d = 0; d < dominio.length; d++) {
        nombresDeDominios.push(
          pronombres[p] + adjetivos[a] + sustantivos[s] + dominio[d]
        );
      }
    }
  }
}
console.log(nombresDeDominios);
