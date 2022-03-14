 import {types} from 'mobx-state-tree';
const UserData = types.model("UserData",{
    username:types.string,
    userPass:types.string,
    loginState:false,
})
.actions(self=>({
    setUser(newUser){
        self.username = newUser;
    },
    setPass(newPass){
        self.userPass = newPass;
    },
    loggedIn(){
        self.loginState = true;
    },
    loggedOut(){
        self.loginState = false;
    },
    addNote(item){
        self.noteData.push({item,
            textNote:'',
            title:''
        })
    }
}))


export default UserData;