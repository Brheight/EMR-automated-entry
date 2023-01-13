
//FEMALE

//Pharmacy Order
document.getElementById("w4").selectedIndex = '1';  //ART 
document.getElementById("w6").selectedIndex = '2'; //VIST TYPE FOLLOW UP
document.getElementById("w8").selectedIndex = '2'; //PREG STAT -NOT PREG
document.getElementById("w10").selectedIndex = '2'; //PICK UP REASON - REFIL
document.getElementById("w12").selectedIndex = '1'; //MODE OF CARE - NOT DIFF
document.getElementById("w14").selectedIndex = '3'; // MISSED DOSES -LESS THAN 3
document.getElementById("w16").selectedIndex = '2'; // ADHERE COUNS - YES
document.getElementById("w18").selectedIndex = '2'; // AGE CAT- ADULT
//document.getElementById("w20").selectedIndex = '20';

document.getElementById("w34").selectedIndex = '1'; //DRUG - TDF-3TC-DTG
document.getElementById("w36").selectedIndex = '2'; //STRENGTH - 300/300/50
document.getElementById("w38").value = '1'; // SINGLE DOSE- 1

document.getElementById("w40").selectedIndex = '1'; // FREQ-  ON


document.getElementById("w42").value = '90'; // DURATION

document.getElementById("w44").value = '90'; // QTY PRES
document.getElementById("w46").value = '90'; // QTY DESP
//document.getElementById("w200-display").value = "26/05/2021" // date ordered
//document.getElementById("w204-display").value = "26/05/2021" // date dispensed
//document.getElementById("w213-display").value = "26/05/2021" // end date




//use function below with duration parameter as 'd'


function fmph(d){
    
//FEMALE

//Pharmacy Order
document.getElementById("w4").selectedIndex = '1';  //ART
document.getElementById("w6").selectedIndex = '2'; //VIST TYPE FOLLOW UP
document.getElementById("w8").selectedIndex = '2'; //PREG STAT -NOT PREG
document.getElementById("w10").selectedIndex = '2'; //PICK UP REASON - REFIL
document.getElementById("w12").selectedIndex = '1'; //MODE OF CARE - NOT DIFF
document.getElementById("w14").selectedIndex = '3'; // MISSED DOSES -LESS THAN 3
document.getElementById("w16").selectedIndex = '2'; // ADHERE COUNS - YES
document.getElementById("w18").selectedIndex = '2'; // AGE CAT- ADULT
//document.getElementById("w20").selectedIndex = '20';

document.getElementById("w34").selectedIndex = '1'; //DRUG - TDF-3TC-DTG
document.getElementById("w36").selectedIndex = '2'; //STRENGTH - 300/300/50
document.getElementById("w38").value = '1'; // SINGLE DOSE- 1

document.getElementById("w40").selectedIndex = '1'; // FREQ-  ON


document.getElementById("w42").value = d; // DURATION

document.getElementById("w44").value = d; // QTY PRES
document.getElementById("w46").value = d; // QTY DESP
document.getElementById("w200-display").value = "26/05/2021" // date ordered
document.getElementById("w204-display").value = "26/05/2021" // date dispensed
document.getElementById("w213-display").value = "26/05/2021" // end date
}



