import React,{useState, useEffect} from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import useDataApi from '../helpers/FetchData'
import {Link, Router} from 'react-router-dom'
import Calendar from './Calendar'



export default function Sidebar() {

  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    'http://ae.hr/rooms_status.php',
    { controllers: [] },
  );
    return (
 
       <div className="sidebar">
    <List disablePadding dense>
      <ListItem><Link to="./">Home</Link></ListItem>
       {data.controllers.map(item => (
        <ListItem key={item.id}>
          <ListItemText><Link to={`${item.id}`}>{item.name}</Link></ListItemText>
        </ListItem>
        ))}
      <ListItem></ListItem>
    </List>
    </div>
  
   
  )
}