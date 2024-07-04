document.addEventListener('DOMContentLoaded', () => {
    const terminalOutput = document.getElementById('typed-output');

    const commands = [
        "satori run satori://playbook.yml --data='{'PARAM':'example.com'}' --output",
        `<span class="grey-text">Satori CI <span class="blue-text">1.26.0</span> - Automated Cloud Testing - Started on <span class="pink-text">2024-07-01 12:00:00</span></span>`,
        `Report ID: <span class="purple-text">abc2345def</span>`,
        `Report: https://satori.ci/report_details/?n=<span class="purple-text">abc2345def</span>`,
        "Status: Running"
    ];

    const options = {
        strings: [commands[0]],
        typeSpeed: 50,
        showCursor: true,
        onComplete: () => {
            terminalOutput.innerHTML += "\n";
            startStatusUpdate();
        }
    };

    new Typed('#typed-output', options);

    function startStatusUpdate() {
        let seconds = 0;
        const statusUpdate = () => {
            seconds++;
            const hrs = Math.floor(seconds / 3600);
            const mins = Math.floor((seconds % 3600) / 60);
            const secs = seconds % 60;
            const time = `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
            const counterText = `Status: Running <span class="counter">${time}</span>`;
            terminalOutput.innerHTML = commands[0] + "\n" + commands[1] + "\n" + commands[2] + "\n" + commands[3] + "\n" + counterText;
        };

        setInterval(statusUpdate, 1000);
    }

    // Manejar el cambio de color de la cabecera al hacer scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Manejar el clic en el logo para redirigir al home
    document.querySelector('.logo-link').addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = '/';
    });

    // Animaciones al hacer scroll
    const fadeElements = document.querySelectorAll('.fade-in');

    function checkFade() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;

            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkFade);
    window.addEventListener('resize', checkFade);
    checkFade(); // Ejecutar una vez al cargar la página
});
