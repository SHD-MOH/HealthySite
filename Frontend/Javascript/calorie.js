let calculatebutton=document.getElementById('calculate');
calculatebutton.addEventListener("click",()=>{

    let weight=parseFloat(document.getElementById('weigth').value);
    let height=parseFloat(document.getElementById('height').value);
    let age=parseFloat(document.getElementById('age').value);
    let sex=document.getElementById('sex').value;
    let activelevel=document.getElementById('active-level').value;
    let activeFactor=1.2;

    if(activelevel=="not active"){
        activeFactor=1.2;
    }else if(activelevel=='lightly active'){
        activeFactor=1.375;
    }else if(activelevel=='mooderately active'){
        activeFactor=1.55;
    }else if(activelevel=='very active'){
        activeFactor=1.752;
    }else if(activelevel=='extra active'){
        activeFactor=1.9;
    };

    let weightOut = document.getElementById('weightOut');
    let calorieOut=document.getElementById('calorieOut');
    let idealOut = document.getElementById('idealOut');
    let recommendedOut = document.getElementById('recommendedOut');

    weightOut.innerText=weight;
    calorieOut.innerText=currentCalorie(weight,height,age,sex,activeFactor);
    idealOut.innerText=idealWeight(height);
    let recommended=loseGain(Number(calorieOut.innerText),sex);
    recommendedOut.innerText=recommended.num;
    
    let kgunit = document.createElement('span');
    let calunit = document.createElement('span');
    let kgunit2 = document.createElement('span');
    let calunit2 = document.createElement('span');
    

    kgunit.textContent="kg";
    calunit.textContent="cal/day";
    kgunit2.textContent="kg";
    calunit2.textContent="cal/day";

    kgunit.className='h3';
    calunit.className='h3';
    kgunit2.className='h3';
    calunit2.className='h3';
    
    weightOut.appendChild(kgunit2);
    calorieOut.appendChild(calunit2);
    idealOut.appendChild(kgunit);
    recommendedOut.appendChild(calunit);
    
    if(recommended.warnning!==null){
        alert(recommended.warnning);
    }
})






function currentCalorie(weight,height,age,sex,activeFactor){
    let currentCalorie;
    if(sex=='woman'){
        currentCalorie=((10*weight)+(6.25*height)-(5*age)-161)*activeFactor;
    }
    else{
        currentCalorie=((10*weight)+(6.25*height)-(5*age)+5)*activeFactor;
    }
    return parseInt(currentCalorie);
}

function idealWeight(height){
    let ideal=21.7*((height/100)**2);
    return parseInt(ideal);
}

function loseGain(currentCalorie,sex){
    let num = currentCalorie-500;
    let warnning=null;
    if (sex=='Woman' && num<=1200){
        
            warnning='this intake is not healthy and not recomended try to be active more '
       
    }
    else if(sex!=='Woman' && num<=1500){
        
            warnning='this intake is not healthy and not recomended try to be active more '
        
    }

    return {
        num:parseInt(num),
        warnning:warnning
    };
}