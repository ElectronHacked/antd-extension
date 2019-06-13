import * as React from 'react'
import 'antd/es/form/style'
import Form, { FormItemProps, FormCreateOption, FormProps } from 'antd/es/form'
import { GetFieldDecoratorOptions } from 'antd/es/form/Form'

const FormItem = Form.Item
const { PureComponent, Suspense } = React

export interface IColumn extends FormItemProps {
  type: string
  name?: string
  options?: GetFieldDecoratorOptions
  extraProps?: any
  formItemProps?: object
}

export interface IFormProBaseProps {
  columns: IColumn[]
  formProps?: FormProps
  form: any
  onChange?: any
}

export interface ICreateFormProItemProps {
  type: string
  component?: any
  formItemRender?: (itemOptions: any, Component: any) => JSX.Element
}

export interface IFormProBaseState {}

const create = (
  options: ICreateFormProItemProps[],
  createOptions?: FormCreateOption<IFormProBaseProps>,
): any => {
  class FormProBase extends PureComponent<
    IFormProBaseProps,
    IFormProBaseState
  > {
    renderFormItem = (item: IColumn, index: number) => {
      const { getFieldDecorator } = this.props.form
      const {
        type,
        name,
        extraProps = {},
        formItemProps = {},
        ...restProps
      } = item

      const { addonBefore, addonAfter } = extraProps
      const itemOptions = options.find(_ => type === _.type)
      if (!itemOptions) {
        return null
      }

      const { formItemRender } = itemOptions
      const FormItemComponent = itemOptions.component
      const formItemContent = formItemRender ? (
        React.cloneElement(
          formItemRender(item, FormItemComponent),
          formItemProps,
        )
      ) : (
        <FormItemComponent {...formItemProps} />
      )

      return (
        <FormItem key={index} {...restProps}>
          {addonBefore}
          <Suspense fallback={null}>
            {getFieldDecorator(name, item.options)(formItemContent)}
          </Suspense>
          {addonAfter}
        </FormItem>
      )
    }

    render() {
      const { columns, formProps } = this.props
      return <Form {...formProps}>{columns.map(this.renderFormItem)}</Form>
    }
  }

  return Form.create({
    onValuesChange: (props, changedValues, allValues) => {
      props.onChange && props.onChange(allValues, changedValues)
    },
    ...createOptions,
  })(FormProBase)
}

export default create
