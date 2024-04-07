/* eslint-disable react/prop-types */
import kebabCase from 'lodash.kebabcase'

export function ProfileCardOption ({ stat, setStat, children }) {
  const value = kebabCase(children)
  const className = stat === value
    ? 'profile-card-optn is-selected'
    : 'profile-card-optn'

  return <li className={className} onClick={() => setStat(value)}>{children}</li>
}
