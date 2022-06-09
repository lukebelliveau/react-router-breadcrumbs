import { Tab, Tabs } from '@mui/material';
import { Fragment } from 'react';
import React = require('react');
import {
  Link,
  matchPath,
  NavLink,
  Outlet,
  useLocation,
  useMatch,
  useNavigate,
  useParams,
} from 'react-router-dom';

const Tab1Content = () => <div>Tab 1 Content</div>;
const Tab2Content = () => <div>Tab 2 Content</div>;
const Tab3Content = () => <div>Tab 3 Content</div>;

export const tabs = {
  TAB1: { label: 'Tab 1', path: 'tab1', component: Tab1Content },
  TAB2: { label: 'Tab 2', path: 'tab2', component: Tab2Content },
  TAB3: { label: 'Tab 3', path: 'tab3', component: Tab3Content },
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

function useRouteMatch(patterns: readonly string[]) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

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
  const selectedTab = useRouteMatch(['tab1', 'tab2', 'tab3']);
  console.log(selectedTab.pattern.path);

  return (
    <Fragment>
      <Tabs value={selectedTab.pattern.path}>
        <Tab
          label={tabs.TAB1.label}
          value={tabs.TAB1.path}
          to={tabs.TAB1.path}
          component={Link}
        />
        <Tab
          label={tabs.TAB2.label}
          value={tabs.TAB2.path}
          to={tabs.TAB2.path}
          component={Link}
        />
        <Tab
          label={tabs.TAB3.label}
          value={tabs.TAB3.path}
          to={tabs.TAB3.path}
          component={Link}
        />
      </Tabs>
      <Layout>
        {/* This Outlet will render the TabContent as a child route */}
        <Outlet />
      </Layout>
    </Fragment>
  );
};

export default TabbedLayout;
