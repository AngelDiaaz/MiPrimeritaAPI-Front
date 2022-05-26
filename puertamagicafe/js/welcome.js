$(document).ready(function(){
        
    $.ajax({
        url:'https://localhost:5001/Alumno/All',
        type:'get',
        contentType:"application/json; charset=utf-8",
        success:function(response){
            let alumnos = response
            alumnos.forEach(alumno => {
                console.log(alumno)
                $("#users").append('<li>'+alumno.nombre+'</li>')
            });
            
        },
        error:function(){            
            alert("error")
        }
    });
        
  
});