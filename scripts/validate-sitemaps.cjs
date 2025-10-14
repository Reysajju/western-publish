const fs = require('fs');
const paths = [
  'public/sitemap.xml',
  'public/sitemap-services.xml',
  'public/sitemap-blog.xml',
  'public/sitemap-index.xml'
];
let ok = true;
for (const p of paths) {
  try {
    const s = fs.readFileSync(p, 'utf8');
    const trimmed = s.trim();
    if (!trimmed.startsWith('<?xml')) {
      console.error(p + ': Missing XML prolog');
      ok = false;
      continue;
    }
    if (!(trimmed.includes('</urlset>') || trimmed.includes('</sitemapindex>'))) {
      console.error(p + ': Missing closing tag (</urlset> or </sitemapindex>)');
      ok = false;
      continue;
    }
    console.log(p + ': OK');
  } catch (e) {
    console.error(p + ': ERR', e.message);
    ok = false;
  }
}
if (!ok) process.exit(2);
