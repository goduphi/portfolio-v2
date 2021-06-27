import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Navigation } from './components/Navigation';
import { ProjectBlog } from './components/ProjectBlog';
import { AppStyle } from './styles/AppStyle';

const placeholderProjects = [
  {
      'name': 'Goduphi | Portfolio',
      'description': 'A website to house all my projects!',
      'language': 'Javascript, ReactJS, Material-UI, Firebase',
  },
  {
      'name': 'Universal Remote',
      'description': 'Makes use of the NEC Communication protocol to talk to IR devices.',
      'language': 'C',
  },
  {
      'name': 'LCR Meter',
      'description': 'A device to measure Inductance, Capacitance, Resistance & Voltage.',
      'language': 'C',
  },
  {
    'name': 'Trick or Treat Simulation',
    'description': 'Made using multi-threading which simulates the undeterministic nature of humans.',
    'language': 'C++',
  },
  {
    'name': 'Algorithm Visualizer',
    'description': 'Visualized Quick Sort & Selection Sort.',
    'language': 'C++, SFML, ImGui',
  },
  {
    'name': 'MQTT Client',
    'description': 'A light weight client built for an ARM Cortex Microcontroller.',
    'language': 'C',
  },
  {
    'name': 'FAT32 Utility',
    'description': 'A piece of software that can read & navigate a FAT32 File System Image.',
    'language': 'C',
  },
  {
    'name': 'Music App',
    'description': 'Plays music from Spotify & displays its lyrics.',
    'language': 'Javascript, ReactJS, NodeJS, ExpressJS, REST API',
  }
];

const placeholderProgrammingLanguages = [
  "C", "C++", "C#", "Python", "ARMv7 ASM", "Thumb-2 ASM", "Javascript", "MATLAB"
];

const placeholderPeripherals = [
  "GPIO", "UART", "SPI", "I2C", "ADC", "Hardware Timers", "PWM"
];

const placeholderMicrocontrollers = [
  "TCP/IP", "UDP", "MQTT", "DHCP"
];

function App() {
  const [projects, setProjects] = useState([]);
  const [programmingLanguages, setProgrammingLanguages] = useState([]);
  const [peripherals, setPeripherals] = useState([]);
  const [microcontrollers, setMicrocontrollers] = useState([]);
  const [currentWindowLocation, setCurrentWindowLocation] = useState('');

  useEffect(() => {
    // Grab some useful stuff from firebase
    setProjects(placeholderProjects);
    setProgrammingLanguages(placeholderProgrammingLanguages);
    setPeripherals(placeholderPeripherals);
    setMicrocontrollers(placeholderMicrocontrollers);
  }, []);

  const setCurrentLocation = (location) => {
    setCurrentWindowLocation(location);
  }

  const classes = AppStyle();

  return (
    <Grid container justify="center" className={classes.root}>
      <Navigation currentWindowLocation={currentWindowLocation} />
      <Switch>
        <Route path="/project" render={(routeLocation) => <Projects projects={projects} setCurrentLocation={setCurrentLocation} routeLocation={routeLocation} />} />
        <Route path="/project-blog" component={ProjectBlog} />
        <Route path="/" render={(routeLocation) => <About setCurrentLocation={setCurrentLocation} routeLocation={routeLocation} skills={{programmingLanguages, peripherals, microcontrollers}}/>} />
      </Switch>
    </Grid>
  );
}

export default App;
