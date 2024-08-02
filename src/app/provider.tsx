"use client"

import { ThemeProvider } from "@/components/theme-provider"
import { ReactNode } from "react"

export function Provider({children}:{children:ReactNode}){
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}