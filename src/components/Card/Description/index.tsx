import styles from './Description.module.scss';
import React from "react";

interface DescriptionProps {
    description: string
}

const Description: React.FC<DescriptionProps> = ({description}) => (
    <div className={styles.description}>
        {description}
    </div>
);

export default Description;