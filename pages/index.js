import React from 'react'
import Container from "../components/Container";
import NextLink from "next/link";
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
        <Stack marginTop="10%" direction="row">
          <Box width="100%">
            <Heading as="h1" size="3xl">Hello, I&apos;m Ricardo Coronado</Heading>
          </Box>
          
          <Image src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif" boxSize="100px"/>
            
        </Stack>
        <Text  fontSize="2xl" my={4}>A developer, researcher and student. </Text>
        <NextLink href="/contact" passHref>
              <Button colorScheme="cyan" size="lg" display="Flex">Let&apos;s chat!</Button>
        </NextLink> 
      </Container>
    </>
  )
}
