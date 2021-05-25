
/*
=============== 
Projects Modals Dynamic Content
===============

when page loads add empty modal to page, hidden by default
when 'open modal' button clicked, check id
populate modal with content of corresponding id
display modal
when clicking exit, remove populated content & hide modal

*/


const modalItemsContent = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "item-1.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    history: `I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up.`,
    vision: `Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin, tattooed meggings franzen la croix cray. Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof party hammock master cleanse pop-up truffaut, bicycle rights skateboard affogato readymade sustainable deep v live-edge schlitz narwhal.`,
    goals: `Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid cold-pressed roof party. Small batch adaptogen coloring book heirloom. Letterpress food truck hammock literally hell of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa chicharrones.`,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    history: `I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up.`,
    vision: `Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin, tattooed meggings franzen la croix cray. Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof party hammock master cleanse pop-up truffaut, bicycle rights skateboard affogato readymade sustainable deep v live-edge schlitz narwhal.`,
    goals: `Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid cold-pressed roof party. Small batch adaptogen coloring book heirloom. Letterpress food truck hammock literally hell of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa chicharrones.`,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "item-3.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    history: `I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up.`,
    vision: `Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin, tattooed meggings franzen la croix cray. Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof party hammock master cleanse pop-up truffaut, bicycle rights skateboard affogato readymade sustainable deep v live-edge schlitz narwhal.`,
    goals: `Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid cold-pressed roof party. Small batch adaptogen coloring book heirloom. Letterpress food truck hammock literally hell of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa chicharrones.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "item-4.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    history: `I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up.`,
    vision: `Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin, tattooed meggings franzen la croix cray. Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof party hammock master cleanse pop-up truffaut, bicycle rights skateboard affogato readymade sustainable deep v live-edge schlitz narwhal.`,
    goals: `Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid cold-pressed roof party. Small batch adaptogen coloring book heirloom. Letterpress food truck hammock literally hell of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa chicharrones.`,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "item-5.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    history: `I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up.`,
    vision: `Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin, tattooed meggings franzen la croix cray. Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof party hammock master cleanse pop-up truffaut, bicycle rights skateboard affogato readymade sustainable deep v live-edge schlitz narwhal.`,
    goals: `Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid cold-pressed roof party. Small batch adaptogen coloring book heirloom. Letterpress food truck hammock literally hell of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa chicharrones.`,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "item-6.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    history: `I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up.`,
    vision: `Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin, tattooed meggings franzen la croix cray. Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof party hammock master cleanse pop-up truffaut, bicycle rights skateboard affogato readymade sustainable deep v live-edge schlitz narwhal.`,
    goals: `Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid cold-pressed roof party. Small batch adaptogen coloring book heirloom. Letterpress food truck hammock literally hell of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa chicharrones.`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "item-7.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    history: `I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up.`,
    vision: `Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin, tattooed meggings franzen la croix cray. Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof party hammock master cleanse pop-up truffaut, bicycle rights skateboard affogato readymade sustainable deep v live-edge schlitz narwhal.`,
    goals: `Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid cold-pressed roof party. Small batch adaptogen coloring book heirloom. Letterpress food truck hammock literally hell of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa chicharrones.`,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "item-8.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    history: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    vision: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    goals: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "item-9.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    history: `I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up.`,
    vision: `Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin, tattooed meggings franzen la croix cray. Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof party hammock master cleanse pop-up truffaut, bicycle rights skateboard affogato readymade sustainable deep v live-edge schlitz narwhal.`,
    goals: `Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid cold-pressed roof party. Small batch adaptogen coloring book heirloom. Letterpress food truck hammock literally hell of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa chicharrones.`,
  },
  {
    id: 10,
    title: "steak dinner",
    category: "dinner",
    price: 39.99,
    img: "item-10.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    history: `I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up.`,
    vision: `Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin, tattooed meggings franzen la croix cray. Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof party hammock master cleanse pop-up truffaut, bicycle rights skateboard affogato readymade sustainable deep v live-edge schlitz narwhal.`,
    goals: `Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid cold-pressed roof party. Small batch adaptogen coloring book heirloom. Letterpress food truck hammock literally hell of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa chicharrones.`,
  }
];
const modalContent = document.querySelector(".modal-content");

function loadModalContent (modalItemsContent, modalContent) {
  addGlobalEventListener("click", ".btn.modal-btn", e => {
    let itemId = e.target.attributes[1].value;
    let displayModalContent = modalItemsContent.map(function(item) {

      console.log("button id: " + itemId)
      console.log("modalitemcontent id: " + item.id)

      if (itemId === item.id) {
        return `<article class="modal-content">
        <!-- single item -->
        <div class="modal-content-item active" id="history">
          <h4>history</h4>
          <p>${item.history}</p>
        </div>
        <!-- end of single item -->
        <!-- single item -->
        <div class="modal-content-item" id="vision">
          <h4>vision</h4>
          <p>${item.vision}</p>
        </div>
        <!-- end of single item -->
        <!-- single item -->
        <div class="modal-content-item" id="goals">
          <h4>goals</h4>
          <p>${item.goals}</p>
        </div>
        <!-- end of single item -->
        </article>`
      }
      // console.log(displayModalContent)
      displayModalContent = displayModalContent.join("");
      console.log(displayModalContent)
      console.log(modalContent)
      modalContent.innerHTML = displayModalContent;
      console.log(modalContent)
    });

  });
}

loadModalContent(modalItemsContent, modalContent);

// addGlobalEventListener("click", ".btn.modal-btn", e => {
  
//   // if (e.target.contains(`data-id="3"`)) {
//   //   console.log(true);
//   // }
  
//   let itemId = e.target.attributes[1].value;

//   console.log(itemId);

//   if (e.target.matches(".btn.modal-btn")) {
//     modalOverlay.classList.add("open-modal");
//   }
// });


// const modalBtns = document.querySelectorAll(".btn.modal-btn");
// console.log(modalBtns);

// modalBtns.forEach(function (btn) {
//   btn.addEventListener("click", function (event) {

//     console.log("working")
    // console.log(event.currentTarget.dataset.id)

    // const category = event.currentTarget.dataset.id;
    // const menuCategory = menu.filter(function (menuItem) {
    //   if (menuItem.category === category) {
    //     return menuItem;
    //   }
    // });
    // if (category === "all") {
    //   displayMenuItems(menu);
    // } else {
    //   displayMenuItems(menuCategory);
    // }
//   });
// });