/**
   * Navbar links active state on scroll
   */
  let navbarlinks = document.querySelectorAll('#navbar .scrollto');

  function navbarlinksActive() {
    navbarlinks.forEach(navbarlink => {

      if (!navbarlink.hash) return;

      let section = document.querySelector(navbarlink.hash);
      if (!section) return;

      let position = window.scrollY;
      if (navbarlink.hash != '#header') position += 200;

      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navbarlinksActive);
  document.addEventListener('scroll', navbarlinksActive);


  $(document).ready(function(){
    $(".styles").click(function(){
      style = this.id;
      switch(style){
        case "reset":
             $('link[rel="stylesheet alternative"]').attr('disabled', 'true');
             $('link[href="Assets/css/main.css"]').removeAttr('disabled');
             $("#nightview").attr("class", "");
             break;
         case "soviet":
             $('link[rel="stylesheet alternative"]').attr('disabled', 'true');
             $('link[href="Assets/css/main.css"]').attr('disabled', 'true');
             $('link[href="Assets/css/main_cambiato.css"]').removeAttr('disabled');
             $('link[href="Assets/css/soviet.css"]').removeAttr('disabled');
             $("#nightview").attr("class", "");
             break;
       case "future":
           $('link[rel="stylesheet alternative"]').attr('disabled', 'true');
           $('link[href="Assets/css/main.css"]').attr('disabled', 'true');
             $('link[href="Assets/css/main_cambiato.css"]').removeAttr('disabled');
           $('link[href="Assets/css/hyperfuture.css"]').removeAttr('disabled');
           $("#nightview").attr("class", "fas fa-moon");
           break;
       case "victorian":
           $('link[rel="stylesheet alternative"]').attr('disabled', 'true');
             $('link[href="Assets/css/main.css"]').attr('disabled', 'true');
             $('link[href="Assets/css/main_cambiato.css"]').removeAttr('disabled');
           $('link[href="Assets/css/victorian.css"]').removeAttr('disabled');
           break;
       case "trashy90":
           $('link[rel="stylesheet alternative"]').attr('disabled', 'true');
             $('link[href="Assets/css/main.css"]').attr('disabled', 'true');
             $('link[href="Assets/css/main_cambiato.css"]').removeAttr('disabled');
           $('link[href="Assets/css/trashy90s.css"]').removeAttr('disabled');
           break;
       case "beasty_medieval":
           $('link[rel="stylesheet alternative"]').attr('disabled', 'true');
             $('link[href="Assets/css/main.css"]').attr('disabled', 'true');
             $('link[href="Assets/css/main_cambiato.css"]').removeAttr('disabled');
           $('link[href="Assets/css/beasty_medieval.css"]').removeAttr('disabled');
           break;
       case "groovy70s":
           $('link[rel="stylesheet alternative"]').attr('disabled', 'true');
             $('link[href="Assets/css/main.css"]').attr('disabled', 'true');
             $('link[href="Assets/css/main_cambiato.css"]').removeAttr('disabled');
           $('link[href="Assets/css/groovy70s.css"]').removeAttr('disabled');
           break;
       default: 
           console.log("ti prego non comparire");
          }
   }); 
});