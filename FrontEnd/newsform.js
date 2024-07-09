const checkbox = document.getElementById('recibirNews');
        const datosExtra = document.getElementById('datosExtra');

        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                datosExtra.style.display = 'block';
            } else {
                datosExtra.style.display = 'none';
            }
        });
