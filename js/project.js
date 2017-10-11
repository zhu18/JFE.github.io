/**
 * Created by guohuimin on 2017/9/8.
 */
$(document).ready(function () {
    var icons={
        jquery:'icon-jquery',
        vue:'icon-vuejs',
        echarts:'icon-echart',
        layui:'icon-layer',
        css3:'icon-css',
        handlebars:'icon-qishihorseman1',
        vue:'icon-vuejs',
        bootstrap:'icon-bootstrap',
        webpack:'icon-webpack1',
        mintui:'icon-yezi',
    };
    $.ajax({
        url: "project/9cf.md",
        success: function (data) {

            var $node = $(marked(data)),$item;
            $("li",$node[0]).each(function (index,item) {
                $item = $(item);
                var $img = $("img:eq(0)",$item);
                var imgPath = $img.attr("src");
                $img.attr({"src":'',"data-original":imgPath});
                $("img:eq(1)",$item).attr("tag",1);
                $("#con" + index%4).append($item);
                //使用技术
                var $div = $("div:eq(0)",$item);
                var technology=$div.html().split(',');
                $div.html("");
                $(technology).each(function (index,item) {
                    var icon = icons[item];
                    $div.append($("<i>").attr("class","icon iconfont " + icon));
                });

            });
            $(".projects-markdown li a").attr("target","_blank");
            $(".projects-markdown li").click(function(){
                var href = $(this).find("a").attr("href");
                window.open(href);
            });
            $("#projectsRow img").scrollLoad(function () {
                $(this).attr("src",$(this).attr("data-original")).on("load",function(){
                    $(this).addClass("img-loding");
                })

            $("img[tag=1]").click(function () {
                var href = $(this).parent("a").attr("href")
                window.open(href);
                return false;
                })
            // 所用技术


            })
            /*  */
        }
    })
});


