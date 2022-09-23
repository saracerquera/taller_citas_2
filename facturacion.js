/**
 * Funcion que crea los eventos necesarios
 */
const setEvents = () => {
    document.querySelectorAll("input").forEach(el => {
        el.removeEventListener("keyup", calcularFila);
        el.addEventListener("keyup", calcularFila);
    });
};
setEvents();
 
/**
 * Funcion para calcular el subtotal de la fila
 * Se ejecuta cada vez que se modifica un input
 */
function calcularFila() {
    const tr=this.closest("tr")
    const num=tr.querySelectorAll("input[type=number]");
    tr.querySelector(".subtotal").innerText=(parseFloat(num[0].value)*parseFloat(num[1].value) || 0).toFixed(2);
 
    calcularTotal();
    agregarFila();
}
 
/**
 * Funcion que calcula el total
 */
function calcularTotal() {
    const suma=[...document.querySelectorAll(".subtotal")].reduce((acum, el) => acum+parseFloat(el.innerText), 0);
    document.querySelector(".base").innerText=suma.toFixed(2);
    document.querySelector(".iva").innerText=(suma*.21).toFixed(2);
    document.querySelector(".total").innerText=((suma*.21)+suma).toFixed(2);
}
 

function agregarFila() {

    const tr=document.querySelectorAll("tr");
    const ultimaFila=tr[tr.length-2];
    const vacio=[...ultimaFila.querySelectorAll("input")].every(el => el.value=="");
    if (vacio==false) {
        ultimaFila.insertAdjacentElement('afterend', createTr());
        setEvents();
    }
}
 


 
 @return {object} 
function createTr() {
    
    const td1=document.createElement("td");
    const input1=document.createElement("input");
    input1.type="text";
    td1.appendChild(input1);
 
    const td2=document.createElement("td");
    const input2=document.createElement("input");
    input2.type="number";
    td2.appendChild(input2);
 
    const td3=document.createElement("td");
    const input3=document.createElement("input");
    input3.type="number";
    td3.appendChild(input3);
 
    const td4=document.createElement("td");
    td4.classList.add("subtotal");
    td4.innerText="0.00";
 
    const tr=document.createElement("tr");
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
 
    return tr;
}