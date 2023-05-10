
/* import { differenceInYears, differenceInDays, differenceInHours, parseISO } from 'date-fns'; 
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
); */

import { intervalToDuration, parseISO } from 'date-fns'
const input = document.querySelector('.input');
const btnRequest = document.querySelector('.button');
btnRequest.addEventListener('click', e => {
    e.preventDefault();
    let currentDate = new Date();
    let date = parseISO(input.value);
    console.log(input.value);
    console.log(currentDate);

    let duration = intervalToDuration({
        start: currentDate, 
        end: date,
    })
    console.log(duration);
        
    const yearsResult = duration.years;
    document.querySelector('.output-years').innerHTML = `Лет: ${yearsResult}`;

    const daysResult = duration.days;
    document.querySelector('.output-days').innerHTML = `Дней: ${daysResult}`;

    const hoursResult = duration.hours;
    document.querySelector('.output-hours').innerHTML = `Часов: ${hoursResult}`;
    }
);


/* let duration = intervalToDuration({
    start: new Date(2022, 6, 2, 0, 0, 15), 
    end: new Date(),
})

formatDuration(duration, {
    delimiter: ', '
}) */