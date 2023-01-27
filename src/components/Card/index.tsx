import styles from './card.module.scss';
import React from 'react';
import Title from 'src/components/Card/Title';
import Description from "src/components/Card/Description";
import PriceDetails from "src/components/Card/PriceDetails";
import Bar from "src/components/Card/Bar";
import User from "src/components/Card/User";
import MainImage from "src/components/Card/MainImage";

const Card = () => (
    <div className={styles.main}>
        <MainImage />
        <Title title='Equilibrium #3429'/>
        <Description description='Our Equilibrium collection promotes balance and calm.'/>
        <PriceDetails price={0.041} days={3}/>
        <Bar/>
        <User userName='Jules Wyvern'/>
    </div>
);

export default Card;

