#!/usr/bin/env node

const degit = require('degit');
const path = require('path');

// Nombre del repositorio (usuario/repo)
const repo = 'gaby28894178/backend_Master';

// Ruta de destino (nombre del proyecto o carpeta, pasado como argumento)
const target = process.argv[2] || 'backend_project';

console.log(`Clonando la plantilla desde ${repo} a ${target}...`);

// Crear instancia de degit
const emitter = degit(repo, { cache: false, force: true });

emitter.clone(target).then(() => {
    console.log('¡Plantilla creada con éxito!');
    console.log(`Ejecuta: cd ${target}`);
}).catch(err => {
    console.error('Error al clonar la plantilla:', err.message);
});
