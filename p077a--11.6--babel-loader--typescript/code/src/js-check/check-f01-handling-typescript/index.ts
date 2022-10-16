import Student from './class-student';
import {greeter} from './class-student';

const user = new Student("Jane", "M.", "User");
const message = greeter(user);

console.log('typescript works: ', (message == 'Hello, Jane User'));

