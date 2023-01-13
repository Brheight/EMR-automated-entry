//21ACT0000212

function phord_f(id, result){
document.getElementById("w152").checked = true //check box- true
var check_ = document.getElementById("w152")
$(check_).trigger("change") //open ajax
document.getElementById("w154").value =id
document.getElementById("w156").selectedIndex = "2" // sample type- plasma
document.getElementById("w158").selectedIndex = "2" //  indication for viral load test

if (typeof result== 'number'){
document.getElementById("w178").selectedIndex = "17"  //Alphanumeric Viral Load Result -numeric
var reslt = document.getElementById("w178")
$(reslt).trigger("change")

document.getElementById("w180").value =result //VL-RESULT
}
document.getElementById("w181").selectedIndex = "1"  //name of clinician

}





function phord_m(id, result){
document.getElementById("w148").checked = true //check box- true
var check_ = document.getElementById("w148")
$(check_).trigger("change") //open ajax
document.getElementById("w150").value =id
document.getElementById("w152").selectedIndex = "2" // sample type- plasma
document.getElementById("w154").selectedIndex = "2" //  indication for viral load test
if (typeof result=='number'){
document.getElementById("w174").selectedIndex = "17"  //Alphanumeric Viral Load Result -numeric
var reslt = document.getElementById("w174")
$(reslt).trigger("change")

document.getElementById("w176").value =result //VL-RESULT
}
document.getElementById("w177").selectedIndex = "1"  //name of clinician

}

function smcol(id){

document.getElementById("w5").selectedIndex = "4" // collected by- superuser
document.getElementById("w8").value =id

document.getElementById("w10").selectedIndex = "1" // sample type

document.getElementById("w14").selectedIndex = "2" //  indication for viral load test
document.getElementById("w16").checked = true // viral load- checked
document.getElementById("w20").selectedIndex = "1"  //ordered by- superuser
}


function cd4_f(cellCountResult,cd4Result){

if (typeof cellCountResult=='number'){
document.getElementById("w10").checked =true //CD4+ cell count (cells/mm3)	
document.getElementById("w12").value = cellCountResult // result
}
if (typeof cd4Result=='number'){
document.getElementById("w14").checked =true //   CD4 (%)	
document.getElementById("w16").value = cd4Result //result
}

document.getElementById("w179").selectedIndex =1 //superuser
}





function cd4_m(cellCountResult,cd4Result){
if (typeof cellCountResult=='number'){
document.getElementById("w10").checked =true //CD4+ cell count (cells/mm3)	
document.getElementById("w12").value = cellCountResult// result
}
if (typeof cd4Result=='number'){
document.getElementById("w14").checked=true //  CD4 (%)	
document.getElementById("w16").value =cd4Result  //result
}

document.getElementById("w175").selectedIndex =1 //superuser
}


function lab(id, result){
var li =document.getElementsByTagName("span")
var nl = []
for (const s of li){
    nl.push(s.textContent)
}
if (nl.includes("Female ")){
phord_f(id, result)
}
else{
	phord_m(id, result)
}
}


