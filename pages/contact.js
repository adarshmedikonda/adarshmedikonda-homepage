import { Container, Box, Heading, Stack, useColorModeValue } from '@chakra-ui/react'
import Section from '../components/section'
import {
    Flex,
    Text,
    ListItem,
    List,
  } from '@chakra-ui/react'

const Page = () => {
    return (
        <Container maxW="container.full">
            <Section delay={0.1}>
                <Box display={{ md:'flex' }}>
                    <Box flexGrow={1} pt={5}>
                        <Heading size='xl' pt={2} pb={1}>Contact</Heading>
                    </Box>
                </Box>
            </Section>
            <Section delay={0.3}>
                <Stack direction='row' h='500px' pl={20} pt={2}>
                    <List>
                            <ListItem>
                                <Flex>
                                <Text fontSize={22} pr={2}>
                                    reach me @ 
                                </Text>
                                <Text fontSize={22} color={useColorModeValue('#DE0D92', '#33f567')}>
                                    medikonda.adarsh@gmail.com
                                </Text>
                                </Flex>
                            </ListItem>
                        
                        
                        
                    </List>
                </Stack>
            </Section>
        </Container>
        
        
    )
}

export default Page