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
    animation: shake 1s;
}


img:active {
  animation: clickEffect 0.1s ease-out;
}

@keyframes shake {
    0% { transform: rotate(0deg); }
    10% { transform: rotate(-8deg); }
    20% { transform: rotate(0deg); }
    30% { transform: rotate(8deg); }
    40% { transform: rotate(0deg); }
    50% { transform: rotate(-8deg); }
    60% { transform: rotate(0deg); }
    70% { transform: rotate(8deg); }
    80% { transform: rotate(0deg); }
    90% { transform: rotate(-8deg); }
    100% { transform: rotate(0deg); }
}

@keyframes clickEffect {
    0% { transform: scale(1); }
    50% { transform: scale(1.15); }
    100% { transform: scale(1); }
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