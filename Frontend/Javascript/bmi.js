
let calculate = document.getElementById('calculate');

calculate.addEventListener("click",()=>{
   
    let height = parseFloat(document.getElementById('height').value);
    height=height/100;
    let weight = parseFloat(document.getElementById('weight').value);

    let bmi = bmicalc(height,weight);

    let bmiout = document.getElementById('bmiout');
    bmiout.innerText=bmi.toFixed(1);

    let haighlight = document.getElementById('heightlight-none');



    if(bmi<=16.5){
        haighlight.id='highlight-really-under-weight';
    }else if(bmi>16.5 && bmi<=18.5){
        haighlight.id='highlight-under-weight';
    }else if(bmi>18.5 && bmi<=25){
        haighlight.id='highlight-normal-weight';
    }else if(bmi>25 && bmi<=30){
        haighlight.id='highlight-over-weight';
    }else if(bmi>30 && bmi<=35){
        haighlight.id='highlight-obesty1-weight';
    }else{
        haighlight.id='highlight-obesty2-weight';
    }
    
    
})






function bmicalc(height,weight){
    let bmi=weight/(height*height);
    return bmi; 
}
