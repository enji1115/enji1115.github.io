// src/App.js
import { Route, Routes } from 'react-router-dom';
// Routes 컴포넌트는 Route 컴포넌트를 묶어주는 컴포넌트
// Route 컴포넌트는 링크를 생성하는 컴포넌트
//  ㄴ> 주솟값이 변경되었을 때, 작성한 Route 컴포넌트 중 주솟값과 path 속성이 겹치는 컴포넌트를 렌더링
import Home from './pages/Home';
import Explore from './pages/Explore';
import Subscription from './pages/Subscription';
import Assignment from './pages/Assignment';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/subscription" element={<Subscription />} />
      <Route path="/assignment" element={<Assignment />} />
    </Routes>
  );
}

export default App;