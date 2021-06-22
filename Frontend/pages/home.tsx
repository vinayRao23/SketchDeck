import React, { useEffect, useState } from "react";
import styles from "../styles/Homepage.module.css";
import { signOut, useSession } from "next-auth/client";
import { Switch } from "@material-ui/core";
import { GET_USER_ID } from "../Apollo/GetUserIdQuery";
import { TOGGLE_THEME } from "../Apollo/ToggleThemeMutation";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/dist/client/router";

export const home = () => {
  const [user, setUser] = useState<any>({});
  const [session] = useSession();
  const [darkMode, setDarkMode] = useState(false);
  const { data } = useQuery(GET_USER_ID, {
    variables: { email: session?.user.email },
  });
  const [toggleTheme] = useMutation(TOGGLE_THEME);

  useEffect(() => {
    if (data)
      setUser({
        name: session?.user.name,
        email: session?.user.email,
        id: data?.getUserId[0],
        theme: data?.getUserId[1],
        image: session?.user.image,
      });
    console.log(data, session, user);
  }, [typeof user, typeof data, typeof session]);

  useEffect(() => {
    if (user && user.theme === "dark") {
      setDarkMode(true);
    }
  }, [user]);

  return (
    <React.Fragment>
      <div className={darkMode ? styles.darkMode : ""}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            top: "1%",
            position: "relative",
          }}
          className={"text"}
        >
          <h1>SketchDeck</h1>
        </div>
        <div>
          <img
            src={session?.user.image as any}
            style={{
              height: "18%",
              width: "9%",
              borderRadius: "100%",
              marginLeft: "45.25%",
              marginTop: "-4%",
            }}
            alt=""
          />
        </div>
        <textarea
          defaultValue={session?.user.name!}
          style={{
            marginTop: "1%",
            marginLeft: "40%",
            position: "absolute",
            resize: "none",
            outlineColor: "#8FC1EC",
            color: darkMode ? "#fff" : "#000",
            backgroundColor: darkMode ? "#1e1e1e" : "#fff",
            border: darkMode ? "solid 1px white" : "solid 1px #E2E8F0",
          }}
          className={styles.textarea}
          placeholder="Enter a name..."
        />
        <div style={{ marginTop: "5%", marginLeft: "40%" }}>
          <button
            className={styles.button}
            style={{
              fontFamily: "Finger Paint",
              fontWeight: 500,
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Join a Game
          </button>
        </div>
        <div style={{ marginTop: "8%", marginLeft: "40%" }}>
          <button
            className={styles.button}
            onClick={() => (window.location.href = "/room")}
            style={{
              fontFamily: "Finger Paint",
              fontWeight: 500,
              color: "#fff",
              cursor: "pointer",
              backgroundColor: "#E53E3F",
              border: "2px solid #E53E3F",
            }}
          >
            Create a Room
          </button>
        </div>
        <i
          className="fa fa-sign-out fa-4x"
          style={{
            cursor: "pointer",
            color: darkMode ? "#4197FF" : "#000",
            top: "3%",
            right: "14%",
            position: "absolute",
          }}
          onClick={() => signOut({ callbackUrl: "/" })}
        />
        <i
          className="fa fa-cog fa-4x"
          style={{
            cursor: "pointer",
            color: darkMode ? "#4197FF" : "#000",
            top: "3%",
            right: "9%",
            position: "absolute",
          }}
        />
        <div
          style={{
            cursor: "pointer",
            top: "5%",
            right: "3.5%",
            position: "absolute",
          }}
        >
          <Switch
            onChange={async () => {
              setDarkMode(!darkMode);
              await toggleTheme({
                variables: {
                  theme: !darkMode ? "dark" : "light",
                  id: user.id,
                },
              });
              console.log(user);
            }}
            checked={darkMode}
            value={darkMode}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default home;
