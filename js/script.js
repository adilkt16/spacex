$("div.menu").on("click",function(){
    $("div.menu a ul li.one").hide();
    $("div.menu a ul li.two").css({
        "transform": "rotate(45deg)"
    })
    $("div.menu a ul li.three").css({
        "transform": "rotate(135deg)"
    })

    $(".removed").css({
        "display": "none"
    })
    $("section.menu-inside-navs").css({
        "display": "unset"
    })
    $("div.shop-and-menu").addClass("forbg").css({
        "background":"#000"
    })
})
