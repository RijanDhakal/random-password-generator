

function get(val) {
    return String.fromCharCode(val);
}


function pass() {
    let arr = [];
    let i = 12;
    while(i != 0){
        // for small aphabets
        let a = Math.floor((Math.random() * 26) + 97);
        let sml_alpha = get(a);
        // console.log(sml_alpha)
    
        // for capital alphabets
        let b = Math.floor((Math.random() * 26) + 65);
        let cap_alpha = get(b);
    
        // for numer 
        let c = Math.floor((Math.random() * 10) + 48);
        let num = get(c)
    
    
        // for special char 
        let d = Math.floor((Math.random() * 30) + 33);
        let special = get(d);
    
        arr.push(sml_alpha ,cap_alpha , special  , num);
        i = i-4;
    }

    return arr.join("")
}


console.log(pass())
