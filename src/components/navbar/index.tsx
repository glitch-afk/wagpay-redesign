import React from 'react';

const index = () => {
  return (
    <nav className="flex items-center justify-between py-4">
      <div className="text-xl font-extrabold">WAGPAY</div>
      <div className="flex items-center space-x-4">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22.8534C12.42 22.8437 12.823 22.6858 13.1378 22.4077C13.4525 22.1295 13.6588 21.749 13.72 21.3334H10.2134C10.2764 21.7602 10.4923 22.1497 10.8209 22.4293C11.1496 22.7089 11.5686 22.8596 12 22.8534V22.8534Z"
            fill="url(#paint0_linear_311_2753)"
          />
          <path
            d="M21.9001 18.7533L21.6734 18.5534C21.0304 17.9804 20.4676 17.3234 20.0001 16.6C19.4896 15.6017 19.1836 14.5115 19.1001 13.3934V10.1C19.0974 9.69998 19.0617 9.30085 18.9934 8.90668C17.8642 8.67457 16.8498 8.05936 16.1221 7.1652C15.3944 6.27104 14.998 5.15288 15.0001 4.00002V3.58002C14.3041 3.23748 13.5562 3.01222 12.7868 2.91335V2.07335C12.7868 1.83731 12.693 1.61093 12.5261 1.44402C12.3592 1.27712 12.1328 1.18335 11.8968 1.18335C11.6607 1.18335 11.4344 1.27712 11.2675 1.44402C11.1005 1.61093 11.0068 1.83731 11.0068 2.07335V2.94668C9.28393 3.18972 7.70716 4.04785 6.56759 5.36264C5.42803 6.67743 4.8026 8.36011 4.80678 10.1V13.3934C4.72328 14.5115 4.4173 15.6017 3.90678 16.6C3.44737 17.3216 2.89358 17.9785 2.26011 18.5534L2.03345 18.7533V20.6334H21.9001V18.7533Z"
            fill="url(#paint1_linear_311_2753)"
          />
          <path
            d="M20.0001 7.33329C21.841 7.33329 23.3334 5.84091 23.3334 3.99996C23.3334 2.15901 21.841 0.666626 20.0001 0.666626C18.1591 0.666626 16.6667 2.15901 16.6667 3.99996C16.6667 5.84091 18.1591 7.33329 20.0001 7.33329Z"
            fill="#EE0000"
          />
          <defs>
            <linearGradient
              id="paint0_linear_311_2753"
              x1="11.9667"
              y1="21.3334"
              x2="11.9667"
              y2="22.8536"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_311_2753"
              x1="22.0001"
              y1="26"
              x2="3.50012"
              y2="-6.99997"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <button className="flex items-center space-x-2 rounded-md bg-wagpayPurple px-4 py-2">
          <svg
            width="17"
            height="18"
            viewBox="0 0 17 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.6719 14.5312C16.181 14.5312 16.5938 14.944 16.5938 15.4531C16.5938 15.9421 16.3995 16.4111 16.0537 16.7569C15.708 17.1026 15.239 17.2969 14.75 17.2969H1.84375C0.820469 17.2969 0 16.4672 0 15.4531V2.54688C0 2.05788 0.194252 1.58892 0.540022 1.24315C0.885792 0.897377 1.35476 0.703125 1.84375 0.703125H14.75C15.239 0.703125 15.708 0.897377 16.0537 1.24315C16.3995 1.58892 16.5938 2.05788 16.5938 2.54688C16.5938 3.05601 16.181 3.46875 15.6719 3.46875H8.29688C7.27359 3.46875 6.45312 4.29844 6.45312 5.3125V12.6875C6.45312 13.1765 6.64738 13.6455 6.99315 13.9912C7.33892 14.337 7.80788 14.5312 8.29688 14.5312H15.6719ZM8.29688 10.6875C8.29688 11.7921 9.19231 12.6875 10.2969 12.6875H14.5938C15.6983 12.6875 16.5938 11.7921 16.5938 10.6875V7.3125C16.5938 6.20793 15.6983 5.3125 14.5938 5.3125H10.2969C9.19231 5.3125 8.29688 6.20793 8.29688 7.3125V10.6875ZM11.9844 10.3828C11.6176 10.3828 11.2659 10.2371 11.0066 9.9778C10.7473 9.71847 10.6016 9.36674 10.6016 9C10.6016 8.63326 10.7473 8.28153 11.0066 8.0222C11.2659 7.76288 11.6176 7.61719 11.9844 7.61719C12.3511 7.61719 12.7028 7.76288 12.9622 8.0222C13.2215 8.28153 13.3672 8.63326 13.3672 9C13.3672 9.36674 13.2215 9.71847 12.9622 9.9778C12.7028 10.2371 12.3511 10.3828 11.9844 10.3828Z"
              fill="url(#paint0_linear_311_2760)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_311_2760"
                x1="9.21875"
                y1="17.2969"
                x2="4.94532e-07"
                y2="0.703125"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D2D6EF" />
                <stop offset="1" stopColor="#9299C2" />
              </linearGradient>
            </defs>
          </svg>

          <span className="wagpay-gradient font-semibold">Connect Wallet</span>
        </button>
      </div>
    </nav>
  );
};

export default index;