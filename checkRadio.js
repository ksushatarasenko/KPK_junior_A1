function checkRadio(taskId) {
    // Объект с правильными ответами для каждого задания по его id
    const correctAnswers = {
        
        task507A4:
        {
            question1: '2',
            question2: '4',
            question3: '1',
            question4: '3',
            question5: '1',
            question6: '3',
            question7: '4',
            question8: '2',
        },
    };

    let allCorrect = true;

    // Проверяем, есть ли корректные ответы для данного задания
    if (correctAnswers[taskId]) {
        const answers = correctAnswers[taskId];

        // Перебираем все вопросы для данного задания
        for (const [question, correctValue] of Object.entries(answers)) {
            const selectedAnswer = document.querySelector(`#${taskId} input[name="${question}"]:checked`);
            const taskElement = document.querySelector(`#${taskId} input[name="${question}"]`).closest('.task');

            if (selectedAnswer) {
                if (selectedAnswer.value === correctValue) {
                    taskElement.classList.add('correct');
                    taskElement.classList.remove('incorrect');
                } else {
                    taskElement.classList.add('incorrect');
                    taskElement.classList.remove('correct');
                    allCorrect = false;
                }
            } else {
                // Если пользователь не выбрал вариант ответа
                taskElement.classList.add('incorrect');
                taskElement.classList.remove('correct');
                allCorrect = false;
            }
        }
    } else {
        console.error(`Нет правильных ответов для задания с id: ${taskId}`);
        return;
    }

    
}