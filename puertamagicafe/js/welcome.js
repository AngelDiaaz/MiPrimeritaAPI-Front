$(document).ready(function(){
        
    $.ajax({
        url:'https://localhost:5001/Alumno/All',
        type:'get',
        contentType:"application/json; charset=utf-8",
        success:function(response){
            let alumnos = response
            alumnos.forEach(alumno => {
                console.log(alumno)
                $("#alumnos").append('<li>'+alumno.nombre+'</li>')
            });
            
        },
        error:function(){            
            alert("error")
        }
    });
        
  
});

function back(){
    window.location = "index.html";
}

function add(){
    window.location = "add.html";
}

function update(){
    window.location = "update.html";
}

function delet(){
    window.location = "delete.html";
}
