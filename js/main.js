let mineral = prompt ("Ingrese el nombre del mineral que quiera compra - PARA FINALIZAR ESCRIBA SALIR EN MAYUSCULAS")
let totalMineral = 0
let listaMinerales = " "

function saludar(){
    console.log("Hola, gracias por comprar en minerales S.A")
}

while(mineral !== "SALIR") {
    let precioMineral = parseFloat(prompt("Ingrese el precio del mineral")) 
        if (precioMineral <=0) 
        {
            alert("El precio del mineral no puede ser menor o igual a 0")
            while(precioMineral <= 0 ){
                precioMineral = parseFloat(prompt("Ingrese el precio del mineral"))
            } 
        }
        totalMineral = totalMineral + precioMineral
        listaMinerales = listaMinerales + ", " + mineral

    mineral = prompt ("Ingrese el nombre del mineral que quiera compra - PARA FINALIZAR ESCRIBA SALIR EN MAYUSCULAS")
}
saludar()
console.log( "El total a pagar es $" + totalMineral )
console.log ("Minerales comprados" + listaMinerales)