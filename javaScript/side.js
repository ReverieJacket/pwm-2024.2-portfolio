let secretNumber = generateSecret();
let attempts = [];

function generateSecret() {
    let digits = [];
    while (digits.length < 4) {
        let randomDigit = Math.floor(Math.random() * 10);
        if (!digits.includes(randomDigit)) {
            digits.push(randomDigit);
        }
    }
    return digits.join('');
}

function showSecret() {
    alert("A senha secreta é: " + secretNumber);
}

function resetGame() {
    secretNumber = generateSecret();
    attempts = [];
    document.getElementById("guessList").innerHTML = '';  
    document.getElementById("guessInput").value = '';      
}

function makeGuess() {
    let guess = document.querySelector(".interactive").value; 
    if (guess.length !== 4 || new Set(guess).size !== 4) {
        alert("Digite um número de 4 dígitos únicos.");
        return;
    }

    let result = calculateBullsAndCows(secretNumber, guess);
    attempts.push({ guess, result });
    displayAttempts();

    document.querySelector(".interactive").value = '';

    if (result.bulls === 4) {
        alert("Parabéns! Você acertou a senha!");
    }
}

function calculateBullsAndCows(secret, guess) {
    let bulls = 0;
    let cows = 0;

    for (let i = 0; i < 4; i++) {
        if (guess[i] === secret[i]) {
            bulls++;
        } else if (secret.includes(guess[i])) {
            cows++;
        }
    }

    return { bulls, cows };
}

function displayAttempts() {
    const guessList = document.getElementById("guessList");
    guessList.innerHTML = '';

    attempts.slice().reverse().forEach((attempt) => {
        const listItem = document.createElement("li");
        listItem.className = "guessItem";
        listItem.textContent = `Palpite: ${attempt.guess} | Bulls: ${attempt.result.bulls}, Cows: ${attempt.result.cows}`;
        guessList.appendChild(listItem);
    });
}

document.querySelectorAll('.interactive')[3].addEventListener('click', resetGame);
