import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function TopBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar color="inherit" position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            {/*<MenuIcon />*/}
          </IconButton>
          <nav className="header-nav">
            {/*<TopBar/>*/}
            <Button color="inherit">
              <Link to="/counter" color="inherit">
                Counter
              </Link>
            </Button>
            <Button color="primary">
              <Link to="/todos">Todos</Link>
            </Button>
          </nav>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TopBar;
