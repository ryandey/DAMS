"use client"

import { Session, getServerSession } from "next-auth"
import { SessionProvider } from "next-auth/react"
import { ChakraProvider } from "@chakra-ui/react"

export function Providers(
  { session }: { session: Session },
  { children }: { children: React.ReactNode }
) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider>{children}</ChakraProvider>
    </SessionProvider>
  )
}
