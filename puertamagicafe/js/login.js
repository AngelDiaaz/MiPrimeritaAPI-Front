$(document).ready(function(){
    $("#btn-login").click(function(){
        let username = $("#email").val().trim();
        let password = $("#pwd").val().trim();

        console.log(username)
        

        if( username != "" && password != "" ){
            $.ajax({
                url:'https://localhost:44367/Login/CheckLogin',
                type:'post',
                data:JSON.stringify({Name:username,Password:password}),
                contentType:"application/json; charset=utf-8",
                success:function(response){
                    if(response){
                        window.location = "welcome.html";
                    } else {
                        alert('Error en el login');
                    }
                },
                error:function(){
                    $("#error").fadeIn();
                }
            });
        }
    });
});