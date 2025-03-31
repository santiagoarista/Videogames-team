
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
        imgBackground,
        colisiones,
    
    
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
        this.posicionJugadorDerecha = posicionJugadorDerecha,
        this.imgBackground = imgBackground;
        this.colisiones = colisiones
    
    }
    
    
    }

class ConexionCuarto{

constructor({idConexion, idOrigen,idDestino, esConexionJefe, conexionActiva = false,posicionDestino}){
this.idConexion= idConexion
this.idOrigen = idOrigen;
this.idDestino = idDestino;
this.esConexionJefe = esConexionJefe;
this.conexionActiva = conexionActiva;
this.posicionDestino = posicionDestino;

}

}

let cuartoJefeFinal = new Cuarto(
    
        {idCuarto : 9,
        cuartoSpawn : false,
        cuartoJefeFinal : true,
        posicionJugadorSuperior : {x: 562, y: 30},
        posicionJugadorInferior :  {x: 641, y: 720},
        posicionJugadorIzquierda :{x: 97, y: 670},
        posicionJugadorDerecha :  {x: 1220, y: 235},
        colisiones:level_cuarto_final_boss,
        imgBackground: "../../game/assets/niveles_fondo/mapa_jefe_final.png"

    })

let cuartoSpawn = new Cuarto(
    
        {idCuarto : 8,
        cuartoSpawn : true,
        cuartoJefeFinal : false,
        posicionJugadorSuperior : {x: 514, y: 56},
        posicionJugadorInferior : {x: 641, y: 720},
        posicionJugadorIzquierda :{x: 97, y: 670},
        posicionJugadorDerecha :  {x: 1220, y: 235},
        colisiones:level_cuarto_spawn,
        imgBackground: "../../game/assets/niveles_fondo/cuarto_spawn.png"
    })

let cuarto1 = new Cuarto(
    
        {idCuarto : 1,
        cuartoSpawn : false,
        cuartoJefeFinal : false,
        posicionJugadorSuperior : {x: 106, y: 82},
        posicionJugadorInferior : {x: 520, y: 665},
        posicionJugadorIzquierda :{x: 90, y: 691},
        posicionJugadorDerecha :  {x: 1220, y: 691},
        colisiones:level_cuarto1,
        imgBackground: "../../game/assets/niveles_fondo/Scene1.png"
        
    })

let cuarto2 = new Cuarto(
    
        {idCuarto : 2,
        cuartoSpawn : false,
        cuartoJefeFinal : false,
         
        posicionJugadorSuperior : {x: 687, y: 150},
        posicionJugadorInferior : {x: 449, y: 680},
        posicionJugadorIzquierda :{x: 140, y: 242},
        posicionJugadorDerecha :  {x: 1120, y: 247},
         
        colisiones:level_cuarto2,
        imgBackground: "../../game/assets/niveles_fondo/Scene2.png"
    })

let cuarto3 = new Cuarto(
        {idCuarto : 3,
        cuartoSpawn : false,
        cuartoJefeFinal : false,
      
        posicionJugadorSuperior : {x: 672, y: 182},
        posicionJugadorInferior : {x: 927, y: 670},
        posicionJugadorIzquierda :{x: 191, y: 270},
        posicionJugadorDerecha :  {x: 1220, y: 691},
         
        colisiones:level_cuarto3,
        imgBackground: "../../game/assets/niveles_fondo/Scene3.png"
    })

let cuarto4 = new Cuarto(
        {idCuarto : 4,
        cuartoSpawn : false,
        cuartoJefeFinal : false,
        posicionJugadorSuperior : {x: 544, y: 30},
        posicionJugadorInferior : {x: 496, y: 670},
        posicionJugadorIzquierda :{x: 97, y: 670},
        posicionJugadorDerecha :  {x: 1120, y: 235},
        colisiones:colisionesNivel4,
        imgBackground: "../../game/assets/niveles_fondo/cuarto_giff.gif"
    })
let cuarto5 = new Cuarto(
        {idCuarto : 5,
        cuartoSpawn : false,
        cuartoJefeFinal : false,
        posicionJugadorSuperior : {x: 608, y: 171},
        posicionJugadorInferior : {x: 286, y: 690},
        posicionJugadorIzquierda :{x: 90, y: 371}, 
        posicionJugadorDerecha :  {x: 1220, y: 691},
        colisiones:level_cuarto5,
        imgBackground: "../../game/assets/niveles_fondo/Scene4.png"
    })
let cuarto6 = new Cuarto(
        {idCuarto : 6,
        cuartoSpawn : false,
        cuartoJefeFinal : false,
        posicionJugadorSuperior : {x: 673, y: 110},
        posicionJugadorInferior : {x: 560, y: 670},
        posicionJugadorIzquierda :{x: 89, y: 674},
        posicionJugadorDerecha :  {x: 1220, y: 674},
        colisiones:level_cuarto6,
        imgBackground: "../../game/assets/niveles_fondo/Scene5.png"
    })
let cuarto7 = new Cuarto(
        {idCuarto : 7,
        cuartoSpawn : false,
        cuartoJefeFinal : false,
        posicionJugadorSuperior : {x: 674, y: 175},
        posicionJugadorInferior : {x: 560, y: 670},
        posicionJugadorIzquierda :{x: 90, y: 674},
        posicionJugadorDerecha :  {x: 1250, y: 674},
        colisiones:level_cuarto7,
        imgBackground: "../../game/assets/niveles_fondo/Scene6.png"
    })
   
const cuartosOrdenados= [
    cuarto1,cuarto2,cuarto3,cuarto4,cuarto5,cuarto6,cuarto7,cuartoSpawn,cuartoJefeFinal
]
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
        cuartos[indexOrigen].conexionSuperior.posicionDestino =cuartos[indexDestino].posicionJugadorInferior;
        break;
    case "inferior":
        cuartos[indexOrigen].conexionInferior.idDestino =  cuartos[indexDestino].conexionSuperior.idOrigen;
        cuartos[indexOrigen].conexionInferior.posicionDestino =cuartos[indexDestino].posicionJugadorSuperior;
        break;        
    case "derecha":
        cuartos[indexOrigen].conexionDerecha.idDestino =  cuartos[indexDestino].conexionIzquierda.idOrigen;
        cuartos[indexOrigen].conexionDerecha.posicionDestino =cuartos[indexDestino].posicionJugadorIzquierda;
        break;        
    case "izquierda":
        cuartos[indexOrigen].conexionIzquierda.idDestino =  cuartos[indexDestino].conexionDerecha.idOrigen;
        cuartos[indexOrigen].conexionIzquierda.posicionDestino =cuartos[indexDestino].posicionJugadorDerecha;
        
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
             set_conexion_origen({direccion:"inferior",indexOrigen:index})
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
                set_conexion_origen({direccion:"superior",indexOrigen:index})
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
         set_conexion_destino({direccion:"inferior",indexOrigen:index, indexDestino:3})
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
            set_conexion_destino({direccion:"superior",indexOrigen:index, indexDestino:0})
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
//console.log("Matriz de cuartos (3x3):");
//for (let i = 0; i < cuartos.length; i += 3) {
//    const fila = cuartos.slice(i, i + 3);
//
//
//    // Imprimir las conexiones de cada cuarto
//    fila.forEach((cuarto) => {
//        console.log(`Cuarto ${cuarto.idCuarto}:`);
//        if (cuarto.conexionSuperior) {
//            console.log(`  Superior -> Origen: ${cuarto.conexionSuperior.idOrigen}, Destino: ${cuarto.conexionSuperior.idDestino}`);
//        }
//        if (cuarto.conexionInferior) {
//            console.log(`  Inferior -> Origen: ${cuarto.conexionInferior.idOrigen}, Destino: ${cuarto.conexionInferior.idDestino}`);
//        }
//        if (cuarto.conexionIzquierda) {
//            console.log(`  Izquierda -> Origen: ${cuarto.conexionIzquierda.idOrigen}, Destino: ${cuarto.conexionIzquierda.idDestino}`);
//        }
//        if (cuarto.conexionDerecha) {
//            console.log(`  Derecha -> Origen: ${cuarto.conexionDerecha.idOrigen}, Destino: ${cuarto.conexionDerecha.idDestino}`);
//        }
//    });
//}

return cuartos;
}




function generarLevels(listaNiveles) {
    const levels = {};
    listaCuartosAleatorios=[...listaNiveles]

    listaNiveles.forEach((cuarto) => {
        console.log(cuarto),
       levels[cuarto.idCuarto]  = {
       
            id: cuarto.idCuarto,
            init: () => {
                // Convertir mapa de caracteres a una matriz de listas
                colisionesConvertidas = cuarto.colisiones.parse2D();
                // Convertir la matriz de listas a una lista de clases de BloqueColision
                bloquesColisiones = colisionesConvertidas.creatObjectsFrom2d();

                player.bloquesDeColision = bloquesColisiones;
                player.puertas = puertas;

                //-----------------------------------INSTANCIAS DE CLASES----------------------------
                fondoCuarto = new Sprite({
                    position: {
                        x: 0,
                        y: 0,
                    },
                    imgResource: cuarto.imgBackground,
                });

                puertas =[];
                if (cuarto.conexionSuperior) {
                   
                    puertas.push( new Puerta({
                        position: {
                            x: 0,
                            y:-120,
                        },
                        imgResource: "../../game/assets/sprites/doors/colisionInferior.png",
                        posicionOrigen: {x: 1200, y:650},

                        idOrigen: cuarto.idCuarto,
                        idDestino: cuarto.conexionSuperior.idDestino[0],
                        puertaActiva:true,
                        posicionDestino:   cuarto.conexionSuperior.posicionDestino,
                   
                    }))
                };
                if (cuarto.conexionInferior) {
                    puertas.push( new Puerta({
                        position: {
                            x: 0,
                            y:745,
                        },
                        imgResource: "../../game/assets/sprites/doors/colisionInferior.png",
                        posicionOrigen: {x: 1200, y:650},

                        idOrigen: cuarto.idCuarto,
                        idDestino: cuarto.conexionInferior.idDestino[0],
                        puertaActiva:true,
                        posicionDestino:   cuarto.conexionInferior.posicionDestino,
                   
                    }))
                };
                if (cuarto.conexionDerecha) {
                    puertas.push( new Puerta({
                        position: {
                            x: 1330,
                            y:0,
                        },
                        imgResource: "../../game/assets/sprites/doors/colisionLateral.png",
                        posicionOrigen: {x: 1200, y:650},

                        idOrigen: cuarto.idCuarto,
                        idDestino: cuarto.conexionDerecha.idDestino[0],
                        puertaActiva:true,
                        posicionDestino:   cuarto.conexionDerecha.posicionDestino,
                   
                    }))
                }
                if (cuarto.conexionIzquierda) {
                    puertas.push( new Puerta({
                        position: {
                            x: -20,
                            y:0,
                        },
                        imgResource: "../../game/assets/sprites/doors/colisionLateral.png",
                        posicionOrigen: {x: 1200, y:650},

                        idOrigen: cuarto.idCuarto,
                        idDestino: cuarto.conexionIzquierda.idDestino[0],
                        puertaActiva:true,
                        posicionDestino:   cuarto.conexionIzquierda.posicionDestino,
                   
                    }))
                }

                player.puertas= puertas;

            },
        };
    }

);
    return levels;
}
