for (let i = 0; i < 3000; i++) {
    const span = document.createElement('span');
    
    bgl.appendChild(span);
}
if (darkt_check.classList.contains('checked')){
    Colors = {bg: black, fg: white};
    
} else {
    Colors = {bg: white, fg: black};
}