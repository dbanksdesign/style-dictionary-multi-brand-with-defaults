const StyleDictionary = require('style-dictionary');

const brands = [`brand-1`,`brand-2`];

brands.forEach(brand => {
  console.log(`building ${brand}`);
  
  const styleDictionary = StyleDictionary.extend({
    include: [
      `tokens/global/**/*.json`,
      `tokens/brand/default/**/*.json`,
      `tokens/component/**/*.json`,
    ],
    source: [
      // tokens defined in 'source' take precedence and override
      // any conflicting tokens found in 'include'
      `tokens/brand/${brand}/**/*.json`
    ],
    platforms: {
      css: {
        transformGroup: `css`,
        buildPath: `build/${brand}/`,
        files: [{
          destination: `variables.css`,
          format: `css/variables`
        }]
      }
    }
  });
  
  // if you want to see what merged style dictionary object looks like:
  // console.log(JSON.stringify(styleDictionary.properties, null, 2));
  
  styleDictionary.buildAllPlatforms();
});