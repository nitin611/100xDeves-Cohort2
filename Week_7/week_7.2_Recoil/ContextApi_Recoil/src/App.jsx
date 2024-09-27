import { RecoilRoot,useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { countAtom } from './store/atoms/count'; // Import your atom

function App() {
  return (
    <div>
      <RecoilRoot>
      <Count />
      </RecoilRoot>
     
    </div>
  );
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}

function CountRenderer() {
  // Only reading the value of count from the atom
  const count = useRecoilValue(countAtom);

  return (
    <div>
      <b>{count}</b>
      <Evencounter/>
    </div>
  );
}

function Evencounter(){

  const count = useRecoilValue(countAtom);
  return <div>
    {(count%2==0)?"it is even":null}
  </div>
  
}

function Buttons() {
  // Reading and writing the count value using useRecoilState
  const setCount = useSetRecoilState(countAtom);
  // we can also get rid of count and buttons will not rerender that is recoil for you- thats why its better
  // then contextApi.
  
  return (
    <div>
      {/* by this updated syntax we get rid of count */}
      <button onClick={()=>{
        setCount(count=>count+1)
      }}>Increase</button>
      <button onClick={() => {
        setCount(count=>count-1)
      }}>Decrease</button>
    </div>
  );
}

export default App;
