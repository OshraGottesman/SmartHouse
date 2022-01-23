import React,{useState} from 'react'

export default function AddItem(props) {
    //hooks
    const [item, setitem] = useState({})

    //functions
    const addItem = ()=>{
        if(item.name.length>0){
            if(props.room.items.length==5){
                alert("you can have up to 5 items in each room")
            }
            else{
                if (item.name == "Stereo"){
                    let temp = props.room.items.filter((i)=> i.name == "Stereo");
                    if(temp.length>0){
                        alert("You can only have 1 stereo");
                    }
                    else{
                        props.updateItems(props.room.name, item); 
                    }
                }else if(item.name == "Water Heater"){
                    if(props.room.type != "bathroom"){
                        alert("Water Heaters are for the Bathroom only")
                    }
                    else{
                        props.updateItems(props.room.name, item); 
                    }
                }
                else{
                    props.updateItems(props.room.name, item); 
                }
            }
        }
        props.changeFlag();
    }
    return (
        <div>
            <select className='itemOptions' onChange={e=>setitem({name:e.target.value, backgroundColor:{backgroundColor:"red"}})} name="items" id="items">
                <option value="">Choose Item</option>
                <option value="Air Conditioner">Air Conditioner</option>
                <option value="Water Heater"> Water Heater</option>
                <option value="Stereo">Stereo</option>
                <option value="Light">Light</option>
            </select>
            <button className='addRoomButton' onClick={()=>{addItem()}}>Add Item</button>
        </div>
    )
}
