import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  TextField,
  Container,
  ThemeProvider,
  createMuiTheme,
  IconButton,
} from "@material-ui/core";

import AddAlarmIcon from "@material-ui/icons/AddAlarm";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";

import { blue, yellow } from "@material-ui/core/colors";

import "./Timer.css";

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: yellow,
  },
});

function TimerControls(props) {
  return (
    <IconButton onClick={props.callback}>
      {props.active ? <PauseIcon /> : <PlayArrowIcon />}
    </IconButton>
  );
}

function TimerInput(props) {
  return (
    <Container>
      <TextField label="Time" variant="outlined" />
      <IconButton onClick={props.callback}>
        <AddAlarmIcon />
      </IconButton>
    </Container>
  );
}

function Timer() {
  const [timers, setTimers] = useState([]);
  const [active, setActive] = useState(false);

  function addTimer() {
    setTimers((timers) => timers.concat(30));
  }

  function toggleTimer() {
    setActive(!active);
  }

  useEffect(() => {
    let interval = 0;

    if (active)
      interval = setInterval(() => {
        setTimers((timers) =>
          timers.map((val, index) => (!index ? val - 1 : val)).filter(val => val >= 0)
        );
      }, 1000); 
    
    if (timers.length < 1) setActive(false);
    
    return () => {
      clearInterval(interval);
    };
  }, [active, timers.length]);

  return (
    <ThemeProvider theme={theme}>
      <Card className="Timer-App">
        <TimerControls callback={toggleTimer} active={active} />
        <TimerInput callback={addTimer} />
        {timers.map((duration) => (
          <Box>{duration}</Box>
        ))}
      </Card>
    </ThemeProvider>
  );
}

export default Timer;
