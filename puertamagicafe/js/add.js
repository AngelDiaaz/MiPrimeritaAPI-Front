function back(){
    window.location = "welcome.html";
}

function add(){
    let name = $("#name").val().trim();
    let dni = $("#dni").val().trim();
    let pin = $("#pin").val().trim();

    console.log(name)
    console.log(dni)
    console.log(pin)

    if( name != "" && dni != "" && pin != "" ){
        $.ajax({
            url:'https://localhost:5001/Alumno/Insert',
            type:'post',
            data:JSON.stringify({Nombre:name,DNI:dni,PIN:pin}),
            contentType:"application/json; charset=utf-8",
            success:function(response){
                window.location = "welcome.html";
            },
            error:function(){
                $("#error").fadeIn();
            }
        });
    } else {
        alert('Rellene todos los campos por favor');
    }
}