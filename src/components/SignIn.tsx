import { Form } from './Form'
import { Col, Row } from './Layout'
import { LinkText } from './LinkText'

export function SignIn() {
  const tr = 'signin'

  return (
    <Form.Root title="Login" className="w-96">
      <Row>
        <Col span={24}>
          <Form.Item name="email" tr={tr} type="email" required error />
        </Col>

        <Col span={24}>
          <Form.Item name="password" tr={tr} type="password" required />
        </Col>

        <Col>
          <Form.Item name="remember" tr={tr} type="checkbox" />
        </Col>

        <Col className="flex items-center">
          <LinkText href="#" tr={`${tr}.forgot_password`} />
        </Col>
      </Row>

      <Form.Actions />
    </Form.Root>
  )
}
