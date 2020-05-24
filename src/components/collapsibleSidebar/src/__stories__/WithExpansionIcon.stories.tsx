import * as React from 'react'
import { Content } from './Content'
import CollapsiblePanel from '../CollapsiblePanel'
import '../style'

export default () => (
  <CollapsiblePanel
    header="Basic expandIconPosition left"
    expandIconPosition="left"
  >
    <Content />
  </CollapsiblePanel>
)
