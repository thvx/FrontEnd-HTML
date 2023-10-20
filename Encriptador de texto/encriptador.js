const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".btn-copiar");
copia.style.display = "none"

function validarTexto(){
    let textoEscrito = document.querySelector(".text-area").value;
    let validar = textoEscrito.match(/^[a-z\s]+$/);

    if(!validar || validar === 0) {
        alert("Introducir solo letras minúsculas y sin acentos");
        location.reload();
        return true;
    }
}

function btnEncriptar(){
    if(!validarTexto()) {
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        mensaje.style.backgroundImage = "none";
        textArea.value = "";
        copia.style.display = "block";
    
    }
}

/* Clave de encriptación:
    a = ai
    e = enter
    i = imes                
    o = ober
    u = ufat
*/

function encriptar(fraseEncriptada){
    let claveEncriptacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    fraseEncriptada = fraseEncriptada.toLowerCase();

    for(let i = 0; i < claveEncriptacion.length; i++){
        if(fraseEncriptada.includes(claveEncriptacion[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(claveEncriptacion[i][0], claveEncriptacion[i][1]);
        }
    }
    return fraseEncriptada;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function desencriptar(fraseDesencriptada){
    let claveEncriptacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    fraseDesencriptada = fraseDesencriptada.toLowerCase();

    for(let i = 0; i < claveEncriptacion.length; i++){
        if(fraseDesencriptada.includes(claveEncriptacion[i][1])){
            fraseDesencriptada = fraseDesencriptada.replaceAll(claveEncriptacion[i][1], claveEncriptacion[i][0]);
        }
    }
    return fraseDesencriptada;
}

function btnCopiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
}