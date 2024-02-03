import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Root = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  backgroundColor: theme.palette.background.default,
}));

const Main = styled("main")(({theme}) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  color: theme.palette.text.primary,
}));

const Layout = () => {
  return (
    <Root>
      <Header />
      <Main>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Outlet />
          </Grid>
        </Grid>
      </Main>
      <Footer />        
    </Root>
  );
};

export default Layout;
