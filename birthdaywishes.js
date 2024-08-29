
//function taking callback as a parameter
function displayBirthdayWishes(callback){
    setTimeout(callback,5000)
}

function display_wishes(){
    if(true)
    console.log("Many Many Happy Returns of the day!!!")
    // else
    // console.log("Today is not a birthday")
}

displayBirthdayWishes(display_wishes)