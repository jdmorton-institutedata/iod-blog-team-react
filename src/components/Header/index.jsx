import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import LogoDark from "../../images/team-logos-dark-trim.png";
import LogoLight from "../../images/team-logos-light-trim.png";
import Link from "@mui/material/Link";
import { NavLink } from "react-router-dom";
import { ThemeModeContext } from "../ThemeContext";
import { useContext } from "react";

const LogoLink = styled(Link)({
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  color: "inherit",
  flexGrow: 1,
});

const LogoImg = styled("img")(() => ({
  width: "74px",
  height: "44px",
  marginRight: "10px",

  "&:hover": {
    opacity: 0.8,
  },

  "@media (max-width:640px)": {
    width: "60px",
    height: "60px" },
}));

const HeaderLink = styled(Button)({
  marginLeft: "10px",
  textDecoration: "none",
  color: "inherit",
});

const Header = () => {
  const themeMode = useContext(ThemeModeContext).themeMode;
  return (
    <AppBar position="static" elevation={0}>
      <Toolbar>
        <LogoLink to="/">
          {themeMode === 'light' ? <LogoImg src={LogoDark} alt="IOD Blog Team" /> : <LogoImg src={LogoLight} alt="IOD Blog Team" />}
          <Typography variant="h6" component="div" sx={{ display: { xs: 'none', sm: 'flex'}}}>
            IOD Blog Team
          </Typography>
        </LogoLink>
        <nav>
          <HeaderLink to="/" component={NavLink}>Home</HeaderLink>
          <HeaderLink to="/users" component={NavLink}>Users</HeaderLink>
          <HeaderLink to="/blog" component={NavLink}>Blog</HeaderLink>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
