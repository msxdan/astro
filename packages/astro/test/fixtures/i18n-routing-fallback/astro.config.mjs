import { defineConfig} from "astro/config";

export default defineConfig({
    base: "new-site",
    experimental: {
        i18n: {
            defaultLocale: 'en',
            locales: [
                'en', 'pt', 'it'
            ],
            fallback: {
                "it": "en",
                pt: "en"
            }
        }
    }
})
