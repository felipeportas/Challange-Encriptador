const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");
document.getElementById('execCopy').addEventListener('click', execCopy);

function btnCriptografar() {
    const textoEncriptado = criptografar(textArea.value);
    mensagem.value = textoEncriptado
    textArea.value = "";
}

function criptografar(stringEncriptada) {
    let matrizCripto = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCripto.length; i++) {
        if(stringEncriptada.includes(matrizCripto[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCripto[i][0], matrizCripto[i][1]);
        }
    }

    return stringEncriptada;
}

function btnDescriptografar() {
    const textoDesencriptado = descriptografar(textArea.value);
    mensagem.value = textoDesencriptado
    textArea.value = "";
}

function descriptografar(stringDesencriptada) {
    let matrizCripto = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCripto.length; i++) {
        if(stringDesencriptada.includes(matrizCripto[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCripto[i][1], matrizCripto[i][0]);
        }
    }

    return stringDesencriptada;
}    

function execCopy() {
  document.querySelector(".mensagem").select();
  document.execCommand("copy");
}


  