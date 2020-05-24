import * as React from 'react'
import 'antd/es/collapse/style'
import 'antd/es/form/style'
import Collapse, { CollapseProps } from 'antd/es/collapse'

const { Panel } = Collapse

export interface IAnyObject {
  [propName: string]: any
}
export interface ICollapsiblePanelProps extends CollapseProps {
  isActive?: boolean
  header?: React.ReactNode
  className?: string
  style?: React.CSSProperties
  showArrow?: boolean
  forceRender?: boolean
  disabled?: boolean
  extra?: React.ReactNode
  noContentPadding?: boolean
}

export const CollapsiblePanel: React.FC<ICollapsiblePanelProps> = ({
  expandIconPosition = 'right',
  onChange,
  header,
  extra,
  children,
  noContentPadding,
}) => {
  const noContentPaddingClass = noContentPadding ? ' no-content-padding' : ''
  return (
    <Collapse
      defaultActiveKey={['1']}
      onChange={onChange}
      expandIconPosition={expandIconPosition}
      className={`collapsible-sha-panel${noContentPaddingClass}`}
    >
      <Panel
        header={<span className={`ant-collapse-header-text`}>{header}</span>}
        key="1"
        extra={extra}
      >
        {children}
      </Panel>
    </Collapse>
  )
}

export default CollapsiblePanel
