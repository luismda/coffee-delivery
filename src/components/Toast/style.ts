import styled from 'styled-components'

interface ToastContainerProps {
  type: 'success' | 'error'
  isShouldBeVisible?: boolean
}

const COLOR_TYPE_TOAST = {
  success: 'green',
  error: 'red',
} as const

export const ToastContainer = styled.div<ToastContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  padding: 1.25rem;

  background: ${(props) => props.theme.base_card};
  border-radius: 6px;
  box-shadow: 0 0 4px ${(props) => props.theme.base_hover};

  position: fixed;
  right: 1rem;
  top: 1rem;
  z-index: 2;

  transform: translateX(200%);
  opacity: 0;

  animation: ${(props) => (props.isShouldBeVisible ? 'show_slide' : 'hide')}
    250ms ease forwards;

  @keyframes show_slide {
    to {
      opacity: 1;
      transform: translateX(0);
    }
    from {
      opacity: 0;
      transform: translateX(100%);
    }
  }

  @keyframes hide {
    to {
      opacity: 0;
    }
    from {
      opacity: 1;
      transform: translateX(0);
    }
  }

  svg {
    color: ${(props) => props.theme[COLOR_TYPE_TOAST[props.type]]};
  }
`
