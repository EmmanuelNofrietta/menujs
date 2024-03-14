fetch('menu.js')

.then(response => response.json())

.then(data=>{
    const menuContainer = document.getElementById('menu-container');
data.items.array.forEach(category => {
    const categoryTitle = document.createElement('h2');
    categoryTitle.textConten = category.category;
    menuContainer.appendChild(categoryTitle);

    const table = document.createElement('table');
const tablehead=<tr><th>foto</th><th>descripcion</th><th>precio</th></tr>;
let tableBody ='';
category.items.forEach(item=> {
    tableBody += <tr>
        <td><img src= " ${item.image}" alt= "{item.name}"></img></td>
        <td>${item.name}.-${item.description}</td>
        <td>${item.price}</td>
    </tr>
});
//Que hace? para cada item dentro de category.items, se concatena una nueva fila (<tr>)a tablebody. esta fila contiene una celda para la imagen del elemento, ota celda para el nombre y la descripcion del wlwmento y una tercera celda para el precio del elemento.
table.innerHtml=tablehead+tableBody;
//que hace? uma vez completadas todas las filas de la tabla para los elementos d se combina el encabezado de la tabla con el cuerpo de la tabla y se establece como el contenido html de la tabla. Finalmente, esta tabla se añade al contenedor del menu de la pagina web.
});
});
//Poblar la tabla con los elementos: Para cada item dentro de una categoria, se crea una fila (<tr></tr>) con tres celdas: una para la imagen, otra para el nombre  y descripcion del item, y una ultima para el precio, esto se hace concatenado la nueva fila a una variable.
//finalizar y mostrar la tabla: una vez que todas las filas han sido agregadas a tablebody, se establece el contenido interno de la tabla combinando el encabezado con el cuerpo. luego, esta tabla completa se agrega al contedor del menu del documento.
