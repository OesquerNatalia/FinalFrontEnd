document.getElementById("nocturno").style.backgroundColor = "blueviolet";
document.getElementById("nocturno").style.borderColor = "rgb(39, 2, 74)";
document.getElementById("nocturno").style.color = "black";
document.getElementById("dia").style.backgroundColor = "blueviolet";
document.getElementById("dia").style.borderColor = "rgb(39, 2, 74)";
document.getElementById("dia").style.color = "black";

function dia(){
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "#9999CC"; 
    document.getElementById("titulo").style.backgroundColor = "black";
    document.getElementById("titulo").style.color = "blueviolet";
    document.getElementById("nav").style.backgroundColor ="#180914";
    document.getElementById("inicio").style.color = "blueviolet";
    document.getElementById("contacto").style.color = "blueviolet";
    document.getElementById("producto").style.color = "blueviolet";
    document.getElementById("main1").style.color = "blueviolet";
    document.getElementById("main2").style.color = "blueviolet";
    document.getElementById("main3").style.color = "blueviolet";
    
    
    
}


function nocturno(){
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "black";  
    document.getElementById("nocturno").style.color = "azure"; 
    document.getElementById("dia").style.color = "azure"; 
    document.getElementById("titulo").style.color = "white";
    document.getElementById("inicio").style.color = "white";
    document.getElementById("contacto").style.color = "white";
    document.getElementById("producto").style.color = "white";
    document.getElementById("main1").style.color = "white";
    document.getElementById("main2").style.color = "white";
    document.getElementById("main3").style.color = "white";
    
    
    
}


function copyright(){
    alert("Autora: Natalia Oesquer. Email: nati.oesquer@hotmail.com - nacris83@outlook.com");
}