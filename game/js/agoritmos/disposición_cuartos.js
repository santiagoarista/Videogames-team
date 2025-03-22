
class Cuarto{

    constructor({
        idCuarto, cuartoSpawn, cuartoJefeFinal, 
        conexionSuperior, 
        conexionInferior, 
        conexionIzquierda, 
        conexionDerecha,
        posicionJugadorSuperior, 
        posicionJugadorInferior, 
        posicionJugadorIzquierda, 
        posicionJugadorDerecha,
    
    
    } ){
        this.idCuarto = idCuarto;
        this.cuartoSpawn = cuartoSpawn;
        this.cuartoJefeFinal = cuartoJefeFinal;
        this.conexionSuperior=conexionSuperior
        this.conexionInferior=conexionInferior
        this.conexionIzquierda=conexionIzquierda
        this.conexionDerecha=conexionDerecha 
        this.posicionJugadorSuperior = posicionJugadorSuperior;
        this.posicionJugadorInferior = posicionJugadorInferior;
        this.posicionJugadorIzquierda = posicionJugadorIzquierda;
        this.posicionJugadorDerecha = posicionJugadorDerecha
    
    }
    
    
    }

class ConexionCuarto{

constructor({idConexion, idOrigen,idDestino, esConexionJefe, conexionActiva = false}){
this.idConexion= idConexion
this.idOrigen = idOrigen;
this.idDestino = idDestino;
this.esConexionJefe = esConexionJefe;
this.conexionActiva = conexionActiva;


}

}

let cuartoJefeFinal = new Cuarto(
    
        {idCuarto : 9,
        cuartoSpawn : false,
        cuartoJefeFinal : true,
        posicionJugadorSuperior : {x: 300, y: 1250},
        posicionJugadorInferior : {x: 300, y: 1250},
        posicionJugadorIzquierda :{x: 300, y: 1250},
        posicionJugadorDerecha :  {x: 300, y: 1250},})

let cuartoSpawn = new Cuarto(
    
        {idCuarto : 8,
        cuartoSpawn : true,
        cuartoJefeFinal : false,
        posicionJugadorSuperior : {x: 300, y: 1250},
        posicionJugadorInferior : {x: 300, y: 1250},
        posicionJugadorIzquierda :{x: 300, y: 1250},
        posicionJugadorDerecha :  {x: 300, y: 1250},})
let cuarto1 = new Cuarto(
    
        {idCuarto : 1,
        cuartoSpawn : false,
        cuartoJefeFinal : false,
        posicionJugadorSuperior : {x: 300, y: 1250},
        posicionJugadorInferior : {x: 300, y: 1250},
        posicionJugadorIzquierda :{x: 300, y: 1250},
        posicionJugadorDerecha :  {x: 300, y: 1250},})
let cuarto2 = new Cuarto(
    
        {idCuarto : 2,
        cuartoSpawn : false,
        cuartoJefeFinal : false,
        posicionJugadorSuperior : {x: 300, y: 1250},
        posicionJugadorInferior : {x: 300, y: 1250},
        posicionJugadorIzquierda :{x: 300, y: 1250},
        posicionJugadorDerecha :  {x: 300, y: 1250},})

let cuarto3 = new Cuarto(
        {idCuarto : 3,
        cuartoSpawn : false,
        cuartoJefeFinal : false,
        posicionJugadorSuperior : {x: 300, y: 1250},
        posicionJugadorInferior : {x: 300, y: 1250},
        posicionJugadorIzquierda :{x: 300, y: 1250},
        posicionJugadorDerecha :  {x: 300, y: 1250},})

let cuarto4 = new Cuarto(
        {idCuarto : 4,
        cuartoSpawn : false,
        cuartoJefeFinal : false,
        posicionJugadorSuperior : {x: 300, y: 1250},
        posicionJugadorInferior : {x: 300, y: 1250},
        posicionJugadorIzquierda :{x: 300, y: 1250},
        posicionJugadorDerecha :  {x: 300, y: 1250},})
let cuarto5 = new Cuarto(
        {idCuarto : 5,
        cuartoSpawn : false,
        cuartoJefeFinal : false,
        posicionJugadorSuperior : {x: 300, y: 1250},
        posicionJugadorInferior : {x: 300, y: 1250},
        posicionJugadorIzquierda :{x: 300, y: 1250},
        posicionJugadorDerecha :  {x: 300, y: 1250},})
let cuarto6 = new Cuarto(
        {idCuarto : 6,
        cuartoSpawn : false,
        cuartoJefeFinal : false,
        posicionJugadorSuperior : {x: 300, y: 1250},
        posicionJugadorInferior : {x: 300, y: 1250},
        posicionJugadorIzquierda :{x: 300, y: 1250},
        posicionJugadorDerecha :  {x: 300, y: 1250},})
let cuarto7 = new Cuarto(
        {idCuarto : 7,
        cuartoSpawn : false,
        cuartoJefeFinal : false,
        posicionJugadorSuperior : {x: 300, y: 1250},
        posicionJugadorInferior : {x: 300, y: 1250},
        posicionJugadorIzquierda :{x: 300, y: 1250},
        posicionJugadorDerecha :  {x: 300, y: 1250},})
   

function crear_disposicion_cuartos() {
    let cuartos = [cuarto1, cuarto2, cuarto3, cuarto4, cuarto5, cuarto6, cuarto7, cuartoSpawn, cuartoJefeFinal];

    // Posiciones permitidas para cuartoJefeFinal
    const posicionesPermitidas = [0, 2, 6, 8];

    // Seleccionar una posición aleatoria para cuartoJefeFinal
    const posicionJefe = posicionesPermitidas[Math.floor(Math.random() * posicionesPermitidas.length)];

    // Sacar cuartoJefeFinal de la lista
    cuartos = cuartos.filter((cuarto) => cuarto !== cuartoJefeFinal);

    // Mezclar aleatoriamente los demás cuartos
    cuartos.sort(() => Math.random() - 0.5);

    // Insertar cuartoJefeFinal en la posición seleccionada
    cuartos.splice(posicionJefe, 0, cuartoJefeFinal);

    
function set_conexion_origen({ direccion, indexOrigen}){
    let conexion = new ConexionCuarto(
        {idConexion:`${cuartos[indexOrigen].idCuarto}${direccion}`,
        });
        conexion.idOrigen = conexion.idConexion;
        conexion.conexionActiva = true;
        conexion.esConexionJefe= cuartos[indexOrigen].cuartoJefeFinal;
        
switch (direccion) {
    case "superior":
    
        cuartos[indexOrigen].conexionSuperior = conexion;
        break;
    case "inferior":
        cuartos[indexOrigen].conexionInferior = conexion;
        break;        
    case "derecha":
        cuartos[indexOrigen].conexionDerecha = conexion;
        break;        
    case "izquierda":
        cuartos[indexOrigen].conexionIzquierda = conexion;
        
        break;            
    default:
        break;
}



}


function set_conexion_destino({ direccion, indexOrigen, indexDestino}){

        
switch (direccion) {
    case "superior":
    
        cuartos[indexOrigen].conexionSuperior.idDestino =  cuartos[indexDestino].conexionInferior.idOrigen;
        break;
    case "inferior":
        cuartos[indexOrigen].conexionInferior.idDestino =  cuartos[indexDestino].conexionSuperior.idOrigen;
        break;        
    case "derecha":
        cuartos[indexOrigen].conexionDerecha.idDestino =  cuartos[indexDestino].conexionIzquierda.idOrigen;
        break;        
    case "izquierda":
        cuartos[indexOrigen].conexionIzquierda.idDestino =  cuartos[indexDestino].conexionDerecha.idOrigen;
        
        break;            
    default:
        break;
}



}
//Conexiones de origen
    for (let index = 0; index < cuartos.length; index++) {
        
        switch (index) {
            case 0:
             set_conexion_origen({direccion:"derecha",indexOrigen:index})
                break;
            case 1:
                set_conexion_origen({direccion:"izquierda",indexOrigen:index})
                set_conexion_origen({direccion:"derecha",indexOrigen:index})
                break;
            case 2:
                set_conexion_origen({direccion:"izquierda",indexOrigen:index})
                set_conexion_origen({direccion:"inferior",indexOrigen:index})
                    break;   
            case 3:
                set_conexion_origen({direccion:"derecha",indexOrigen:index})
                set_conexion_origen({direccion:"inferior",indexOrigen:index})
            break;     
            case 4:
                set_conexion_origen({direccion:"izquierda",indexOrigen:index})
                set_conexion_origen({direccion:"derecha",indexOrigen:index})
            break;   
            case 5:
                set_conexion_origen({direccion:"superior",indexOrigen:index})
                set_conexion_origen({direccion:"izquierda",indexOrigen:index})
                set_conexion_origen({direccion:"inferior",indexOrigen:index})
            break;  
            case 6:
                set_conexion_origen({direccion:"superior",indexOrigen:index})
                set_conexion_origen({direccion:"derecha",indexOrigen:index})
            break;    
            case 7:
                set_conexion_origen({direccion:"izquierda",indexOrigen:index})
                set_conexion_origen({direccion:"derecha",indexOrigen:index})
            break;    
            case 8:
                set_conexion_origen({direccion:"superior",indexOrigen:index})
                set_conexion_origen({direccion:"izquierda",indexOrigen:index})
            break;   
                 
            default:
                break;
        }
        
    }
//Conexiones de Destino
for (let index = 0; index < cuartos.length; index++) {
        
    switch (index) {
        case 0:
         set_conexion_destino({direccion:"derecha",indexOrigen:index, indexDestino:1})
            break;
        case 1:
            set_conexion_destino({direccion:"izquierda",indexOrigen:index, indexDestino:0})
            set_conexion_destino({direccion:"derecha",indexOrigen:index, indexDestino:2})
            break;
        case 2:
            set_conexion_destino({direccion:"izquierda",indexOrigen:index, indexDestino:1})
            set_conexion_destino({direccion:"inferior",indexOrigen:index, indexDestino:5})
    
                break;   
        case 3:
            set_conexion_destino({direccion:"derecha",indexOrigen:index, indexDestino:4})
            set_conexion_destino({direccion:"inferior",indexOrigen:index, indexDestino:6})
 
        break;     
        case 4:
            set_conexion_destino({direccion:"izquierda",indexOrigen:index, indexDestino:3})
            set_conexion_destino({direccion:"derecha",indexOrigen:index, indexDestino:5})
        break;   
        case 5:
            set_conexion_destino({direccion:"superior",indexOrigen:index, indexDestino:2})
            set_conexion_destino({direccion:"izquierda",indexOrigen:index, indexDestino:4})
            set_conexion_destino({direccion:"inferior",indexOrigen:index, indexDestino:8})

        break;  
        case 6:
            set_conexion_destino({direccion:"superior",indexOrigen:index, indexDestino:3})
            set_conexion_destino({direccion:"derecha",indexOrigen:index, indexDestino:7})
          
        break;    
        case 7:
            set_conexion_destino({direccion:"izquierda",indexOrigen:index, indexDestino:6})
            set_conexion_destino({direccion:"derecha",indexOrigen:index, indexDestino:8})

        break;    
        case 8:
            set_conexion_destino({direccion:"superior",indexOrigen:index, indexDestino:5})
            set_conexion_destino({direccion:"izquierda",indexOrigen:index, indexDestino:7})

        break;   
             
        default:
            break;
    }
    
}
// Imprimir como matriz de 3x3 con atributos y conexiones detalladas
console.log("Matriz de cuartos (3x3):");
for (let i = 0; i < cuartos.length; i += 3) {
    const fila = cuartos.slice(i, i + 3);


    // Imprimir las conexiones de cada cuarto
    fila.forEach((cuarto) => {
        console.log(`Cuarto ${cuarto.idCuarto}:`);
        if (cuarto.conexionSuperior) {
            console.log(`  Superior -> Origen: ${cuarto.conexionSuperior.idOrigen}, Destino: ${cuarto.conexionSuperior.idDestino}`);
        }
        if (cuarto.conexionInferior) {
            console.log(`  Inferior -> Origen: ${cuarto.conexionInferior.idOrigen}, Destino: ${cuarto.conexionInferior.idDestino}`);
        }
        if (cuarto.conexionIzquierda) {
            console.log(`  Izquierda -> Origen: ${cuarto.conexionIzquierda.idOrigen}, Destino: ${cuarto.conexionIzquierda.idDestino}`);
        }
        if (cuarto.conexionDerecha) {
            console.log(`  Derecha -> Origen: ${cuarto.conexionDerecha.idOrigen}, Destino: ${cuarto.conexionDerecha.idDestino}`);
        }
    });
}
return cuartos;
}

crear_disposicion_cuartos();

