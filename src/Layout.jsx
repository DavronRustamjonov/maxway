import { NavLink } from 'react-router-dom';
import './Layout.css';
import Korzinka from '/korzinka-icon.png';
import Burger from '/burger.svg';
import React, { useState } from 'react'
///////////////////////////////////////////////////////////////////////////////////////////////////////
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


import CallIcon from '@mui/icons-material/Call';
import InfoIcon from '@mui/icons-material/Info';
import RoomIcon from '@mui/icons-material/Room';
import HomeIcon from '@mui/icons-material/Home';
import { useTranslation } from 'react-i18next';
 
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

//////////////////////////////////////////////////////////////////////////////////////////////////////
function Layout() {
  //Til
  const {t, i18n} = useTranslation();
  console.log(i18n,"i18nn")
  const  changeLanguage=(lang)=>{
    console.log(lang.target.value,"langg")
    i18n.changeLanguage(lang.target.value)
  }
  //Send massage 
  const [number, setNumber] = React.useState("");
  const SendMassage = () => {
    console.log(number);
    const token = "6804491908:AAE8n2nu2j1Or1lxMTKi98-exL4IdgyUZlg"
    const chat_id = '6628054450'
    const url = `https://api.telegram.org/bot${token}/sendMessage`
    const massage = `Uzatilgan xabar \n ${number} `
    fetch(url, {  
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "chat_id": chat_id,
        "text": massage
      })

    }).then(res => res.json()).then(res => {
      alert("Xabar yuborildi.")
    }).catch(err => {
      console.log(err);
    }
    )
  }

  // Modal mui
  const [openModal, setopenModal] = React.useState(false);
  const handleOpen = () => setopenModal(true);
  const handleClose = () => setopenModal(false);



  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Driwer mui 
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>

        <ListItem disablePadding>

          <ListItemButton>


            <li className='layout__item'>
              <NavLink className='layout__link' to="/" exact>{<HomeIcon className='drawer-icon' />}<span className='drawer-link'>Home</span> </NavLink>
            </li>
          </ListItemButton>
        </ListItem>


        <ListItem disablePadding>
          <ListItemButton>
            <li className='layout__item'> <NavLink className='layout__link' to="/filiali">
              {<RoomIcon className='drawer-icon' />}
              <span className='drawer-link'> Filiali </span></NavLink></li>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>

            <li className='layout__item'> <NavLink className='layout__link' to="/about">
              {<InfoIcon className='drawer-icon' />}
              <span className='drawer-link'> About </span></NavLink></li>

          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <li className='layout__item'> <NavLink className='layout__link' to="/contact">
              {<CallIcon className='drawer-icon' />}
              <span className='drawer-link'> Contact </span></NavLink></li>
          </ListItemButton>
        </ListItem>

      </List>
      {/* <Divider /> */}

    </Box>
  );
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <div className='layout'>
      <div className='container layout__container'>
        <div>
          <Button onClick={toggleDrawer(true)}>
            <img className='burger' src={Burger} alt="burger icon" />
          </Button>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
        </div>




        <NavLink className='layout__logo' to="/home">SFood</NavLink>
        <ul className='layout__list menu'>
          <li className='layout__item'> <NavLink className='layout__link' to="/" exact>{t('layout.layout-link-ru1')}</NavLink></li>
          <li className='layout__item'> <NavLink className='layout__link' to="/filiali">{t('layout.layout-link-ru2')}</NavLink></li>
          <li className='layout__item'> <NavLink className='layout__link' to="/about">{t('layout.layout-link-ru3')}</NavLink></li>
          <li className='layout__item'> <NavLink className='layout__link' to="/contact">{t('layout.layout-link-ru4')}</NavLink></li>
        </ul>
        <ul className='layout__list'>
          <li className='layout__item'>
            <img className='korzinka-icon' src={Korzinka} alt="korzinka icon" />
          </li>


          
          <li className='layout__item'>
           
           
           




            <div>
              <Button onClick={handleOpen} className='layout__btn'>{t('layout.layout-btn')}</Button>
              <Modal
                open={openModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className='layout-modal'
              >
                <Box sx={style} >
                  <Typography id="modal-modal-title" variant="h6" component="h2">

                    <h2 className="login-title">Добро пожаловать</h2>
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <p className="login-text">Войдите с вашим номером телефона</p>




                    <form action="#" onSubmit={SendMassage}>
                      <input onChange={(e) => setNumber(e.target.value)} className="login-input" type="tel" required placeholder="+998931487733" min="3" />
                      <button type='submit' className="login-btn">Войти</button>
                      <ul className='login-list'>
                        <li className='login-item'>
                          <p className='login-text'><p>У вас нет аккаунта?</p></p>
                        </li>
                        <li className='login-item'>
                          <button className='login-link'>Регистрация</button>
                        </li>
                      </ul>
                    </form>




                  </Typography>
                </Box>


              </Modal>

            </div>


          </li>
          <li className='layout__item'>
            <select className='layout-select' onChange={changeLanguage} value={i18n.language} name="#" id="">
              <option className='layout-select' value="uz">Uz</option>
              <option  className='layout-select' value="ru">Ru</option>
              <option  className='layout-select' value="eng">Eng</option>
            </select></li>
        </ul>
      </div>
    </div>
  );
}

export default Layout;
