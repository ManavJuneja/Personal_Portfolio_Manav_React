import styles from '../Skills/SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillsList from '../../common/SkillsList';
import { useTheme } from '../../common/ThemeContext';
function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;
  return (<section id="skills" className={styles.container}>
    <h1 className="sectionTitle">Skills</h1>
    
    
    <div className={styles.skillList}>
        <SkillsList src={checkMarkIcon} skill={"HTML"}/>
        <SkillsList src={checkMarkIcon} skill={"CSS"}/>
        <SkillsList src={checkMarkIcon} skill={"JavaScript"}/>
        <SkillsList src={checkMarkIcon} skill={"C++"}/>
        <SkillsList src={checkMarkIcon} skill={"JAVA"}/>
      </div>

        <hr />

        <div className={styles.skillList}>
        <SkillsList src={checkMarkIcon} skill={"React"}/>
        <SkillsList src={checkMarkIcon} skill={"Spring Boot"}/>
       </div>

        <hr />

        <div className={styles.skillList}>
        <SkillsList src={checkMarkIcon} skill={"MySQL"}/>
        <SkillsList src={checkMarkIcon} skill={"MongoDB"}/>
        </div>
        <hr />

        <div className={styles.skillList}>
        <SkillsList src={checkMarkIcon} skill={"GitHUB"}/>
        <SkillsList src={checkMarkIcon} skill={"AWS"}/>
        <SkillsList src={checkMarkIcon} skill={"MS Azure"}/>
        </div>
        

        
    
  </section>
  );
}

export default Skills