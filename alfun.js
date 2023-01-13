function fmcr(){
    

//FEMALE
document.getElementById("w4").selectedIndex = '3' //1 for preg 2 for brestfd 3 for notpreg
//document.getElementById("w14").value = '14';
document.getElementById("w20").value = '120';
document.getElementById("w22").value = '80'; 
document.getElementById("w34").selectedIndex = '1'; //Working
document.getElementById("w36").selectedIndex = '1'; // WHO Clinical Stage
document.getElementById("w38").selectedIndex = '1'; //TB status
document.getElementById("w76").selectedIndex = '1'; //ARV MED PLAN
//document.getElementById("w84").selectedIndex = '1'; //ARV REGIMEN LINE
document.getElementById("w98").selectedIndex = '1'; //ARV ADHERENCE
//document.getElementById("w104").selectedIndex = '1'; // COTRIN DOSE
//document.getElementById("w106").selectedIndex = '1'; //COTRIN ADHERENCE
//document.getElementById("w112").selectedIndex = '1'; //INH DOSE
//document.getElementById("w114").selectedIndex = '1'; // INH ADHERENCE

document.getElementById("w160").checked =true

//document.getElementById("w170-display").value = "26/05/2021"
}

function mlcr(){
    //MALE
//document.getElementById("w4").selectedIndex = '3' //1 for preg 2 for brestfd 3 for notpreg
//document.getElementById("w14").value = '14';
document.getElementById("w10").value = '120';
document.getElementById("w12").value = '80'; 
document.getElementById("w24").selectedIndex = '1'; //Working
document.getElementById("w26").selectedIndex = '1'; // WHO Clinical Stage
document.getElementById("w28").selectedIndex = '1'; //TB status
document.getElementById("w66").selectedIndex = '1'; //ARV MED PLAN
//document.getElementById("w74").selectedIndex = '1'; //ARV REGIMEN LINE
document.getElementById("w88").selectedIndex = '1'; //ARV ADHERENCE
//document.getElementById("w84").selectedIndex = '1'; // COTRIN DOSE
//document.getElementById("w96").selectedIndex = '1'; //COTRIN ADHERENCE
//document.getElementById("w102").selectedIndex = '1'; //INH DOSE
//document.getElementById("w104").selectedIndex = '1'; // INH ADHERENCE

document.getElementById("w150").checked =true

//document.getElementById("w170-display").value = "26/05/2021"
}



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
//document.getElementById("w200-display").value = "26/05/2021" // date ordered
//document.getElementById("w204-display").value = "26/05/2021" // date dispensed
//document.getElementById("w213-display").value = "26/05/2021" // end date
}



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

