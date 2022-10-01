import { useContext } from "react";
import LargeCard from "../components/cards/LargeCard";
import SmallCard from "../components/cards/SmallCard";
import TextComponent from "../components/textComponents/TextComponent";
import styles from "./styles.module.scss";
import { LanguageContext } from "./_app";

const MainPage = () => {
  const {currentLang, setLang} = useContext(LanguageContext)
  const {
    atv_list,
    section_about,
    largeCardText_1,
    largeCardText_title_list_1,
    section_atv,
    section_scooters,
    section_services,
    section_rules,
    rules,
    sevices
 } = currentLang;

  return (
    <div className={styles.mainContainer}>
      <div className={styles.label} id={"despre-noi"}>
        {section_about}
      </div>
      <LargeCard
        images={["/images/atv.png", "/images/troti.png"]}
        component={
          <TextComponent
            text={largeCardText_1}
          />
        }
      />
      <div className={styles.label} id={"atv-uri"}>
        {section_atv}
      </div>
      <div className={styles.atvList}>
        {/* <div className={styles.horizontalScroll}> */}
          {atv_list.map((item, index) => (
            <SmallCard atv={item} index={index}/>
          ))}
        {/* </div> */}
      </div>
      <div className={styles.label} id={"trotinete-electrice"}>
        {section_scooters}
      </div>
      <LargeCard
        images={["/images/troti1.png"]}
        hasBg={false}
        component={
          <TextComponent
            text={largeCardText_1}
            title="An de fabricatie trotineta: 2010 Model ATV: XC0123"
            list={["a", "b", "c"]}
          />
        }
      />
      <div className={styles.label} id={"servicii"}>
        {section_services}
      </div>
      <LargeCard
        hasBg={true}
        component={
          <TextComponent
            text={sevices.title}
            title={sevices.subTitle}
            list={sevices.list}
          />
        }
      />
      <div className={styles.label} id={"reguli-de-bun-simt"}>
        {section_rules}
      </div>
      <LargeCard
        hasBg={false}
        component={
          <TextComponent
            title={rules.title}
            list={rules.list}
          />
        }
      />
    </div>
  );
};

export default MainPage;
