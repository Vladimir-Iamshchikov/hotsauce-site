// Удалить cookie banner
const cookieButtons = document.getElementsByClassName('cookie-button');
Array.from(cookieButtons).forEach(button => {
    button.addEventListener('click', () => {
        const cookieBanner = document.getElementById('cookieBanner');
        cookieBanner.remove();
    });
});

// Убрать-добавить Disabled у кнопки
const formAgee = document.getElementById('formAgee');
const formSubmit = document.getElementById('formSubmit');
formAgee.addEventListener('change', () => {
    if (formAgee.checked) {
        formSubmit.disabled = false;
    } else {
        formSubmit.disabled = true;
    }
});

// Обработка формы
document.getElementById('feedbackForm').
    addEventListener('submit', (event) => {
        event.preventDefault();
        const formEmail = event.target['formEmail'].value;
        const formEmailField = event.target['formEmail'];
        let hasSymbol = false;
        for (let i = 0; i < formEmail.length; i++) {
            if (formEmail[i] === '@') {
                hasSymbol = true;
                break;
            }
        }
        if (!hasSymbol) {
            formEmailField.classList.add('error');
            const errorNotification = document.createElement('div');
            errorNotification.classList.add('error-notification');
            errorNotification.innerText = 'Введите корректный Email';
            formEmailField.insertAdjacentElement("afterEnd", errorNotification);
        } else {
            alert('Форма отправлена');
            event.target.reset();
            formEmailField.classList.remove('error');
            const errorNotification = document.querySelector('.error-notification');
            if (errorNotification) {
                errorNotification.remove();
            };
            const formSubmit = document.getElementById('formSubmit');
            formSubmit.disabled = true;
        }
    });

// Аккордеон
const accordionItems = document.querySelectorAll('.accordion__item');
accordionItems.forEach(item => {
    item.addEventListener('click', () => {
        if (item.classList.contains('accordion__item--opened')) {
            item.classList.remove('accordion__item--opened');
        } else {
            accordionItems.forEach(i => i.classList.remove('accordion__item--opened'));
            item.classList.add('accordion__item--opened');
        }
    });
});

// Гамбургер
document.querySelector('.gamburger').addEventListener('click', function () {
    this.classList.toggle('gamburger--active');
    document.querySelector('.header__gamburger-panel').classList.toggle('header__gamburger-panel--show');
    document.querySelector('body').classList.toggle('no-scroll');
});