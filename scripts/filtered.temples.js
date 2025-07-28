document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("menu-toggle");
  const closeBtn = document.getElementById("menu-close");
  const navMenu = document.getElementById("nav-menu");

  toggleBtn.addEventListener("click", () => {
    navMenu.classList.add("open");
  });

  closeBtn.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });

  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent =
    "Last Modified: " + document.lastModified;
});


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Lima Peru Los Olivos",
    location: "Lima, Perú",
    dedicated: "2024, January, 14",
    area: 47413,
    imageUrl: 
    "https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-los-olivos-temple/lima-peru-los-olivos-temple-42502.jpg"
  },
  {
    templeName: "Trujillo Perú",
    location: "Trujillo, Perú",
    dedicated: "2015, June, 21",
    area: 28200,
    imageUrl: 
    "https://churchofjesuschristtemples.org/assets/img/temples/trujillo-peru-temple/trujillo-peru-temple-3713.jpg"
  },
  {
    templeName: "Arequipa Perú",
    location: "Arequipa, Arequipa, Perú",
    dedicated: "2019, December, 15",
    area: 26969,
    imageUrl: 
    "https://churchofjesuschristtemples.org/assets/img/temples/arequipa-peru-temple/arequipa-peru-temple-7276.jpg" 
  },
  {
    templeName: "Campinas Brazil",
    location: "Campinas, São Paulo, Brazil",
    dedicated: "2002, May, 17",
    area: 48100,
    imageUrl: 
    "https://churchofjesuschristtemples.org/assets/img/temples/campinas-brazil-temple/campinas-brazil-temple-5257.jpg"
  },
  {
    templeName: "Rio de Janeiro Brazil",
    location: "Rio De Janeiro, Rio de Janeiro, Brazil",
    dedicated: "2022, may, 08",
    area: 29966,
    imageUrl: 
    "https://churchofjesuschristtemples.org/assets/img/temples/rio-de-janeiro-brazil-temple/rio-de-janeiro-brazil-temple-8162.jpg"
  },

];


createTempleCard(temples);

const nonutahLink = document.querySelector("#nonutah");
const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");


homeLink.addEventListener("click", (e) => {
  e.preventDefault();
  createTempleCard(temples);
});

oldLink.addEventListener("click", (e) => {
  e.preventDefault();
  const filtered = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 1900);
  createTempleCard(filtered);
});

newLink.addEventListener("click", (e) => {
  e.preventDefault();
  const filtered = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 2000);
  createTempleCard(filtered);
});

largeLink.addEventListener("click", (e) => {
  e.preventDefault();
  const filtered = temples.filter(temple => temple.area > 90000);
  createTempleCard(filtered);
});

smallLink.addEventListener("click", (e) => {
  e.preventDefault();
  const filtered = temples.filter(temple => temple.area < 10000);
  createTempleCard(filtered);
});

function createTempleCard(filteredTemples) {
    document.querySelector(".res-grid").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
          card.classList.add("temple-card");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".res-grid").appendChild(card);
    });
}
