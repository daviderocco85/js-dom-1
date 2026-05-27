const toggleBtn = document.getElementById("toggle-btn");
const imgBulbOff = document.getElementById("light-off");


toggleBtn.addEventListener('click', () => {

   if (imgBulbOff.src.includes("white_lamp.png")) {
    // Accendi
    imgBulbOff.src = "assets/img/yellow_lamp.png";
    toggleBtn.textContent = "Spegni";
    // cambio colore toggleBtn
    toggleBtn.classList.remove("btn-primary");
    toggleBtn.classList.add("btn-danger"); 
  } else {
    // Spegni
    imgBulbOff.src = "assets/img/white_lamp.png";
    toggleBtn.textContent = "Accendi";
     // cambio colore toggleBtn
    toggleBtn.classList.remove("btn-danger");
    toggleBtn.classList.add("btn-primary"); 
  } 

});