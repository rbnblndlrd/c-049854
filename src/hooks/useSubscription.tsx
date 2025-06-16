
import { useState } from 'react';

export const useSubscription = () => {
  const [currentTier, setCurrentTier] = useState('free');

  return {
    currentTier,
    setCurrentTier,
    isLoading: false,
  };
};
