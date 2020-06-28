'use strict';

// Partimos de array con notas:
const marks = [5, 4, 6, 7, 9];

// Creamos nueva array "inflatedMarks" cuyo contenido será igual que marks, pero todas las notas incrementadsa por 1
// para ello utilizamos el método map() sobre el array marks
const inflatedMarks = marks.map(mark => mark + 1);

// Aquí utilizo una función arrow pero se podría utilizar perfectamente una función anónima