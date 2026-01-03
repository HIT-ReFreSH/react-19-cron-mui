import React from 'react'
import { Box } from '@mui/material'

const DividerWithText = ({ children }: any) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          borderBottom: '2px solid lightgray',
          width: '100%',
        }}
      />
      <Box
        component='span'
        sx={{
          paddingTop: 0.5,
          paddingBottom: 0.5,
          paddingRight: 2,
          paddingLeft: 2,
          fontWeight: 500,
          fontSize: 22,
          color: 'lightgray',
        }}
      >
        {children}
      </Box>
      <Box
        sx={{
          borderBottom: '2px solid lightgray',
          width: '100%',
        }}
      />
    </Box>
  )
}
export default DividerWithText
