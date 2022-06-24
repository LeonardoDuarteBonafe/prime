window.addEventListener("DOMContentLoaded", function () {

    AOS.init();

    var isAnimationRunning = false;

    var language = {
        eng: {
            index: {
                header: {
                    inicio: "HOME",
                    industria: "INDUSTRY",
                    materiais: "MATERIALS",
                    contato: "CONTACT"
                },
                carousel_top: {
                    banner_1: "LUXURY AND MODERNITY",
                    banner_2: "TIMELESS BEAUTY",
                    banner_3: "QUALITY AND CLASS",
                    banner_4: "FOR BOLD PROJECTS",
                },
                industria: {
                    nossa: "OUR",
                    industria: "INDUSTRY",
                    text: "Prime Granitos e Mármores is a company that seeks to add quality, commitment and excellence to its materials and services in the marble and granite processing sector for the most diverse applications. Our mission is to be a reference in the stone market with committed professionals whose main objective is your satisfaction. We have a wide range of high quality products available to serve both domestic and foreign markets. Talk to one of our salespeople, get to know our materials and be surprised",

                },
                materiais: {
                    titulo: "MATERIALS",    
                },
                equipe: {
                    titulo_1: "KNOW OUR",
                    titulo_2: "STAFF",
                },
                form: {
                    titulo_1: "CONTACT",
                    titulo_2: "US",
                    nome: "NAME",
                    assunto: "SUBJECT",
                    mensagem: "MESSAGE",
                    botao: "SENT",
                },
            },
            produtos: {
                //nome das galerias
            },
        },
    };

    var pageLanguage = localStorage.getItem("language");

    if(pageLanguage == "en"){
        //header
        $('.nav-list').children("li").eq(0).children("a").text(language.eng.index.header.inicio);
        $('.nav-list').children("li").eq(1).children("a").text(language.eng.index.header.industria);
        $('.nav-list').children("li").eq(2).children("a").text(language.eng.index.header.materiais);
        $('.nav-list').children("li").eq(3).children("a").text(language.eng.index.header.contato);

        //carousel-top
        $('.top-carousel .carousel-inner').children("div").eq(0).children('section').children('div').eq(1).children('p').text(language.eng.index.carousel_top.banner_1);
        $('.top-carousel .carousel-inner').children("div").eq(1).children('section').children('div').eq(1).children('p').text(language.eng.index.carousel_top.banner_2);
        $('.top-carousel .carousel-inner').children("div").eq(2).children('section').children('div').eq(1).children('p').text(language.eng.index.carousel_top.banner_3);
        $('.top-carousel .carousel-inner').children("div").eq(3).children('section').children('div').eq(1).children('p').text(language.eng.index.carousel_top.banner_4);

        //industria
        $('.industria .info h2').text(language.eng.index.industria.nossa);
        $('.industria .info h1').text(language.eng.index.industria.industria);
        $('.industria .info p').text(language.eng.index.industria.text);

        //materiais
        $('.materiais .titulo h2').text(language.eng.index.materiais.titulo);

        //equipe
        $('.equipe .titulo h2').text(language.eng.index.equipe.titulo_1);
        $('.equipe .titulo h1').text(language.eng.index.equipe.titulo_2);

        //contato
        $('.contato .titulo p').text(language.eng.index.form.titulo_1);
        $('.contato .titulo h2').text(language.eng.index.form.titulo_2);
        $('.contato .form').children('input').eq(0).attr("placeholder",language.eng.index.form.nome);
        $('.contato .form').children('input').eq(2).attr("placeholder",language.eng.index.form.assunto);
        $('.contato .form').children('textarea').attr("placeholder",language.eng.index.form.mensagem);
        $('.contato .form .buttonEmail').text(language.eng.index.form.botao);


    }

    $('.language a').click(function(){
        localStorage.setItem("language", $(this).attr('id'));
        setTimeout(function () {
            location.reload(true);
        }, 150)
    });

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
                slidesPerView: 2,
                spaceBetween: 20,
            },
            769: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
        },
    });

    /*$('.materials .btn-more').click(function(){
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
    }*/

    /*$('.materiais .topbar .menu p').click(function(){
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
*/
    $('.industria .images .small div img').click(function(){
        if(!isAnimationRunning){
            var imagemPequenaId = $(this).attr('id');
            var imagemGrandeId = $('.industria .images .big img').attr('id');
            var imagemUrl = "Images/Industria/banner";
            console.log("clicou" + imagemPequenaId);

            $('.industria .images .big img').attr('src', imagemUrl + imagemPequenaId + ".webp");

            isAnimationRunning = true;    

            $('.industria .images .big').addClass('industria-active');
            var smallImage = $(this).parent();
            smallImage.addClass('industria-small-active');
            $('.industria .images .big').on("animationend", function(){
                $(this).removeClass('industria-active');
                smallImage.removeClass('industria-small-active');
                isAnimationRunning = false;
            });

            $('.industria .images .big img').attr('id', imagemPequenaId);

            $(this).attr('id', imagemGrandeId);
            $(this).attr('src',  imagemUrl + imagemGrandeId + ".webp");
        }
    });

    /*$('.whatsapp').click(function(){
        window.open('https://api.whatsapp.com/send?phone=15615029409&text=Ol%C3%A1%2C+tenho+interesse+no+seu+produto!', '_blank'); 
    });*/

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

    /*var gallery_swiper = new Swiper(".gallery-swiper", {
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
*/
    $(function(){
        if($('body').is('.index-page')){
            localStorage.setItem("clickedMaterial", "false");
        }
    });

    /*$('.gallery-banner').click(function(){
        localStorage.setItem("nameMaterial", $(this).attr('id'));
        localStorage.setItem("clickedMaterial", "true");
        window.location.href = "materiais.php";

    });

    $('.destaques .box').click(function(){
        localStorage.setItem("nameMaterial", $(this).attr('id'));
        localStorage.setItem("clickedMaterial", "true");
        window.location.href = "materiais.php";

    });*/

    $('.index-page .materiais .itens .item').click(function(){
        var nameMaterial = $(this).children('a').attr('id');
        localStorage.setItem("nameMaterial", nameMaterial);
        localStorage.setItem("clickedMaterial", "true");
        window.location.href = "materiais.php";
    });

    $(function(){
        if($('body').is('.material-page')){
            var nameMaterial = localStorage.getItem("nameMaterial");
            var clickedMaterial = localStorage.getItem("clickedMaterial");
            if(clickedMaterial == "true"){
                jQuery(function(){
                    jQuery('#' + nameMaterial).click();
                    localStorage.setItem("clickedMaterial", "false");
                });
            }
        }
    });

    /*$('.page-empresa .empresa .images .pequena div').click(function(){
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
    });*/

    $('.buttonEmail').click(function(){
        getFormInfos();
    });

    function getFormInfos(){
        var emailMessage = "";
        var nome = document.querySelector('#nome').value;
        var email = document.querySelector('#email').value;
        var telefone = document.querySelector('#assunto').value;
        var produto = document.querySelector('#mensagem').value;

        emailMessage += "Nome: " + nome + ". <br>";
        emailMessage += "Email: " + email + ". <br>";
        emailMessage += "Assunto: " + telefone + ". <br>";
        emailMessage += "Telefone: " + produto + ". <br>";
        if(nome === "" || email === ""){
            document.getElementsByName('nome')[0].placeholder='Please insert your NAME!';
            document.getElementsByName('email')[0].placeholder='Please insert your EMAIL!';
        }
        else{
            sendEmail(nome, email, emailMessage);
        }
    }

    function sendEmail(name, email, message){
        Email.send({
            /*Host: "smtp.elasticemail.com",
            //Username: 'ldbmaildealer@gmail.com',
            Username: 'disparador.mensagem@gmail.com',
            //Password: "jzkocqnlqfdoeuhr",
            Password: "5347107AAECD2542DC5E4B11C6B587993564",*/
            SecureToken : "27567a17-50bc-410f-ae13-37eb1f3747d6",
            To: `sales@primegranitosemarmores.com`,
            From: 'disparador.mensagem@gmail.com',
            Subject: `${name} tem interesse no seu produto!`,
            Body: `${message}`
        }).then(function(message){
            alert("Your email was sent successfully");
            window.location.reload(false); 
        });
        /*.then(function(message){
            alert("Your email was sent successfully");
            window.location.reload(false); 
        }); */
    }

});