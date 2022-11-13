$(function () {



    $('.gallery__slider').slick({
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        variableWidth: true
    });
    var minusBtn = document.getElementById('button_minus');
    var numCount = document.getElementById('num_count');
    var plusBtn = document.getElementById('button_plus');
    
    plusBtn.onclick = function () {
        var qty = parseInt(numCount.value);
        qty = qty + 1;
        numCount.value = qty;
    }
    minusBtn.onclick = function () {
        var qty = parseInt(numCount.value);
        qty = qty - 1;
        numCount.value = qty;
    }

    setInterval(() => {
        if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
            $('.burger').addClass('burger--follow')
        } else {
            $('.burger').removeClass('burger--follow')
        }
    }, 0)

    $('.burger, .overlay').on('click', function (e) {
        e.preventDefault()
        $('.header__top').toggleClass('header__top--open')
        $('.overlay').toggleClass('overlay--show')
    })
})
