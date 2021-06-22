import React, { useEffect } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { useRouter } from "next/dist/client/router";
import { GET_USER_ID } from "../Apollo/GetUserIdQuery";
import { useQuery } from "@apollo/client";
import { useSession } from "next-auth/client";
import ArrowDropDownCircleRounded from "@material-ui/icons/ArrowDropDownCircleRounded";
import { ArrowDropDown } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      color: "#fff",
    },
  })
);

const room = () => {
  const router = useRouter();
  const classes = useStyles();
  const [user, setUser] = useState<any>({});
  const [darkMode, setDarkMode] = useState(false);
  const [session] = useSession();
  const { data } = useQuery(GET_USER_ID, {
    variables: { email: session?.user.email },
  });
  const [round, setRound] = useState("");
  const [drawTime, setDrawTime] = useState("");
  const [drawTimeOpen, setDrawTimeOpen] = useState(false);
  const [roundOpen, setRoundOpen] = useState(false);

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
    <>
      <div
        style={{
          backgroundColor: darkMode ? "#1e1e1e" : "#fff",
          height: "100vh",
        }}
      >
        <div>
          <h1
            className={"text"}
            style={{ fontSize: "500%", marginLeft: "5%", cursor: "pointer" }}
            onClick={() => router.push("/home")}
          >
            SketchDeck
          </h1>
        </div>
        <div>
          <FormControl
            className={classes.formControl}
            style={{
              marginLeft: "35%",
            }}
          >
            <InputLabel
              id="demo-controlled-open-select-label"
              style={{ color: darkMode ? "#fff" : "#757575" }}
            >
              Rounds
            </InputLabel>
            <Select
              IconComponent={(props) => (
                <ArrowDropDown
                  style={{ color: darkMode ? "#fff" : "#757575" }}
                  {...props}
                />
              )}
              color="primary"
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={roundOpen}
              onClose={() => setRoundOpen(false)}
              onOpen={() => setRoundOpen(true)}
              value={round}
              onChange={(e: any) => setRound(e.target.value)}
              style={{
                width: 500,
                borderBottom: darkMode ? "2px solid #fff" : "",
                color: darkMode ? "#fff" : "#000",
              }}
            >
              <MenuItem value={3}>Three</MenuItem>
              <MenuItem value={4}>Four</MenuItem>
              <MenuItem value={5}>Five</MenuItem>
              <MenuItem value={6}>Six</MenuItem>
              <MenuItem value={7}>Seven</MenuItem>
              <MenuItem value={8}>Eight</MenuItem>
              <MenuItem value={9}>Nine</MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <FormControl
            className={classes.formControl}
            style={{
              marginLeft: "35%",
              marginTop: "5%",
            }}
          >
            <InputLabel
              id="demo-controlled-open-select-label"
              style={{ color: darkMode ? "#fff" : "#757575" }}
            >
              Draw Time (Seconds)
            </InputLabel>
            <Select
              IconComponent={(props) => (
                <ArrowDropDown
                  style={{ color: darkMode ? "#fff" : "#757575" }}
                  {...props}
                />
              )}
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={drawTimeOpen}
              onClose={() => setDrawTimeOpen(false)}
              onOpen={() => setDrawTimeOpen(true)}
              value={drawTime}
              onChange={(e: any) => setDrawTime(e.target.value)}
              style={{
                width: 500,
                borderBottom: darkMode ? "2px solid #fff" : "",
                color: darkMode ? "#fff" : "#000",
              }}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
              <MenuItem value={40}>Forty</MenuItem>
              <MenuItem value={50}>Fifty</MenuItem>
              <MenuItem value={60}>Sixty</MenuItem>
              <MenuItem value={70}>Seventy</MenuItem>
              <MenuItem value={80}>Eighty</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </>
  );
};

export default room;
