// Menu data structure
var menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog', href: '#', subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ]
  },
  {
    text: 'orders', href: '#', subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ]
  },
  {
    text: 'account', href: '#', subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ]
  },
];

const mainEl = document.querySelector("main")
mainEl.style.background = "var(--main-bg)"
mainEl.innerHTML = "<h1>SEI Rocks!</h1>"
mainEl.classList.add("flex-ctr")

const topMenuEl = document.querySelector("#top-menu")
document.querySelector("#top-menu").style.height = "100%";
topMenuEl.style.background = "var(--top-menu-bg)"
topMenuEl.classList.add("flex-around")



// task 4.0
const subMenuEl = document.querySelector("#sub-menu")

// task 4.1
document.querySelector("#sub-menu").style.height = "100%"

// task 4.2
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)"

// task 4.3
subMenuEl.classList.add('flex-around')

// task 4.4
subMenuEl.style.position = "absolute"

// task 4.5
subMenuEl.style.top = "0"

// task 5.1
const topMenuLinks = topMenuEl.querySelectorAll("a")
let showingSubMenu = false

menuLinks.forEach(function (str) {
  const topMenuLinks = document.createElement("a")
  topMenuLinks.setAttribute("href", str.href)
  topMenuLinks.textContent = str.text
  topMenuEl.append(topMenuLinks)
  console.log(str.text)
})


// task 5.2
topMenuEl.addEventListener("click", (evt) => {
  evt.preventDefault();
  // console.log(evt.target.tagName.toLowerCase())
  if (evt.target.tagName.toUpperCase() !== "A") {
    return;
  }

  // task 5.3
  if (evt.target.classList.contains("active")) {
    evt.target.classList.remove("active");
    showingSubMenu = false;
    subMenuEl.style.top = "0";
    return;
  }
  console.log(topMenuLinks)
  // task 5.4
  topMenuLinks.forEach((arg) => {
    arg.classList.remove("active");
  })


  // task 5.5
  evt.target.classList.add("active")





  // task 5.6
  let text = evt.target.textContent
  let currentLink = {}
  for (let i = 0; i < menuLinks.length; i++) {
    if (text === menuLinks[i].text) {
      showingSubMenu = menuLinks[i].hasOwnProperty("sublinks")
      currentLink = menuLinks[i]
    }
  }
  // console.log(showingSubMenu)




  // task 5.7
if(!showingSubMenu) {
  subMenuEl.style.top = "100%"
  buildSubMenu(currentLink)
} else {
  subMenuEl.style.top = "0%"
  console.log(subMenuEl.style.top)
}


// task 5.8
  function buildSubMenu() {
    subMenuEl.innerHTML = "";
    console.log(subMenuEl);
    currentLink.subLinks.forEach((link) => {
      let a = document.createElement("A")
      a.setAttribute("href", link.href)
      a.textContent = link.text
      subMenuEl.append(a)
    });
  }
// 6.0
subMenuEl.addEventListener("click", (evt) => {
  evt.preventDefault();
if (evt.target.tagName !== "A") {
  return;
}

// 6.1
showingSubMenu = false;
subMenuEl.style.top = "0";
// 6.2
topMenuLinks.forEach((arg) => {
  arg.classList.remove("active");
});
// 6.3

mainEl.innerHTML = `<h1 style="text-transform:uppercase;">${evt.target.text}</h1`;
// 6.4 is attached in Step 5.
});

// 6.4
if (evt.target.text === 'about'){
  mainEl.innerHTML = `<h1 style="text-transform:uppercase;">${evt.target.text}</h1`;
}
});






























