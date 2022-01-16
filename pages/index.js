import Container from "../components/Container";
import { Heading, Text, Button, Box, Image, Stack } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
export default function Home() {

  const url = "https://rickiwasho.github.io"
  const title = "Ricardo Coronado's website"
  const description = 'in this website i write about things im interested.'

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description
        }}
      />
      <Container>
        <Stack direction='row'>
          <Box padding="5px">
            <Image src="https://avatars.githubusercontent.com/u/23617398?v=4"/></Box>
          <Box>
            <Heading as="h1" size="3xl">Hello, I&apos;m Ricardo Coronado</Heading>
            <Text fontSize="2xl" my={4}>A developer, researcher and student. </Text>
            <Button colorScheme="cyan" size="lg" display="Flex">Let&apos;s chat!</Button>
          </Box>
        </Stack>
        
      
      </Container>
    </>
  )
}
