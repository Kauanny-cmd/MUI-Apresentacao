import React, { useState } from 'react';
import { Tabs, Tab } from '@mui/material';

const MyTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event:any, newValue:any) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange}>
      <Tab label="Tab 1" />
      <Tab label="Tab 2" />
      <Tab label="Tab 3" />
    </Tabs>
  );
};

export default MyTabs;
