import './style.editor.scss'

import { registerBlockType } from '@wordpress/blocks'
import { __ } from '@wordpress/i18n'
import Edit from './edit'

import { RichText } from '@wordpress/editor'

const attributes = {
  code: {
    type: 'string',
    source: 'html',
    selector: 'code',
  },
  language: {
    type: 'string',
  },
  line_num: {
    type: 'boolean',
    default: false,
  },
}

registerBlockType('docode/code-highlight', {
  title: __('Code', 'docode'),
  category: 'layout',
  icon: {
    background: '#004696',
    foreground: '#fff',
    src: 'editor-code',
  },
  keywords: [
    'code',
    'prismjs',
    'pre',
    'gocode',
  ],
  attributes,
  edit: Edit,
  save: function ({ attributes }) {
    const { line_num, language, code } = attributes

    return (
      <div>
        <pre className={'language-' + language + ' ' + (line_num ? 'line-numbers' : '')}>
          <RichText.Content tagName='code' value={code}/>
        </pre>
      </div>
    )
  },
})