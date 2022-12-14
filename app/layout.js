import Navbar from "../components/navigation/Navbar";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
