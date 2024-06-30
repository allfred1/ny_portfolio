export default function useGenerator(titles: Array<string>, pathname: string): Array<Item> {
  let menuItems: Array<Item> = [
    {
      id: 0,
      title: "Home",
      href: "/",
      active: pathname === "/",
    },
  ]
  const otherItems: Array<Item> = titles.map(
    (title: string, index: number): Item => {
      const url = `/${title.charAt(0).toUpperCase()}${title.slice(1).toLowerCase().replace(/\s+/g, "-")}`;
      return {
        id: index + 1,
        title: `${title.trim()}`,
        href: url,
        active: pathname === url,
      }
    }
  )
  return menuItems.concat(otherItems)
}
