import React, { useEffect , useState } from "react";
import * as styles from './slideShow.module.css';

import FlipCard from "../cards/flipCarts";

import Arr from '../../assets/gen-icons/arrow.svg'

const dummmy = [
    { front: 1.9 , back: 1.2 , img:'/lol'},
    { front: 2.1 , back: 2.2 , img:'/lol'},
    { front: 3.1 , back: 3.2 , img:'/lol'},
    // { front: 4.1 , back: 4.2 , img:'/lol'},
    // { front: 5.1 , back: 5.2 , img:'/lol'},
    // { front: 6.1 , back: 6.2 , img:'/lol'},
];

const SlideShow = ({ data }) => {

    const [list , setList ] = useState(dummmy);

    // useEffect(()=>{
    //     setInterval(switchNext, 3000 );
    //     return () => {
    //         clearInterval(switchNext);
    //     }
    // },[]);

    const switchNext = () => {
        const newList = list;
        newList.unshift(list[list.length -1]);
        newList.pop();
        console.log(newList);
        // dummy = 
        setList(newList);
    };

    const switchPrev = () => {
        console.log('switching');

        // dummy = 
    };

    return (
        <div className={styles.slider}>
            
            <button onClick={switchNext}>
                <Arr className={styles.slideBtn} /> N
            </button>

            <button onClick={switchPrev}>
                <Arr className={styles.slideBtn} /> L
            </button>

            {list.map( it => <div className={styles.cardContainer} key={it.front}> 
                <FlipCard info={it} /> 
            </div>)}

        </div>
    );
};

export default SlideShow;