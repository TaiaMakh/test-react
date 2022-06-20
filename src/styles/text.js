import styled from "styled-components";
import device from "./device";

export const MainTitle = styled.h1`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 32px;
  color: #07252c;
  text-decoration: none;
  text-align: left;
  margin-bottom: 5%;
  @media ${device.mobileL} {
    font-size: 36px;
    line-height: 38px;
    margin-bottom: 2%;
  }
`;
export const MainSubtitleGrey = styled.h2`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  color: #acacac;
  text-decoration: none;
  text-align: left;
  @media ${device.mobileL} {
    font-size: 28px;
    line-height: 28px;
  }
`;
export const BoldTitle = styled.span`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 24px;
  color: #07252c;
  text-decoration: none;
  text-align: left;
`;
export const ThinGreyText = styled.span`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #acacac;
  text-decoration: none;
  text-align: left;
`;
export const ThinGreyItalic = styled.span`
  font-family: "Manrope";
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #acacac;
  text-decoration: none;
  text-align: left;
`;
export const NormalText = styled.span`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #07252c;
  text-decoration: none;
  text-align: left;
`;
