import styles from './ForecastCard.module.css';

export const ForecastCard = ({ item }) => {
    return (
    <div className={ styles.card } >
        <div className={ styles.inner }>

            <div className={ styles.title }>
                { item.title }
            </div>
            <div className={ styles.icon }>
                { item.icon }
            </div>
            <div className={ styles.temperature }>
                { item.temperature }
            </div>
            <div className={ styles.windSpeed }>
                { item.windSpeed }
            </div>
            <div className={ styles.precipitation }>
                { item.precipitation }
            </div>

        </div>
    </div>
    )
}
