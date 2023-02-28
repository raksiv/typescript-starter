import { api, bucket } from '@nitric/sdk';

const photoApi = api('photos');
const photoBucket = bucket('myPhotos').for('reading');


photoApi.get('/photos/:name', async (ctx) => {
   const { name } = ctx.req.params;
   ctx.res.body = photoBucket.file(name).getDownloadUrl();
});
