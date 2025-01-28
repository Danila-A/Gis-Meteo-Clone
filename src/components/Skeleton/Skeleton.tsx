import styles from './Skeleton.module.css';

export const Skeleton: React.FC = () => {
  return (
    <div className={ styles.main }>
        <div className={ styles.mainInner }>

            <div className={ styles.placeAndDate }>
                <div className={ styles.titleData }></div>
                <div className={ styles.titleData }></div>
            </div>

            <div>
                <div className={ styles.inner }>
                    <div className={ styles.item }></div>
                    <div className={ styles.item }></div>
                    <div className={ styles.item }></div>
                    <div className={ styles.item }></div>
                    <div className={ styles.item }></div>
                    <div className={ styles.item }></div>
                    <div className={ styles.item }></div>
                    <div className={ styles.item }></div>
                </div>
            </div>

        </div>
    </div>
  )
}
