function calculardias() {
    let fechainicio=new Date(document.getElementById("inicio").value);
    let fechafin=new Date(document.getElementById("salida").value);
    if (fechainicio>fechafin) {
        let fecharesultado = fechafin - fechainicio;
        alert("la cantidad de milisegundos es: " + fecharesultado);
        let dias = Math.floor((fecharesultado)/(1000*60*60*24))+1;
        alert(dias);
    }else{
        alert("fecha de inicio no puede ser mayor a la fecha de fin");
        document.getElementById("inicio").value="";
        document.getElementById("salida").value="";
    }
    

   /* let enviar=document.getElementById("enviar").value;
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
   */ 
}


