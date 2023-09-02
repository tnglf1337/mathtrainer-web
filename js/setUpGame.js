let additionButton = document.getElementById('btn-add');
let subtractionButton = document.getElementById('btn-sub');
let multiplicationButton = document.getElementById('btn-mult');

try {
    additionButton.addEventListener("click", (event) => {
        sessionStorage.setItem('operator', '+')
        window.location.href = 'game.html';
    })
    
    subtractionButton.addEventListener("click", (event) => {
        sessionStorage.setItem('operator', '-')
        window.location.href = 'game.html';
    })

    multiplicationButton.addEventListener("click", (event) => {
        sessionStorage.setItem('operator', '*')
        window.location.href = 'game.html';
    }) 
} catch (error) {
    if(error instanceof TypeError) {
        console.log('error')
    }
}