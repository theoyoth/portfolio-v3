import NextLink from "./next-link"

export default function Navbar() {
  const links = [
    {
      href:"/projects",
      label:"Projects",
    },
    {
      href:"/videos",
      label:"Videos",
    },
  ]
  return (
    <div className="flex justify-between space-x-6">
      {links.map((link,idx) => (
        <NextLink key={idx} href={link?.href} label={link.label} />
      ))}
    </div>
  )
}