document.getElementById('btn--select').addEventListener('click',function(){
  var n=document.getElementById("input").value;
  if(n>=0 && n<=85){
    if (Number.isInteger(Number(n))) {
      localStorage.setItem('n',n);
      open("Confirmation.html","_self");
    } else {
      alert("The input can only be either zero or a positive integer")
    }
  } else if(n<0){
    alert("Error!! you inputed a negative integer. n must either be zero or a positive number.");
  } else if(n>85){
    alert("The input is too large. Input must be less than or equal to 85");
  }
})




