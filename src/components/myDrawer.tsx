import { useState } from 'react';
import {
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Inbox as InboxIcon,
  Mail as MailIcon,
} from '@mui/icons-material';

export default function BasicDrawer() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleDrawerOpen}>
        Open Drawer
      </Button>
      <Drawer open={openDrawer} onClose={handleDrawerClose}>
        <div role="presentation" onClick={handleDrawerClose} onKeyDown={handleDrawerClose}>
          <List>
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Mail" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  )
}