import React from 'react'

import { styled } from '../../../stitches.config'

const StyledButton = styled('button', {
  backgroundColor: '$teste',
  borderRadius: '9999px',
  fontSize: '13px',
  padding: '10px 15px',
  '&:hover': {
    backgroundColor: 'lightgray'
  }
})

export interface ButtonProps {
  label: string
}

const Button = (props: ButtonProps) => {
  return <StyledButton>{props.label}</StyledButton>
}

export default Button
