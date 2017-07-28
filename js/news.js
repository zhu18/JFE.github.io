/**
 * Created by Administrator on 2017/7/12.
 */
$(document).ready(function () {
    $("html").niceScroll();
    marked.setOptions({
        gfm: true
    });
    //��ȡurl�еĲ������ڣ���ʼ��������д����
    var urlParam = getHrefDate() ;
    //��ʼ�������ܿ��б�
    getListData(urlParam);
    //��ʼ����������һ���ܿ����ݣ�
    getContentData(urlParam);
    //�༭�ܿ����ݵ�icon����
    $("#news-edit-link").attr("href","https://github.com/jusfoun-FE/jusfoun-FE.github.io/edit/master/news/"+urlParam+".md");

    //MORE��ť�����ʾ����-����
    $(".markdown-list-more-btn").click(function(){
        $(".markdown-list-more-body").removeClass("hide").addClass("show");
    });
    //�رհ�ť���ص���
    $(".markdown-list-more-close-btn").click(function(){
        $(this).parent().removeClass("show").addClass("hide");
    });
});
/**
 * ��ȡ�����еĲ�������
 * @returns {*}
 */
function getHrefDate(){
    var winHref = window.location.href;
    if(winHref.indexOf("#")>=0){
        return winHref.substring(winHref.indexOf("#")+1,winHref.length);
    }else{
        return "2017-02-09";
    }
}
/**
 * ��ȡ�ܿ��б�
 * @param urlParam
 */
function getListData(urlParam){
    $.ajax({
        url: "news/newsList.md",
        success: function (data) {
            $(".markdown-content-body").addClass("active");
            $(".markdown-list-body,.markdown-list-more-show").html(marked(data));
            $(".markdown-list-body a,.markdown-list-more-show a").click(function(){
                urlParam = $(this).attr("href").replace("#","");
                getContentData(urlParam);
            });
            $(".markdown-list-more-show a").click(function(){
                $(".markdown-list-more-body").removeClass("show").addClass("hide");
            });
        }
    });
}
/**
 * ��ȡ�ܿ�����
 * @param urlParam
 */
function getContentData(urlParam){
    $.ajax({
        url: "news/"+urlParam+".md",
        success: function (data) {
            $(".markdown-content-body").html(marked(data));
            $(".markdown-content-body a").attr("target","_blank");
            $(".markdown-body.markdown-content-body ul li").click(function(){
                var href = $(this).find("a").attr("href");
                window.open(href);
            });
            $(".markdown-content-body").addClass("active");
        }
    });
    $(".markdown-content-body").removeClass("active");

    Pace.restart();
}