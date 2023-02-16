import { ACTIONS } from './Calculator'

export default function DigitButton({ dispatch, digit }) {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
      className={`${digit === '0' && 'w-full col-span-2'} calcButton`}
    >
      {digit}
    </button>
  )
}
