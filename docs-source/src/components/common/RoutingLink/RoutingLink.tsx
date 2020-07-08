import { FunctionComponent } from 'react';
import Link, { LinkProps } from 'next/link';

export const RoutingLink: FunctionComponent<LinkProps> = ({ children, ...props }) => (
  <Link {...props} href={props.href} as={`${process.env.linkPrefix}${props.as || props.href}`}>{children}</Link>
);