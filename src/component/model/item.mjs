import { types } from "mobx-state-tree";

const Items = types.model('Items',{
    id: types.optional(types.number, 0),
    textNote:types.optional(types.string, ""),
})
.actions(self=>({
    changeText(newText){
        self.textNote=newText;
    },
    addNote(item){
        self.Items.push(item);
    },
    countId(newId){
        self.id=newId
    },
    // setId(set){
    //     self.id=set(Math.floor(Math.random(1)*10000));
    // },
    itemEdit(){
        self.textNote = true;
    },
    itemEditFalse(){
        self.textNote = false;
    }
}))
// const Items = types.model({
//     item:types.optional(types.array(data),[])
// })
// .actions(self=>({
//     add(item){
//         self.item.push(item)
//     }
// }))

export default Items;