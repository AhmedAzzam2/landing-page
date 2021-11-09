 
 
// build page by DOM 
let div = document.createElement('nav');
div.classList = 'navbar__menu';
div.innerHTML = '<nav class="navbar__menu"><ul id="navbar__list">  </ul> </nav>';
document.body.appendChild(div);
document.querySelector('header').appendChild(div);

document.querySelector("body > main > header > h1").append('Ahmed Azzam');


// array sections 
let Sections = ['Section','Section','Section','Section'];
let number=0;
document.getElementById('navbar__list').innerHTML +=`<li class=" "> <a onclick="addSection()" style="background: white;color: black;" href="#">add Section </a> </li>`

let addSection = () => {
    number=++document.getElementsByTagName('section').length;
        
        document.getElementById('app').innerHTML +=`
        
        <section id="${ Sections[0] }${number}" data-nav="${Sections[0] }${number}" >
        <div class="landing__container">
          <h2>${ Sections[0] } ${number}</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
        
          <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
        </div>
        </section> `;
        // build the nav
        document.getElementById('navbar__list').innerHTML +=`<li class="${ Sections[0] }${number}"> <a href="#${ Sections[0] }${number}">${ Sections[Section] } ${number}</a> </li>`;
        document.location=`#${ Sections[0] }${number}`;
    }

for (Section in Sections) {
    number++;
    document.getElementById('app').innerHTML +=`
    
    <section id="${ Sections[Section] }${number}" data-nav="${Sections[Section] }${number}" >
    <div class="landing__container">
      <h2>${ Sections[Section] } ${number}</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
    
      <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
    </div>
    </section> `;
    // When clicking an item from the navigation menu, the link scroll to the appropriate section 
    document.getElementById('navbar__list').innerHTML +=`<li class="${ Sections[Section] }${number}"> <a href="#${ Sections[Section] }${number}">${ Sections[Section] } ${number}</a> </li>`
    
}
 
// Scroll to section on link click

// Set sections as active


// Get all sections that have an ID defined
let sections;

// Add an event  scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
    sections = document.querySelectorAll("section[id]");
  // Get id scroll position
  let scrollY = window.pageYOffset;
  
  //   loop  get height 
  sections.forEach(id => {
    const sectH = id.offsetHeight;
  
    const sectTop = (id.getBoundingClientRect().top + window.pageYOffset) - 51;
    sectID = id.getAttribute("data-nav");
    
    if ( scrollY > sectTop && scrollY <= sectTop + sectH ){
        // Add class 'active' to section when near top of viewport
        document.querySelector("#navbar__list > li." + sectID ).classList.add("active");
    } else {
        // remove class 'active' to section when near top of viewport
        document.querySelector("#navbar__list > li." + sectID ).classList.remove("active");
    }
  });
}


document.querySelector("body").innerHTML += ('<button id="myBtn" >Top</button>');

var mybutton = document.getElementById("myBtn");

window.onscroll =   scrollFunction = () => {
  if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.onclick = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
