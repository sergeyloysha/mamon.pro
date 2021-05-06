import Primary from './Primary'
import Ghost from './Ghost'
import Secondary from './Secondary'
import Tertiary from './Tertiary'

const types = {
  primary: Primary,
  ghost: Ghost,
  secondary: Secondary,
  tertiary: Tertiary,
}

const Button = ({ type = 'primary', ...props }) => {
  const Component = types[type]

  return <Component {...props} />
}

export default Button
