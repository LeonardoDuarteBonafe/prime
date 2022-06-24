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

    $(function(){
        if($('body').is('.index-page')){
            localStorage.setItem("clickedMaterial", "false");
        }
    });

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
            if(pageLanguage == "en"){
                document.getElementsByName('nome')[0].placeholder='Please insert your NAME!';
                document.getElementsByName('email')[0].placeholder='Please insert your EMAIL!';
            }
            else{
                document.getElementsByName('nome')[0].placeholder='Por favor, insira seu NOME!';
                document.getElementsByName('email')[0].placeholder='Por favor, insira seu EMAIL!';
            }
        }
        else{
            sendEmail(nome, email, emailMessage);
        }
    }

    function sendEmail(name, email, message){
        Email.send({
            SecureToken : "27567a17-50bc-410f-ae13-37eb1f3747d6",
            To: `sales@primegranitosemarmores.com`,
            From: 'disparador.mensagem@gmail.com',
            Subject: `${name} tem interesse no seu produto!`,
            Body: `${message}`
        }).then(function(message){
            alert("Your email was sent successfully");
            window.location.reload(false); 
        });
    }

});