let entradaGeneral = 200;
 let estudiante = 0.2; 
 let trainee = 0.5;
 let junior = 0.85;  

 const btnResumen = document.getElementById('btnResumen');
 const btnCantidad = document.getElementById('inputCantidad');
 const categoria = document.getElementById('inputCategoria');


 btnResumen.addEventListener("click", resumen);
 btnBorrar.addEventListener("click", borrar);


 function precioTotal() {
    let precio = 0;
    console.log('entre, la cagtegoria es:', categoria.value, 'la cantidad es', btnCantidad.value)
    if (categoria.value == 'Estudiante'){
        precio = 200 *estudiante * btnCantidad.value
    } else if( categoria.value == 'Trainee') {
        precio = 200 * trainee * btnCantidad.value
    } else if( categoria.value == 'Junior') {
        precio = 200 * junior * btnCantidad.value
    } else {
        precio = entradaGeneral * btnCantidad.value
    }

    console.log('entonces el precio es', precio);
	return precio;
  }

function borrar(){
	document.getElementById("total").innerHTML = '0.00';
}
function resumen(){
	document.getElementById("total").innerHTML = precioTotal()};