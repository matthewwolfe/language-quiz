import { useEffect } from 'react';
import { useAppStore } from 'stores/useAppStore';
import Dashboard from './Dashboard';

function DashboardContainer() {
  const { generateSelectedPair, pairs } = useAppStore();

  useEffect(() => {
    if (pairs.length) {
      generateSelectedPair();
    }
  }, [generateSelectedPair, pairs]);

  return <Dashboard />;
}

export default DashboardContainer;
