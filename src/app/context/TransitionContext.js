'use client';

import { createContext, useContext } from 'react';

const TransitionContext = createContext({
  navigate: (path, text) => {},
});

export const useTransition = () => useContext(TransitionContext);

export default TransitionContext;
