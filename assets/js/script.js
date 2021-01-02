$(function () {
    $("nav a").click(function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var gato = this.hash;
            var globOffset = $(".navbar").height();
            $("html,body").animate({
                scrollTop: $(gato).offset().top - globOffset
            }, 800);
        };
    });
    
    $('#show-typeform').click(function (event){
        $('#typeform').removeClass('d-none');
        $(this).hide()
    });
});