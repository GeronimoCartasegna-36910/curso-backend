class User {
    constructor(nombre, apellido, libros = [], mascotas = []){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas
    }
    getFullName(){
        return(`${this.nombre} ${this.apellido}`)
    }
    addMascota(name){
        this.mascotas.push(name);
        void this.mascotas
    }
    countPets(){
        return this.mascotas.length
    }
    addBook(name, author){
        this.libros.push({name : name, author : author});
        void this.libros
    }
    getBookNames(){
        let bookNames = [];
        this.libros.forEach(libro => bookNames.push(libro.name));
        return bookNames
    }
}

const usuario1 = new User('Geronimo', 'Cartasegna') // Creating new instance of User class
console.log(usuario1)
usuario1.addMascota('Perro')
usuario1.addMascota('Gato')
usuario1.addMascota('Conejo')
usuario1.addMascota('Caballo')
usuario1.addMascota('Tortuga')
console.warn('Nuevas mascotas agregadas')
console.log(usuario1)
console.log(`Cantidad de mascotas : ${usuario1.countPets()}`)
usuario1.addBook('Padre rico, Padre Pobre', 'Robert Kiyosaki y Sharon Lechter')
usuario1.addBook('It', 'Stephen King')
console.warn('Nuevos Libros Agregados')
console.log(usuario1)
console.log(`Nombres de Libros agregados : ${usuario1.getBookNames()}`)