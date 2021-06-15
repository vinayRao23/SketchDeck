import React from "react";
import styles from "../styles/Landingpage.module.css";
import Wave from "../components/Wave";
import { useRouter } from "next/dist/client/router";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <img
        src="https://lh3.googleusercontent.com/-ZDl0EL-tb-4/YMjVyPlpRRI/AAAAAAAAD6k/P9KROckVdFowkGr4-2KEeMaepWB_kkosACJEEGAsYHg/s428/2021-06-15.png"
        alt=""
        style={{ height: "3%", width: "12%", marginLeft: "17%" }}
        className={styles.image}
      />
      <button
        className={styles.getStartedButton}
        style={{ marginLeft: "43%", marginTop: "2%" }}
        onClick={() => router.push("/login")}
      >
        Get Started
      </button>
      <h1 style={{ marginLeft: "8%", marginTop: "7%" }} className={styles.text}>
        A Simple Game to Guess a Sketch.
      </h1>
      <h1
        style={{ marginLeft: "14%", marginTop: "-3%" }}
        className={styles.text}
      >
        Play with Friends and Family.
      </h1>
      <Wave />
    </div>
  );
}
