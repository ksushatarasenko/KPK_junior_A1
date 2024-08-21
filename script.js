function checkAnswers(setId) {
    const set = document.getElementById(setId);
    const inputs = set.querySelectorAll('input[data-answer]');
    inputs.forEach(input => {
        const correctAnswer = input.getAttribute('data-answer').toLowerCase();
        const userAnswer = input.value.trim().toLowerCase();

        if (userAnswer === correctAnswer) {
            input.classList.add('correct');
            input.classList.remove('incorrect');
        } else {
            input.classList.add('incorrect');
            input.classList.remove('correct');
        }
    });
}

// выбор
document.addEventListener('DOMContentLoaded', (event) => {
    const questions = document.querySelectorAll('.question');

    questions.forEach(question => {
        const options = question.querySelectorAll('.option');
        options.forEach(option => {
            option.addEventListener('click', () => {
                options.forEach(opt => opt.classList.remove('selected'));
                option.classList.add('selected');
            });
        });
    });

// radio label
                function checkRadio() {
                    const correctAnswers = {
                        question1: '1',
                        question2: '1',
                        question3: '3',
                        question4: '3'
                    };

                    let allCorrect = true;

                    for (const question in correctAnswers) {
                        const selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);
                        const taskElement = document.querySelector(`input[name="${question}"]`).closest('.task');

                        if (selectedAnswer && selectedAnswer.value === correctAnswers[question]) {
                            taskElement.classList.add('correct');
                            taskElement.classList.remove('incorrect');
                        } else {
                            taskElement.classList.add('incorrect');
                            taskElement.classList.remove('correct');
                            allCorrect = false;
                        }
                    }

                    if (allCorrect) {
                        alert("Все ответы верны!");
                    } else {
                        alert("Есть ошибки в ответах.");
                    }

                }

    document.getElementById('checkAnswers').addEventListener('click', () => {
        questions.forEach(question => {
            const correctIndex = question.getAttribute('data-correct');
            const selectedOption = question.querySelector('.option.selected');
            if (selectedOption && selectedOption.getAttribute('data-index') == correctIndex) {
                question.classList.add('correct');
                question.classList.remove('incorrect');
            } else {
                question.classList.add('incorrect');
                question.classList.remove('correct');
            }
        });
    });
});