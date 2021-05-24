/*
=============== 
Global Variables
===============
*/
// used in setDate()
const date = document.getElementById("date");

// used in closeLinks()
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

// used in fixedNavbar()
const navbar = document.getElementById("nav");

// used in smoothScroll()
const scrollLinks = document.querySelectorAll(".scroll-link");
// const navbar (defined above)
// const linksContainer (defined above)

// used in projectsMenu()
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "steak dinner",
    category: "dinner",
    price: 39.99,
    img: "item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  }
];
const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

// used in projectModals()
const modalOverlay = document.querySelector(".modal-overlay");


/*
=============== 
Set Date
===============
*/
var setDate = function () {
  date.innerHTML = new Date().getFullYear();
};

setDate();


/*
=============== 
Close Links
===============

// global variables accessed
navToggle, linksContainer, links

// notes
Element.getBoundingClientRect() method returns the size of an element 
and its position relative to the viewport.
*/


var closeLinks = function () {
  navToggle.addEventListener("click", function() {
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    if (containerHeight === 0) {
      linksContainer.style.height = `${linksHeight}px`;
    } else {
      linksContainer.style.height = 0;
    }
  });
}

closeLinks();


/*
=============== 
Fixed Navbar
===============

// global variables accessed
navbar


// notes
Element.getBoundingClientRect() method returns the size of an element 
and its position relative to the viewport.

Element.pageYOffset is a read - only window property that returns the 
number of pixels the document has been scrolled vertically.

*/


var fixedNavbar = function () {
  const topLink = document.querySelector(".top-link");
  
  window.addEventListener("scroll", function() {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
      navbar.classList.add("fixed-nav");
    } else {
      navbar.classList.remove("fixed-nav");
    }
  
    if (scrollHeight > 500) {
      topLink.classList.add("show-link");
    } else {
      topLink.classList.remove("show-link");
    }
  });
}

fixedNavbar();


/*
=============== 
Smooth Scroll
===============

// global variables accessed
scrollLinks, navbar & linksContainer

// notes
String.slice extracts a section of a string without modifying original 
string

Element.offsetTop - A Number, representing the top position of the 
element, in pixels

*/
var smoothScroll = function () {
    scrollLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      // prevent default
      event.preventDefault();
      // navigate to specific spot
      const id = event.currentTarget.getAttribute("href").slice(1);
      const element = document.getElementById(id);
      // calculate the heights
      const navHeight = navbar.getBoundingClientRect().height;
      const containerHeight = linksContainer.getBoundingClientRect().height;
      const fixedNav = navbar.classList.contains("fixed-nav");
      let position = element.offsetTop - navHeight;

      if (!fixedNav) {
        position = position - navHeight;
      }

      if (navHeight > 82) {
        position = position + containerHeight;
      }
      
      window.scrollTo({
        left: 0,
        top:position
      });
      linksContainer.style.height = 0;
    });
  });
}

smoothScroll();


/*
=============== 
Projects Menu
===============
*/

var projectsMenu = function () {

  // load items
  window.addEventListener('DOMContentLoaded', function () {
    displayMenuItems(menu);
    displayMenuButtons();
  });

  function displayMenuItems (menuItems) {
    let displayMenu = menuItems.map(function(item) {
      return `<article class="menu-item">
      <img src="./assets/img/projects/${item.img}" class="photo" alt="${item.title}">
      <div class="item-info">
        <header>
          <h4>${item.title}</h4>
          
          <button class="btn modal-btn">
          open modal
        </button>
        </header>
        <p class="item-text">
          ${item.desc}
        </p>
      </div>
    </article>`;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
  }

  function displayMenuButtons() {
    const categories = menu.reduce(function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    }, ['all'] );
    const categoryBtns = categories.map(function (category) {
      return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`
    })
    .join("");
    container.innerHTML = categoryBtns;
    const filterBtns = container.querySelectorAll(".filter-btn");
    // filter items
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (event) {
        const category = event.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "all") {
          displayMenuItems(menu);
        } else {
          displayMenuItems(menuCategory);
        }
      });
    });
  }

}

projectsMenu();


/*
=============== 
Global Event Listener
===============
*/

function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, e => {
    if (e.target.matches(selector)) callback(e)
  });
}


/*
=============== 
Projects Modals
===============
*/

var projectsModals = function () {

  addGlobalEventListener("click", ".btn.modal-btn", e => {
    if (e.target.matches(".btn.modal-btn")) {
      modalOverlay.classList.add("open-modal");
    }
  });

  addGlobalEventListener("click", ".fas.fa-times", e => {
    if (e.target.parentElement.matches("button.close-btn")) {
      modalOverlay.classList.remove("open-modal");
    }
  });

}

projectsModals();





