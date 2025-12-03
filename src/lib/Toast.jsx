import { createPortal } from 'react-dom';
import { ToastContainer } from 'react-toastify';

export default function Toast() {
  return createPortal(
    <ToastContainer
      pauseOnHover
      closeOnClick
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={true}
      pauseOnFocusLoss={false}
      rtl={false}
      position="bottom-center"
      theme="colored"
    />,
    document.body,
  );
}
