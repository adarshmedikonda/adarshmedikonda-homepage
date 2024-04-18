import NextLink from 'next/link'
import Logo from './home-icon'
import ThemeToggleButton from './light-dark-toggle';
import { 
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    useColorModeValue,
    Button
} from '@chakra-ui/react'
import { FaGithub, FaLinkedin  } from "react-icons/fa";
import { BsFileTextFill } from "react-icons/bs";


const LinkItem = ({ href, path, target, children, ...props }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
    return (
      <Link
        as={NextLink}
        href={href}
        scroll={false}
        p={2}
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Link>
    )
  }

const Navbar = props => {
    const { path } = props

    return (
        <Box
            position='fixed'
            as='nav'
            w='100%'
            bg={useColorModeValue('#203E3D42', '#5376ac30')}
            style={{backdropFilter: 'blur(20px)'}}
            zIndex={1}
            {...props}
        >
            <Container
                display = "flex"
                p = {2}
                maxW = "container.md"
                wrap = "wrap"
                align = "center"
                justify = "space-between"
            >
                <Flex align='center'>
                    <Heading as="h1" size='lg' letterSpacing='tight'></Heading>
                    <Logo />
                </Flex>
                
                <Stack
                    direction = {{base: 'column', md: 'row'}}
                    display = {{base: 'none', md: 'flex'}}
                    width = {{base: 'full', md: 'auto'}}
                    alignItems='center'
                    flexGrow = {1}
                    mt = {{base: 4, nmd: 0}}
                    ml={150}
                >
                    <LinkItem href="/resume" path={path}>
                        <Button size='sm' variant='outline' leftIcon={<BsFileTextFill />}>
                            Resume
                        </Button>
                    </LinkItem>
                    {/* <LinkItem href="/contact" path={path}>
                        <Button size='sm' variant='outline' leftIcon={<MdEmail />}>
                            contact
                        </Button>
                    </LinkItem> */}
                    <LinkItem href="https://github.com/adarshmedikonda" path={path}>
                        <Button size='sm' variant='outline' leftIcon={<FaGithub />}>
                            GitHub
                        </Button>
                    </LinkItem>
                    <LinkItem href="https://www.linkedin.com/in/medikonda-adarsh/" path={path}>
                        <Button size='sm' variant='outline' leftIcon={<FaLinkedin />}>
                            LinkedIn
                        </Button>
                    </LinkItem>
                </Stack>
                <Box ml={2}>
                    <ThemeToggleButton />
                </Box> 
            </Container>
        </Box>
        
    )
}

export default Navbar