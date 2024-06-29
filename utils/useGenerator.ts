interface Item {
    id: number;
    title: string;
    href: string;
    active?: boolean;
}

export default function useGenerator(titles: Array<string>, pathname: string): Array<Item> {
    let menuItems: Array<Item> = [
        {
            id: 0,
            title: "Home",
            href: "/",
            active: pathname === "/",
        },
    ];
    const otherItems: Array<Item> = titles.map(
        (title: string, index: number): Item => ({
            id: index + 1,
            title: `${title.trim()}`,
            href: `/${title.toLowerCase().replace(/\s+/g, "-")}`,
            active: pathname === `/${title.toLowerCase().replace(/\s+/g, "-")}`,
        }),
    );
    return menuItems.concat(otherItems);
}
