const opts = {
    descripcion: {
        demand: true, //demand especifica que es obligatorio
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiete la tarea'

    }
}
const argv = require('yargs')
    .command('actualizar', 'Actualiza el estado de una tarea', opts)
    .command('crear', 'Crea un elemento por hacer', opts)
    .command('borrar', 'Borrar una tarea', opts)
    .help()
    .argv;

module.exports = {
    argv
}