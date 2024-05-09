import { expect } from 'chai'
import Block from './Block'

interface IProps {
  text: string
}

class TestBlock extends Block {
  constructor(props: IProps) {
    super('div', {
      ...props
    })
  }

  protected render() {
    return this.compile('{{text}}', this.props)
  }
}

describe('Block test', () => {
  let component: Block
  beforeEach(() => {
    component = new TestBlock({ text: 'Test text' })
  })

  it('should create test block', () => {
    const text = component.getContent()?.textContent
    expect(text).to.equal('Test text')
  })
})
