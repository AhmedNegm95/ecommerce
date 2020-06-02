$(function () {

    $(".discount h4").click(function () {
        $(".discount-info").slideToggle(500, function () {

        })
    });
    
    $(".previous-add select").change(function(){
        var index = this.selectedIndex;
        if(index == 0) {
            $(".details").fadeIn(500);
        }
        else {
            $(".details").fadeOut(500);
        }
    })



});

