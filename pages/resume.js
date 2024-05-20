import { Text, Container, Box, Heading, Stack, UnorderedList } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import Section from '../components/section'
import ResumeItem from '../components/resume-item'
import NextLink from 'next/link'
import {
    Link,
    Badge,
    Flex,
    List,
    ListItem,
    ListIcon,
    useColorModeValue
  } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
  } from '@chakra-ui/react'

const Resume = () => {
    return (
        <Container p={0}>
            <Section delay={0.1}>
                <Box display={{ md:'flex' }}>
                    <Box flexGrow={1} mt={5}>
                        <Heading size='xl' pt={2} pb={2}>Resume</Heading>
                    </Box>
                </Box>
            </Section>
            <Section delay={0.3}>
            <Text align='justify' mb={3} fontSize={18}>
                download a .pdf of my {' '}
                <Link as={NextLink} href="/documents/2024_Resume_Medikonda_Adarsh.pdf">
                resume
                </Link>
            </Text>
            </Section>

            <Section delay={0.5}>
            <Stack ml={0} mt={1} direction='column'>
                <Heading size='md'>Education</Heading>
                <List pt={4} pl={6} spacing={5}>
                    <ListItem>
                        <Flex mr={5} align="center" wrap='wrap'>
                            <Text fontSize={16} marginBottom={0.5} marginRight={5}>
                                2024
                            </Text>
                            <ListIcon marginLeft={4} ml={6} mt={1} as={ChevronRightIcon} color={useColorModeValue('#DE0D92', '#33f567')} />
                            <ResumeItem>
                                <b>Texas A&M University</b>
                            </ResumeItem>
                        </Flex>
                            <UnorderedList mt={4} ml={8}>
                                <ListItem>
                                Bachelor of Science in <b>Electronic Systems Engineering Technology</b>
                                </ListItem>
                                <ListItem>
                                Double Minor in <b>Computer Science</b> and <b>Cybersecurity</b>
                                </ListItem>
                            </UnorderedList>
                            
                            <Popover trigger='hover'>
                                <PopoverTrigger>
                                    <Badge ml={8} colorScheme={useColorModeValue('pink', 'green')}>Coursework</Badge>
                                </PopoverTrigger>
                                <PopoverContent>
                                    <PopoverArrow />
                                    <PopoverCloseButton />
                                    <PopoverBody>
                                        <UnorderedList spacing={2} pl={2} pt={7} pb={7} pr={7}>
                                            <ListItem>Real Time Software Development</ListItem>
                                            <ListItem>Data Structures and Algorithms</ListItem>
                                            <ListItem>Discrete Math</ListItem>
                                            <ListItem>Advanced Network Systems and Security</ListItem>
                                            <ListItem>MCU Architecture</ListItem>
                                            <ListItem>Embedded Systems Development</ListItem>
                                            <ListItem>Control Systems</ListItem>
                                            <ListItem>Object-Oriented Programming</ListItem>
                                        </UnorderedList>
                                    </PopoverBody>
                                </PopoverContent>
                            </Popover>
                        
                    </ListItem>
                </List>
            </Stack>
            </Section>
            
            <Section delay={0.7}>
            <Stack direction='column' mt={5} ml={0} mr={10}>
                <Heading size='md'>Work Experience</Heading>
                <List>
                    <ListItem>
                        <Flex align="center" wrap='wrap' ml={5}>
                            <Text align="center" fontSize={16} mt={2}>
                                Jun, 2023<br/>
                                Aug, 2023
                            </Text>
                            <ListIcon marginLeft={4} mt={2} as={ChevronRightIcon} color={useColorModeValue('#DE0D92', '#33f567')} />
                            <Text mt={2} ml={4}>
                            <b>Embedded Software Intern</b><br/>
                            <b>Lennox International</b>
                            </Text>
                        </Flex>
                        <UnorderedList ml={14} mt={5} mb={2} spacing={2}>
                            <ListItem>
                            Created and deployed a Python and React based dashboard application that would communicate 
                            between C++ based firmware and an Azure Service Bus to request/evaluate datasets from S30 and 
                            S40 smart thermostats
                            </ListItem>
                            <ListItem>
                            Implemented system design with publish-subscribe models (MQTT) for scalable embedded architectures
                            </ListItem>
                            <ListItem>
                            Reverse engineered currently implemented .NET C# based system to expedite thermostat 
                            edge computation transition process
                            </ListItem>
                            <ListItem>
                            Produced a thorough testing suite for the application, along with software documentation
                            using clean code guidelines
                            </ListItem>
                        </UnorderedList>
                    
                        <Flex align="center" wrap='wrap' ml={5} mt={3}>
                            <Text align="center" fontSize={16} mt={2}>
                                Mar, 2021<br/>
                                Sep, 2021
                            </Text>
                            <ListIcon marginLeft={4} mt={2} as={ChevronRightIcon} color={useColorModeValue('#DE0D92', '#33f567')} />
                            <Text mt={2} ml={4}>
                            <b>Cloud Sol. Architect Intern</b><br/>
                            <b>XR Sports</b>
                            </Text>
                        </Flex>
                            <UnorderedList ml={14} mt={5} mb={2} spacing={2}>
                                <ListItem>
                                Automated deployment of ECS clusters, integrating Terraform and AWS, resulting in standardized 
                                and efficient client platform generation
                                </ListItem>
                                <ListItem>
                                Set-up the AWS infrastructure for stable end-to-end digital platforms for customers, while 
                                employing the Agile SDLC development process
                                </ListItem>
                                <ListItem>
                                Utilized pair programming with senior architects to quickly review and deploy production ready code
                                </ListItem>
                            </UnorderedList>
                    </ListItem>
                </List>
            </Stack>
            </Section>

            <Section delay={0.9}>
            <Stack direction='column' mt={2} mr={10}>
                <Heading size='md'>Projects</Heading>
                <List pt={2} pl={0} spacing={5}>
                    <ListItem>
                        <Flex align="center" wrap='wrap' ml={5}>
                            <Text align="center" fontSize={16} marginBottom={1}>
                                Fall 2021
                            </Text>
                            <ListIcon marginLeft={6} as={ChevronRightIcon} color={useColorModeValue('#DE0D92', '#33f567')} />
                            <ResumeItem>
                                <b>Line Following Robot</b>
                            </ResumeItem>
                        </Flex>
                        <UnorderedList ml={14} mt={2} mb={2} spacing={2}>
                            <ListItem>
                            Used C to program control algorithms for a line following robot driven by the MSP432 MCU.
                            </ListItem>
                            <ListItem>
                            Utilized timers, sensor interfacing, control algorithms, ISRs, and debugging for embedded systems
                            </ListItem>
                            <ListItem>
                            Worked with PWM signals to control an on-board servo to specific positions on command
                            </ListItem>
                            <ListItem>
                            Gained familiarity working with various communication protocols: UART, I2C, SPI
                            </ListItem>
                        </UnorderedList>
                    </ListItem>
                    <ListItem>
                        <Flex align="center" wrap='wrap' ml={5}>
                            <Text align="center" fontSize={16} marginBottom={1}>
                                Fall 2022
                            </Text>
                            <ListIcon marginLeft={6} as={ChevronRightIcon} color={useColorModeValue('#DE0D92', '#33f567')} />
                            <ResumeItem>
                                <b>EMG Game Controller</b>
                            </ResumeItem>
                            <UnorderedList ml={9} mt={2} mb={0} spacing={2}>
                                <ListItem>
                                Utilized NI LabView to translate EMG signals from a player to beat level 1-1 of Super Mario
                                </ListItem>
                                <ListItem>
                                Used digital conditioning by programming low-pass filters in NI LabView, encoding ADC outputs into player inputs
                                </ListItem>
                            </UnorderedList>
                        </Flex>
                    </ListItem>
                    <ListItem>
                        <Flex align="center" wrap='wrap' ml={5}>
                            <Text align="center" fontSize={16} marginBottom={1}>
                                Fall 2022
                            </Text>
                            <ListIcon marginLeft={6} as={ChevronRightIcon} color={useColorModeValue('#DE0D92', '#33f567')} />
                            <ResumeItem>
                                <b>Intrusion Detection System</b>
                            </ResumeItem>
                            
                        </Flex>
                            <UnorderedList ml={14} mt={2} mb={0} spacing={2}>
                                <ListItem>
                                Created a Machine Learning based Intrusion Detection System, trained using the IoT-23 dataset driven by sklearn
                                </ListItem>
                                <ListItem>
                                The system was effective in generating network classification reports, visualizing analysis results with Pandas and matplotlib
                                </ListItem>
                            </UnorderedList>
                    </ListItem>
                    <ListItem>
                        <Flex align="center" wrap='wrap' ml={5}>
                            <Text align="center" fontSize={16} marginBottom={1} mt={1}>
                                Fall 2023
                            </Text>
                            <ListIcon marginLeft={6} as={ChevronRightIcon} color={useColorModeValue('#DE0D92', '#33f567')} />
                            <ResumeItem>
                                <b>JavaFX Connect 4</b>
                            </ResumeItem>
                        </Flex>
                        <UnorderedList ml={14} mt={2} mb={2} spacing={2}>
                            <ListItem>
                            Implemented dynamic computer opponent difficulty scaling based on user selection, 
                            from random moves to strategic algorithms
                            </ListItem>
                            <ListItem>
                            Designed a background data structure for real-time board management, move verification, and state tracking,
                            allowing for game state saving/loading functionality
                            </ListItem>
                            <ListItem>
                            Used JavaFX to design an intuitive user interface, leveraging smooth animations to enhance user experience
                            </ListItem>
                        </UnorderedList>
                    </ListItem>
                    <ListItem>
                        <Flex align="center" wrap='wrap' ml={5}>
                            <Text align="center" fontSize={16} marginBottom={1} mt={1}>
                                Fall 2023
                            </Text>
                            <ListIcon mt={1} marginLeft={6} as={ChevronRightIcon} color={useColorModeValue('#DE0D92', '#33f567')} />
                            <ResumeItem>
                                <b>Robotics Control HUB</b><br/>
                            </ResumeItem>
                            
                        </Flex>
                        <UnorderedList ml={14} mt={2} mb={2} spacing={2}>
                            <ListItem>
                            Senior design capstone project, created an educational Robotics Control HUB for students in higher education to intuitively deploy robotics systems
                            </ListItem>
                            <ListItem>
                            Delivered a Python based API and GUI application for users to interact with their control hub
                            </ListItem>
                            <ListItem>
                            Employed project management skills to seamlessly integrate hardware and software deliverables
                            </ListItem>
                            <ListItem>
                            Designed and verified custom PCB with Altium
                            </ListItem>
                        </UnorderedList>
                    </ListItem>
                </List>
            </Stack>
            </Section>
            <Text pt={300} align='right'>made with love by adarsh medikonda</Text>
        </Container>
    )
}

export default Resume