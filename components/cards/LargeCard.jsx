import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './styles.module.scss'

const LargeCard = ({images=[], component}, hasBg=false) => {
    const [hasImage, setHasImage] = useState(false)

    useEffect(() => {
        if(images.length > 0) {
            setHasImage(true)
        }
    },[])

    const renderImages = () => {
        return hasImage && images.map((imagePath, index) => {
            return (<div className={styles.imageItem}>
                <Image key={index} src={imagePath} layout={'fill'} objectFit='cover' objectPosition="left"/>
            </div>)
                
        })
    }

    return (
        <div className={styles.cardContainerNoBg}>
            <div className={styles.descriptionHalf}>
                {component && component}
            </div>
            {hasImage && <div className={styles.images}>{renderImages()}</div>}
        </div>
    )
}

export default LargeCard