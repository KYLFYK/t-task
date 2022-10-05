import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '../../components/containers/main-layout';
import { Paths } from './paths';
import { Addresses } from '../../pages/addresses';
import { Transactions } from '../../pages/transactions';
import { Login } from '../../pages/login';

export const RootRoutes: FC = () => {
  return (
    <Routes>
      <Route path={Paths.LOGIN} element={<Login />} />
      <Route
        path={'*'}
        element={
          <MainLayout>
            <Routes>
              <Route path={Paths.ADDRESSES} element={<Addresses />} />
              <Route path={Paths.TRANSACTIONS} element={<Transactions />} />
            </Routes>
          </MainLayout>
        }
      />
    </Routes>
  );
};
