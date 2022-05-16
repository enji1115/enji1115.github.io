// src/App.js
import './App.css';
import youtubeData from './data/youtubeData.json';

function App() {
  console.log('youtubeData : ', youtubeData);
  console.log('youtubeData[data]', youtubeData['data']);
  console.log('youtubeData[data][0]', youtubeData['data'][0]);
  console.log('youtubeData[data][0]', youtubeData['data'][0].title);

  // Quiz
  const quiz_obj = youtubeData['data'][0];
  let quiz_console = ``;
  for(const value in quiz_obj){
    quiz_console = `${value}: ${quiz_obj[value]}`;
    switch (value) {
      case 'id':
        quiz_console += ' -> 영상의 링크 주소'
        break;
        
      case 'title':
        quiz_console += ' -> 영상의 제목'
        break;
        
      case 'channelId':
        quiz_console += ' -> 영상의 채널 주소'
        break;
        
      case 'date':
        quiz_console += ' -> 영상의 날짜'
        break;
        
      case 'thumbnail':
        quiz_console += ' -> 영상의 썸네일 이미지'
        break;
        
      case 'description':
        quiz_console += ' -> 영상의 설명'
        break;
        
      case 'channelTitle':
        quiz_console += ' -> 영상의 채널명'
        break;
        
      case 'category':
        quiz_console += ' -> 영상의 카테고리'
        break;
        
      case 'viewCount':
        quiz_console += ' -> 영상의 재생수'
        break;
        
      case 'likeCount':
        quiz_console += ' -> 영상의 좋아요수'
        break;
        
      case 'channelUrl':
        quiz_console += ' -> 영상의 채널 주소'
        break;
        
      case 'channelThumbnail':
        quiz_console += ' -> 영상의 채널 썸네일'
        break;
    
      default:
        break;
    }
    console.log(quiz_console);
  }

  return <div>리액트로 데이터 불러오기</div>;
}

export default App;