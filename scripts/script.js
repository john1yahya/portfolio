


const excludeButton = document.querySelector('.menu-x'); // Replace with your button's selector

document.addEventListener('click', function(event) {
  // Check if the clicked element is the button you want to exclude
  if (event.target === excludeButton) {
    document.querySelector('.menu-x').addEventListener('click', () => {
    document.querySelector('.mobile-nav')
    .classList.remove('active');
    // document.querySelector('.mobile-nav').style.display = 'none';
    });
    
  }else{
    document.querySelector('.menu').addEventListener('click', () => {
    document.querySelector('.mobile-nav')
    .classList.add('active');
    document.querySelector('.mobile-nav').style.display = 'flex';
});
  }
});  