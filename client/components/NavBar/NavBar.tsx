import Image from "next/image"
import styled from "styled-components"
import { H2 } from "../elements/Headings"
import { LI, Link, UL } from "../elements/Links"
import { Container } from "../layouts/Container"

const Nav = styled.nav`
    padding: .5rem 0 .5rem 0;
`
const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const UserContainer = styled.div`

`

const NavLists = styled(UL)`
    display: flex;
    gap: 3.5rem;
`
const UserNavList = styled(NavLists)`
    gap: 5rem;
`

const LogoContainer = styled.div``

const NavBar = () =>{
    return (
       <>
        <Nav>
            <NavContainer>
                <LogoContainer>
                    <Image height={70} width={70} src="/logo.svg" alt="logo" />
                </LogoContainer>
                <NavLists>
                    <LI>
                        <Link>home</Link>
                    </LI>
                    <LI>
                        <Link>hats</Link>
                    </LI>
                    <LI>
                        <Link>sweater</Link>
                    </LI>
                    <LI>
                        <Link>shoes</Link>
                    </LI>
                    <LI>
                        <Link>gallery</Link>
                    </LI>
                </NavLists>
                <UserContainer>
                    <UserNavList>
                        <LI>
                            <Link>profile</Link>
                        </LI>
                        <LI>
                            <Link>cart</Link>
                        </LI>
                    </UserNavList>
                </UserContainer> 
            </NavContainer>
        </Nav>
       </>
    )
}

export default NavBar
