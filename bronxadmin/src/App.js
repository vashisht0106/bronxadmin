import React from 'react'
import { ChakraProvider ,Box} from '@chakra-ui/react'
import Header from './Header'
import Layout from './Layout'
import Content from './Content'
const App = () => {
  return (
    <ChakraProvider>

{/*<Header/>*/}
{/*<Layout/>*/}
<Content/>
    </ChakraProvider>
  )
}

export default App