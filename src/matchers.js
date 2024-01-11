import {queries} from '@testing-library/dom'
import createQueryMatchers from './create-query-matchers'

export {toBeInTheDOM} from './to-be-in-the-dom'
export {toBeInTheDocument} from './to-be-in-the-document'
export {toBeEmpty} from './to-be-empty'
export {toBeEmptyDOMElement} from './to-be-empty-dom-element'
export {toContainElement} from './to-contain-element'
export {toContainHTML} from './to-contain-html'
export {toHaveTextContent} from './to-have-text-content'
export {toHaveAccessibleDescription} from './to-have-accessible-description'
export {toHaveAccessibleErrorMessage} from './to-have-accessible-errormessage'
export {toHaveRole} from './to-have-role'
export {toHaveAccessibleName} from './to-have-accessible-name'
export {toHaveAttribute} from './to-have-attribute'
export {toHaveClass} from './to-have-class'
export {toHaveStyle} from './to-have-style'
export {toHaveFocus} from './to-have-focus'
export {toHaveFormValues} from './to-have-form-values'
export {toBeVisible} from './to-be-visible'
export {toBeDisabled, toBeEnabled} from './to-be-disabled'
export {toBeRequired} from './to-be-required'
export {toBeInvalid, toBeValid} from './to-be-invalid'
export {toHaveValue} from './to-have-value'
export {toHaveDisplayValue} from './to-have-display-value'
export {toBeChecked} from './to-be-checked'
export {toBePartiallyChecked} from './to-be-partially-checked'
export {toHaveDescription} from './to-have-description'
export {toHaveErrorMessage} from './to-have-errormessage'

export const [toContainAnyByAltText, toContainOneByAltText] =
  createQueryMatchers('alt text', queries.queryAllByAltText)
export const [toContainAnyByDisplayValue, toContainOneByDisplayValue] =
  createQueryMatchers('display value', queries.queryAllByDisplayValue)
export const [toContainAnyByLabelText, toContainOneByLabelText] =
  createQueryMatchers('label text', queries.queryAllByLabelText)
export const [toContainAnyByPlaceholderText, toContainOneByPlaceholderText] =
  createQueryMatchers('placeholder text', queries.queryAllByPlaceholderText)
export const [toContainAnyByRole, toContainOneByRole] = createQueryMatchers(
  'role',
  queries.queryAllByRole,
)
export const [toContainAnyByTestId, toContainOneByTestId] = createQueryMatchers(
  'test ID',
  queries.queryAllByTestId,
)
export const [toContainAnyByText, toContainOneByText] = createQueryMatchers(
  'text',
  queries.queryAllByText,
)
export const [toContainAnyByTitle, toContainOneByTitle] = createQueryMatchers(
  'title',
  queries.queryAllByTitle,
)
