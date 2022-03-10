//IIFE -- Immediately Invoked Function Expression
//AKA -- Anonmous Self-Executing Function

(function(){
    function Start(){
        console.log("App Started...");
    }

    window.addEventListener("load", Start);
})();