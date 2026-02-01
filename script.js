// 로또 번호 생성 로직
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

// 다크/라이트 모드 전환 로직
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    let theme = 'light';
    if (document.body.classList.contains('dark-mode')) {
        theme = 'dark';
    }
    localStorage.setItem('theme', theme);
    
    updateThemeButton();
});

function updateThemeButton() {
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = '라이트 모드';
    } else {
        themeToggle.textContent = '다크 모드';
    }
}

// 페이지 로드 시 저장된 테마 적용
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
    updateThemeButton();
});