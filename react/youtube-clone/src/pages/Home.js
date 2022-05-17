// src/pages/Home.js
import styles from './Home.module.css';
import Layout from '../components/shared/Layout';
import youtubeData from '../data/youtubeData.json';
import HomeFilter from '../components/home/HomeFilter';
import HomeCard from '../components/home/HomeCard';
import { useState } from 'react';

const target = ['전체', 'Music', 'Entertainment', 'Comedy'];
// const target_words = ['전체', 'BTS', 'LISA', '아이폰'];

function Home() {
    // function filterFunc(data) {
    //     return data < 5;
    // }

    const [filter, setFilter] = useState('전체');
    function mapFunc(data, index) {
        return (
            <HomeFilter
                filter={filter}
                text={data}
                onClickFilter={function () {
                    setFilter(data);
                }}
                key={`home-filter-${index}`}
            />
        );
    }
    function filterFunc(data) {
        if (filter === '전체' || data.category === filter) return true;
        return false;
    }

    // const [filterWords, setFilterWords] = useState('전체');
    // function mapFuncWords(data, index) {
    //     return (
    //         <HomeFilter
    //             filter={filterWords}
    //             text={data}
    //             onClickFilter={function () {
    //                 setFilterWords(data);
    //             }}
    //             key={`home-filter-${index}`}
    //         />
    //     );
    // }
    // function filterFuncWords(data) {
    //     let target_data = data.title;
    //     if (filterWords === '전체' || target_data.includes(filterWords)) return true;
    //     return false;
    // }

    return (
        <Layout activeMenu="home">
            {/* <div>{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(filterFunc)}</div> */}

            {/* <div className={styles.header}>
                <HomeFilter
                    filter="전체"
                    text="전체"
                    onClickFilter={function () {
                        console.log('전체');
                    }}
                />
                <HomeFilter
                    filter="전체"
                    text="음악"
                    onClickFilter={function () {
                        console.log('음악');
                    }}
                />
            </div> */}

            <div className={styles.header}>{target.map(mapFunc)}</div>
            {/* <div className={styles.header}>{target_words.map(mapFuncWords)}</div> */}

            <div className={styles.container}>
                {/* <div className={styles.grid}>{youtubeData['data'].map(HomeCard)}</div> */}
                <div className={styles.grid}>
                    {youtubeData['data'].filter(filterFunc).map(HomeCard)}
                    {/* {youtubeData['data'].filter(filterFuncWords).map(HomeCard)} */}
                </div>
            </div>
        </Layout>
    );
}

export default Home;