import Header from '~/component/Layout/components/Header';
function UploadLayout({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
}

export default UploadLayout;
