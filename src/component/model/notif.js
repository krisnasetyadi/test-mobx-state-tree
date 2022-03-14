
import { types } from "mobx-state-tree";

const NoteData = types
.model("Note",{
    notif:types.string,
    
})
.actions(self=>({
    setNotif(newNotif){
        self.notif = newNotif
    }
}))

export default NoteData