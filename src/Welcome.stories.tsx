import { storiesOf } from '@storybook/react'
import * as React from 'react'
import Markdown from './Markdown'
import ReadMe from '../README.md'
import ReadMeZHCN from '../README.zh-CN.md'
import License from '../LICENSE.md'

storiesOf('Antd Extension|Welcome', module)
  .add('Getting Started', () => (
    <Markdown
      source={ReadMe.replace(
        '(./README.zh-CN.md)',
        '(/?path=/story/antd-extension-welcome--getting-started-zh-cn)',
      ).replace(
        '(./src/form-pro/README.md)',
        '(/?path=/story/components-formpro--read-me)',
      )}
    />
  ))
  .add('Getting Started (zh-CN)', () => (
    <Markdown
      source={ReadMeZHCN.replace(
        '(./README.md)',
        '(/?path=/story/antd-extension-welcome--getting-started)',
      ).replace(
        '(./src/form-pro/README.zh-CN.md)',
        '(/?path=/story/components-formpro--read-me-zh-cn)',
      )}
    />
  ))
  .add('License', () => <pre>{License}</pre>)
