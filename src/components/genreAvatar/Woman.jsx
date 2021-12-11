import React, { useContext } from "react";
import AvatarContext from "../../contexts/AvatarContext";
import { SkinColors, ShirtColors, HairColors } from "../Colors";

const Woman = () => {
  const { currentShirtWoman, currentSkinWoman, currentHairWoman } = useContext(AvatarContext);
  const ShirtColor = ShirtColors[currentShirtWoman];
  const currentShirtColor1 =
    ShirtColor === "striped" ? "#1C3E8E" : "#" + ShirtColor;

  return (
    <svg
      width="128"
      height="128"
      viewBox="0 0 144 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
          {/* fond image */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M72.5 140C109.779 140 140 109.779 140 72.5C140 35.2208 109.779 5 72.5 5C35.2208 5 5 35.2208 5 72.5C5 109.779 35.2208 140 72.5 140Z"
          fill="#DDE1E7"
        />
      </g>

      <g>
          {/* cheveux du bas */}
        <path
          d="M104.512 67.8H40.4877C40.4877 67.8 29.8169 112.5 41.4849 117.4C48.4658 120.4 54.25 116.5 72.5 116.5C90.75 116.5 96.5341 120.3 103.515 117.4C115.283 112.5 104.512 67.8 104.512 67.8Z"
          fill={"#" + HairColors[currentHairWoman]}
          stroke="black"
          strokeWidth="1.0195"
          strokeMiterlimit="10"
        />
        {/* cou */}
        <path
          d="M83.2726 101.7C77.289 98.5999 78.386 94.2 78.386 94.2H66.6183C66.6183 94.2 67.7153 98.5999 61.7317 101.7C54.0527 105.7 45.8751 106.3 49.2658 144.5C70.6073 144.5 74.397 144.5 95.7385 144.5C99.1292 106.3 90.9516 105.7 83.2726 101.7Z"
          fill={"#" + SkinColors[currentSkinWoman]}
          stroke="black"
          strokeWidth="1.0195"
          strokeMiterlimit="10"
        />
        {/* visage */}
        <path
          d="M72.5022 11.7001C70.5076 11.6001 43.0828 11.1001 43.0828 44.8001C43.0828 85.7001 47.371 95.2001 72.5022 95.2001C97.6333 95.2001 101.922 85.7001 101.922 44.8001C101.922 11.1001 74.5964 11.6001 72.5022 11.7001Z"
          fill={"#" + SkinColors[currentSkinWoman]}
          stroke="black"
          strokeWidth="1.0195"
          strokeMiterlimit="10"
        />
        {/* sourcil droit */}
        <path
          d="M86.5632 55.7001C87.2613 54.9001 89.0564 52.8001 92.2477 56.2001"
          stroke="black"
          strokeWidth="1.0195"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* sourcil gauche */}
        <path
          d="M58.4391 55.7001C57.741 54.9001 55.9459 52.8001 52.7546 56.2001"
          stroke="black"
          strokeWidth="1.0195"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* bouche */}
        <path
          d="M68.0125 78.1001H76.8881"
          stroke="black"
          strokeWidth="1.0195"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* oeil droit complet */}
        <path
          d="M89.655 60.7C88.6577 60.7 87.8599 61.4999 87.3613 62.0999C87.1618 62.3999 87.1618 62.6999 87.3613 62.9999C87.7602 63.4999 88.6577 64.3999 89.655 64.3999C91.0512 64.3999 92.2479 62.5999 92.2479 62.5999C92.2479 62.5999 91.0512 60.7 89.655 60.7Z"
          fill="#61584F"
          stroke="black"
          strokeWidth="0.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* fond oeil droit */}
        <path
          d="M89.7551 64.2999C90.5261 64.2999 91.1512 63.4941 91.1512 62.4999C91.1512 61.5058 90.5261 60.7 89.7551 60.7C88.984 60.7 88.3589 61.5058 88.3589 62.4999C88.3589 63.4941 88.984 64.2999 89.7551 64.2999Z"
          fill="black"
        />
        {/* oeil droit */}
        <path
          d="M88.8576 62.5C89.1881 62.5 89.456 62.2314 89.456 61.9C89.456 61.5687 89.1881 61.3 88.8576 61.3C88.5272 61.3 88.2593 61.5687 88.2593 61.9C88.2593 62.2314 88.5272 62.5 88.8576 62.5Z"
          fill="#DDDFE2"
        />
        {/* oeil complet */}
        <path
          d="M55.2479 60.7C56.2452 60.7 57.043 61.4999 57.5416 62.0999C57.7411 62.3999 57.7411 62.6999 57.5416 62.9999C57.1427 63.4999 56.2452 64.3999 55.2479 64.3999C53.8517 64.3999 52.655 62.5999 52.655 62.5999C52.655 62.5999 53.8517 60.7 55.2479 60.7Z"
          fill="#61584F"
          stroke="black"
          strokeWidth="0.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* fond oeil */}
        <path
          d="M55.1486 64.2999C55.9197 64.2999 56.5448 63.4941 56.5448 62.4999C56.5448 61.5058 55.9197 60.7 55.1486 60.7C54.3775 60.7 53.7524 61.5058 53.7524 62.4999C53.7524 63.4941 54.3775 64.2999 55.1486 64.2999Z"
          fill="black"
        />
        {/* oeil gauche */}
        <path
          d="M56.146 62.5C56.4764 62.5 56.7443 62.2314 56.7443 61.9C56.7443 61.5687 56.4764 61.3 56.146 61.3C55.8155 61.3 55.5476 61.5687 55.5476 61.9C55.5476 62.2314 55.8155 62.5 56.146 62.5Z"
          fill="#DDDFE2"
        />
        {/* haut cheveux */}
        <path
          d="M71.903 10.5001C40.0901 5.30009 37.4973 51.8001 39.9904 60.2001C41.2869 63.9001 40.4891 67.8001 40.4891 67.8001H43.4809C43.4809 67.8001 43.2814 65.4001 43.6803 63.9001C44.6776 60.1001 47.1707 54.1001 52.7554 44.5001C64.7227 24.1001 72.3019 22.2001 71.7035 19.9001C71.0054 17.7001 72.6011 12.7001 72.6011 12.7001C73.6981 14.5001 72.1024 18.8001 74.3962 21.3001C97.2336 46.3001 101.322 64.1001 101.422 64.5001C101.522 65.0001 101.721 67.7001 101.721 67.7001H104.713C104.713 67.7001 106.109 62.4001 106.01 58.8001C107.605 1.60009 71.903 10.5001 71.903 10.5001Z"
          fill={"#" + HairColors[currentHairWoman]}
          stroke="black"
          strokeWidth="1.0195"
          strokeMiterlimit="10"
        />

        {/* T-shirt */}

        <path
          d="M83.2709 101.7C83.1712 101.7 83.1712 101.6 83.0715 101.6C81.2764 105.1 77.1876 107.6 72.4007 107.6C67.6138 107.6 63.525 105.1 61.7299 101.6C61.6302 101.6 61.6302 101.7 61.5305 101.7C53.8515 105.7 45.6739 106.3 49.0646 144.5C70.4062 144.5 74.1958 144.5 95.5373 144.5C99.1275 106.3 90.9499 105.7 83.2709 101.7Z"
          fill={currentShirtColor1}
          stroke="black"
          strokeWidth="1.0195"
          strokeMiterlimit="10"
        />

        <path
          d="M88.2578 117.4C87.8589 122.4 87.3602 129.9 87.2605 144.5"
          stroke="black"
          strokeWidth="1.0195"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M56.7449 117.4C57.1438 122.4 57.6424 129.9 57.7421 144.5"
          stroke="black"
          strokeWidth="1.0195"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* nez */}
        <path
          d="M71.7028 61.3999C71.4036 64.2999 69.6085 67.9999 71.7028 68.3999C73.7971 68.7999 75.8913 68.3999 75.8913 68.3999"
          stroke="black"
          strokeWidth="1.0195"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* oreille droite */}
        <path
          d="M108.303 63.9999C108.103 61.6999 107.006 58.9999 104.613 58.2999C103.317 57.8999 102.519 58.5999 101.521 58.9999C101.322 63.4999 101.023 67.4999 100.524 70.9999C104.713 70.8999 108.802 69.0999 108.303 63.9999Z"
          fill={"#" + SkinColors[currentSkinWoman]}
          stroke="black"
          strokeWidth="1.0195"
          strokeMiterlimit="10"
        />
        {/* oreille gauche */}
        <path
          d="M43.2805 59.1C42.3829 58.6 41.5851 58 40.189 58.4C37.8952 59 36.7982 61.7 36.5988 64C36.1002 69.1 40.189 70.9 44.2778 71C43.7791 67.6 43.4799 63.6 43.2805 59.1Z"
          fill={"#" + SkinColors[currentSkinWoman]}
          stroke="black"
          strokeWidth="1.0195"
          strokeMiterlimit="10"
        />
{/*         <path
          fill={curShirtColor2}
          d="M83.2709 101.7C83.1712 101.7 83.1712 101.6 83.0715 101.6C81.2764 105.1 77.1876 107.6 72.4007 107.6C67.6138 107.6 63.525 105.1 61.7299 101.6C61.6302 101.6 61.6302 101.7 61.5305 101.7C53.8515 105.7 45.6739 106.3 49.0646 144.5C70.4062 144.5 74.1958 144.5 95.5373 144.5C99.1275 106.3 90.9499 105.7 83.2709 101.7Z"
        /> */}
      </g>
    </svg>
  );
};

export default Woman;
