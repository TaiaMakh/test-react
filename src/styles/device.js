const size = {
  mobileS: "320px",
  mobileM: "370px",
  mobileL: "480px",
  tablet: "768px",
  laptopS: "992px",
  laptop: "1023px",
  laptopM: "1140px",
  laptopL: "1440px",
  desktop: "1800px",
};

const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileLMax: `(max-width: ${size.mobileL})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tabletM: `(min-width: ${size.tablet})`,
  laptopS: `(min-width: ${size.laptopS})`,
  laptop: `(min-width: ${size.laptop})`,
  maxlaptop: `(max-width: ${size.laptop})`,
  laptopM: `(min-width: ${size.laptopM})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
};

export default device;
