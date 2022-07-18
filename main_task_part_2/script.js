let offset = 0; //смещение от верхнего края
const sliderLine= document.querySelector('.slider-line');
document.querySelector('.slider-next').addEventListener('click', function() {
    offset += 160;
    if (offset > 390) {
        offset = 0;
    }
    sliderLine.style.top = offset + 'px';
});



$(document).ready(function() {
    let amount_product = 0;
    $('#plus').on('click',function() {
        amount_product = parseInt($("#text").val());
        if (!isNaN(amount_product)) {
    
            $("text").val(amount_product + 1);
        }
    });

    $("#minus").click(function() {
        amount_product = parseInt($("#text").val());
        if (!isNaN(amount_product) && amount_product > 0) {

            $("text").val(amount_product - 1);
        }
    });

    amount_product = parseInt($("#text").val());
    $("#buy").click(function() {
        if (!isNaN(amount_product)) {
            alert(amount_product);
        }
    });

});


