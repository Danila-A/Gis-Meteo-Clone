const app = {
    headerTop: {
        logo: './logo.svg',
        nav: [
            'Clone',
        ]    
    },
    headerBottom: {
        searchPlaceHolder: 'Поиск местоположения',
        forecastPoints: [
            {
                text: 'сегодня',
                value: 0,
            },
            {
                text: 'завтра',
                value: 1,
            },
            {
                text: '3 дня',
                value: 3,
            },
            {
                text: '7 дней',
                value: 7,
            },
            {
                text: '2 недели',
                value: 14,
            }
        ]
    },
    body : {
        dateTitle: 'погода на ',
        temperature: 'температура воздуха в °C',
        daysOfWeek: [
            'вс',
            'пн',
            'вт',
            'ср',
            'чт',
            'пт',
            'сб',
        ],
        card: {
            temperature: '°C',
            windSpeed: 'м/с',
            precipitation: 'мм'
        },
        dayTime: [
            'ночь',
            'утро',
            'день',
            'вечер'
        ]
    }
}

export default app;
