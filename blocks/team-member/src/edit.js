import { Component } from '@wordpress/element'
import { RichText } from '@wordpress/editor'
import { __ } from '@wordpress/i18n'

class TeamMemberEdit extends Component {

  onChangeTitle = (title) => {
    this.props.setAttributes({ title })
  }

  onChangeInfo = (info) => {
    this.props.setAttributes({ info })
  }

  render () {
    const { className, attributes } = this.props
    const { title, info } = attributes

    return (
        <div className={ className }>
          <RichText
            className={'wp-block-gzblocks-team-member__title'}
            tagName="h4"
            onChange={this.onChangeTitle}
            value={title}
            placeholder={__('Member Name', 'gzblocks')}
            formattingControls={[]}
          />
          <RichText
            className={'wp-block-gzblocks-team-member__info'}
            tagName="p"
            onChange={this.onChangeInfo}
            value={info}
            placeholder={__('Member Info', 'gzblocks')}
            formattingControls={[]}
          />
        </div>
    )
  }
}

export default TeamMemberEdit;
