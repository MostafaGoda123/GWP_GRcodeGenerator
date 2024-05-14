let qrBtn = document.getElementById("qrBtn")
let qrImage = document.getElementById("qrImage")
let inputText = document.getElementById("inputText")

qrBtn.onclick = () => {
   if (inputText.value == "") {
      inputText.classList.add('error')
      setTimeout(() => {
         inputText.classList.remove('error')
      }, 1000);
      inputText.focus()
   }else {
      qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=` + inputText.value
   }
}

