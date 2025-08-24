document.getElementById("fromBtn").addEventListener("click", function(e){
    e.preventDefault()
  const mobileNumber= +8801714357052;
  const pinNumber= 4301;
  const mobileNumberValue=document.getElementById("phoneNumber").value;
  const mobileNumberValueConverted=parseInt(mobileNumberValue);

  const pinNumberValue=document.getElementById("pinNumber").value;
  const pinNumberValueConverted=parseInt(pinNumberValue);

  //console.log(mobileNumberValueConverted, pinNumberValueConverted);

  if(mobileNumberValueConverted===mobileNumber && pinNumberValueConverted===pinNumber){
   window.location.href='./home.html'
  }else{
    alert("invalid pin number")
  }

})