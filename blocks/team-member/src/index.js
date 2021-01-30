import './style.editor.scss';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/editor';
import edit from './edit';


const attributes = {
  title: {
    type: 'string',
    source: 'html',
    selector: 'h4',
  },
  info: {
    type: 'string',
    source: 'html',
    selector: 'p',
  },
}

registerBlockType('gzblocks/team-member', {
  title: __('Team Member', 'gz-blocks'),
  description: __('Block showing a Team Member.', 'gzblocks'),
  category: 'gzblocks',
  icon: {
    background: '#004696',
    foreground: '#fff',
    src: 'admin-users',
  },
  keywords: [
    __('team', 'gzblocks'),
    __('person', 'gzblocks'),
    __('member', 'gzblocks'),
  ],
  attributes,
  edit,
  save: ({ attributes }) => {
    const { title, info } = attributes;

    return (
      <div>

          {title &&
          <RichText.Content
            className={'wp-block-gzblocks-team-member__title'}
            tagName="h4"
            value={title}/>
          }

          {info &&
          <RichText.Content
            className={'wp-block-gzblocks-team-member__info'}
            tagName="p"
            value={info}/>
          }


      </div>
    )
  },
})