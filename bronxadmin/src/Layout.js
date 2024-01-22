import React from 'react'
import {Box,HStack,Text,Grid, VStack, Button,Image, Center}  from '@chakra-ui/react'
//import landscapeImage from './images/Landscape - Region 1 - 1.png'
const imagesContext = require.context('../public/images', false, /\.(png)$/)
const imageFilenames = imagesContext.keys();
//console.log(imageFilenames)
const Layout = () => {
  return (
<Box p={'5'} bg={'white'}>
    <Center>
<Grid
      templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
      gap={10}
    >
      {imageFilenames.map((filename, index) => {
      
      console.log('filename',imagesContext(filename))
    //  console.log('filename',imagesContext(filename).default)
      
    return  (
          <Image key={index} src={imagesContext(filename)} alt={`Image ${index + 1}`} />
        )})}
    </Grid>
    </Center>
</Box>


  )
}

export default Layout