import styles from './Error.module.scss';
import contentData from '../../data/content.json';

export const Error: React.FC = () => {
  return (
    <div className={ styles.wrapper }>
        <div className={ styles.inner }>
            
            {contentData.body.error.map((item, index) => {
                return (
                    <p 
                        key={ index }    
                        className={ styles.text }
                    >
                        { item }
                    </p>        
                )
            })}

        </div>
    </div>
  )
}
