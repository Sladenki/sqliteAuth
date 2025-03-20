import Image from "next/image";
import styles from "./page.module.css";
import { motion } from "motion/react";
import Test from "./components/Test/Test";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>

        123
        <div style={{ border: '1px solid red'}}>
        <Test/>
        </div>
        
456
      </main>
    </div>
  );
}
