let item = document.querySelectorAll('.logo')
let dot = document.querySelector('.circle')
let div = document.createElement('div')
let tl = gsap.timeline()
let screenSize = 400
let x = window.matchMedia(`(max-width : ${400}px)`)
console.log(x)

item.forEach((i) => {
    //getting everyElement with class name .logo and passing everyElement to function animation
    // console.log(value)
    animation(i) 
    

})

// bottom border animation
function animation(i) {
    // running eventlistner on everyElement inside the nodelist "item"
    i.addEventListener('mouseenter', () => {
        div.className = 'border'
        div.style.animationName = 'full'
        i.appendChild(div)


        console.log(i)
    })

    i.addEventListener('mouseleave', () => {
        div.style.animationName = 'zero'
        setTimeout(() => {
            i.removeChild(div)
        }, 300)
    })
}


// on click menudown animation
function menuDown() {

    let menubtn = document.querySelector('.menubt')

    menubtn.addEventListener('click', () => {

        let largeMenu = document.querySelector('.all_menu')
        console.log(largeMenu)
        largeMenu.style.bottom = "3vw"
        gsap.to(menubtn, {
            top: '100%',
            duration: 0.1
        })
    })

}
menuDown()

// text up animation
function textAnimation() {

    gsap.from('.up h3', {
        y: '150%',
        delay: 0.2,
        duration: 0.6

    })
    tl.from('.up h1', {
        y: '150%',
        delay: 0.2,
        duration: 0.6

    })

}
textAnimation()

// text down animation 
function textDown() {
    tl.from('.down p', {
        y: '-150%',
        duration: 0.4,
        stagger: 0.2
    })
    tl.from('.arrow', {
        opacity: 0,
        duration: 0.3
    })
}
textDown()
// mousefollower animation functoin
function mouseFollower() {
    
    // console.log(dot)
    window.addEventListener('mousemove', (dets) => {
        let x = dets.clientX - (dot.offsetWidth / 2)
        let y = dets.clientY - (dot.offsetHeight / 2)
        // console.log(x,y)

        gsap.to(dot, {
            scale: 1,
            x: x,
            y: y
        })

    })
    document.body.addEventListener('mouseleave', () => {
        gsap.to(dot, {
            scale: 0

        })
    })
}
mouseFollower()

//arrow animation 
function arrow() {
    let arrows = document.querySelectorAll('.arrow')
    arrows.forEach((i) => {
        i.addEventListener('mouseenter', (e) => {
            let image = e.target.querySelector('img')
            let tl = gsap.timeline()
            console.log(image)
            tl.to(image, {
                y: '100%',
                duration: 0.4
            })
            tl.from(image, {
                y: '-100%',
                duration: 0.4
            })
        })
    })
}
arrow()

//page2 text hover and animations

function page2Animation() {
    let divs = document.querySelectorAll('.page2_text')
    let big_circle = document.querySelector('.view')
    

    divs.forEach((i) => {

        let text = i.querySelector('h1')
        let image = i.querySelector('img')



        i.addEventListener('mouseenter', (dets) => {



            gsap.to(text, {
                x: 40,
                opacity: 0.2
            })



        })

        i.addEventListener('mouseleave', () => {
            gsap.to(text, {
                x: 0,
                opacity: 0.6
            })

            gsap.to(image, {
                opacity: 0
            })

            dot.style.display = 'block'
            gsap.to(big_circle,{
                scale: 0,
                opacity:0
            })


        })


        i.addEventListener('mousemove', (dets) => {
            

            let diff = i.getBoundingClientRect()
            // console.log(big_circle.offsetHeight/2,big_circle.offsetWidth/2)
            
            let y = (dets.clientY - diff.top) - (image.offsetHeight/2)
            let x = (dets.clientX - diff.left) - (image.offsetWidth/2)

            gsap.to(image, {
                y: y,
                x: x,
                opacity: 1
            })

            dot.style.display = 'none'

            gsap.to(big_circle,{
                scale:1,
                opacity:1,
                x: dets.clientX - (big_circle.offsetWidth/2),
                y: dets.clientY - (big_circle.offsetHeight/2)
            })



        })
    })
}
page2Animation()

//scroll animation
function scrollAnimation(){
        let divUp = document.querySelector('.page2main')
        gsap.from(divUp,{
            y:'35%',
            duration:1,
            ease:'power2',
            scrollTrigger: {
                trigger: '.page2main',
                // markers:true,
            },
        })


        let page3text = document.querySelector('#page3text')
        gsap.from(page3text,{
            opacity:0,
            duration:1,
            scrollTrigger:{
                trigger: page3text,
                start: 'top 85%',
                // markers:true,
                
            }
        })
}
scrollAnimation()

//time
function time(){
    setInterval(() => {
    let amPm;
    let date = new Date()
    let hour = date.getHours()
    let minuts = date.getMinutes()
    // console.log(hour,minuts)

    let time = document.querySelector('.time p:nth-child(2)')
    // console.log(time)


    if (hour < 13){
        amPm = 'am'
    }
    else if(hour>=13){
        amPm = 'pm'
        hour = hour - 12

    }

        time.innerHTML = `${hour}:${minuts} \xa0 ${amPm}`
    }, 1000);
}
time()

function mobileAnimation(){

setTimeout(()=>{



    if (screen.width <= screenSize ){
        let time = 500
        item.forEach((i) => {
            let c = document.createElement("div")
       function linestart() {
            c.className = 'border'
            c.style.animationName = 'full'
            setTimeout(()=>{

                i.appendChild(c)
            }, time+=200)
    
    
        }
        linestart()
    
        function lineend() {

            setTimeout(()=>{

                c.style.animationName = 'zero'
            },3500)


            setTimeout(() => {
                console.log(i)
                i.removeChild(c)
            }, 4900)
        }
        lineend()
    })

    }
},1800)
}

mobileAnimation()

// x.addEventListener("change", function() {
//     mobileAnimation(x);
//   });