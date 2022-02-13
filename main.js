$(function () {
    //1.侧边栏
    $("#circle1 img,#circle2 img").hide();
    $("#leftup,#leftdown").on("mouseover", function () {
        $(".side").stop();
        $("#leftup").animate({ top: "78%", left: "42%" }, { duration: 100, queue: false });
        $("#leftdown").animate({ top: "-5%", left: "42%" }, { duration: 100, queue: false });
        $("#circle1 img").show();
    })
    $("#leftup,#leftdown").on("mouseleave", function () {
        $(".side").stop();
        $("#leftup").animate({ top: "80%", left: "40%" }, { duration: 100, queue: false });
        $("#leftdown").animate({ top: "-7%", left: "40%" }, { duration: 100, queue: false });
        $("#circle1 img").hide();
    })
    $("#rightup,#rightdown").on("mouseover", function () {
        $(".side1").stop();
        $("#rightup").animate({ top: "78%", left: "-2%" }, { duration: 100, queue: false });
        $("#rightdown").animate({ top: "-5%", left: "-2%" }, { duration: 100, queue: false });
        $("#circle2 img").show();
    })
    $("#rightup,#rightdown").on("mouseleave", function () {
        $(".side1").stop();
        $("#rightup").animate({ top: "80%", left: "0%" }, { duration: 100, queue: false });
        $("#rightdown").animate({ top: "-5.6%", left: "0%" }, { duration: 100, queue: false });
        $("#circle2 img").hide();
    })

    //2.轮播图,点击左右
    // $("#media1 li").eq(0);
    $("#media1 li").eq(0).children().width("48%");
    $("#number1 li").eq(0).siblings().children().hide();
    $("#title1 li").eq(0).siblings().hide();
    $(".issue1 li").eq(0).siblings().hide();
    $("#list img").eq(0).css({width:"1.8%",opacity: "1"});
    var i = 0;
    let length = $("#media1").children().length - 1;
    $(".side").on("click", function () {
        $("#media1 li").eq(i).children().attr("transform-origin", "left up");
        if (i == 0) {
            i = length;
            $("#media1 li").eq(0).children().animate({ width: "0" }, { duration: 300, queue: false });
            $("#media1 li").eq(i).children().attr("transform-origin", "left up");
            $("#media1 li").eq(i).children().animate({ width: "48%" }, { duration: 300, queue: false });
            $("#number1 li").eq(0).children().stop().animate({ left: "30%" }, "quick").fadeOut("quick", function () {
                $("#number1 li").eq(i).children().stop().fadeIn("quick");
                $("#number1 li").eq(0).children().css("left", "23.5%")
            })
            $("#title1 li").eq(0).stop().animate({ left: "28%" }, "slow").fadeOut("quick", function () {
                $("#title1 li").eq(i).stop().fadeIn("quick");
                $("#title1 li").eq(0).css("left", "20%")
            })
            $(".issue1 li").eq(0).stop().animate({ left: "29%" }, "slow").fadeOut("quick", function () {
                $(".issue1 li").eq(i).stop().fadeIn("quick");
                $(".issue1 li").eq(0).css("left", "21%")
            })
        }
        else {
            $("#media1 li").eq(i--).children().animate({ width: "0" }, { duration: 300, queue: false });
            $("#media1 li").eq(i).children().attr("transform-origin", "left up");
            $("#media1 li").eq(i).children().animate({ width: "48%" }, { duration: 300, queue: false });
            $("#number1 li").eq(i + 1).children().stop().animate({ left: "30%" }, "20").fadeOut("quick", function () {
                $("#number1 li").eq(i).children().stop().fadeIn("quick");
                $("#number1 li").eq(i + 1).children().css("left", "23.5%")
            })
            $("#title1 li").eq(i + 1).stop().animate({ left: "28%" }, "slow").fadeOut("quick", function () {
                $("#title1 li").eq(i).stop().fadeIn("quick");
                $("#title1 li").eq(i + 1).css("left", "20%")
            })
            $(".issue1 li").eq(i + 1).stop().animate({ left: "29%" }, "slow").fadeOut("quick", function () {
                $(".issue1 li").eq(i).stop().fadeIn("quick");
                $(".issuel li").eq(i + 1).css("left", "21%")
            })
        }
        $("#list img").eq(i).animate({width:"1.8%",opacity: "1"});
        $("#list img").eq(i).siblings().animate({width:"1.5%",opacity: "0.3"});
    })
    $(".side1").on("click", function () {
        $("#media1 li").eq(i).children().attr("transform-origin", "right bottom");
        if (i == length) {
            i = 0;
            $("#media1 li").eq(length).children().animate({ width: "0" }, { duration: 300, queue: false });
            $("#media1 li").eq(i).children().attr("transform-origin", "right bottom");
            $("#media1 li").eq(i).children().animate({ width: "48%" }, { duration: 300, queue: false });
            $("#number1 li").eq(length).children().stop().animate({ left: "17%" }, "20").fadeOut("quick", function () {
                $("#number1 li").eq(0).children().stop().fadeIn("quick");
                $("#number1 li").eq(length).children().css("left", "23.5%")
            })
            $("#title1 li").eq(length).stop().animate({ left: "12%" }, "slow").fadeOut("quick", function () {
                $("#title1 li").eq(0).stop().fadeIn("quick");
                $("#title1 li").eq(length).css("left", "20%")
            })
            $(".issue1 li").eq(length).stop().animate({ left: "13%" }, "slow").fadeOut("quick", function () {
                $(".issue1 li").eq(0).stop().fadeIn("quick");
                $(".issue1 li").eq(length).css("left", "21%");
            })
        }
        else {
            $("#media1 li").eq(i++).children().animate({ width: "0" }, { duration: 300, queue: false });
            $("#media1 li").eq(i).children().attr("transform-origin", "right bottom");
            $("#media1 li").eq(i).children().animate({ width: "48%" }, { duration: 300, queue: false });
            $("#number1 li").eq(i - 1).children().stop().animate({ left: "17%" }, "20").fadeOut("quick", function () {
                $("#number1 li").eq(i).children().stop().fadeIn("quick");
                $("#number1 li").eq(i - 1).children().css("left", "23.5%")
            })
            $("#title1 li").eq(i - 1).stop().animate({ left: "12%" }, "slow").fadeOut("quick", function () {
                $("#title1 li").eq(i).stop().fadeIn("quick");
                $("#title1 li").eq(i - 1).css("left", "20%")
            })
            $(".issue1 li").eq(i - 1).stop().animate({ left: "13%" }, "slow").fadeOut("quick", function () {
                $(".issue1 li").eq(i).stop().fadeIn("quick");
                $(".issue1 li").eq(i - 1).css("left", "21%");
            })
        }
        $("#list img").eq(i).animate({width:"1.8%",opacity: "1"});
        $("#list img").eq(i).siblings().animate({width:"1.5%",opacity: "0.3"});
    })

    //3.底部切换,i原图，index目标图
    $("#footer img").on("mouseover", function () {
        $(this).animate({ opacity: "1", width: "70%" });
    })
    $("#footer img").on("mouseleave", function () {
        $(this).animate({ opacity: "0.5", width: "65%" });
    })
    $("#footer img").on("click", function () {
        let index = $("#footer img").index(this);
        $("#media1 li").eq(i).children().animate({ width: "0" }, { duration: 300, queue: false });
        $("#media1 li").eq(index).children().attr("transform-origin", "left up");
        $("#media1 li").eq(index).children().animate({ width: "48%" }, { duration: 300, queue: false });
        $("#number1 li").eq(i).children().stop().animate({ left: "30%" }, "quick").fadeOut("quick", function () {
            $("#number1 li").eq(index).children().stop().fadeIn("quick");
            $("#number1 li").eq(i).children().css("left", "23.5%")
        })
        $("#title1 li").eq(i).stop().animate({ left: "28%" }, "slow").fadeOut("quick", function () {
            $("#title1 li").eq(index).stop().fadeIn("quick");
            $("#title1 li").eq(i).css("left", "20%")
        })
        $(".issue1 li").eq(i).stop().animate({ left: "29%" }, "slow").fadeOut("quick", function () {
            $(".issue1 li").eq(index).stop().fadeIn("quick");
            $(".issue1 li").eq(i).css("left", "21%")
        })
        i = index;
        $("#list img").eq(i).animate({width:"1.8%",opacity: "1"});
        $("#list img").eq(i).siblings().animate({width:"1.5%",opacity: "0.3"});
    })

    //4.小标识
    $("#list img").on("mouseover", function () {
        $(this).animate({ opacity: "1" });
    })
    $("#list img").on("mouseleave", function () {
        if (i != $("#list img").index(this)) {
            $(this).animate({ width: "1.5%", opacity: "0.3" });
        }
    })
    $("#list img").on("click", function () {
        let index = $("#list img").index(this);
        $(this).animate({ width: "1.8%", opacity: "1" });
        $("#media1 li").eq(i).children().animate({ width: "0" }, { duration: 300, queue: false });
        $("#media1 li").eq(index).children().attr("transform-origin", "left up");
        $("#media1 li").eq(index).children().animate({ width: "48%" }, { duration: 300, queue: false });
        $("#number1 li").eq(i).children().stop().animate({ left: "30%" }, "quick").fadeOut("quick", function () {
            $("#number1 li").eq(index).children().stop().fadeIn("quick");
            $("#number1 li").eq(i).children().css("left", "23.5%")
        })
        $("#title1 li").eq(i).stop().animate({ left: "28%" }, "slow").fadeOut("quick", function () {
            $("#title1 li").eq(index).stop().fadeIn("quick");
            $("#title1 li").eq(i).css("left", "20%")
        })
        $(".issue1 li").eq(i).stop().animate({ left: "29%" }, "slow").fadeOut("quick", function () {
            $(".issue1 li").eq(index).stop().fadeIn("quick");
            $(".issue1 li").eq(i).css("left", "21%")
        })
        $(this).siblings().animate({ width: "1.5%", opacity: "0.5" });
        i = index;
    })
})