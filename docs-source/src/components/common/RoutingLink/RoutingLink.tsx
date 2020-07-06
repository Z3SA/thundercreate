import { FunctionComponent } from 'react';
import Link, { LinkProps } from 'next/link';
import getConfig from 'next/config';
import { format } from 'url';

const runtimeConfig = getConfig();

export const RoutingLink: FunctionComponent<LinkProps> = ({ children, ...props }) => (
  <Link {...props} href={`${runtimeConfig.basePath || ''}${format(props.href)}`}>{children}</Link>
);