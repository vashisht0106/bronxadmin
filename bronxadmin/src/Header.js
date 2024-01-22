// Header.js
import React from 'react';
import { Box, Flex, Spacer, Link, Heading, HStack,Menu,MenuButton,MenuList,Button,MenuItem} from '@chakra-ui/react';
import { FaAngleDown } from "react-icons/fa";
const Header = () => {
  return (
    <Box as="header" bg="blue.700" p={4} color="white" justifyContent={'space-between'}>
    <HStack>
<Box >

<Menu >
  {({ isOpen }) => (
    <>
      <MenuButton isActive={isOpen} as={Button} bg={'blue.700'} borderRadius={'0'}
      rightIcon={<FaAngleDown />}>
        {/*{isOpen ? 'Designing' : 'Design'}*/}
        Design
      </MenuButton>
      <MenuList minWidth='120px' >
        <Box>
        <MenuItem color={'gray.700'} fontWeight={'500'} fontSize={'12'}>Layout</MenuItem>
        <MenuItem onClick={() => alert('Kagebunshin')}>Display</MenuItem>
        </Box>
      </MenuList>
    </>
  )}
</Menu>

</Box>
<Box></Box>
<Box></Box>

    </HStack>
      
    </Box>
  );
};

export default Header;
