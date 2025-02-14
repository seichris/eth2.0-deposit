import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

interface LinkProps {
  primary?: boolean | undefined;
  theme?: any;
  className?: string;
  href?: string;
  inline?: boolean;
}

const styles = `
  color:inherit;
  display: inherit;
  text-decoration: none;
  &:hover {
    font-weight: 400;
  };
  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  };
 `;

const StyledExternalLink = styled.a<
  Pick<LinkProps, 'primary' | 'theme' | 'inline'>
>`
  ${styles};
  color: ${(props: any) =>
    props.primary ? props.theme.blue.medium : 'inherit'};
  display: ${(props: any) => (props.inline ? 'inline' : 'inherit')};
`;
const StyledLink = styled(RouterLink)`
  ${styles};
  color: ${(props: any) =>
    props.primary ? props.theme.blue.medium : 'inherit'};
  display: ${(props: any) => (props.inline ? 'inline' : 'inherit')};
`;

interface LinkProps {
  to: string;
  key?: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
  primary?: boolean | undefined;
  onClick?: (param?: any) => void;
  inline?: boolean;
}

export const Link = (props: LinkProps) => {
  const { external, children, className, to, primary, inline } = props;
  if (external) {
    return (
      <StyledExternalLink
        className={className}
        href={to}
        primary={primary}
        target="_blank"
        inline={inline}
      >
        {children}
      </StyledExternalLink>
    );
  }
  return (
    <StyledLink className={className} {...props}>
      {children}
    </StyledLink>
  );
};
