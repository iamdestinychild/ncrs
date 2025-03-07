import styles from './styles.module.css'

export default function Services(){
    return(
        <div className={styles.services}>
            <div className={styles.services_cover}>
                <span className={styles.services_line}></span>
                <h1 className={styles.services_heading}>What we do??</h1>
                <div className={styles.service}>
                    <p>Satellite Data Services</p>
                    <p>Forestry and Environment</p>
                    <p>Natural Resource Mapping</p>
                    <p>Urban and Rural Planning and Development</p>
                    <p>Water Resources</p>
                    <p>Disaster Management</p>
                    <p>Cadastral Mapping</p>
                    <p>Ecological & Climate Studies</p>
                    <p>Consultancy</p>
                    <p>Geo-Informatics</p>
                </div>
            </div>
        </div>
    )
}