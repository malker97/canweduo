import { Grid, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'

export default function Player() {
  const [username, setUsername] = useState('')
  const [userInfo, setUserInfo] = useState({})
  const fetchUserInfo = async () => {
    const tempUserName = username.replace('#', '-')
    const response = await fetch(`https://owapi.io/profile/pc/us/${tempUserName}`)
    const data = await response.json()
    console.log(data)
    setUserInfo(data)
  }
  useEffect(() => {
    if(username !== '') {
      fetchUserInfo()
    }
  }
  , [username])
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <TextField variant="outlined" value={username} 
            label="BattleTag#1234"
          onChange={
            (e) => setUsername(e.target.value)
          }/>
        </Grid>  
        {
          userInfo.username ?
          <React.Fragment>
          <Grid item xs={3}>
            <img src={userInfo.competitive.tank.icon}/>
          </Grid>
          <Grid item xs={3}>
            <img src={userInfo.competitive.offense.icon}/>
          </Grid>
          <Grid item xs={3}>
            <img src={userInfo.competitive.support.icon}/>
          </Grid>
          </React.Fragment>
          :
          <Grid item xs={9}>
            <p>Player not found</p>
          </Grid>
        }
      </Grid> 
    </React.Fragment>
  )
}