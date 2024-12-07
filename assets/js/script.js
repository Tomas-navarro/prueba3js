// Pregunta Pintar
const ele = document.getElementById("ele1");
if (ele) {
    const cambiarColor = () => {
        if (ele.style.backgroundColor === 'green') {
            ele.style.backgroundColor = 'yellow';
        } else {
            ele.style.backgroundColor = 'green';
        }
    };
    ele.addEventListener("click", cambiarColor);
} else {
    console.error("No esta en el html");
}

// Pregunta 4_colores

const cuadrado1 = document.getElementById('cuadrado1')
const cuadrado2 = document.getElementById('cuadrado2')
const cuadrado3 = document.getElementById('cuadrado3')
const cuadrado4 = document.getElementById('cuadrado4')
const cuadrado5 = document.getElementById('cuadrado5')
cuadrado1.addEventListener('click', () => {
    cuadrado1.style.backgroundColor = 'black'
});

cuadrado2.addEventListener('click', () => {
    cuadrado2.style.backgroundColor = 'black'
});

cuadrado3.addEventListener('click', () => {
    cuadrado3.style.backgroundColor = 'black'
});

cuadrado4.addEventListener('click', () => {
    cuadrado4.style.backgroundColor = 'black'
});

// Pregunta tecla A S D
document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        cuadrado5.style.backgroundColor = 'pink'
    } else if (event.key === 's') {
        cuadrado5.style.backgroundColor = 'orange'
    }else if(event.key ==='d'){
        cuadrado5.style.backgroundColor = 'lightblue'
    }
    // Pregunta tecla Q W E
    let newColor=null;
    if (event.key ==='q'){
        newColor = 'purple'
    }else if(event.key ==='w'){
        newColor = 'gray'
    }else if(event.key ==='e'){
        newColor = 'brown'
    }

    if (newColor){
        const newDiv = document.createElement('div')
        newDiv.style.width='200px'
        newDiv.style.height='200px'
        newDiv.style.backgroundColor=newColor
        newDiv.style.margin='10px'
        document.body.appendChild(newDiv)
    }
    })
    
