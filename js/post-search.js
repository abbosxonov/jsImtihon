const url = "https://64a6fca7096b3f0fcc80ef97.mockapi.io/posts";

const search = document.querySelector("#search");

search.addEventListener("input", function (e) {
  const value = e.target.value;
  console.log(value);
});

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    data.sort((a, b) => a.rating - b.rating);
    user = data.map((element) => {
      const div = document.createElement("div");
      div.classList.add("card", "post-item");
      div.innerHTML = `
       <a href='./allpost.html'>
       <img src='${element.img}'></img>
       <div class='element-body'>
       <p>${element.category}</p>
       <h5>${element.title}</h5>
       <p class='par1'>${element.body}</p>
       </div></a>
        `;
      if (element) {
        // posts.append(div);
        // console.log(element);
      }
      return { title: user.title, body: user.body, element: card };
    });
  })
  .catch((error) => {
    console.log("Xatolik yuz berdi:", error);
  });
