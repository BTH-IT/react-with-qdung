import React from "react";
import * as Styles from "../NavContainer/styles";

type NavImageContentProps = {
  imageActive: {
    imgUrl: string;
    imgSrc: string;
  };
};

const NavImageContent = ({ imageActive }: NavImageContentProps) => {
  return (
    <Styles.NavImageContent>
      <a href={imageActive.imgUrl}>
        <img src={imageActive.imgSrc} alt={imageActive.imgSrc} />
      </a>
    </Styles.NavImageContent>
  );
};

export default NavImageContent;
