import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate(); // 경로 변경
  const [searchParams, setSearchParams] = useSearchParams(); // setSearchParams는 searchParams(queryString)를 변경
  
  const id = searchParams.get('id');
  const mode = searchParams.get('mode');

  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 수정 페이지 입니다.</p>
      <button onClick={()=>setSearchParams({who:'chaerim'})}>
        QS 바꾸기
      </button>
      <button onClick={()=>{navigate('/home')}}>
        Home으로 가기
      </button>
      <button onClick={()=>navigate(-1)}>뒤로가기</button>
    </div>
  )
}

export default Edit;