import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../features/entrypoint/components/Base/Layout';
import Entrada from '../features/entrypoint/pages/EntryPage';
import AccountHub from '../features/accountHub/pages/AccountHubPage';

const AppRoutes = () => (
  <Routes>
    <Route element={<Layout/>}>
      <Route path="/" element={<Entrada />} />
      <Route path="/dashboard" element={<AccountHub />} /> 
    </Route>
  </Routes>
);

export default AppRoutes;
