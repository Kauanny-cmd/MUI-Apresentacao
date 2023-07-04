import { IconButton, Tooltip } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import React from 'react';

const MyTooltip = () => {
  return (
    <Tooltip title="Ajuda">
      <IconButton>
        <HelpIcon />
      </IconButton>
    </Tooltip>
  );
};

export default MyTooltip;
