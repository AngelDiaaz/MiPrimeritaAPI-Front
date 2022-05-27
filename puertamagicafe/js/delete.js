function back(){
    window.location = "welcome.html";
}

function delet(){
    let name = $("#name").val().trim();
    let dni = $("#dni").val().trim();

    console.log(name)
    console.log(dni)

    if(dni != ""){
        $.ajax({
            url:'https://localhost:5001/Alumno/Delete',
            type:'delete',
            data:JSON.stringify({dni:dni}),
            contentType:"application/json; charset=utf-8",
            success:function(response){
                window.location = "welcome.html";
            },
            error:function(){
                $("#error").fadeIn();
            }
        });
    } else {
        alert('Rellene el campo DNI por favor');
    }
}