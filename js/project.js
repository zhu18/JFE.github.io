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
        gulp:'icon-gulp'
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
                //console.log($div);
                var technology=$div.html().split(',');
                $div.addClass("div-technology").html("");
                $div.append("<span style='font-size:13px;'>使用技术：</span>");
                $(technology).each(function (index,item) {
                    var icon = icons[item];
                    $div.append($("<i>").attr("class","icon iconfont " + icon).attr("title",item));
                });
            });
            $(".projects-markdown li a").attr("target","_blank");
            $(".projects-markdown li").click(function(){
                var href = $(this).find("a").attr("href");
                window.open(href);
            });

            $(".projects-markdown li").each(function (index,item) {
                var i = $("<i class='icon iconfont icon-github1' />").css({"float":"right"});
                var a_url = $("p:eq(0) a",$(this)).attr("href");
                $(item).append(i);
                var strArray = a_url.split("/")
                var s1 = strArray[2].split(".")[0];
                var s2 = strArray[3];
                $(".icon-github1",$(this)).attr("href","https://github.com/"+s1+"/"+s2);
                //跳转到git页面
                $(".icon-github1",$(this)).click(function (){
                    var href = $(this).attr("href")
                    window.open(href);
                    return false;
                })
            })

            $("#projectsRow img").scrollLoad(function () {
                $(this).attr("src",$(this).attr("data-original")).on("load",function(){
                    $(this).addClass("img-loding");
                })
            })
        }
    })
});


