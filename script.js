$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>20){
          $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY>500){
            $('.scroll-up-btn').addClass("show")
        }else{
            $('.scroll-up-btn').removeClass("show")
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0});  
    })

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation script
    var typed=new Typed(".typing",{
        strings:["youtuber","Developer","Blogger","Freelancer","Designer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    })
    var typed=new Typed(".typing-2",{
        strings:["youtuber","Developer","Blogger","Freelancer","Designer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    })

    // owl carousel script
    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    });
});

        function sendemail(){
    var name=$('#Name').val();
    var email=$('#email').val();
    var subject=$('#Subject').val();
    var message=$('#message').val();

    var body='Name: ' + name + '<br>Email: ' + email + '<br>Subject: ' + subject + '<br>Message: ' + message;
    Email.send({
        SecureToken:'98472263-9fb7-4be0-8aa3-3a9bc6799b0a',
        To: 'tuyizereanastase1gmail.com',
        From:'tuyizereanastase1gmail.com',
        Subject:'New message on contact us form',
        Body: body
    }).then(
        message=>{
            if(message == 'OK'){
                alert(message)
            }
            else{
                alert(message)
            }
        }
    )
}