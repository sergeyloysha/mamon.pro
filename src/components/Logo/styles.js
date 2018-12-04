import styled from 'styled-components'
import { colors } from '../../constants'

const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    svg {
      color: ${colors.black};
    }
  }

  svg {
    width: 4.8rem;
    color: ${colors.indigo};
    transform: rotate(-45deg);
    transition: color .2s;
  }
`

export {
  Logo
}
