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
                var imgPath = $("img",$node).attr("src");
                $("#con" + index%4).append($node);
                $(".projects-markdown li p a").attr("target","_blank");
                $("img",$node).attr("data-original",imgPath).addClass("img-loding");
                $(".projects-markdown li").click(function(){
                    var href = $(this).find("a").attr("href");
                    window.open(href);
                });
            });

            $("#con0 img").lazyload({
                effect: "fadeIn"
            });
            $("#con1 img").lazyload({
                effect: "fadeIn"
            });
            $("#con2 img").lazyload({
                effect: "fadeIn"
            });
            $("#con3 img").lazyload({
                effect: "fadeIn"
            });
        }
    })
});


