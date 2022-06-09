import * as React from 'react';
import './style.css';
import TabbedLayout from './TabbedLayout';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<TabbedLayout />}>
          <Route index element={<Navigate to={'tab1'} replace />} />
          <Route path="tab1" element={<div>Tab 1 Content</div>} />
          <Route path="tab2" element={<div>Tab 2 Content</div>} />
          <Route path="tab3" element={<div>Tab 3 Content</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
