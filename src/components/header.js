import * as React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  ListItemText,
  List,
  ListItem,
  Container,
} from "@material-ui/core";
import { Home } from "@material-ui/icons";
import Link from "../Link";
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

const navLinks = [
  { title: `about us`, path: `/about-us` },
  { title: `product`, path: `/product` },
  { title: `blog`, path: `/blog` },
  { title: `contact`, path: `/contact` },
  { title: `faq`, path: `/faq` },
];

const useStyles = makeStyles({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`,
  },
  appBarColor: {
    background: "#efe9e4",
  },
});

function HideOnScroll(props) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = () => {
  const classes = useStyles();
  return (
    <HideOnScroll>
      <AppBar position="static" className={classes.appBarColor}>
        <Toolbar>
          <Container maxWidth="md" className={classes.navbarDisplayFlex}>
            <IconButton edge="start" color="inherit" aria-label="home">
              <Home fontSize="large" />
            </IconButton>
            <List
              component="nav"
              aria-labelledby="main navigation"
              className={classes.navDisplayFlex}
            >
              {navLinks.map(({ title, path }) => (
                <Link href={path} key={title} className={classes.linkText}>
                  <ListItem button>
                    <ListItemText primary={title} />
                  </ListItem>
                </Link>
              ))}
            </List>
          </Container>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};
export default Header;
