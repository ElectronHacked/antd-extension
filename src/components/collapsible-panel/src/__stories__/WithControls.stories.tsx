import * as React from 'react'
import { Content } from './Content'
import { Tag } from 'antd'
import CollapsiblePanel from '../CollapsiblePanel'
import '../style'

export default () => (
  <CollapsiblePanel
    header="Basic expandIconPosition left"
    extra={
      <div>
        <Tag color="#f50">#f50</Tag>
        <Tag color="#2db7f5">#2db7f5</Tag>
        <Tag color="#87d068">#87d068</Tag>
        <Tag color="#108ee9">#108ee9</Tag>
      </div>
    }
  >
    <Content />
  </CollapsiblePanel>
)
