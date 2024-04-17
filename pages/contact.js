import { Container, Box, Heading, Stack } from '@chakra-ui/react'
import Section from '../components/section'
import {
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
                <Stack direction='row' h='500px' pl={5}>
                    <List>
                        <ListItem>
                            email: {' '}
                            
                        </ListItem>
                        
                    </List>
                </Stack>
            </Section>
        </Container>
        
        
    )
}

export default Page