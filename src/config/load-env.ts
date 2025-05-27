import * as path from 'path';
import * as dotenv from 'dotenv';

export function loadEnv() {
  dotenv.config({ path: path.resolve(__dirname, '../../.env') });
}
