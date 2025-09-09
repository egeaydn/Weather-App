import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

export default async function LocaleLayout(props: any) {
  const params = await props.params;
  const { children } = props;
  const locale = params?.locale;
  const locales: string[] = Array.isArray(routing.locales) ? routing.locales as string[] : [];
  if (!locale || !locales.includes(locale)) {
    notFound();
  }
  const messages = (await import(`@/messages/${locale}.json`)).default;
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}