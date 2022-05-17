// src/pages/Subscription.js
import Layout from '../components/shared/Layout';
import 'moment/locale/ko';
import moment from 'moment';

function Subscription() {
    console.log('moment : ', moment());
    console.log('년 : ', moment().year());
    console.log('월 : ', moment().month() + 1);
    console.log('일 : ', moment().date());
    console.log('시 : ', moment().hour());
    console.log('분 : ', moment().minute());
    console.log('초 : ', moment().second());

    const time1 = moment('2021-09-10T08:00:33');
    const time2 = moment('2022-05-16T08:00:33');
    const time3 = moment('2022-05-17T09:50:33');
    console.log('time1과의 차이 : ', time1.fromNow());
    console.log('time2과의 차이 : ', time2.fromNow());
    console.log('time3과의 차이 : ', time3.fromNow());
    return (
        <Layout activeMenu="subscription">
            <div>* 구독</div>
            <div>* 구독</div>
            <div>* 구독</div>
            <div>* 구독</div>
            <div>* 구독</div>
            <div>* 구독</div>
            <div>* 구독</div>
            <div>* 구독</div>
            <div>* 구독</div>
            <div>* 구독</div>
            
            <div>* 구독</div>
            <div>* 구독</div>
            <div>* 구독</div>
            <div>* 구독</div>
            <div>* 구독</div>
            <div>* 구독</div>
            <div>* 구독</div>
            <div>* 구독</div>
            <div>* 구독</div>
            <div>* 구독</div>
            
            <div>* 구독</div>
            <div>* 구독</div>
            <div>* 구독</div>
            <div>* 구독</div>
            <div>* 구독</div>
            <div>* 구독</div>
            <div>* 구독</div>
            <div>* 구독</div>
            <div>* 구독</div>
            <div>* 구독</div>
            
            <div>* 구독</div>
            <div>* 구독</div>
            <div>* 구독</div>
            <div>* 구독</div>
            <div>* 구독</div>
            <div>* 구독</div>
            <div>* 구독</div>
            <div>* 구독</div>
            <div>* 구독</div>
            <div>* 구독</div>
        </Layout>
    );
}

export default Subscription;