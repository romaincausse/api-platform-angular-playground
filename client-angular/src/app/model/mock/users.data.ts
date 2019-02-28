import { User, Role } from '../User';

export const usersList = [
    new User(1, "toto@gmail.com", "toto", [Role.ADMIN, Role.USER]),
    new User(2, "toto2@gmail.com", "toto3", [Role.ADMIN, Role.USER]),
    new User(3, "toto3@gmail.com", "toto4", [Role.ADMIN, Role.USER]),
    new User(4, "toto4@gmail.com", "toto5", [Role.ADMIN, Role.USER]),
    new User(5, "toto5@gmail.com", "toto6", [Role.USER]),
]

    
