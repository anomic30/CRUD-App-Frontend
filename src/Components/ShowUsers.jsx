import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Button, withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { red } from '@material-ui/core/colors';
import '../App.css';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
require('dotenv').config();
const DB = process.env.REACT_APP_PATH_URL;

const ColorButton2 = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[800],
    },
  },
}))(Button);

const useStyles = makeStyles({
  table: {
    minWidth: 200,
    width: '90%',
    marginTop: '5vh',
    margin: 'auto',
    fontSize: '20px'
  },
  thead: {
    '& > *': {
      background: '#22303C',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '20px'
    }
  },
  trow: {
    '& > *': {
      fontSize: '18px'
    }
  }

});

export default function ShowUsers() {
  const classes = useStyles();
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    Axios.get(`${DB}/read`).then((response) => {
      setUserList(response.data);
    })
  });

  const deleteUser = (id) => {
    Axios.delete(`${DB}/delete/${id}`, { id: id });
  };

  return (
    <div className="conatainer">
      <div className="back" />
      <Table stickyHeader aria-label="sticky table" className={classes.table}>
        <TableHead>
          <TableRow className={classes.thead}>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Mobile</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Age</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userList.map((val, key) => (
            <TableRow key={key} className={classes.trow}>
              <TableCell component="th" scope="row">{val.name}</TableCell>
              <TableCell>{val.email}</TableCell>
              <TableCell>{val.phone}</TableCell>
              <TableCell>{val.gender}</TableCell>
              <TableCell>{val.age}</TableCell>
              <TableCell align="right">
                <Button variant="outlined" color="primary" startIcon={<EditIcon />} style={{ marginRight: 10 }} component={Link} to={`/edit/${val._id}`}>Edit</Button>
                <ColorButton2 variant="contained" color="secondary" startIcon={<DeleteIcon />} onClick={() => deleteUser(val._id)}>Delete</ColorButton2>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}