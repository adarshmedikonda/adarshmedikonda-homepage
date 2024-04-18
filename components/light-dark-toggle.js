import { IconButton, useColorMode, useColorModeValue, animate } from '@chakra-ui/react'
import { GiNightSleep } from "react-icons/gi";
import { HiLightBulb } from "react-icons/hi";

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <IconButton
      aria-label='toggle theme'
      colorScheme={useColorModeValue('purple', 'orange')}
      icon={useColorModeValue(<GiNightSleep />, <HiLightBulb />)}
      onClick={toggleColorMode}
      width={12}
      height={12}
      transition="all 0.2s"
      _hover={{
        transform: "scale(1.05)",
        opacity: 0.8,
      }}
      _active={{
        transform: "scale(1.2) translateY(2px)",
        opacity: 0.6,
      }}
    >
    </IconButton>
  )
}

export default ThemeToggleButton