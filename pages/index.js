import Head from "next/head";
import Image from "next/image";
import me from "../assets/ztha.webp";
import Typography from "@mui/material/Typography";
import Styles from "../styles/Layout.module.css";
import Link from "next/link";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

export default function Home() {
  return (
    <>
      <Head>
        <title>ZTHA-HomePage</title>
        <meta name="description" content="My Portfolio" />
      </Head>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",

          minHeight: "100vh",
        }}
      >
        <Image
          src={me}
          alt="Me"
          layout="fixed"
          className={Styles.rounded}
          width={230}
          height={230}
        />

        <div style={{ margin: "55px 20px" }}>
          <Typography variant="h3" align="center" component="div" gutterBottom>
            ZAW TINT
          </Typography>
          <Typography variant="h4" align="center" gutterBottom component="div">
            React Developer & UI Designer
          </Typography>
        </div>
        <Link href="/Contact" passHref>
          <Button variant="contained">Contact Me</Button>
        </Link>
      </div>
    </>
  );
}
