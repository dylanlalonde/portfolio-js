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
const topLink = document.querySelector(".top-link");

// used in smoothScroll()
const scrollLinks = document.querySelectorAll(".scroll-link");
// const navbar (defined above)
// const linksContainer (defined above)

// used in projectsMenu()
const projects = [
  {
    id: 1,
    title: "Trellis",
    category: "wordpress",
    img: "trellis.png",
    desc: `A Wordpress website I made for the Japanese education non-profit, Trellis.`,
    details: `Trellis.ngo is a website I built for the Japanese education non-profit organization I cofounded in Vietnam in 2017. The organization enabled access to english teaching to disadvantaged vietnamese youth. The multi-language website contains information about our program, a blog (which I also staffed), a signup form and a payment portal. This website enabled us to fully book our program for 2 years from launch.`,
    tech: `I used <b>Wordpress</b> as a content management system. Wordpress 'Widgets' used were: <b>WPML Multilingual</b> for multiple language support and <b>Yoast</b> for SEO. I used <b>Stripe</b> for payment processing. Lastly, I used <b>Google Analytics</b> for analytics. For hosting and domain registration I used <b>Bluehost</b>.`,
    lessons: `This was the first website I built professionally. I had built a few simple Wordpress websites before this one, but this one pushed my ability to build custom Wordpress sites. Along with <b>Wordpress site customization</b>, I learned how to build a <b>multilingual</b> wordpress site, as well as how to <b>collect payments using Stripe on Wordpress</b>. Also, while not directly dev related, learning <b>how to staff a blog</b> was interesting as well.`,
  },
  {
    id: 2,
    title: "GoodTravel",
    category: "ruby on rails",
    img: "goodtravel2.png",
    desc: `A tour booking web application built with Ruby on Rails.`,
    details: `GoodTravel is a web application I built as a solution to the exploitative nature of the travel industry. I built it in 2018 while attending a full stack development bootcamp, Le Wagon. The web application allows users to sign up and create an account, then they can view all the tours, and book one. The commission from the tour booking gets calculated and when this project goes live will be distributed to local causes.`,
    tech: `I used the <b>Ruby on Rails</b> framework and managed the <b>Postgres</b> database with <b>ActiveRecord</b> (Rails' ORM). I used <b>SASS</b> to preprocess the CSS. I used <b>Heroku</b> to manage the deployments, and <b>Cloudinary</b> to host the media and serve it conditionally. I used <b>git</b> to manage the codebase and <b>Github</b> to review the code pushed by my 2 team members.`,
    lessons: `This was my final project in a full stack dev bootcamp, so undoubtedly I learned many things working on it. Notably, one of the main things I learned was when working on a software dev project there are a lot of things to do before you write any code! I learned to`,
  },
  {
    id: 3,
    title: "Better To Know",
    category: "drupal",
    img: "bettertoknow.png",
    desc: `A sexual health website I made for the Yukon Territorial Government using Drupal CMS.`,
    details: ``,
    tech: ``,
    lessons: ``,
  },
  {
    id: 4,
    title: "Folk on the Rocks",
    category: "drupal",
    img: "folkontherocks.png",
    desc: `A Drupal website made for the biggest music festival in Northern Canada. `,
    details: ``,
    tech: ``,
    lessons: ``,
  },
  {
    id: 5,
    title: "Wekʼèezhìi Renewable Resources Board",
    category: "drupal",
    img: "wrrb.png",
    desc: `A website I built using Drupal for one of the largest wildlife and habitat monitoring boards in Northern Canada`,
    details: ``,
    tech: ``,
    lessons: ``,
  },
  {
    id: 6,
    title: "Diavik Mine Tour Companion",
    category: "nodeJS",
    img: "diavik.png",
    desc: `A progressive web application I built from scratch for one of the world's biggest mining companies.`,
    details: ``,
    tech: ``,
    lessons: ``,
  },
  {
    id: 7,
    title: "spectacular crawler",
    category: "nodeJS",
    img: "crawler.png",
    desc: `A web crawler built from scratch using NodeJS that automates the review of hundreds of blog articles.`,
    details: ``,
    tech: ``,
    lessons: ``,
  },
  // // {
  // //   id: 8,
  // //   title: "american classic",
  // //   category: "lunch",
  // //   price: 12.99,
  // //   img: "item-8.jpeg",
  // //   desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  // //   details: `I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up.`,
  // //   tech: `Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin, tattooed meggings franzen la croix cray. Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof party hammock master cleanse pop-up truffaut, bicycle rights skateboard affogato readymade sustainable deep v live-edge schlitz narwhal.`,
  // //   lessons: `Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid cold-pressed roof party. Small batch adaptogen coloring book heirloom. Letterpress food truck hammock literally hell of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa chicharrones.`,
  // // },
  // // {
  // //   id: 9,
  // //   title: "quarantine buddy",
  // //   category: "shakes",
  // //   price: 16.99,
  // //   img: "item-9.jpeg",
  // //   desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  // //   details: `I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up.`,
  // //   tech: `Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin, tattooed meggings franzen la croix cray. Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof party hammock master cleanse pop-up truffaut, bicycle rights skateboard affogato readymade sustainable deep v live-edge schlitz narwhal.`,
  // //   lessons: `Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid cold-pressed roof party. Small batch adaptogen coloring book heirloom. Letterpress food truck hammock literally hell of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa chicharrones.`,
  // // },
  // // {
  // //   id: 10,
  // //   title: "steak dinner",
  // //   category: "dinner",
  // //   price: 39.99,
  // //   img: "item-10.jpeg",
  // //   desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  // //   details: `I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up.`,
  // //   tech: `Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin, tattooed meggings franzen la croix cray. Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof party hammock master cleanse pop-up truffaut, bicycle rights skateboard affogato readymade sustainable deep v live-edge schlitz narwhal.`,
  // //   lessons: `Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid cold-pressed roof party. Small batch adaptogen coloring book heirloom. Letterpress food truck hammock literally hell of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa chicharrones.`,
  // }
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

// used in projectModals()
const modalOverlay = document.querySelector(".modal-overlay");

// used in loadDynamicModalContent()
const modalTabBtns = document.querySelectorAll(".tab-btn");
const modalBody = document.querySelector(".modal-body");

let modalOpen = false;

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
  navToggle.addEventListener("click", function () {
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
  // const topLink = document.querySelector(".top-link");

  window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
      navbar.classList.add("fixed-nav");
    } else {
      navbar.classList.remove("fixed-nav");
    }

    if (scrollHeight > 500 && modalOpen === false) {
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
        top: position
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

// global variables accessed
menu, sectionCenter, container

*/

var projectsMenu = function () {

  // load items
  window.addEventListener('DOMContentLoaded', () => {
    displayProjectMenuItems(projects);
    displayProjectFilterBtns();
  });

  function displayProjectMenuItems(projects) {
    let displayProjectsMenu = projects.map((project) => {
      return `<article class="project-item">
      <img src="./assets/img/projects/${project.img}" class="photo" alt="${project.title}">
      <div class="project-info">
        <header>
          <h4>${project.title}</h4>
          <button class="btn modal-btn" data-id="${project.id}">
          view project
        </button>
        </header>
        <p class="project-text">
          ${project.desc}
        </p>
      </div>
    </article>`;
    });
    displayProjectsMenu = displayProjectsMenu.join("");
    sectionCenter.innerHTML = displayProjectsMenu;
  }

  function displayProjectFilterBtns() {
    const categories = projects.reduce((values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    }, ['all']);

    const categoryBtns = categories.map((category) => {
      return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`
    }).join("");
    container.innerHTML = categoryBtns;
    const filterBtns = container.querySelectorAll(".filter-btn");

    // filter items
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        const category = event.currentTarget.dataset.id;
        const projectCategory = projects.filter((project) => {
          if (project.category === category) {
            return project;
          }
        });
        if (category === "all") {
          displayProjectMenuItems(projects);
        } else {
          displayProjectMenuItems(projectCategory);
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

let modalContentDiv = document.querySelector(".modal-content");

function projectsModals() {
  addGlobalEventListener("click", ".btn.modal-btn", e => {
    let itemId = e.target.attributes[1].value;
    let targetProject = projects[itemId - 1];

    let modalContent =
      `<!-- single item -->
        <div class="modal-content-item active" id="details">
          <h4>Project Details</h4>
          <p class="modal-content-text">${targetProject.details}</p>
        </div>
        <!-- end of single item -->
        <!-- single item -->
        <div class="modal-content-item" id="tech">
          <h4>Tech Stack</h4>
          <p class="modal-content-text">${targetProject.tech}</p>
        </div>
        <!-- end of single item -->
        <!-- single item -->
        <div class="modal-content-item" id="lessons">
          <h4>Lessons Learned</h4>
          <p class="modal-content-text">${targetProject.lessons}</p>
        </div>
        <!-- end of single item -->`;

    if (e.target.matches(".btn.modal-btn")) {
      modalOpen = true;

      modalContentDiv.innerHTML = modalContent;
      modalOverlay.classList.add("open-modal");

      // hide link to top
      topLink.classList.remove("show-link");
    }
  });

  addGlobalEventListener("click", ".fas.fa-times", e => {
    if (e.target.parentElement.matches("button.close-btn")) {
      modalOpen = false;

      // reset modal tabs to first being active
      modalTabBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      modalTabBtns[0].classList.add("active");
      // hide modal
      modalOverlay.classList.remove("open-modal");

      // show link to top
      topLink.classList.add("show-link");
    }
  });

}

projectsModals();


/*
=============== 
Projects Modals Tabs Toggle
===============

// global variables accessed
modalTabBtns, modalBody, modalContentItems

*/

function loadDynamicModalContent() {
  modalBody.addEventListener("click", (event) => {
    const id = event.target.dataset.id;
    const modalContentItems = document.querySelectorAll(".modal-content-item");
    if (id) {
      // remove active from other buttons
      modalTabBtns.forEach((btn) => {
        btn.classList.remove("active");
        // add active class to target button
        event.target.classList.add("active");
      });
      // hide all modalContentItems
      modalContentItems.forEach((item) => {
        item.classList.remove("active");
      });
      // show active item
      const item = document.getElementById(id);
      item.classList.add("active");
    }
  });
}

loadDynamicModalContent();