import { useEffect } from 'react';
import { useWordsStore } from 'stores/useWordsStore';
import Dashboard from './Dashboard';

function DashboardContainer() {
  const { selectedWordPair, generateSelectedWordPair } = useWordsStore();

  useEffect(() => {
    generateSelectedWordPair();
  }, [generateSelectedWordPair]);

  return <Dashboard />;
}

export default DashboardContainer;
