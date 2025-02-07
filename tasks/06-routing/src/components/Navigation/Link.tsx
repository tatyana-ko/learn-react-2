import React from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';
import { useSmartNavigation } from "../../hooks/useNavigation";

interface SmartLinkProps extends LinkProps {
  prefetch?: boolean;
  guard?: boolean;
}

export const SmartLink: React.FC<SmartLinkProps> = ({
  to,
  prefetch,
  guard,
  children,
  ...props
}) => {
  const { navigate } = useSmartNavigation();
 
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (guard) {
      navigate(to as string, { state: { data: { key: "22" } } });
    } else if (prefetch) {
      navigate(to as string, { state: { data: { prefetch } } });
    } else {
      navigate(to as string)
    }
  };

  return <RouterLink to={to} {...props} onClick={handleClick}>
    {children}
  </RouterLink>;
};
