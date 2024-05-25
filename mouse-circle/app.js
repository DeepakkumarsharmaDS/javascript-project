const cursor = document.querySelector('.cursor')
// array of 10 color in hex value

const colors = [
    '#FF6633',
    '#FFB399',
    '#FF33FF',
    '#FFFF99',
    '#00B3E6',
    '#E6B333',
    '#3366E6',
    '#999966',
    '#99FF99',
    '#B34D4D',
];
// add circle on cursor and change its color as cursor move on screen
document.addEventListener('mousemove', function(event){
    moveCursor(event.pageX, event.pageY);
});

const moveCursor =  function(pageX, pageY) {
    cursor.style.left = pageX + 'px';
    cursor.style.top = pageY + 'px';

    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    cursor.style.backgroundColor = randomColor;
};