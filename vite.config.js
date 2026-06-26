import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { cvData } from './src/data.js';
import { uiTranslations } from './src/i18n.js';
import { supportedPlatforms } from './src/icons.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Process socials and filter out unsupported platforms
const contactSocials = (cvData.personalInfo?.socials || [])
  .map(social => {
    const key = (social.platform || '').toLowerCase().trim();
    const icon = supportedPlatforms[key];
    return icon ? { ...social, icon, key } : null;
  })
  .filter(Boolean);

const portfolioSocials = (cvData.personalInfo?.portfolio || [])
  .map(social => {
    const key = (social.platform || '').toLowerCase().trim();
    const icon = supportedPlatforms[key];
    return icon ? { ...social, icon, key } : null;
  })
  .filter(Boolean);

const lang = (cvData.config?.lang || 'en').toLowerCase();
const resolvedLang = uiTranslations[lang] ? lang : 'en';

export default defineConfig({
  base: './',
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'src/partials'),
      context: {
        cv: {
          ...cvData,
          config: {
            ...cvData.config,
            lang: resolvedLang
          },
          personalInfo: {
            ...cvData.personalInfo,
            contactSocials,
            portfolioSocials
          }
        },
        ui: uiTranslations[resolvedLang]
      },
      helpers: {
        eq: (v1, v2) => v1 === v2,
        ne: (v1, v2) => v1 !== v2,
        or: (v1, v2) => v1 || v2,
        hasElements: (arr) => arr && arr.length > 0
      }
    }),
  ],
});
