import 'server-only';
import { BACKEND_URL } from '@/constants/proccess';

export default async function getData<T>(url: string): Promise<T> {
  const response: Response = await fetch(BACKEND_URL + url);
  const data: T = await response.json();
  return data as T;
}
