import React, { useEffect , useRef } from "react";
import * as styles from './slideShow.module.css';
import FlipCard from "../cards/flipCarts";


const dummmy = [
    { front: 1.1 , back: 1.2 , img:'/lol'},
    { front: 2.1 , back: 2.2 , img:'/lol'},
    { front: 3.1 , back: 3.2 , img:'/lol'},
    // { front: 4.1 , back: 4.2 , img:'/lol'},
    // { front: 5.1 , back: 5.2 , img:'/lol'},
    // { front: 6.1 , back: 6.2 , img:'/lol'},
];

const SlideShow = ({ data }) => {

    const list = useRef(dummmy);

    useEffect(()=>{
        setInterval(switchNext, 3000 );
        return () => {
            clearInterval(switchNext);
        }
    },[]);

    const switchNext = () => {
        console.log('switching');
        // dummy = 
    };

    return (
        <div className={styles.slider}>
            {list.current.map( it => <div className={styles.cardContainer} key={it.front}> 
                <FlipCard info={it} /> 
            </div>)}
        </div>
    );
};

export default SlideShow;