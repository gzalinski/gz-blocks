import './prismjs/themes/prism.css'

import './prismjs/prismjs'

import './prismjs/plugins/line-numbers/line-numbers'
import './prismjs/plugins/line-numbers/line-numbers.css'

import './prismjs/plugins/autoloader/autoloader'

import './prismjs/plugins/css-attribute-formater/css-attribute-formate'

import './prismjs/plugins/preview/preview'
import './prismjs/plugins/preview/preview.css'

import './prismjs/plugins/inline-colors/inline-color'
import './prismjs/plugins/inline-colors/inline-color.css'

import './prismjs/plugins/toolbar/toolbar'
import './prismjs/plugins/toolbar/toolbar.css'

import './prismjs/plugins/copy-to-clipboard/copy-to-clipboard'


Prism.plugins.autoloader.languages_path = path_prismjs

Prism.hooks.add('before-highlight', function(env) {
  env.element.innerHTML = env.element.innerHTML.replace(/<br\s*\/?>/g,'\n');
  env.code = env.element.textContent.replace(/^(?:\r?\n|\r)/,'');
});