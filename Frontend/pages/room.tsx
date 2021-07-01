import React, { useEffect } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { useRouter } from "next/dist/client/router";
import { GET_USER_ID } from "../Apollo/GetUserIdQuery";
import { useMutation, useQuery } from "@apollo/client";
import { useSession } from "next-auth/client";
import { ArrowDropDown } from "@material-ui/icons";
import { generateId } from "../utils/GenerateId";
import { ID_MUTATION } from "../Apollo/IdMutation";

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
  const [Id] = useMutation(ID_MUTATION);
  const { data } = useQuery(GET_USER_ID, {
    variables: { email: session?.user.email },
  });
  const [round, setRound] = useState("");
  const [drawTime, setDrawTime] = useState("");
  const [drawTimeOpen, setDrawTimeOpen] = useState(false);
  const [roundOpen, setRoundOpen] = useState(false);
  const [roundFilledOut, setRoundFilledOut] = useState(false);
  const [timeFilledOut, setTimeFilledOut] = useState(false);
  const [id, setId] = useState("");
  const [copied, setCopied] = useState("Copy Url");

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
    if (copied === "Copied!") {
      setTimeout(() => {
        setCopied("Copy Url");
      }, 1000);
    }
  }, [copied]);

  const handleId = async () => {
    const gameid = generateId(24);
    await Id({
      variables: {
        value: gameid,
      },
    });
    setId(gameid);
  };

  useEffect(() => {
    if (user && user.theme === "dark") {
      setDarkMode(true);
    }

    handleId();
  }, [user]);
  const copyElementText = (id: string) => {
    if (document.getElementById(id)) {
      var text = document.getElementById(id)?.innerText;
      var elem = document.createElement("textarea");
      document.body.appendChild(elem);
      (elem.value as any) = text;
      elem.select();
      document.execCommand("copy");
      document.body.removeChild(elem);
    }
  };
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
              <MenuItem value={3} onClick={() => setRoundFilledOut(true)}>
                Three
              </MenuItem>
              <MenuItem value={4} onClick={() => setRoundFilledOut(true)}>
                Four
              </MenuItem>
              <MenuItem value={5} onClick={() => setRoundFilledOut(true)}>
                Five
              </MenuItem>
              <MenuItem value={6} onClick={() => setRoundFilledOut(true)}>
                Six
              </MenuItem>
              <MenuItem value={7} onClick={() => setRoundFilledOut(true)}>
                Seven
              </MenuItem>
              <MenuItem value={8} onClick={() => setRoundFilledOut(true)}>
                Eight
              </MenuItem>
              <MenuItem value={9} onClick={() => setRoundFilledOut(true)}>
                Nine
              </MenuItem>
              <MenuItem value={10} onClick={() => setRoundFilledOut(true)}>
                Ten
              </MenuItem>
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
              <MenuItem value={10} onClick={() => setTimeFilledOut(true)}>
                Ten
              </MenuItem>
              <MenuItem value={20} onClick={() => setTimeFilledOut(true)}>
                Twenty
              </MenuItem>
              <MenuItem value={30} onClick={() => setTimeFilledOut(true)}>
                Thirty
              </MenuItem>
              <MenuItem value={40} onClick={() => setTimeFilledOut(true)}>
                Forty
              </MenuItem>
              <MenuItem value={50} onClick={() => setTimeFilledOut(true)}>
                Fifty
              </MenuItem>
              <MenuItem value={60} onClick={() => setTimeFilledOut(true)}>
                Sixty
              </MenuItem>
              <MenuItem value={70} onClick={() => setTimeFilledOut(true)}>
                Seventy
              </MenuItem>
              <MenuItem value={80} onClick={() => setTimeFilledOut(true)}>
                Eighty
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        {roundFilledOut && timeFilledOut ? (
          <div>
            <p
              style={{
                color: darkMode ? "#fff" : "#000",
                marginLeft: "15%",
                marginTop: "7%",
                fontSize: "200%",
              }}
            >
              Link to share:{" "}
              <a
                style={{ textDecoration: "underline", cursor: "pointer" }}
                href="http://localhost:3000/game/${id}"
                target="_blank"
                id="myUrl"
              >
                http://localhost:3000/game/{id}
              </a>
            </p>
            <button
              onClick={() => {
                copyElementText("myUrl");
                setCopied("Copied!");
              }}
              style={{
                cursor: "pointer",
                width: "20%",
                height: " 5%",
                position: "absolute",
                backgroundColor: "#F278D1",
                border: "3px solid #F278D1",
                borderRadius: "5px",
                marginLeft: "40%",
              }}
            >
              {copied}
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default room;
