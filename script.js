const cardWrapper = document.querySelector(".content-cards");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");

const movies = [
  {
    id: 0,
    title: "Dead and Wolv1",
    original: "2024",
    category: "Action, comedy",
    rating: 7.6,
    link: "/movie.html",
    image: "./img/Deadpool_&_Wolverine_poster.jpg",
  },
  {
    id: 1,
    title: "Dead and Wolv2",
    original: "2024",
    category: "Action, comedy",
    rating: 7.6,
    link: "/movie.html",
    image: "./img/Deadpool_&_Wolverine_poster.jpg",
  },
  {
    id: 2,
    title: "Dead and Wolv3",
    original: "2024",
    category: "Action, comedy",
    rating: 7.6,
    link: "/movie.html",
    image: "./img/Deadpool_&_Wolverine_poster.jpg",
  },
];

const render = (array) => {
  cardWrapper.innerHTML = "";

  array.forEach((item) => {
    cardWrapper.insertAdjacentHTML(
      "beforeend",
      `
            <a href="${item.link}" class="content-cards__item">
  <div class="content-cards__item--img">
    <img src="${item.image}" alt="Deadpool_&_Wolverine_poster">
  </div>

<div class="content-cards__item--title">
  <h5>${item.title}</h5>
  <span>${item.original}</span>
</div>
<p class="content-cards__item--description">
${item.category}
</p>
<p class="content-cards__item--rating">
${item.rating}</p>
</a>
            `
    );
  });
};

searchBtn.addEventListener("click", () => {
  render(movies.filter((item) => item.title.includes(searchInput.value)));
});
render(movies);
