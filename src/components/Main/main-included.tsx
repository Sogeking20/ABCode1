import { FC } from "react";
import { Container } from "../ui/container";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

interface Props {
  className?: string;
}

const MainIncluded: FC<Props> = ({ className }) => {
  return (
    <div className={cn(className, "mb-[100px]")}>
      <Container>
        <h3 className="uppercase text-[40px] sm:text-[60px] lg:text-[70px] font-bold mb-5">
          Что вы получите
        </h3>
        <div className="flex flex-wrap mb-[80px]">
          <div className="max-w-[377px] included-shadow py-[44px] px-[28px] my-[10px] mx-[9px]">
            <svg
              width="140"
              height="140"
              viewBox="0 0 140 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2901_45326)">
                <path
                  d="M67.1051 91.8294L67.114 91.826L67.1227 91.8223C69.2429 90.9205 72.0042 89.8574 74.2401 89.0183C75.357 88.5991 76.3411 88.2364 77.0458 87.9786C77.3982 87.8496 77.6807 87.7469 77.875 87.6765L78.0981 87.5958L78.1557 87.575L78.1703 87.5698L78.1739 87.5684L78.1748 87.5681L78.175 87.568L78.0059 87.0975L78.1751 87.568L78.1885 87.5632L78.2013 87.5578L78.2013 87.5578L78.2014 87.5577L78.2016 87.5576L78.2026 87.5572L78.2096 87.5543L78.2413 87.5414C78.2701 87.5298 78.3138 87.5125 78.3711 87.4908C78.4857 87.4474 78.6542 87.3865 78.865 87.3186C79.2876 87.1824 79.8752 87.0195 80.5368 86.9113C81.8856 86.6906 83.4217 86.7166 84.5345 87.5054C84.9946 87.8316 85.162 88.2995 85.1204 88.9111C85.0773 89.5458 84.8064 90.284 84.432 91.0141C84.0618 91.7359 83.6117 92.4094 83.2508 92.9055C83.0711 93.1527 82.915 93.3537 82.8045 93.4924C82.7603 93.5477 82.7235 93.593 82.6954 93.6272L60.4181 104.775L60.6419 105.722V105.222C60.6419 105.722 60.642 105.722 60.6422 105.722H60.6431L60.6462 105.722L60.6582 105.722L60.7052 105.722C60.7466 105.722 60.808 105.722 60.8884 105.721C61.0491 105.72 61.2858 105.718 61.5908 105.714C62.2009 105.705 63.0842 105.689 64.1792 105.655C66.3689 105.589 69.4065 105.455 72.7987 105.188C79.5665 104.654 87.8047 103.585 93.5225 101.425L93.5255 101.424C95.5597 100.641 97.6248 99.8278 99.6731 99.0211C103.218 97.6248 106.713 96.2484 109.909 95.0837C112.427 94.1661 114.747 93.3849 116.744 92.8337C118.75 92.2799 120.394 91.9688 121.576 91.9688C124.182 91.9688 125.37 92.1872 126.206 92.6521C126.624 92.8842 126.977 93.1912 127.389 93.6159C127.588 93.8219 127.796 94.05 128.032 94.3086L128.057 94.3362C128.169 94.4587 128.286 94.5872 128.41 94.7215L117.954 99.6524L117.92 99.6683L117.889 99.689L118.167 100.105C117.889 99.689 117.889 99.689 117.889 99.6892L117.888 99.6898L117.884 99.6923L117.869 99.7025L117.808 99.7428L117.572 99.9004C117.364 100.039 117.058 100.241 116.666 100.5C115.883 101.017 114.758 101.757 113.388 102.647C110.649 104.429 106.934 106.812 103.03 109.221C99.1253 111.631 95.0367 114.065 91.5488 115.947C89.8044 116.888 88.2164 117.689 86.8801 118.279C85.5311 118.875 84.4804 119.237 83.7954 119.333C82.4957 119.516 79.9158 119.739 76.6402 120.022C76.1332 120.066 75.6095 120.112 75.0713 120.158C71.0678 120.507 66.2843 120.937 61.6624 121.478C57.0443 122.018 52.5702 122.67 49.1906 123.465C47.5037 123.862 46.0651 124.299 45.0113 124.787C44.4849 125.031 44.0334 125.296 43.6916 125.591C43.3522 125.884 43.083 126.238 43.0002 126.663L42.9909 126.71V126.759V129.67H11.6299C11.6793 129.53 11.7397 129.36 11.8107 129.161C12.0299 128.547 12.349 127.666 12.7484 126.597C13.5472 124.46 14.6661 121.575 15.9471 118.586C17.2289 115.595 18.6687 112.509 20.1089 109.963C20.829 108.69 21.5446 107.56 22.2358 106.648C22.9317 105.73 23.5815 105.062 24.1634 104.681C25.2523 103.969 26.5585 102.962 28.03 101.828C28.35 101.581 28.6778 101.328 29.0129 101.071C30.8995 99.6238 33.0393 98.0221 35.3839 96.5283C40.0654 93.5454 45.5142 91.0253 51.3183 91.0093L51.3907 91.0256C51.4743 91.0442 51.5969 91.0712 51.7542 91.1048C52.0688 91.1721 52.5225 91.2661 53.0805 91.3734C54.1961 91.588 55.7315 91.8564 57.4092 92.0713C59.0853 92.2861 60.9125 92.4486 62.6093 92.4486C64.295 92.4486 65.9 92.2888 67.1051 91.8294Z"
                  stroke="#5C3BFE"
                ></path>
                <path
                  d="M70.581 77.542C56.9061 77.542 45.8203 66.4562 45.8203 52.7813C45.8203 39.1063 56.9061 28.0205 70.581 28.0205V52.7813H95.3418C95.3418 66.4562 84.256 77.542 70.581 77.542Z"
                  fill="#5C3BFE"
                ></path>
                <path
                  d="M75.7695 47.0967H100.53C100.53 26.7061 84.0478 22.0995 75.7695 22.3451V47.0967Z"
                  stroke="#5C3BFE"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_2901_45326">
                  <rect
                    width="120"
                    height="120"
                    fill="white"
                    transform="translate(10 9.8042)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
            <div className="font-bold text-[28px] text-[#0020a7]">
              Анализ проекта
            </div>
            <div className="text-[16px] text-[#808080]">
              Расскажите свою идею — мы поможем проанализировать рынок и целевую
              аудиторию для будущего продукта. Вы узнаете сроки и стоимость
              разработки. Заполните форму внизу, и мы сделаем это бесплатно.
            </div>
          </div>
          <div className="max-w-[377px] included-shadow py-[44px] px-[28px] my-[10px] mx-[9px]">
            <svg
              width="140"
              height="144"
              viewBox="0 0 140 144"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="9.5"
                y="13.6714"
                width="59.3726"
                height="114.657"
                rx="6.5"
                fill="#5C3BFE"
                stroke="#5C3BFE"
              ></rect>
              <path
                d="M12.6108 26.099L12.529 116.586C12.527 118.797 14.3185 120.59 16.529 120.59H61.8292C64.0456 120.59 65.8395 118.787 65.8291 116.571L65.4055 25.9032C65.3952 23.6951 63.5975 21.913 61.3894 21.9219L16.5947 22.1027C14.3933 22.1116 12.6128 23.8976 12.6108 26.099Z"
                fill="white"
              ></path>
              <path
                d="M27.1283 12.7435L27.1237 13.4122C27.1083 15.6347 28.9077 17.4436 31.1303 17.4399L47.1038 17.4132C49.3825 17.4094 51.1977 15.5055 51.0929 13.2292L51.0682 12.6933"
                stroke="white"
                strokeMiterlimit="10"
              ></path>
              <path
                d="M18.283 30.0608L18.283 44.0066C18.283 45.1124 19.1804 46.0084 20.2863 46.0066L34.2457 45.9832C35.3571 45.9814 36.2538 45.0739 36.2423 43.9626L36.0981 29.987C36.0868 28.8875 35.19 28.0034 34.0905 28.0077L20.2753 28.0609C19.1738 28.0651 18.283 28.9593 18.283 30.0608Z"
                stroke="#5C3BFE"
                strokeMiterlimit="10"
              ></path>
              <path
                d="M42.2166 30.0608L42.2166 44.0066C42.2166 45.1124 43.114 46.0084 44.2199 46.0066L58.1793 45.9832C59.2907 45.9814 60.1874 45.0739 60.1759 43.9626L60.0317 29.987C60.0203 28.8875 59.1236 28.0034 58.0241 28.0077L44.2089 28.0609C43.1074 28.0651 42.2166 28.9593 42.2166 30.0608Z"
                stroke="#5C3BFE"
                strokeMiterlimit="10"
              ></path>
              <path
                d="M42.2166 54.5623L42.2166 68.508C42.2166 69.6139 43.114 70.5099 44.2199 70.508L58.1793 70.4847C59.2907 70.4829 60.1874 69.5753 60.1759 68.4641L60.0317 54.4885C60.0203 53.389 59.1236 52.5049 58.0241 52.5091L44.2089 52.5623C43.1074 52.5666 42.2166 53.4608 42.2166 54.5623Z"
                stroke="#5C3BFE"
                strokeMiterlimit="10"
              ></path>
              <path
                d="M18.283 54.5623L18.283 68.508C18.283 69.6139 19.1804 70.5099 20.2863 70.508L34.2457 70.4847C35.3571 70.4829 36.2538 69.5753 36.2423 68.4641L36.0981 54.4885C36.0868 53.389 35.19 52.5049 34.0905 52.5091L20.2753 52.5623C19.1738 52.5666 18.283 53.4608 18.283 54.5623Z"
                fill="#5C3BFE"
                stroke="#5C3BFE"
                strokeMiterlimit="10"
              ></path>
              <path
                d="M27.331 65.7727C27.331 65.7727 22.5674 63.1051 22.5674 59.8658C22.5674 59.2931 22.7658 58.7382 23.1288 58.2953C23.4919 57.8525 23.9972 57.5491 24.5587 57.4368C25.1202 57.3245 25.7033 57.4102 26.2087 57.6793C26.7142 57.9485 27.1108 58.3844 27.331 58.913C27.5513 58.3844 27.9479 57.9485 28.4533 57.6793C28.9588 57.4102 29.5419 57.3245 30.1034 57.4368C30.6649 57.5491 31.1702 57.8525 31.5332 58.2953C31.8963 58.7382 32.0947 59.2931 32.0947 59.8658C32.0947 63.1051 27.331 65.7727 27.331 65.7727Z"
                fill="white"
              ></path>
              <path
                d="M53.9582 120.818C56.5104 121.815 58.5082 123.86 59.1881 124.758C59.871 126.202 61.5977 126.825 63.0447 126.149L81.3519 117.606L80.1154 114.992C79.2322 113.126 80.6967 103.934 79.6233 99.7247C78.9446 97.0632 76.197 91.5643 74.0984 87.631C73.1353 85.8258 71.8754 83.906 69.849 83.5924C67.8229 83.2788 66.167 84.3891 65.4238 85.2322C61.453 82.1847 58.2779 85.3256 57.0218 86.874C53.1736 84.1726 50.7209 87.029 49.9755 88.7948L45.0972 78.4835C43.9867 76.1362 41.1789 75.1236 38.8258 76.2217C36.4727 77.3198 35.4654 80.1128 36.5759 82.46L48.9911 108.702L43.9662 107.01C41.4121 106.15 38.6476 107.506 37.7834 110.044C36.9148 112.594 38.2935 115.369 40.8578 116.241C45.9005 117.956 52.0675 120.079 53.9582 120.818Z"
                fill="white"
              ></path>
              <path
                d="M52.3308 93.7731L49.9755 88.7948M49.9755 88.7948L45.0972 78.4835C43.9867 76.1362 41.1789 75.1236 38.8258 76.2217V76.2217C36.4727 77.3198 35.4654 80.1128 36.5759 82.46L48.9911 108.702L43.9662 107.01C41.4121 106.15 38.6476 107.506 37.7834 110.044V110.044C36.9148 112.595 38.2935 115.369 40.8578 116.241C45.9005 117.956 52.0675 120.079 53.9582 120.818C56.5104 121.815 58.5082 123.86 59.1881 124.758L59.2955 124.985C59.9191 126.303 61.4959 126.872 62.8173 126.255L78.9593 118.723C80.2807 118.106 80.8465 116.538 80.2229 115.22C80.1876 115.145 80.1517 115.069 80.1154 114.992C79.2322 113.126 80.6967 103.934 79.6233 99.7247C78.9446 97.0632 76.197 91.5643 74.0984 87.631C73.1353 85.8258 71.8754 83.906 69.849 83.5924C67.8229 83.2788 66.167 84.3891 65.4238 85.2322M49.9755 88.7948C50.7209 87.029 53.1736 84.1726 57.0218 86.874M57.0218 86.874L58.8471 90.7322M57.0218 86.874C58.2779 85.3256 61.453 82.1847 65.4238 85.2322M65.4238 85.2322L66.3659 87.2235"
                stroke="#5C3BFE"
                strokeWidth="1.32017"
                strokeLinecap="round"
              ></path>
            </svg>
            <div className="font-bold text-[28px] text-[#0020a7]">
              UI/UX дизайн
            </div>
            <div className="text-[16px] text-[#808080]">
              Мы создадим дизайн, составим путь пользователя и вайрфреймы —
              учитывая ваши пожелания. В итоге вы получите макеты приложения,
              кликабельный прототип и UI-кит со всеми элементами интерфейса.
            </div>
          </div>
          <div className="max-w-[377px] included-shadow py-[44px] px-[28px] my-[10px] mx-[9px]">
            <svg
              width="140"
              height="140"
              viewBox="0 0 140 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2901_45358)">
                <path
                  d="M81.7892 30.5421L81.7039 31.0353L82.1971 31.1201C90.1052 32.4804 96.2164 40.0369 96.2164 49.2258C96.2164 59.3932 88.7429 67.551 79.6232 67.551H29.3199C20.1999 67.551 12.7266 59.3932 12.7266 49.2258C12.7266 39.0585 20.1999 30.9006 29.3199 30.9006H29.3218H29.8148L29.8217 30.4077C29.949 21.4021 36.6062 14.2272 44.704 14.2272C48.3316 14.2272 51.6611 15.6611 54.2502 18.0548L54.6886 18.4602L55.0107 17.9574C57.7151 13.7347 62.1617 11 67.1692 11C75.3453 11 82.0535 18.3151 82.0535 27.4426C82.0535 28.5025 81.9627 29.5386 81.7892 30.5421Z"
                  stroke="#5C3BFE"
                ></path>
                <rect
                  x="42.1143"
                  y="23.2451"
                  width="56.551"
                  height="87.1633"
                  rx="9.29592"
                  fill="white"
                  stroke="#5C3BFE"
                ></rect>
                <path
                  d="M50.7979 53.3569V63.7651"
                  stroke="#5C3BFE"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M82.0225 30.0918V40.5"
                  stroke="#5C3BFE"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M58.7568 53.3569V63.7651"
                  stroke="#5C3BFE"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M89.9814 30.0918V40.5"
                  stroke="#5C3BFE"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M42.2266 47.2349H98.5531"
                  stroke="#5C3BFE"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M42.2266 70.5H98.5531"
                  stroke="#5C3BFE"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M99.165 43.5614H105.9C107.929 43.5614 109.573 41.9167 109.573 39.8879V37.439"
                  stroke="#5C3BFE"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M16.5117 60.7041V83.3572"
                  stroke="#5C3BFE"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M32.4307 67.4385V83.3568"
                  stroke="#5C3BFE"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M98.5527 55.806H116.92C118.949 55.806 120.594 54.1613 120.594 52.1325V19.0713"
                  stroke="#5C3BFE"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M110.011 93.92L109.882 94.4626L110.435 94.5318C120.634 95.8076 128.277 102.842 128.277 111.163C128.277 120.364 118.919 128 107.13 128H43.4248C31.6359 128 22.2773 120.364 22.2773 111.163C22.2773 101.963 31.6359 94.3269 43.4248 94.3269H43.4272H43.9176L43.9271 93.8367C44.0851 85.7008 52.4173 78.972 62.9076 78.972C67.5798 78.972 71.8487 80.3161 75.148 82.5343L75.5122 82.7791L75.8022 82.4498C79.223 78.5657 84.901 76 91.3581 76C101.952 76 110.341 82.8597 110.341 91.1028C110.341 92.0658 110.228 93.0073 110.011 93.92Z"
                  fill="white"
                  stroke="#5C3BFE"
                ></path>
                <circle
                  cx="109.574"
                  cy="31.9287"
                  r="5.5102"
                  fill="#5C3BFE"
                ></circle>
                <circle
                  cx="54.4711"
                  cy="36.8266"
                  r="5.5102"
                  fill="#5C3BFE"
                ></circle>
                <path
                  d="M91.206 58.8671C91.206 61.9103 88.739 64.3773 85.6958 64.3773C82.6525 64.3773 80.1855 61.9103 80.1855 58.8671C80.1855 55.8239 82.6525 53.3569 85.6958 53.3569C88.739 53.3569 91.206 55.8239 91.206 58.8671Z"
                  fill="#5C3BFE"
                ></path>
                <circle
                  cx="16.5122"
                  cy="87.0307"
                  r="5.5102"
                  fill="#5C3BFE"
                ></circle>
                <circle
                  cx="32.4301"
                  cy="87.0307"
                  r="5.5102"
                  fill="#5C3BFE"
                ></circle>
                <circle
                  cx="120.593"
                  cy="16.0102"
                  r="5.5102"
                  fill="#5C3BFE"
                ></circle>
              </g>
              <defs>
                <clipPath id="clip0_2901_45358">
                  <rect
                    width="120"
                    height="120"
                    fill="white"
                    transform="translate(10 10)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
            <div className="font-bold text-[28px] text-[#0020a7]">
              Разработка
            </div>
            <div className="text-[16px] text-[#808080]">
              Наша команда работает спринтами по две недели — в конце каждого из
              них мы интегрируем функции и держим вас в курсе разработки. Вы
              сможете «пощупать» эти функции и протестировать их в демо версии
              приложения.
            </div>
          </div>
          <div className="max-w-[377px] included-shadow py-[44px] px-[28px] my-[10px] mx-[9px]">
            <svg
              width="140"
              height="140"
              viewBox="0 0 140 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.5034 50.1741C17.7073 44.8505 22.0307 38.6274 27.7821 41.4816C34.9715 45.0493 27.7928 54.5899 25.5689 50.5415C23.5 46.7755 35.979 37.9591 41.2729 42.2413C46.5669 46.5234 38.6054 54.1162 37.0899 50.0954C35.6611 46.3047 48.1401 37.4882 52.2035 43.1001C56.2669 48.7119 48.7101 52.2096 48.5862 49.0093C48.4623 45.809 57.1753 39.0614 61.854 44.0084"
                stroke="#5C3BFE"
              ></path>
              <path
                d="M9.66429 40.8751L9.60896 50.5386C9.58989 53.8696 12.2878 56.5785 15.6189 56.5729L99.2811 56.4331C102.685 56.4274 105.402 53.5948 105.266 50.194L104.879 40.4901C104.751 37.267 102.097 34.7223 98.871 34.7293L15.6512 34.9094C12.356 34.9166 9.68315 37.5799 9.66429 40.8751Z"
                stroke="#5C3BFE"
                strokeMiterlimit="10"
              ></path>
              <path
                d="M58.408 71.1138L30.5275 71.174C28.3141 71.1788 26.5187 72.9676 26.5059 75.1809C26.4928 77.4186 28.3052 79.2385 30.5429 79.2347L58.4234 79.1881C60.7143 79.1843 62.543 77.2772 62.4506 74.9881C62.3631 72.8202 60.5777 71.1091 58.408 71.1138Z"
                fill="#EEEBFF"
              ></path>
              <path
                d="M41.4773 60.324L13.5968 60.3842C11.3834 60.389 9.58807 62.1778 9.5752 64.3911C9.56218 66.6288 11.3745 68.4487 13.6122 68.4449L41.4928 68.3983C43.7836 68.3945 45.6123 66.4874 45.5199 64.1984C45.4324 62.0304 43.647 60.3193 41.4773 60.324Z"
                fill="#5C3BFE"
              ></path>
              <path d="M110.743 32.1313V41.802" stroke="#5C3BFE"></path>
              <path d="M123.276 36.9666L116.46 43.8047" stroke="#DED8FF"></path>
              <path
                d="M127.676 49.1592L118.037 49.1592"
                stroke="#CEC4FF"
              ></path>
              <path
                d="M88.9824 100.063C104.001 100.063 116.177 87.8881 116.177 72.8691C116.177 57.8501 104.001 45.6748 88.9824 45.6748C73.9634 45.6748 61.7881 57.8501 61.7881 72.8691C61.7881 87.8881 73.9634 100.063 88.9824 100.063Z"
                fill="#5C3BFE"
              ></path>
              <path
                d="M88.9826 94.5261C100.899 94.5261 110.559 84.8661 110.559 72.9498C110.559 61.0336 100.899 51.3735 88.9826 51.3735C77.0663 51.3735 67.4062 61.0336 67.4062 72.9498C67.4062 84.8661 77.0663 94.5261 88.9826 94.5261Z"
                fill="white"
                stroke="#5C3BFE"
                strokeWidth="0.827301"
                strokeMiterlimit="10"
              ></path>
              <path
                d="M90.2842 57.8877C96.6349 57.8877 102.009 62.0401 103.718 67.8209"
                stroke="#5C3BFE"
                strokeWidth="0.827301"
                strokeMiterlimit="10"
              ></path>
              <path
                d="M104.615 95.1778L109.908 100.47L124.482 115.044C125.214 115.777 126.11 116.103 127.006 116.103C127.901 116.103 128.878 115.777 129.53 115.044C130.914 113.66 130.914 111.38 129.53 109.996L114.956 95.4221L109.908 90.374"
                fill="#5C3BFE"
              ></path>
              <path
                d="M109.906 100.47L114.954 95.3406"
                stroke="white"
                strokeWidth="0.827301"
                strokeMiterlimit="10"
              ></path>
            </svg>
            <div className="font-bold text-[28px] text-[#0020a7]">
              Тестирование и QA
            </div>
            <div className="text-[16px] text-[#808080]">
              Наши инженеры и аутсорсинг-разработчики найдут сбои и ошибки,
              из-за которых неудобно пользоваться приложением. В итоге продукт
              будет работать быстро.
            </div>
          </div>
          <div className="max-w-[377px] included-shadow py-[44px] px-[28px] my-[10px] mx-[9px]">
            <svg
              width="140"
              height="140"
              viewBox="0 0 140 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="15.5"
                y="15.3042"
                width="109"
                height="107"
                rx="3.61429"
                stroke="#5C3BFE"
              ></rect>
              <rect
                x="21"
                y="37.8042"
                width="98"
                height="70"
                rx="4.11429"
                fill="#5C3BFE"
              ></rect>
              <path
                d="M42.612 65.9483H42.112V66.4483V74.9492L35.1294 66.1378L34.9793 65.9483H34.7376H12.9401C12.1701 65.9483 11.5 65.354 11.5 64.5066V46.5745C11.5 45.8029 12.0944 45.1328 12.9401 45.1328H78.2184C78.9884 45.1328 79.6585 45.7271 79.6585 46.5745V64.5066C79.6585 65.2783 79.064 65.9483 78.2184 65.9483H56.4209H42.612Z"
                fill="white"
                stroke="#5C3BFE"
              ></path>
              <path
                d="M97.3892 108.62V108.12H96.8892H83.0803H61.2829C60.4372 108.12 59.8428 107.45 59.8428 106.678V88.7459C59.8428 87.8985 60.5129 87.3042 61.2829 87.3042H126.561C127.407 87.3042 128.001 87.9742 128.001 88.7459V106.678C128.001 107.525 127.331 108.12 126.561 108.12H104.764H104.522L104.372 108.309L97.3892 117.121V108.62Z"
                fill="white"
                stroke="#5C3BFE"
              ></path>
              <path
                d="M100.126 102.392L100.129 102.365V102.337C100.129 101.585 100.818 100.896 101.569 100.896C102.319 100.896 103.009 101.585 103.009 102.337C103.009 103.109 102.415 103.779 101.569 103.779C100.669 103.779 100.05 103.071 100.126 102.392Z"
                fill="#5C3BFE"
                stroke="#5C3BFE"
              ></path>
              <path
                d="M15.6209 60.0013L15.6239 59.9738V59.9461C15.6239 59.1939 16.3134 58.5044 17.064 58.5044C17.8145 58.5044 18.504 59.1939 18.504 59.9461C18.504 60.7177 17.9096 61.3878 17.064 61.3878C16.1646 61.3878 15.5455 60.6799 15.6209 60.0013Z"
                fill="#5C3BFE"
                stroke="#5C3BFE"
              ></path>
              <path
                d="M106.745 102.392L106.748 102.365V102.337C106.748 101.566 107.342 100.896 108.188 100.896C108.939 100.896 109.628 101.585 109.628 102.337C109.628 103.109 109.034 103.779 108.188 103.779C107.289 103.779 106.67 103.071 106.745 102.392Z"
                fill="#5C3BFE"
                stroke="#5C3BFE"
              ></path>
              <path
                d="M22.24 60.0013L22.2431 59.9738V59.9461C22.2431 59.1744 22.8375 58.5044 23.6831 58.5044C24.4337 58.5044 25.1232 59.1939 25.1232 59.9461C25.1232 60.7177 24.5288 61.3878 23.6831 61.3878C22.7837 61.3878 22.1647 60.6799 22.24 60.0013Z"
                fill="#5C3BFE"
                stroke="#5C3BFE"
              ></path>
              <path
                d="M116.133 102.337C116.133 103.109 115.539 103.779 114.693 103.779C113.847 103.779 113.253 103.109 113.253 102.337C113.253 101.585 113.942 100.896 114.693 100.896C115.444 100.896 116.133 101.585 116.133 102.337Z"
                fill="#5C3BFE"
                stroke="#5C3BFE"
              ></path>
              <path
                d="M31.6282 59.9461C31.6282 60.7177 31.0338 61.3878 30.1881 61.3878C29.3425 61.3878 28.748 60.7177 28.748 59.9461C28.748 59.1939 29.4376 58.5044 30.1881 58.5044C30.9387 58.5044 31.6282 59.1939 31.6282 59.9461Z"
                fill="#5C3BFE"
                stroke="#5C3BFE"
              ></path>
              <rect
                x="21.5"
                y="18.3901"
                width="3.11429"
                height="3.11429"
                stroke="#5C3BFE"
              ></rect>
              <rect
                x="26.1426"
                y="17.8901"
                width="4.11429"
                height="4.11429"
                fill="#5C3BFE"
              ></rect>
              <rect
                x="32.8145"
                y="18.3901"
                width="3.11429"
                height="3.11429"
                stroke="#5C3BFE"
              ></rect>
            </svg>
            <div className="font-bold text-[28px] text-[#0020a7]">
              Техническая поддержка
            </div>
            <div className="text-[16px] text-[#808080]">
              После релиза процесс разработки не заканчивается. Наша команда
              будет прислушиваться к отзывам пользователей и обновлять
              приложение.
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <a href="https://t.me/baielsag">
            <Button
              className="text-[25px] h-[50px]"
              variant={"outline"}
              size={"lg"}
            >
              Оставить заявку
            </Button>
          </a>
        </div>
      </Container>
    </div>
  );
};

export default MainIncluded;
