const form = document.getElementById('form-comparação');
const num1 = document.getElementById('numero1');
const num2 = document.getElementById('numero2');


form.addEventListener('submit', function (e) {
    e.preventDefault();


const n1 = parseInt(numero1.value);
const n2 = parseInt(numero2.value);
const mensagemSucesso = `Parabéns !! <b>${n2}</b> é maior que <b>${n1}...</b> `



if (n2 > n1) {
    const containerMensagemSucesso = document.querySelector('.success-mensage');
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = 'block';
    
    setTimeout(() => {
        containerMensagemSucesso.style.display = 'none';
    }, 3000);

    num1.value = ''; 
    num2.value = '';    

} else {
    const containerMensagemErro = document.querySelector('.error-mensage');
    containerMensagemErro.style.display = 'block';
    numero1.classList.add('error');


    setTimeout(() => {
        containerMensagemErro.style.display = 'none';
        numero1.style = '';
        numero1.classList.remove('error');
    }, 3000);
}
});

