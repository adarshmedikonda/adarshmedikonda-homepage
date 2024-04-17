import { VStack } from '@chakra-ui/react'    // Stack imports
import { Card, CardBody } from '@chakra-ui/react'    // Card imports
import { Heading, Text } from '@chakra-ui/react'                 // Text imports
const TechStack = () => {
    return (
        <VStack align='left' pt={6}>
            <Card>
                <CardBody>
                    <Heading size='md' textTransform='uppercase'>
                    Programming Languages
                    </Heading>
                    <Text pt={1} fontSize='md'>
                    Python, C++, C, Java, Embedded C, MATLAB, ARM Assembly, React, HTML/CSS
                    </Text>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <Heading size='md' textTransform='uppercase'>
                    Platforms
                    </Heading>
                    <Text pt={1} fontSize='md'>
                    Azure, AWS, GitHub, Vercel
                    </Text>
                </CardBody>
            </Card>

            <Card>
                <CardBody>
                    <Heading size='md' textTransform='uppercase'>
                    Security Tools
                    </Heading>
                    <Text pt={1} fontSize='md'>
                    Wireshark, Snort, Autopsy, Sandboxing (Cuckoo, CAPEv2)
                    </Text>
                </CardBody>
            </Card>

            <Card>
                <CardBody>
                    <Heading size='md' textTransform='uppercase'>
                    Microcontrollers
                    </Heading>
                    <Text pt={1} fontSize='md'>
                    TI-MSP432P401R, TI-Tiva C Series, Raspberry Pi, Arduino, ESP32
                    </Text>
                </CardBody>
            </Card>

            <Card>
                <CardBody>
                    <Heading size='md' textTransform='uppercase'>
                    Operating Systems
                    </Heading>
                    <Text pt={1} fontSize='md'>
                    Windows, Linux (Ubuntu, Arch, Gentoo)
                    </Text>
                </CardBody>
            </Card>
        </VStack>
    )
}

export default TechStack