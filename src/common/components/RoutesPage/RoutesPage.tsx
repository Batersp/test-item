import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { path } from 'common/enums/path';
import { ReturnComponentType } from 'common/types/ReturnComponentType';
import { Blog } from 'features/Blog/Blog';
import { OpenPost } from 'features/Blog/OpenPost/OpenPost';
import { Consultation } from 'features/Consultation/Consultation';
import { Error404 } from 'features/Error404/Error404';
import { Login } from 'features/Login/Login';
import { Profile } from 'features/Profile/Profile';
import { Subscription } from 'features/Subscription/Subscription';

export const RoutesPage = (): ReturnComponentType => {
  const routes = [
    { path: path.LOGIN, component: <Login /> },
    { path: path.BLOG, component: <Blog /> },
    { path: path.OPEN_POST, component: <OpenPost /> },
    { path: path.CONSULTATION, component: <Consultation /> },
    { path: path.SUBSCRIPTION, component: <Subscription /> },
    { path: path.PROFILE, component: <Profile /> },
    { path: '*', component: <Error404 /> },
  ];

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to={path.BLOG} />} />
        {routes.map(({ path, component }) => (
          <Route path={path} element={component} key={path} />
        ))}
      </Routes>
    </div>
  );
};
