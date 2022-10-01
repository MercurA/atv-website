import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";
import Device from "../../utils/index";
import { LanguageContext } from "../../pages/_app";

const Menu = () => {
  const {currentLang, setLang, lang} = useContext(LanguageContext)
  const router = useRouter();
  const [open, setOpen] = useState(false)
  const [menuState, setMenuState] = useState([
    {
      name: currentLang.section_about,
      id: "/#despre-noi",
      hasLine: false,
    },
    {
      name: currentLang.section_atv,
      id: "/#atv-uri",
      hasLine: false,
    },
    {
      name: currentLang.section_scooters,
      id: "/#trotinete-electrice",
      hasLine: false,
    },
    {
      name: currentLang.section_services,
      id: "/#servicii",
      hasLine: false,
    },
    {
      name: currentLang.section_rules,
      id: "/#reguli-de-bun-simt",
      hasLine: false,
    },
    {
      name: currentLang.section_contact,
      id: "/contacts",
      hasLine: false,
    },
  ]);
  useEffect(() => {
    setMenuState([
      {
        name: currentLang.section_about,
        id: "/#despre-noi",
        hasLine: false,
      },
      {
        name: currentLang.section_atv,
        id: "/#atv-uri",
        hasLine: false,
      },
      {
        name: currentLang.section_scooters,
        id: "/#trotinete-electrice",
        hasLine: false,
      },
      {
        name: currentLang.section_services,
        id: "/#servicii",
        hasLine: false,
      },
      {
        name: currentLang.section_rules,
        id: "/#reguli-de-bun-simt",
        hasLine: false,
      },
      {
        name: currentLang.section_contact,
        id: "/contacts",
        hasLine: false,
      },
    ])
  },[currentLang])
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

  const handleLangSwitch = (e) => {
    const id = e.target.id
    setLang(id)
  }

  const handleClick = (e, id) => {
      e.preventDefault()
      router.push(id)
  };

  const handleOpenMenu = () => {
    setOpen(!open)
  }

  const handleCloseMenu = () => {
    setOpen(false)
  }

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


  const renderDesktopMenu = () => {
    return (
      <div className={styles.container}>
        <Link href={'/'}>
          <div className={styles.logo}>
            <Image src={"/images/logo.png"} height={80} width={80} />
          </div>
        </Link>
        {renderMenuItems()}
        <div className={styles.devider}></div>
        <div className={styles.langSwitch}>
            <div className={`pointer ${lang === 'en' && styles.brandColor}`} onClick={handleLangSwitch} id={'en'} >EN</div>
            <div>/</div>
            <div className={`pointer ${lang === 'ro' && styles.brandColor}`} onClick={handleLangSwitch} id={'ro'}>RO</div>
        </div>
      </div>
    )
  }

const renderMobileMenu = () => {
  return (
    <div className={styles.mobileContainer} >
      <Link href={'/'}>
        <div className={styles.logo} onClick={handleCloseMenu}>
            <Image src={"/images/logo.png"} height={80} width={80} />
        </div>
      </Link>
      <div className={styles.burgerMenu} onClick={handleOpenMenu}>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </div>
      <div className={open ? styles.openMenu : styles.closeMenu}>
          { open && menuState.map((el, index) => (
            <>
              <Link href={el.id}>
                <div className={styles.menuItem} key={index} onClick={handleCloseMenu}>{el.name}</div>
              </Link>
            </>
          ))}
      </div>
    </div>
  )
}

  const renderMenuType = (isMobile) => {
    if(isMobile) {
      return renderMobileMenu()
    } else {
      return renderDesktopMenu() 
    }
  }

  return (
    <Device>
      {({isMobile}) => renderMenuType(isMobile)}
    </Device>
  );
};

export default Menu;
