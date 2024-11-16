* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.contenedor {
    width: 90%;
    max-width: 600px;
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

h1 {
    text-align: center;
    color: #333;
    margin-bottom: 30px;
}

.pregunta {
    font-size: 1.2rem;
    margin-bottom: 20px;
    padding: 15px;
    background-color: #f8f9fa;
    border-radius: 5px;
}

.opciones {
    display: grid;
    gap: 10px;
    margin-bottom: 20px;
}

.opcion {
    padding: 10px;
    background-color: #e9ecef;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.opcion:hover {
    background-color: #dee2e6;
}

.opcion.correcta {
    background-color: #28a745;
    color: white;
}

.opcion.incorrecta {
    background-color: #dc3545;
    color: white;
}

.btn-siguiente {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.1rem;
}

.btn-siguiente:hover {
    background-color: #0056b3;
}

.puntaje {
    text-align: center;
    margin-top: 20px;
    font-size: 1.2rem;
    font-weight: bold;
}
