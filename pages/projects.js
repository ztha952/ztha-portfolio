import Head from "next/head";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Paper from "@mui/material/Paper";
import { CardActionArea } from "@mui/material";

import { pjs } from "./api/data";
import Styles from "../styles/Layout.module.css";
const projects = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>

      <div >
        <div style={{ padding: "10px", marginTop: "20px" }}>
          <Typography variant="h4" align="center" component="h1">
            My Works
          </Typography>
          <Typography variant="h6" align="center" component="h1">
            Cozy Design & Make Life Easier
          </Typography>
        </div>
        <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <Grid
            container
            spacing={{ xs: 4, md: 3 }}
            justifyContent="center"
            alignItems="center"
          >
            {pjs.map((project) => (
              <Grid item key={project.id} wrap="wrap">
                <a href={project.link}>
                  <Card key={project.id}  style={{ backgroundColor: "#272727" }} sx={{ maxWidth: 330, minWidth: 310 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={project.img}
                        alt="projects"
                        
                      />
                      <CardContent className={Styles.vg}>
                        <Typography gutterBottom variant="h5" component="div">
                          {project.name}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </a>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default projects;
