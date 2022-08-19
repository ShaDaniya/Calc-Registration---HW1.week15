function calcSum() {
    const num1 = Number(document.getElementById('addendOne').value);
    const num2 = Number(document.getElementById('addendTwo').value);
    const resultSum = num1 + num2;
    document.getElementById('resultSum').innerHTML = resultSum;
    }
    
    function calcSubtraction() 
    {
        const numOne = Number(document.getElementById('numOne').value);
        const numTwo = Number(document.getElementById('numTwo').value);
        const resultMinus = (+numOne - +numTwo);
        document.getElementById('resultMinus').innerHTML = resultMinus;
    }
    
    function calcMultiplication() 
    {
        const factorOne = Number(document.getElementById('factorOne').value);
        const factorTwo = Number(document.getElementById('factorTwo').value);
        const resultMultiplication = (+factorOne * +factorTwo);
        document.getElementById('resultMultiplication').innerHTML = resultMultiplication;
    }
    
    function calcDivision() 
    {
        const dividend = document.getElementById('dividend').value;
        const divider = document.getElementById('divider').value;
        const resultDivision = (+dividend / +divider);
        document.getElementById('resultDivision').innerHTML = resultDivision;
    }

    function checkZero() {
        const divisionResult = document.getElementById('divider').value;
        if (divisionResult == '0') {
            alert('Котик, а на ноль же делить нельзя!');
            //Добавила ниже убрать не показывать обработчик после одного срабатывания
            button.removeEventListener('click', checkZero);
        }
    }

    function checkEmptyString() {
        const emptyString = document.getElementById('dividend').value;
        if (emptyString == '') {
            alert('Котик, ты что-то пропустил(');
        }
    }

    function checkDivider() {
        const emptyDivider = document.getElementById('divider').value;
        if (emptyDivider == '') {
            alert('Кисок нет??? Хотя бы одной, а то получим бесконечность');
        }
    }

    const button = document.getElementById('division');
    
    //такой вариант с options сделала, чтобы уведомление о том, что не заполнен делитель, появлялось только один раз
    const options = {
        "once": true
    }

    //обработчик, выдающий уведомление, если не заполнено делимое
    button.addEventListener('click', checkEmptyString);

    //обработчик, выдающий уведомление, если не заполнен делитель
    button.addEventListener('click', checkDivider, options);

    //обработчик, выдающий уведомление при делении на 0
    button.addEventListener('click', checkZero);

    //результат деления
    button.addEventListener('click', calcDivision);

