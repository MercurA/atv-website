import LargeCard from "../components/cards/LargeCard";
import SmallCard from "../components/cards/SmallCard";
import TextComponent from "../components/textComponents/TextComponent";
import strings_RO from "../constants/strings";
import styles from "./styles.module.scss";

const MainPage = () => {
  const {
    atv_list,
    section_about,
    largeCardText_1,
    largeCardText_title_list_1,
    section_atv,
    section_scooters,
    section_services,
    section_rules,
 } = strings_RO;

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
            title={largeCardText_title_list_1[0]}
            list={["a", "b", "c"]}
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
        images={["/images/troti1.png"]}
        hasBg={true}
        component={
          <TextComponent
            text={largeCardText_1}
            title="An de fabricatie trotineta: 2010 Model ATV: XC0123"
            list={["a", "b", "c"]}
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
            text={largeCardText_1}
            title={strings_RO.section_rules}
            list={["a", "b", "c"]}
          />
        }
      />
    </div>
  );
};

export default MainPage;
