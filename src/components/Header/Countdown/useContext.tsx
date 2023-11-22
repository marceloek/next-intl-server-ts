'use client'

import dayjs from 'dayjs'
import { useEffect, useState } from 'react'

import { useCountdownContext } from '@/context/Countdown'

export function Counter() {
  const { timer } = useCountdownContext()
  const [timestamp, setTimestamp] = useState(timer)

  useEffect(() => {
    const newTS = timestamp - 1
    setTimeout(() => setTimestamp(newTS >= 0 ? newTS : timer), 1000)
  }, [timer, timestamp])

  const formatted = dayjs.unix(timestamp).format('mm:ss')

  return <div>{formatted}</div>
}
