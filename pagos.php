<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/CSS/pagos.css">
    <title>pagos</title>
</head>

<body>
    <a href="./index.html">index</a>
    <main>
        <h2>RESERVACIONES</h2>
        <form action="" method="post">
            <div class="part_uno">
                <label for="">NOMBRES Y APELLIDOS
                    <input type="text" name="nombre">
                    <input type="text" name="apellido">
                </label>
                <label for="">Correo electrolitos
                    <input type="email" name="" id="">
                </label>
                <label for="identidad">
                    DOCUMENTO DE IDENTIDAD
                    <select name="select" id="">
                        <option value="1">DNI</option>
                        <option value="2">CARNET DE EXTRANJERIA</option>
                    </select>
                    <input type="text">
                </label>
                <label for="">Numero Telefonico
                    <input type="tel" name="" id="">
                </label>
                <label>Fecha<input type="date" name="date" id="date"></label>
                
            </div>
            <div class="part_dos">
                <label for="deportes">
                    PAQUETES
                    <p><input type="checkbox" name="" id=""><span>cuatrimoto</span><input type="number" name="" id="" min="1" placeholder="PERSONAS"> <input type="text" name="" id="" readonly></p>
                    <p><input type="checkbox" name="" id=""><span>motocros</span> <input type="number" name="" id="" min="1" placeholder="PERSONAS"> <input type="text" name="" id="" readonly></p>
                    <p><input type="checkbox" name="" id=""><span>etc</span><input type="number" name="" id="" min="1" placeholder="PERSONAS"> <input type="text" name="" id="" readonly></p>
                    <p><input type="checkbox" name="" id=""><span>etc</span><input type="number" name="" id="" min="1" placeholder="PERSONAS"> <input type="text" name="" id="" readonly></p>
                    <p><input type="checkbox" name="" id=""><span>etc</span><input type="number" name="" id="" min="1" placeholder="PERSONAS"> <input type="text" name="" id="" readonly></p>
                    <p><input type="checkbox" name="" id=""><span>etc</span><input type="number" name="" id="" min="1" placeholder="PERSONAS"> <input type="text" name="" id="" readonly></p>
                    <p><input type="checkbox" name="" id=""><span>etc</span><input type="number" name="" id="" min="1" placeholder="PERSONAS"> <input type="text" name="" id="" readonly></p>
                </label>
                <label for="">
                    Total a Pagar
                    <input type="text" name="totalpagar" id="">
                </label>
                <label for="">
                    Se le registrara la informacion y solicitara el pago Transacción o Yape
                    <input type="submit" value="Enviar">
                </label>
            </div>
        </form>
    </main>
</body>

</html>