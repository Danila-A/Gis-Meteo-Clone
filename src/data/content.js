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
