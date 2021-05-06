import Primary from './Primary'
import Ghost from './Ghost'
import Secondary from './Secondary'

const types = {
  primary: Primary,
  ghost: Ghost,
  secondary: Secondary,
}

const Button = ({ type = 'primary', ...props }) => {
  const Component = types[type]

  return <Component {...props} />
}

export default Button
