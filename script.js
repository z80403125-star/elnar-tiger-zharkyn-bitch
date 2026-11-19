"use strict";

    const questions = [
      {
        category: "Основы рынка",
        text: "Что лучше всего описывает конкуренцию на рынке?",
        options: ["Соперничество продавцов за покупателей", "Запрет на выбор товаров", "Соглашение продавцов о единой цене"],
        answer: 0,
        explanation: "Компании соперничают за спрос, предлагая покупателям более выгодные цены, качество или условия."
      },
      {
        category: "Основы рынка",
        text: "Как называется рынок, на котором действует только один продавец?",
        options: ["Олигополия", "Монополия", "Совершенная конкуренция"],
        answer: 1,
        explanation: "Монополия — это рыночная структура с одним продавцом и без близких товаров-заменителей."
      },
      {
        category: "Виды рынков",
        text: "Сколько крупных компаний обычно характеризуют олигополию?",
        options: ["Несколько взаимозависимых компаний", "Ровно одна компания", "Очень много мелких компаний"],
        answer: 0,
        explanation: "На олигополистическом рынке действует небольшое число крупных фирм, решения которых влияют друг на друга."
      },
      {
        category: "Виды рынков",
        text: "Какой признак типичен для совершенной конкуренции?",
        options: ["Один продавец устанавливает условия", "Много продавцов и однородный товар", "На рынок нельзя войти новым фирмам"],
        answer: 1,
        explanation: "В модели совершенной конкуренции много участников, товар однороден, а вход на рынок и выход с него свободны."
      },
      {
        category: "Виды рынков",
        text: "Что отличает монополистическую конкуренцию?",
        options: ["Много фирм предлагают похожие, но различающиеся товары", "На рынке присутствуют только два продавца", "Все товары полностью одинаковы и цена едина"],
        answer: 0,
        explanation: "Фирм много, но они различают свои товары по качеству, дизайну, бренду или сервису."
      },
      {
        category: "Рыночная власть",
        text: "Что такое барьер входа на рынок?",
        options: ["Любое изменение спроса", "Препятствие для появления новых конкурентов", "Снижение цены одним продавцом"],
        answer: 1,
        explanation: "Барьер входа затрудняет новым фирмам выход на рынок: например, из-за патентов, высоких затрат или лицензий."
      },
      {
        category: "Рыночная власть",
        text: "Что означает рыночная власть фирмы?",
        options: ["Способность влиять на цену или условия рынка", "Право покупателей вернуть товар", "Обязанность выпускать одинаковый товар"],
        answer: 0,
        explanation: "Рыночная власть позволяет фирме в некоторой степени влиять на цену, объём выпуска и другие условия."
      },
      {
        category: "Рыночная власть",
        text: "Почему монополист обычно сталкивается с рыночным спросом целиком?",
        options: ["Потому что на рынке нет других продавцов данного товара", "Потому что покупатели не реагируют на цену", "Потому что государство всегда устанавливает спрос"],
        answer: 0,
        explanation: "Если продавец один и близких заменителей нет, весь рыночный спрос обращён к нему."
      },
      {
        category: "Цены и решения",
        text: "Как, как правило, устанавливает цену фирма в условиях совершенной конкуренции?",
        options: ["Выбирает любую цену без последствий", "Принимает рыночную цену как заданную", "Всегда ставит цену выше всех конкурентов"],
        answer: 1,
        explanation: "Отдельная конкурентная фирма слишком мала, чтобы влиять на общий рынок, и принимает сложившуюся цену."
      },
      {
        category: "Цены и решения",
        text: "Что чаще всего происходит с ценами при усилении конкуренции между продавцами?",
        options: ["У продавцов может появиться стимул снижать цены", "Цены обязательно становятся одинаково высокими", "Цены перестают зависеть от спроса"],
        answer: 0,
        explanation: "Соперничество за покупателей может побуждать фирмы снижать цены или предлагать больше за те же деньги."
      },
      {
        category: "Польза конкуренции",
        text: "Как конкуренция может стимулировать инновации?",
        options: ["Фирмам выгодно улучшать продукты, чтобы привлечь покупателей", "Инновации становятся запрещёнными", "Все компании прекращают исследования"],
        answer: 0,
        explanation: "Новые технологии и продукты помогают компаниям выделиться и эффективнее удовлетворять спрос."
      },
      {
        category: "Польза конкуренции",
        text: "Как конкуренция обычно влияет на выбор покупателей?",
        options: ["Может расширять выбор товаров и услуг", "Всегда оставляет один-единственный товар", "Полностью устраняет различия между товарами"],
        answer: 0,
        explanation: "Разные продавцы предлагают различные товары, характеристики и условия покупки."
      },
      {
        category: "Монополии",
        text: "Что такое естественная монополия?",
        options: ["Ситуация, когда один поставщик может обслуживать рынок дешевле нескольких из-за экономии масштаба", "Компания, созданная без затрат", "Рынок, где спрос всегда равен предложению"],
        answer: 0,
        explanation: "В отраслях с высокими постоянными затратами одна инфраструктура может обходиться дешевле нескольких дублирующих сетей."
      },
      {
        category: "Монополии",
        text: "Какой пример отрасли может иметь признаки естественной монополии?",
        options: ["Сеть трубопроводов для водоснабжения", "Уличные художники", "Рынок настольных игр"],
        answer: 0,
        explanation: "Строительство параллельных водопроводных сетей обычно обходится дорого, поэтому отрасль может быть естественной монополией."
      },
      {
        category: "Регулирование",
        text: "Зачем государство регулирует деятельность некоторых монополий?",
        options: ["Чтобы ограничивать злоупотребление рыночной властью и защищать общественные интересы", "Чтобы запретить покупателям делать выбор", "Чтобы гарантировать отсутствие любых издержек"],
        answer: 0,
        explanation: "Регулирование может ограничивать тарифы и недобросовестные практики, особенно в важных инфраструктурных отраслях."
      },
      {
        category: "Регулирование",
        text: "Чем занимается антимонопольное законодательство?",
        options: ["Предотвращает вредные для конкуренции практики", "Устанавливает одинаковую прибыль для всех фирм", "Запрещает появление новых компаний"],
        answer: 0,
        explanation: "Антимонопольные нормы направлены против картелей и злоупотребления доминирующим положением."
      },
      {
        category: "Недобросовестные практики",
        text: "Что называют картелем?",
        options: ["Сговор конкурирующих фирм о ценах или разделении рынка", "Публичный список товаров в магазине", "Объединение покупателей для поиска скидок"],
        answer: 0,
        explanation: "Участники картеля договариваются вместо того, чтобы конкурировать, например о ценах или объёмах производства."
      },
      {
        category: "Недобросовестные практики",
        text: "Что такое демпинг в торговле?",
        options: ["Продажа товара по искусственно завышенной цене", "Продажа по очень низкой цене, в отдельных случаях — ниже затрат", "Отказ от рекламы товара"],
        answer: 1,
        explanation: "Термином «демпинг» обычно называют продажу по искусственно низким ценам, в том числе ниже затрат, с целью вытеснения конкурентов."
      },
      {
        category: "Конкуренция в жизни",
        text: "Как бренд может конкурировать, не снижая цену?",
        options: ["Улучшать качество, сервис или уникальность продукта", "Запретить покупателям сравнивать предложения", "Скрывать состав и характеристики товара"],
        answer: 0,
        explanation: "Качество, обслуживание, удобство и особенности продукта — способы неценовой конкуренции."
      },
      {
        category: "Конкуренция в жизни",
        text: "Какое утверждение о монополии наиболее точное?",
        options: ["Монополия всегда повышает общественное благосостояние", "Монополия может ослабить давление конкурентов, но последствия зависят от рынка и регулирования", "Любая крупная фирма автоматически является монополией"],
        answer: 1,
        explanation: "Последствия зависят от причин возникновения монополии, поведения компании, доступности заменителей и регулирования."
      }
    ];

    const letters = ["А", "Б", "В"];
    let currentIndex = 0;
    let correctCount = 0;
    let hasAnswered = false;

    const quizScreen = document.getElementById("quiz-screen");
    const resultScreen = document.getElementById("result-screen");
    const questionBlock = document.getElementById("question-block");
    const questionCategory = document.getElementById("question-category");
    const questionText = document.getElementById("question-text");
    const answersContainer = document.getElementById("answers");
    const feedback = document.getElementById("feedback");
    const feedbackIcon = document.getElementById("feedback-icon");
    const feedbackCopy = document.getElementById("feedback-copy");
    const nextButton = document.getElementById("next-button");
    const progressFill = document.getElementById("progress-fill");
    const progressTrack = document.querySelector(".progress-track");

    function renderQuestion() {
      const question = questions[currentIndex];
      hasAnswered = false;
      document.getElementById("current-number").textContent = String(currentIndex + 1).padStart(2, "0");
      document.getElementById("progress-label").textContent = `Вопрос ${currentIndex + 1} из ${questions.length}`;
      progressFill.style.width = `${(currentIndex / questions.length) * 100}%`;
      progressTrack.setAttribute("aria-valuenow", String(currentIndex));
      questionCategory.textContent = question.category;
      questionText.textContent = question.text;
      feedback.hidden = true;
      feedback.className = "feedback";
      nextButton.hidden = true;
      nextButton.innerHTML = currentIndex === questions.length - 1
        ? 'Показать результат <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>'
        : 'Следующий вопрос <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>';

      questionBlock.style.animation = "none";
      void questionBlock.offsetWidth;
      questionBlock.style.animation = "";

      answersContainer.replaceChildren();
      question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "answer";
        button.innerHTML = `<span class="answer-letter">${letters[index]}</span><span class="answer-text"></span>`;
        button.querySelector(".answer-text").textContent = option;
        button.addEventListener("click", () => selectAnswer(index));
        answersContainer.appendChild(button);
      });
    }

    function selectAnswer(selectedIndex) {
      if (hasAnswered) return;
      hasAnswered = true;
      const question = questions[currentIndex];
      const answerButtons = [...answersContainer.querySelectorAll(".answer")];
      const isCorrect = selectedIndex === question.answer;
      if (isCorrect) correctCount += 1;

      answerButtons.forEach((button, index) => {
        button.disabled = true;
        if (index === question.answer) button.classList.add("is-correct");
        else if (index === selectedIndex) button.classList.add("is-wrong");
      });

      feedback.hidden = false;
      feedback.classList.add(isCorrect ? "is-correct" : "is-wrong");
      feedbackIcon.textContent = isCorrect ? "✓" : "!";
      feedbackCopy.replaceChildren();
      const title = document.createElement("strong");
      title.textContent = isCorrect ? "Верно! Отличный ответ." : "Не совсем. Правильный ответ:";
      const detail = document.createElement("span");
      detail.textContent = `${question.options[question.answer]} ${question.explanation}`;
      feedbackCopy.append(title, detail);
      nextButton.hidden = false;
      nextButton.focus();
    }

    function showResults() {
      const wrongCount = questions.length - correctCount;
      const percentage = Math.round((correctCount / questions.length) * 100);
      document.getElementById("score-percent").textContent = `${percentage}%`;
      document.getElementById("correct-count").textContent = String(correctCount);
      document.getElementById("wrong-count").textContent = String(wrongCount);
      document.getElementById("score-points").textContent = `${correctCount} / ${questions.length}`;

      let title = "Хорошее начало!";
      let description = "Теперь вы лучше ориентируетесь в рыночных структурах. Попробуйте ещё раз, чтобы улучшить результат.";
      if (percentage >= 90) {
        title = "Блестящий результат!";
        description = "Вы отлично разбираетесь в конкуренции и монополиях. Так держать!";
      } else if (percentage >= 70) {
        title = "Отличная работа!";
        description = "Вы уверенно знаете основы устройства рынков. Ещё немного — и будет максимум!";
      } else if (percentage >= 45) {
        title = "Хорошая попытка!";
        description = "Вы уже знаете немало. Повторите викторину, чтобы закрепить понятия.";
      }
      document.getElementById("result-title").textContent = title;
      document.getElementById("result-description").textContent = description;
      quizScreen.hidden = true;
      resultScreen.hidden = false;
      progressFill.style.width = "100%";
      progressTrack.setAttribute("aria-valuenow", String(questions.length));
    }

    nextButton.addEventListener("click", () => {
      if (!hasAnswered) return;
      if (currentIndex === questions.length - 1) {
        showResults();
        return;
      }
      currentIndex += 1;
      renderQuestion();
      questionText.focus?.();
    });

    document.getElementById("restart-button").addEventListener("click", () => {
      currentIndex = 0;
      correctCount = 0;
      quizScreen.hidden = false;
      resultScreen.hidden = true;
      renderQuestion();
      document.getElementById("question-text").focus();
    });

    renderQuestion();