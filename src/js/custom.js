// Your app code
console.log(`Hello ${process.env.HELLO}`);

$(function () {
    $('.navbar-brand span').css({
        'color' : '#C8C8C9',
        'letter-spacing' : '0.1rem',
        'text-transform' : 'uppercase',
        'margin-left' : '0.2rem',
        'font-weight' : '700',
    }).delay(20).fadeIn('slow');
});