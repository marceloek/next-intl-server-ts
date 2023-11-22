import { useTranslations } from 'next-intl'

import { Col, Row } from '../Layout'

export function Actions() {
  const t = useTranslations('form')

  return (
    <Row>
      <Col>
        <button type="submit" className="btn btn-primary w-full">
          {t('save')}
        </button>
      </Col>

      <Col>
        <button type="reset" className="btn btn-outline w-full">
          {t('reset')}
        </button>
      </Col>
    </Row>
  )
}
