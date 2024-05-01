const htmlIcon = document.querySelector("#htmlIcon")
const cssIcon = document.querySelector("#cssIcon")
const jsIcon = document.querySelector("#jsIcon")
const reactIcon = document.querySelector("#reactIcon")
const gitIcon = document.querySelector("#gitIcon")
const githubIcon = document.querySelector("#githubIcon")
const chromeIcon = document.querySelector("#chromeIcon")
const npmIcon = document.querySelector("#npmIcon")
const vuejsIcon = document.querySelector("#vuejsIcon")

const descriptionSection = document.querySelector("#description")

htmlIcon.addEventListener("click", ()=>{
    descriptionSection.innerHTML = `<p class="desc">HTML5 is the latest standard of Hypertext Markup Language,
    the code that describes the structure and presentation of web pages.</p>`
    descriptionSection.style.color="#2B4CAE"
})

cssIcon.addEventListener("click", ()=>{
    descriptionSection.innerHTML = `<p class="desc">Cascading Style Sheets is a style
    sheet language used for specifying the presentation and styling of a document written in 
    a markup language such as HTML or XML.</p>`
    descriptionSection.style.color="#2B4CAE"
})

jsIcon.addEventListener("click", ()=>{
    descriptionSection.innerHTML = `<p class="desc">JavaScript, often abbreviated as JS,
    is a programming language and core technology of the Web.</p>`
    descriptionSection.style.color="#2B4CAE"
})

reactIcon.addEventListener("click", ()=>{
    descriptionSection.innerHTML = `<p class="desc">React is a free and open-source front-end JavaScript library for building
    user interfaces based on components. It is maintained by Meta and a community of individual developers and companies.</p>`
    descriptionSection.style.color="#2B4CAE"
})

gitIcon.addEventListener("click", ()=>{
    descriptionSection.innerHTML = `<p class="desc">Git is a distributed version control system that tracks changes in any
    set of computer files, usually used for coordinating work among programmers who are collaboratively developing source 
    code during software development.</p>`
    descriptionSection.style.color="#2B4CAE"
})

githubIcon.addEventListener("click", ()=>{
    descriptionSection.innerHTML = `<p class="desc">GitHub is a developer platform that allows developers to create, 
    store, manage and share their code. It uses Git software, providing the distributed version control of Git plus 
    access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every
    project.</p>`
    descriptionSection.style.color="#2B4CAE"
})

chromeIcon.addEventListener("click", ()=>{
    descriptionSection.innerHTML = `<p class="desc">Chrome DevTools is a set of web developer tools built directly into 
    the Google Chrome browser. These tools let you inspect the rendered HTML (DOM) and network activity of your pages.</p>`
    descriptionSection.style.color="#2B4CAE"
})

npmIcon.addEventListener("click", ()=>{
    descriptionSection.innerHTML = `<p class="desc">npm is a package manager for the JavaScript programming language 
    maintained by Microsoft's npm, Inc. npm is the default package manager for the JavaScript runtime environment Node.js
    and is included as a recommended feature in the Node.js installer.</p>`
    descriptionSection.style.color="#2B4CAE"
})

vuejsIcon.addEventListener("click", ()=>{
    descriptionSection.innerHTML = `<p class="desc">Vue.js is an open-source model–view–viewmodel front end JavaScript 
    library for building user interfaces and single-page applications. It was created by Evan You, and is maintained by 
    him and the rest of the active core team members.</p>`
    descriptionSection.style.color="#2B4CAE"
})



const email = document.querySelector("#email")
const containerEmail = document.querySelector("#containerEmail")
email.addEventListener("click", ()=>{
    containerEmail.innerHTML = `<p class="containerEmail">johnshin378@gmail.com</p>`
})