//MALE
//Pharmacy Order
document.getElementById("w4").selectedIndex = '1';  //ART 
document.getElementById("w6").selectedIndex = '2'; //VIST TYPE FOLLOW UP
document.getElementById("w8").selectedIndex = '2'; //PICK UP REASON - REFIL
document.getElementById("w10").selectedIndex = '1'; //MODE OF CARE - NOT DIFF
document.getElementById("w12").selectedIndex = '3'; //MISSED DOSES -LESS THAN 3
document.getElementById("w14").selectedIndex = '2'; // ADHERE COUNS - YES
document.getElementById("w16").selectedIndex = '2'; //  AGE CAT- ADULT
//document.getElementById("w18").selectedIndex = '2'; //
//document.getElementById("w20").selectedIndex = '20';

document.getElementById("w32").selectedIndex = '1'; //DRUG - TDF-3TC-DTG
document.getElementById("w34").selectedIndex = '2'; //STRENGTH - 300/300/50
document.getElementById("w36").value = '1'; // SINGLE DOSE- 1

document.getElementById("w38").selectedIndex = '1'; // FREQ-  ON


document.getElementById("w40").value = '90'; // DURATION

document.getElementById("w42").value = '90'; // QTY PRES
document.getElementById("w44").value = '90'; // QTY DESP

function mlph(d){
    //MALE
//Pharmacy Order
document.getElementById("w4").selectedIndex = '1';  //ART
document.getElementById("w6").selectedIndex = '2'; //VIST TYPE FOLLOW UP
document.getElementById("w8").selectedIndex = '2'; //PICK UP REASON - REFIL
document.getElementById("w10").selectedIndex = '1'; //MODE OF CARE - NOT DIFF
document.getElementById("w12").selectedIndex = '3'; //MISSED DOSES -LESS THAN 3
document.getElementById("w14").selectedIndex = '2'; // ADHERE COUNS - YES
document.getElementById("w16").selectedIndex = '2'; //  AGE CAT- ADULT
//document.getElementById("w18").selectedIndex = '2'; //
//document.getElementById("w20").selectedIndex = '20';

document.getElementById("w32").selectedIndex = '1'; //DRUG - TDF-3TC-DTG
document.getElementById("w34").selectedIndex = '2'; //STRENGTH - 300/300/50
document.getElementById("w36").value = '1'; // SINGLE DOSE- 1

document.getElementById("w38").selectedIndex = '1'; // FREQ-  ON


document.getElementById("w40").value = d; // DURATION

document.getElementById("w42").value = d; // QTY PRES
document.getElementById("w44").value = d; // QTY DESP
}

