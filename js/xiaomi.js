/**
 * Created by Administrator on 2015/11/5.
 */

$("#head_car").hover(function(){
    $(this).css("background", "#FBFEE9");
    $(".head_car_text").css("color", "#ff6700");
    $("#car_content").css({"width":"300px"}).animate({
        height:"100px"
    },400).finish();
},function(){
    $(this).css("background", "#424242");
    $(".head_car_text").css("color", "#b0b0b0");
    $("#car_content").css({"width":"300px"}).animate({
        height:"0px"
    },400);
})
//ËÑË÷°´Å¥µÄ±³¾°ÑÕÉ«¸Ä±ä
$("#find_but").hover(function(){
    $(this).css({"background":"#F75A74",color:"#fff"});
});
//²Ëµ¥À¸µÄÏÔÊ¾
$("#banner_menu_wrap").children().hover(function(){
    $(this).css("background","#FA4689");
    $(this).children(".banner_menu_content").css("border","1px solid #F0F0F0").show();
},function(){
    $(this).css("background","none");
    $(this).children(".banner_menu_content").css("border","0px solid #F0F0F0").hide();
})
//ÂÖ²¥
$(function(){
    var i=0;
    var big_banner_pic = $("#big_banner_pic");
    var allimg=$("#big_banner_pic li").length;
    function img_change(){
        var img_i=i*-1226+"px";
        big_banner_pic.animate({opacity:".2"},100,function(){
            big_banner_pic.css("left",img_i );
            big_banner_pic.animate({
                opacity: "1"
            }, 100);
        })
    }
    function automatic(){
        i+=1;
        if(i>=allimg){
            i=0;
        }
        img_change();
    }
    change_self_time = setInterval(automatic, 3000);
    //ÂÖ²¥ÉÏÒ»ÕÅÏÂÒ»ÕÅÍ¼±ê¿ØÖÆ
    $("#big_banner_change_wrap").hover(function(){
        clearInterval(change_self_time);
        $("#big_banner_change_wrap").children().show();
    },function(){
        change_self_time = setInterval(automatic, 3000);
        $("#big_banner_change_wrap").children().hide();
    })
    $("#big_banner_change_prev").click(function(){
        i += 1;
        if (i >= allimg) {
            i = 0;
        }
        img_change();
    })
    $("#big_banner_change_next").click(function(){
        i -= 1;
        if (i <= 0) {
            i = allimg - 1;
        }
        img_change();
    })
})

//图片滚动
var speed=50;
var tab=document.getElementById("pic");
var tab1=document.getElementById("pic1");
var tab2=document.getElementById("pic2");
tab2.innerHTML=tab1.innerHTML;
function Marquee(){
if(tab2.offsetWidth-tab.scrollLeft<=0)
tab.scrollLeft-=tab1.offsetWidth
else{
tab.scrollLeft++;
}
}
var MyMar=setInterval(Marquee,speed);
tab.onmouseover=function() {clearInterval(MyMar)};
tab.onmouseout=function() {MyMar=setInterval(Marquee,speed)};

//回到顶部
 window.onload=function(){
        var a1=document.getElementById("btn");
        var a2=document.getElementById("menu");
        //定时器
        var timer=null;
        //可视区域高度
        var clientHeight =document.documentElement.clientHeight||document.body.clientHeight;

        var istop=true;
         //滚动条滚动事件
        window.onscroll=function(){
            
            var top=document.documentElement.scrollTop||document.body.scrollTop;
            if(top >= clientHeight){
                a1.style.display="block";
                a2.style.display="block";
            }
            else{
                a1.style.display="none";
                a2.style.display="none";
            }
            //用户滑动鼠标滚轮时清除计时器
             if(!istop){
                clearInterval(timer);
             }
              istop =false;
        };

        

        a1.onclick=function(){

            timer=setInterval(function(){
              //滚动条滚动高度
              var top=document.documentElement.scrollTop||document.body.scrollTop;
              //速度
              var speed=Math.ceil(top/5);
              //标记
              istop=true;
              document.documentElement.scrollTop=document.body.scrollTop = top-speed;

            if(top==0){
                clearInterval(timer);
                 }
              },30);
            
        };
      };
//定位导航
 $(window).scroll(function () {
                var items = $("#content").find(".item");
                var menu = $("#menu");
                var top = $(document).scrollTop();
                var currentId = ""; //滚动条现在所在位置的item id
                items.each(function () {
                    var m = $(this);
                    //注意：m.offset().top代表每一个item的顶部位置
                    if (top > m.offset().top - 300) {
                        currentId = "#" + m.attr("id");//获取content里的item里的Id
                    } else {
                        return false;
                    }
                });

                var currentLink = menu.find(".current");//获取current类所在的li标签
                if (currentId && currentLink.attr("href") != currentId) {//判断current类所在的li标签里的href与当前item的id是否相同，不同时就将li里的current类移除，为nenu标签里href=“currentId”的li标签加上current类
                    currentLink.removeClass("current");
                    menu.find("[href=" + currentId + "]").addClass("current");
                }
            });
//底部
$(".foot_bottom_r").children("span").hover(function(){
    $(this).css({"background":"#ff6700",color:"#fff"});
},function(){
    $(this).css({"background":"none",color:"#ff6700"});
})