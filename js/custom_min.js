var $head = $("#ha-header");
$(".ha-waypoint").each(function (b) {
    var a = $(this), c = a.data("animateDown"), d = a.data("animateUp");
    a.waypoint(function (e) {
        if (e === "down" && c) {
            $head.attr("class", "ha-header " + c)
        } else {
            if (e === "up" && d) {
                $head.attr("class", "ha-header " + d)
            }
        }
    }, {offset: "100%"})
});

$(document).ready(function () {

    new Ractive({
        el: '#filter_container',
        template: '#teamRTemp',
        data: {
            teams: app.teams
        }
    });

    $("html").niceScroll();
    $(".scroller").getNiceScroll().resize();
    $(".flexslider").flexslider({
        animation: "fade", start: function (b) {
            $("body").removeClass("loading")
        }
    });
    $("span.mask").hover(function () {
        $(this).siblings("a img").addClass("hovering");
        $(this).parent().siblings(".portfolio-title").children("h4").stop().animate({top: -20}, 350)
    }, function () {
        $(this).siblings("a img").removeClass("hovering");
        $(this).parent().siblings(".portfolio-title").children("h4").stop().animate({top: 0}, 350)
    });
    $("a[href*=#]:not([href=#])").click(function () {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
            var b = $(this.hash);
            b = b.length ? b : $("[name=" + this.hash.slice(1) + "]");
            if (b.length) {
                $("html,body").animate({scrollTop: b.offset().top}, 500);
                return false
            }
        }
    });
    //$("#passion_form").validate();
    $(".scrollLoading").scrollLoading();
    /*var a;
     a = new GMaps({
     el: "#map",
     lat: -12.043333,
     lng: -77.028333,
     zoomControl: true,
     zoomControlOpt: {style: "SMALL", position: "TOP_LEFT"},
     panControl: true,
     streetViewControl: false,
     mapTypeControl: true,
     overviewMapControl: false
     })*/
});

$(function () {
    var b = $("#filter_container");
    b.isotope({itemSelector: ".element"});
    var a = $("#filter_header .option-set"), c = a.find("a");
    var teams = {
        "*": '前端团队总共五个组，基本以组为单位对外提供项目支持；我们有的擅长CSS3、H5，有的擅长前端框架库的运用，也有可视化人才，还有全栈工程师，这就是强大的我们。',
        ".pro1": '项目一组现有6名成员 五男一女  ，主要负责应用平台部分项目的的前端工作，我们爱好学习，我们钻研新技术，我们能快速完成领导给予的任务。',
        ".pro2": '我们是积极，团结，友爱，乐于分享，让你安全感十足的团队。',
        ".pro3": '更好，更快，更小，精益求精',
        ".pro4": '面向对象面向君，不负代码不负卿',
        ".pub": '面对挑战，我们有强行带走胜利的决心，fighting...'
    };
    c.click(function () {
        var h = $(this);
        if (h.hasClass("selected")) {
            return false
        }
        var f = h.parents(".option-set");
        f.find(".selected").removeClass("selected");
        h.addClass("selected");
        var d = {}, e = f.attr("data-option-key"), g = h.attr("data-option-value");
        g = g === "false" ? false : g;
        d[e] = g;
        $("#tramIntro").html(teams[g]);
        if (e === "layoutMode" && typeof changeLayoutMode === "function") {
            changeLayoutMode(h, d)
        } else {
            b.isotope(d)
        }
        return false
    })
});
