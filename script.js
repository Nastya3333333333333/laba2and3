let posts = [ {
    id: 1,
    title: "Queen",
    description: "Альбом:«A Night at the Opera» Рік:1975",
    image: "image\\rock.jpg",
    category: "Rock",
    price: "20"
},
{
    id: 2,
    title: "Melanie Martinez",
    description: "Альбом:«Portals» Рік:2023",
    image: "image\\pop.jpg",
    category: "Pop",
    price: "15"
},
{
    id: 3,
    title: "Hamilton",
    description: "Рік:2015",
    image: "image\\musicals.jpg",
    category: "Musicals",
    price: "31"
},
{
    id: 4,
    title: "Lui armstrong",
    description: "Альбом:«What a wonderful world » Рік:1967",
    image: "image\\jazz.jpg",
    category: "Jazz",
    price: "50"
},
{
    id: 5,
    title: "Limb Bizkit",
    description: "Альбом:«New old songs » Рік:2001",
    image: "image\\rap.jpg",
    category: "Rap",
    price: "18"
},
{
    id: 6,
    title: "Hoizer",
    description: "Альбом:«Unreal Unearth:Unheart » Рік:2024",
    image: "image\\alternative.jpg",
    category: "Alternative",
    price: "39"
},
{
    id: 7,
    title: "Rob Zombie",
    description: "Альбом:«Hellbilly Deluxe » Рік:1998",
    image: "image\\rock1.jpg",
    category: "Rock",
    price: "41"
}
];

let cart = [];

function loadPosts(category) {
let container = document.getElementById("container");
let postsHtml = "";
let postsFiltered = [];
if (category) {
    postsFiltered = posts.filter(elem => elem.category === category);
} else {
    postsFiltered = posts;
}
postsFiltered.forEach(elem => {
    let postHtml = `
      <div class="card">
        <div class="album" onmouseover="showVinyl(this)" onmouseout="hideVinyl(this)">
          <img class="album-cover" src="${elem.image}" alt="${elem.title}">
          <div class="vinyl">
            <div class="record-container">
              <div class="record"></div>
            </div>
            <div class="description">${elem.description}</div>
          </div>
        </div>
        <div class="button-wrapper">
          <button class="buy-button" data-price="${elem.price}" onclick=addToCart(${elem.id})>Buy Now</button>
        </div>
      </div>`;
    postsHtml += postHtml;
  });
container.innerHTML = postsHtml;
}
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function showVinyl(element) {
let vinyl = element.querySelector(".vinyl");
vinyl.style.display = "flex";
let albumCover = element.querySelector(".album-cover");
albumCover.style.opacity = "0";
element.style.transform = "translateY(-10px)"; 
}

function hideVinyl(element) {
let vinyl = element.querySelector(".vinyl");
vinyl.style.display = "none";
let albumCover = element.querySelector(".album-cover");
albumCover.style.opacity = "1";
element.style.transform = "translateY(0)"; 
}

loadPosts();
function myFunction() {
var element = document.body;
element.classList.toggle("dark-mode");
}
function myFunction() {
let element = document.body;
element.classList.toggle("dark");
}

function addToCart(id){
  cart.push(posts.find(post => post.id == id));
  console.log(cart);
  let elem = document.getElementById("cart-items");
  elem.innerText = cart.length;
  let totalPrice = 0;
  cart.forEach(c => totalPrice += Number(c.price));
  let elemPrice = document.getElementById("data-price");
  elemPrice.innerText = "$ " + totalPrice;

}
function clearBasket() {
  cart = [];
  let elem = document.getElementById("cart-items");
  elem.innerText = cart.length;
  let elemPrice = document.getElementById("data-price");
  elemPrice.innerText = "$ 0";
}
