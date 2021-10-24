/*    
      Entrega TPO Front Integrador. HTML, CSS y Javascript
      Curso: Codo a Codo
      Profesor: Juan Pablo Nardone Fernández
      Alumno: Federico Orliacq   
*/

$(".nav-link").css({color: '#3d3dd4', textShadow: "1px 1px 2px pink"}) // formato al texto de la barra de índice

// Formulario en contacto.html

// Valida que solo se ingresen numeros en la caja de teléfono:
function validateNumber(e) {
      const pattern = /^[0-9]$/;
      return pattern.test(e.key )
  }

// Evita que enviar el formulario me cargue la pág y desaparezca el output:
let formulario = document.getElementById("formulario");
      formulario.addEventListener("submit",validarFormulario);
      function validarFormulario(e){
      e.preventDefault();
      } 

function botonEnviar (){     
      let nombre_formulario = document.getElementById("nombre_formulario").value; 
      let apellido_formulario = document.getElementById("apellido_formulario").value;
      let mail_formulario = document.getElementById("mail_formulario").value;
      let tel_formulario = document.getElementById("tel_formulario").value;

      if ((nombre_formulario == "") || (apellido_formulario == "") || (mail_formulario == "") || (tel_formulario == "")){
            document.getElementById("resultado").innerHTML =  `Por favor, completa todos los campos.`;       
      } else {
            document.getElementById("resultado").innerHTML = `Gracias ${nombre_formulario} por mandarnos tus datos. A la brevededad te estamos contactado a tu teléfono: ${tel_formulario}`;
      }
      }

