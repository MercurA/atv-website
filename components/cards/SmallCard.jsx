import styles from "./styles.module.scss";
import Image from "next/image";
import strings from "../../constants/strings";
import strings_RO from "../../constants/strings";

const SmallCard = ({atv={}, index }) => {
  const {title, subTitle, list, path} = atv

  const renderDescList = () => {
    return list.map((item, index) => <li key={index}>{item}</li>);
  };

  return (
      <div className={styles.container} key={index}>
        <div className={styles.imageContainer}>
          <Image src={path} height={200} width={200} />
        </div>
        <div className={styles.description}>
          <div>
            {title[0] + title[1]}
          </div>
          {/* <div>{strings.atvModel}{subTitle}</div> */}
        </div>
        <div className={styles.listContainer}>{subTitle}</div>
        <ul>{renderDescList()}</ul>
      </div>
  );
};

export default SmallCard;
