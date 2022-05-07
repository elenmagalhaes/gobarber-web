import React from 'react';

import Toast from './Toast';

import { ToastMessage } from '../../hooks/Toast/toast.types';
import { Container } from './styles';

interface ToastContainerProps {
  messages: ToastMessage[];
}

// (TODO): Incluir animação no Toast
const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  return (
    <Container>
      {messages.map(message => (
        <Toast key={message.id} toast={message} />
      ))}
    </Container>
  );
};

export default ToastContainer;
