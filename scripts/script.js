document.querySelector('.menu').addEventListener('click', () => {
    document.querySelector('.mobile-nav')
    .classList.add('active');
    // document.querySelector('.mobile-nav').style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

document.querySelector('.menu-x').addEventListener('click', () => {
    document.querySelector('.mobile-nav')
    .classList.remove('active');
    // document.querySelector('.mobile-nav').style.display = 'none';
    document.body.style.overflowY = 'scroll';
});
document.querySelectorAll('.menu-element').forEach((element) => {
    element.addEventListener('click', () => {
    document.querySelector('.mobile-nav')
        .classList.remove('active');
    document.body.style.overflowY = 'scroll';
    } )
})
