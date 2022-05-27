function login(){
    let username = $("#user").val().trim();
    let password = $("#pwd").val().trim();

    console.log(username)
    

    if( username != "" && password != "" ){
        $.ajax({
            url:'https://localhost:5001/Login',
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
}

function goregister(){
    window.location = "register.html";
}

function back(){
    window.location = "index.html";
}

function register(){
    let username = $("#user").val().trim();
    let email = $("#email").val().trim();
    let password = $("#pwd").val().trim();
    let rpassword = $("#re-pwd").val().trim();
    let date = $("#date").val().trim();

    console.log(username)
    console.log(email)
    console.log(password)
    console.log(rpassword)
    console.log(date)
    
    

    if( username != "" && password != "" && rpassword != "" && email != "" && date != ""){
        if(password == rpassword){
        $.ajax({
            url:'https://localhost:5001/User/Register',
            type:'post',
            data:JSON.stringify({Name:username,Password:password,Email:email,Date:date}),
            contentType:"application/json; charset=utf-8",
            success:function(response){
                window.location = "index.html";
            },
            error:function(){
                $("#error").fadeIn();
            }
        });
        } else {
            alert('Las contraseñas no son iguales')
        }
    } else {
        alert('Rellene todos los campos por favor')
    }
}
