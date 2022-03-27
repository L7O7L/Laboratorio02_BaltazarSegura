function analizar(){

    let first = parseFloat(document.getElementById("first").value);
    let second = parseFloat(document.getElementById("second").value);

    if(first > second){

        let suma = first + second;
        let resta = first - second;

        document.getElementById('suma').value = suma;
        document.getElementById('resta').value = resta;
        document.getElementById('multiplicacion').value = null;
        document.getElementById('division').value = null;

    }else{

        let multiplicacion = first * second;
        let division = first/second;

        document.getElementById('suma').value = null;
        document.getElementById('resta').value = null;
        document.getElementById('multiplicacion').value = multiplicacion;
        document.getElementById('division').value = division;

    }
    
}