const cards = document.getElementsByClassName("cards");
const url = "https://64a6fca7096b3f0fcc80ef97.mockapi.io/posts";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    data.sort((a, b) => a.rating - b.rating);
    data.forEach((element) => {
      const cards = document.getElementById("cards");
      const div = document.createElement("div");
      div.style.width = "380px";
      div.classList.add("cardt");
      div.innerHTML = `
       <a href='./allpost.html'>
       <img src='${element.img}'></img>
       <div class='element-body'>
       <p>By <span>Jhon Doe</span>${element.createdDate}</p>
       <h5>${element.title}</h5>
       <p>${element.body}</p>
       </div></a>
        `;
      if (element.rating < 15) {
        cards.prepend(div);
        console.log(element);
      }
    });
  })
  .catch((error) => {
    console.log("Xatolik yuz berdi:", error);
  });

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
