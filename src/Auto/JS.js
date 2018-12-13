var MySlider = document.querySelectorAll('#slides .slide');
var currentPicture = 0;
var IntervalForChange = setInterval(nextSlide,2700);
 
function nextSlide(){
 MySlider[currentPicture].className = 'slide';
 currentPicture = (currentPicture+1)%MySlider.length;
 MySlider[currentPicture].className = 'slide showing';
}
function one() {
    var obj = document.getElementById('box-8');
    obj.style.display = "block"; 
    var objname =  document.getElementById('one');
    objname.style.display = "inline"; 
 
}   
function sortinline() {
    let oil = document.getElementById('oil');
    oil.style.display = "inline";

}   
function sortflex() {
    let oil = document.getElementById('oil');
    oil.style.display = "flex";

}   
class sae extends Component {
    render() {
      return (
    function sae() {
   document.getElementById('sae2');
    if(sae2.style.display == "none")
        sae2.style.display = "block"; 
    else 
        sae2.style.display = "none";
}   
)
}
export default sae;

function S1(){
    var x=document.getElementById('vetind').value
    if (x <= 18) {
    x=document.getElementById('vetind').value = +document.getElementById('vetind').value + 1;
   
}
    el=document.getElementById('amount').value = +document.getElementById('amount').value + 1;
    
    
}


function S2(){
    var x=document.getElementById('vetind').value
    if (x > 0) {
    x=document.getElementById('vetind').value = +document.getElementById('vetind').value - 1;
}
    var el=document.getElementById('amount').value
    if (el > 0 & x>=0) {
        el=document.getElementById('amount').value = +document.getElementById('amount').value - 1;
    }
    
}

function S3(){
    var a=document.getElementById('vetind2').value
    if (a <= 20) {
    a=document.getElementById('vetind2').value = +document.getElementById('vetind2').value + 1;
    }
    
    el=document.getElementById('amount').value = +document.getElementById('amount').value + 1;
}

function S4(){
    let a=document.getElementById('vetind2').value
    if (a > 0) {
    a=document.getElementById('vetind2').value = +document.getElementById('vetind2').value - 1;
}
    var el=document.getElementById('amount').value
    if (el > 0 & a>=0) {
    el=document.getElementById('amount').value = +document.getElementById('amount').value - 1;
}
}     
function S6(){
    var b=document.getElementById('vetind3').value
    if (b <= 9) {
    b=document.getElementById('vetind3').value = +document.getElementById('vetind3').value + 1;
    }
    
    el=document.getElementById('amount').value = +document.getElementById('amount').value + 1;
}
function S5(){
    var b=document.getElementById('vetind3').value
    if (b > 0) {
    b=document.getElementById('vetind3').value = +document.getElementById('vetind3').value - 1;
}
    var el=document.getElementById('amount').value
    if (el > 0 & b>=0) {
    el=document.getElementById('amount').value = +document.getElementById('amount').value - 1;
}

}
var s=document.getElementById('sum').value=+document.getElementById('amount').value*423;

function checked() {
    var check=document.getElementsByTagName('input');
    for(var i=0;i<check.length;i++)
    {
     if(check[i].type=='checkbox')
     {
      check[i].checked=true;
     }
    }

} 
