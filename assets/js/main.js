// for navbar 
function toggleDiv(){ 
    let notification = document.getElementById("notifications");
    if(notification.style.display === "none"){
        notification.style.display = "block"
    }else{
        notification.style.display = "none"
    }
}
// end nav bar


$(document).ready(function(){
    $('.nav_box_notification a').click(function(){
        $('.container_drop_profile').addClass('d-none');
        $('.container_drop_noti').toggleClass('d-none');
        $('.nav_box_notification a i').toggleClass('active');
        
    });

    $('.navbar_drop_profile a').click(function(){
        $('.container_drop_noti').addClass('d-none');
        $('.container_drop_profile').toggleClass('d-none');
        $('.navbar_drop_profile a i').toggleClass('active');
        
    });



    
});

