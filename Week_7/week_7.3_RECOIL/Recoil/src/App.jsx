
import { useRecoilState, useRecoilValue } from "recoil"
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from "./atoms"
import { RecoilRoot } from "recoil"
import { useMemo } from "react"
function App() {

  return <RecoilRoot>
    <MainApp/>
    </RecoilRoot>
}

function MainApp(){
  const networkNotificationCount=useRecoilValue(networkAtom)
  const jobsAtomCount=useRecoilValue(jobsAtom)
  const notificationAtomCount=useRecoilValue(notificationAtom)
  const [messagingAtomCount,setMessagingAtomCount]=useRecoilState(messagingAtom)

  // now we need total count of the notification we can get it by-
  // optimize this by using useMemo-
  // const totalNotificationCount=useMemo(()=>{
  //     return networkNotificationCount+jobsAtomCount+notificationAtomCount+messagingAtomCount;
  // },[networkNotificationCount+jobsAtomCount+notificationAtomCount+messagingAtomCount])

//  with-------------------------------- selectors----------------------------------------------
    const totalNotificationCount=useRecoilValue(totalNotificationSelector)

  return (
 <>
    <button>Home</button>
    {/* this is if else sugger cotated syntax */}
    <button>My Network({networkNotificationCount >=100 ? "99+" : networkNotificationCount})</button>
    <button>jobs({jobsAtomCount})</button>
    <button>Messaging({messagingAtomCount})</button>
    <button>Notifications({notificationAtomCount})</button>


    <button onClick={()=>{
      setMessagingAtomCount(messagingAtomCount+1)
    }}>Me({totalNotificationCount})</button>
 
 </>
  )
}



export default App
