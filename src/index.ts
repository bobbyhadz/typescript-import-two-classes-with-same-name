import { Employee } from './another-file-1';

// 👇️ rename to Employee2
import { Employee as Employee2 } from './another-file-2';

const emp1 = new Employee(100, 'design');
console.log(emp1);

const emp2 = new Employee2(1, 'James Doe');
console.log(emp2);