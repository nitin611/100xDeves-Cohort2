
// similar to useState define single atom that will store counter information.
// we have key  and default in the atom , the key should be different for different atoms here we have 1 atom ,
// name the key as atom , i will do or you can keep any key just it should not be same as other key.

import {atom} from "recoil"

export const countAtom=atom({
    key:"countAtome",
    default:0
});


// now my main app.jsx no longer need  state we have exported count from here .
// similarly we can create multiple atoms as we can create multiple state depending on the needs