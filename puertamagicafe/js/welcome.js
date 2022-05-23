$(document).ready(function(){
        
    $.ajax({
        url:'https://localhost:5001/User/All',
        type:'get',
        contentType:"application/json; charset=utf-8",
        success:function(response){
            let users = response
            users.forEach(user => {
                console.log(user)
                $("#users").append('<li>'+user.name+'</li>')
            });
            
        },
        error:function(){            
            alert("error")
        }
    });
        
  
});