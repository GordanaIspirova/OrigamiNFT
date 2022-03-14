import { makeStyles } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const GridBg = () => {
  const classes = useStyles();
  return (
    <div className={classes.gradient}>
      <div className={classes.grid} />
    </div>
  );
};

export default GridBg;

const useStyles = makeStyles({
  grid: {
    backgroundImage: "url(/download.svg)",
    backgroundPosition: "bottom",
    borderColor: "rgb(241 245 249/0.05)",
    borderBottomWidth: 1,
    WebkitMaskImage: "linear-gradient(transparent, black)",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  gradient: {
    position: "absolute",
    // backgroundSize: "cover",
    // "--tw-bg-opacity": "0.2",
    // backgroundColor: "rgb(11 17 32 / var(--tw-bg-opacity))",
    // backgroundImage: "url(/hero-dark.jpg)",
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "bottom",
    top: 0,
    right: 0,
    left: 0,
    bottom: "2.5rem",
    zIndex: -1,
    height: "100vh",
  },
});
