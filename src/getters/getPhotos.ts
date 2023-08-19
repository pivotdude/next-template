import getData from '@/getters/getData';
import IPhotos from '@/models/IPhotos';

export default async function getPhotos(): Promise<IPhotos> {
  return await getData<IPhotos>('/photos');
}
