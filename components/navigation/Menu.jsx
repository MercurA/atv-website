import styles from "./styles.module.scss";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Menu = () => {
  const router = useRouter();
  const [menuState, setMenuState] = useState([
    {
      name: "Despre Noi",
      id: "/#section_1",
      hasLine: false,
    },
    {
      name: "ATV-uri",
      id: "/#section_2",
      hasLine: false,
    },
    {
      name: "Trotinete electrice",
      id: "/#section_3",
      hasLine: false,
    },
    {
      name: "Servicii",
      id: "/#section_4",
      hasLine: false,
    },
    {
      name: "Reguli de bun simt",
      id: "/#section_5",
      hasLine: false,
    },
    {
      name: "Contacteaza-ne",
      id: "/#section_6",
      hasLine: false,
    },
  ]);

  const formatMenuStateArray = (menuItems, target, bool) => {
    const menuArray = [...menuItems];

    return menuArray.map((item, index) => {
      if (index === target) {
        return { ...item, hasLine: bool };
      }
      return item;
    });
  };

  const handleHoverItem = (e) => {
    const menuIndex = e.target.id && Number(e.target.id.split("_")[1]);

    setMenuState(formatMenuStateArray(menuState, menuIndex, true));
  };

  const handleHoverLeave = (e) => {
    const menuIndex = e.target.id && Number(e.target.id.split("_")[1]);

    setMenuState(formatMenuStateArray(menuState, menuIndex, false));
  };

  const handleClick = (e, id) => {
      e.preventDefault()
      router.push(id)
  };

  const renderMenuItems = () => {
    return menuState.map((item, index) => (
      <Link href={item.id} key={index+1} passHref> 
        <a > 
          <div
            id={`item_${index}`}
            key={index}
            className={styles.menuItem}
            onMouseOver={handleHoverItem}
            onMouseLeave={handleHoverLeave}
            onClick={(e) => handleClick(e, item.id)}
          >
            {item.name}
            {item.hasLine && <div className={styles.line}></div>}
          </div>
        </a>
      </Link>
    ));
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src={"/images/logo.png"} height={80} width={80} />
      </div>
      {renderMenuItems()}
    </div>
  );
};

export default Menu;
