import { Home, Following, Profile, Upload } from '~/pages';
import UploadLayout from '~/component/Layout/UploadLayout';
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/profile', component: Profile },
  { path: '/upload', component: Upload, layout: UploadLayout },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
