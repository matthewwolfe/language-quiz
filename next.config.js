const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? '/language-quiz/' : '',
  basePath: isProd ? '/language-quiz' : '',
  distDir: 'docs',
  output: 'export',
};
