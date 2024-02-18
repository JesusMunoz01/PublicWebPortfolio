"use client"
import Image from "next/image";
import { useState } from "react";
import styles from "../app/projects/page.module.css"
import { FaArrowLeft } from "react-icons/fa6"
import { FaArrowRight } from "react-icons/fa6"

type ImageSliderProps = {
    imgURL: string[]
    id: string
}

export default function ImageSlider({imgURL, id}: ImageSliderProps) {
    const [current, setCurrent] = useState(0);

    function increaseCurrent() {
        if (current < imgURL.length - 1) {
            setCurrent(current + 1);
        } else {
            setCurrent(0);
        }
    }

    function decreaseCurrent() {
        if (current > 0) {
            setCurrent(current - 1);
        } else {
            setCurrent(imgURL.length - 1);
        }
    }

    return <div style={{width: "100%", height: "100%", position: "relative"}}>
        <div className={styles.imgList}>
            {imgURL.map((img) => (
                <div key={`${img}`} style={{display: "flex", objectFit: "cover", minWidth: "100%", alignItems: "center", justifyContent: "center"}}>
                    {id !== "p3" && id !=="p5" ?
                        <Image key={`${img}`} src={`${img}`} alt="project image" width={1920} height={1080} className={styles.imgSliderImg}
                        style={{translate: `${-100 * current}%`}} id={styles[`${id}`]}/>:
                        <Image key={`${img}`} src={`${img}`} alt="project image" width={1920} height={1080} className={styles.imgSliderImg}
                        style={{translate: `${-333 * current}%`}} id={styles[`${id}`]}/>
                    }
                </div>
            ))}
        </div>
        {imgURL.length > 1 &&
        <>
            <button className={styles.imgBtn} style={{left: "0"}}
                onClick={decreaseCurrent}><FaArrowLeft /></button>
            <button className={styles.imgBtn} style={{right: "0"}}
                onClick={increaseCurrent}><FaArrowRight/></button>
        </>
        }
    </div>
}
