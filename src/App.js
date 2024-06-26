import logo from './logo.svg';
import './App.css';
import Player from './components/Player';
import { Button, Grid } from '@mui/material';
import { useState } from 'react';

function App() {
  const [numberOfPlayers, setNumberOfPlayers] = useState(1)
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <h1>User Name</h1>
        </Grid>
        <Grid item xs={3}>
          <h1>Tank</h1>
        </Grid>
        <Grid item xs={3}>
          <h1>DPS</h1>
        </Grid>
        <Grid item xs={3}>
          <h1>Support</h1>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {
          Array.from({ length: numberOfPlayers }).map((_, index) => (
            <Grid item xs={12}>
              <Player key={index}/>
            </Grid>
          ))
        }
        <Grid item xs={12}>
          <Button fullWidth variant='contained' onClick={() => setNumberOfPlayers(numberOfPlayers + 1)}>Add Player</Button>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
