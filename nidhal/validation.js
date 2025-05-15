  function validation_infos() {
var nom = document.form_ins.nom.value ;
var ligne_nom =  document.getElementById("ligne_vide_nom");
if (nom=="") {ligne_nom.innerHTML = "please enter your last name" ; return false ; }
var prenom = document.form_ins.prenom.value ;
var ligne_prenom =  document.getElementById("ligne_vide_prenom");
if (prenom =="") {ligne_prenom.innerHTML = "please enter your first name" ; return false ;}
var email = document.form_ins.email.value ;
var ligne_email =  document.getElementById("ligne_vide_email");
if (email =="") {ligne_email.innerHTML ="please enter your email" ; return false ; }
var adress = document.form_ins.address.value ;
var ligne_address =  document.getElementById("ligne_vide_address");
if (adress ==" ") {ligne_address.innerHTML ="please enter your address" ; return false ; }

var age = document.form_ins.age.value ;
var ligne_age =  document.getElementById("ligne_vide_age");
if (age >100 || age <17) { ligne_age.innerHTML ="invalid age enter new value" ; return false ;}

var num = document.form_ins.telephone.value ;
var ligne_num =  document.getElementById("ligne_vide_telephone");
if ( isNaN (num)|| num.length !=9 && num.length!=10) { ligne_num.innerHTML ="invalid phone number enter new value " ; return false ; }
var motpass = document.form_ins.password.value ;
var ligne_password =  document.getElementById("ligne_vide_password");
var motpass1 = document.form_ins.password1.value ;
var ligne_cpassword =  document.getElementById("ligne_vide_cpassword");
if (motpass =="" ) { ligne_password.innerHTML ="please enter valid password " ; return false ;}
if (motpass1 =="" ) { ligne_cpassword.innerHTML ="please confirm your password " ; return false ;}
if (motpass.length <8 ) { ligne_password.innerHTML ="password must contain at least 8 caracters " ; return false ;} 
if (motpass != motpass1 ) { ligne_cpassword.innerHTML ="password confirmation doesn't match " ; return false ;}

var wilaya = document.form_ins.wilaya.value ;
var ligne_wilaya =  document.getElementById("ligne_vide_wilaya");
var sex = document.form_ins.sex.value ;
var ligne_sex =  document.getElementById("ligne_vide_sex");
if (wilaya == "" || wilaya == "chose") { ligne_wilaya.innerHTML ="select wilaya" ; return false ; } 

if (sex !="male" && sex!="female" ) { ligne_sex.innerHTML ="please select your sex" ; return false ; }
var sexc = confirm("confirm your sex choice : " + sex ) ;
var wilayac = confirm("confirm your wilaya choice : " + wilaya ) ;
if (wilayac == false){ return false ; }
if (sexc== false) { return false ;}

 
 }


 function validation_login() {
    var mail = document.form_login.email.value ;
    var ligne_mail =  document.getElementById("ligne_vide_mail");
    if (mail=="") {ligne_mail.innerHTML ="please enter your emil" ; return false ; }
    var motpass = document.form_login.password.value ;
    var ligne_pass =  document.getElementById("ligne_vide_pass");
    if (motpass =="") { ligne_pass.innerHTML ="please enter password" ; return false ;}
      }

function Validation_commande() {
  var col = document.getElementsByName ("color[]") ; 
  var selected = "" ;
  for (var i = 0 ; i< col.length ; i++) { 
    if (col[i].checked) {
    selected = selected + "-" + col[i].value ; } 
  } 
    var colorc = confirm("confirm your color choice : " + selected )   
if (colorec== false ) { return false ;}

amou = document.form_com.amount.value ;
var amountc = confirm("confirm amount : " + amou )   
if (amountc== false) { return false ;}


} 