import {faker} from "@faker-js/faker";

export const getContact =()=>({
    "contacts": [],
    "image": faker.image.avatar(),
    "email": faker.internet.email(),
    "name": faker.name.findName(),
    "lastSeen": faker.date.recent().toDateString(),
    "id": faker.datatype.uuid(),
})


export const generateManyContacts = (count)=>{
    const contacts = [];
    for(let i=0; i<count; i++){
        contacts.push(getContact());
    }
    return contacts;
}
