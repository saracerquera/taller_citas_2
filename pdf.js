function generarPDF1(){

    // Variables para obtener los datos de los campos
    let inicio=document.getElementById("inicio").values;
    let salida=document.getElementById("salida").values;
    let enviar=document.getElementById("enviar").values
    let siA = document.getElementById('SiA');
    if (siA.checked == true){
        siA = "Si";
    }else{
        siA = "No";
    }

    var documentoPDF = new jsPDF();
    documentoPDF.setFontSize(20);
    documentoPDF.text(70, 15, 'paciente hospitalizado');
    documentoPDF.setFontSize(12);
    documentoPDF.text(20, 30, 'Fecha: ' + new Date());
    documentoPDF.setFontSize(15);
    documentoPDF.text(70, 40, 'paciente ' + nombre);
    documentoPDF.setFontSize(10);
    documentoPDF.text(20, 50, 'fechainicio: ' + inicio);
    documentoPDF.text(20, 60, 'fechafin: ' + salida);
    documentoPDF.text(20, 70, 'enviar: ' + enviar);
    documentoPDF.text(20, 100, 'Tú pedido fue entregado en ' + direccion);   
    documentoPDF.save('Satisfaccion');
}