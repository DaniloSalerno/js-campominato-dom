const btn = document.querySelector('form button');
const scoreDomEl = document.querySelector('.score');
const scoreNumberEl = document.querySelector('.score span')
const formDomEl = document.querySelector('form');
const difficultyDomEl = document.querySelector('form select');
const boxElement = document.querySelector('.box');
const gameOutDomEl = document.querySelector('.game_out');
const gameOutBtn = document.querySelector('.game_out button');
const positionBomb = [];
let squareLimit;
let bomb;
let score = 0;

btn.addEventListener('click', (e) => {
    
    e.preventDefault();

    const difficulty = difficultyDomEl.value;
    
    if (difficulty === 'easy') {
        squareLimit = 100;
    } else if (difficulty === 'medium') {
        squareLimit = 81;
    } else if (difficulty === 'hard') {
        squareLimit = 49;
    }

    formDomEl.classList.add('d-none');

    scoreDomEl.classList.remove('d-none')

    boxElement.classList.remove('d-none')

    generateSquares(boxElement, squareLimit);
    
})

function generateSquares(element, limit) {

    generateBomb(16,squareLimit);
    console.log(positionBomb);

    for (let i = 1; i <= limit; i++) {

        const squareElement = document.createElement('div');

        squareElement.style.width = `calc(100% / ${Math.sqrt(limit)} - 8px)`;

        squareElement.className = 'square bg-dark';
        element.append(squareElement);

        squareElement.id = `${i}`

        squareElement.addEventListener('click', () => {

            score += 1;

            squareElement.classList.toggle('bg-dark')
            
            squareElement.classList.toggle('bg-primary')
            
            console.log(squareElement.id);
            
            if (!squareElement.classList.contains('bg-primary')) {

                score -= 2

            }

            if (positionBomb.includes(Number(squareElement.id))) {

                squareElement.classList.toggle('bg-danger');

                score--;

                gameOutDomEl.classList.add('overlay');
                gameOutDomEl.classList.remove('d-none');
            }
            
            scoreNumberEl.innerHTML = score
            
        })
        
        
    }    
}

gameOutBtn.addEventListener('click', () => window.location.reload())


/**
 * 
 * @param {number} bombNum Number of bombs
 * @param {number} limit Number of squares available
 * @return {array} List of number contains bombs
 */
function generateBomb(bombNum,limit) {

    do {
        bomb = (randomNumber(1,limit));
        
        if (positionBomb.includes(bomb)) {

            for( var i = 0; i < positionBomb.length; i++){ 

                if ( positionBomb[i] === bomb) {

                  positionBomb.splice(i, 1); 

                }

             }

        }
        positionBomb.push(bomb);

    } while (positionBomb.length <= bombNum - 1);
/*     for (let i = 0; i < bombNum; i++) {
    
        bomb = (randomNumber(1,limit));
    
        positionBomb.push(bomb);
    }
    
        for( let i = 0; i < positionBomb.length; i++){ 
    
            if ( positionBomb[i] === bomb) {
    
              positionBomb.splice(i, 1); 
    
            }
    
         } */
}






function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


