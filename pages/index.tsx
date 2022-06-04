import { useEffect } from 'react';
import { Dashboard } from 'components/Dashboard';
import wordsJson from 'data/words.json';
import { useAppStore } from 'stores/useAppStore';

function Index() {
  const { setPairs } = useAppStore();

  useEffect(() => {
    setPairs(wordsJson);
  }, [setPairs]);

  return <Dashboard />;
}

export default Index;
