import Home from '~/pages/Home/Home';
import Following from '~/pages/Following/Following';
import Profile from '~/pages/Profile/Profile';
import Upload from '~/pages/Upload/Upload';
import UploadLayout from '~/component/Layout/UploadLayout';
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/profile', component: Profile },
  { path: '/upload', component: Upload, layout: UploadLayout },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
