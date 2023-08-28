import { SubcribeInput, SubcribeWrapper } from "./styles";
import { ButtonCustom, InputCustom } from "../../lib/antdCustom";

const Subcribe = () => {
  return (
    <SubcribeWrapper>
      <h1>Ready for Next NFT Drop?</h1>
      <SubcribeInput>
        <InputCustom placeholder="info@gmail.com" />
        <ButtonCustom type="primary">Subscribe</ButtonCustom>
      </SubcribeInput>
    </SubcribeWrapper>
  );
};

export default Subcribe;
