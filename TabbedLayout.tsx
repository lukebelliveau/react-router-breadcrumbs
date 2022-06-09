import { Tab, Tabs } from '@mui/material';
import { Fragment } from 'react';
import React = require('react');
import {
  Link,
  NavLink,
  Outlet,
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

const TabbedLayout = () => {
  const { selectedTab } = useParams();
  const navigate = useNavigate();

  return (
    <Fragment>
      <Tabs
        value={'tab1'}
        onChange={(event, value) => {
          navigate(value);
        }}
      >
        <Tab
          label={tabs.TAB1.label}
          value={tabs.TAB1.path}
          component={Link}
          // component={() => <Link to="tab1" className={'tabLink'}></Link>}
          // component={() => (
          //   <NavLink
          //     to="tab1"
          //     style={({ isActive }) =>
          //       isActive ? { color: 'green' } : { color: 'red' }
          //     }
          //   >
          //     Messages
          //   </NavLink>
          // )}
        />
        <Tab label={tabs.TAB2.label} value={tabs.TAB2.path} />
        <Tab label={tabs.TAB3.label} value={tabs.TAB3.path}></Tab>
      </Tabs>
      <Layout>
        <Outlet />
      </Layout>
    </Fragment>
  );
};

export default TabbedLayout;
