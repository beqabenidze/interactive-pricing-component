const line = document.querySelector('.line');
const number = document.querySelector('number');
const checkbox = document.querySelector('.checkbox');
const pageviews = document.querySelector('.pageviews');
const period = document.querySelector('.period');


line.addEventListener("input", rangeValue);
checkbox.addEventListener("click", rangeValue);


function rangeValue(){
    fillLower();
    if(checkbox.checked){
        number.innerHTML = `$${line.value * 9}.00`;
        period.innerHTML = '/ year';
    }else{
        number.innerHTML = `$${line.value}.00`;
        period.innerHTML = '/ month';
    }
    switch(line.value){
        case '8':
            pageviews.innerHTML = '10K PAGEVIEWS';
            break;
        case '12':
            pageviews.innerHTML = '50K PAGEVIEWS';
            break;
        case '16':
            pageviews.innerHTML = '100K PAGEVIEWS';
            break;
        case '20':
            pageviews.innerHTML = '200K PAGEVIEWS';
            break;
        case '24':
            pageviews.innerHTML = '500K PAGEVIEWS';
            break;
        default:
            pageviews.innerHTML = '10K PAGEVIEWS';
    }  
}


function fillLower(){
    let fillLower = (line.value - 8) / (line.max - line.min) * 100;
    line.style.background = `linear-gradient(to right, 
        hsl(174, 77%, 80%) 0%, 
        hsl(174, 77%, 80%) ${fillLower}%, 
        hsl(224, 65%, 95%) ${fillLower}%, 
        hsl(224, 65%, 95%) 100%)`;
}