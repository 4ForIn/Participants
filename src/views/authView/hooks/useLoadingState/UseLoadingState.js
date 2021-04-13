import { useState } from 'react';

export function useIsLoadingState() {
  const [isLoading, setIsLoading] = useState(false);

  const triggerIsLoading = (isTrue) => setIsLoading(isTrue);

  return {
    isLoading,
    triggerIsLoading,
  };
}
