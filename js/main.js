
 /* ENTREGA 1 */

// let mineral = prompt ("Ingrese el nombre del mineral que quiera compra - PARA FINALIZAR ESCRIBA SALIR EN MAYUSCULAS")
// let totalMineral = 0
// let listaMinerales = " "

// function saludar(){
//     console.log("Hola, gracias por comprar en minerales S.A")
// }

// while(mineral !== "SALIR") {
//     let precioMineral = parseFloat(prompt("Ingrese el precio del mineral")) 
//         if (precioMineral <=0) 
//         {
//             alert("El precio del mineral no puede ser menor o igual a 0")
//             while(precioMineral <= 0 ){
//                 precioMineral = parseFloat(prompt("Ingrese el precio del mineral"))
//             } 
//         }
//         totalMineral = totalMineral + precioMineral
//         listaMinerales = listaMinerales + ", " + mineral

//     mineral = prompt ("Ingrese el nombre del mineral que quiera compra - PARA FINALIZAR ESCRIBA SALIR EN MAYUSCULAS")
// }
// saludar()
// console.log( "El total a pagar es $" + totalMineral )
// console.log ("Minerales comprados" + listaMinerales)




/* ENTREGA 2*/


// class cliente {
//     constructor(nombre, saldo) {
//         this.nombre = nombre
//         this.saldo = saldo
//     }

//     retirar(monto){
//         this.saldo = this.saldo - monto
//     }
//     depositar(monto){
//         this.saldo = this.saldo + monto
//     }

// }

//     function clienteExiste (nombre){
//         return clientes.some ( (el) => el.nombre.toLowerCase() === nombre.toLowerCase() )
//     }


//     function transfiereD(){
//        let clienteQueTransfiere = prompt ("Ingrese su nombre")

//        while (!clienteExiste(clienteQueTransfiere)){
//         alert("El nombre ingresado no es valido")

//         clienteQueTransfiere = prompt ("Vuelva a ingrese su nombre")
//        }
    

//         let clienteRecibe = prompt ("Ingrese el nombre de la persona que va a recibir el dinero")
 
//         while (!clienteExiste(clienteRecibe)){
//          alert("El nombre ingresado no es valido")
 
//          clienteRecibe = prompt ("Vuelva a ingrese el nombre")
//         }



//         let montoTransferencia = parseFloat(prompt("Ingrese el monto a tranferir"))

//         while (montoTransferencia <= 0 || montoTransferencia > clienteQueTransfiere.saldo ){
//             alert ("Valor invalido")
//             montoTransferencia = parseFloat(prompt("Ingrese el monto a tranferir"))
//         }



//         const cTransfiere = clientes.find ( (el) => el.nombre.toLowerCase() === clienteQueTransfiere.toLowerCase())
//         const cRecibe = clientes.find ( (el) => el.nombre.toLowerCase() === clienteRecibe.toLowerCase() )

//         clienteQueTransfiere.retirar(montoTransferencia)
//         clienteRecibe.depositar(montoTransferencia)
        
//     }

//     function consulta(){
//         const cliente = clienteExiste ("Ingrese el nombre del cliente que quiere saber el nombre")
//         alert ("Su saldo es de $" + cliente.saldo)
//     }
//     function suma(){
//         const saldosuma = cliente.saldo + ingreso
//     }
//     function ingreso (){
//         const cliente = clienteExiste ("Ingrese el monto que quiere ingresar")
//         alert ("Su nuevo saldo es de $" + suma )
//     }


// const clientes = [
//     new cliente ("Camilo", 5000),
//     new cliente ("Nadia", 7000),
//     new cliente ("Graciela", 3500),
//     new cliente ("Alejandro", 4000),
// ]
// let opciones = "ingrese el numero de la opcion a realizar. 1- Consulte su saldo, 2- Realizar transferencia, 3- Ingresar dinero, 4-retirar dinero, 0- salir"
// let tranfer = parseInt(prompt(opciones))

// while( tranfer !== 0){
//     switch ( tranfer ){
//         case 1:
//             consultaD()
//             break
        
//         case 2: 
//             transfiereD()
//             break
        
//         case 3: 
//             ingresaD()
//             break

//         case 4: 
//             retiraD()
//             break
        
//         case 0: console.log ("Muchas Gracias por utilizar nuestra billetera virtual")
//         break
//     }
//     tranfer = parseInt(prompt(opciones)) 
// }



/* ENTREGA 3 */

class Asiento {
    constructor (id){
        this.id = id
    }

    generarHTML(){
        return <div class="asiento"></div>
    }
}

function renderizarAsientos(){
    divAsientos.innerHTML = "";
    for(const filaAsientos of asientos) {
        const divFila = document.createElement("div")
        divFila.className ="fila"

        for(const idAsiento of filaAsientos){
            const asiento = new Asiento(idAsiento)
            divFila.innerHTML += asiento.generarHTML()
        }
        divAsientos.append(divFila)
    }
}



const divAsientos = document.getElementById("asientos")
const asientos = [
    ["A1", "A2", "A3", "A4", "A5", "A6"],
    ["B1", "B2", "B3", "B4", "B5", "B6"],
    ["C1", "C2", "C3", "C4", "C5", "C6"],
    ["D1", "D2", "D3", "D4", "D5", "D6"],
    ["E1", "E2", "E3", "E4", "E5", "E6"],
    ["F1", "F2", "F3", "F4", "F5", "F6"],
    ["G1", "G2", "G3", "G4", "G5", "G6"],
]

renderizarAsientos()