document.getElementById('generateBtn').addEventListener('click', function() {
    const numbersContainer = document.getElementById('lotto-numbers');
    numbersContainer.innerHTML = ''; // 이전 번호 삭제

    const numbers = generateLottoNumbers();
    
    numbers.forEach(number => {
        const ball = document.createElement('div');
        ball.classList.add('lotto-ball');
        ball.textContent = number;
        ball.style.backgroundColor = getBallColor(number);
        numbersContainer.appendChild(ball);
    });
});

function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

function getBallColor(number) {
    if (number <= 10) {
        return '#fbc400'; // 노란색
    } else if (number <= 20) {
        return '#69c8f2'; // 파란색
    } else if (number <= 30) {
        return '#ff7272'; // 빨간색
    } else if (number <= 40) {
        return '#aaa'; // 회색
    } else {
        return '#b0d840'; // 초록색
    }
}
