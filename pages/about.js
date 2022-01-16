import Container from "../components/Container";
import { Heading, Text, Button, Box, Image, Stack } from "@chakra-ui/react";
import NextLink from "next/link";


export default function About() {
    return (
        <>
            <Container>
                <Stack direction="row" marginTop="5%">
                    <Box width="30%">
                        <Image boxSize='200px' src='https://avatars.githubusercontent.com/u/23617398?v=4' alt='Ricardo Coronado'></Image>
                        <NextLink href="/contact" passHref>
                            <Button colorScheme="cyan" size="sm" marginTop="30px"  >Download my cv!</Button>
                        </NextLink>
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