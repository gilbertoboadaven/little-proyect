


$(document).on('submit', "#contact-form", function (e) {
    e.preventDefault() // evitamos que recargue la pagina
    const nombre = $(this).find("#nombre")
    const correo = $(this).find("#correo")
    const mensaje = $(this).find("#mensaje")
    const submit = $(this).find("[type=submit]")

    if (nombre.val().length == 0) {
        submit.removeClass("btn-primary").addClass("btn-warning").html("Ingrese el nombre")
        nombre.focus()
        setTimeout(() => {
            submit.removeClass("btn-warning").addClass("btn-primary").html("Enviar")
        }, 1000);
        return
    }

    if (correo.val().length == 0) {
        submit.removeClass("btn-primary").addClass("btn-warning").html("Ingrese el correo electronico")
        correo.focus()
        setTimeout(() => {
            submit.removeClass("btn-warning").addClass("btn-primary").html("Enviar")
        }, 1000);
        return
    }

    if (mensaje.length == 0) {
        submit.val().removeClass("btn-primary").addClass("btn-warning").html("Ingrese un mensaje")
        mensaje.focus()
        setTimeout(() => {
            submit.removeClass("btn-warning").addClass("btn-primary").html("Enviar")
        }, 1000);
        return
    }
    
    submit.addClass("disabled") // deshabilitamos el boton para evitar que duplicidad de peticiones
    
    $.ajax({
        type: $(this).attr("method"),
        url: $(this).attr("action"),
        data: $(this).serialize(),  //enviamos todos los datos del formulario
        success: () => {    
            $(this).trigger("reset");  //borramos todos los campos del formulario
            submit.removeClass("btn-primary").addClass("btn-success").html("Enviado exitosamente.")
            setTimeout(() => {
                submit.removeClass("btn-success disabled").addClass("btn-primary").html("Enviar")
            }, 1500);
        },
        error: () => {
            submit.removeClass("btn-primary").addClass("btn-danger").html("Error en la conexión, intente nuevamente")
            setTimeout(() => {
                submit.removeClass("btn-danger disabled").addClass("btn-primary").html("Enviar")

            }, 1500);
        }
    })


})