document.addEventListener('DOMContentLoaded', (event) => {
    // Обработчик для выделения выбранного ответа
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

    // Обработчик для проверки ответов
    const checkButtons = document.querySelectorAll('.checkAnswers');

    checkButtons.forEach(button => {
        button.addEventListener('click', () => {
            const questions = button.closest('.questions').querySelectorAll('.question');

            questions.forEach(question => {
                const correctIndex = question.getAttribute('data-correct');
                const options = question.querySelectorAll('.option');

                options.forEach((option, index) => {
                    option.classList.remove('correct', 'incorrect');
                    if (option.classList.contains('selected')) {
                        if (index == correctIndex) {
                            option.classList.add('correct');  // Подсвечиваем выбранный правильный ответ зеленым
                        } else {
                            option.classList.add('incorrect');  // Подсвечиваем выбранный неправильный ответ красным
                        }
                    }
                });
            });
        });
    });
});



// Как работает код:
// HTML:

// Каждая группа вопросов обёрнута в div с классом questions.
// В каждой группе есть несколько вопросов (div с классом question), каждый из которых содержит несколько опций.
// Каждая группа имеет свою кнопку проверки с классом checkAnswers.
// JavaScript:

// Для каждой группы вопросов создаётся свой обработчик событий.
// Когда пользователь выбирает опцию, она сохраняется в Map под соответствующим индексом вопроса.
// Когда нажимается кнопка проверки, все ответы проверяются на правильность, и результат выводится под соответствующей группой вопросов.
// Теперь каждая кнопка проверки будет работать независимо для своей группы вопросов, и вы сможете проверять правильность ответов отдельно для каждой категории (АКТОР/АКТОРКА, ПИОСЕНКАРЗ/ПИОСЕНКАРКА, СПОРТОВИЕЦ).









