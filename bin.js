#!/usr/bin/env node

const degit = require('degit');
const path = require('path');

const repo = 'gaby28894178/https://github.com/gaby28894178/backend_Master.git'; // Reemplaza con tu repositorio
const target = process.argv[2] || 'https://github.com/gaby28894178/backend_Master.git'; // Nombre del proyecto pasado como argumento

console.log(`Clonando la plantilla desde ${repo} a ${target}...`);

const emitter = degit(repo, { cache: false, force: true });
emitter.clone(target).then(() => {
    console.log('¡Plantilla creada con éxito!');
    console.log(`Ejecuta: cd ${target}`);
}).catch(err => {
    console.error('Error al clonar la plantilla:', err);
});
