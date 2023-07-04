import { Button, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";


const MyMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event:any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button onClick={handleClick}>Abrir Menu</Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Opção 1</MenuItem>
        <MenuItem onClick={handleClose}>Opção 2</MenuItem>
        <MenuItem onClick={handleClose}>Opção 3</MenuItem>
      </Menu>
    </div>
  );
};

export default MyMenu;
