import { Card, Col } from "antd";
import { ButtonCustom, RowCustom } from "../../lib/antdCustom";
import * as Styled from "./styles";
import ImageCoverCard from "../../assets/picture.png";

const { Meta } = Card;

const Thumbnail = () => {
  return (
    <Styled.ThumbnailWrapper>
      <Styled.ThumbnailRight>
        <Styled.ThumbnailRightTitle>
          Explore, Buy and Sell the <span>Best NFTs!</span>
        </Styled.ThumbnailRightTitle>
        <Styled.ThumbnailRightButton>
          <ButtonCustom type="primary" paddingX="56px" paddingY="12px">
            Explore
          </ButtonCustom>
          <ButtonCustom
            type="default"
            paddingX="56px"
            paddingY="12px"
            textColor="white"
          >
            Create
          </ButtonCustom>
        </Styled.ThumbnailRightButton>
        <RowCustom>
          <Col xs={8}>
            <Styled.ThumbnailRightCell>
              <h2>32k+</h2>
              <span>Artworks</span>
            </Styled.ThumbnailRightCell>
          </Col>
          <Col xs={8}>
            <Styled.ThumbnailRightCell>
              <h2>12k+</h2>
              <span>Auctions</span>
            </Styled.ThumbnailRightCell>
          </Col>
          <Col xs={8}>
            <Styled.ThumbnailRightCell>
              <h2>10k+</h2>
              <span>Creators</span>
            </Styled.ThumbnailRightCell>
          </Col>
        </RowCustom>
      </Styled.ThumbnailRight>
      <Styled.ThumbnailLeft>
        <Styled.CardCustom
          hoverable
          style={{ width: 350, borderRadius: 0 }}
          cover={
            <img
              alt="example"
              src={ImageCoverCard}
              style={{ borderRadius: 0, height: 350 }}
            />
          }
        >
          <Styled.ThumbnailLeftCard>
            <Styled.ThumbnailLeftCardContent>
              <h2>Artist</h2>
              <span>@hihi</span>
            </Styled.ThumbnailLeftCardContent>
            <ButtonCustom type="primary">Start Bid</ButtonCustom>
          </Styled.ThumbnailLeftCard>
          <Styled.ThumbnailLeftCardSale>
            <Styled.ThumbnailLeftCardSaleContent>
              <div>
                <p>Current Bid</p>
                <span>0.99 ETH</span>
              </div>
              <div>
                <p>Ends in</p>
                <span>25 hrs</span>
              </div>
            </Styled.ThumbnailLeftCardSaleContent>
          </Styled.ThumbnailLeftCardSale>
        </Styled.CardCustom>
      </Styled.ThumbnailLeft>
    </Styled.ThumbnailWrapper>
  );
};

export default Thumbnail;
