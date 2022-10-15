
btn= document.getElementById('btn-menu');
menulink= document.getElementById('menulink');
menuback= document.getElementById('menuback');

btn.addEventListener('click', mostrar_menu);
menuback.addEventListener('click', ocultar_menu);

function mostrar_menu() {
    menulink.style.right = '0';
    menuback.style.display = 'block';
}

function ocultar_menu() {
    menulink.style.right = '-1500px';
    menuback.style.display = 'none';
}

