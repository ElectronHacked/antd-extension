import { withConsole } from '@storybook/addon-console'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import BasicPanel from './BasicPanel.stories'
import WithControls from './WithControls.stories'
import WithExpansionIcon from './WithExpansionIcon.stories'
import Markdown from '../../../../Markdown'
import ReadMe from '../../README.md'
import ReadMeZHCN from '../../README.zh-CN.md'

storiesOf('COMPONENTS|CollapsiblePanel', module)
  .addDecorator((storyFn: any, context: any) => withConsole()(storyFn)(context))
  .add('Read Me', () => (
    <Markdown
      api
      source={ReadMe.replace(
        '(./README.zh-CN.md)',
        '(/?path=/story/components-formpro--read-me-zh-cn)',
      )}
    />
  ))
  .add('Read Me (zh-CN)', () => (
    <Markdown
      api
      source={ReadMeZHCN.replace(
        '(./README.md)',
        '(/?path=/story/components-formpro--read-me)',
      )}
    />
  ))
  .add('Basic CollapsiblePanel', () => <BasicPanel />)
  .add('With controls', () => <WithControls />)
  .add('Customized Form Controls', () => <WithExpansionIcon />)
