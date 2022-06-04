import { useEffect } from 'react';
import { useAppStore } from 'stores/useAppStore';
import Dashboard from './Dashboard';

function DashboardContainer() {
  const { generateSelectedPair } = useAppStore();

  useEffect(() => {
    generateSelectedPair();
  }, [generateSelectedPair]);

  return <Dashboard />;
}

export default DashboardContainer;
