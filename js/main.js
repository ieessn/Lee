$(function() {
    //显示档案
     $("#c0").siblings().hide();
     $("#side").on("click", "#c0", function() {
      if($(".sidebar").attr("id")=="sidebar1"){
         $("#c0").css("background-image",'url("../img/Screenshot_2022-02-09-19-45-18-10_246f1504a3bec15.jpg")');
         $(".down").hide();
         $(".sidebar").attr("id","sidebar2");
         $("#c0").siblings().show();
      }
      else{
         $("#c0").css("background-image",'url("../img/Screenshot_2022-02-09-19-45-41-05_246f1504a3bec15.jpg")');
         $("#c0").siblings().hide()
         $(".sidebar").attr("id","sidebar1");
         $("#lee").show();
         window.location.reload();
      }
      });




     //切换图片
     $("#txt").hide();
     $("#side").on("click",".down",function(){
      if($(this).attr("id")=="lee"){
         $(this).fadeOut("quick",function(){$("#txt").fadeIn("slow");});

      }
      else{
         $(this).fadeOut("quick",function(){$(".down").show();$("#txt").hide();});
      }
     });
     
     //轮播图
     $("#content").load("./html/home.html");

     //tab栏切换
$("#side").on("click", "a", function() {
         let sId = $(this).parent("li").attr("id"); 
         let pathn, i;
         i="#"+sId;
         switch(i) {
             case "#c1":
                 pathn = "lee.html";
                 break;
             case "#c2":
                 pathn = "ak.html";
                 break;
             case "#c3":
                 pathn = "hong.html";
                 break;
             case "#c4":
                 pathn = "hu.html";
                 break;
         }
      if(pathn){
      $("#content").load("./html/"+pathn);
      }
     })

     //显示立绘
     var flag=1;
     $(".sidebar").on("click","a",function(){
          switch($(this).parent("li").attr("id")){
              case "c1":
               $(".bottom").find("div").attr("id","before1");
               break;
               case "c2":
               $(".bottom").find("div").attr("id","before2");
               break;
               case "c3":
               $(".bottom").find("div").attr("id","before3");
               break;
               case "c4":
               $(".bottom").find("div").attr("id","before4");
               break;
           }
           if(flag){
            $(this).parent("li").siblings().stop().fadeOut(function(){
               $("#c0").show();
               $(".sidebar").attr("id","sidebar3");
             
               $(".bottom").slideDown();
             });
             flag=0;
           }
           else{
            $(".bottom").slideUp();
            $(".sidebar").attr("id","sidebar2");
            $(this).parent("li").siblings().stop().fadeIn(function(){
                $("#content").load("./html/none.html");
            });
             flag=1;
           }
        
     })


});
