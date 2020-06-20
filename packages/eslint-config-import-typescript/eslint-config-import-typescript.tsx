import * as React from 'react'
interface IHelloWorldComponent {}

export default class HelloWorldComponent extends React.Component<
  IHelloWorldComponent
> {
  hello: string
  constructor(value: any) {
    super(value)
    this.hello = 'Hello'
  }

  getName(value: number) {
    switch (value) {
      case 1:
        return 'Chuck'
      default:
        return 'everybody'
    }
  }

  render() {
    return (
      <div>
        {this.hello.toLowerCase()} {this.getName(1)}
      </div>
    )
  }
}
