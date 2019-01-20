// Get the modal
let modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img = document.getElementsByTagName("img");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");

let i;
for (i = 0; i < img.length; i++) {
  img[i].onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}


let span = document.getElementsByClassName("close")[0];

if (span != null){
  span.onclick = function() { 
    modal.style.display = "none";
  }
}

let acc = document.getElementsByClassName("accordion");
let a;

for (a = 0; a < acc.length; a++) {
  acc[a].addEventListener("click", function() {
    this.classList.toggle("active-div");

    let panel = this.nextElementSibling;
    if (panel.style.display === "flex") {
      panel.style.display = "none";
    } else {
      panel.style.display = "flex";
    }
  });
}

const formModal = document.getElementById('myModal');
const emailInput = document.getElementById('email-input');
const submitBtnForm = document.getElementById("submitBtnForm");
const closeBtnForm = document.getElementsByClassName("close")[0];

if (submitBtnForm != null){
  submitBtnForm.onclick = function() {
    if (emailInput.value.length > 0) {
      formModal.style.display = "block";
    }
  }
}

closeBtnForm.onclick = function() {
  formModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == formModal) {
    formModal.style.display = "none";
  }
}

const viewDetailsButton = document.getElementsByTagName('button');
if (viewDetailsButton != null){
  for (let q = 0; q < viewDetailsButton.length; q++) {
    viewDetailsButton[q].onclick = function() {
        if (viewDetailsButton[q] == viewDetailsButton[0]){  
          formModal.style.display = "block";
        } else if (viewDetailsButton[q] == viewDetailsButton[1]){  
          formModal.style.display = "block";
        } else if (viewDetailsButton[q] == viewDetailsButton[2]){  
          formModal.style.display = "block";
          loadJSON("Lamborghini");
        }
    }
  }
}


 let user_profile = { 
  "cars" : [
    {
        "model_make_id":"Bugatti",
        "model_name":"Veyron",
        "model_trim":"16.4 Grand Sport",
        "model_year":"2010",
        "model_engine_fuel":"Gasoline",
        "model_top_speed_kph":"408",
        "model_transmission_type":"Automatic",
        "model_seats":"2",
        "model_doors":"2",
        "make_country":"Italy"
    },
    {
      "model_make_id":"McLaren",
         "model_name":"P1",
         "model_trim":"2dr Coupe (3.8L 8cyl gas\/electric hybrid 7A)",
         "model_year":"2016",
         "model_engine_cc":"3800",
         "model_engine_fuel":"Premium Unleaded (Required)",
         "model_transmission_type":"Automated Manual",
         "make_country":"UK"
    },
    {
      "model_make_id":"Lamborghini",
      "model_name":"Aventador",
      "model_trim":"LP 700-4 2dr Coupe AWD (6.5L 12cyl 7AM)",
      "model_year":"2016",
      "model_engine_cc":"6500",
      "model_engine_fuel":"Premium Unleaded (Required)",
      "model_engine_type":"V",
      "model_engine_valves_per_cyl":"4",
      "model_engine_power_ps":"700",
      "make_country":"Italy"
    }
  ]
}

function loadJSON(carModel) {   
  document.getElementById("car-heading").innerHTML = user_profile.cars[0].model_make_id + " " +user_profile.cars[0].model_name;
 }
  
 loadJSON();



