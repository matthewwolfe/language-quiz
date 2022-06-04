import { useEffect } from 'react';
import { Dashboard } from 'components/Dashboard';
import phrasesJson from 'data/phrases.json';
import { useAppStore } from 'stores/useAppStore';

function Phrases() {
  const { setPairs } = useAppStore();

  useEffect(() => {
    setPairs(phrasesJson);
  }, [setPairs]);

  return <Dashboard />;
}

export default Phrases;
