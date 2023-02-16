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