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
// ------------
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
// ------------
// calculator
document.getElementById('calculator').addEventListener('click',function(event){
    const number = event.target.innerText;
    const typedNumbers = document.getElementById('typed-numbers');
    const previousTypedNumbers = typedNumbers.value;
    // isNaN means is not an number
    if(isNaN(number)){
        if(number === 'C'){
            typedNumbers.value = '';
        }
        else{
            if(number === '<'){
                const splitString = previousTypedNumbers.split('');
                splitString.pop();
                const jointString = splitString.join('');
                typedNumbers.value = jointString;
            }
        }
    }
   else{ 
    const currentNumbers = previousTypedNumbers + number ;
    typedNumbers.value = currentNumbers ;
   }
})
// ------------
document.getElementById('varify-pin').addEventListener('click',function(){
    const displayPin = document.getElementById('display-pin');
    const displayPinValue = displayPin.value ;

    const typedNumbers = document.getElementById('typed-numbers');
    const typedNumbersValue = typedNumbers.value;
    typedNumbers.value = '';

    const pinSuccess = document.getElementById('pin-success');
    const pinFailure = document.getElementById('pin-failure');
    if(displayPinValue === typedNumbersValue){
        pinSuccess.style.display = 'block';
        pinFailure.style.display = 'none';
    }
    else{
        pinFailure.style.display = 'block';
        pinSuccess.style.display = 'none';
    }
})