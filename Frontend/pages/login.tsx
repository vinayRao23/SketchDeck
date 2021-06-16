import React from "react";
import styles from "../styles/Loginpage.module.css";
import { useRouter } from "next/dist/client/router";
import { signIn, providers, useSession } from "next-auth/client";
import { AppProvider } from "next-auth/providers";

export const getServerSideProps = async () => {
  const myProviders = await providers();
  return {
    props: {
      myProviders,
    },
  };
};
interface IProps {
  myProviders: Record<string, AppProvider> | null;
}

export const login = ({ myProviders }: IProps) => {
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
        <div>
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
          <h2
            style={{ marginLeft: "55%", marginTop: "-30%", fontSize: "200%" }}
          >
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
            style={{
              marginLeft: "55.25%",
              marginTop: "-0.75%",
              fontWeight: 200,
            }}
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
        </div>
        {myProviders &&
          Object.values(myProviders).map((p: any) => {
            if (p.name.includes("Google")) {
              return (
                <div
                  style={{ marginTop: "6%", marginLeft: "55.25%" }}
                  onClick={() =>
                    signIn(p.id, { callbackUrl: "http://localhost:3000/home" })
                  }
                >
                  <a
                    className={`btn btn-primary btn-block py-2 mb-3 ${styles.btnGoogle}`}
                    style={{ cursor: "pointer" }}
                  >
                    <i
                      className="fa fa-google fa-2x mr-1"
                      style={{
                        bottom: "-16%",
                        fontWeight: "bold",
                        left: "20%",
                        position: "relative",
                      }}
                    ></i>
                    <span
                      className="font-weight-bold"
                      style={{
                        bottom: "-5%",
                        fontWeight: "bold",
                        marginLeft: "23%",
                        position: "relative",
                      }}
                    >
                      Continue with Google
                    </span>
                  </a>
                </div>
              );
            } else {
              return (
                <div
                  style={{
                    marginTop: "1%",
                    marginLeft: "55.25%",
                  }}
                  onClick={() =>
                    signIn(p.id, { callbackUrl: "http://localhost:3000/home" })
                  }
                >
                  <a
                    className={`btn btn-primary btn-block py-2 mb-3 ${styles.btnGithub}`}
                    style={{ cursor: "pointer" }}
                  >
                    <i
                      className="fa fa-github fa-2x mr-1"
                      style={{
                        bottom: "-16%",
                        fontWeight: "bold",
                        left: "20%",
                        position: "relative",
                      }}
                    ></i>
                    <span
                      className="font-weight-bold"
                      style={{
                        bottom: "-5%",
                        fontWeight: "bold",
                        marginLeft: "23%",
                        position: "relative",
                      }}
                    >
                      Continue with Github
                    </span>
                  </a>
                </div>
              );
            }
          })}
      </div>
    </>
  );
};

export default login;
