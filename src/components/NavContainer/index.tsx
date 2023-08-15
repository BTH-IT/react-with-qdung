import * as Styles from "./styles";
import { useState } from "react";
import {
  Squares2X2Icon,
  RectangleStackIcon,
  QueueListIcon,
  TableCellsIcon,
  IdentificationIcon,
  InboxStackIcon,
  TicketIcon,
  DocumentCheckIcon,
  ServerStackIcon,
} from "@heroicons/react/24/solid";
import NavSidebarItem from "../NavSidebarItem";
import NavImageContent from "../NavImageContent";

const data = [
  {
    title: "Live Visual Builder",
    icon: <RectangleStackIcon />,
    imgSrc: "https://avada.com/wp-content/uploads/2021/07/live-visual.jpg",
    imgUrl: "https://avada.com/feature/live-visual-builder/",
  },
  {
    title: "Layout Builder",
    icon: <Squares2X2Icon />,
    imgSrc: "https://avada.com/wp-content/uploads/2021/07/layout-builder-4.jpg",
    imgUrl: "https://avada.com/feature/layout-builder/",
  },
  {
    title: "Header Builder",
    icon: <QueueListIcon />,
    imgSrc: "https://avada.com/wp-content/uploads/2021/07/header-builder-5.jpg",
    imgUrl: "https://avada.com/feature/live-visual-builder/",
  },
  {
    title: "Mega Menu",
    icon: <TableCellsIcon />,
    imgSrc:
      "https://avada.com/wp-content/uploads/2023/03/mega-menu-feature.jpg",
    imgUrl: "https://avada.com/feature/mega-menu-builder/",
  },
  {
    title: "Footer Builder",
    icon: <InboxStackIcon />,
    imgSrc: "https://avada.com/wp-content/uploads/2021/07/footer-builder-5.jpg",
    imgUrl: "https://avada.com/feature/footer-builder/",
  },
  {
    title: "Form Builder",
    icon: <IdentificationIcon />,
    imgSrc: "https://avada.com/wp-content/uploads/2021/07/form-builder.jpg",
    imgUrl: "https://avada.com/feature/form-builder/",
  },
  {
    title: "Off Canvas",
    icon: <TicketIcon />,
    imgSrc:
      "https://avada.com/wp-content/uploads/2023/03/off-canvas-feature.jpg",
    imgUrl: "https://avada.com/feature/off-canvas-builder/",
  },
  {
    title: "Setup Wizard",
    icon: <DocumentCheckIcon />,
    imgSrc: "https://avada.com/wp-content/uploads/2023/03/setup-wizard-1.jpg",
    imgUrl: "https://avada.com/feature/setup-wizard/",
  },
  {
    title: "Performance Wizard",
    icon: <ServerStackIcon />,
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

  return (
    <Styles.NavContainer>
      <Styles.NavSidebar>
        {data.map((item) => (
          <NavSidebarItem
            key={item.title}
            isImageActive={imageActive.imgSrc === item.imgSrc}
            setImageActive={setImageActive}
            {...item}
          ></NavSidebarItem>
        ))}
      </Styles.NavSidebar>
      <NavImageContent imageActive={imageActive}></NavImageContent>
    </Styles.NavContainer>
  );
};

export default NavContainer;
