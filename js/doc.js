/**
 * Created by Administrator on 2017/7/12.
 */
$(document).ready(function () {

    $("html").niceScroll();
<<<<<<< HEAD

=======
>>>>>>> e1fe6337cc5ec7da79a5ca531b63546844854651
    marked.setOptions({
        gfm: true
    })
    var pagename = GetQueryString("page");
    if(!pagename) return;
    /*$.ajax({
        url: "doc/"+pagename+".md?v="+Math.random(),
        success: function (data) {
            $(".markdown-body").html(marked(data));
        }
    })*/
    $.ajax({
        url: "news/20170724.md?v="+Math.random(),
        success: function (data) {
            $(".markdown-body").html(marked(data));
        }
    })
});

function GetQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}