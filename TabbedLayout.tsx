import { Tab, Tabs } from '@mui/material';
import React = require('react');
import { useNavigate, useParams } from 'react-router-dom';

const tabs = {
  TAB1: { label: 'Tab 1', path: 'tab1' },
  TAB2: { label: 'Tab 2', path: 'tab2' },
  TAB3: { label: 'Tab 3', path: 'tab3' },
};

const TabbedLayout = () => {
  const { selectedTab } = useParams();
  const navigate = useNavigate();

  return (
    <Tabs
      value={selectedTab}
      indicatorColor="primary"
      textColor="primary"
      onChange={(event, value) => {
        navigate(value);
      }}
      aria-label="select service editor tab"
    >
      <Tab label={tabs.TAB1.label} value={tabs.TAB1.path} />
      <Tab
        label={tabs.TAB2.label}
        value={tabs.TAB2.path}
        data-testid="routes-tab"
      />
      <Tab
        label={tabs.TAB3.label}
        value={tabs.TAB3.path}
        data-testid="plugins-tab"
      ></Tab>
    </Tabs>
  );
};
