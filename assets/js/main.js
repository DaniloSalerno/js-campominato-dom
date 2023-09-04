const btn = document.querySelector('button');
const boxElement = document.querySelector('.box');

btn.addEventListener('click', () => {
    btn.classList.add('d-none');
    boxElement.classList.remove('d-none')

    generateSquares(boxElement, 100);
    
})

function generateSquares(element, limit) {

    
    for (let i = 1; i <= limit; i++) {

        const squareElement = document.createElement('div');

        squareElement.className = 'square bg-dark';
        element.append(squareElement);

        squareElement.id = `${i}`

        squareElement.addEventListener('click', () => {

            squareElement.classList.toggle('bg-dark')

            squareElement.classList.toggle('bg-primary')

            console.log(squareElement.id);

            
        })
        //generateBomb(16,squareElement);
        
    }

}


/**
 * 
 * @param {number} number number of bombs
 */

/* function generateBomb(number,element) {

    for (let i = 1; i <= number; i++) {
        const bomb = (randomNumber(1,100))

        if (element.id == bomb) {
            element.classList.toggle('bg-danger')
        }

    }

}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} */