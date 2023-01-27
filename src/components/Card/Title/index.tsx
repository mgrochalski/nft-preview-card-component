import styles from './Title.module.scss';
import React from "react";

interface titleProps {
    title: string
}

const title = ({title}: titleProps) => (
    <div className={styles.title}>
        {title}
    </div>
)

export default title;