function burgerMenu(){
    let burger = document.querySelector('.burger'),
        menu = document.querySelector('.menu'),
        lines = document.querySelectorAll('.line'),
        body = document.querySelector('body');


    burger.addEventListener('click', () => {
        menu.classList.toggle('act');
        body.classList.toggle('overflow');
        lines.forEach(line =>{
            line.classList.toggle('line__active');
            if(line.classList.contains('line__active')){
                lines[2].style.top = '13px';
            }else{
                lines[2].style.top = '23px';
            }
        });
    });
}

export default burgerMenu;