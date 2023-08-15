import React from "react";
import * as Styles from "../NavContainer/styles";
interface NavSidebarItemProps {
  title: string;
  icon: React.ReactElement;
  imgSrc: string;
  imgUrl: string;
  isImageActive: boolean;
  setImageActive: React.Dispatch<
    React.SetStateAction<{
      imgSrc: string;
      imgUrl: string;
    }>
  >;
}

const NavSidebarItem = (props: NavSidebarItemProps) => {
  return (
    <div key={props.title}>
      <Styles.NavSidebarItem
        onClick={() =>
          props.setImageActive({ imgSrc: props.imgSrc, imgUrl: props.imgUrl })
        }
        isImageActive={props.isImageActive}
      >
        {props.icon}
        <span>{props.title}</span>
      </Styles.NavSidebarItem>
      {props.isImageActive && (
        <Styles.NavImageContent className="mobile">
          <a href={props.imgUrl}>
            <img src={props.imgSrc} alt={props.imgSrc} />
          </a>
        </Styles.NavImageContent>
      )}
    </div>
  );
};

export default NavSidebarItem;
