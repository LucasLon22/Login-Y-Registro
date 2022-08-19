
const formularioUi = document.getElementById("formulario")

let usuarios = [];

const crearUsuarios = (nombre , email, password) => {
    const datos = {
        nombre: nombre,
        email: email,
        password: password,

    }
    usuarios.push(datos)
    return usuarios;
}


const guardarDB = () => {
    localStorage.setItem("usuarios", JSON.stringify(usuarios))

};

formularioUi.addEventListener("submit", (e) => {
    e.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    crearUsuarios(nombre, email, password)
    guardarDB();

    formularioUi.reset();
})
    

const login = () => {
    let datos = JSON.parse(localStorage.getItem("usuarios"))

    console.log(datos.nombre)

    let username = document.getElementById("username").value;
    let contrasenia = document.getElementById("contrasenia").value;



    // if (username === datos.nombre && contrasenia === datos.password) {
    //     alert("Bienvenido");
    // } else {
    //     alert("Usuario o contraseña incorrectos");
    // }

    let arrayIndex = datos.findIndex(element => (element.nombre === username && element.password === contrasenia));
    if (arrayIndex != -1) {
        alert("Bienvenido")
    } else {
        alert("Usuario o contraseña incorrecta")
    }
    
}






























// let arrayIndex = datos.findIndex(element => (element.nombre === actividad && element.password === password));
// if (arrayIndex != -1) {
//     //Lo encontró

 

// solucion de alfredo
