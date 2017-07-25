/**
 * Created by Administrator on 2017/7/12.
 */
$(document).ready(function () {

    $("html").niceScroll();
    marked.setOptions({
        gfm: true
    });
    var pagename = GetQueryString("page") ? GetQueryString("page") : "" ;
    $.ajax({
        url: "news/newsList.md",
        success: function (data) {
            $(".markdown-list-body").html(marked(data));
        }
    });
    //news-edit-link  https://github.com/jusfoun-FE/jusfoun-FE.github.io/edit/master/news/news.md


    if(!pagename){
        pagename = "2017-02-09";
    }
    $.ajax({
        url: "news/"+pagename+".md",
        success: function (data2) {
            $(".markdown-content-body").html(marked(data2));
        }
    });

    $("#news-edit-link").attr("href","news.html?page="+pagename);

});

function GetQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}