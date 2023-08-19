import getData from '@/core/getData';
import { IPhoto } from '@/models/Entities';

export default async function Page() {
  const photos = await getData<IPhoto[]>('/photos');
  console.log('server-photo', photos);
  return (
    <>
      {photos.map((photo) => (
        <img alt={photo.title} width={200} height={200} key={photo.id} src={photo.thumbnailUrl} />
      ))}
    </>
  );
}
