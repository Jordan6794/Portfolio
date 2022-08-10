import { FunctionComponent } from "react";

import styles from "./CTA.module.css"

const CTA: FunctionComponent = () => {

    return(
        <section className={`background-color ${styles.section}`}>
            <div className="container">
                <div className={styles.ctaDiv}>
                    <div className={styles.textArea}>
                        <h3 className={styles.title}>Let&apos;s work together!</h3>
                        <p>I&apos;m available for fulltime or freelance projects. Hire me and get your projects done.</p>
                    </div>

                    <div className={styles.buttonArea}>
                        <button className="btn btn-big">Contact me</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA