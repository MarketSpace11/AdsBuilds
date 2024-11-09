// Inicializa EmailJS solo después de que el DOM esté listo
document.addEventListener("DOMContentLoaded", function() {
    // Verifica si EmailJS está disponible
    if (!emailjs) {
        console.error("EmailJS no está cargado. Revisa la conexión a internet o la URL de la biblioteca.");
        alert("Error al cargar EmailJS. Intenta recargar la página.");
        return;
    }

    // Inicializa EmailJS con tu User ID
    try {
        emailjs.init("xPw6PF0ef-Di5oFKO");
        console.log("EmailJS initialized successfully.");
    } catch (error) {
        console.error("Error al inicializar EmailJS:", error);
        alert("Error al inicializar EmailJS.");
        return;
    }

    // Función para enviar el formulario usando EmailJS
    async function sendEmail(serviceId, templateId, form, templateParams) {
        try {
            const response = await emailjs.send(serviceId, templateId, templateParams);
            console.log("Correo enviado con éxito:", response);
            alert("Message sent successfully!");
            if (form) form.reset(); // Opcional: resetea el formulario tras enviarlo
        } catch (error) {
            console.error("Error al enviar el mensaje:", error);
            alert("Error sending message, please try again.");
        }
    }

    // Configuración de envío para contactForm
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            sendEmail("service_pyrjqj8", "template_badfkxg", contactForm, contactForm);
        });
    } else {
        console.warn("Formulario con ID 'contactForm' no encontrado en el DOM.");
    }

    // Configuración de envío para subscriptionForm
    const subscriptionForm = document.getElementById("subscription-form");
    if (subscriptionForm) {
        subscriptionForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const userEmail = document.getElementById("user-email").value.trim();
            if (userEmail === "") {
                alert("Please enter your email.");
                return;
            }

            const templateParams = { email: userEmail };
            sendEmail("service_pyrjqj8", "template_badfkxg", null, templateParams);
        });
    } else {
        console.warn("Formulario con ID 'subscription-form' no encontrado en el DOM.");
    }
});
