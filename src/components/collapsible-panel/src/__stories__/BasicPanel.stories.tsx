import * as React from 'react'
import { Content } from './Content'
import CollapsiblePanel from '../CollapsiblePanel'
import '../style/index.less'

export default () => (
  <CollapsiblePanel header="Basic panel">
    <Content />
  </CollapsiblePanel>
)
