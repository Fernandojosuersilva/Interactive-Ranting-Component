
var actual_rate = document.getElementById("actual-rate");
var rates = document.querySelector("#rate"); 
var submit_btn = document.getElementById("submit_btn");
var MainCard = document.getElementById("card");
var ThankYouCard = document.getElementById("thankYou");

// storing the click value to a variable
rates.addEventListener("click", Event => {
    let target = Event.target;
    if(target.matches('button')){
        let value = target.innerHTML
        
        actual_rate.innerHTML = value;
    }
});
// show Thank You card over the main card
submit_btn.onclick = function(){
    
    MainCard.display = ThankYouCard.style.display = "block";
    

}