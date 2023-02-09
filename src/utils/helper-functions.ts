import { randomBytes, scrypt, randomUUID} from 'crypto';
import { promisify } from 'util';


export const promisifiedScrypt = promisify(scrypt);