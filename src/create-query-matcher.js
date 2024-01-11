import {prettyDOM} from '@testing-library/dom'

function isString(value) {
  return typeof value === 'string'
}

export default function createQueryMatcher({matcherType, query, queryName}) {
  return function queryMatcher(actual, ...args) {
    const elements = query(actual, ...args)
    const pass =
      matcherType === 'one' ? elements.length === 1 : elements.length > 0
    const {printReceived, printExpected} = this.utils

    return {
      message() {
        const to = pass ? 'not to' : 'to'
        const prettyExpected = printExpected(args[0].toString())
        const prettyActual = printReceived(elements.length)
        const prettyElements = elements
          .map(element => prettyDOM(element))
          .filter(isString)
        const message = [
          // Idiomatic jest language with jest formatters.
          `Expected container ${to} contain ${matcherType} element by ${queryName} ${prettyExpected}, but found ${prettyActual}.`,
        ]

        if (prettyElements.length) {
          // Idiomatic testing library language with testing library formatters.
          message.push('Here are the matching elements:', ...prettyElements)
        }

        return message.join('\n\n')
      },
      pass,
    }
  }
}
