import { CountdownProvider } from '@/context/Countdown'
import { ITranslateProps } from '@/types/translate'

import { Counter } from './useContext'

export const Countdown = ({ t }: ITranslateProps) => {
  return (
    <button title={t('session_time.title')} className="btn btn-ghost">
      <CountdownProvider>
        <Counter />
      </CountdownProvider>
    </button>
  )
}
