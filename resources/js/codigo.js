
const form=document.getElementById('inputs');

function onSubmit(e){
e.preventDefault();
const nameIn=document.getElementById('nameId').value;
const lastNameIn=document.getElementById('lastNameI').value;
const cantidadIn=document.getElementById('cantidadI').value;
const priorityIn=document.getElementById('priorityI').value;
if (nameIn === '' ){alert('Ingrese Nombre')};
if (lastNameIn === '' )    {alert('Ingrese Apellido')};
if (cantidadIn === ''  )    {alert('Ingrese  C')};
if (priorityIn === '' )   {alert('Ingrese Categoria')};
if (typeof cantidadIn !== 'Number' || cantidadIn <= 0){
    alert('Cantidad : ingrese un numero');
    
    return  0;
}

let cantidad =parseInt(cantidadIn);


console.log(cantidad);


}

if (form.addEventListener('submit',onSubmit) === 0 ) { alert ('borrar')};










