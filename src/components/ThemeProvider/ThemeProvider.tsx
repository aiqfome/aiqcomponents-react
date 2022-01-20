import React, { ReactNode } from 'react'

import { createStitches } from '@stitches/react'

import { theme as defaultTheme } from '../../../stitches.config'

type ThemeProviderType = {
  theme?: any
  children: ReactNode
}

const ThemeProvider = ({ theme, children }: ThemeProviderType) => {
  const { createTheme } = createStitches()

  const myTheme = createTheme(theme || defaultTheme)

  return <div className={myTheme}>{children}</div>
}

export default ThemeProvider
