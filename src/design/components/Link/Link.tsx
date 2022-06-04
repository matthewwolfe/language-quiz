import MuiLink from '@mui/material/Link';
import NextLink, { LinkProps } from 'next/link';

import type { ReactNode } from 'react';

interface Props extends LinkProps {
  children?: ReactNode;
}

function Link({ children, ...props }: Props) {
  return (
    <NextLink {...props} passHref>
      <MuiLink sx={{ fontSize: 18, textDecoration: 'none' }}>{children}</MuiLink>
    </NextLink>
  );
}

export default Link;
