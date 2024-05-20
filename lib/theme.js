import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true
}

const styles = {
    global: props => ({
        body: {
            bg: mode('#FFFFFF', '#202023')(props)
        }
    })
}

const components = {
    Heading: {
        variants: {
            'header-section': {
                textDecoration: 'underline',
                textUnderlineOffset: 8,
                textDecorationColor: '#A6A2A2'
            }
        }
    },
    Text: {
        baseStyle: props => ({
            color: mode('#202023', '#FFFBF4')(props)
        })
    },
    Link: {
        baseStyle: props => ({
            color: mode('#DE0D92', '#33f567')(props)
        })
    },
    Button: {
        baseStyle: props => ({
            colorScheme: mode('button_light', 'button_dark')(props)
        })
    }
}

const fonts = {
    heading: "'Assistant'"
}

const colors = {
    greenish: '#CFD2CD',
    grayish: '#A6A2A2',
    button_light: {
        50: '#f7fafc',
        500: '#718096',
        900: '#171923',
    },
    button_dark: {
        50: '#A9C3AA',
        500: '#718096',
        900: '#364837',
    }
}

const theme = extendTheme({
    config,
    styles,
    components,
    colors,
    fonts
})

export default theme 