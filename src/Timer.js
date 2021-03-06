import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  TextField,
  Container,
  ThemeProvider,
  createMuiTheme,
  IconButton,
  Divider,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import AddAlarmIcon from "@material-ui/icons/AddAlarm";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";

import { blue, yellow } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: yellow,
  },
});

const useStyles = makeStyles({
  root: {
    "max-width": "400px",
  },
  m: {
    margin: "20px",
    "background-color": "black",
  },
  s: {
    margin: "6px",
  },
});

function TimerControls({ active, toggleActiveCallback }) {
  return (
    <IconButton onClick={toggleActiveCallback}>
      {active ? <PauseIcon /> : <PlayArrowIcon />}
    </IconButton>
  );
}

function TimerInput({ addTimerCallback }) {
  const defaultDuration = 30;
  const [duration, setDuration] = useState(defaultDuration);

  function clickHandler() {
    addTimerCallback(duration);
  }

  return (
    <Container>
      <TextField
        label="Time"
        onChange={(e) => setDuration(e.target.value)}
        onKeyUp={(e) => {
          e.preventDefault();
          if (e.keyCode === 13) clickHandler();
        }}
      />
      <IconButton onClick={clickHandler}>
        <AddAlarmIcon />
      </IconButton>
    </Container>
  );
}

function Timer() {
  const [timers, setTimers] = useState([]);
  const [active, setActive] = useState(false);

  function addTimer(duration) {
    setTimers((timers) => timers.concat(duration));
  }

  function toggleTimer() {
    setActive(!active);
  }

  useEffect(() => {
    let interval = 0;

    if (active) {
      interval = setInterval(() => {
        setTimers((prevTimers) =>
          prevTimers
            .map((val, index) => (!index ? val - 1 : val))
            .filter((val) => val >= 0)
        );
      }, 1000);
    }

    if (timers.length < 1) setActive(false);

    return () => clearInterval(interval);
  }, [active, timers.length]);

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Card className={classes.root}>
        <TimerControls
          toggleActiveCallback={toggleTimer}
          active={active}
          className={classes.m}
        />
        <Divider />
        <TimerInput addTimerCallback={addTimer} className={classes.m} />
        {timers.length > 0 ? <Divider /> : null}
        {timers.map((duration, index) => (
          <Box key={index} className={classes.s}>
            <h1>{duration}s</h1>
            {index < timers.length - 1 ? <Divider/> : null}
          </Box>
        ))}
      </Card>
    </ThemeProvider>
  );
}

export default Timer;
