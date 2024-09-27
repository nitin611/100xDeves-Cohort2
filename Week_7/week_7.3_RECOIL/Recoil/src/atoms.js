import {atom} from "recoil"


export const networkAtom=atom({
    key:"networkAtom",
    default:100
});

export const jobsAtom=atom({
    key:"jobsAtom",
    default:0
});
export const notificationAtom=atom({
    key:"notificationAtom",
    default:20
});
export const messagingAtom=atom({
    key:"messagingAtom",
    default:0
});

// -----------------------SELECTORS--------------------------------------
export const totalNotificationSelector=selector({
    key:"totalNotificationSelector",
    get:({})=>{
        const networkAtomCount=get(networkAtom)
        const jobsAtomCount=get(jobsAtom)
        const notificationAtomCount=get(notificationAtom)
        const messagingAtomCount=get(messagingAtom)

        return networkAtomCount+jobsAtomCount+notificationAtomCount+messagingAtomCount;
    }
})