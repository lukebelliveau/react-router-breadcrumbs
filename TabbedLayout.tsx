import * as React from 'react';
import { Fragment } from 'react';
import { Tab, Tabs } from '@mui/material';
import { Link, matchPath, Outlet, useLocation } from 'react-router-dom';

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
      return possibleMatch.pattern.path;
    }
  }

  return 'tab1';
}

const TabbedLayout = () => {
  const tabPaths = Object.values(tabs).map((tab) => tab.path);
  const selectedTab = useRouteMatch(tabPaths);

  console.log(selectedTab);

  return (
    <Fragment>
      <Tabs value={selectedTab}>
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
