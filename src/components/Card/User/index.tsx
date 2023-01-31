import React from 'react';
import styles from './User.module.scss';
import avatarImg from 'src/images/image-avatar.png';

interface UserProps {
    userName: string
}

const User: React.FC<UserProps> = ({userName}) => (
    <div className={styles.main}>
        <img src={avatarImg} alt='' className={styles.img}/>
        <div className={styles.text}>
            <div className={styles.creation}>Creation of</div>
            <div className={styles.userName}> {userName}</div>
        </div>
    </div>
)


export default User;