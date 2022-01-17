import Container from "../components/Container";
import { Heading, Input, Button, Stack, Textarea } from "@chakra-ui/react";

export default function Contact() {
    return (
        <>
            <Container>
                <Stack display="flex" spacing={3}>
                    <Input variant='filled' placeholder='Outline' />
                    <Textarea variant='filled' placeholder='Filled' />
                    <Button colorScheme="cyan" size="sm" marginBottom="5%"   >Send</Button>
                </Stack>

            </Container>
        
        </>
    )
}