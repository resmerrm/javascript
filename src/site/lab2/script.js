document.addEventListener('DOMContentLoaded', function () {
    var lamp = document.getElementById('lamp');
    var onButton = document.getElementById('onButton');
    var offButton = document.getElementById('offButton');

    onButton.addEventListener('click', function () {
        switchOn();
    });

    offButton.addEventListener('click', function () {
        switchOff();
    });

    function switchOn() {
        lamp.style.backgroundColor = 'yellow';
    }

    function switchOff() {
        lamp.style.backgroundColor = 'white';
    }
});
