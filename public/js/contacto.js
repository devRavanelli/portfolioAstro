document.addEventListener('DOMContentLoaded', function () {
    const btnContacto = document.querySelector('.btn-contacto');
    btnContacto.addEventListener('click', mostrarSwal);
});

function mostrarSwal() {
    swal({
        title: "¡Ponte en contacto conmigo!",
        content: {
            element: "div",
            attributes: {
                innerHTML: `
                    <div style="display: flex; flex-direction: column; gap: 10px;">
                        <a href="tel:+34636731525" style="padding: 10px; background: #4CAF50; color: white; text-align: center; border-radius: 5px; text-decoration: none;">
                            📞 Llamar
                        </a>
                        <a href="https://wa.me/636731525" target="_blank" style="padding: 10px; background: #25D366; color: white; text-align: center; border-radius: 5px; text-decoration: none;">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" style="width: 20px; height: 20px; vertical-align: middle; margin-right: 8px;">
                            WhatsApp
                        </a>
                        <a href="mailto:sam_po13@hotmail.com" style="padding: 10px; background: #007BFF; color: white; text-align: center; border-radius: 5px; text-decoration: none;">
                            ✉️ Email
                        </a>
                    </div>
                `
            }
        },
        icon: "info"
    });
}
