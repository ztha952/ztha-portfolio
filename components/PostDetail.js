import React from "react";
import Typography from "@mui/material/Typography";
import moment from "moment";
import Container from "@mui/material/Container";
import Image from "next/image";
import { grpahCMSImageLoader } from "../util";

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }
    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <Image
            unoptimized
            loader={grpahCMSImageLoader}
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };
  return (
    <>
      <Container maxWidth="sm" minWidth="xs" sx={{ p: 3 }}>
        <div>
          <Image
            loader={grpahCMSImageLoader}
            src={post.featureImage.url}
            alt={post.featureImage.title}
            width={620}
            height={320}
          />
        </div>
        <div>
          <Typography variant="h2" align="center">
            {post.title}
          </Typography>
          <Typography variant="h4" align="center">
            {post.excerpt}
          </Typography>
          <Typography variant="subtitle1" align="center">
            {moment(post.createdAt).format("MMM DD, YYYY")}
          </Typography>
        </div>
        <div style={{ marginTop: "2rem" }}>
          {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemIndex) =>
              getContentFragment(itemIndex, item.text, item)
            );
            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>
      </Container>
    </>
  );
};

export default PostDetail;
