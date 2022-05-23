$(document).ready(function(){
        
    $.ajax({
        url:'https://localhost:44367/Login/CheckLogin',
        type:'get',
        contentType:"application/json; charset=utf-8",
        success:function(response){
            let users = response
            users.forEach(user => {
                console.log(user)
                $("#users").append('<li>'+user.Name+'</li>')
            });
            
        },
        error:function(){            
            alert("error")
        }
    });
        
  
});