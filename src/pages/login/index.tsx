import React, { FC, useEffect } from 'react';
import { AuthWrapper } from '../../components/auth';
import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { LocaleKeys } from '../../locale';
import { useCurrentTheme } from '../../utils/services/ThemeService';
import { MetamaskConnect } from '../../components/metamask/metamask-connect';
import { metamaskHooks } from '../../utils/connectors/metamask';
import { useNavigate } from 'react-router-dom';
import { Paths } from '../../utils/routes/paths';

const { useIsActive } = metamaskHooks;

export const Login: FC = () => {
  const theme = useCurrentTheme();

  const { t } = useTranslation([LocaleKeys.LOGIN]);

  const navigator = useNavigate();
  const active = useIsActive();

  useEffect(() => {
    if (active) {
      navigator(Paths.BASE);
    }
  }, [active]);

  return (
    <AuthWrapper>
      <Typography.Title
        level={2}
        style={{
          color: theme.COLORS.TEXT.PRIMARY,
        }}
      >
        {t('title')}
      </Typography.Title>
      <MetamaskConnect t={t} />
    </AuthWrapper>
  );
};
