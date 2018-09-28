
$(document).ready(function(){
    console.log("document ready")
    let bootstrap_enabled = (typeof $().emulateTransitionEnd == 'function');
    checkBoot(bootstrap_enabled)
})

function checkBoot(b){
    if(b == true){
        console.log("Bootstrap loaded: " + b)
    }
    else {
        console.log("Bootstrap loaded: " + b)
    }
}