import { styled } from "@mui/material/styles";

const PageFooter = styled("footer")(({theme}) => ({
  color: theme.palette.text.primary,
}));

const Footer = () => {
  return (
    <PageFooter>
      <p>&copy; 2021 IOD</p>
    </PageFooter>
  );
}

export default Footer;
