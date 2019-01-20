// Get the modal
let modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img = document.getElementsByTagName("img");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");

for (let i = 0; i < img.length; i++) {
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

for (let a = 0; a < acc.length; a++) {
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
          loadJSON(0);
        } else if (viewDetailsButton[q] == viewDetailsButton[1]){  
          formModal.style.display = "block";
          loadJSON(1);
        } else if (viewDetailsButton[q] == viewDetailsButton[2]){  
          formModal.style.display = "block";
          loadJSON(2);
        } else if (viewDetailsButton[q] == viewDetailsButton[3]){  
          formModal.style.display = "block";
          loadJSON(3);
        } else if (viewDetailsButton[q] == viewDetailsButton[4]){  
          formModal.style.display = "block";
          loadJSON(4);
        } else if (viewDetailsButton[q] == viewDetailsButton[5]){  
          formModal.style.display = "block";
          loadJSON(5);
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
        "model_engine_power_ps":"900",
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
         "model_engine_power_ps":"870",
         "model_top_speed_kph":"384",
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
      "model_top_speed_kph":"390",
      "model_engine_valves_per_cyl":"4",
      "model_engine_power_ps":"700",
      "make_country":"Italy"
    },
    {
      "model_make_id":"Koenigsegg",
      "model_name":"Agera",
      "model_trim":"LP 700-4 2dr Coupe AWD (6.5L 12cyl 7AM)",
      "model_engine_fuel":"Premium Unleaded (Required)",
      "model_year":"2011",
      "model_body":"Coupe",
      "model_top_speed_kph":"420",
      "model_engine_position":"Middle",
      "model_engine_cc":"5000",
      "model_engine_power_ps":"600",
      "model_engine_type":"V",
      "make_display":"Koenigsegg",
      "make_country":"Sweden",
    },
    {
      "model_make_id":"Lotus",
      "model_name":"Evora",
      "model_trim":"2+0",
      "model_year":"2011",
      "model_engine_position":"Middle",
      "model_engine_cc":"3500",
      "model_top_speed_kph":"287",
      "model_transmission_type":"Manual",
      "make_country":"UK",
      "model_engine_fuel":"Gasoline",
      "model_engine_power_ps":"450",
    },
    {
      "model_make_id":"Ford",
      "model_name":"GT",
      "model_trim":"2dr Coupe (3.8L 8cyl gas\/electric hybrid 7A)",
      "model_year":"2006",
      "model_body":"Coupe",
      "model_engine_cc":"5409",
      "model_engine_power_ps":"500",
      "model_engine_fuel":"Gasoline - Premium",
      "model_top_speed_kph":"300",
      "make_country":"USA"
    }
  ]
}

function loadJSON(carModel) {   
  document.getElementById("car-heading").innerHTML = user_profile.cars[carModel].model_make_id + " " +user_profile.cars[carModel].model_name;
  document.getElementById("car-year").innerHTML = "Make year: " + user_profile.cars[carModel].model_year;
  document.getElementById("car-country").innerHTML = "Country : " + user_profile.cars[carModel].make_country;
  document.getElementById("car-trim").innerHTML = "Trim : " + user_profile.cars[carModel].model_trim;
  document.getElementById("car-engine-fuel").innerHTML = "Engine fuel : " + user_profile.cars[carModel].model_engine_fuel;
  document.getElementById("car-engine-power").innerHTML = "Engine power : " + user_profile.cars[carModel].model_engine_power_ps;
  document.getElementById("car-engine-cc").innerHTML = "Engine cc : " + user_profile.cars[carModel].model_engine_cc;
  document.getElementById("car-top-speed").innerHTML = "Top speed : " + user_profile.cars[carModel].model_top_speed_kph;
 }
  


