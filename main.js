const tabsTitle = document.querySelectorAll('.tabs__title');
const tabsContent = document.querySelectorAll('.tabs__content');

tabsTitle.forEach(item=>{
    item.addEventListener('click', event =>{
        const tabsTitleTarget = event.target.getAttribute('data-tab');
        
        tabsTitle.forEach(item => item.classList.remove('active'))
        tabsContent.forEach(item => item.classList.add('hidden-tabs-content'))

        item.classList.add('active');
        document.getElementById(tabsTitleTarget).classList.remove('hidden-tabs-content')
    });
})