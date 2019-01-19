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