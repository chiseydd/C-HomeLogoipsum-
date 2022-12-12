function tabs(){
    let tabs = document.querySelectorAll('.top__tabs-btn');
    let tabsContent = document.querySelectorAll('.tab__con');
    let tabsParent = document.querySelector('.top__tabs-items');
    
    function hideTabContent(){
        tabsContent.forEach(item =>{
            item.classList.add('hide');
            item.classList.remove('show','fade');
        });
    
        tabs.forEach(item =>{
            item.classList.remove('active');
        });
    }
    
    function showTabContent(i = 0){
        tabsContent[i].classList.add('show');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('active');
    }
    
    hideTabContent();
    showTabContent();
    
    tabsParent.addEventListener('click', function(event) {
        const target = event.target;
        if(target && target.classList.contains('top__tabs-btn')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

export default tabs;