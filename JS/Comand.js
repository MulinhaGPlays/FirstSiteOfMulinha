var Img = document.querySelector("#img");
var Msg = document.querySelector("#msg");

function relogio() {
    var Data = new Date();
    var Hora = Data.getHours();

    Msg.innerHTML = "<strong>"+Data+"</strong>";
    if (Hora >= 0 && Hora < 12) {
        Img.style.background = "url(/Image/Backgrounds/Morning_BG.png)"
        Img.style.backgroundPosition = "25%"
    } else if (Hora >= 12 && Hora < 18) {
        Img.style.background = "url(/Image/Backgrounds/Evening_BG.png)"
        Img.style.backgroundPosition = "60%"
    } else {
        Img.style.background = "url(/Image/Backgrounds/Night_BG.png)"
        Img.style.backgroundPosition = "50%"
    }
    Img.style.backgroundSize = "cover";
};

function tempo() {
    setInterval(relogio, 1000)
}
