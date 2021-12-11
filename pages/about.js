import Head from "next/head";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Link from "next/link";

const about = () => {
  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>
      <div
        style={{
          margin: " 3rem",
          minHeight: "100vh",
        }}
      >
        <div style={{ marginBottom: "4rem" }}>
          <Typography variant="h4">Zaw Tint Htoo Aung</Typography>
          <Typography variant="subtitle1">
            Frondend Web Developer and Designer
          </Typography>
        </div>
        <div style={{ marginBottom: "4rem" }}>
          <Typography variant="h5">Work</Typography>
          <Typography variant="body1">
            Zaw Tint is a Frontend Web Developer and UX Designer based in
            Yangon, Myanmar. He is a self-taught developer and designer who is
            passionate about creating beautiful and functional web applications.
            He is currently working as a Freelance Frontend Web Developer.
          </Typography>
        </div>
        <div style={{ marginBottom: "4rem" }}>
          <Typography variant="h5">Bio</Typography>
          <Typography variant="body1">
            Born in 2000. Studied in Yangon University of Technology. Graduated
            in 2023.
          </Typography>
        </div>
        <div style={{ marginBottom: "4rem" }}>
          <Typography variant="h5">I Love</Typography>
          <Typography variant="body1">
            Music, Photography, Travel, Reading, Watching Anime, Gaming,
            Cryptocurrency, Minami Hamabe, and I Love to Code.
          </Typography>
        </div>
        <Link href="/projects" passHref>
          <div style={{ marginTop: "3rem", textAlign: "center" }}>
            <Button variant="contained" align="center" color="primary">
              My Portfolio
            </Button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default about;
