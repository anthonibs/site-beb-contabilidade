// VARIÁVEIS
const BTN_TOPO = document.getElementById("btn-topo");
const TOGGLE_MENU = document.querySelectorAll('.beb-toggle-menu');
const MENU_MOBILE = document.querySelector('.beb-menu-mobile');
const BTN_MENU_MOB_ICON = document.querySelector('.beb-btn-menu-mobile i');

// QUANDO O USUÁRIO ROLAR PARA BAIXO DE 250PX DO TOPO O SITE, MOSTRA O BOTÃO VOLTAR PARA TOPO.
window.onscroll = function() {scrollFunction()};


function scrollFunction() {
    if(document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        BTN_TOPO.style.display = "block";
    } else {
        BTN_TOPO.style.display = "none";
    }
}

// QUANDO O USUÁRIO CLICAR NO BOTÃO, ROLE PARA O TOPO O DOCUMENTO.
function voltarTopo() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//Abrindo e Fechando O MENU MOBILE
for (let m = 0; m < TOGGLE_MENU.length; m++) {
    TOGGLE_MENU[m].addEventListener('click', function () {
        MENU_MOBILE.classList.toggle('beb-menu-is-closed');
        MENU_MOBILE.classList.toggle('beb-menu-is-open');

        var icon = BTN_MENU_MOB_ICON.getAttribute('class');

        if (icon === 'fas fa-bars') {
            BTN_MENU_MOB_ICON.setAttribute('class', 'fas fa-times');
        } else {
            BTN_MENU_MOB_ICON.setAttribute('class', 'fas fa-bars');
        }

    });
}