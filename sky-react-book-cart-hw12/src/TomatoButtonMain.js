import styled from 'styled-components'

const Button = styled.button`
  font-family: monospace;
  display: inline-block;
  color: palevioletred;
  font-size: 18px;
  margin: 20px;
  padding: 10px 20px;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
  text-decoration: none;
`

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`

const TomatoButtonMain = () => (
  <div>
    <Button>Normal Button</Button>
    <Button as="a" href="/">
      Link with Button styles
    </Button>
    <TomatoButton as="div" href="/">
      Link with Tomato Button styles
    </TomatoButton>
  </div>
)
export default TomatoButtonMain
