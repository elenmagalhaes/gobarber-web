import React from 'react';

import { AuthProvider } from './Auth/auth';
import { ToastProvider } from './Toast/toast';

interface AppProviderProps {
  children?: React.ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => (
  <AuthProvider>
    <ToastProvider>{children}</ToastProvider>
  </AuthProvider>
);

export default AppProvider;
