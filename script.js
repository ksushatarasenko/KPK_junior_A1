// функция кнопки ответ

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
// кнопка для подсказки
function toggleHints(hintsId) {
    var hints = document.getElementById(hintsId);
    if (hints.style.display === "none") {
        hints.style.display = "block";
    } else {
        hints.style.display = "none";
    }
}

// peretaskivanie fraz

// Функция для проверки порядка диалогов
// Правильный порядок диалога
const correctDialogs = {
    "dialog1": [
        "Dzień dobry. Czy jest czarny długopis?",
        "Dzień dobry, tak, jest.",
        "Ile kosztuje?",
        "Dwa złote, ale mam taki ładny niebieski z małym kotkiem. Kosztuje dwa pięćdziesiąt.",
        "Aha, więc poproszę ten długopis z kotkiem.",
        "Coś jeszcze?",
        "Tak, proszę jeszcze kanapkę.",
        "Z żółtym serem czy z białym serem? Ta z żółtym kosztuje trzy złote, a z białym trzy dwadzieścia, ale jest naprawdę dobra i zdrowa.",
        "A czy jest kanapka z nutellą?",
        "Niestety, nie ma.",
        "To poproszę bułkę z białym serem i jeszcze małe kakao.",
        "Może chcesz duże? Jesteś taka malutka! Musisz dużo jeść!",
        "No dobrze, proszę duże kakao. Ile płacę?",
        "Siedem złotych, siedemdziesiąt groszy.",
        "Proszę. Tu jest osiem złotych.",
        "I trzydzieści groszy reszty. Dziękuję.",
        "Do widzenia!"
    ]
};

// Проверка порядка диалога
function checkOrder(dialogId) {
    const correctOrder = correctDialogs[dialogId];
    const userOrder = [...document.getElementById('orderedDialog').querySelectorAll('.draggable')]
        .map(el => el.textContent.trim());

    userOrder.forEach((text, index) => {
        const element = document.getElementById('orderedDialog').children[index];
        if (text === correctOrder[index]) {
            element.style.backgroundColor = 'lightgreen'; // Подсветка зелёным при правильном порядке
        } else {
            element.style.backgroundColor = 'lightcoral'; // Подсветка красным при неправильном порядке
        }
    });

    if (JSON.stringify(userOrder) === JSON.stringify(correctOrder)) {
        alert('Poprawnie uporządkowane!');
    } else {
        alert('Niestety, spróbuj ponownie.');
    }
}

// Логика перетаскивания
const draggables = document.querySelectorAll('.draggable');
const dropzone = document.getElementById('orderedDialog');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
    });
});

dropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropzone.classList.add('dragover');
    const afterElement = getDragAfterElement(dropzone, e.clientY);
    const dragging = document.querySelector('.dragging');
    if (afterElement == null) {
        dropzone.appendChild(dragging);
    } else {
        dropzone.insertBefore(dragging, afterElement);
    }
});

dropzone.addEventListener('dragleave', () => {
    dropzone.classList.remove('dragover');
});

dropzone.addEventListener('drop', () => {
    dropzone.classList.remove('dragover');
});

function getDragAfterElement(containerFraz, y) {
    const draggableElements = [...containerFraz.querySelectorAll('.draggable:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

// Необходим скрипт, если вы хотите увеличить картинку при клике вместо наведения
document.addEventListener('DOMContentLoaded', function () {
    var zoomableImages = document.querySelectorAll('.zoomable');

    zoomableImages.forEach(function (img) {
        img.addEventListener('click', function () {
            this.classList.toggle('zoomed');
        });
    });
});

