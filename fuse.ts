import { fusebox } from 'fuse-box'

const fuse = fusebox({
  entry: 'src/index.tsx',
  target: 'browser',
  devServer: true,
  sourceMap: true,
  // alias since fuse does not seem to support "exports" specification on a library's package.json
  alias: {
    '@alvaroc1/present/components/Deck': '@alvaroc1/present/src/components/Deck',
    '@alvaroc1/present/components/Slide': '@alvaroc1/present/src/components/Slide',
    '@alvaroc1/present/components/SlideData': '@alvaroc1/present/src/components/SlideData',
    '@alvaroc1/present/components/Stepper': '@alvaroc1/present/src/components/Stepper',
    '@alvaroc1/present/components/Snippet': '@alvaroc1/present/src/components/Snippet',
    '@alvaroc1/layout/Layout': '@alvaroc1/layout/src/Layout'
  },
  webIndex: {
    template: 'public/index.html',
    publicPath: '.'
  },
  link: { 
    resourcePublicRoot: 'resources' 
  },
  resources: {
    // where to put resources inside of ./dist
    resourceFolder: './resources/',
    // how to link to resources from CSS files
    // we gotta go up from ./styles/ to go to ./resources/
    resourcePublicRoot: '../resources',
  }
})

//fuse.runDev()

fuse.runProd({
  bundles: {
    app: {
      path: 'app.$hash.js', publicPath: './' 
    },
    vendor: {
      path: 'vendor.$hash.js', publicPath: './' 
    }
  }
})
