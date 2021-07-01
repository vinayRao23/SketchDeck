import React, { useEffect, useState } from "react";
import client from "../../apollo-client";
import { GET_GAME_PATHS } from "../../Apollo/GetGamePathsQuery";
import CanvasDraw from "react-canvas-draw";
import { useSession } from "next-auth/client";
import { useQuery } from "@apollo/client";
import { GET_USER_ID } from "../../Apollo/GetUserIdQuery";

interface GameProps {
  id: string;
}

export const getStaticPaths = async () => {
  const result = await client.query({ query: GET_GAME_PATHS });
  const paths = result.data.getGamePaths.map((id: string) => {
    return {
      params: {
        id,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = (context: any) => {
  const id = context.params.id;
  return {
    props: {
      id,
    },
  };
};

export const Game = ({ id }: GameProps) => {
  const [user, setUser] = useState<any>({});
  const [darkMode, setDarkMode] = useState(false);
  const [color, setColor] = useState("#000");
  const [brushSize, setBrushSize] = useState(1);
  const [session] = useSession();
  const [backgroundColor, setBackgroundColor] = useState("white");
  const { data } = useQuery(GET_USER_ID, {
    variables: { email: session?.user.email },
  });

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
    <div
      style={{
        backgroundColor: darkMode ? "#1e1e1e" : "#fff",
        height: "100vh",
      }}
    >
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <CanvasDraw
          hideGrid
          style={{
            border: darkMode ? "3px solid #4197ff" : "3px solid #1e1e1e",
          }}
          canvasHeight={630}
          canvasWidth={950}
          brushRadius={brushSize}
          brushColor={color}
          backgroundColor={backgroundColor}
        />
      </div>
      <div style={{ marginLeft: "17%", marginTop: "0.1%" }}>
        <button
          onClick={() => setColor("red")}
          style={{
            height: "5vh",
            width: "3%",
            backgroundColor: "red",
            border: color === "red" ? "2px solid #4385f4" : "2px solid red",
            cursor: "pointer",
          }}
        ></button>
      </div>
      <div style={{ marginLeft: "17%", marginTop: "0.1%" }}>
        <button
          onClick={() => setColor("#710D0C")}
          style={{
            height: "5vh",
            width: "3%",
            backgroundColor: "#710D0C",
            border:
              color === "#710D0C" ? "2px solid #4385f4" : "2px solid #710D0C",
            cursor: "pointer",
          }}
        ></button>
      </div>
      <div style={{ marginLeft: "19.75%", marginTop: "-5.02%" }}>
        <button
          onClick={() => setColor("#FD7021")}
          style={{
            height: "5vh",
            width: "3%",
            backgroundColor: "#FD7021",
            border:
              color === "#FD7021" ? "2px solid #4385f4" : "2px solid #FD7021",
            cursor: "pointer",
          }}
        ></button>
      </div>
      <div style={{ marginLeft: "19.75%", marginTop: "0.1%" }}>
        <button
          onClick={() => setColor("#BB3711")}
          style={{
            height: "5vh",
            width: "3%",
            backgroundColor: "#BB3711",
            border:
              color === "#BB3711" ? "2px solid #4385f4" : "2px solid #BB3711",
            cursor: "pointer",
          }}
        ></button>
      </div>
      <div style={{ marginLeft: "22.35%", marginTop: "-5.02%" }}>
        <button
          onClick={() => setColor("yellow")}
          style={{
            height: "5vh",
            width: "3%",
            backgroundColor: "yellow",
            border:
              color === "yellow" ? "2px solid #4385f4" : "2px solid yellow",
            cursor: "pointer",
          }}
        ></button>
      </div>
      <div style={{ marginLeft: "22.35%", marginTop: "0.1%" }}>
        <button
          onClick={() => setColor("#E59E26")}
          style={{
            height: "5vh",
            width: "3%",
            backgroundColor: "#E59E26",
            border:
              color === "#E59E26" ? "2px solid #4385f4" : "2px solid #E59E26",
            cursor: "pointer",
          }}
        ></button>
      </div>
      <div style={{ marginLeft: "24.85%", marginTop: "-5.02%" }}>
        <button
          onClick={() => setColor("#19CB2E")}
          style={{
            height: "5vh",
            width: "3%",
            backgroundColor: "#19CB2E",
            border:
              color === "#19CB2E" ? "2px solid #4385f4" : "2px solid #19CB2E",
            cursor: "pointer",
          }}
        ></button>
      </div>
      <div style={{ marginLeft: "24.85%", marginTop: "0.1%" }}>
        <button
          onClick={() => setColor("#055318")}
          style={{
            height: "5vh",
            width: "3%",
            backgroundColor: "#055318",
            border:
              color === "#055318" ? "2px solid #4385f4" : "2px solid #055318",
            cursor: "pointer",
          }}
        ></button>
      </div>
      <div style={{ marginLeft: "27.3%", marginTop: "-5.02%" }}>
        <button
          onClick={() => setColor("#18B1FB")}
          style={{
            height: "5vh",
            width: "3%",
            backgroundColor: "#18B1FB",
            border:
              color === "#18B1FB" ? "2px solid #4385f4" : "2px solid #18B1FB",
            cursor: "pointer",
          }}
        ></button>
      </div>
      <div style={{ marginLeft: "27.3%", marginTop: "0.1%" }}>
        <button
          onClick={() => setColor("#075596")}
          style={{
            height: "5vh",
            width: "3%",
            backgroundColor: "#075596",
            border:
              color === "#075596" ? "2px solid #4385f4" : "2px solid #075596",
            cursor: "pointer",
          }}
        ></button>
      </div>
      <div style={{ marginLeft: "29.7%", marginTop: "-5.02%" }}>
        <button
          onClick={() => setColor("#2221CF")}
          style={{
            height: "5vh",
            width: "3%",
            backgroundColor: "#2221CF",
            border:
              color === "#2221CF" ? "2px solid #4385f4" : "2px solid #2221CF",
            cursor: "pointer",
          }}
        ></button>
      </div>
      <div style={{ marginLeft: "29.7%", marginTop: "0.1%" }}>
        <button
          onClick={() => setColor("#0E0760")}
          style={{
            height: "5vh",
            width: "3%",
            backgroundColor: "#0E0760",
            border:
              color === "#0E0760" ? "2px solid #4385f4" : "2px solid #0E0760",
            cursor: "pointer",
          }}
        ></button>
      </div>
      <div style={{ marginLeft: "32%", marginTop: "-5.02%" }}>
        <button
          onClick={() => setColor("#A409B6")}
          style={{
            height: "5vh",
            width: "3%",
            backgroundColor: "#A409B6",
            border:
              color === "#A409B6" ? "2px solid #4385f4" : "2px solid #A409B6",
            cursor: "pointer",
          }}
        ></button>
      </div>
      <div style={{ marginLeft: "32%", marginTop: "0.1%" }}>
        <button
          onClick={() => setColor("#520264")}
          style={{
            height: "5vh",
            width: "3%",
            backgroundColor: "#520264",
            border:
              color === "#520264" ? "2px solid #4385f4" : "2px solid #520264",
            cursor: "pointer",
          }}
        ></button>
      </div>
      <div style={{ marginLeft: "34.2%", marginTop: "-5.02%" }}>
        <button
          onClick={() => setColor("#D57BA8")}
          style={{
            height: "5vh",
            width: "3%",
            backgroundColor: "#D57BA8",
            border:
              color === "#D57BA8" ? "2px solid #4385f4" : "2px solid #D57BA8",
            cursor: "pointer",
          }}
        ></button>
      </div>
      <div style={{ marginLeft: "34.2%", marginTop: "0.1%" }}>
        <button
          onClick={() => setColor("#A4516E")}
          style={{
            height: "5vh",
            width: "3%",
            backgroundColor: "#A4516E",
            border:
              color === "#A4516E" ? "2px solid #4385f4" : "2px solid #A4516E",
            cursor: "pointer",
          }}
        ></button>
      </div>
      <div style={{ marginLeft: "36.3%", marginTop: "-5.02%" }}>
        <button
          onClick={() => setColor("#A25231")}
          style={{
            height: "5vh",
            width: "3%",
            backgroundColor: "#A25231",
            border:
              color === "#A25231" ? "2px solid #4385f4" : "2px solid #A25231",
            cursor: "pointer",
          }}
        ></button>
      </div>
      <div style={{ marginLeft: "36.3%", marginTop: "0.1%" }}>
        <button
          onClick={() => setColor("#612F12")}
          style={{
            height: "5vh",
            width: "3%",
            backgroundColor: "#612F12",
            border:
              color === "#612F12" ? "2px solid #4385f4" : "2px solid #612F12",
            cursor: "pointer",
          }}
        ></button>
      </div>
      <div style={{ marginLeft: "38.3%", marginTop: "-5.02%" }}>
        <button
          onClick={() => setColor("#C1C1C1")}
          style={{
            height: "5vh",
            width: "3%",
            backgroundColor: "#C1C1C1",
            border:
              color === "#C1C1C1" ? "2px solid #4385f4" : "2px solid #C1C1C1",
            cursor: "pointer",
          }}
        ></button>
      </div>
      <div style={{ marginLeft: "38.3%", marginTop: "0.1%" }}>
        <button
          onClick={() => setColor("#4A4A4A")}
          style={{
            height: "5vh",
            width: "3%",
            backgroundColor: "#4A4A4A",
            border:
              color === "#4A4A4A" ? "2px solid #4385f4" : "2px solid #4A4A4A",
            cursor: "pointer",
          }}
        ></button>
      </div>
      <div style={{ marginLeft: "40.3%", marginTop: "-5.02%" }}>
        <button
          onClick={() => setColor("#000")}
          style={{
            height: "10vh",
            width: "10%",
            backgroundColor: darkMode ? "#fff" : "#000",
            border: darkMode
              ? color === "#000"
                ? "2px solid #4385f4"
                : "2px solid #fff"
              : "2px solid #000",
            cursor: "pointer",
            color: darkMode ? "#000" : "#fff",
          }}
        >
          Black
        </button>
      </div>
      <div style={{ marginLeft: "46.4%", marginTop: "-4.9%" }}>
        <button
          style={{
            width: "12vh",
            cursor: "pointer",
            height: "10vh",
            backgroundColor: "#FEFEFE",
            flex: 1,
            border: brushSize === 1 ? "2px solid #4385f4" : "2px solid #fefefe",
          }}
          onClick={() => setBrushSize(1)}
        >
          <img
            src="/smallcircle.png"
            alt=""
            style={{ width: "10vh", height: "6.5vh" }}
          />
        </button>
      </div>
      <div style={{ marginLeft: "52.45%", marginTop: "-4.9%" }}>
        <button
          style={{
            width: "12vh",
            cursor: "pointer",
            height: "10vh",
            backgroundColor: "#FEFEFE",
            flex: 1,
            border: brushSize === 8 ? "2px solid #4385f4" : "2px solid #fefefe",
          }}
          onClick={() => setBrushSize(8)}
        >
          <img
            src="/mediumcircle.png"
            alt=""
            style={{ width: "10vh", height: "7vh" }}
          />
        </button>
      </div>
      <div style={{ marginLeft: "58.5%", marginTop: "-4.9%" }}>
        <button
          style={{
            width: "12vh",
            height: "10vh",
            cursor: "pointer",
            backgroundColor: "#FEFEFE",
            flex: 1,
            border:
              brushSize === 18 ? "2px solid #4385f4" : "2px solid #fefefe",
          }}
          onClick={() => setBrushSize(18)}
        >
          <img
            src="/bigcircle.png"
            alt=""
            style={{ width: "10vh", height: "9vh" }}
          />
        </button>
      </div>
      <div style={{ marginLeft: "64.5%", marginTop: "-4.9%" }}>
        <button
          style={{
            width: "12vh",
            height: "10vh",
            cursor: "pointer",
            backgroundColor: "#fff",
            flex: 1,
            border:
              brushSize === 28 ? "2px solid #4385f4" : "2px solid #fefefe",
          }}
          onClick={() => setBrushSize(28)}
        >
          <img
            src="/hugecircle.png"
            alt=""
            style={{ width: "9.5vh", height: "9.5vh", marginTop: "-2.5%" }}
          />
        </button>
      </div>
      <div style={{ marginLeft: "70.55%", marginTop: "-5%" }}>
        <button
          style={{
            width: "12vh",
            height: "10vh",
            cursor: "pointer",
            backgroundColor: "#fff",
            flex: 1,
            border: color === "white" ? "2px solid #4385f4" : "2px solid #fff",
          }}
          onClick={() => setColor("white")}
        >
          <img
            src="/eraser.png"
            alt=""
            style={{ width: "8vh", height: "8vh", marginTop: "-1.7%" }}
          />
        </button>
      </div>
      <div style={{ marginLeft: "76.59%", marginTop: "-4.9%" }}>
        <button
          style={{
            width: "13vh",
            height: "10vh",
            cursor: "pointer",
            backgroundColor: "#fff",
            flex: 1,
            border: "2px solid #fff",
          }}
          onClick={() => setBackgroundColor(color)}
        >
          <img
            src="/fillcolor.png"
            alt=""
            style={{ width: "9vh", height: "8vh", marginTop: "-1.7%" }}
          />
        </button>
      </div>
    </div>
  );
};

export default Game;
