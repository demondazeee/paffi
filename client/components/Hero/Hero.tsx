import styled from "styled-components";
import { Container } from "../layouts/Container";
import { Header } from "../layouts/Header";
import NavBar from "../NavBar/NavBar";

const HeroHeader = styled(Header)`
    height: 100vh;
    background-image: url('/dog-bg.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`

const Hero = () => {
    return (
        <>
            <HeroHeader>
                <Container>
                    <NavBar />
                </Container>
            </HeroHeader>
        </>
    )
}

export default Hero;