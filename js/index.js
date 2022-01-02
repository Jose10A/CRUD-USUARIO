const crear = function(){

  var alimento = document.getElementById("alimento").value
  var descripcion = document.getElementById("descripcion").value
  localStorage.setItem(alimento,descripcion)

  var tabla =document.getElementById("tabla");
  let fila = tabla.insertRow();
  let CellNombre = fila.insertCell(0);
  let TextNombre = document.createTextNode(alimento);
  CellNombre.appendChild(TextNombre);
  let CellDescripcion = fila.insertCell(1);
  let TextDescripcion = document.createTextNode(descripcion);
  CellDescripcion.appendChild(TextDescripcion);

  document.getElementById("alimento").value = "";
  document.getElementById("descripcion").value = "";

  let CellBorrar = fila.insertCell(2);
  let but = document.createElement("button");
  but.innerHTML = "Borrar";
  but.className = "borrar";
  but.onclick = ()=>{
    localStorage.removeItem(alimento);
    tabla.deleteRow(tabla.rows.length-1);
  }
  CellBorrar.appendChild(but);

  let Celledit = fila.insertCell(3);
  let edit =document.createElement("button");
  edit.className ="editar"
  edit.innerHTML="Editar"

  edit.onclick=()=>{

    var descripcion = document.getElementById("descripcion").value
    localStorage.setItem(alimento,descripcion)
    

    CellDescripcion.innerHTML=descripcion;
    document.getElementById("alimento").value = "";
    document.getElementById("descripcion").value = "";
  }
  Celledit.appendChild(edit);
}