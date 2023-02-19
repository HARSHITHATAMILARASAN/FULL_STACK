function mouseOver(element)
{
    element.style.color='red';
    element.style.fontFamily= 'Audiowide';
}

function mouseOut(element)
    {
        element.style.color='white';
        element.style.fontFamily= 'Times New Roman';
    }
    let popup=document.getElementById("popup");
    function openpopup()
    {
          popup.classList.add("open-popup");
    }
    function closepopup()
    {
        popup.classList.remove("open-popup");
    }

    function mouseOn(element)
{
    element.style.color='black';
    element.style.fontFamily= 'Audiowide';
}

function mouseOff(element)
    {
        element.style.color='white';
        element.style.fontFamily= 'Times New Roman';
    }

    
    
    img = document.getElementById("refimg");
    
    function zoomin() {
        
        img.style.transform = "scale(1.25)";
        
        img.style.transition = "transform 0.25s ease";
    }
   
    function zoomout() {
        
        img.style.transform = "scale(1)";
        img.style.transition = "transform 0.25s ease";
    }

    img2 = document.getElementById("refimg2");
    
    function zoomin2() {
        
        img2.style.transform = "scale(1.25)";
        
        img2.style.transition = "transform 0.25s ease";
    }
   
    function zoomout2() {
        
        img2.style.transform = "scale(1)";
        img2.style.transition = "transform 0.25s ease";
    }
    
    function orangefooter(down)
    {
          element.classList.add("footerjs");
    }
    function blackfooter(down)
    {
        element.classList.remove("footerjs");
    }