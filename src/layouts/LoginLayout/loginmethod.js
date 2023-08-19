import {
  FacebookIcons,
  GoogleIcons,
  InstagramIcons,
  KkaoTalkIcons,
  QrCodeIcons,
  TwiterIcons,
  UserIcons,
} from '~/layouts/components/UploadIcons';
const loginMethods = [
  {
    icon: <QrCodeIcons width={'2rem'} height="2rem"></QrCodeIcons>,
    text: 'Sử dụng mã QR',
    disable: true,
  },
  {
    icon: <UserIcons width={'2rem'} height="2rem"></UserIcons>,
    text: 'Số điện thoại / Email / TikTokID',
    disable: false,
  },
  {
    icon: <FacebookIcons width={'2rem'} height="2rem"></FacebookIcons>,
    text: 'Tiếp tục với Facebook',
    disable: true,
  },
  {
    icon: <GoogleIcons width={'2rem'} height="2rem"></GoogleIcons>,
    text: 'Tiếp tục với Google',
    disable: true,
  },
  {
    icon: <TwiterIcons width={'2rem'} height="2rem"></TwiterIcons>,
    text: 'Tiếp tục với Twitter',
    disable: true,
  },
  {
    icon: <KkaoTalkIcons width={'2rem'} height="2rem"></KkaoTalkIcons>,
    text: 'Tiếp tục với KakaoTalk',
    disable: true,
  },
  {
    icon: <InstagramIcons width={'2rem'} height="2rem"></InstagramIcons>,
    text: 'Tiếp tục với Instagram',
    disable: true,
  },
];
export { loginMethods };
