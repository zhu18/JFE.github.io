/**
 * Created by JUSFOUN on 2017/12/28.
 */
//菜单滑入滑出事件
$(function(){
  $('.nav .dropdown').mouseover(function(){
    $(this).addClass('open').siblings().removeClass('open');
  });
  $('.nav .dropdown').mouseout(function(){
    $(this).removeClass('open');
  });
  $('.dropdown-submenu').mouseover(function(){
    $(this).addClass('open').siblings().removeClass('open');
  });
  $('.dropdown-submenu').mouseout(function(){
    $(this).removeClass('open');
  });
  $('.dropdown-menu').mouseout(function () {
    $(this).parents('.dropdown').removeClass('open');
  });
})

