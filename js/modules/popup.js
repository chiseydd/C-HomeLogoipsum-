function popup(){
    let loginBtn = document.querySelector('.header__login'),
        popup = document.querySelector('.popup__login'),
        popupCloseBtn = document.querySelector('.popup__login-close'),
        popupWrapper = document.querySelector('.popup__login-wrapper'),
        body = document.querySelector('body');

    const openModal = function(selector, body){
        selector.style.opacity = '1';
        selector.style.visibility = 'visible';
        body.style.overflow = 'hidden';
    };
    const closeModal = function(selector, body){
        selector.style.opacity = '0';
        selector.style.visibility = 'hidden';
        body.style.overflow = 'unset';
    };

    loginBtn.addEventListener('click', () =>{
        openModal(popup, body);
    });
    popupCloseBtn.addEventListener('click', () =>{
        closeModal(popup, body);
    });
    popupWrapper.addEventListener('click', (e) =>{
        let target = e.target;
        if(target === popupWrapper){
            closeModal(popup, body);
        }
    });
}

export default popup;