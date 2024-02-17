$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });


    $("#enviar-correo").click(function(){
      // Mostrar una alerta con el mensaje "El correo fue enviado correctamente..."
      alert("El correo fue enviado correctamente...");
    });


  });


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))