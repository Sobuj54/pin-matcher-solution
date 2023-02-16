function getPin(){
    const random = generatePin();
    const randomString = random + '';
    if(randomString.length === 4){
        return random;
    }
    else{
        return getPin();
    }
}

function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

// -----------event listener
document.getElementById('generate-pin').addEventListener('click',function(){
    const pin = getPin();
    
    const displayPin = document.getElementById('display-pin');
    displayPin.value = pin;
})