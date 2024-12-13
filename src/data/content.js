const header = {
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
                value: 1,
            },
            {
                text: 'завтра',
                value: 2,
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
    }
}
const boyd = {
    title: 'погода на ',
    temperature: 'температура воздуха в °C',
    windSpeed: 'порывы ветра',
    precipitation: 'количетво осадков'
}

export default header;
