import { useCallback } from 'react';

const useStorage = (key) => {
  const updateStorage = useCallback((payload) => {
    localStorage.setItem(key, JSON.stringify(payload));
  }, [key]);

  return updateStorage;
};

export default useStorage;
