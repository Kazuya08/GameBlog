import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/header/header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Game Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header style={{ marginBottom: "40px" }}>
        <Header />
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
          }}
        >
          <h1 style={{ textAlign: "center" }}>Bem Vindo a Game Blog!</h1>

          <p>
            Lorem ipsum elementum quis lectus iaculis lectus sollicitudin nulla,
            bibendum torquent turpis at augue duis taciti, pulvinar sodales
            felis eu gravida ultricies auctor. aliquam ac praesent fermentum
            praesent vitae lobortis erat porttitor himenaeos semper, turpis
            torquent dapibus aliquam at nostra mollis lacinia consectetur dui,
            ornare eget donec diam morbi gravida feugiat porta rhoncus. vel
            nullam turpis senectus viverra potenti justo nisl mollis himenaeos
            dapibus nulla dictum quisque ante sapien interdum, conubia justo eu
            maecenas luctus lectus platea etiam venenatis nam morbi cursus
            ligula litora primis. quisque cursus cras tristique euismod interdum
            primis fringilla condimentum, ut felis sem aliquam egestas habitant
            donec, sit vel aptent congue a himenaeos sit.
          </p>
          <div>
            <p>
              Aliquet sed nostra blandit adipiscing ut mauris purus auctor
              feugiat, justo quisque potenti curabitur ac diam pretium phasellus
              lorem, primis felis adipiscing nulla posuere vel aliquet tellus.
              odio vulputate taciti imperdiet tempus fames lobortis massa etiam
              id pulvinar sapien posuere mauris, lorem vulputate donec arcu sit
              nisi vivamus urna vulputate quisque rutrum. viverra ornare
              convallis integer felis turpis ut faucibus imperdiet, iaculis
              imperdiet rhoncus curabitur risus netus nulla imperdiet justo, id
              auctor varius ut dictumst litora ut. vestibulum nostra elit
              bibendum class curae maecenas ullamcorper, tincidunt nam
              scelerisque risus ipsum in lectus vitae, at consequat urna aliquam
              consectetur nullam.{" "}
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>?? GameBlog 2021 - Todos os direitos reservados</p>
      </footer>
    </div>
  );
}
