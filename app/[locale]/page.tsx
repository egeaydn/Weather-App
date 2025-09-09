import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations();

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('logout')}</p>
    </div>
  );
}