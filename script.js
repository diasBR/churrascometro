// carne = 400g por pessoa (+ 6h = 650g);
// cerveja = 1200ml por pessoa (+ 6h = 2000ml);
// refrigerante/água = 1000ml por pessoa (+ 6h = 1500ml);
// criança vale por 0.5;

// _______________________________________________________


let e = document.getElementById("adults");
let f = document.getElementById("child");
let g = document.getElementById("time");
let r = document.getElementById("results")

// h = carne;
function h(g1){
    if(g1 >= 6){
        return 650;
    }else{
        return 400;
    }
}

// i = cerveja;
function i(g1){
    if(g1 >= 6){
        return 2000;
    }else{
        return 1200;
    }
}

// j = refrigerante;
function j(g1){
    if(g1 >= 6){
        return 1500;
    }else{
        return 1000;
    }
}


function calc(){

    let e1 = e.value;
    let f1 = f.value;
    let g1 = g.value;

    let a = (e1 * h(g1)) + ((f1 * .5) * h(g1));
    let b = (e1 * i(g1));
    let c = (e1 * j(g1)) + ((f1 * .5) * j(g1));

    let a1 = (a * 40) / 100;
    let a2 = (a * 20) / 100;
    let a3 = (a * 20) / 100;
    let a4 = (a * 20) / 100;

    r.innerHTML =  `<p><u><li>${a1 / 1000} Kg de Carne</strong></li></u></p>`;
    r.innerHTML +=  `<p><u><li>${a2 / 1000} Kg de Frango</li></u></p>`;
    r.innerHTML +=  `<p><u><li>${a3 / 1000} Kg de Linguiça</li></u></p>`;
    r.innerHTML +=  `<p><u><li>${a4 / 1000} Kg de Outros</li></u></p>`;
    r.innerHTML +=  `<p><u><li>${Math.ceil(b / 355)} Latas de Cerveja</li></u></p>`;
    r.innerHTML +=  `<p><u><li>${Math.ceil(c / 2000)} Garrafas de 2L</li></u></p>`;   
}

