const url = "https://64a6fca7096b3f0fcc80ef97.mockapi.io/posts";
const posts = document.getElementById("post");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    data.sort((a, b) => a.rating - b.rating);
    data.forEach((element) => {
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
        posts.append(div);
      }
    });
  })

  .catch((error) => {
    console.log("Xatolik yuz berdi:", error);
  });

// searchInput.addEventListener("input", function (e) {
//   const filteredProducts = data.filter((photo) =>
//     photo.title.toLowerCase().includes(searchInput.value.toLowerCase())
//   );
//   cards.innerHTML = "";
//   displayproduct(filteredProducts);
// });
let itemparsepage = 12;
let itemcurrentpage = 1;
var productdata = [];

const pages = [];

async function dataTable() {
  await productTable();
}

dataTable();

function pagination() {
  for (i = 0; i <= Math.ceil(productdata.length / itemparsepage); i++) {
    pages.push;
    i;
  }
}

const Indexoflastpage = itemcurrentpage * itemcurrentpage;
const Indexofirstpage = Indexoflastpage - itemparsepage;
const currentpage = productdata.slice(Indexofirstpage, Indexoflastpage);

// ///////////
const prevbtn = () => {
  if ((itemcurrentpage - 1) * itemparsepage) {
    itemcurrentpage--;
    dataTable();
  }
};

const nexbtn = () => {
  if (((itemcurrentpage * itemparsepage) / productdata, length)) {
    itemcurrentpage++;
    dataTable();
  }
};

document.getElementById("prevbtn").addEventListener("click", prevbtn(), false);
document.getElementById("nexbtn").addEventListener("click", nexbtn(), false);

async function productTable() {
  const data = await fetch(url);
  const res = await data.json();
  productdata = res.products;
}
