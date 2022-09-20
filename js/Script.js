let home = document.getElementById("home");
let about = document.getElementById("About");
let process = document.getElementById("process");
let Testimonials = document.getElementById("Testimonials");
let tables = document.getElementById("tables");
let Blog = document.getElementById("Blog");
let Us = document.getElementById("Us")



/////////////
let parentTree = document.querySelector(".three");
let tree = document.querySelectorAll(".three div");

let priceparent  = document.querySelector(".tables");
let price = document.querySelectorAll(".pricing>div");

let part1 =document.querySelector(".part1");
let part1Img = document.querySelector(".part1 div img");

let processParent = document.querySelector(".process");
let processchild = document.querySelector(".process .cards");


let part2 =document.querySelector(".part2");
let part2Img = document.querySelector(".part2 div img");

let work = document.querySelector(".work");
let child = document.querySelectorAll(".work .conWork div h1");
///////////////


onload = function(){
    /* start animation to cards About */
    setTimeout(function(){
        tree[0].style.cssText = `
        opacity:1;
        margin:0 0 0 0;
        `;
    },50)
    setTimeout(function(){
        tree[1].style.cssText = `
        opacity:1;
        margin:0 0 0 0;
        `;
    },150)
    setTimeout(function(){
        tree[2].style.cssText = `
        opacity:1;
        margin:0 0 0 0;
        `;
    },250)
    /* start animation to cards About */
}

onscroll = function(){
    if(window.scrollY >=part1.offsetTop-400){
        part1Img.style.cssText = `
        margin-left:0;
    margin-right:0;
    opacity: 1;
        `;
    }
    if(window.scrollY >=part1.offsetTop+50){
        part2Img.style.cssText = `
        margin-left:0;
    margin-right:0;
    opacity: 1;
        `;
    }
    if(window.scrollY >= priceparent.offsetTop-150){
        setTimeout(function(){
            price[0].style.cssText = `
            opacity:1;
            margin:0 0 0 0;
            `;
        },50)
        setTimeout(function(){
            price[1].style.cssText = `
            opacity:1;
            margin:0 0 0 0;
            `;
        },150)
        setTimeout(function(){
            price[2].style.cssText = `
            opacity:1;
            margin:0 0 0 0;
            `;
        },250)
    }
    // add Numbers 
    if(window.scrollY >= work.offsetTop-450){
        
        child.forEach(e=>{
            let m = setInterval(()=>{
                e.innerHTML = +e.innerHTML+1;
                if(e.innerHTML >= +e.getAttribute("data-goal")){
                    clearInterval(m)
                    e.innerHTML = e.getAttribute("data-goal")
                }
            },30)
        })
    }

    // start active
    if(window.scrollY >= home.offsetTop-50){
        removeActive();
        let parent = document.querySelector(".homeli").parentElement;
        parent.classList.add("active")
    }
    if(window.scrollY >= about.offsetTop-50){
        removeActive();
        let parent = document.querySelector(".Aboutli").parentElement;
        parent.classList.add("active")
    }
    if(window.scrollY >= process.offsetTop-50){
        removeActive();
        let parent = document.querySelector(".processli").parentElement;
        parent.classList.add("active")
    }
    if(window.scrollY >= Testimonials.offsetTop-50){
        removeActive();
        let parent = document.querySelector(".Testimonialsli").parentElement;
        parent.classList.add("active")
    }
    if(window.scrollY >= tables.offsetTop-50){
        removeActive();
        let parent = document.querySelector(".tablesli").parentElement;
        parent.classList.add("active")
    }
    if(window.scrollY >= Blog.offsetTop-50){
        removeActive();
        let parent = document.querySelector(".Blogli").parentElement;
        parent.classList.add("active")
    }
    if(window.scrollY >= Us.offsetTop-50){
        removeActive();
        let parent = document.querySelector(".Usli").parentElement;
        parent.classList.add("active")
    }
    
    
    
    // end active
     
}
function copyright(){
    let date = new Date().getFullYear();
    document.querySelector(".copyright .years").innerHTML = date;
}
copyright()



function list(){
    let icon = document.querySelector("#check");
    let label = document.querySelector(".list");
    let ullist = document.getElementById("ul");
    let lilist = document.querySelectorAll("#ul li");
    label.addEventListener("click",function(){
        if(icon.checked == false){
            ullist.style.display="block"
        }else{
            ullist.style.display="none"
        }
    })
    lilist.forEach(e=>{
        e.addEventListener("click",function(){
            e.parentElement.style.display="none"
            if(icon.checked == true){
                icon.checked = false;
            }
        })
    })

}
list()



function removeActive(){
    let lilist = document.querySelectorAll("#ul li");
    lilist.forEach(e=>{
        e.classList.remove("active")
    })
}