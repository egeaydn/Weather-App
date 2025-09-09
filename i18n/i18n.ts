import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ locale }) => {
  const safeLocale = locale ?? 'en';
  return {
    messages: (await import(`../messages/${safeLocale}.json`)).default,
    locale: safeLocale
  };
});