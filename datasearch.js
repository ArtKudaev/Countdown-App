
import { differenceInYears, differenceInDays, differenceInHours, parseISO } from 'date-fns'; 
const input = document.querySelector('.input');
const btnRequest = document.querySelector('.button');

btnRequest.addEventListener('click', e => {
    e.preventDefault();
    let currentDate = new Date();
    let date = parseISO(input.value);
    console.log(input.value);
    console.log(currentDate);

    const yearsResult = differenceInYears(date, currentDate);
    document.querySelector('.output-years').innerHTML = `Лет: ${yearsResult}`;

    const daysResult = differenceInDays(date, currentDate);
    document.querySelector('.output-days').innerHTML = `Дней: ${daysResult}`;

    const hoursResult = differenceInHours(date, currentDate);
    document.querySelector('.output-hours').innerHTML = `Часов: ${hoursResult}`;
    }
);