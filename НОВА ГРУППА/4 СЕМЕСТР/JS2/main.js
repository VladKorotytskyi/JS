const listEl = document.querySelector('.js-tags');

listEl.addEventListener('click', onTagsClicked);
function onTagsClicked(event) {
    // console.log(event)
    if(event.target.nodeName !== 'BUTTON'){
        return
    }
    
    const currentActiveTag = document.querySelector('.tags__btn--active')
    if(currentActiveTag){
        currentActiveTag.classList.remove('tags__btn--active')
    }
    event.target.classList.add('tags__btn--active');
};
