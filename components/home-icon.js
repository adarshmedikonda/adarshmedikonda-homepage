import Link from 'next/link'
import Image from 'next/image'
import { Icon, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { BsFillHouseDoorFill } from "react-icons/bs";

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
padding: 10px;

&:hover img {
    transform: rotate(-5deg);
}
`

const Logo = () => {
    const avatarImg = `/images/home${useColorModeValue('','-dark')}.svg`

    return (
        <Link href="/">
            <LogoBox>
                <Image src={avatarImg} width={25} height={25} alt=":)" quality={100}/>
            </LogoBox>
        </Link>
    )
}

export default Logo