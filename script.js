let item = document.querySelectorAll('.logo')

let div = document.createElement('div')
let tl = gsap.timeline()

item.forEach((i)=>{
    //getting everyElement with class name .logo and passing everyElement to function animation
        // console.log(value)
        animation(i)
    
})
// bottom border animation
function animation(i){
    // running eventlistner on everyElement inside the nodelist "item"
    i.addEventListener('mouseenter', ()=>{
        div.className = 'border'
        div.style.animationName = 'full'
        i.appendChild(div)
        
        
        console.log(i)
    })
    
    i.addEventListener('mouseleave', ()=>{
        div.style.animationName = 'zero'
        setTimeout(()=>{
            i.removeChild(div)
        },300)
    })
}


// on click menudown animation
function menuDown(){

    let menubtn = document.querySelector('.menubt')

menubtn.addEventListener('click', ()=>{
    
    let largeMenu = document.querySelector('.all_menu')
    console.log(largeMenu)
    largeMenu.style.bottom = "3vw"
    gsap.to(menubtn,{
        top:'100%',
        duration: 0.1
    })
})

}
menuDown()

// text up animation
function textAnimation(){

gsap.from('.up h3',{
    y:'150%',
    delay: 0.2,
    duration: 0.6
   
})
tl.from('.up h1',{
    y:'150%',
    delay: 0.2,
    duration: 0.6
   
})

}
textAnimation()

// text down animation 
function textDown(){
    tl.from('.down p',{
        y:'-150%',
        duration:0.4,
        stagger : 0.2
    })
    tl.from('.arrow',{
        opacity : 0,
        duration:0.3
    })
}
textDown()
// mousefollower animation functoin
function mouseFollower(){
    let dot = document.querySelector('.circle')
    // console.log(dot)
    window.addEventListener('mousemove',(dets)=>{
        let x  = dets.clientX-(dot.offsetWidth/2)
        let y  = dets.clientY-(dot.offsetHeight/2)
        // console.log(x,y)

        gsap.to(dot,{
            scale:1,
            x:x,
            y:y
        })
        
    })
    document.body.addEventListener('mouseleave',()=>{
        gsap.to(dot,{
            scale:0

        })
    })
}
mouseFollower()

//arrow animation 
function arrow(){
    let arrows = document.querySelectorAll('.arrow')
    arrows.forEach((i)=>{
        i.addEventListener('mouseenter',(e)=>{
                let image = e.target.querySelector('img')
                let tl = gsap.timeline()
                console.log(image)
                tl.to(image,{
                    y:'100%',
                    duration:0.4
                })
                tl.from(image,{
                    y: '-100%',
                    duration: 0.4
                })
            })
    })
}
arrow()

//page2 text hover and animations

function page2Animation(){
    let divs= document.querySelectorAll('.page2_text')
    
    divs.forEach((i)=>{
        let text = i.querySelector('h1')
        let image = i.querySelector('img')
        let circle = document.querySelector('.circle')
        i.addEventListener('mouseenter', (dets)=>{
            gsap.to(text,{
                x:40,
                opacity: 0.4
            })
            

        })
        i.addEventListener('mouseleave',()=>{
            gsap.to(text,{
                x:0,
                opacity:1
            })

            gsap.to(image,{
                opacity:0
            })

            gsap.to(circle,{
                clearPropes: 'opacity '

            })
        })


        i.addEventListener('mousemove',(dets)=>{
            let diff = i.getBoundingClientRect()
            let x = (dets.clientX - diff.left)-(image.offsetWidth/2)
            let y = (dets.clientY - diff.top) - (image.offsetHeight/2)
            

            gsap.to(circle,{
                opacity:0.8,
                scale:10
            })
            
            gsap.to(image,{
                y: y,
                x:x,
                opacity:1
            })

            gsap.to()
        })
    })
}
page2Animation()