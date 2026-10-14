$(document).ready(function () {

    // Khởi tạo MDB
    new WOW().init();


    // =========================
    // NAVBAR
    // =========================

    $(window).scroll(function () {

        if ($(window).scrollTop() > 50) {
            $(".navbar").addClass("navbar-scrolled");
        } else {
            $(".navbar").removeClass("navbar-scrolled");
        }

    });


    // =========================
    // BACK TO TOP
    // =========================

    $(window).scroll(function () {

        if ($(this).scrollTop() > 400) {
            $("#backToTop").fadeIn();
        } else {
            $("#backToTop").fadeOut();
        }

    });


    // =========================
    // SMOOTH SCROLL
    // =========================

    $('a[href^="#"]').on("click", function (event) {

        var target = $(this.getAttribute("href"));

        if (target.length) {

            event.preventDefault();

            $("html, body").stop().animate({
                scrollTop: target.offset().top - 70
            }, 700);

        }

    });


    // =========================
    // MOBILE MENU
    // =========================

    $(".navbar-nav .nav-link, .navbar-nav .btn").on("click", function () {

        if ($(window).width() < 992) {
            $(".navbar-collapse").collapse("hide");
        }

    });


    // =========================
    // REGISTER FORM
    // =========================

    $("#registerForm").on("submit", function (event) {

        event.preventDefault();

        var name = $("#name").val();

        if (name.trim() === "") {
            alert("Vui lòng nhập họ và tên.");
            return;
        }

        alert(
            "Cảm ơn " +
            name +
            "! Thông tin đăng ký đã được ghi nhận."
        );

        $("#registerForm")[0].reset();

    });


    // =========================
    // COURSE BUTTON
    // =========================

    $(".course-body .btn").on("click", function () {

        alert(
            "Cảm ơn bạn đã quan tâm đến chương trình CodeGym Career!"
        );

    });

});