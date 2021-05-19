$(document).ready(function() {
    $('#btn_saludo').click(()=>{
        $.ajax({
            type: 'POST',
            data: {
                'saludos':'Hola mundo'
            },
            url: 'control/control_saludo.php',
            success: (r) => {
                console.log(r);
                $('#mostrar_res').text(r);
            }
        })
    });
});