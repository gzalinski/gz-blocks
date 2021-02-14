import './style.editor.scss'
import { Component, Fragment } from '@wordpress/element'
import { __ } from '@wordpress/i18n'

import {
  RichText,
  InspectorControls,
} from '@wordpress/block-editor'

import {
  PanelBody,
  PanelRow,
  SelectControl,
  FormToggle,
} from '@wordpress/components'

class Edit extends Component {

  onChangeCode = (code) => {
    this.props.setAttributes({ code })
  }

  languagesOptions = [
    {
      label: 'Text',
      value: '',
    },
    {
      label: 'HTML',
      value: 'markup',
    },
    {
      label: 'CSS',
      value: 'css',
    },
    {
      label: 'SCSS',
      value: 'scss',
    },
    {
      label: 'JS',
      value: 'javascript',
    },
    {
      label: 'PHP',
      value: 'php',
    },
  ]

  updateRangeControl = (max_height) => {
    this.props.setAttributes({ max_height })
    seeMoreChekcHeight()
    buttonToggle()
  }

  onChangeLang = (language) => {
    this.props.setAttributes({ language })
  }

  render () {
    const { className, attributes, setAttributes } = this.props
    const { line_num, language, code } = attributes

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody title={__('Settings')} initialOpen={true}>

            <SelectControl
              label={__('Language', 'gocode')}
              options={this.languagesOptions}
              onChange={this.onChangeLang}
              value={language}
            />

            <PanelRow>
              <label htmlFor="line-numbers-toggle">
                {__('Line numbers', 'gocode')}
              </label>
              <FormToggle
                id="line-numbers-toggle"
                label={__('Show line numbers', 'gocode')}
                checked={line_num}
                onChange={() => setAttributes({ line_num: !line_num })}
              />
            </PanelRow>

          </PanelBody>
        </InspectorControls>
        <div className={className}>
          <pre className={(language ? 'language-' + language : '') + ' ' + (line_num ? 'line-numbers' : '')}>
            <RichText
              tagName='code'
              onChange={this.onChangeCode}
              value={code}
              placeholder={__('Code')}
              unstableOnSplit={ () => false }
            />
          </pre>
        </div>
      </Fragment>
    )
  }
}

export default Edit