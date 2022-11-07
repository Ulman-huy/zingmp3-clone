import { Routes, Route } from 'react-router-dom'
import Individual from '../individual/Individual'
import Discovery from '../discovery/Discovery'
import ZingChart from '../zingchart/ZingChart'
import Radio from '../radio/Radio'
import Follow from '../follow/Follow'
import News from '../news/News'
import Category from '../category/Category'
import Top from '../top/Top'
import MV from '../mv/MV'
import Search from '../search/Search'
import Blocked from '../blocked/Blocked'

function Router() {
    return (
        <Routes>
            <Route path='/mymusic' element={<Individual />}/>
            <Route path='/' element={<Discovery />}/>
            <Route path='/zing-chart' element={<ZingChart />}/>
            <Route path='/radio' element={<Radio />}/>
            <Route path='/the-loai-nghe-si' element={<Follow />}/>
            <Route path='/moi-phat-hanh' element={<News />}/>
            <Route path='/hub' element={<Category />}/>
            <Route path='/top100' element={<Top />}/>
            <Route path='/the-loai-video' element={<MV />}/>
            <Route path='/tim-kiem' element={<Search />}/>
            <Route path='/mymusic/blocked' element={<Blocked />}/>
        </Routes>
    )
}

export default Router