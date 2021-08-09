var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","002.jpg", "Mumma.jpg" , "me.jpg", "Mithi.jpg", ];
var names = ["Fmaily Book","Dr Rajesh Kr Jha", "Dr Pragya Bharti", "Akshra Kashyap", "Akshita Kashyap"];
var i = 0;
function update(){


document.getElementById("family_member_name").innerHTML=names[i];
document.getElementById("family_member_image").src=images[i];
i++;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
