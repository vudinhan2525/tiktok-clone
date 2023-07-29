import Header from '~/component/Layout/DefaultLayout/Header';
function UploadLayout({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
}

export default UploadLayout;
