$(document).ready(function () {
    var touch = $(".icon-menu"), menu = $(".div-memu"), iconMenu = $(".all_channels_zagolovok_b"), sidebar = $(".sidebar"), sidebarWidth = $("sidebar").width();

    $(touch).on("click", function (e) {
        e.preventDefault();
        menu.slideToggle();
    });
    $(iconMenu).on("click", function (e) {
        e.preventDefault();
        sidebar.slideToggle();
    });
    //$(iconMenu).click(function (e) {
    //    $(".header, .content").addClass("active");
    //    if (sidebar.css("left") != sidebarWidth) {
    //        sidebar.addClass("active");
    //        var firstClick = true;
    //        $(document).bind("click.myEvent", function (e) {
    //            if (!firstClick && $(e.target).closest(".sidebar").length == 0) {
    //                sidebar.removeClass("active");
    //                $(".header, .content").removeClass("active");
    //                $(document).unbind("click.myEvent");
    //            }
    //            firstClick = false;
    //        })
    //    }
    //    e.preventDefault();
    //});
});