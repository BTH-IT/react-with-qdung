import Card, { CardProps } from "./components/Card";
import styled from "styled-components";

const data: CardProps[] = [
  {
    forUser: "For Beginners",
    title: "Launch Your First Website",
    imgUrl:
      "https://avada.com/wp-content/uploads/2021/06/for-beginners@2x-200x231.jpg",
    tags: ["React", "JS", "HTML"],
    bgColor: "#ffe979",
    bgTag: "#e6c000",
  },
  {
    forUser: "For Beginners",
    title: "Launch Your First Website",
    imgUrl:
      "https://avada.com/wp-content/uploads/2021/06/for-marketers@2x-200x200.jpg",
    tags: ["React", "JS", "HTML"],
    bgColor: "#b7f598",
    bgTag: "#66bc3c",
  },
  {
    forUser: "For Beginners",
    title: "Launch Your First Website",
    imgUrl:
      "https://avada.com/wp-content/uploads/2021/06/for-pro-2@2x-200x191.jpg",
    tags: ["React", "JS", "HTML"],
    bgColor: "#81daf5",
    bgTag: "#1699c2",
  },
];

const Styled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const StyledComponents = () => {
  return (
    <Styled className="container">
      {data.map((item) => (
        <Card {...item} key={item.forUser}></Card>
      ))}
    </Styled>
  );
};

export default StyledComponents;
