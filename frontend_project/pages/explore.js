import Image from "next/image"
import Head from "next/head"
import styles from "@/styles/Explore.module.css"
import SearchItem from "@/components/SearchItem"
export default function Explore (){
    return (
        <div className={styles.explore_container}>
            <Head>
                <title>Explore | Phiraphat</title>
            </Head>
            {/* information */}
            <div className={styles.search_container}>
                <input type="text" placeholder="Search city , Country, Place for Travel advisory" />

                <div>
                    <h3>
                        What Are You Looking For? 
                    </h3>
                    <div>
                        <button>
                            <div>
                                <svg width="37" height="24" viewBox="0 0 37 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.236 10.8H16.436V12.0001H15.236V10.8Z" fill="white"/>
                                    <path d="M17.636 10.8H18.836V12.0001H17.636V10.8Z" fill="white"/>
                                    <path d="M20.0359 10.8H21.236V12.0001H20.0359V10.8Z" fill="white"/>
                                    <path d="M15.236 13.2H16.436V14.4H15.236V13.2Z" fill="white"/>
                                    <path d="M17.636 13.2H18.836V14.4H17.636V13.2Z" fill="white"/>
                                    <path d="M20.0359 13.2H21.236V14.4H20.0359V13.2Z" fill="white"/>
                                    <path d="M15.236 15.6H16.436V16.8H15.236V15.6Z" fill="white"/>
                                    <path d="M17.636 15.6H18.836V16.8H17.636V15.6Z" fill="white"/>
                                    <path d="M20.0359 15.6H21.236V16.8H20.0359V15.6Z" fill="white"/>
                                    <path d="M15.236 6H16.436V7.20001H15.236V6Z" fill="white"/>
                                    <path d="M17.636 6H18.836V7.20001H17.636V6Z" fill="white"/>
                                    <path d="M20.0359 6H21.236V7.20001H20.0359V6Z" fill="white"/>
                                    <path d="M15.236 8.40002H16.436V9.60004H15.236V8.40002Z" fill="white"/>
                                    <path d="M17.636 8.40002H18.836V9.60004H17.636V8.40002Z" fill="white"/>
                                    <path d="M20.0359 8.40002H21.236V9.60004H20.0359V8.40002Z" fill="white"/>
                                    <path d="M9.83594 8.40002H11.6359V9.60004H9.83594V8.40002Z" fill="white"/>
                                    <path d="M9.83594 11.4H11.6359V12.6H9.83594V11.4Z" fill="white"/>
                                    <path d="M9.83594 14.4H11.6359V15.6H9.83594V14.4Z" fill="white"/>
                                    <path d="M9.83594 17.4H11.6359V18.6H9.83594V17.4Z" fill="white"/>
                                    <path d="M33.836 16.2H32.636C31.9994 16.2 31.389 16.4529 30.9389 16.9029C30.4888 17.353 30.236 17.9635 30.236 18.6V19.836C29.8033 19.9051 29.3926 20.0735 29.036 20.328V17.4H27.836V20.4H23.636V6.60001H27.836V16.2H29.036V6C29.036 5.84087 28.9727 5.68825 28.8602 5.57573C28.7477 5.46321 28.5951 5.39999 28.436 5.39999H23.636V2.39999C23.636 2.24086 23.5727 2.08826 23.4602 1.97574C23.3477 1.86322 23.1951 1.8 23.036 1.8H21.236V0.600006C21.236 0.521213 21.2204 0.443187 21.1903 0.370392C21.1601 0.297596 21.1159 0.231451 21.0602 0.175735C21.0045 0.12002 20.9384 0.0758224 20.8656 0.0456696C20.7928 0.0155167 20.7148 0 20.636 0H15.836C15.6768 0 15.5242 0.0632136 15.4117 0.175735C15.2992 0.288257 15.236 0.440876 15.236 0.600006V1.8H13.436C13.2768 1.8 13.1242 1.86322 13.0117 1.97574C12.8992 2.08826 12.836 2.24086 12.836 2.39999V5.39999H8.03596C7.87683 5.39999 7.72422 5.46321 7.6117 5.57573C7.49918 5.68825 7.43596 5.84087 7.43596 6V9.60001H8.63596V6.60001H12.836V20.4H8.63596V10.8H7.43596V20.327C7.07935 20.0725 6.66861 19.9041 6.23596 19.835V18.6C6.23596 17.9635 5.98311 17.353 5.53302 16.9029C5.08293 16.4529 4.47248 16.2 3.83596 16.2H2.63596C1.99944 16.2 1.38899 16.4529 0.938906 16.9029C0.488818 17.353 0.235962 17.9635 0.235962 18.6V23.4C0.235962 23.5591 0.299176 23.7117 0.411697 23.8243C0.524219 23.9368 0.676832 24 0.835962 24H35.636C35.7951 24 35.9477 23.9368 36.0602 23.8243C36.1727 23.7117 36.236 23.5591 36.236 23.4V18.6C36.236 17.9635 35.9831 17.353 35.533 16.9029C35.0829 16.4529 34.4725 16.2 33.836 16.2ZM16.436 1.2H20.036V3.60001H16.436V1.2ZM1.43596 18.6C1.43596 18.2817 1.56239 17.9765 1.78743 17.7515C2.01248 17.5264 2.3177 17.4 2.63596 17.4H3.83596C4.15422 17.4 4.45945 17.5264 4.68449 17.7515C4.90953 17.9765 5.03596 18.2817 5.03596 18.6V19.836C4.36707 19.944 3.75839 20.2863 3.31871 20.8018C2.87904 21.3174 2.63703 21.9724 2.63596 22.65V22.8H1.43596V18.6ZM3.83596 22.8V22.65C3.83649 22.2125 4.0105 21.7932 4.31982 21.4839C4.62914 21.1745 5.04852 21.0005 5.48596 21H5.78596C6.22341 21.0005 6.64278 21.1745 6.9521 21.4839C7.26142 21.7932 7.43543 22.2125 7.43596 22.65V22.8H3.83596ZM8.63596 21.6H12.836V22.8H8.63596V21.6ZM14.036 3H15.236V4.2C15.236 4.35913 15.2992 4.51175 15.4117 4.62427C15.5242 4.73679 15.6768 4.8 15.836 4.8H20.636C20.7148 4.8 20.7928 4.78449 20.8656 4.75433C20.9384 4.72418 21.0045 4.67998 21.0602 4.62427C21.1159 4.56855 21.1601 4.50241 21.1903 4.42961C21.2204 4.35682 21.236 4.27879 21.236 4.2V3H22.436V22.8H20.636V18.6C20.636 18.4409 20.5727 18.2883 20.4602 18.1757C20.3477 18.0632 20.1951 18 20.036 18H16.436C16.2768 18 16.1242 18.0632 16.0117 18.1757C15.8992 18.2883 15.836 18.4409 15.836 18.6V22.8H14.036V3ZM17.036 22.8V19.2H19.436V22.8H17.036ZM23.636 21.6H27.836V22.8H23.636V21.6ZM29.036 22.8V22.65C29.0365 22.2125 29.2105 21.7932 29.5198 21.4839C29.8291 21.1745 30.2485 21.0005 30.686 21H30.986C31.4234 21.0005 31.8428 21.1745 32.1521 21.4839C32.4614 21.7932 32.6354 22.2125 32.636 22.65V22.8H29.036ZM35.036 22.8H33.836V22.65C33.8349 21.9724 33.5929 21.3174 33.1532 20.8018C32.7135 20.2863 32.1049 19.944 31.436 19.836V18.6C31.436 18.2817 31.5624 17.9765 31.7874 17.7515C32.0125 17.5264 32.3177 17.4 32.636 17.4H33.836C34.1542 17.4 34.4594 17.5264 34.6845 17.7515C34.9095 17.9765 35.036 18.2817 35.036 18.6V22.8Z" fill="white"/>
                                    <path d="M24.8359 14.4H26.6359V15.6H24.8359V14.4Z" fill="white"/>
                                    <path d="M24.8359 17.4H26.6359V18.6H24.8359V17.4Z" fill="white"/>
                                    <path d="M24.8359 8.40002H26.6359V9.60004H24.8359V8.40002Z" fill="white"/>
                                    <path d="M24.8359 11.4H26.6359V12.6H24.8359V11.4Z" fill="white"/>
                                </svg>
                            </div>
                            <h5>
                                Hotel
                            </h5>
                        </button>
                        <button>
                            <div>
                                <svg width="38" height="36" viewBox="0 0 38 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M36.8276 13.5525C36.5724 12.9012 36.09 12.3643 35.4697 12.0409C34.8493 11.7176 34.133 11.6297 33.4528 11.7934L31.4931 10.6136C31.1272 10.3952 30.7175 10.2606 30.2934 10.2194C29.8693 10.1783 29.4413 10.2316 29.0403 10.3755L21.8732 12.9513L15.9869 4.73724C15.9138 4.63661 15.8101 4.56239 15.6913 4.5257C15.5724 4.48902 15.4449 4.49185 15.3278 4.53378L12.1226 5.68673C12.0527 5.71123 11.9883 5.74938 11.9333 5.79895C11.8782 5.84852 11.8335 5.90854 11.8019 5.9755C11.7702 6.04247 11.7521 6.11507 11.7487 6.18907C11.7453 6.26308 11.7567 6.33702 11.7821 6.40661L15.0883 15.3886L7.96151 17.9495L4.13318 13.7206C4.05682 13.6367 3.95723 13.5772 3.84704 13.55C3.73686 13.5227 3.62106 13.5287 3.51432 13.5673L1.37444 14.3367C1.30453 14.3612 1.24018 14.3993 1.18512 14.4489C1.13007 14.4985 1.08541 14.5585 1.05373 14.6254C1.02205 14.6924 1.00399 14.765 1.00059 14.839C0.99719 14.913 1.00852 14.987 1.03392 15.0566L4.14872 23.5087C4.18888 23.618 4.26181 23.7122 4.35753 23.7784C4.45325 23.8447 4.5671 23.8798 4.68352 23.8789H4.68846L16.7513 23.7326C16.8155 23.7319 16.879 23.7201 16.9392 23.698L18.0074 23.313L21.1229 31.7658C21.1635 31.8748 21.2366 31.9687 21.3322 32.0349C21.4278 32.1011 21.5414 32.1364 21.6577 32.136C21.7242 32.1358 21.7902 32.1241 21.8527 32.1014L25.0629 30.947C25.1796 30.9058 25.2794 30.8271 25.3468 30.7232C25.4141 30.6193 25.4452 30.4961 25.4352 30.3727L24.6425 20.9301L35.1286 17.159C35.6744 16.9631 36.1468 16.604 36.4816 16.1305C36.8164 15.6569 36.9974 15.0918 37 14.5119C36.9996 14.1845 36.9415 13.8597 36.8283 13.5525H36.8276ZM13.0466 6.55073L15.3073 5.73759L20.7633 13.3497L16.1572 15.005L13.0466 6.55073ZM3.85554 19.4253L2.30132 15.2014L3.5447 14.7549L6.80785 18.3642L3.85554 19.4253ZM22.0004 30.8531L18.1063 20.2879L23.2897 18.4243L24.2667 30.0392L22.0004 30.8531ZM34.7393 16.1042L24.545 19.7701L24.3621 17.5984C24.3544 17.5125 24.3269 17.4295 24.2818 17.356C24.2367 17.2824 24.1752 17.2203 24.1021 17.1745C24.028 17.1282 23.9444 17.0992 23.8576 17.0897C23.7707 17.0801 23.6829 17.0903 23.6005 17.1194L17.1816 19.4267C17.1117 19.4517 17.0473 19.4902 16.9923 19.54C16.9373 19.5898 16.8926 19.65 16.8608 19.7171C16.8292 19.7839 16.8112 19.8564 16.8079 19.9303C16.8047 20.0042 16.8162 20.078 16.8418 20.1473L17.6189 22.2597L16.6411 22.6129L5.07914 22.7542L4.24551 20.4822L29.4288 11.4324C29.6698 11.3456 29.9269 11.3133 30.1819 11.3377C30.4368 11.3622 30.6831 11.4427 30.9032 11.5737L31.4486 11.9022L29.7771 12.5034L30.1664 13.5631L32.6927 12.6525L33.0784 12.8849C33.1509 12.9285 33.2321 12.9557 33.3162 12.9643C33.4003 12.973 33.4853 12.963 33.5652 12.935C33.989 12.7865 34.4539 12.808 34.8622 12.9949C35.2706 13.1818 35.5906 13.5197 35.7552 13.9375C35.8325 14.1465 35.8674 14.3688 35.8579 14.5915C35.8484 14.8141 35.7946 15.0327 35.6998 15.2343C35.605 15.436 35.471 15.6168 35.3056 15.7661C35.1402 15.9155 34.9467 16.0304 34.7365 16.1042H34.7393Z" fill="#696969" stroke="#707070" stroke-width="0.5"/>
                                    <path d="M25.9389 14.0647L27.1093 13.6389L27.5354 14.81L26.365 15.2358L25.9389 14.0647Z" fill="#696969" stroke="#707070" stroke-width="0.5"/>
                                    <path d="M23.8075 14.8489L24.9779 14.423L25.404 15.5941L24.2336 16.02L23.8075 14.8489Z" fill="#696969" stroke="#707070" stroke-width="0.5"/>
                                    <path d="M21.6768 15.6344L22.8472 15.2086L23.2733 16.3797L22.1028 16.8055L21.6768 15.6344Z" fill="#696969" stroke="#707070" stroke-width="0.5"/>
                                    <path d="M19.5447 16.4186L20.7152 15.9927L21.1413 17.1638L19.9708 17.5897L19.5447 16.4186Z" fill="#696969" stroke="#707070" stroke-width="0.5"/>
                                    <path d="M17.4133 17.2035L18.5837 16.7776L19.0098 17.9487L17.8394 18.3746L17.4133 17.2035Z" fill="#696969" stroke="#707070" stroke-width="0.5"/>
                                    <path d="M15.2819 17.9891L16.4524 17.5633L16.8784 18.7344L15.708 19.1602L15.2819 17.9891Z" fill="#696969" stroke="#707070" stroke-width="0.5"/>
                                    <path d="M13.1505 18.7733L14.3209 18.3475L14.747 19.5186L13.5765 19.9444L13.1505 18.7733Z" fill="#696969" stroke="#707070" stroke-width="0.5"/>
                                    <path d="M11.0142 19.5652L12.1853 19.1391L12.6113 20.3102L11.4402 20.7363L11.0142 19.5652Z" fill="#696969" stroke="#707070" stroke-width="0.5"/>
                                    <path d="M8.88208 20.3494L10.0532 19.9233L10.4793 21.0944L9.30816 21.5205L8.88208 20.3494Z" fill="#696969" stroke="#707070" stroke-width="0.5"/>
                                </svg>
                            </div>
                            <h5>
                                Flight
                            </h5>
                        </button>
                        <button>
                            <div>
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.2828 23.6363L6.661 20.0146C6.31337 19.6654 5.89999 19.3886 5.44475 19.2002C4.98951 19.0117 4.50143 18.9153 4.00873 18.9166H1.5007C1.39828 18.91 1.29558 18.9244 1.19897 18.959C1.10235 18.9936 1.01386 19.0477 0.938972 19.1179C0.864085 19.1881 0.804392 19.2729 0.763584 19.367C0.722776 19.4612 0.701721 19.5628 0.701721 19.6654C0.701721 19.768 0.722776 19.8696 0.763584 19.9637C0.804392 20.0579 0.864085 20.1427 0.938972 20.2129C1.01386 20.2831 1.10235 20.3372 1.19897 20.3718C1.29558 20.4064 1.39828 20.4208 1.5007 20.4142H4.00873C4.60469 20.4162 5.17585 20.653 5.59852 21.0731L7.94024 23.4148H1.5007C1.3105 23.4272 1.13214 23.5115 1.00181 23.6505C0.871475 23.7896 0.798947 23.973 0.798947 24.1636C0.798947 24.3542 0.871475 24.5377 1.00181 24.6768C1.13214 24.8158 1.3105 24.9001 1.5007 24.9124H9.75151C9.89978 24.9121 10.0447 24.868 10.1679 24.7855C10.2911 24.7031 10.3872 24.586 10.444 24.4491C10.5008 24.3121 10.5158 24.1614 10.4871 24.0159C10.4584 23.8705 10.3873 23.7367 10.2828 23.6316V23.6363Z" fill="#696969"/>
                                    <path d="M9.74996 27.1249C9.55095 27.1249 9.3601 27.204 9.21938 27.3447C9.07866 27.4854 8.9996 27.6762 8.9996 27.8753V30.1256C8.99939 30.3245 8.92027 30.5152 8.7796 30.6559C8.63892 30.7966 8.44819 30.8757 8.24924 30.8759H3.74865C3.54971 30.8757 3.35897 30.7966 3.2183 30.6559C3.07762 30.5152 2.9985 30.3245 2.99829 30.1256V27.1249C3.00494 27.0225 2.99051 26.9198 2.95589 26.8232C2.92127 26.7265 2.86719 26.6381 2.79701 26.5632C2.72683 26.4883 2.64203 26.4286 2.54786 26.3878C2.45368 26.347 2.35214 26.3259 2.24951 26.3259C2.14687 26.3259 2.04533 26.347 1.95116 26.3878C1.85699 26.4286 1.77219 26.4883 1.702 26.5632C1.63182 26.6381 1.57775 26.7265 1.54313 26.8232C1.5085 26.9198 1.49407 27.0225 1.50072 27.1249V30.1256C1.50135 30.7222 1.73863 31.2942 2.16051 31.7161C2.58239 32.1379 3.15439 32.3752 3.75102 32.3758H8.25239C8.84902 32.3752 9.42103 32.1379 9.8429 31.7161C10.2648 31.2942 10.5021 30.7222 10.5027 30.1256V27.8753C10.5027 27.7765 10.4832 27.6787 10.4453 27.5875C10.4075 27.4964 10.352 27.4135 10.2821 27.3438C10.2121 27.2741 10.1292 27.2189 10.0378 27.1813C9.94653 27.1438 9.8487 27.1246 9.74996 27.1249Z" fill="#696969"/>
                                    <path d="M32.6005 14.4585C30.5331 13.3771 25.893 12.8727 18.0024 12.8727C10.1117 12.8727 5.47007 13.3771 3.40421 14.4585C1.0483 15.6881 0 17.7437 0 21.1219C0.0156014 23.2099 0.275905 25.2889 0.775583 27.3163C0.817896 27.4761 0.911913 27.6173 1.04296 27.718C1.174 27.8186 1.33469 27.8731 1.49993 27.8728H8.07347L10.911 29.2916C11.0153 29.3435 11.1302 29.3704 11.2467 29.3704H24.7493C24.8653 29.3706 24.9798 29.3436 25.0835 29.2916L27.9265 27.8728H34.5001C34.6653 27.8731 34.826 27.8186 34.957 27.718C35.0881 27.6173 35.1821 27.4761 35.2244 27.3163C35.7241 25.2889 35.9844 23.2099 36 21.1219C36.0039 17.7437 34.9556 15.6881 32.6005 14.4585ZM33.9113 26.3745H27.7547C27.6381 26.374 27.5231 26.401 27.4189 26.4533L24.5759 27.872H11.4288L8.59132 26.4533C8.487 26.4014 8.37206 26.3744 8.25555 26.3745H2.09423C1.71598 24.6487 1.51604 22.8886 1.49757 21.1219C1.49757 18.297 2.2503 16.7506 4.09467 15.7858C5.89175 14.8463 10.5697 14.371 18 14.371C25.4303 14.371 30.1082 14.844 31.9053 15.7858C33.7489 16.7506 34.5024 18.297 34.5024 21.1219C34.4848 22.8883 34.2868 24.6483 33.9113 26.3745Z" fill="#696969"/>
                                    <path d="M34.5039 23.4172H28.0636L30.4038 21.0755C30.8271 20.6553 31.3987 20.4186 31.9951 20.4165H34.5032C34.6933 20.4042 34.8717 20.3199 35.0021 20.1808C35.1324 20.0418 35.2049 19.8583 35.2049 19.6677C35.2049 19.4771 35.1324 19.2937 35.0021 19.1546C34.8717 19.0155 34.6933 18.9313 34.5032 18.919H31.9951C31.5024 18.9177 31.0143 19.014 30.5591 19.2025C30.1039 19.3909 29.6905 19.6677 29.3428 20.0169L25.7211 23.6386C25.6165 23.7438 25.5454 23.8775 25.5168 24.023C25.4881 24.1684 25.5031 24.3192 25.5599 24.4561C25.6167 24.5931 25.7127 24.7101 25.836 24.7926C25.9592 24.8751 26.1041 24.9192 26.2523 24.9195H34.5032C34.6933 24.9071 34.8717 24.8229 35.0021 24.6838C35.1324 24.5447 35.2049 24.3613 35.2049 24.1707C35.2049 23.9801 35.1324 23.7966 35.0021 23.6576C34.8717 23.5185 34.6933 23.4342 34.5032 23.4219L34.5039 23.4172Z" fill="#696969"/>
                                    <path d="M26.9334 19.3486C26.8728 19.2195 26.7767 19.1104 26.6564 19.0339C26.5361 18.9574 26.3965 18.9167 26.254 18.9166H9.75154C9.60888 18.9164 9.46911 18.9569 9.34867 19.0334C9.22822 19.1099 9.13211 19.2191 9.0716 19.3483C9.0111 19.4775 8.98872 19.6213 9.0071 19.7628C9.02548 19.9043 9.08386 20.0376 9.17537 20.147L12.9256 24.6476C12.996 24.7321 13.0841 24.8001 13.1836 24.8468C13.2832 24.8935 13.3918 24.9178 13.5018 24.9179H22.503C22.6129 24.9178 22.7215 24.8935 22.8211 24.8468C22.9206 24.8001 23.0087 24.7321 23.0791 24.6476L26.8294 20.147C26.921 20.0377 26.9795 19.9045 26.998 19.763C27.0164 19.6215 26.994 19.4777 26.9334 19.3486ZM22.1506 23.4172H13.8533L11.3524 20.4166H24.6516L22.1506 23.4172Z" fill="#696969"/>
                                    <path d="M32.9433 14.9527C32.0897 12.9901 29.2333 6.52301 28.2402 5.67885C27.0027 4.6274 23.4574 4 18.7527 4H17.2551C12.5504 4 9.00589 4.63055 7.76763 5.67728C6.77451 6.52222 3.91652 12.9894 3.06448 14.9512C2.99347 15.1323 2.99547 15.3338 3.07008 15.5135C3.14468 15.6931 3.28606 15.8368 3.46447 15.9143C3.64287 15.9918 3.84439 15.9971 4.02661 15.9291C4.20883 15.861 4.35754 15.7249 4.44145 15.5494C6.13528 11.6502 8.20666 7.3183 8.73948 6.82173C9.31722 6.33148 11.7606 5.49993 17.252 5.49993H18.7495C24.2433 5.49993 26.6867 6.33069 27.262 6.81858C27.7972 7.3183 29.8694 11.6494 31.5632 15.5494C31.6424 15.732 31.791 15.8757 31.9761 15.9488C32.1612 16.0218 32.3678 16.0184 32.5504 15.9392C32.733 15.8599 32.8767 15.7114 32.9498 15.5263C33.0229 15.3412 33.0194 15.1346 32.9402 14.952L32.9433 14.9527Z" fill="#696969"/>
                                    <path d="M33.7536 26.3745C33.5546 26.3745 33.3638 26.4536 33.2231 26.5943C33.0823 26.735 33.0033 26.9259 33.0033 27.1249V30.1255C33.0031 30.3245 32.9239 30.5152 32.7833 30.6559C32.6426 30.7965 32.4519 30.8757 32.2529 30.8759H27.7523C27.5534 30.8757 27.3626 30.7965 27.222 30.6559C27.0813 30.5152 27.0022 30.3245 27.0019 30.1255V27.8752C27.0086 27.7728 26.9942 27.6701 26.9596 27.5735C26.9249 27.4769 26.8708 27.3884 26.8007 27.3135C26.7305 27.2386 26.6457 27.1789 26.5515 27.1381C26.4573 27.0973 26.3558 27.0763 26.2532 27.0763C26.1505 27.0763 26.049 27.0973 25.9548 27.1381C25.8606 27.1789 25.7758 27.2386 25.7057 27.3135C25.6355 27.3884 25.5814 27.4769 25.5468 27.5735C25.5122 27.6701 25.4977 27.7728 25.5044 27.8752V30.1255C25.505 30.7222 25.7423 31.2942 26.1642 31.716C26.5861 32.1379 27.1581 32.3752 27.7547 32.3758H32.2553C32.8519 32.3752 33.4239 32.1379 33.8458 31.716C34.2677 31.2942 34.5049 30.7222 34.5056 30.1255V27.1249C34.5056 27.0262 34.4861 26.9285 34.4483 26.8374C34.4105 26.7462 34.3551 26.6634 34.2852 26.5937C34.2154 26.524 34.1325 26.4688 34.0413 26.4312C33.95 26.3935 33.8523 26.3743 33.7536 26.3745Z" fill="#696969"/>
                                </svg>
                            </div>
                            <h5>
                                Car
                            </h5>
                        </button>
                    </div>
                </div>

                {/* search information */}
                <div>
                    {/* location */}
                    <input type="text" />

                    {/* start-end date */}
                    <div>
                        <input type="text" />
                        <input type="text" />
                    </div>

                    {/* people amount */}
                    <input type="text" />

                    <button>
                        Search
                    </button>
                </div>

                {/* recent searches */}
                <div>
                    <h5>
                        Recent Searches
                    </h5>
                    {/* list recent searches */}
                    <div>
                        {/* search item */}
                        <SearchItem  />
                    </div>
                </div>
            </div>

            {/* banner */}
            <div className={styles.tour_recommend}>
                <Image src="/example_img.png" width={980} height={1080} alt="tour-recommendation" />
                <div className={styles.tour_location}>
                    <div>
                        <h2>
                            Incredible India
                        </h2>
                        <p>
                            “For where thy treasure is, here also will thy heart be.”
                        </p>
                    </div>
                    <button>
                        Take Tour
                    </button>
                </div>
                {/* arrow */}
                {/* <button>
                    <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.56503 6.47794C7.56528 6.35828 7.54131 6.2398 7.49456 6.12964C7.44782 6.01948 7.37926 5.91991 7.29303 5.83694L1.95003 0.493943C1.86349 0.41515 1.76228 0.354174 1.65217 0.314497C1.54207 0.274819 1.42522 0.257217 1.30831 0.262696C1.1914 0.268174 1.07672 0.296626 0.970806 0.346426C0.864893 0.396227 0.769826 0.466402 0.691032 0.552943C0.612239 0.639484 0.551263 0.740697 0.511585 0.850804C0.471908 0.96091 0.454305 1.07775 0.459784 1.19466C0.465262 1.31157 0.493715 1.42626 0.543516 1.53217C0.593317 1.63808 0.663491 1.73315 0.750032 1.81194L5.41503 6.47694L0.689032 11.2029C0.522078 11.3699 0.428284 11.5963 0.428284 11.8324C0.428284 12.0686 0.522078 12.295 0.689032 12.4619C0.855985 12.6289 1.08242 12.7227 1.31853 12.7227C1.55464 12.7227 1.78108 12.6289 1.94803 12.4619L7.29103 7.11894C7.37727 7.03597 7.44582 6.93641 7.49256 6.82625C7.53931 6.71609 7.56328 6.59761 7.56303 6.47794H7.56503Z" fill="white"/>
                    </svg>
                </button>

                <button>
                    <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.56503 6.47794C7.56528 6.35828 7.54131 6.2398 7.49456 6.12964C7.44782 6.01948 7.37926 5.91991 7.29303 5.83694L1.95003 0.493943C1.86349 0.41515 1.76228 0.354174 1.65217 0.314497C1.54207 0.274819 1.42522 0.257217 1.30831 0.262696C1.1914 0.268174 1.07672 0.296626 0.970806 0.346426C0.864893 0.396227 0.769826 0.466402 0.691032 0.552943C0.612239 0.639484 0.551263 0.740697 0.511585 0.850804C0.471908 0.96091 0.454305 1.07775 0.459784 1.19466C0.465262 1.31157 0.493715 1.42626 0.543516 1.53217C0.593317 1.63808 0.663491 1.73315 0.750032 1.81194L5.41503 6.47694L0.689032 11.2029C0.522078 11.3699 0.428284 11.5963 0.428284 11.8324C0.428284 12.0686 0.522078 12.295 0.689032 12.4619C0.855985 12.6289 1.08242 12.7227 1.31853 12.7227C1.55464 12.7227 1.78108 12.6289 1.94803 12.4619L7.29103 7.11894C7.37727 7.03597 7.44582 6.93641 7.49256 6.82625C7.53931 6.71609 7.56328 6.59761 7.56303 6.47794H7.56503Z" fill="white"/>
                    </svg>
                </button> */}
            </div>
        </div>
    )
}