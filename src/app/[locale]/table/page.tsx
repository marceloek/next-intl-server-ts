import { Col, Row } from '@/components/Layout'
import { ITableColumn, Table } from '@/components/Table'

interface ITestTable {
  id: number
  name: string
  job: string
  favColor?: string
}

export default function TablePage() {
  const data: ITestTable[] = [
    {
      id: 1,
      name: 'Cy Ganderton',
      job: 'Desktop Support Technician',
      favColor: 'Blue',
    },
    {
      id: 2,
      name: 'Hart Hagerty',
      job: 'Quality Control Specialist',
      favColor: 'Purple',
    },
    {
      id: 3,
      name: 'Brice Swyre',
      job: 'Tax Accountant',
      favColor: 'Red',
    },
  ]

  const columns: ITableColumn<ITestTable>[] = [
    { key: 'id' },
    { key: 'name' },
    { key: 'job' },
    { key: 'favColor' },
  ]

  return (
    <Row>
      <Col span={22} offset={1}>
        <Table data={data} columns={columns} tr="table" />
      </Col>
    </Row>
  )
}
