//This is the second version of birthday wishes
//function taking callback as a parameter
function displayBirthdayWishes(callback){
    setTimeout(callback,10000)
}

function display_wishes(){
    if(true)
    console.log("Wish you a very happy birthday!!!")
    // else
    // console.log("Today is not a birthday")
}

displayBirthdayWishes(display_wishes)
