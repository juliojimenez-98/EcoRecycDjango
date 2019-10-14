document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems,{height:475,indicators:false});
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
  });
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems);
  });


$(document).ready(function(){
    $("#formularioregistrar").validate({
        errorClass: "is-invalid",
        rules:{
            nombre:{
                required:true
            },
            apellido:{
              required:true
            },
            email:{
                email:true,
                required:true
            },
            fnacimiento:{
                required:true,
                min:'2007-09-12',
                max:'2019-09-10'
               
            }
            
        },
        messages:{
            nombre:{
                required:"El campo 'nombre' es requerido"
            }
            },
            fnacimiento:{
                required:"Debe ingresar su fecha de nacimiento",
                min:"debe ser mayor de 12 años"
            },
            email:{
              required:"      Ingresa el correo correctamente"
            }      

    })
})
