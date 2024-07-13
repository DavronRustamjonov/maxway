import React from 'react'
import { NavLink } from 'react-router-dom'
import './Layout.css'
import Korzinka from '/korzinka-icon.png';
import Burger from '/burger.svg';
/*import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function KeepMountedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}*/

function Layout() {
  return (
    <div className='layout'>
        <div className='container layout__container'>
          <button className='burger'><img className='burger' src={Burger} alt="burger icon" /></button>
         <a  className='layout__logo' to ="/home" >SFood</a>
        <ul className='layout__list menu'> 
       <li className='layout__item'> <NavLink  className='layout__link' to ="/home" active >Home</NavLink></li>   
       <li className='layout__item'> <NavLink  className='layout__link' to="/filiali" active>Filiali</NavLink></li> 
       <li className='layout__item'> <NavLink  className='layout__link' to="/about" active >About</NavLink></li>   
       <li className='layout__item'> <NavLink  className='layout__link' to="/contact" active >Contact</NavLink></li>
        </ul>
        <ul className='layout__list'>
            <li className='layout__item'>
                <img className='korzinka-icon' src={Korzinka} alt="korzinka icon " />
            </li>
            <li className='layout__item'>
                <button className='layout__btn'>Voyti</button>
            </li>
        </ul>
        </div>
    </div>
  )
}

export default Layout
