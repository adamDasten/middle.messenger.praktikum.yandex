import { expect } from 'chai'
import { Path } from '../consts/routes'
import Block from './Block'
import Router from './Router'
import Sinon from 'sinon'

interface IProps {
  text: string
  attr: {
    id: string
  }
}

class Block1 extends Block {
  constructor(props: IProps) {
    super('div', {
      ...props,
      attr: {
        ...props.attr,
        id: props.attr.id
      }
    })
  }

  protected render() {
    return this.compile('{{text}}', this.props)
  }
}

describe('Router test', () => {
  const block1 = new Block1({ text: 'page 1', attr: { id: 'one' } })
  const block2 = new Block1({ text: 'page 2', attr: { id: 'two' } })
  let TestRouter = Router

  beforeEach(() => {
    TestRouter.use('/test' as Path, block1).use('/test2' as Path, block2)
  })

  it('should add path to router', () => {
    expect(TestRouter.routes.length).eq(2)
  })

  it('should go to called', () => {
    const stub = Sinon.stub(window.history, 'pushState')
    TestRouter.start()
    TestRouter.go('/test')
    expect(stub.calledWith({}, '', '/test')).to.be.true
    stub.restore()
  })
})
