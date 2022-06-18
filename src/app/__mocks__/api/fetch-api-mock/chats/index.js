import { faker } from "@faker-js/faker";

export const getChat = () =>({
    createdAt: faker.date.recent().toDateString(),
    id: faker.datatype.uuid(),
    messages: [{
            message: faker.lorem.sentence(),
            sender: faker.datatype.uuid(),
            time: faker.date.recent().toDateString(),
    }],
    participants: [
        faker.datatype.uuid(),
        faker.datatype.uuid(),
    ]
});

export const generateManyChats = (count) => {
    const messages = [];
    for (let i = 0; i < count; i++) {
        messages.push(getChat());
    }
    return messages;
}