import Container from "../components/Container";
import { Heading, Text, Button, Box, Image, Stack } from "@chakra-ui/react";
import NextLink from "next/link";
import { FaTwitter, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp} from 'react-icons/fa';

export default function About() {
    return (
        <>
            <Container>
                <Stack direction="row" marginTop="2%">
                    <Box width="30%" marginRight="10px">
                        <Image src='https://avatars.githubusercontent.com/u/23617398?v=4'  my={4} border="1px solid gray" p="1px" borderRadius={5} alt='Ricardo Coronado'></Image>
                        
                        <Stack>
                            <NextLink href="/cv.pdf" passHref>
                                <Button colorScheme="cyan" size="sm" marginBottom="5%"   >Download my cv!</Button>
                            </NextLink>
                            
                            <NextLink href="http://github.com/rickiwasho" passHref>
                                <Button  colorScheme="gray" size="sm" leftIcon={<FaGithub />}> Github</Button>
                            </NextLink>

                            <NextLink href="https://www.linkedin.com/in/ricardo-coronado-mera/" passHref>
                                <Button  colorScheme="linkedin" size="sm" leftIcon={<FaLinkedin />}>LinkedIn</Button>
                            </NextLink>

                            <NextLink href="http://instagram.com/rickiwasho" passHref>
                                <Button  colorScheme="red" size="sm" leftIcon={<FaInstagram />}>Instagram</Button>
                            </NextLink>
                            
                            <NextLink href="https://wa.me/56981764379" passHref>
                                <Button colorScheme="whatsapp" size="sm" leftIcon={<FaWhatsapp />}>WhatsApp</Button>
                            </NextLink>

                            <NextLink href="http://twitter.com/naturalfreqs" passHref>
                                <Button colorScheme="twitter" size="sm" leftIcon={<FaTwitter />}>Twitter</Button>
                            </NextLink>
                        </Stack>
                    </Box>
                    <Box width="70%">
                        <Heading>ESTE ES UN TITULO</Heading>
                        <Box >
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque blandit placerat sodales. Aliquam commodo ut ligula eu lacinia. Curabitur sagittis, turpis in dapibus elementum, elit ipsum semper tortor, ut vestibulum mauris nunc vehicula felis. Pellentesque interdum facilisis justo, sit amet interdum mauris viverra sit amet. Integer fermentum turpis dictum sapien cursus vehicula. Mauris pharetra erat nisi, lobortis gravida neque eleifend id. Nulla sit amet euismod nibh, rutrum egestas mi. Maecenas quis efficitur elit. Mauris venenatis posuere lectus, at tincidunt felis finibus et.
                            </Text>
                        </Box>
                        <Box>
                            <Text marginTop="20px">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque blandit placerat sodales. Aliquam commodo ut ligula eu lacinia. Curabitur sagittis, turpis in dapibus elementum, elit ipsum semper tortor, ut vestibulum mauris nunc vehicula felis. Pellentesque interdum facilisis justo, sit amet interdum mauris viverra sit amet. Integer fermentum turpis dictum sapien cursus vehicula. Mauris pharetra erat nisi, lobortis gravida neque eleifend id. Nulla sit amet euismod nibh, rutrum egestas mi. Maecenas quis efficitur elit. Mauris venenatis posuere lectus, at tincidunt felis finibus et.
                            </Text>
                        </Box>
                    </Box>
                </Stack>
            </Container>
    
        </>
    )
}