let $colors = document.querySelector("#colors");
let $body = document.querySelector("body");

$colors.addEventListener("change",(e) =>{
    if(e.target.value === "redOption"){
        $body.className = "";
        $body.classList.add("redCss");
    }else if(e.target.value === "blueOption"){
        $body.className = "";
        $body.classList.add("blueCss");
    }else if(e.target.value === "greenOption"){
        $body.className = "";
        $body.classList.add("greenCss");
    }else{
        $body.className = "";
    }
});