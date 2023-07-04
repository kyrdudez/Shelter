
document.addEventListener('DOMContentLoaded', function() {
    const burgerIconClick = document.getElementById ('burger_320')
    const burgerUl = document.getElementById ('change_burger')
    const navAfterClick = document.getElementById ('navbar')
    const burgerLinks = document.querySelectorAll('.header_menu__navbar li a')


   


    burgerIconClick.addEventListener('click', function() {
        this.classList.toggle('active');
    });

    burgerIconClick.addEventListener ("click",function(){

    if (burgerUl.classList.contains('header_menu__navbar')){
        burgerUl.classList.remove('header_menu__navbar')
        burgerUl.classList.add ('header_320')
        document.body.style.overflow = "hidden"
    }else {
        burgerUl.classList.remove ('header_320')
        burgerUl.classList.add('header_menu__navbar')
        document.body.style.overflow = "auto"
    }


    if (navAfterClick.classList.contains('header_menu')){
        navAfterClick.classList.remove ('header_menu')
        navAfterClick.classList.add ('after_click')
    
    }else {
        navAfterClick.classList.remove ('after_click')
        navAfterClick.classList.add ('header_menu')
    }
    
    })

    burgerLinks.forEach(link => {
        link.addEventListener ('click',function(){
            burgerUl.classList.remove ('header_320__no-active')
            burgerUl.classList.remove('header_320')
            navAfterClick.classList.remove ('after_click')
            burgerIconClick.classList.remove ('active')
            burgerUl.classList.add ("header_menu__navbar")
            document.body.style.overflow = "auto";
        })
    })

});


  
  
