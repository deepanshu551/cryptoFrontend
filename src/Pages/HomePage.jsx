import React from 'react'
import CryptoListComp from '../Component/CryptoListComp'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

const HomePage = () => {
  return (
    <ErrorBoundary>
      <CryptoListComp />
    </ErrorBoundary>
  )
}

export default HomePage
