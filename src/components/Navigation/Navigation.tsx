import { useRouter } from 'next/router';
import { Flex, Link } from 'design';

function Navigation() {
  const { pathname } = useRouter();

  return (
    <Flex>
      {pathname !== '/' && (
        <Flex sx={{ flexDirection: 'column', justifyContent: 'center', mr: 4 }}>
          <Link href="/">Words</Link>
        </Flex>
      )}

      {pathname !== '/phrases' && (
        <Flex sx={{ flexDirection: 'column', justifyContent: 'center' }}>
          <Link href="/phrases">Phrases</Link>
        </Flex>
      )}
    </Flex>
  );
}

export default Navigation;
