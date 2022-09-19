function calculardias() {
    let fechainicio=document.getElementById("inicio").values;
    let fechafin=document.getElementById("salida").values;
    let enviar=document.getElementById("enviar").values;
    let calculardias = inicio + ":" + salida + ":" + enviar;

    if(fechafin>fechainicio){
        alert("la fecha de inicio debe ser menor que la fecha de fin");    
    }
    if (fechainicio=fechafin) {
        alert("usted tubo 1 dia de hospitalizacion")     
    }
    if(fechainicio>fechafin){
        alert("")
    }
    if (calculardias) {
        alert("")
    }
    
}