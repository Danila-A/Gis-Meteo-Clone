import styles from './Error.module.css';
import contentData from '../../data/content.json';

const Error = () => {
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

export default Error;
