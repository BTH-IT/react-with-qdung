import React from "react";
import styled from "styled-components";

export interface CardProps {
  forUser: string;
  title: string;
  imgUrl: string;
  tags: string[];
  bgColor: string;
  bgTag: string;
}

interface StyledCardProps {
  bgColor: string;
  bgTag: string;
}

const StyledCard = styled.div<StyledCardProps>`
  background-color: ${(props) => props.bgColor};
  border-radius: 12px;
  text-align: center;
  padding: 60px;
  height: 100%;

  p {
    font-size: 1rem;
    margin-bottom: 30px;
  }

  h2 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 40px;
  }

  img {
    margin-bottom: 20px;
    width: 200px;
    height: 200px;
    object-fit: cover;
  }

  ul {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }

  li {
    background-color: ${(props) => props.bgTag};
    border-radius: 6px;
    text-align: center;
    padding: 8px 12px;
  }
`;

const Card = (props: CardProps) => {
  return (
    <StyledCard bgColor={props.bgColor} bgTag={props.bgTag}>
      <p>{props.forUser}</p>
      <h2>{props.title}</h2>
      <img src={props.imgUrl}></img>
      <ul>
        {props.tags.map((tag: string) => (
          <li className="card-tag">{tag}</li>
        ))}
      </ul>
    </StyledCard>
  );
};

export default Card;
