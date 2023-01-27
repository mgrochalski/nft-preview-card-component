import styles from './Description.module.scss';
import React from "react";

interface descriptionProps {
    description: string
}

const Description = ({description}: descriptionProps) => (
    <div className={styles.description}>
        {description}
    </div>
);

export default Description;