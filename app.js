// const box = document.getElementById("box");
// const inbox = document.getElementById("inbox");

// box.className = "box2";
// inbox.className = "inbox2"
// box.className += "box3";
// box.classList.add("box3")
// inbox.classList.remove("inbox2")




// box.style.width = "400px";
// box.style.height = "400px";
// box.style.backgroundColor = "red";
// box.style.borderRadius = "10px";
// box.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
// box.style.display = "felx";
// box.style.justifyContent = "center";
// box.style.alignItems = "center";
// box.style.flexDirection = "column";

// inbox.style = `
//         width: 300px ;
//         height: 300px ;
//         background-color: #8bdb14;
//         border-radius: 10px;
//         box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         flex-direction: column;
//      `

// !!
//  let box = document.querySelector("div"),
// input = document.querySelector("input");
// input.addEventListener("input", () => {
//         box.style.borderRadius = input.value;
//         box.style.background = input.value;
// })
// !!




navbar = document.getElementById("nav")
navbar.style = `
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content:space-around;
            box-shadow: #999 0 0 15px 0;
            position: fixed;
            top: 0px;
            background:#fff;
        `

let logo = document.getElementById("logo")

logo.style = `
            width: 200px;
            display: flex;
            align-items: center;
            cursor: pointer;
        `
let menu = document.getElementById("menu")
menu.style = `
        display: flex;
        align-items: center;

`
let p = document.querySelector("p")
p.style = `
        font-size: 40px;
        font-weight: 600;
    `
let i = document.getElementById("icon")

i.style = `
    font-size: 50px ;
    color: #FF561D;
    margin-right: 10px;
    `

let settings = document.getElementById("settings")
settings.style = `
        display: flex;
        list-style: none;
    `

// console.log(li[2])
let a1 = document.getElementById("a1")
a1.style = `
        text-decoration: none;
        color: #000;
        font-size: 20px;
        font-weight: 500;
    `
let a2 = document.getElementById("a2")
a2.style = `
        text-decoration: none;
        color: #000;
        font-size: 20px;
        font-weight: 500;
    `
let a3 = document.getElementById("a3")
a3.style = `
        text-decoration: none;
        color: #000;
        font-size: 20px;
        font-weight: 500;
    `
let a4 = document.getElementById("a4")
a4.style = `
        text-decoration: none;
        color: #000;
        font-size: 20px;
        font-weight: 500;
    `
let a5 = document.getElementById("a5")
a5.style = `
        text-decoration: none;
        color: #000;
        font-size: 20px;
        font-weight: 500;
    `
let a6 = document.getElementById("a6")
a6.style = `
        text-decoration: none;
        color: #000;
        font-size: 20px;
        font-weight: 500;
    `
let a7 = document.getElementById("a7")
a7.style = `
        text-decoration: none;
        color: #000;
        font-size: 20px;
        font-weight: 500;
    `

let menu_btn = document.getElementById("menu_btn")

menu_btn.style = `
    cursor: pointer;
    margin-left: 30px;
    width: 165px;
    height: 50px;
    border-radius: 5px;
    color: white;
    background: #FF561D;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border: none;
    
    `


let li1 = document.getElementById("li1")
li1.style = `
             margin: 0 15px;
        
        `
let li2 = document.getElementById("li2")
li2.style = `
             margin: 0 15px;
        
        `
let li3 = document.getElementById("li3")
li3.style = `
             margin: 0 15px;
        
        `
let li4 = document.getElementById("li4")
li4.style = `
             margin: 0 15px;
        
        `
let li5 = document.getElementById("li5")
li5.style = `
             margin: 0 15px;
        
        `
let li6 = document.getElementById("li6")
li6.style = `
             margin: 0 15px;
        
        `
let li7 = document.getElementById("li7")
li7.style = `
             margin: 0 15px;
        
        `

let page1 = document.getElementById("page1")
page1.style = `
        width: 100%;
        margin-top: 150px;
        display:flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: left;
         `

let paragraph1 = document.getElementById("paragraph1")
paragraph1.style = `
        width: 50%;
         `
let page1_h1 = document.getElementById("page1_h1")
page1_h1.style = `
        font-size: 50px;
        font-weight: 500;
    `

let paragraph1_tags = document.getElementById("paragraph1_tags")
paragraph1_tags.style = `
        display: flex;
        justify-content: space-between;
        font-weight:500 ;
        word-spacing: ;
        width:700px;

    `

let p_points = document.getElementById("p_points")
p_points.style = `
    display:flex;
    align-items: center;
    `

let points = document.getElementById("points")
points.style = `
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 10px;
    margin-left: 10px;
    width: 75px;
    cursor: pointer;
    `



let p_img = document.getElementById("p_img")
p_img.style = `
    width:25px ;
    height:25px ;
    border-radius: 50%;
    
    `
let pWithImg = document.getElementById("pWithImg")
pWithImg.style = `
    display:flex;
    align-items: center;
    `

let paragraph = document.getElementById("paragraph")
paragraph.style = `
        margin-top:50px;
        line-height:31.7px;
    
    `

let links_btn = document.getElementById("links_btn")
links_btn.style = `
    display:flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    position:fixed;
    left:150px;
    top:150px;
    `

let facebook = document.getElementById("facebook")
facebook.style = `
    color:#1877f2;
    font-size: 15px;
    width:50px;
    height:50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #E0E0E0;
    border-radius:50%;
    cursor:pointer;
    `
let twitter = document.getElementById("twitter")
twitter.style = `
    margin-top:15px;
    margin-bottom:15px;
    color:#1da1f2;
    font-size: 15px;
    width:50px;
    height:50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #E0E0E0;
    border-radius:50%;
    cursor:pointer;
    `
let linkedin = document.getElementById("linkedin")
linkedin.style = `
    color:#0f74b6;
    font-size: 15px;
    width:50px;
    height:50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #E0E0E0;
    border-radius:50%;
    cursor:pointer;
    `

let page2 = document.getElementById("page2")
page2.style = `
        margin-top:50px;
        width: 100%;
        display:flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: left;
    
    `



let page2_h1 = document.getElementById("page2_h1")
page2_h1.style = `
        font-size: 39px;
        font-weight: 500;
        color:#141414;
    `

let paragraph2 = document.getElementById("paragraph2")
paragraph2.style = `
        width: 50%;
         `



let images = document.getElementById("images")
images.style = `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 100px 0px;
    `
// border: 1px solid #000;


let img1_a = document.getElementById("img1_a")
img1_a.style = `
    color: #FF561D;
    font-size: 16px;
    text-decoration: none;
    font-weight: 600;
    text-align: left;
    margin:30px 0px;
    `

let img2_a = document.getElementById("img2_a")
img2_a.style = `
color: #FF561D;
    font-size: 16px;
    text-decoration: none;
    font-weight: 600;
    text-align: left;
    margin:30px 0px;
`
let img3_a = document.getElementById("img3_a")
img3_a.style = `
color: #FF561D;
    font-size: 16px;
    text-decoration: none;
    font-weight: 600;
    text-align: left;
    margin:30px 0px;
`
let img4_a = document.getElementById("img4_a")
img4_a.style = `
color: #FF561D;
    font-size: 16px;
    text-decoration: none;
    font-weight: 600;
    text-align: left;
    margin:30px 0px;
`
let img5_a = document.getElementById("img5_a")
img5_a.style = `
color: #FF561D;
    font-size: 16px;
    text-decoration: none;
    font-weight: 600;
    text-align: left;
    margin:30px 0px;
`
let img6_a = document.getElementById("img6_a")
img6_a.style = `
color: #FF561D;
    font-size: 16px;
    text-decoration: none;
    font-weight: 600;
    text-align: left;
    margin:30px 0px;
`
let img7_a = document.getElementById("img7_a")
img7_a.style = `
color: #FF561D;
    font-size: 16px;
    text-decoration: none;
    font-weight: 600;
    text-align: left;
    margin:30px 0px;
`
let img8_a = document.getElementById("img8_a")
img8_a.style = `
color: #FF561D;
    font-size: 16px;
    text-decoration: none;
    font-weight: 600;
    text-align: left;
    margin:30px 0px;
`
let img9_a = document.getElementById("img9_a")
img9_a.style = `
color: #FF561D;
    font-size: 16px;
    text-decoration: none;
    font-weight: 600;
    text-align: left;
    margin:30px 0px;
`
let img10_a = document.getElementById("img10_a")
img10_a.style = `
color: #FF561D;
    font-size: 16px;
    text-decoration: none;
    font-weight: 600;
    text-align: left;
    margin:30px 0px;
`
let img11_a = document.getElementById("img11_a")
img11_a.style = `
color: #FF561D;
    font-size: 16px;
    text-decoration: none;
    font-weight: 600;
    text-align: left;
    margin:30px 0px;
`
let img_12a = document.getElementById("img12_a")
img_12a.style = `
color: #FF561D;
    font-size: 16px;
    text-decoration: none;
    font-weight: 600;
    text-align: left;
    margin:30px 0px;
`
let img13_a = document.getElementById("img13_a")
img13_a.style = `
color: #FF561D;
    font-size: 16px;
    text-decoration: none;
    font-weight: 600;
    text-align: left;
    margin:30px 0px;
`
let img14_a = document.getElementById("img14_a")
img14_a.style = `
color: #FF561D;
    font-size: 16px;
    text-decoration: none;
    font-weight: 600;
    text-align: left;
    margin:30px 0px;
`
let img15_a = document.getElementById("img15_a")
img15_a.style = `
color: #FF561D;
    font-size: 16px;
    text-decoration: none;
    font-weight: 600;
    text-align: left;
    margin:30px 0px;
`

let img1 = document.getElementById("img1")
img1.style = `
    display:flex;
    flex-direction: column;
    `
let img2 = document.getElementById("img2")
img2.style = `
    display:flex;
    flex-direction: column;
`
let img3 = document.getElementById("img3")
img3.style = `
    display:flex;
    flex-direction: column;
`
let img4 = document.getElementById("img4")
img4.style = `
    display:flex;
    flex-direction: column;
`
let img5 = document.getElementById("img5")
img5.style = `
    display:flex;
    flex-direction: column;
`
let img6 = document.getElementById("img6")
img6.style = `
    display:flex;
    flex-direction: column;
`
let img7 = document.getElementById("img7")
img7.style = `
    display:flex;
    flex-direction: column;
`
let img8 = document.getElementById("img8")
img8.style = `
    display:flex;
    flex-direction: column;
`
let img9 = document.getElementById("img9")
img9.style = `
    display:flex;
    flex-direction: column;
`
let img10 = document.getElementById("img10")
img10.style = `
    display:flex;
    flex-direction: column;
`
let img11 = document.getElementById("img11")
img11.style = `
    display:flex;
    flex-direction: column;
`
let img12 = document.getElementById("img12")
img12.style = `
    display:flex;
    flex-direction: column;
`
let img13 = document.getElementById("img13")
img13.style = `
    display:flex;
    flex-direction: column;
`
let img14 = document.getElementById("img14")
img14.style = `
    display:flex;
    flex-direction: column;
`
let img15 = document.getElementById("img15")
img15.style = `
    display:flex;
    flex-direction: column;
`

// let card = document.getElementById("card")
// card.style = `
// width:100%
// height: 500px;
// border: 1px solid #000;
// `
