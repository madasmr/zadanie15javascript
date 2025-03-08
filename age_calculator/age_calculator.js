document.getElementById('birthdate').max = new Date().toISOString().split('T')[0];

    function calculateAge() {
        const birthdate = new Date(document.getElementById('birthdate').value);
        const today = new Date();

        if (isNaN(birthdate.getTime())) {
            document.getElementById('result').innerText = 'Пожалуйста, выберите дату рождения';
            return;
        }

        let years = today.getFullYear() - birthdate.getFullYear();
        let months = today.getMonth() - birthdate.getMonth();
        let days = today.getDate() - birthdate.getDate();

        if (months < 0 || (months === 0 && days < 0)) {
            years--;
            months += 12;
        }
        if (days < 0) {
            const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
            days += lastMonth.getDate();
            months--;
        }
        let yearsText;
        const lastDigit = years % 10;
        const lastTwoDigits = years % 100;

        if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
            yearsText = 'лет';
        } else {
            switch (lastDigit) {
                case 1:
                    yearsText = 'год';
                    break;
                case 2:
                case 3:
                case 4:
                    yearsText = 'года';
                    break;
                default:
                    yearsText = 'лет';
            }
        }

        document.getElementById('result').innerText = `Ваш возраст: ${years} ${yearsText}, ${months} месяцев, ${days} дней`;
    }