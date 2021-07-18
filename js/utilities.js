function getRandomInteger(min,max)
{
    // Renvoie un nombre entier aléatoire compris entre les arguments min et max inclus.
	return Math.floor(Math.random() * (max - min + 1)) + min;
    
}
//min 3 et max à 6
//(0.3 * (6 - 3 +1)) + 3


/*let user = document.querySelector("#firing-button")
user.addEventListener("click", function(){
    getRandomInteger(3,6)
})*/