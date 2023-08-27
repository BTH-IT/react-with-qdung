import { ButtonCustom } from "../../lib/antdCustom";
import * as Styled from "./styles";

const Thumbnail = () => {
  return (
    <Styled.ThumbnailWrapper>
      <Styled.ThumbnailRight>
        <h1>Explore, Buy and Sell the Best NFTs!</h1>
        <Styled.ThumbnailRightButton>
          <ButtonCustom type="primary" paddingX="38px" paddingY="12px">
            Explore
          </ButtonCustom>
          <ButtonCustom type="default" paddingX="38px" paddingY="12px">
            Create
          </ButtonCustom>
        </Styled.ThumbnailRightButton>
      </Styled.ThumbnailRight>
      <Styled.ThumbnailLeft></Styled.ThumbnailLeft>
    </Styled.ThumbnailWrapper>
  );
};

export default Thumbnail;
