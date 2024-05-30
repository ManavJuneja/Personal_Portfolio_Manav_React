import styles from '../Footer/FooterStyles.module.css'

function Footer() {
  return (
    <section id='footer' className={styles.container}>
        <p> &copy; 2024 Manav Juneja <br />
        All rights reserved
        </p>
    </section>
  )
}

export default Footer