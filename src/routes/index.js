import { Home, Following, Profile, Upload } from '~/pages';
import UploadLayout from '~/layouts/UploadLayout';
import routes from '~/config/routes.js';
const publicRoutes = [
  { path: routes.home, component: Home },
  { path: routes.following, component: Following },
  { path: routes.profile, component: Profile },
  { path: routes.upload, component: Upload, layout: UploadLayout },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
