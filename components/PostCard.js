import React from "react";
import Link from "next/link";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const PostCard = ({ post }) => {
  console.log(post);
  return (
    <>
      <Link href={`/post/${post.slug}`} passHref>
        <Card sx={{ maxWidth: 330, minWidth: 330 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={post.featureImage.url}
              alt={post.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {post.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {post.excerp}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </>
  );
};

export default PostCard;
