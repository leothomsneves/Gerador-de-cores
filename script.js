let botao=document.getElementById('btn');
let display=document.getElementById('codigo');
let btnCopiar=document.getElementById('copiar')
let cor;

let GerarCor=()=>{
    cor='#';
    let hexa='0123456789ABCDEF';
    for(let i=0; i<6; i++){
        cor=cor+hexa[Math.floor(Math.random()*16)];
    }
    return cor;
}

botao.addEventListener('click',()=>{
    document.body.style.backgroundColor=GerarCor();
    display.innerHTML=cor;
    btnCopiar.hidden=false;
});

function CopiarCor(){
    navigator.clipboard.writeText(display.innerHTML).then(()=>{alert("Código copiado")});
}