function sumar(){

    let number01 = parseFloat(document.getElementById("number01").value);
    let number02 = parseFloat(document.getElementById("number02").value);
    let number03 = parseFloat(document.getElementById("number03").value);
    let number04 = parseFloat(document.getElementById("number04").value);
    let result = number01 + number02 + number03 + number04;

    document.getElementById('resultado').value = result;

}