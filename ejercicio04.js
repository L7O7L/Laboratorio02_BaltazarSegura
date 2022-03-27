function condicion(){

    let nota01 = parseFloat(document.getElementById("nota01").value);
    let nota02 = parseFloat(document.getElementById("nota02").value);
    let nota03 = parseFloat(document.getElementById("nota03").value);

    let suma = nota01 + nota02 + nota03;
    let promedio = suma/3;

    if (promedio >= 4){
        
        alert("Situación: Regular")
        document.getElementById('condicion').value = "Regular";

    }else {

        alert("Situación: Reprobado")
        document.getElementById('condicion').value = "Reprobado";

    }

}