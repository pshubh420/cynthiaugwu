let item = document.querySelectorAll('.logo')

let div = document.createElement('div')

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
    menubtn.style.top = '100%'
})

}
menuDown()

// text up animation
gsap.from('.up h3',{
    y:'150%',
    delay: 0.2,
    duration: 0.6
   
})

// mousefollower animation functoin
function mouseFollower(){
    let dot = document.querySelector('.circle')
    // console.log(dot)
    window.addEventListener('mousemove',(dets)=>{
        let x  = dets.clientX-5
        let y  = dets.clientY-5
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

