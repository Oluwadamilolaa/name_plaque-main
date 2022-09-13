// Adding variables to store our data
const userInput = document.querySelector('.field-input');
const userLeterPreview = document.querySelector('.plaque-prev');
const userPricePreview = document.querySelector('#plaquePrice');


// Refactoring with Arrow Function
const countLeters = (some_data) =>{
  const price = some_data.replace(' ', '').length * 5; // price of each letter
  userLeterPreview.textContent = some_data
  userPricePreview.textContent = '$'+price
}
const buyNow = () =>
{var inputText = document.getElementById("guessField").value;

if(inputText === ""){
  alert('Enter Name');
}
  
if(inputText === "Your name"){
  alert('Enter Custom Letters');
}

if(inputText.length > 15){
  alert("Limit Exceeded");
}

else{
  alert('Thank you for your order');
}
  

}




userInput.oninput = (e)=>{
  countLeters(e.target.value);
 
}
