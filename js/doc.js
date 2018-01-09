/**
 * Created by Administrator on 2017/7/12.
 */
$(document).ready(function () {
    marked.setOptions({
        gfm: true
    })
    //获取url中的参数日期，初始化日期是写死的
    var urlParam = getHrefDate() ;
    //初始化加载 入职注意事项，
    getContentData(urlParam);
    $(".dropdown-menu li a").click(function(){
        var hrefUrl = $(this).attr("href");
        urlParam = hrefUrl.substring(hrefUrl.indexOf("#")+1,hrefUrl.length);
        getContentData(urlParam);
        //编辑内容的icon链接
        $("#doc-edit-link").attr("href","https://github.com/jusfoun-FE/jusfoun-FE.github.io/edit/master/doc/"+urlParam+".md");

    });

    //编辑内容的icon链接
    $("#doc-edit-link").attr("href","https://github.com/jusfoun-FE/jusfoun-FE.github.io/edit/master/doc/"+urlParam+".md");

});

/**
 * 获取链接中的参数日期
 * @returns {*}
 */
function getHrefDate(){
    var winHref = window.location.href;
    if(winHref.indexOf("#")>=0){
        return winHref.substring(winHref.indexOf("#")+1,winHref.length);
    }else{
        return "rules";
    }
}
/**
 * 获取周刊内容
 * @param urlParam
 */
function getContentData(urlParam){
    $.ajax({
        url: "doc/"+urlParam+".md?v="+Math.random(),
        success: function (data) {
            $(".markdown-body").html(marked(data));
            $(".markdown-content-body").addClass("active");
            
             $(".markdown-body.markdown-content-body a").attr("target","blank");

        }
    });

    Pace.restart();

    $(".markdown-content-body").removeClass("active");
}
