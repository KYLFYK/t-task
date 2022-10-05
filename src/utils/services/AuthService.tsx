import React, { FC, PropsWithChildren, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paths } from '../routes/paths';
import { metaMask, metamaskHooks } from '../connectors/metamask';

const { useIsActive, useIsActivating } = metamaskHooks;

export const AuthService: FC<PropsWithChildren> = ({ children }) => {
  const [wasTry, setWasTry] = useState(false);
  const active = useIsActive();
  const navigator = useNavigate();

  useEffect(() => {
    void metaMask
      .connectEagerly()
      .then((r) => {
        setWasTry(true);
        return r;
      })
      .catch(() => {
        console.debug('Failed to connect eagerly to metamask');
      });
  }, [wasTry]);

  useEffect(() => {
    if (!active && wasTry && !useIsActivating) {
      navigator(Paths.LOGIN);
    } else if (wasTry && !useIsActivating) {
      navigator(Paths.BASE);
    }
  }, [active, wasTry, useIsActivating]);

  return <>{children}</>;
};
