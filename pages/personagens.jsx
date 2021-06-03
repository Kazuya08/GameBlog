import React from "react";
import Headers from "../components/header/header";
import Footer from "../components/footer/footer";

const personagens = (props) => {
  return (
    <>
      <header>
        <Headers />
      </header>

      <main>
        <div
          className="content col shadow"
          style={{
            backgroundColor: "white",
            borderRadius: "20px",
            padding: "50px",
            flex: "1",
            width: "100%",
            maxWidth: "1280px",
            alignItems: "center",
          }}
        >
          <h1>Jett</h1>
          <img
            src="https://i.pinimg.com/originals/ef/a9/3d/efa93d56b6343e76adb27d841e09932a.jpg"
            alt="jett-valorant"
            width="500px"
          />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default personagens;
