import RootLayout from "@/components/layouts/RootLayout";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-4xl font-bold">Please Login now!</h1>

            <div className="form-control mt-6">
              <div className="github-btn my-2">
                <button
                  className="bg-black text-white rounded-lg px-4 py-3 shadow-md flex items-center space-x-2 hover:bg-gray-800 focus:outline-none w-full"
                  onClick={() => signIn("github", { callbackUrl: "/" })}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 0C4.477 0 0 4.477 0 10c0 4.418 2.865 8.167 6.839 9.486.5.093.682-.218.682-.485 0-.24-.01-1.047-.015-1.902-2.782.603-3.369-1.342-3.369-1.342-.455-1.163-1.11-1.473-1.11-1.473-.909-.621.069-.609.069-.609 1.005.07 1.532 1.03 1.532 1.03.892 1.531 2.341 1.089 2.914.832.092-.645.351-1.085.637-1.334-2.22-.252-4.556-1.11-4.556-4.943 0-1.093.39-1.984 1.032-2.682-.103-.253-.446-1.271.097-2.648 0 0 .84-.269 2.75 1.025A9.565 9.565 0 0 1 10 3.504c.854.003 1.713.114 2.52.337 1.91-1.293 2.748-1.025 2.748-1.025.545 1.377.202 2.394.1 2.648.642.698 1.03 1.589 1.03 2.682 0 3.844-2.338 4.688-4.565 4.935.359.309.68.918.68 1.85 0 1.335-.013 2.413-.013 2.739 0 .27.18.581.686.484C17.137 18.165 20 14.418 20 10c0-5.523-4.477-10-10-10"
                    ></path>
                  </svg>
                  <span>Sign in with GitHub</span>
                </button>
              </div>

              <div className="google-btn my-2">
                <button className="bg-red-600 text-white rounded-lg px-4 py-3 shadow-md flex items-center space-x-2 hover:bg-red-700 focus:outline-none w-full">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm6.79 10h-2.448c-.057-.35-.196-.687-.42-.975H12v-2.09h2.918c-.145-.683-.63-1.26-1.318-1.558v-.002h-.003c-1.008-.422-2.18-.195-2.976.604-.678.67-1.06 1.623-1.06 2.676v.003c0 .525.113 1.044.336 1.51.227.476.56.9.977 1.237H8.817v2.082h3.393c1.978 0 3.48-.41 4.473-1.353 1.066-.996 1.622-2.51 1.622-4.408v-.001c0-1.628-.68-3.075-1.77-4.116-1.275-1.246-2.98-1.934-4.855-1.934-1.06 0-2.04.352-2.827.986-.747.586-1.305 1.442-1.55 2.424v-.002H5.21v2.09h2.28c.373 1.423 1.408 2.514 2.84 2.84v2.343c-.903.425-1.724 1.002-2.36 1.718C6.686 17.605 6.22 18.661 6.22 20c0 1.078.84 1.96 1.908 2.062-.45.313-.97.526-1.53.623-1.923.3-3.79-.985-4.463-2.9-.58-1.923-.122-4.04 1.36-5.452 1.46-1.406 3.635-1.855 5.585-1.285 1.153.29 2.177.993 2.93 1.92.724.898 1.186 2.077 1.276 3.29v.002h-.003z" />
                  </svg>
                  <span>Sign in with Google</span>
                </button>
              </div>

              <div className="twitter-btn my-2">
                <button className="bg-blue-400 text-white rounded-lg px-4 py-2 shadow-md flex items-center space-x-2 hover:bg-blue-500 focus:outline-none w-full">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.48 5.41c-.83.36-1.71.61-2.63.72.95-.57 1.68-1.47 2.02-2.55-.88.52-1.86.9-2.9 1.11a4.57 4.57 0 0 0-7.8 4.16c-3.8-.2-7.17-2-9.43-4.77-.4.68-.63 1.47-.63 2.32a4.57 4.57 0 0 0 2.02 3.8c-.74-.02-1.44-.22-2.05-.55v.06c0 1.05.75 1.94 1.75 2.14a4.6 4.6 0 0 1-2.03.08c.58.92 1.6 1.54 2.76 1.56a9.14 9.14 0 0 1-5.67 1.96c-.37 0-.72-.02-1.08-.06 2.02 1.3 4.44 2.06 7.03 2.06 8.4 0 12.99-6.97 12.99-13.01 0-.2 0-.41-.01-.61.89-.64 1.68-1.46 2.3-2.38-.84.38-1.75.63-2.7.74 1-.59 1.76-1.52 2.13-2.62z"></path>
                  </svg>
                  <span>Sign in with Twitter</span>
                </button>
              </div>

              <div className="facebook-btn my-2">
                <button className="bg-blue-600 text-white rounded-lg px-4 py-2 shadow-md flex items-center space-x-2 hover:bg-blue-700 focus:outline-none w-full">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 2H2C.895 2 0 2.895 0 4v16c0 1.105.895 2 2 2h12v-7h-3v-3h3V9.355C15 6.355 16.65 5 19.535 5c1.195 0 2.23.09 2.525.13v3h-1.715c-1.36 0-1.635.645-1.635 1.605v2H22c1.105 0 2-.895 2-2V4c0-1.105-.895-2-2-2z"></path>
                  </svg>
                  <span>Sign in with Facebook</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

LoginPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
