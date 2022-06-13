menu.onclick = function(){
    menu.classList.toggle('active');
    bg_menu.classList.toggle('active');
}
darkt_check.onclick = function(){
    darkt_check.classList.toggle('checked');
    
}
logo.onclick = function(){
    logo.src = "/Image/Logo/Logo_Site_Click.png"
    setTimeout(function() {
        window.location.replace("/Pages/Home.html");
        logo.src = "/Image/Logo/Logo_Site.png"
      }, 760);
} 
