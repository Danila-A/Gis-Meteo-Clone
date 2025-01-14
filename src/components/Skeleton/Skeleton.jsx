import styles from './Skeleton.module.css';

const Skeleton = () => {
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

export default Skeleton