import Link from "next/link";
import { FunctionComponent } from "react";

import styles from "./CTA.module.css"
import { useTranslation } from "next-i18next";

const CTA: FunctionComponent = () => {

    const { t } = useTranslation("cta")
    const { t: tCommon } = useTranslation("common")

    return(
        <section className={`background-color ${styles.section}`}>
            <div className="my-container">
                <div className={styles.ctaDiv}>
                    <div className={styles.textArea}>
                        <h3 className={styles.title}>{t('title')}</h3>
                        <p>{t('subtitle')}</p>
                    </div>

                    <div className={styles.buttonArea}>
                        <Link href="/#contact"><button className="my-btn btn-big">{tCommon('contact-me')}</button></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA