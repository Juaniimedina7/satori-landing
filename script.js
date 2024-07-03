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
});
