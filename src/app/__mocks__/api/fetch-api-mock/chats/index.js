import { faker } from "@faker-js/faker";

const getMessage = () => ({
    message: faker.lorem.sentence(),
    read: faker.datatype.boolean(),
    sender: {
        id: faker.datatype.uuid(),
        image: faker.image.imageUrl(),
        name: faker.name.findName()
    },
    time: faker.date.recent().toDateString(),
})

export const getChat = () =>({
    id: faker.datatype.uuid(),
    user: {
        id: faker.datatype.uuid(),
        image: faker.image.imageUrl(),
        name: faker.name.findName(),
    },
    notRead: faker.datatype.number(),
    lastMessage: getMessage(),
})

export const generateManyChats = (count) => {
    const chats = [];
    for (let i = 0; i < count; i++) {
        chats.push(getChat());
    }
    return chats;
}

export const generateManyMessage = (count) => {
    const messages = [];
    for(let i=0; i< count; i++) {
        messages.push(getMessage())
    }

    return [{
        tag: faker.date.weekday(),
        messages
    }]
}