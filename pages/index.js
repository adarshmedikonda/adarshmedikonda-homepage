import { Link, Text, Container, Box, Heading, Stack, Avatar } from '@chakra-ui/react'
import { Card, CardHeader, CardBody } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import Section from '../components/section'
import TechStack from '../components/tech-stack'
import NextLink from 'next/link'

const Page = () => {
    return (
        <Container maxW="container.full">
            <Section delay={0.1}>
                <Box display={{ md:'flex' }}>
                    <Box flexGrow={1} pt={10}>
                    <Card align='center' direction="row">
                        <CardHeader pl={8} pr={12}>
                            <Heading size='xl' pt={2} pb={1}>Adarsh Medikonda</Heading>
                            <Text fontSize={18} pb={3}>building all sorts of software, hardware, and connections</Text>
                        </CardHeader>
                        <CardBody pl={45}>
                            <Avatar name="Adarsh Medikonda" src='/images/avatar.jpg' size='xl'/>
                        </CardBody>
                    </Card>
                    </Box>
                </Box>
            </Section>
            <Box display={{ md:'flex' }}>
            <Box flexGrow={1}>
            <Section delay={0.3}>
                <Stack direction='row' h='300px' pl={6} pt={5}>
                    <Divider orientation='vertical'/>
                    <Text pt={4} pl={5}>
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
                        <br/>
                        but a few of my main interests are in software development, embedded, and system engineering.
                        <br/><br/>
                        Want to know my background or projects? Check out my {' '}
                        <Link as={NextLink} href="/resume">
                            resume
                        </Link>!
                    </Text>
                </Stack>
            </Section>
            </Box>
            </Box>
            <Box display={{ md:'flex' }}>
            <Box flexGrow={1}>
            <Section delay={0.5}>
               
                <Heading size='md' variant='header-section' pl={0} pt={7} pb={2}>About Me</Heading>
                <Stack direction='row' h='210px' pl={6}>
                    <Text align='justify' pt={5} pl={0} pr={6}>
                        On the weekends you'll catch me winding down playing videogames! I grew up with a love for all
                        sorts of games, ranging from JRPGs to MMOs and even FPS. Fun fact: My first encounter with 
                        programming was Lua, and that was because of World of Warcraft addons!
                        <br/><br/>
                        During longer breaks I'll definitely be off on a road trip adventure or 
                        a flight overseas. My favorite places to go in the United States are Michigan and Colorado, and recently
                        I hiked Guadalupe Peak in West Texas! In terms of international trips, a few countries I've had the wonderful
                        opportunity to visit are Japan, Singapore, India, and Canada!
                    </Text>
                </Stack>
            </Section>
            </Box>
            </Box>
            <Box display={{ md:'flex' }}>
            <Box flexGrow={1}>
            <Section delay={0.7}>
                <Heading size='md' variant='header-section' pl={0} pt={6} pb={2}>Skills</Heading>
                <TechStack />
            </Section>
            </Box>
            </Box>
        <Text pt={300} align='right'>made with love by adarsh medikonda</Text>
        </Container>
    )
}

export default Page