$(document).ready(function($) {
    $(".bodding").click(function () {
        window.location.href = "About.html"
    });
    $(".bodding_2").click(function () {
        window.location.href = "Contact-Data.html"
    });
    $(".bodding_3").click(function () {
        window.location.href = "Price-list.html"
    });
    $(".body_1").hover(function () {
        $("#text").css({
            transition: "0.5s",
            transform: "translateY(-100px) rotateY(0deg)",
            opacity: "1"
        });
    }, function () {
        $("#text").css({
            transition: "0.5s",
            transform: "translateY(0px) rotateY(180deg)",
            opacity: "0"
        });
    });
    $(".body_1").hover(function () {
        $("#text-smaller").css({
            transform: "translateY(-100px) rotateY(0deg)",
            opacity: "1",
            transition: "0.5s"
        });
    }, function () {
        $("#text-smaller").css({
            transform: "translateY(0px) rotateY(180deg)",
            opacity: "0",
            transition: "0.5s"
        });
    });
    $(".body_1").hover(function () {
        $(".body_1").css({
            transform: "translateY(-100px)"
        });
    }, function () {
        $(".body_1").css({
            transform: "translateY(0px)"
        });
    });
    $(".body_2").hover(function () {
        $(".body_2").css({
            transform: "translateY(-100px)"
        });
    }, function () {
        $(".body_2").css({
            transform: "translateY(0px)"
        });
    });
    $(".body_3").hover(function () {
        $(".body_3").css({
            transform: "translateY(-100px)"
        });
    }, function () {
        $(".body_3").css({
            transform: "translateY(0px)"
        });
    });
    $(".Header").click(function (){
        window.location.href  = "index.html"
    });
    $(".body_2").hover(function (){
        $("#text_2").css({
            transition: "0.5s",
            transform: "translateY(-100px) rotateY(0deg)",
            opacity: "1"
        });
    }, function (){
        $("#text_2").css({
            transition: "0.5s",
            transform: "translateY(0px) rotateY(180deg)",
            opacity: "0"
        });
    });
    $(".body_2").hover(function (){
        $("#text-smaller_2").css({
            transform: "translateY(-100px) rotateY(0deg)",
            opacity: "1",
            transition: "0.5s"
        });
    }, function (){
        $("#text-smaller_2").css({
            transform: "translateY(0px) rotateY(180deg)",
            opacity: "0",
            transition: "0.5s"
        });
    });
    $(".body_3").hover(function (){
        $("#text_3").css({
            transition: "0.5s",
            transform: "translateY(-100px) rotateY(0deg)",
            opacity: "1"
        });
    }, function (){
        $("#text_3").css({
            transition: "0.5s",
            transform: "translateY(0px) rotateY(180deg)",
            opacity: "0"
        });
    });
    $(".body_3").hover(function (){
        $("#text-smaller_3").css({
            transform: "translateY(-100px) rotateY(0deg)",
            opacity: "1",
            transition: "0.5s"
        });
    }, function (){
        $("#text-smaller_3").css({
            transform: "translateY(0px) rotateY(180deg)",
            opacity: "0",
            transition: "0.5s"
        });
    });
    window.onload = function (){
        $(".loader_on").css({
           opacity: "0"
        });
    }


    // $("#img-rotate_1").click(function () {
    //     $(".bodding").toggleClass("isRotate");
    // });
});