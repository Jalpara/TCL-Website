import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { buildConfig } from 'payload';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

import { Users } from './collections/Users';
import { Media } from './collections/Media';
import { Initiatives } from './collections/Initiatives';
import { Stories } from './collections/Stories';
import { Events } from './collections/Events';
import { People } from './collections/People';
import { Locations } from './collections/Locations';
import { Partners } from './collections/Partners';
import { Metrics } from './collections/Metrics';
import { Categories } from './collections/Categories';
import { FAQs } from './collections/FAQs';

import { SiteConfig } from './globals/SiteConfig';
import { HomePage } from './globals/HomePage';
import { AboutPage } from './globals/AboutPage';
import { PrivacyPolicy } from './globals/PrivacyPolicy';
import { TermsConditions } from './globals/TermsConditions';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
    admin: {
        user: Users.slug,
        importMap: {
            baseDir: path.resolve(dirname),
        },
    },
    collections: [
        Users, 
        Media,
        Initiatives,
        Stories,
        Events,
        People,
        Locations,
        Partners,
        Metrics,
        Categories,
        FAQs
    ],
    globals: [
        SiteConfig,
        HomePage,
        AboutPage,
        PrivacyPolicy,
        TermsConditions,
    ],
    editor: lexicalEditor(),
    secret: process.env.PAYLOAD_SECRET || '',
    typescript: {
        outputFile: path.resolve(dirname, 'payload-types.ts'),
    },
    db: postgresAdapter({
        pool: {
            connectionString: process.env.DATABASE_URL || '',
        },
    }),
    sharp: sharp as any,
    plugins: [],
});
