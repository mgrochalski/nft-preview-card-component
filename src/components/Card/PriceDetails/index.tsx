import styles from './PriceDetails.module.scss';
import ethereumImg from "src/images/icon-ethereum.svg";
import clockImg from "src/images/icon-clock.svg";
import React from "react";

interface priceDetailsProps {
    price: number,
    days: number,
}

const PriceDetails = ({price, days}: priceDetailsProps) => (
    <div className={styles.details}>
        <div className={styles.price}>
            <img src={ethereumImg} alt='ethereum'/>
            {price} ETH
        </div>
        <div className={styles.date}>
            <img src={clockImg} alt=''/>
            {days} days left
        </div>
    </div>
);

export default PriceDetails