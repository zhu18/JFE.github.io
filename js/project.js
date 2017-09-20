/**
 * Created by guohuimin on 2017/9/8.
 */
$(document).ready(function () {

    $.ajax({
        url: "project/9cf.md",
        success: function (data) {

            var $node = $(marked(data));
            $("li",$node[0]).each(function (index,item) {
                var $node = $(item);
                var $img = $("img",$node);
                var imgPath = $img.attr("src");
                $img.attr("src",'');
                $("img",$node).attr("data-original",imgPath);
                $("#con" + index%4).append($node);
            });
            $(".projects-markdown li p a").attr("target","_blank");
            $(".projects-markdown li").click(function(){
                var href = $(this).find("a").attr("href");
                window.open(href);
            });
            $("#projectsRow img").scrollLoad(function () {
                $(this).attr("src",$(this).attr("data-original")).on("load",function(){
                    $(this).addClass("img-loding");
                })

            })
            // $("#projectsRow img").lazyload({
            //     effect: "fadeIn"
            // });
            // $("#con1 img").lazyload({
            //     effect: "fadeIn"
            // });
            // $("#con2 img").lazyload({
            //     effect: "fadeIn"
            // });
            // $("#con3 img").lazyload({
            //     effect: "fadeIn"
            // });
        }
    })
});


