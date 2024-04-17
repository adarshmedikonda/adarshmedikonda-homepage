import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { GiNightSleep } from "react-icons/gi";
import { HiLightBulb } from "react-icons/hi";
const ThemeToggleButton = () => {
    const {toggleColorMode} = useColorMode()

    return (
        <IconButton aria-label='toggle theme'
        colorScheme={useColorModeValue('purple', 'orange')}
        icon={useColorModeValue(<GiNightSleep />, <HiLightBulb />)}
        onClick={toggleColorMode}
        width={10}
        height={10}
        >
        </IconButton>
        
    )
}

export default ThemeToggleButton