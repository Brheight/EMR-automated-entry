

function fmcr(w,a,s,c,i){
    

//FEMALE
document.getElementById("w14").value = w //weight

document.getElementById("w4").selectedIndex = '3' //1 for preg 2 for brestfd 3 for notpreg
//document.getElementById("w14").value = '14';
if (typeof a=='number'){
document.getElementById("w20").value = a;
document.getElementById("w22").value = s;
}else{
document.getElementById("w20").value = '120';
document.getElementById("w22").value = '80'; }

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

//document.querySelector('input[id="w1-display"]').readOnly = false
//document.getElementById("w1-display").value = "26/05/2021"

//document.querySelector('input[id="w170-display"]').readOnly = false
//document.getElementById("w170-display").value = "26/05/2021"

if (typeof c=='number'){
document.getElementById("w104").selectedIndex="1" // cotrim

document.getElementById("w106").selectedIndex="1" // cotrim strength- 960
}
if (typeof i=='number'){
document.getElementById("w112").selectedIndex="1" // isoniazid prophylaxis  -INH
document.getElementById("w114").selectedIndex="1" // INH strength - 300
}

}


function mlcr(w,a,s,c,i){
    //MALE
//document.getElementById("w4").selectedIndex = '3' //1 for preg 2 for brestfd 3 for notpreg
//document.getElementById("w14").value = '14';
document.getElementById("w4").value = w //weight
if (typeof a=='number'){
document.getElementById("w10").value = a;
document.getElementById("w12").value = s;
}else{
document.getElementById("w10").value = '120';
document.getElementById("w12").value = '80'; }

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

if (typeof c=='number'){
document.getElementById("w94").selectedIndex="1" // cotrim

document.getElementById("w96").selectedIndex="1" // cotrim strength- 960
}
if (typeof i=='number'){
document.getElementById("w102").selectedIndex="1" // isoniazid prophylaxis  -INH
document.getElementById("w104").selectedIndex="1" // INH strength - 300

}
}





function fmph(d,c,i){
    
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

if (typeof c=='number'){document.getElementById("w90").selectedIndex = "1" //cotrim
document.getElementById("w92").selectedIndex = "1" // cotrim strength- 960
document.getElementById("w94").selectedIndex = "1" // cotrim freq- OD
 
document.getElementById("w96").value = c //cotrim duration in days- 90
document.getElementById("w98").value = c  // cotrim Qty pres- 90
document.getElementById("w100").value = c // cotrim Qty disp -90
}
if (typeof i=='number'){
document.getElementById("w102").selectedIndex = "29" // isoniazid prophylaxis  -INH
document.getElementById("w104").selectedIndex = "4" // INH strength - 300
document.getElementById("w106").selectedIndex = "1" //IMH freq - OD

document.getElementById("w108").value = i //duration in days-90
document.getElementById("w110").value = i // Qty pres -90
document.getElementById("w112").value = i //Qty dispensed -90}

}
//document.getElementById("w200-display").value = "26/05/2021" // date ordered
//document.getElementById("w204-display").value = "26/05/2021" // date dispensed
//document.getElementById("w213-display").value = "26/05/2021" // end date
}



function mlph(d,c,i){
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

if (typeof c=='number'){document.getElementById("w88").selectedIndex = "1" //cotrim
document.getElementById("w90").selectedIndex = "1" // cotrim strength- 960
document.getElementById("w92").selectedIndex = "1" // cotrim freq- OD
 
document.getElementById("w94").value = c //cotrim duration in days- 90
document.getElementById("w96").value = c  // cotrim Qty pres- 90
document.getElementById("w98").value = c // cotrim Qty disp -90
}
if (typeof i=='number'){
document.getElementById("w100").selectedIndex = "29" // isoniazid prophylaxis  -INH
document.getElementById("w102").selectedIndex = "4" // INH strength - 300
document.getElementById("w104").selectedIndex = "1" //IMH freq - OD

document.getElementById("w106").value = i //duration in days-90
document.getElementById("w108").value = i // Qty pres -90
document.getElementById("w110").value = i //Qty dispensed -90}

}

}

function ipt(w){
//presumptive
document.getElementById("w10").selectedIndex = "1" // coughing
document.getElementById("w16").selectedIndex = "1" //fever
document.getElementById("w22").selectedIndex = "1" //weight loss
document.getElementById("w28").selectedIndex = "1" // night sweats
document.getElementById("w34").selectedIndex = "1" //contact history
if (typeof w=='number'){
document.getElementById("w58").value = w // weight
document.getElementById("w60").value = 1 // INH daily dosage
document.getElementById("w62").selectedIndex = "1" //tb symptoms
document.getElementById("w64").selectedIndex = "1" //more content
document.getElementById("w68").selectedIndex = "1" //rash
document.getElementById("w70").selectedIndex = "1" //adherence
document.getElementById("w66").selectedIndex = "1" // Neurologic Symptoms
document.getElementById("w72").selectedIndex = "1" // referred for further servi
//document.getElementById("w89").selectedIndex = "4" //signature- super user


}
else{
document.getElementById("w54").selectedIndex = "1";
 }



}


function inv(from,item, used, loses){


if (from=='anc'){
document.getElementsByClassName("ng-pristine")[1].selectedIndex = 0 //anc
}
if (from=='lab'){
document.getElementsByClassName("ng-pristine")[1].selectedIndex = 7 //vct
}

if (from=='vct'){
document.getElementsByClassName("ng-pristine")[1].selectedIndex = 17 //vct
}

if (item=='dtm'){
document.getElementsByClassName("ng-not-empty")[1].selectedIndex = 4 //determine
console.log('reacting dtm')


}
if (item=='uni'){
document.getElementsByClassName("ng-not-empty")[1].selectedIndex = 9// unigold
console.log('reacting uni')
}

document.getElementsByClassName("minimized")[0].value = used //total used
document.getElementsByClassName("minimized")[1].value = loses //total loses
document.getElementsByClassName("form-control")[0].selectedIndex = 1 // test purpose-confirmatory


//document.getElementsByClassName("ng-not-empty")[2].selectedIndex = 3 // Item Batch 
}


function care(w,a,s,c,i){
var li =document.getElementsByTagName("span")
var nl = []
for (const s of li){
    nl.push(s.textContent)
}
if (nl.includes("Female ")){
fmcr(w,a,s,c,i)
}
else{
	mlcr(w,a,s,c,i)
}
}


