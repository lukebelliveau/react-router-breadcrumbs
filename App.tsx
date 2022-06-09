import * as React from 'react';
import './style.css';
import TabbedLayout, { tabs } from './TabbedLayout';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<TabbedLayout />}>
          <Route index element={<Navigate to={'tab1'} replace />} />
          <Route path={tabs.TAB1.path} element={<tabs.TAB1.component />} />
          <Route path={tabs.TAB2.path} element={<tabs.TAB2.component />} />
          <Route path={tabs.TAB3.path} element={<tabs.TAB3.component />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
