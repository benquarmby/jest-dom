import createQueryMatcher from './create-query-matcher'

export default function createQueryMatchers(queryName, query) {
  const any = createQueryMatcher({
    matcherType: 'any',
    query,
    queryName,
  })

  const one = createQueryMatcher({
    matcherType: 'one',
    query,
    queryName,
  })

  return [any, one]
}
