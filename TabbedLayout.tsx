import { Tab, Tabs } from '@mui/material';
import { Fragment } from 'react';
import React = require('react');
import {
  Link,
  NavLink,
  Outlet,
  useMatch,
  useNavigate,
  useParams,
} from 'react-router-dom';

const tabs = {
  TAB1: { label: 'Tab 1', path: 'tab1' },
  TAB2: { label: 'Tab 2', path: 'tab2' },
  TAB3: { label: 'Tab 3', path: 'tab3' },
};

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <Fragment>
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          border: '1px solid black',
        }}
      >
        {children}
      </div>
    </Fragment>
  );
};

const useSelectedTab = () => {
  const isTab1 = useMatch('/tab1');
  const isTab2 = useMatch('/tab2');
  const isTab3 = useMatch('/tab3');

  if (isTab1) return 'tab1';
  else if (isTab2) return 'tab2';
  else if (isTab3) return 'tab3';

  return 'tab1';
};

const TabbedLayout = () => {
  const selectedTab = useSelectedTab();

  return (
    <Fragment>
      <Tabs value={selectedTab}>
        <Tab
          label={tabs.TAB1.label}
          value={tabs.TAB1.path}
          to="tab1"
          component={Link}
        />
        <Tab
          label={tabs.TAB2.label}
          value={tabs.TAB2.path}
          to="tab2"
          component={Link}
        />
        <Tab
          label={tabs.TAB3.label}
          value={tabs.TAB3.path}
          to="tab3"
          component={Link}
        />
      </Tabs>
      <Layout>
        <Outlet />
      </Layout>
    </Fragment>
  );
};

export default TabbedLayout;
