function comparar(){

    let one = parseFloat(document.getElementById("one").value);
    let two = parseFloat(document.getElementById("two").value);
    let three = parseFloat(document.getElementById("three").value);

    if(one > two && one > three){

        document.getElementById('mayor').value = one;

    }else if(two > one && two > three){

        document.getElementById('mayor').value = two;


    }else if(three > one && three > two){

        document.getElementById('mayor').value = three;

    }

}