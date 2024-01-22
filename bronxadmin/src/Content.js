import React,{useEffect, useRef,useState} from 'react'
import { bgColour, borderColor,plhColor, txtColor } from './Dynamic'
import { Box,Checkbox,HStack,Text,Select, Input, InputGroup ,InputRightElement, VStack, Button, Icon} from '@chakra-ui/react'
import { BsFillFileEarmarkPlusFill } from "react-icons/bs";
import { FaUpload } from 'react-icons/fa'
import { IoCloudUploadOutline } from "react-icons/io5";
import './Content.css'
import axios from 'axios';
const Content = () => {
const [folder,setFolder]=useState('null');
console.log(process.env)
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://192.168.1.4:4000/api/v1/readfolder`);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchData(); // Call the async function inside useEffect
}, []);


    const fileInputRef = useRef(null);
const [filename,setFilename]=useState('null')
    const handleIconClick = () => {
      fileInputRef.current.click();
    };
  
    const handleFileChange = (event) => {
      // Handle the file change event here
      const selectedFile = event.target.files[0];
      console.log('Selected file:', selectedFile);
      setFilename(selectedFile);
    };

  return (
   <Box bg={bgColour}>
<Box p={'10'}>
<HStack>
    <InputGroup>
<Input type='text' placeholder='Create Folder' color={txtColor}  _placeholder={{ opacity: 1, color:plhColor }} borderColor={borderColor} />
    <InputRightElement>
      <Icon as={BsFillFileEarmarkPlusFill} cursor={'pointer'} color={plhColor} boxSize={5} />
    </InputRightElement>
    </InputGroup>



<Select
  bg={bgColour}
  borderColor={borderColor}
  color={plhColor}
  placeholder='---select folder---'
>

<option >jdh</option>
<option>jdh</option>
<option>jdh</option>
<option>jdh</option>

</Select>
<Box>
    
<Box className="file-input-container" >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="file-input"
        accept=".png, .jpg, .jpeg, .gif" // Set accepted file types if needed
      />
      <Box bg={bgColour} className="file-input-icon" onClick={handleIconClick}>
       

      <Icon as={FaUpload} color={plhColor} boxSize={4} />

          

            

      </Box>

    </Box>


</Box>
{/*<Input type='file'/>*/}
</HStack>

{filename !='null' &&

<HStack justifyContent={'end'} pt={'5'}>
    <Box>
        <Text  >{filename.name} </Text>

    </Box>
       <Box>

      {/*<Icon as={FaUpload} color={plhColor} boxSize={4} />*/}
       <Button leftIcon={  <Icon as={IoCloudUploadOutline} color={plhColor} boxSize={4} />} variant='outline' borderColor={borderColor}>
 <Text color={plhColor}>Upload</Text>
  </Button>
       </Box>

</HStack>
     
  }


</Box>
   </Box>
  )
}

export default Content