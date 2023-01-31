import styles from './Title.module.scss';
import React from "react";

interface TitleProps {
    title: string
}

const title: React.FC<TitleProps> = ({title}) => (
    <div className={styles.title}>
        {title}
    </div>
)

export default title;