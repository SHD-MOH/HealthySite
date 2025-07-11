
let calculate = document.getElementById('calculate');

calculate.addEventListener("click",()=>{
   
    let height = parseFloat(document.getElementById('height').value);
    height=height/100;
    let weight = parseFloat(document.getElementById('weight').value);

    let bmi = bmicalc(height,weight);
    let bmiout = document.getElementById('bmiout');
    bmiout.innerText=bmi.toFixed(1);

    document.querySelectorAll('.highlight').forEach(highlight => {
        highlight.style.opacity = '0';
    });

    let highlightid;
    if (bmi <= 16.5) {
        highlightId = '#really-under-weight';
    } else if (bmi > 16.5 && bmi <= 18.5) {
       highlightId = '#under-weight';
    } else if (bmi > 18.5 && bmi <= 25) {
        highlightId =   '#normal-weight';
    } else if (bmi > 25 && bmi <= 30) {
        highlightId =   '#over-weight';
    } else if (bmi > 30 && bmi <= 35) {
        highlightId = '#obesty-I';
    } else {
        highlightId =  '#obesty-II';
    }
    
    document.querySelector(`${highlightId} .highlight`).style.opacity = '1';

})






function bmicalc(height,weight){
    let bmi=weight/(height*height);
    return bmi; 
}
