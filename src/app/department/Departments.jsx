import styles from './styles.module.css'
import { ListTag } from "../IconsPalette";


export default function Departments(){
    return(
        <div className={styles.mobile_card_two}>

          <div className={styles.mobile_card_two_grid}>
            <div className={styles.mobile_card_two_card}>
              <ListTag iconStyle="text-[#1C5237]"/>
              <p>Land Information </p>
            </div>

            <div className={styles.mobile_card_two_card}>
              <ListTag iconStyle="text-[#1C5237]"/>
              <p>Land Information </p>
            </div>

            <div className={styles.mobile_card_two_card}>
              <ListTag iconStyle="text-[#1C5237]"/>
              <p>Land Information </p>
            </div>
          </div>
          
          <div className={styles.mobile_card_two_grid}>
            <div className={styles.mobile_card_two_card}>
              <ListTag iconStyle="text-[#1C5237]"/>
              <p>Land Information </p>
            </div>

            <div className={styles.mobile_card_two_card}>
              <ListTag iconStyle="text-[#1C5237]"/>
              <p>Land Information </p>
            </div>

            <div className={styles.mobile_card_two_card}>
              <ListTag iconStyle="text-[#1C5237]"/>
              <p>Land Information </p>
            </div>
          </div>
          

      </div>
    )
}

export function WebDepartment(){
  return(
    <div className={styles.web_department}>
      <div className={styles.web_department_cover}>
        <h1 className={styles.web_department_heading}>Departments</h1>

          <div className={styles.web_department_container}>

            <div className={styles.web_department_card}>
              <ListTag iconStyle={styles.web_department_card_icon}/>
              <p>Land Information </p>
            </div>

            <div className={styles.web_department_card}>
              <ListTag iconStyle={styles.web_department_card_icon}/>
              <p>Geoscience & Water Resources </p>
            </div>

            <div className={styles.web_department_card}>
              <ListTag iconStyle={styles.web_department_card_icon}/>
              <p>Disaster Management</p>
            </div>

            <div className={styles.web_department_card}>
              <ListTag iconStyle={styles.web_department_card_icon}/>
              <p>Data Management</p>
            </div>

            <div className={styles.web_department_card}>
              <ListTag iconStyle={styles.web_department_card_icon}/>
              <p>Department of Environment</p>
            </div>

            <div className={styles.web_department_card}>
              <ListTag iconStyle={styles.web_department_card_icon}/>
              <p>Strategic Planning</p>
            </div>

          </div>
          </div>  
    </div>
  )
}