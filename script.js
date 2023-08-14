// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=

const qrImage = document.getElementById("qrImage");
const qrText = document.getElementById("qrText");
const btn = document.getElementById("btn");
console.log(qrText.value);
btn.addEventListener('click', function () {
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    console.log(qrImage.src);
});

