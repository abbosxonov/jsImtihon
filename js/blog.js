const url = "https://64a6fca7096b3f0fcc80ef97.mockapi.io/posts";
const catygor = document.getElementById("caty");
const search = document.querySelector("#search");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    data.sort((a, b) => a.category - b.category);
    data.map((element) => {
      const div = document.createElement("div");
      div.classList.add("card", "post-item");
      div.innerHTML = `
       <a href=''>
       <img src='${element.img}'></img>
       <div class='element-body'>
       <p>${element.category}</p>
       <h5>${element.title}</h5>
       <p class='par1'>${element.body}</p>
       </div></a>
        `;
      if (element) {
        catygor.append(div);
        console.log(element);
      }
    });
  })
  .catch((error) => {
    console.log("Xatolik yuz berdi:", error);
  });

const localget = document.getElementsByClassName("card");
