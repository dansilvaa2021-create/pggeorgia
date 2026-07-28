/*==================================================
            GEORGIA PREMIUM WEBSITE
            Parte 1
==================================================*/

document.addEventListener("DOMContentLoaded",()=>{

/*=========================================
            LOADER
=========================================*/

const loader=document.createElement("div");

loader.id="loader";

loader.innerHTML=`

<div class="loader-logo">

GEORGIA

</div>

`;

document.body.appendChild(loader);

window.addEventListener("load",()=>{

setTimeout(()=>{

loader.classList.add("hide");

setTimeout(()=>{

loader.remove();

},800);

},1000);

});

/*=========================================
            MENU
=========================================*/

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.classList.add("header-scroll");

}else{

header.classList.remove("header-scroll");

}

});

/*=========================================
        MENU ATIVO
=========================================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=window.scrollY;

const offset=section.offsetTop-200;

const height=section.offsetHeight;

if(top>=offset && top<offset+height){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});

/*=========================================
        SCROLL SUAVE
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const destino=document.querySelector(this.getAttribute("href"));

if(destino){

window.scrollTo({

top:destino.offsetTop-80,

behavior:"smooth"

});

}

});

});

/*=========================================
        APARECER AO ROLAR
=========================================*/

const reveal=document.querySelectorAll(

".hero,.card3d,.produto-card,.titulo,.sobre,.depoimento-card,.contato"

);

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:.15

});

reveal.forEach(el=>observer.observe(el));

/*=========================================
        PARALLAX HERO
=========================================*/

const video=document.querySelector(".hero video");

window.addEventListener("scroll",()=>{

const value=window.scrollY;

if(video){

video.style.transform=

`translateY(${value*.25}px) scale(1.08)`;

}

});

/*=========================================
        TITULO CINEMA
=========================================*/

const titulo=document.querySelector(".hero h1");

if(titulo){

titulo.style.opacity="0";

titulo.style.transform="translateY(50px)";

setTimeout(()=>{

titulo.style.transition="1.4s";

titulo.style.opacity="1";

titulo.style.transform="translateY(0)";

},800);

}

/*=========================================
        SUBTITULO
=========================================*/

const texto=document.querySelector(".hero p");

if(texto){

texto.style.opacity="0";

texto.style.transform="translateY(40px)";

setTimeout(()=>{

texto.style.transition="1.6s";

texto.style.opacity="1";

texto.style.transform="translateY(0)";

},1200);

}

});
/*======================================================
                CONTAGEM REGRESSIVA evento1
======================================================*/

// Altere para a data do seu evento
const dataEvento = new Date("September 20, 2026 08:00:00").getTime();

function atualizarContador(){

    const agora = new Date().getTime();

    const distancia = dataEvento - agora;

    if(distancia <= 0){

        document.getElementById("dias").innerHTML = "00";
        document.getElementById("horas").innerHTML = "00";
        document.getElementById("minutos").innerHTML = "00";
        document.getElementById("segundos").innerHTML = "00";

        return;

    }

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));

    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));

    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    document.getElementById("dias").innerHTML = String(dias).padStart(2,"0");
    document.getElementById("horas").innerHTML = String(horas).padStart(2,"0");
    document.getElementById("minutos").innerHTML = String(minutos).padStart(2,"0");
    document.getElementById("segundos").innerHTML = String(segundos).padStart(2,"0");

}

setInterval(atualizarContador,1000);

atualizarContador();

/*======================================================
                FAQ
======================================================*/

const perguntas = document.querySelectorAll(".faq-question");

perguntas.forEach(botao=>{

    botao.addEventListener("click",()=>{

        const item = botao.parentElement;

        document.querySelectorAll(".faq-item").forEach(faq=>{

            if(faq !== item){

                faq.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});

/*======================================================
                ANIMAÇÃO AO ROLAR
======================================================*/

const elementos = document.querySelectorAll(

".card,.timeline-item,.item,.speaker,.galeria img,.depoimento,.faq-item"

);

const aparecer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{threshold:.15});

elementos.forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(70px)";

el.style.transition=".8s";

aparecer.observe(el);

});

/*======================================================
                PARALLAX HERO
======================================================*/

const hero = document.querySelector(".hero");

window.addEventListener("mousemove",(e)=>{

const x = (window.innerWidth/2 - e.pageX)/45;

const y = (window.innerHeight/2 - e.pageY)/45;

hero.style.backgroundPosition=`${x}px ${y}px`;

});

/*======================================================
                BRILHO BOTÃO
======================================================*/

const botao = document.querySelector(".btn-comprar");

setInterval(()=>{

botao.classList.toggle("pulse");

},1200);

/*======================================================
                PREÇO PULSANDO
======================================================*/

const preco = document.querySelector(".valor span");

setInterval(()=>{

preco.style.transform="scale(1.15)";

setTimeout(()=>{

preco.style.transform="scale(1)";

},250);

},1600);

/*======================================================
                SCROLL SUAVE
======================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const destino=document.querySelector(this.getAttribute("href"));

if(destino){

destino.scrollIntoView({

behavior:"smooth"

});

}

});

});

/*======================================================
                BOTÃO VOLTAR AO TOPO
======================================================*/

const voltar = document.createElement("div");

voltar.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

voltar.style.position="fixed";
voltar.style.bottom="30px";
voltar.style.right="30px";
voltar.style.width="60px";
voltar.style.height="60px";
voltar.style.borderRadius="50%";
voltar.style.display="flex";
voltar.style.alignItems="center";
voltar.style.justifyContent="center";
voltar.style.background="#FFD700";
voltar.style.color="#111";
voltar.style.cursor="pointer";
voltar.style.fontSize="22px";
voltar.style.boxShadow="0 0 25px rgba(255,215,0,.5)";
voltar.style.transition=".4s";
voltar.style.opacity="0";
voltar.style.zIndex="999";

document.body.appendChild(voltar);

window.addEventListener("scroll",()=>{

if(window.scrollY>600){

voltar.style.opacity="1";

}else{

voltar.style.opacity="0";

}

});

voltar.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/*======================================================
                TILT DOS CARDS
======================================================*/

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateX=((y-rect.height/2)/18);

const rotateY=((rect.width/2-x)/18);

card.style.transform=

`perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(900px) rotateX(0) rotateY(0)";

});

});

/*======================================================
                LOADER
======================================================*/

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});

/*======================================================
                CONSOLE
======================================================*/

console.log("Georgia Experience Premium");
console.log("Sistema iniciado com sucesso.");
/*======================================================
                java evento3
======================================================*/
// ===============================
// LOADER
// ===============================

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    if (loader) {
        loader.classList.add("loader-hidden");

        setTimeout(() => {
            loader.remove();
        }, 700);
    }
});

// ===============================
// HEADER AO ROLAR
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 80) {
        header.classList.add("header-scroll");
    } else {
        header.classList.remove("header-scroll");
    }

});

// ===============================
// BOTÃO VOLTAR AO TOPO
// ===============================

const btnTopo = document.createElement("button");

btnTopo.innerHTML = "↑";

btnTopo.className = "btn-topo";

document.body.appendChild(btnTopo);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        btnTopo.classList.add("mostrar");
    } else {
        btnTopo.classList.remove("mostrar");
    }

});

btnTopo.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ===============================
// ANIMAÇÃO DAS SEÇÕES
// ===============================

const sections = document.querySelectorAll("section");

const aparecer = () => {

    sections.forEach(sec => {

        const topo = sec.getBoundingClientRect().top;

        if (topo < window.innerHeight - 120) {

            sec.classList.add("ativo");

        }

    });

};

window.addEventListener("scroll", aparecer);

aparecer();

// ===============================
// CONTADOR REGRESSIVO
// ===============================

const contador = document.getElementById("contador");

if (contador) {

    const dataEvento = new Date("December 20, 2026 20:00:00").getTime();

    const atualizar = () => {

        const agora = new Date().getTime();

        const distancia = dataEvento - agora;

        if (distancia <= 0) {

            contador.innerHTML = "O evento começou!";

            return;

        }

        const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));

        const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));

        const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

        contador.innerHTML =
            `${dias}d ${horas}h ${minutos}m ${segundos}s`;

    };

    atualizar();

    setInterval(atualizar, 1000);

}

// ===============================
// BOTÕES DE COMPRA
// ===============================

const botoes = document.querySelectorAll(".btn-comprar");

botoes.forEach(botao => {

    botao.addEventListener("click", () => {

        alert("Redirecionando para o pagamento...");

        // Coloque aqui seu link Hotmart
        // window.location.href = "https://SEU-LINK-HOTMART";

    });
});

// ===============================
// EFEITO NOS CARDS
// ===============================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});

// ===============================
// SCROLL SUAVE
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {

            destino.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ===============================
// MENSAGEM DE BOAS-VINDAS
// ===============================

setTimeout(() => {

    console.log("Evento 3 carregado com sucesso!");

}, 1000);
// =========================
// LOADER
// =========================

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.classList.add("loader-hidden");

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);

    }, 1200);
});

// =========================
// CONTADOR REGRESSIVO
// =========================

const dataEvento = new Date("December 31, 2026 19:00:00").getTime();

const dias = document.querySelectorAll(".contador strong")[0];
const horas = document.querySelectorAll(".contador strong")[1];
const minutos = document.querySelectorAll(".contador strong")[2];

function atualizarContador() {

    const agora = new Date().getTime();

    const distancia = dataEvento - agora;

    if (distancia <= 0) {
        dias.textContent = "00";
        horas.textContent = "00";
        minutos.textContent = "00";
        return;
    }

    const d = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const h = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));

    dias.textContent = String(d).padStart(2, "0");
    horas.textContent = String(h).padStart(2, "0");
    minutos.textContent = String(m).padStart(2, "0");

}

atualizarContador();

setInterval(atualizarContador, 60000);

// =========================
// BOTÕES DE COMPRA
// =========================

document.querySelectorAll(".btn-comprar").forEach(botao => {

    botao.addEventListener("click", (e) => {

        e.preventDefault();

        document.querySelector("#ingresso").scrollIntoView({
            behavior: "smooth"
        });

    });

});

// =========================
// BOTÃO HOTMART
// =========================

const hotmart = document.querySelector(".btn-hotmart");

if (hotmart) {

    hotmart.addEventListener("click", (e) => {

        e.preventDefault();

        // Coloque aqui o link da Hotmart
        window.location.href = "https://SEU-LINK-HOTMART";

    });

}

// =========================
// BOTÃO CONTATO
// =========================

const contato = document.querySelector(".btn-contato");

if (contato) {

    contato.addEventListener("click", (e) => {

        e.preventDefault();

        // Coloque aqui seu WhatsApp
        window.open(
            "https://wa.me/5511999999999",
            "_blank"
        );

    });

}

/*===================== evento 4 ============================= */
// =====================================
// LOADER
// =====================================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if(loader){

        setTimeout(() => {

            loader.classList.add("loader-hidden");

            setTimeout(() => {
                loader.style.display = "none";
            },600);

        },1200);

    }

});

// =====================================
// CONTADOR REGRESSIVO
// =====================================

const dataEvento = new Date("2026-12-31T19:00:00").getTime();

function atualizarContador(){

    const contador = document.querySelectorAll(".contador strong");

    if(contador.length < 3) return;

    const agora = new Date().getTime();

    const distancia = dataEvento - agora;

    if(distancia <= 0){

        contador[0].textContent = "00";
        contador[1].textContent = "00";
        contador[2].textContent = "00";

        return;

    }

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));

    const horas = Math.floor(
        (distancia % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutos = Math.floor(
        (distancia % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    contador[0].textContent = String(dias).padStart(2,"0");
    contador[1].textContent = String(horas).padStart(2,"0");
    contador[2].textContent = String(minutos).padStart(2,"0");

}

atualizarContador();

setInterval(atualizarContador,60000);

// =====================================
// SCROLL SUAVE
// =====================================

document.querySelectorAll('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",function(e){

        const destino = document.querySelector(this.getAttribute("href"));

        if(destino){

            e.preventDefault();

            destino.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// =====================================
// HEADER AO ROLAR
// =====================================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        header.style.background = "rgba(0,0,0,.90)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.4)";

    }else{

        header.style.background = "rgba(0,0,0,.45)";
        header.style.boxShadow = "none";

    }

});

// =====================================
// REVELAR ELEMENTOS
// =====================================

const elementos = document.querySelectorAll(
".card-evento,.beneficio,.box-ingresso,.pagamento,.contato-box"
);

elementos.forEach(el=>{

    el.style.opacity="0";
    el.style.transform="translateY(60px)";
    el.style.transition=".7s";

});

function revelar(){

    elementos.forEach(el=>{

        const topo = el.getBoundingClientRect().top;

        if(topo < window.innerHeight - 100){

            el.style.opacity="1";
            el.style.transform="translateY(0)";

        }

    });

}

window.addEventListener("scroll",revelar);

revelar();

// =====================================
// BOTÃO COMPRAR
// =====================================

document.querySelectorAll(".btn-comprar").forEach(botao=>{

    botao.addEventListener("click",(e)=>{

        e.preventDefault();

        alert("Em breve você será direcionado para o pagamento.");

    });

});

// =====================================
// HOTMART
// =====================================

const hotmart = document.querySelector(".btn-hotmart");

if(hotmart){

    hotmart.addEventListener("click",(e)=>{

        e.preventDefault();

        // Substitua pelo seu link da Hotmart
        window.location.href="https://SEU-LINK-HOTMART";

    });
}

// =====================================
// WHATSAPP
// =====================================

const contato = document.querySelector(".btn-contato");

if(contato){

    contato.addEventListener("click",(e)=>{

        e.preventDefault();

        window.open(
            "https://wa.me/5511999999999",
            "_blank"
        );

    });

}
/*---ebook1----*/
/*==================================================
LOADER DA PÁGINA
==================================================*/

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if(loader){

        loader.classList.add("hide");

        setTimeout(() => {

            loader.style.display = "none";

        },500);

    }

});



/*==================================================
HEADER AO ROLAR A PÁGINA
==================================================*/

const header = document.querySelector("header");


window.addEventListener("scroll",()=>{


    if(header){


        if(window.scrollY > 50){

            header.style.background =
            "rgba(5,5,5,0.98)";


        }else{


            header.style.background =
            "rgba(5,5,5,0.92)";


        }


    }


});



/*==================================================
ROLAGEM SUAVE DOS LINKS
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(link=>{


    link.addEventListener("click",function(e){


        const destino = document.querySelector(
            this.getAttribute("href")
        );


        if(destino){

            e.preventDefault();


            destino.scrollIntoView({

                behavior:"smooth"

            });


        }


    });


});



/*==================================================
ANIMAÇÃO AO APARECER NA TELA
==================================================*/


const observer = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("show");


        }


    });


},{


    threshold:0.15


});



document.querySelectorAll(
".about-card, .box, .item, .guarantee-box, .buy-box"
)
.forEach(element=>{


    element.classList.add("hidden");


    observer.observe(element);


});



/*==================================================
BOTÃO HOTMART TRACKING
==================================================*/


const comprar = document.querySelector(".buy-button");


if(comprar){
    comprar.addEventListener("click",()=>{
        console.log(
        "Cliente direcionado para checkout Hotmart"
        );
    });
}
/*==================================================
ANO AUTOMÁTICO FOOTER
==================================================*/
const ano = document.querySelector(".ano");
if(ano){
    ano.innerHTML = new Date().getFullYear();

}