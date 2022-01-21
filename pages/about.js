import Container from "../components/Container";
import { Heading, Text, Button, Box, Image, Stack } from "@chakra-ui/react";
import NextLink from "next/link";
import { FaTwitter, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp} from 'react-icons/fa';

export default function About() {
    return (
        <>
            <Container>
                <Stack direction="row" >
                    <Box width="30%" marginRight="10px">
                        <Image src='profile.JPG'  my={2} border="1px solid gray" p="1px" borderRadius={5} alt='Ricardo Coronado'></Image>
                        
                        <Stack>
                            <NextLink href="/cv.pdf" passHref>
                                <Button colorScheme="teal" size="sm" marginBottom="5%"   >Download my CV</Button>
                            </NextLink>
                            
                            <NextLink href="http://github.com/rickiwasho" passHref>
                                <Button  colorScheme="gray" size="xs" leftIcon={<FaGithub />}> Github</Button>
                            </NextLink>

                            <NextLink href="https://www.linkedin.com/in/ricardo-coronado-mera/" passHref>
                                <Button  colorScheme="gray" size="xs" leftIcon={<FaLinkedin />}>LinkedIn</Button>
                            </NextLink>

                            <NextLink href="http://instagram.com/rickiwasho" passHref>
                                <Button  colorScheme="gray" size="xs" leftIcon={<FaInstagram />}>Instagram</Button>
                            </NextLink>
                            
                            <NextLink href="https://wa.me/56981764379" passHref>
                                <Button colorScheme="gray" size="xs" leftIcon={<FaWhatsapp />}>WhatsApp</Button>
                            </NextLink>

                            <NextLink href="http://twitter.com/naturalfreqs" passHref>
                                <Button colorScheme="gray" size="xs" leftIcon={<FaTwitter />}>Twitter</Button>
                            </NextLink>
                        </Stack>
                    </Box>
                    <Box width="70%">
                        <Heading>About Ricardo </Heading>
                        <Box >
                            <Text>
                                Ricardo was born in Valdivia, Chile in 1997. He is currently studying &apos;Ingeniería civil en Informática&apos; in UACh.</Text>
                            <br></br>
                            <Text>
                                His main interest lies in working with text, and for that very reason, he is doing his internship at Sophia2, a company dedicated to the classification of news from the different newspapers in Chile.</Text>
                            <br></br>
                            <Text>
                            Ricardo is writing his thesis and is quite stressed, but he is probably doing it very well 😌.</Text>
                        </Box>
                        
                    </Box>
                </Stack>
            </Container>
    
        </>
    )
}