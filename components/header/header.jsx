import React from "react";

const header = () => {
  return (
    <nav
      className="ico cover"
      style={{ backgroundColor: "#ff4655", marginBottom: "40px" }}
    >
      <div
        className="row center wrap"
        style={{
          padding: "5px",
          flex: "1",
          width: "100%",
          maxWidth: "1500px",
        }}
      >
        <div>
          <a href="/">
            <img src="/images/logo-s.png" alt="logo" width="135" border="0" />
          </a>
        </div>
        <div style={{ marginLeft: "10%" }}>
          <a href="/">
            <b>Home</b>
          </a>
        </div>
        <div>
          <a href="/personagens">
            <b style={{ marginLeft: "20px" }}>Personagens</b>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default header;
