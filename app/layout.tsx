export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Should I Have Surgery? - Make Informed Decisions About Your Surgical Care</title>
        <meta name="description" content="Get expert guidance on making informed decisions about surgery, finding the right surgeon, and understanding your options." />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
