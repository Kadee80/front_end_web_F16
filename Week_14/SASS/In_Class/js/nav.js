$(function() {
    //close the dropdown nav on load
    $('#dropdown').slideUp(0);


    //on click open the subnav and apply .active to the proper ul
    $('.menu-toggle').click(function(event) {
        event.preventDefault();
        //find out which subnav ul we need to target for the class active
        var target = $(this).attr('data-dropdown');
        console.log(target);
        if ($(this).hasClass('active')) {
            $('*').removeClass('active');
            $('#dropdown').slideUp(500);
            $('.brand').removeClass('open');
            $('#nav-spacer').removeClass('nav-open');
        } else {
            // remove active class from all previously active classes
            $('*').removeClass('active');
            //add active class to clicked item and ul with proper class
            $(this).addClass('active');
            //open our subnav
            $('#dropdown').slideDown(500);
            //apply the class active to the proper subnav on click
            $(target).addClass('active');
            //apple class open to move the logo down
            $('.brand').addClass('open');
            //because its a fixed nav, we need to push the content down with a dummy spacer div
            $('#nav-spacer').addClass('nav-open');
        }



    })

});
