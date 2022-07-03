import {faker} from "@faker-js/faker";

const LoginFetch=()=>({
    contacts: [{id: faker.datatype.uuid(), name:faker.name.findName()}],
    email: faker.internet.email(),
    id: faker.datatype.uuid(),
    image: faker.image.avatar(),
    lastSeen: faker.date.recent().toString(),
    name: faker.name.findName()
})

export default LoginFetch;