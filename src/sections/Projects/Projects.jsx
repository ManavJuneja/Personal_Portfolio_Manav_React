import styles from './ProjectsStyles.module.css';
import jobDekho from '../../assets/JobDekhoProject.png'
import ProjectCard from '../../common/ProjectCard';
import weatherApp from '../../assets/WeatherApplication.png';
import personalIcon from '../../assets/portfolioIcon.png';
import projectMangement from '../../assets/projectManageIcon.png'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
         <ProjectCard 
         src={jobDekho} 
         link={'http://github.com'}
         h3="Job Dekho"
         p="Discover Your Dream Career Today!"
         />
         <ProjectCard 
         src={weatherApp} 
         link={'http://github.com'}
         h3="Weather Application"
         p="Your Daily Forecast, Simplified"
         />
         <ProjectCard 
         src={projectMangement} 
         link={'http://github.com'}
         h3="Project Master"
         p="Streamline Your Success"
         />
         <ProjectCard 
         src={personalIcon} 
         link={'http://github.com'}
         h3="Personal Portfolio"
         p="Unveil Your Brilliance"
         />

        </div>
        </section>
  )
}

export default Projects