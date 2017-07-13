/**
 * Created by Administrator on 2017/7/12.
 */
$(document).ready(function () {

    marked.setOptions({
        gfm: true
    })
    var pagename = GetQueryString("page");
    if(!pagename) return;
    $.ajax({
        url: "doc/"+pagename+".md",
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