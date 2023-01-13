function reg(FIRSTNAME,LASTNAME,GENDER,AGE,phone, n){
document.getElementsByName('givenName')[0].value= FIRSTNAME
document.getElementsByName('familyName')[0].value = LASTNAME


if (GENDER=='m'){
document.getElementsByName('gender')[0].selectedIndex = '0' //male
}else{
document.getElementsByName('gender')[0].selectedIndex = '1' }//female }



document.getElementsByName('birthdateYears')[0].value= AGE


document.getElementsByName('country')[0].value= 'NIGERIA'
var country = document.getElementsByName('country')[0]
$(country).trigger("change")

document.getElementsByName('stateProvince')[0].value=  'OGUN'

document.getElementsByName('cityVillage')[0].value = 'Ado Odo/Ota'
document.getElementsByName('phoneNumber')[0].value = '0'+phone

document.getElementsByName('HospitalNumberId')[0].value = 'ACTFT-21-0'+ n
}


function hts_ml(month, code){
//male 
document.getElementById("w1").value = 'OPD/'+ month + '/0' + code
document.getElementById("preferred").checked = true
document.getElementById("w7").selectedIndex= "1"; // kind of HTS- voluntary
document.getElementById("w9").selectedIndex= "1"; // setting- vct
document.getElementById("w13").selectedIndex= "2"; // first time visit- yes
document.getElementById("w15").selectedIndex= "1"; // type of session- individual
document.getElementById("w17").selectedIndex= "5"; // referred from- OPd
document.getElementById("w19").selectedIndex= "1"; //marital status- single
document.getElementById("w25").selectedIndex= "1"; //Is client identified from an index client?	
document.getElementById("w31").selectedIndex= "1"; //Is client retesting for result verification?	
document.getElementById("w33").selectedIndex= "1"; // previously -ve- no
document.getElementById("w35").selectedIndex= "1"; // had sex b4 - yes
document.getElementById("w37").selectedIndex= "1"; // blood trans - no
document.getElementById("w39").selectedIndex= "2"; // inform abut viral trans rounte- yes
document.getElementById("w41").selectedIndex= "1"; // sex wt causal partnr- no
document.getElementById("w43").selectedIndex= "2"; // inform abt risk factors -yes
document.getElementById("w45").selectedIndex= "1"; //sex wt regular prtnr - yes
document.getElementById("w47").selectedIndex= "2"; //inform abt prevnt - yes
document.getElementById("w49").selectedIndex= "1"; //sti in last 3 mnths- no
document.getElementById("w51").selectedIndex= "2"; // inform abt possbl tst rzlt- yes
document.getElementById("w53").selectedIndex= "1"; //sex with more than 1 prtner- no
document.getElementById("w55").selectedIndex= "2"; //consent for hiv test- yes

document.getElementById("w59").selectedIndex= "1"; // cough - no
document.getElementById("w61").selectedIndex= "1"; // wight loss- no
document.getElementById("w63").selectedIndex= "1"; //fever- no
document.getElementById("w65").selectedIndex= "1"; //urethra discharge- no
document.getElementById("w67").selectedIndex= "1"; //night sweats- no
document.getElementById("w69").selectedIndex= "1"; //scrotal sweart- no
document.getElementById("w71").selectedIndex= "1"; // contact wt TB patient - no

document.getElementById("w73").selectedIndex= "1"; // genital soreness- no

document.getElementById("w79").selectedIndex= "2"; // test result- Non-reactive


document.getElementById("w93").selectedIndex= "1"; // previous test- not prev tested
document.getElementById("w95").selectedIndex= "2"; //risk red plan dev- yes
document.getElementById("w97").selectedIndex= "2"; //request rezlt form signed- yes
document.getElementById("w99").selectedIndex= "2"; //post test disclosure plan dev- yes
document.getElementById("w101").selectedIndex= "2"; //ct intake form - yes
document.getElementById("w103").selectedIndex= "1"; // wl brng partner for test- no
document.getElementById("w105").selectedIndex= "2"; // client receive test rzlt- yes
document.getElementById("w107").selectedIndex= "1"; // wl brng kids for test- no
document.getElementById("w109").selectedIndex= "2"; // post counselling test- yes
document.getElementById("w111").selectedIndex= "1"; //dual contraceptn and fp provided - no
document.getElementById("w113").selectedIndex= "2"; //use fp method- yes
document.getElementById("w115").selectedIndex= "1"; //correct condom use- no
document.getElementById("w117").selectedIndex= "2"; //use condom as fp- yes
document.getElementById("w119").selectedIndex= "1"; // condom provided- no
document.getElementById("w121").selectedIndex= "1"; //referred to other services- no
document.getElementById("w144").selectedIndex= "4"; // completed by- super user

}



function hts_mla(month, code){
//male 
document.getElementById("w1").value = 'OPD/'+ month + '/0' + code
document.getElementById("preferred").checked = true
document.getElementById("w7").selectedIndex= "1"; // kind of HTS- voluntary
document.getElementById("w9").selectedIndex= "1"; // setting- vct
document.getElementById("w13").selectedIndex= "2"; // first time visit- yes
document.getElementById("w15").selectedIndex= "1"; // type of session- individual
document.getElementById("w17").selectedIndex= "5"; // referred from- OPd
document.getElementById("w19").selectedIndex= "1"; //marital status- single
document.getElementById("w25").selectedIndex= "1"; //Is client identified from an index client?	
document.getElementById("w31").selectedIndex= "1"; //Is client retesting for result verification?	
document.getElementById("w33").selectedIndex= "1"; // previously -ve- no
document.getElementById("w35").selectedIndex= "2"; // had sex b4 - yes
document.getElementById("w37").selectedIndex= "1"; // blood trans - no
document.getElementById("w39").selectedIndex= "2"; // inform abut viral trans rounte- yes
document.getElementById("w41").selectedIndex= "1"; // sex wt causal partnr- no
document.getElementById("w43").selectedIndex= "2"; // inform abt risk factors -yes
document.getElementById("w45").selectedIndex= "2"; //sex wt regular prtnr - yes
document.getElementById("w47").selectedIndex= "2"; //inform abt prevnt - yes
document.getElementById("w49").selectedIndex= "1"; //sti in last 3 mnths- no
document.getElementById("w51").selectedIndex= "2"; // inform abt possbl tst rzlt- yes
document.getElementById("w53").selectedIndex= "1"; //sex with more than 1 prtner- no
document.getElementById("w55").selectedIndex= "2"; //consent for hiv test- yes

document.getElementById("w59").selectedIndex= "1"; // cough - no
document.getElementById("w61").selectedIndex= "1"; // wight loss- no
document.getElementById("w63").selectedIndex= "1"; //fever- no
document.getElementById("w65").selectedIndex= "1"; //urethra discharge- no
document.getElementById("w67").selectedIndex= "1"; //night sweats- no
document.getElementById("w69").selectedIndex= "1"; //scrotal sweart- no
document.getElementById("w71").selectedIndex= "1"; // contact wt TB patient - no

document.getElementById("w73").selectedIndex= "1"; // genital soreness- no

document.getElementById("w79").selectedIndex= "2"; // test result- Non-reactive


document.getElementById("w134").selectedIndex= "1"; // previous test- not prev tested
document.getElementById("w136").selectedIndex= "2"; //risk red plan dev- yes
document.getElementById("w138").selectedIndex= "2"; //request rezlt form signed- yes
document.getElementById("w140").selectedIndex= "2"; //post test disclosure plan dev- yes
document.getElementById("w142").selectedIndex= "2"; //ct intake form - yes
document.getElementById("w144").selectedIndex= "1"; // wl brng partner for test- no
document.getElementById("w146").selectedIndex= "2"; // client receive test rzlt- yes
document.getElementById("w148").selectedIndex= "1"; // wl brng kids for test- no
document.getElementById("w150").selectedIndex= "2"; // post counselling test- yes
document.getElementById("w152").selectedIndex= "1"; //dual contraceptn and fp provided - no
document.getElementById("w154").selectedIndex= "2"; //use fp method- yes
document.getElementById("w156").selectedIndex= "1"; //correct condom use- no
document.getElementById("w158").selectedIndex= "2"; //use condom as fp- yes
document.getElementById("w160").selectedIndex= "1"; // condom provided- no
document.getElementById("w162").selectedIndex= "1"; //referred to other services- no
document.getElementById("w247").selectedIndex= "4"; // completed by- super user

}

function hts_fm(month, code){
//female 
document.getElementById("w1").value = 'OPD/'+ month + '/0' + code
document.getElementById("preferred").checked = true
document.getElementById("w7").selectedIndex= "1"; // kind of HTS- voluntary
document.getElementById("w9").selectedIndex= "1"; // setting- vct
document.getElementById("w13").selectedIndex= "2"; // first time visit- yes
document.getElementById("w15").selectedIndex= "1"; // type of session- individual
document.getElementById("w17").selectedIndex= "5"; // referred from- OPD
document.getElementById("w19").selectedIndex= "1"; //marital status- single
document.getElementById("w25").selectedIndex= "1"; //Is client identified from an index client?	
document.getElementById("w31").selectedIndex= "1"; //Is client retesting for result verification?	
document.getElementById("w33").selectedIndex= "1"; // previously -ve- no
document.getElementById("w35").selectedIndex= "1"; // had sex b4 - yes
document.getElementById("w37").selectedIndex= "1"; // client pregnant test - no
document.getElementById("w39").selectedIndex= "1"; // blood trans - no
document.getElementById("w41").selectedIndex= "2"; //  inform abut viral trans rounte- yes
document.getElementById("w43").selectedIndex= "1"; // sex wt causal partnr- no
document.getElementById("w45").selectedIndex= "2"; // inform abt risk factors -yes
document.getElementById("w47").selectedIndex= "1"; // sex wt regular prtnr - yes 
document.getElementById("w49").selectedIndex= "2"; // inform abt prevnt - yes
document.getElementById("w51").selectedIndex= "1"; // sti in last 3 mnths- no
document.getElementById("w53").selectedIndex= "2"; // inform abt possbl tst rzlt- yes
document.getElementById("w55").selectedIndex= "1"; // sex with more than 1 prtner- no
document.getElementById("w57").selectedIndex= "2"; //consent for hiv test- yes

document.getElementById("w59").selectedIndex= "1"; // cough - no
document.getElementById("w61").selectedIndex= "1"; // vaginal discharge- no
document.getElementById("w63").selectedIndex= "1"; //wight loss- no
document.getElementById("w65").selectedIndex= "1"; //fever- no
document.getElementById("w67").selectedIndex= "1"; //urethra discharge- no
document.getElementById("w69").selectedIndex= "1"; //night sweats- no
document.getElementById("w71").selectedIndex= "1"; //scrotal sweart- no 

document.getElementById("w73").selectedIndex= "1"; // contact wt TB patient - no
document.getElementById("w75").selectedIndex= "1"; // genital soreness- no


document.getElementById("w81").selectedIndex= "2"; // test result- Non-reactive


document.getElementById("w95").selectedIndex= "1"; // previous test- not prev tested
document.getElementById("w97").selectedIndex= "2"; //risk red plan dev- yes
document.getElementById("w99").selectedIndex= "2"; //request rezlt form signed- yes
document.getElementById("w101").selectedIndex= "2"; //post test disclosure plan dev- yes
document.getElementById("w103").selectedIndex= "2"; //ct intake form - yes
document.getElementById("w105").selectedIndex= "1"; // wl brng partner for test- no
document.getElementById("w107").selectedIndex= "2"; // client receive test rzlt- yes
document.getElementById("w109").selectedIndex= "1"; // wl brng kids for test- no
document.getElementById("w111").selectedIndex= "2"; //post counselling test- yes
document.getElementById("w113").selectedIndex= "1"; //dual contraceptn and fp provided - no 
document.getElementById("w115").selectedIndex= "2"; //use fp method- yes
document.getElementById("w117").selectedIndex= "1"; //correct condom use- no
document.getElementById("w119").selectedIndex= "2"; //use condom as fp- yes
document.getElementById("w121").selectedIndex= "1"; //condom provided- no
document.getElementById("w123").selectedIndex= "1"; //referred to other services- no
 
document.getElementById("w208").selectedIndex= "4"; // completed by- super user

}



function hts_fma(month, code){
//female 
document.getElementById("w1").value = 'OPD/'+ month + '/0' + code
document.getElementById("preferred").checked = true
document.getElementById("w7").selectedIndex= "1"; // kind of HTS- voluntary
document.getElementById("w9").selectedIndex= "1"; // setting- vct
document.getElementById("w13").selectedIndex= "2"; // first time visit- yes
document.getElementById("w15").selectedIndex= "1"; // type of session- individual
document.getElementById("w17").selectedIndex= "5"; // referred from- OPD
document.getElementById("w19").selectedIndex= "1"; //marital status- single
document.getElementById("w25").selectedIndex= "1"; //Is client identified from an index client?	
document.getElementById("w31").selectedIndex= "1"; //Is client retesting for result verification?	
document.getElementById("w33").selectedIndex= "1"; // previously -ve- no
document.getElementById("w35").selectedIndex= "2"; // had sex b4 - yes
document.getElementById("w37").selectedIndex= "1"; // client pregnant test - no
document.getElementById("w39").selectedIndex= "1"; // blood trans - no
document.getElementById("w41").selectedIndex= "2"; //  inform abut viral trans rounte- yes
document.getElementById("w43").selectedIndex= "1"; // sex wt causal partnr- no
document.getElementById("w45").selectedIndex= "2"; // inform abt risk factors -yes
document.getElementById("w47").selectedIndex= "2"; // sex wt regular prtnr - yes 
document.getElementById("w49").selectedIndex= "2"; // inform abt prevnt - yes
document.getElementById("w51").selectedIndex= "1"; // sti in last 3 mnths- no
document.getElementById("w53").selectedIndex= "2"; // inform abt possbl tst rzlt- yes
document.getElementById("w55").selectedIndex= "1"; // sex with more than 1 prtner- no
document.getElementById("w57").selectedIndex= "2"; //consent for hiv test- yes

document.getElementById("w59").selectedIndex= "1"; // cough - no
document.getElementById("w61").selectedIndex= "1"; // vaginal discharge- no
document.getElementById("w63").selectedIndex= "1"; //wight loss- no
document.getElementById("w65").selectedIndex= "1"; //fever- no
document.getElementById("w67").selectedIndex= "1"; //urethra discharge- no
document.getElementById("w69").selectedIndex= "1"; //night sweats- no
document.getElementById("w71").selectedIndex= "1"; //scrotal sweart- no 

document.getElementById("w73").selectedIndex= "1"; // contact wt TB patient - no
document.getElementById("w75").selectedIndex= "1"; // genital soreness- no


document.getElementById("w81").selectedIndex= "2"; // test result- Non-reactive


document.getElementById("w136").selectedIndex= "1"; // previous test- not prev tested
document.getElementById("w138").selectedIndex= "2"; //risk red plan dev- yes
document.getElementById("w140").selectedIndex= "2"; //request rezlt form signed- yes
document.getElementById("w142").selectedIndex= "2"; //post test disclosure plan dev- yes
document.getElementById("w144").selectedIndex= "2"; //ct intake form - yes
document.getElementById("w146").selectedIndex= "1"; // wl brng partner for test- no
document.getElementById("w148").selectedIndex= "2"; // client receive test rzlt- yes
document.getElementById("w150").selectedIndex= "1"; // wl brng kids for test- no
document.getElementById("w152").selectedIndex= "2"; //post counselling test- yes
document.getElementById("w154").selectedIndex= "1"; //dual contraceptn and fp provided - no 
document.getElementById("w156").selectedIndex= "2"; //use fp method- yes
document.getElementById("w158").selectedIndex= "1"; //correct condom use- no
document.getElementById("w160").selectedIndex= "2"; //use condom as fp- yes
document.getElementById("w162").selectedIndex= "1"; //condom provided- no
document.getElementById("w164").selectedIndex= "1"; //referred to other services- no
 
document.getElementById("w187").selectedIndex= "4"; // completed by- super user

}
function adult_hts(month,code){
var li =document.getElementsByTagName("span")
var nl = []
for (const s of li){
    nl.push(s.textContent)
}
if (nl.includes("Female ")){
hts_fma(month, code)

}
else{
	hts_mla(month, code)

}
}

function ped_hts(month,code){
var li =document.getElementsByTagName("span")
var nl = []
for (const s of li){
    nl.push(s.textContent)
}
if (nl.includes("Female ")){
hts_fm(month, code)

}
else{
	hts_ml(month, code)

}
}

clear()

