$(document).ready(function () {
    // swap left and middle
    $('#swap-left').click(function () {
        const $imgs = $('img');
        const leftSrc = $imgs[0].src;
        const middleSrc = $imgs[1].src;

        $imgs[0].src = middleSrc;
        $imgs[1].src = leftSrc;
    });

    // swap right and middle
    $('#swap-right').click(function () {
        console.log('clicked!')
        const $imgs = $('img');
        const rightSrc = $imgs[2].src;
        const middleSrc = $imgs[1].src;

        $imgs[2].src = middleSrc;
        $imgs[1].src = rightSrc;
    });

    // randomly either swap to the left or right
    $('#swap-middle').click(function () {
        const $imgs = $('img');
        const randomIndex = Math.random() > .5 ? 0 : 2;
        console.log('randomIndex', randomIndex);

        const middleSrc = $imgs[1].src;
        const otherSrc = $imgs[randomIndex].src;

        $imgs[1].src = otherSrc;
        $imgs[randomIndex].src = middleSrc;
    });
})
