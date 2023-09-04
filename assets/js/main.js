const btn = document.querySelector('button');
const formDomEl = document.querySelector('form');
const difficultyDomEl = document.querySelector('form select');
const boxElement = document.querySelector('.box');


btn.addEventListener('click', (e) => {
    
    e.preventDefault();

    const difficulty = difficultyDomEl.value;
    let squareLimit;
    if (difficulty === 'easy') {
        squareLimit = 100;
    } else if (difficulty === 'medium') {
        squareLimit = 81;
    } else if (difficulty === 'hard') {
        squareLimit = 49;
    }

    formDomEl.classList.add('d-none');

    boxElement.classList.remove('d-none')

    generateSquares(boxElement, squareLimit);
    
})

function generateSquares(element, limit) {

    for (let i = 1; i <= limit; i++) {

        const squareElement = document.createElement('div');

        squareElement.style.width = `calc(100% / ${Math.sqrt(limit)} - 8px)`;

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