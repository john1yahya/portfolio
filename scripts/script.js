document.querySelector('.menu').addEventListener('click', () => {
    document.querySelector('.mobile-nav')
    .classList.add('active');
    document.querySelector('.mobile-nav').style.display = 'flex';
});

document.querySelector('.menu-x').addEventListener('click', () => {
    document.querySelector('.mobile-nav')
    .classList.remove('active');
    // document.querySelector('.mobile-nav').style.display = 'none';
});
