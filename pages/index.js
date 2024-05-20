import { Link, Text, Container, Box, Heading, Stack, Avatar } from '@chakra-ui/react'
import { Card, CardHeader, CardBody } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import Section from '../components/section'
import TechStack from '../components/tech-stack'
import NextLink from 'next/link'

const Page = () => {
    return (
        <Container p={2}>
            <Section delay={0.1}>

                <Box display={{ md:'flex' }}>
                    <Box flexGrow={1} mt={6}>
                    <Card align='center' direction="row">
                        <CardHeader ml='flex' mr='flex'>
                            <Heading size='xl'>Adarsh Medikonda</Heading>
                            <Text fontSize={18} mb={1}>
                            building all sorts of software, hardware, and connections
                            </Text>
                        </CardHeader>
                        <Box
                        mt={{ base: 4, md: 0}}
                        ml={{ md: 6 }}>
                            <CardBody>
                                <Avatar name="Adarsh Medikonda" src='/images/avatar.jpg' size='xl'/>
                            </CardBody>
                        </Box>
                    </Card>
                    </Box>
                </Box>
            </Section>

            <Section delay={0.3}>
                <Stack direction='row' align='justify'>
                    <Text pt={6} pl={6} mr={6}>
                        Hello! My name is Adarsh.
                        <br/><br/>
                        I am a new grad from Texas A&M University, majoring in {' '}
                        <Link as={NextLink} href="https://engineering.tamu.edu/etid/eset/index.html">
                            Electronic Systems Engineering Technology
                        </Link>
                        {' '}with a double minor in {' '}
                        <Link as={NextLink} href="https://engineering.tamu.edu/cse/index.html">
                            Computer Science
                        </Link>
                        {' '} and {' '}
                        <Link as={NextLink} href="https://engineering.tamu.edu/cse/research/areas/cybersecurity.html">
                            Cybersecurity
                        </Link>.
                        <br/><br/>
                        I am an incredibly curious person by nature, especially with regards to technology, 
                        but a few of my main interests are in software development, embedded, and system engineering.
                        <br/><br/>
                        Want to know my background or projects? Check out my  {' '} 
                        <Link as={NextLink} href="/resume">
                            resume
                        </Link>!
                        <br/><br/>
                        Other places you can reach me? <br/>
                        <Link as={NextLink} href="https://github.com/adarshmedikonda">
                            @GitHub
                        </Link> or {' '}
                        <Link as={NextLink} href="https://www.linkedin.com/in/medikonda-adarsh/">
                            @LinkedIn
                        </Link>!
                    </Text>
                </Stack>
            </Section>
          
            <Section delay={0.5}>
                <Heading size='md' mt={6} variant='header-section'>About Me</Heading>
                <Stack direction='row' pl={6}>
                    <Text align='justify' pt={6} pl={0} pr={6}>
                        On the weekends you'll catch me winding down playing videogames! I grew up with a love for all
                        sorts of games, ranging from JRPGs to MMOs and even FPS. Fun fact: My first encounter with 
                        programming was Lua, and that was because of World of Warcraft addons!
                        <br/><br/>
                        During longer breaks I'll definitely be off on a road trip adventure or 
                        a flight overseas. My favorite places to go in the United States are Michigan and Colorado! 
                        In terms of international trips, a few countries I've had the wonderful
                        opportunity to visit are Japan, Singapore, India, and Canada!
                    </Text>
                </Stack>
            </Section>

           
            <Section delay={0.7}>
                <Heading size='md' variant='header-section' pl={0} pt={6} pb={2}>Skills</Heading>
                <TechStack />
            </Section>
            

        <Text pt={300} align='right'>made with love by adarsh medikonda</Text>
        </Container>
    )
}

export default Page