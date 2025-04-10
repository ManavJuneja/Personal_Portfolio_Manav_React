import styles from './ContactStyles.module.css'

function Contact() {
  return (
    <section id="contact" className={styles.container}>
        <h1 className="sectionTitle">Contact</h1>
        <form action="https://formspree.io/f/xdoqroeb" method="post">
            <div className="formGroup">
                <label htmlFor="name" hidden>
                    Name
                </label>
                <input 
                type="text" 
                name="name" 
                id="name" 
                placeholder="Name"
                 />
            </div>
            <div className="formGroup">
                <label htmlFor="email" hidden>
                    Email
                </label>
                <input 
                type="text" 
                name="email" 
                id="email" 
                placeholder="Email"
                 />
            </div>
            <div className="formGroup">
                <label htmlFor="message" hidden>
                    Message
                </label>
                <textarea 
                type="text" 
                name="message" 
                id="message" 
                placeholder="Message"
                required ></textarea>
                 
            </div>
            <input className="hover" type="submit" value={"Submit"} />
        </form>

    </section>
  )
}

export default Contact