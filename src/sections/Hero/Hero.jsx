import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img-me.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import CV from '../../assets/Manav_Resume.pdf'
import { useTheme } from '../../common/ThemeContext'
function Hero() {
    const{theme,toggleTheme}=useTheme();

    const themeIcon= theme==='light'? sun : moon;
    const linkedinIcon= theme==='light'? linkedinLight : linkedinDark;
    const githubIcon= theme==='light'? githubLight : githubDark;

  return <section id="hero" className={styles.container}>
    <div className={styles.colorModeContainer}>
        <img
        className={styles.hero} 
        src={heroImg} 
        alt="Profile picture of of Manav Juneja"
        style={{ width: '200px', height: 'auto' }}
         />
         <img 
         className={styles.colorMode}
         src={themeIcon}
          alt="Color mode icon" 
          onClick={toggleTheme}
          />
    </div>
    <div className={styles.info}>
        <h1>
            Manav
            <br />
            Juneja
        </h1>
        <h2>Java Devloper</h2>
        <span>
            <a href="https://www.linkedin.com/in/manav-juneja-017661222" target='_blank'>
                <img src={linkedinIcon} alt="Linkedin Icon" />
            </a>
            <a href="https://github.com/ManavJuneja" target='_blank'>
                <img src={githubIcon} alt="Github Icon" />
            </a>
        </span>
        <p>
        Crafting Tomorrow: Code, Create, Conquer!
        </p>
        <a href={CV} download>
            <button className="hover">
                Resume
            </button>
        </a>

    </div>
 </section>
  
}

export default Hero;