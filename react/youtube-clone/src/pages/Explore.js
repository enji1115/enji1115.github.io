// src/pages/Explore.js
import Layout from '../components/shared/Layout';
import ContentsLayout from '../components/shared/ContentsLayout';
import youtubeData from '../data/youtubeData.json';
import HorizontalCard from '../components/shared/HorizontalCard';

function Explore() {
    // function mapFuncion(data, index) {
    //     return (
    //         <div>
    //             {index}: {data}
    //         </div>
    //     );
    // }

    // function HorizontalCard(data, index) {
    //     return (
    //         <div key={`explore-card-${index}`}>
    //             {/* key 속성은 리턴되는 JSX의 최상단 태그에 부여 */}
    //             <div>{index}.</div>
    //             <div>제목 : {data.title}</div>
    //             <div>업로더 : {data.channelTitle}</div>
    //             <br />
    //         </div>
    //     );
    // }

    return (
        <Layout activeMenu="explore">
            {/* <div className={styles.container}>* 탐색</div> */}
            <ContentsLayout>
                {/* {['모각코', '리액트', '유튜브', '클론코딩'].map(mapFuncion)}
                <br/>
                {mapFuncion('모각코', 0)}
                {mapFuncion('리액트', 1)}
                {mapFuncion('유튜브', 2)}
                {mapFuncion('클론코딩', 3)}
                <br/> */}

                {/* {youtubeData['data'].map(HorizontalCard)} */}
                
                {youtubeData['data'].map(function (data, index) {
                    return <HorizontalCard key={`explore-card-${index}`} data={data} />;
                })}
            </ContentsLayout>
        </Layout>
    );
}

export default Explore;