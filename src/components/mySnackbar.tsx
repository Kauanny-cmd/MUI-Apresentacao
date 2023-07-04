import { Button, Snackbar } from '@mui/material';
import React, { useState } from 'react';


const MySnackbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpenSnackbar = () => {
    setOpen(true);
  };

  const handleCloseSnackbar = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpenSnackbar}>Abrir Snackbar</Button>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="Mensagem do Snackbar"
      />
    </div>
  );
};

export default MySnackbar;
