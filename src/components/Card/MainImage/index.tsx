import styles from './MainImage.module.scss';
import equilibriumImg from "src/images/image-equilibrium.jpg";
import React from "react";

const MainImage: React.FC = () => (
    <img src={equilibriumImg} alt='equilibrium' className={styles.img}/>
);

export default MainImage;