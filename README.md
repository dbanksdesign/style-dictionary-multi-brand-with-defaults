# style-dictionary-multi-brand-with-defaults

Based on conversation on this issue: https://github.com/amzn/style-dictionary/issues/544

Note: This example does not work the same way as the proposed 'default' mechanism in the issue above, but is a potential way to achieve the same result. 
## Running the example

First of all, set up the required dependencies running the command `npm ci` in your local CLI environment (if you prefer to use yarn update the commands accordingly).

At this point, if you want to build the tokens you can run `npm run build`. This command will generate the files in the build folder.

## How does it work

This example is based on the [multi-brand-multi-platform](https://github.com/amzn/style-dictionary/tree/main/examples/advanced/multi-brand-multi-platform) example, but with an added `default` brand. This example is stripped down for readability, but can be applied to larger sets of tokens as well. 

Style Dictionary merges all of the files it finds in the `include` and `source` arrays in the configuration into a single merged object. The files are deep merged so specific tokens can be overridden without losing other tokens. The files are merged in order, started with files in `include` and then in `source`. 

In this example we are defining 2 sets of brand tokens, `brand-1` and `brand-2` with a set of default brand tokens. Each brand only defines 1 brand token and relies on the default brand for the others. In `tokens/brand/brand-2/` we are also defining component-level tokens as well to override the button color only for this brand. 

Similar to the multi-brand-multi-platform example, we have a `build.js` file that loops over the brands and runs Style Dictionary for each brand, with global and default tokens included in both. 
## What to look at

* `tokens/brand/brand-1`: has a `colors.json` file that overrides `color.brand.error`
* `tokens/brand/brand-2`: has a `colors.json` file that overrides `color.brand.success` and `button.json` file that overrides `button.background-color`
* `tokens/brand/default`: has all default brand colors, these will be overridden from other brand tokens if they are defined
* `tokens/global`: global tokens included in all brands, these can also be overridden by brand tokens if you wanted
* `tokens/component`: component tokens included in all brands, these can also be overridden by brand tokens if you wanted
* `build.js`: this file loops over the brands, brand-1 and brand-2, and runs style dictionary. Take a look at the `include` and `source` portions of the configuration
