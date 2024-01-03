var user=[{username: "user1", pass: "pass123", age: 25, gender: "male", phone: "123-456-7890"}, {
    username: "user2", pass: "abc456", age: 30, gender: "female", phone: "987-654-3210"
    }];

function signup()
{
    var nam =document.getElementById("name_up").value;
    var pas=document.getElementById("passup").value;
    var age=document.getElementById("age").value;
    var phone=document.getElementById("Phone").value;

    var r=/^(?=.*[-\!\@\#\%\&\\*])(?=.*[a-zA-Z])(?=.*\d).{1,8}$/;

    if(nam==""||pas=="")
    {
        alert("can`t enter empty data");
        return false;
    }
    else if(age<18||age>60)
    {
        alert("yor age must be 18:60");
        return false;
    }
    else if(!pas.match(r))
    {
        alert("the pass is rong");
        return false;
    }
    else if(phone.length!==11)
        {
     alert("Must be 11");
     return false;
        }

    

    else
    {
        user.push({
            username:nam,
            password:pas
        })
        alert("account created");
        console.log(user);
    }
  

}

function signin()
{
    var n=document.getElementById("name_log").value;
    var p=document.getElementById("pass_log").value;

    for(var i=0; i<user.length ;i++)
    {
       if(user[i].username==n && user[i].pass==p)
       {
        alert("Login succesfully");
        console.log(user)
        location.replace("Review.html");
       }

    }      
    
}

function forget()
{
    var fn=document.getElementById("name_f").value;
    var fp=document.getElementById("pass_f").value;

    for(var i=0;i<user.length;i++)
    {
        if(user[i].username==fn)
        {
          user[i].password = fp;
            alert("Password updated")
        }
    }
}

