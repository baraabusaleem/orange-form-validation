unction myFunction() {
    var x = document.getElementById("exampleInputpassward");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }



  var email= document.forms['frm'].question.value
  var phoneNumber =document.forms['frm'].number1.value
  var passwardinput = document.forms['frm'].passwardin.value
 var email2= document.forms['frm'].question2.value
 var passwardinput= document.forms['frm'].passwardin2.value

  function IsEmpty() {
    if (document.forms['frm'].question.value === "") {
        document.getElementById("EMail").style.borderBlockColor="red"
        document.getElementById("emailerror").innerHTML='<i class="fa fa-exclamation-triangle"</i>; "The email field is required.';
    //   return false;
        let email=document.forms['frm'].question.value
    }
    if (document.forms['frm'].number1.value === "") {
        document.getElementById("exampleInputEmail12").style.borderBlockColor="red"
        document.getElementById("numbererror").innerHTML='<i class="fa fa-exclamation-triangle"</i>; "The mobile field is required.';
    //   return false;
    }
    if (document.forms['frm'].passwardin.value === "") {
        document.getElementById("exampleInputpassward").style.borderBlockColor="red"
        document.getElementById("eyeslash").style.marginTop="-14px"
        document.getElementById("passwarderror").innerHTML='<i class="fa fa-exclamation-triangle"</i>; "The Passward field is required.';
        let Passward=document.forms['frm'].passwardin.value 
      return false;
    }
     var y= document.forms['frm'].passwardin.value.length
    if ( y<8 || y>16) {
        document.getElementById("exampleInputpassward").style.borderBlockColor="red"
        document.getElementById("passwarderror").innerHTML='<i class="fa fa-exclamation-triangle"</i>; "The Passward should be between (8-16) characters';
      return false;
    }

 

     if( document.getElementById("flexCheckDefault1").checked === false) {
        document.getElementById("flexCheckDefault1").style.borderBlockColor="red"
        document.getElementById("check2").innerHTML='<i class="fa fa-exclamation-triangle"</i>; "The Terms & Conditions Not Checked"';
    //   return false;
    }

if (document.forms['frm'].question.value !== ""&& document.forms['frm'].number1.value !== ""&& document.forms['frm'].passwardin.value !== ""&& y>8 && y<16 && document.getElementById("flexCheckDefault1").checked === true){
      var data= window.localStorage.getItem("data") 
      if (data){
        data=JSON.parse(data)
        data.push([document.forms['frm'].question.value,document.forms['frm'].passwardin.value])
      }else{
        var data=[]
        data.push([document.forms['frm'].question.value,document.forms['frm'].passwardin.value])

      }
      window.localStorage.setItem("data",JSON.stringify(data))
    // window.localStorage.setItem(document.forms['frm'].question.value ,document.forms['frm'].passwardin.value)
}
  }
  
  function IsEmptyLog() {
  
    if (document.forms['frm'].question.value === "") {
        document.getElementById("EMail").style.borderBlockColor="red"
        document.getElementById("emailerror").innerHTML='<i class="fa fa-exclamation-triangle"</i>; "The email field is required.';
    //   return false;
        let email=document.forms['frm'].question.value
    }
    if (document.forms['frm'].passwardin.value === "") {
        document.getElementById("exampleInputpassward").style.borderBlockColor="red"
        document.getElementById("eyeslash").style.marginTop="-14px"
        document.getElementById("passwarderror").innerHTML='<i class="fa fa-exclamation-triangle"</i>; "The Passward field is required.';
        let Passward=document.forms['frm'].passwardin.value 
      return false;
    }
var y= document.forms['frm'].passwardin.value.length
if ( y<8 || y>16) {
    document.getElementById("exampleInputpassward").style.borderBlockColor="red"
    document.getElementById("passwarderror").innerHTML='<i class="fa fa-exclamation-triangle"</i>; "The Passward should be between (8-16) characters';
  return false;
}

 if (document.forms['frm'].question.value !== ""&& document.forms['frm'].passwardin.value !== "" ){
    var data= window.localStorage.getItem("data") 
    data=JSON.parse(data)
    for(let i=0; i<data.length; i++){
        if (document.forms['frm'].question.value==data[i][0]&& document.forms['frm'].passwardin.value ==data[i][1]){
            window.sessionStorage.setItem("hello",document.forms['frm'].question.value)
            
        }
        else if (document.forms['frm'].question.value!==data[i][0]&& document.forms['frm'].passwardin.value !==data[i][1]){
            // alert("the passward or username is incorrect!")
        }
    }
 }
  }