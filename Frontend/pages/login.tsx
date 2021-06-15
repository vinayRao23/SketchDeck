import React from "react";
import styles from "../styles/Loginpage.module.css";
import { useRouter } from "next/dist/client/router";

export const login = () => {
  const router = useRouter();
  return (
    <>
      <div>
        <img
          src="https://lh3.googleusercontent.com/-ZDl0EL-tb-4/YMjVyPlpRRI/AAAAAAAAD6k/P9KROckVdFowkGr4-2KEeMaepWB_kkosACJEEGAsYHg/s428/2021-06-15.png"
          alt=""
          style={{
            height: "3%",
            width: "12%",
            marginLeft: "10%",
            cursor: "pointer",
          }}
          className={styles.image}
          onClick={() => router.push("/")}
        />
        <img
          src="https://lh3.googleusercontent.com/-KaHuUttzdKY/YMkXpLDecXI/AAAAAAAAENs/tW2smnpKNDEW3pklgqYEeVZa9TxYMK5fwCJEEGAsYHg/s0/2021-06-15.png?authuser=0"
          alt=""
          style={{
            position: "fixed",
            marginTop: "13%",
            marginLeft: "-12%",
            width: "40%",
            height: "57%",
          }}
        />
        <p style={{ marginTop: "33%", marginLeft: "23.5%", fontWeight: 300 }}>
          Login To Your Account
        </p>
        <p
          style={{
            marginTop: "-1%",
            marginLeft: "11.75%",
            fontWeight: "lighter",
          }}
        >
          Welcome To SketchDeck. To Start Playing, Login To Your Account Here.{" "}
        </p>
      </div>
      <div>
        <h2 style={{ marginLeft: "55%", marginTop: "-30%", fontSize: "200%" }}>
          Welcome To SketchDeck
        </h2>
        <p
          style={{
            marginLeft: "55.25%",
            marginTop: "-1%",
            fontWeight: 200,
          }}
        >
          By signing in you accept our
        </p>
        <p
          style={{ marginLeft: "55.25%", marginTop: "-0.75%", fontWeight: 200 }}
        >
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            style={{ color: "#020081" }}
            target="_blank"
          >
            Privacy Policy
          </a>{" "}
          and{" "}
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            style={{ color: "#020081" }}
            target="_blank"
          >
            Terms of Service
          </a>
          .
        </p>
        <button
          className={styles.btnGithub}
          style={{ marginLeft: "55.25%", marginTop: "2%" }}
        >
          <div style={{ marginLeft: "6%" }}>
            <i
              className="fa fa-github fa-2x"
              style={{
                position: "fixed",
                marginLeft: "-2.75%",
                marginTop: "-0.58%",
              }}
            />
            Continue With Github
          </div>
        </button>
        <button
          className={styles.btnGoogle}
          style={{ marginLeft: "55.25%", marginTop: "7%" }}
        >
          <div style={{ marginLeft: "6%" }}>
            <i
              className="fa fa-google fa-2x"
              style={{
                position: "fixed",
                marginLeft: "-2.75%",
                marginTop: "-0.58%",
              }}
            />
            Continue With Google
          </div>
        </button>
      </div>
    </>
  );
};

export default login;
