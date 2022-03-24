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
const heroBanner = document.querySelector(".banner");
const topLink = document.querySelector(".top-link");
const whiteLogo = document.querySelector(".white-logo");
const blkLogo = document.querySelector(".blk-logo");

// used in smoothScroll()
const scrollLinks = document.querySelectorAll(".scroll-link");
// const navbar (defined above)
// const linksContainer (defined above)

// used in projectsMenu()
const projects = [
  {
    id: 1,
    title: "Better To Know",
    category: "drupal",
    previewImg: "https://res.cloudinary.com/dylanlalonde/image/upload/c_scale,w_400/v1634602014/dylanlalonde.com/btk.png",
    modalImg: "https://res.cloudinary.com/dylanlalonde/image/upload/c_scale,w_800/v1634602014/dylanlalonde.com/btk.png",
    desc: `A sexual health website I made for the Yukon Territorial Government using Drupal CMS.`,
    details: `Better To Know is a multilingual sexual health and education information website I built for the Yukon government using the Drupal CMS while working at Outcrop Communications in 2019. Through this site, the residents of the Yukon Territory are able to access a plethora of information ranging from sexual education and health to relationships and consent. There is also access to a help line, and an anonymous contact form for questions. The Yukon government is able to log in and add different types of content to the site.`,
    tech: `I installed <b>Drupal 8</b>, (A CMS built in PHP, which uses SQL as a DB) in an <b>NGINX</b> server. Both the development and production deployments, as well as our code repositories, were hosted on <b>Beanstalk</b>. First I configured the content types that the client would be able to upload. Then, starting with a Theme called Barrio (based off of <b>Bootstrap 4</b>), I began styling the appearance. Then I used the Drupal templating language, <b>Twig</b>, to customize the output. Finally, I used <b>sCSS</b> and <b>JavaScript</b> to match the designs provided by the design team. I used <b>grunt</b> to minify and lint the repository before pushing with <b>git</b>.`,
    lessons: `I learned the whole process of <b>setting up a Drupal website from scratch</b>. I also learned how to use <b>Twig templating language</b>, and saw the similarities between it and ERB in Ruby (which I learned in my full stack development bootcamp). I also learned a lot about the processes of going through preliminary <b>meetings with clients</b>, coming up with <b>estimates for how long the work would take</b>, making <b>sitemaps and wireframes</b>, and communicating back and forth with clients during and after the build.`,
  },
  {
    id: 2,
    title: "Wekʼèezhìi Renewable Resources Board",
    category: "drupal",
    previewImg: "https://res.cloudinary.com/dylanlalonde/image/upload/c_scale,w_400/v1634602014/dylanlalonde.com/wrrb.png",
    modalImg: "https://res.cloudinary.com/dylanlalonde/image/upload/c_scale,w_800/v1634602014/dylanlalonde.com/wrrb.png",
    desc: `A website I built using Drupal for one of the largest wildlife habitat monitoring boards in Northern Canada`,
    details: `WRRB is a responsible for monitoring one of the largest wildlife habitats in Canada. This is a massive website that is loaded with content. There are dozens of dynamically generated pages based on the input of the staff, including information pages, a blog, public procedure documents, board minutes, a huge repository of management proposals and more.`,
    tech: `I installed <b>Drupal 8</b>, (A <b>CMS</b> built in <b>PHP</b>, which uses <b>SQL</b> as a DB) in an <b>NGINX</b> server. Both the development and production deployments, as well as our code repositories, were hosted on <b>Beanstalk</b>. First I configured the content types that the client would be able to upload. Then, starting with a Theme called Barrio (based off of <b>Bootstrap 4</b>), I began styling the appearance. Then I used the Drupal templating language, <b>Twig</b>, to customize the output. Finally, I used <b>sCSS</b> and <b>JavaScript</b> to match the designs provided by the design team. I used <b>grunt</b> to minify and lint the repository before pushing with <b>git</b>.`,
    lessons: `I learned the whole process of <b>setting up a Drupal website from scratch</b>. I also learned how to use <b>Twig templating language</b>, and saw the similarities between it and ERB in Ruby (which I learned in my full stack development bootcamp). I also learned a lot about the processes of going through preliminary <b>meetings with clients</b>, coming up with <b>estimates for how long the work would take</b>, making <b>sitemaps and wireframes</b>, and communicating back and forth with clients during and after the build.`,
  },
  {
    id: 3,
    title: "Rio Tinto Mine Tour Companion App",
    category: "PWA",
    previewImg: "https://res.cloudinary.com/dylanlalonde/image/upload/c_scale,w_400/v1634602014/dylanlalonde.com/riotinto.png",
    modalImg: "https://res.cloudinary.com/dylanlalonde/image/upload/c_scale,w_800/v1634602014/dylanlalonde.com/riotinto.png",
    desc: `An offline-first progressive web application I built from scratch for one of the world's biggest mining companies.`,
    details: ` This is an offline-first Progressive Web Application I built for Rio Tinto's Diavik Diamond mine, the biggest open pit diamond mine in North America. I built this while working at Outcrop Communications. The application caches up to a gig of media files and allows the visitor to learn many details about the mine. The app runs on the Apple iPads provided during the in-flight portion of their tour. <b>Notice: The content visible in the image above is placeholder. I had nothing to do with design or content, I only developed the application and handed it over due to it being proprietary.</b>`,
    tech: `This was a <b>progressive web application</b> which consisted of setting up the <b>Drupal CMS as an API</b> and then consuming it with a <b>custom nodeJS & Webpack front-end</b> application. I used <b>IndexedDB</b> to cache content in the browser storage and make the whole app and all of its content available offline. I started by installing <b>Drupal 8</b>, (A <b>CMS</b> built in <b>PHP</b>, which uses <b>SQL</b> as a DB) in an <b>NGINX</b> server. Upon loading, the web application would cache the data from the content types locally, and display them on 5 different pages. The app contained videos, modals with images, text, and videos, interactive maps, and basic content pages. In order to make the caching of videos possible in <b>IndexedDB</b>, I needed to first convert the video files into <b>array buffers</b> and store them. Then, before displaying them on the DOM they needed to be converted back into video files. I used <b>Beanstalk</b> for hosting code and deployments.`,
    lessons: `This project taught me a lot about <b>asynchronous Javascript</b>, <b>Serviceworkers</b>, <b>caching data in the browser</b> and the associated complications with both media files and generally large amounts of content. I also learned how to use Drupal exclusively as a CMS API. `,
  },
  {
    id: 4,
    title: "article crawler",
    category: "nodeJS",
    previewImg: "https://res.cloudinary.com/dylanlalonde/image/upload/c_scale,w_400/v1634602014/dylanlalonde.com/article-crawler.png",
    modalImg: "https://res.cloudinary.com/dylanlalonde/image/upload/c_scale,w_800/v1634602014/dylanlalonde.com/article-crawler.png",
    desc: `A web crawler built from scratch using NodeJS that automates the review of hundreds of blog articles.`,
    details: `I built Article Crawler to automate the otherwise lengthy process of reviewing some of the content heavy sites at Outcrop Communications. Some websites had hundreds of blog articles and this crawler would check each for broken links and missing videos before recording the results in a CSV spreadsheet. This crawler turned a ~20 hour task into a <5 minute task.`,
    tech: `I built the crawler using <b>NodeJS</b>, <b>Javascript</b>, and <b>Puppeteer</b> (a headless Chrome Node.js API). I stored the crawled data on a <b>CSV</b> file. I used <b>git</b> and structured the project as best I could, with an IO folder, a features folder, and a data folder. I added features one at a time.`,
    lessons: `I learned a lot about <b>asynchronous JavaScript</b> doing this project. I also learned a fair bit about <b>structuring a project</b>.`,
  }
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
  window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
      navbar.classList.add("fixed-nav");
      heroBanner.classList.add("banner-grow");
      whiteLogo.classList.add("hide-white-logo");
      blkLogo.classList.remove("hide-blk-logo");
    } else {
      navbar.classList.remove("fixed-nav");
      heroBanner.classList.remove("banner-grow");
      whiteLogo.classList.remove("hide-white-logo");
      blkLogo.classList.add("hide-blk-logo");
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
    // let displayProjectsMenu = projects.reverse().map((project) => {
    let displayProjectsMenu = projects.map((project) => {
      return `<article class="project-item">
      <img src="${project.previewImg}" class="photo" alt="${project.title}">
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
let modalImgDiv = document.querySelector(".modal-img");

function projectsModals() {
  addGlobalEventListener("click", ".btn.modal-btn", e => {
    let itemId = e.target.attributes[1].value;
    // let targetProject = projects.reverse()[itemId - 1];
    // let targetProject = projects[itemId - 1];
    let targetProject = projects[itemId - 1];
    let modalImg = `<img src="${targetProject.modalImg}" alt="modal picture" />`

    // console.log(itemId);

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
      modalImgDiv.innerHTML = modalImg;
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

  // close modal on click greyspace
  addGlobalEventListener("click", ".modal-overlay", e => {
    if (e.target.matches(".modal-overlay.open-modal")) {
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