function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    
    if(username=="cr7@gmail.com" && password=="ronaldo7")
    {
        window.open("./next_page.html",'_blanlk');
    }
    else
    {
        alert("login failed");
    }

}

