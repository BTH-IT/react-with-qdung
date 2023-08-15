import { RectangleStackIcon } from "@heroicons/react/20/solid";
import * as Styles from "./styles";
import { useState } from "react";

const data = [
  {
    title: "Live Visual Builder",
    icon: <RectangleStackIcon />,
    imgSrc: "https://avada.com/wp-content/uploads/2021/07/live-visual.jpg",
    imgUrl: "https://avada.com/feature/live-visual-builder/",
  },
  {
    title: "Layout Builder",
    icon: <RectangleStackIcon />,
    imgSrc: "https://avada.com/wp-content/uploads/2021/07/layout-builder-4.jpg",
    imgUrl: "https://avada.com/feature/layout-builder/",
  },
  {
    title: "Header Builder",
    icon: <RectangleStackIcon />,
    imgSrc: "https://avada.com/wp-content/uploads/2021/07/header-builder-5.jpg",
    imgUrl: "https://avada.com/feature/live-visual-builder/",
  },
  {
    title: "Mega Menu",
    icon: <RectangleStackIcon />,
    imgSrc:
      "https://avada.com/wp-content/uploads/2023/03/mega-menu-feature.jpg",
    imgUrl: "https://avada.com/feature/mega-menu-builder/",
  },
  {
    title: "Footer Builder",
    icon: <RectangleStackIcon />,
    imgSrc: "https://avada.com/wp-content/uploads/2021/07/footer-builder-5.jpg",
    imgUrl: "https://avada.com/feature/footer-builder/",
  },
  {
    title: "Form Builder",
    icon: <RectangleStackIcon />,
    imgSrc: "https://avada.com/wp-content/uploads/2021/07/form-builder.jpg",
    imgUrl: "https://avada.com/feature/form-builder/",
  },
  {
    title: "Off Canvas",
    icon: <RectangleStackIcon />,
    imgSrc:
      "https://avada.com/wp-content/uploads/2023/03/off-canvas-feature.jpg",
    imgUrl: "https://avada.com/feature/off-canvas-builder/",
  },
  {
    title: "Setup Wizard",
    icon: <RectangleStackIcon />,
    imgSrc: "https://avada.com/wp-content/uploads/2023/03/setup-wizard-1.jpg",
    imgUrl: "https://avada.com/feature/setup-wizard/",
  },
  {
    title: "Performance Wizard",
    icon: <RectangleStackIcon />,
    imgSrc:
      "https://avada.com/wp-content/uploads/2021/07/performance-wizard.jpg",
    imgUrl: "https://avada.com/feature/performance-wizard/",
  },
];
const NavContainer = () => {
  const [imageActive, setImageActive] = useState({
    imgSrc: data[0].imgSrc,
    imgUrl: data[0].imgUrl,
  });
  console.log(imageActive);
  return (
    <Styles.NavContainer>
      <Styles.NavSidebar>
        {data.map((item) => (
          <div key={item.title}>
            <Styles.NavSidebarItem
              onClick={() =>
                setImageActive({ imgSrc: item.imgSrc, imgUrl: item.imgUrl })
              }
              isImageActive={imageActive.imgSrc === item.imgSrc}
            >
              {item.icon}
              <span>{item.title}</span>
            </Styles.NavSidebarItem>
            {imageActive.imgSrc === item.imgSrc && (
              <Styles.NavImageContent className="mobile">
                <a href={imageActive.imgUrl}>
                  <img src={imageActive.imgSrc} alt={imageActive.imgSrc} />
                </a>
              </Styles.NavImageContent>
            )}
          </div>
        ))}
      </Styles.NavSidebar>

      <Styles.NavImageContent>
        <a href={imageActive.imgUrl}>
          <img src={imageActive.imgSrc} alt={imageActive.imgSrc} />
        </a>
      </Styles.NavImageContent>
    </Styles.NavContainer>
  );
};

export default NavContainer;
