

$('.closeBtn').click(function(){
    let widthInner=$('.innerBox').outerWidth()
    console.log(widthInner)

    $('.sideBar').animate({left:`-${widthInner}px`},2000)
})

$('.openBtn').click(function(){
    $('.sideBar').animate({left:`0px`},2000)
})



 $('.accordionCont .box .content:first').css('display','block')

 $('.accordionCont .box h3').click(function(){
    $(this).next().slideToggle(500)
    $('.accordionCont .box .content').not($(this).next()).slideUp(500)
   
 })



 let next= new Date("2023-12-25")

setInterval(function(){
    let current= new Date().getTime()

    let distance= next - current
    //console.log(distance)

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector(".day").innerHTML=`-${days} D`
    document.querySelector(".hour").innerHTML=`${hours} H`
    document.querySelector(".min").innerHTML=`${minutes} m`
    document.querySelector(".sec").innerHTML=`${seconds} s`
    

},1000)

let maxLen= $('.area').attr('maxlength')
console.log(typeof(+maxLen))

let area= document.querySelector('.area')

area.addEventListener("keydown",function(){
    let count=area.value.length
    document.querySelector(".red").style.color='red'

console.log(count);

    document.querySelector(".maxLenSp .red").innerHTML=` ${100 - count} `
    // $(".maxLenSp").text(` ${+maxLen - count} `)
// 

 
})