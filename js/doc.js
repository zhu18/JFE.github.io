/**
 * Created by Administrator on 2017/7/12.
 */
$(document).ready(function () {

    marked.setOptions({
        gfm: true
    })
    /*var pagename = GetQueryString("page");
    if(!pagename) return;
    $.ajax({
        url: "doc/"+pagename+".md?v="+Math.random(),
        success: function (data) {
            $(".markdown-body").html(marked(data));
            $(".markdown-body").addClass("active");
            Pace.restart();
        }
    })
    $(".markdown-body").removeClass("active");*/

    //获取url中的参数日期，初始化日期是写死的
    var urlParam = getHrefDate() ;
     setActive(urlParam);
    //初始化加载 入职注意事项，
    getContentData(urlParam);
    $(".markdown-list-warp a").click(function(){
        urlParam = $(this).attr("href").replace("#","");
        getContentData(urlParam);
        //编辑内容的icon链接
        $("#doc-edit-link").attr("href","https://github.com/jusfoun-FE/jusfoun-FE.github.io/edit/master/doc/"+urlParam+".md");
        setActive(urlParam);
       
    });

    //编辑内容的icon链接
    $("#doc-edit-link").attr("href","https://github.com/jusfoun-FE/jusfoun-FE.github.io/edit/master/doc/"+urlParam+".md");

});

function GetQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}

function setActive(urlParam){
    
     $(".markdown-list-warp li").each(function(i,v){
            var urlStr = $(this).find("a").attr("href").replace("#","");
            if(urlStr == urlParam){
                $(this).addClass("active");
            }else{
                $(this).removeClass("active");
            }
        });
}

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
