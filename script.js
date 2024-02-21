const answerElements = document.querySelectorAll('.answer');

answerElements.forEach(answer => {
    answer.addEventListener('click', () => {
        if (!answer.classList.contains('clicked')) { 
            answer.classList.add('clicked'); 
            if (answer.textContent === 'Messi') {
                answer.style.backgroundColor = 'green'; 
            } else {
                answer.style.backgroundColor = 'red';
            }
            
            answerElements.forEach(otherAnswer => {
                if (otherAnswer !== answer) {
                    otherAnswer.style.pointerEvents = 'none'; 
                }
            });
        }
    });
});
