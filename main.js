window.addEventListener("DOMContentLoaded", function () {

    AOS.init();

    var swiper = new Swiper(".swiperEquipe", {
        slidesPerGroup: 1,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            300: {
                slidesPerView: 1,
                spaceBetween: 20,
            },  
            576: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
        },
    });

    $('.materials .btn-more').click(function(){
        window.location.href = "materials.php";
    })

    $('header .nav-list li a').click(function(){
        materialType = $(this).attr('id');
        localStorage.setItem("materialType", materialType);
    })

    $('.carried-out .menu ul').click(function(){
        materialType = $(this).attr('id');
        localStorage.setItem("materialType", materialType);
        window.location.href = "carried-out.php";
    })

    $('.carried-out .btn-more').click(function(){
        materialType = $(this).attr('id');
        localStorage.setItem("materialType", materialType);
        window.location.href = "carried-out.php";
    })

    $('.materials-page .all-materials .menu ul').click(function(){
        materialType = $(this).attr('data-material');
        localStorage.setItem("materialType", materialType);
        productFilter();
    })

    $(function(){
        if($('body').is('.materials-page')){
            productFilter();
        }
    });

    function productFilter(){
        var materialType = localStorage.getItem("materialType");
        var lastStatusOfAll = $('.materials-page .all-materials .menu ul').attr('class');
        console.log("status: " + lastStatusOfAll);
        $('.materials-page .all-materials .menu #'+materialType).addClass('activeMaterial').siblings().removeClass('activeMaterial');

        if(materialType == "all"){
            $('.productBox').fadeIn('1000');
        }
        else{
            $('.productBox').filter('.'+materialType).fadeIn('1000');
            $('.productBox').not('.'+materialType).hide();
        }
    }

    $('.materiais .topbar .menu p').click(function(){
        var id = $(this).attr('id');
        var imageUrl = "Images/Materiais/" + id;

        //mudar
        //$('.page-empresa .empresa .images .grande div img').attr('src', imageUrl + imageClicadaId + "false");

        $('.materiais .imagens .small').children("img").eq(0).attr('src', imageUrl + "/small1.webp");
        $('.materiais .imagens .small').children("img").eq(1).attr('src', imageUrl + "/small2.webp");
        $('.materiais .imagens .big').children("img").attr('src', imageUrl + "/big.webp");

        $(this).addClass('active-material').siblings().removeClass('active-material');

        $('.materiais .imagens .small').children("img").eq(0).addClass('active-image');
        $('.materiais .imagens .small').children("img").eq(1).addClass('active-image');
        $('.materiais .imagens .big').children("img").addClass('active-image');

        $('.materiais .imagens .small').children("img").eq(0).on("animationend", function(){
            $(this).removeClass('active-image');
        }); 
        $('.materiais .imagens .small').children("img").eq(1).on("animationend", function(){
            $(this).removeClass('active-image');
        }); 
        $('.materiais .imagens .big').children("img").on("animationend", function(){
            $(this).removeClass('active-image');
        }); 
    })

    $('.industria .images .small div img').click(function(){
        var imagemPequenaId = $(this).attr('id');
        var imagemGrandeId = $('.industria .images .big img').attr('id');
        var imagemUrl = "Images/Industria/banner";
        console.log("clicou" + imagemPequenaId);

        $('.industria .images .big img').attr('id', imagemPequenaId);
        $('.industria .images .big img').attr('src', imagemUrl + imagemPequenaId + ".png");

        $(this).attr('id', imagemGrandeId);
        $(this).attr('src',  imagemUrl + imagemGrandeId + ".png");
    });

    $('.whatsapp').click(function(){
        window.open('https://api.whatsapp.com/send?phone=15615029409&text=Ol%C3%A1%2C+tenho+interesse+no+seu+produto!', '_blank'); 
    });

    class MobileNavbar{
        constructor(mobileMenu, navList, navLinks){
            this.mobileMenu = document.querySelector(mobileMenu);
            this.navList = document.querySelector(navList);
            this.navLinks = document.querySelectorAll(navLinks);
            this.activeClass = "active";
            this.handleClick = this.handleClick.bind(this);
        }

        animateLinks(){
            this.navLinks.forEach((link, index) => {
                link.style.animation ? (link.style.animation = "") : (link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.3}s`);
            });
        }

        handleClick(){
            this.navList.classList.toggle(this.activeClass);
            this.mobileMenu.classList.toggle(this.activeClass);
            this.animateLinks();
        }

        addClickEvent(){
            this.mobileMenu.addEventListener("click", this.handleClick);
        }

        init(){
            if(this.mobileMenu){
                this.addClickEvent();
            }
        }
    }

    const mobileNavbar = new MobileNavbar(
        ".mobile-menu",
        ".nav-list",
        ".nav-list li",
    );

    mobileNavbar.init();

    var gallery_swiper = new Swiper(".gallery-swiper", {
        effect: "coverflow",
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 20,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
    });

    $(function(){
        if($('body').is('.page-index')){
            localStorage.setItem("clickedMaterial", "false");
        }
    });

    $('.gallery-banner').click(function(){
        localStorage.setItem("nameMaterial", $(this).attr('id'));
        localStorage.setItem("clickedMaterial", "true");
        window.location.href = "materiais.php";

    });

    $('.destaques .box').click(function(){
        localStorage.setItem("nameMaterial", $(this).attr('id'));
        localStorage.setItem("clickedMaterial", "true");
        window.location.href = "materiais.php";

    });

    $(function(){
        if($('body').is('.page-materiais')){
            var nameMaterial = localStorage.getItem("nameMaterial");
            var clickedMaterial = localStorage.getItem("clickedMaterial");
            if(clickedMaterial == "true"){
                jQuery(function(){
                    jQuery('#' + nameMaterial).children("a").children("img").click();
                    localStorage.setItem("clickedMaterial", "false");
                });
            }
        }
    });

    $('.page-empresa .empresa .images .pequena div').click(function(){
        var imageUrl = "Images/Empresa/Galeria/";   
        var imageGrandeId = $('.page-empresa .empresa .images .grande div').attr('id');
        var imageClicadaId = $(this).attr('id');

        $('.page-empresa .empresa .images .grande div img').attr('src', imageUrl + imageClicadaId + "false");

        $('.page-empresa .empresa .images .grande div ').addClass('page-empresa-active');
        $('.page-empresa .empresa .images .grande div ').on("animationend", function(){
            $(this).removeClass('page-empresa-active');
        });

        $('.page-empresa .empresa .images .grande div').attr('id', imageClicadaId);

        $(this).attr('id', imageGrandeId);
        $(this).children("img").attr('src', imageUrl + imageGrandeId + "false");
    });

    $('.buttonEmail').click(function(){
        getFormInfos();
    });

    function getFormInfos(){
        var emailMessage = "";
        var nome = document.querySelector('#nome').value;
        var email = document.querySelector('#email').value;
        var telefone = document.querySelector('#telefone').value;
        var produto = document.querySelector('#produto').value;

        emailMessage += "Name: " + nome + ". <br>";
        emailMessage += "Email: " + email + ". <br>";
        emailMessage += "Phone: " + telefone + ". <br>";
        emailMessage += "Product: " + produto + ". <br>";
        if(nome === "" || email === ""){
            document.getElementsByName('nome')[0].placeholder='Please insert your NAME!';
            document.getElementsByName('email')[0].placeholder='Please insert your EMAIL!';
        }
        else{
            console.log("chegou aqui");
            sendEmail(nome, email, emailMessage);
        }
    }

    function sendEmail(name, email, message){
        Email.send({
            Host: "smtp.gmail.com",
            //Username: 'ldbmaildealer@gmail.com',
            Username: 'leonardodbonafe@gmail.com',
            //Password: "jzkocqnlqfdoeuhr",
            Password: "ppbnvpviefcyquhu",
            To: `leo_nardo136@hotmail.com`,
            From: 'ldbmaildealer@gmail.com',
            Subject: `${name} has interest in your product!`,
            Body: `${message}`,
        }).then(function(message){
            alert("Your email was sent successfully");
            window.location.reload(false); 
        }); 
    }

});