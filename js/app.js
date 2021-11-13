

// build page by DOM 
let div = document.createElement('nav'); // create nav with dom
div.classList = 'navbar__menu'; //  added class to nav and next put html
div.innerHTML = '<nav class="navbar__menu"><ul id="navbar__list">  </ul> </nav>';
document.querySelector('header').appendChild(div);

// get h1 and puted my name Ahmed Azzam by append
document.querySelector("body > main > header > h1").append('Ahmed Azzam');


// array sections 
let Sections = ['Section', 'Section', 'Section', 'Section'];
let number = 0;


// arrow function for add to last Section with li 
let SectionWithLi = () => {
  // puted html to #app 
  document.getElementById('app').innerHTML += `
    <section id="${Sections[0]}${number}" data-nav="${Sections[0]}${number}" >
      <div class="landing__container">
        <h2>${Sections[0]} ${number}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>        
        <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
      </div>
    </section> `;
  // build the nav
  document.getElementById('navbar__list').innerHTML += `
    <li class="shadow-lg ${Sections[0]}${number}"> 
      <a  href="javascript:getID('${Sections[0]}${number}')">${Sections[Section]} ${number}</a>
    </li>`;
};


for (Section in Sections) { // used SectionWithLi() for loop 
  number++;
  SectionWithLi();
};

function getID(params) {// get ID from menu and go section by scrollIntoView() smooth
  document.getElementById(params).scrollIntoView({
    behavior: 'smooth'
  });
};


window.addEventListener("scroll", navHighlighter); // Add an event  scroll

function navHighlighter() { // function add or remove class 'active' to section when near top of viewport
  
  let section = document.querySelectorAll("section[id]"); // Get all sections that have an ID defined

  let scrollY = window.pageYOffset; // Get id scroll position

  section.forEach(id => { // loop  get height 
    const sectH = id.offsetHeight;

    const sectTop = (id.getBoundingClientRect().top + window.pageYOffset) - 51;
    sectID = id.getAttribute("data-nav");

    if (scrollY > sectTop && scrollY <= sectTop + sectH) {
      // Add class 'active' to section when near top of viewport
      document.querySelector("#navbar__list > li." + sectID).classList.add("active");
      document.querySelector("#" + sectID).classList.add("active");
    } else {
      // remove class 'active' to section when near top of viewport
      document.querySelector("#navbar__list > li." + sectID).classList.remove("active");
      document.querySelector("#" + sectID).classList.remove("active");
    }
  });

};


//
document.querySelector("body").innerHTML += ('<button id="myBtn" >Top</button>'); // puted button Top html 

addEventListener('scroll', () => { // add block or none for style button event scroll 
  
  if (document.body.scrollTop > 22 || document.documentElement.scrollTop > 22) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
})


document.getElementById("myBtn").addEventListener('click', (event) => { //event for scroll to Top
  
  window.scrollTo({ top: 0, behavior: 'smooth' });

});


