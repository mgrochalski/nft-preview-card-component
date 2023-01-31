import React from "react";
import styles from "./App.module.scss";
import Card from "./components/Card";

const App: React.FC = () => (
    <div className={styles.App}>
        <Card/>
    </div>
);

export default App;
