import { InformationCircleIcon } from '@heroicons/react/outline'
import { useReducer, useState } from 'react'
import { motion } from 'framer-motion'
import DigitButton from './DigitButton'
import OperationButton from './OperationButton'
import { slideIn } from '../../utils/motion'

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate',
}
function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false,
        }
      }
      if (payload.digit === '0' && state.currentOperand === '0') {
        return state
      }
      if (payload.digit === '.' && state.currentOperand.includes('.')) {
        return state
      }

      return {
        ...state,
        currentOperand: `${state.currentOperand || ''}${payload.digit}`,
      }
    case ACTIONS.CHOOSE_OPERATION:
      if (
        (state.currentOperand == null || state.currentOperand === '-') &&
        state.previousOperand == null
      ) {
        if (payload.operation === '-') {
          return {
            currentOperand: payload.operation,
          }
        }
        return state
      }
      if (
        state.currentOperand == null &&
        state.operation !== '-' &&
        payload.operation === '-'
      ) {
        return {
          ...state,
          currentOperand: payload.operation,
          overwrite: false,
        }
      }
      if (state.currentOperand == null || state.currentOperand === '-') {
        return {
          ...state,
          operation: payload.operation,
        }
      }
      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        }
      }
      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null,
      }
    case ACTIONS.CLEAR:
      return {}
    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: null,
        }
      }
      if (state.currentOperand == null) return state
      if (state.currentOperand.length === 1) {
        return {
          ...state,
          currentOperand: null,
        }
      }
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      }
    case ACTIONS.EVALUATE:
      if (
        state.operation == null ||
        state.currentOperand == null ||
        state.previousOperand == null
      ) {
        return state
      }
      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state),
      }
  }
}
function evaluate({ currentOperand, previousOperand, operation }) {
  const prev = parseFloat(previousOperand)
  const current = parseFloat(currentOperand)
  if (isNaN(prev) || isNaN(current)) {
    return ''
  }
  let result = ''
  switch (operation) {
    case '+':
      result = prev + current
      break
    case '-':
      result = prev - current
      break
    case '*':
      result = prev * current
      break
    case '/':
      result = prev / current
      break
  }

  return result.toString()
}

export default function Calculator() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  )
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      variants={slideIn('right', 'tween', 0, 1)}
      initial='hidden'
      whileInView='show'
      className='flex-col max-sm:mobileContainer sm:max-xl:min-h-[600px] sm:container w-full xl:w-auto'
      id='calculator'
    >
      <div className='containerSpan flex items-center justify-center relative'>
        <div className='absolute left-[20px]'>
          <div
            className='w-6 h-6 rounded-full dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white hover:rotate-[360deg] transition duration-500 cursor-pointer flex items-center justify-center'
            onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
          >
            <InformationCircleIcon className='w-5' />
          </div>
        </div>
        <span>Calculator</span>
      </div>
      {!isOpen ? (
        <div className='m-auto h-full'>
          <div className='p-5 h-full flex flex-col items-end'>
            <div className='flex flex-col h-full rounded-sm w-[264px] py-2'>
              <div className='text-2xl pt-2.5 sm:pt-5 break-all min-h-[53px] text-right font-thin dark:text-transparentWhite text-softGray'>
                {previousOperand} {operation}
              </div>
              <div className='pt-2.5 sm:pt-5 min-h-[57px] break-all text-right text-3xl border-b dark:border-softGray'>
                {currentOperand}
              </div>
            </div>
            <div className='grid grid-cols-4 mt-5 gap-2 sm:gap-2.5'>
              <button
                className='calcButton col-span-2 w-full'
                onClick={() => dispatch({ type: ACTIONS.CLEAR })}
              >
                AC
              </button>
              <button
                className='calcButton'
                onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}
              >
                DEL
              </button>
              <OperationButton dispatch={dispatch} operation='/' />
              <DigitButton dispatch={dispatch} digit='1' />
              <DigitButton dispatch={dispatch} digit='2' />
              <DigitButton dispatch={dispatch} digit='3' />
              <OperationButton dispatch={dispatch} operation='*' />
              <DigitButton dispatch={dispatch} digit='4' />
              <DigitButton dispatch={dispatch} digit='5' />
              <DigitButton dispatch={dispatch} digit='6' />
              <OperationButton dispatch={dispatch} operation='-' />
              <DigitButton dispatch={dispatch} digit='7' />
              <DigitButton dispatch={dispatch} digit='8' />
              <DigitButton dispatch={dispatch} digit='9' />
              <OperationButton dispatch={dispatch} operation='+' />
              <DigitButton dispatch={dispatch} digit='0' />
              <DigitButton dispatch={dispatch} digit='.' />
              <button
                className='calcButton'
                onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
              >
                =
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className='w-full h-full min-h-[553px] xl:w-[310px] p-5 flex items-center justify-center text-center'>
          <span className='w-[75%] text-left'>
            I know, a calculator in 2023 is not that impressive, however I've
            made it without math libraries using the useReducer React hook. It
            may look very simple and it is. However it utilises basic but
            important programming concepts that I want to make sure you know I'm
            able to pull off.
          </span>
        </div>
      )}
    </motion.div>
  )
}
