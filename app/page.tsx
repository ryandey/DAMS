import { getServerSession } from "next-auth"
import { Container, Heading, Text } from "@chakra-ui/react"
import { authOptions } from "./api/auth/[...nextauth]/route"

export default async function Home() {
  const session = await getServerSession(authOptions)
  console.log(session?.user)

  return (
    <Container className="p-4 text-center">
      <Heading>DAMS Home</Heading>
      <Text>Disaster Assistance Management System</Text>
      {session?.user?.name ? (
        <Text>Logged in as {session?.user?.name}</Text>
      ) : (
        <Text>Not logged in</Text>
      )}
    </Container>
  )
}
