$(function() {
    
    $("#grid").click(function() {
        if(!($("#list-grid").hasClass("grid")))
            $("#list-grid").removeClass("list").addClass("grid");
    });
    
    
    $("#list").click(function() {
        if(!($("#list-grid").hasClass("list")))
            $("#list-grid").removeClass("grid").addClass("list");
    });    
    
    
})