import Head from "next/head";
import Link from "next/link";
import PostCard from "../components/PostCard";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { getPosts } from "../services";

const blogs = ({ posts }) => {
  return (
    <>
      <Head>
        <title>My Blogs</title>
      </Head>
      <div style={{ marginBottom: "4rem", minHeight: "100vh" }}>
        <div style={{ marginTop: "40px", marginBottom: "40px" }}>
          <Typography variant="h4" align="center">
            Welcome To My Blogs
          </Typography>
        </div>
        <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
          <Grid
            container
            spacing={{ xs: 4, md: 3 }}
            justifyContent="center"
            alignItems="center"
          >
            {posts.map((post) => (
              <Grid item key={post.title} wrap="wrap">
                <PostCard post={post.node} key={post.title} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default blogs;

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
