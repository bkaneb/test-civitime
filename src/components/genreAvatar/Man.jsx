import React, { useContext } from "react";
import AvatarContext from "../../contexts/AvatarContext";
import { SkinColors, ShirtColors, HairColors } from "../Colors";

const Man = () => {
  const { currentShirtMan, currentSkinMan, currentHairMan } = useContext(AvatarContext);
  const ShirtColor = ShirtColors[currentShirtMan];
  const currentShirtColor1 =
    ShirtColor === "striped" ? "#1C3E8E" : "#" + ShirtColor;
  const currentShirtColor2 =
    ShirtColor === "striped" ? "#C0C4C7" : "#" + ShirtColor;

  return (
    <svg
      width="128"
      height="128"
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
          {/* fond image */}
        <path
          fill="#DDE1E7"
          d="M67.5 135C104.78 135 135 104.78 135 67.5C135 30.22 104.78 0 67.5 0C30.22 0 0 30.22 0 67.5C0 104.78 30.22 135 67.5 135Z"
        />
    {/* visage + cou */}
        <path
          fill={"#" + SkinColors[currentSkinMan]}
          stroke="black"
          strokeWidth="1.0195"
          strokeMiterlimit="10"
          d="M78.1 96.18 C72.21 93.13 73.3 88.81 73.3 88.81 H61.7 C61.7 88.81 62.78 93.13 56.9 96.18 C49.33 100.11 41.28 100.7 44.62 138.23C65.63 138.23 69.36 138.23 90.38 138.23C93.72 100.7 85.67 100.11 78.1 96.18Z
						 M67.6 7.75C65.54 7.65 38.63 7.16 38.63 40.27C38.63 80.46 42.85 89.79 67.6 89.79C92.35 89.79 96.47 80.56 96.47 40.27C96.47 7.16 69.564 7.65 67.6 7.75Z"
        />
        {/* sourcil et bouche */}
        <path
          stroke="black"
          strokeWidth="1.0195"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M81.35 50.9807C82.0353 50.1947 83.803 48.1313 86.9456 51.472 M53.65 50.9807C52.9659 50.1947 51.1982 48.1313 48.0557 51.472 M63.18 72.9902H71.82"
        />
        {/* cheveux */}
        <path
          fill={"#" + HairColors[currentHairMan]}
          stroke="black"
          strokeWidth="1.0195"
          strokeMiterlimit="10"
          d="M97.16 21.6021C97.16 21.7003 97.16 21.7003 97.16 21.6021C96.3747 19.2439 94.9999 16.8858 93.0358 14.7241C87.8309 9.12347 80.0727 6.0775 72.7073 5.97925C65.1455 5.97925 58.173 8.73044 51.004 10.9903C48.4507 11.7764 45.6027 12.6607 42.853 12.5625C41.5763 12.5625 40.4961 12.2677 39.3176 11.7764C39.023 11.7764 38.532 10.9903 38.2374 11.0886C35.9787 11.3834 34.1128 17.6718 33.6217 19.4404C32.9343 22.7812 32.8361 27.0062 34.211 30.1504C34.3092 30.4452 34.4074 30.6417 34.6038 30.8382C33.6217 36.9301 34.3092 49.114 35.4876 54.9111C36.2733 54.5181 37.1571 54.4198 38.041 54.5181C38.3356 54.6164 38.6302 54.7146 38.9248 54.9111C38.6302 50.5878 38.532 45.7732 38.532 40.2709C38.532 38.3057 38.6302 36.3406 38.8266 34.572C43.6386 36.4389 50.4148 34.8667 55.1286 34.8667C68.5827 34.8667 82.9206 42.1377 95.8837 35.7511C95.8837 36.3406 95.9819 36.4389 96.2765 36.3406C96.3747 37.6179 96.4729 38.8953 96.4729 40.2709C96.4729 45.8715 96.3747 50.8826 96.1783 55.3042C96.3747 55.1076 96.5711 55.0094 96.7675 54.9111C97.16 54.7146 97.6514 54.7146 98.0442 54.7146C98.3388 54.7146 98.7316 54.8129 99.0263 54.8129C101.874 46.461 103.937 28.087 97.16 21.6021Z"
        />
        {/* oreilles */}
        <path
          fill={"#" + SkinColors[currentSkinMan]}
          stroke="black"
          strokeWidth="1.0195"
          strokeMiterlimit="10"
          d="M102.86 59.17C102.659 56.8761 101.579 54.2231 99.222 53.5353C97.9453 53.1423 97.1597 53.8301 96.1776 54.2231C95.9812 58.6447 95.6866 62.5749 95.1956 66.0139C99.3202 65.9157 103.248 64.147 102.86 59.17Z
							M38.82 54.32C37.9384 53.8303 37.1528 53.2408 35.7779 53.6338C33.421 54.32 32.3407 56.9745 32.1443 59.2344C31.65 64.2455 35.6797 66.0141 39.7061 66.1124C39.3133 62.6734 39.0187 58.7431 38.82 54.32Z"
        />
        {/* tshirt color 1 */}
        <path
          fill={currentShirtColor1}
          d="M78.6373 96.1C78.5373 96.1 78.5373 96 78.4373 96C76.6373 99.5 72.5373 102 67.7373 102C62.9373 102 58.8373 99.5 57.0373 96C56.9373 96 56.9373 96.1 56.8373 96.1C49.1373 100.1 40.9373 100.7 44.3373 138.9C65.7373 138.9 69.5373 138.9 90.9373 138.9C94.5373 100.7 86.3373 100.1 78.6373 96.1Z"
        />
        {/* tshirt color 2 */}
        <path
          fill={currentShirtColor2}
          d="M78.6372 96.1C78.5372 96.1 78.5372 96 78.4372 96C77.8372 97.2 76.9372 98.2 75.8372 99.1C78.2372 98.9 80.5372 98.6 82.7372 98.1C81.4372 97.4 80.0372 96.8 78.6372 96.1Z
							M57.0373 96C56.9373 96 56.9373 96.1 56.8373 96.1C55.4373 96.8 54.0373 97.4 52.7373 98.2C54.9373 98.6 57.2373 98.9 59.5373 99.2C58.5373 98.2 57.6373 97.2 57.0373 96Z
							M90.037 107.3C89.537 105.8 89.037 104.6 88.437 103.5C84.037 105.1 77.137 106.4 67.937 106.4C58.537 106.4 51.537 105 47.137 103.4C46.537 104.4 45.937 105.7 45.437 107.1C51.237 109.3 59.637 110.5 67.937 110.5C76.037 110.5 84.237 109.4 90.037 107.3Z
							M91.6373 117.6C91.5373 116 91.4373 114.6 91.2373 113.2C87.3373 115.3 79.4373 117.4 67.9373 117.4C56.0373 117.4 47.9373 115.2 44.1373 113C43.9373 114.3 43.8373 115.8 43.7373 117.3C49.5373 120 58.7373 121.4 67.9373 121.4C76.8373 121.5 85.8373 120.2 91.6373 117.6Z
							M91.6373 128.4C91.7373 126.8 91.7373 125.2 91.7373 123.8C88.0373 126 79.9373 128.3 67.7373 128.3C55.2373 128.3 46.9373 125.9 43.4373 123.6C43.4373 125.1 43.4373 126.6 43.5373 128.3C49.3373 131 58.5373 132.4 67.7373 132.4C76.8373 132.4 85.8373 131.1 91.6373 128.4Z
							M44.0374 134.9C44.1374 136.2 44.2374 137.5 44.3374 138.9C50.6374 138.9 55.3374 138.9 59.4374 138.9C52.0374 138.2 46.8374 136.5 44.0374 134.9Z
							M90.9374 138.9C91.0374 137.6 91.1373 136.3 91.2373 135.1C88.3373 136.6 83.2374 138.2 76.0374 138.9C80.1374 138.9 84.8374 138.9 90.9374 138.9Z"
        />
        {/* trait bras vers corps */}
        <path
          stroke="black"
          strokeWidth="0.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M83.5364 111.8C83.174 116.8 82.6364 124.3 82.5364 138.9
							M51.9365 111.8C52.3365 116.8 52.8365 124.3 52.9365 138.9"
        />
        {/* color trait contour tshirt */}
        <path
          stroke="#1D1D1B"
          strokeWidth="0.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M79.3365 96.5C79.175 96.4 78.8365 96.3 78.6365 96.1C78.5365 96.1 78.5365 96 78.4365 96C76.6365 99.5 72.5365 102 67.7365 102C62.9365 102 58.9365 99.5 57.0365 96.1C49.3365 100.1 41.175 100.7 44.5365 138.9H90.9365C94.4365 101.9 86.8365 100.2 79.3365 96.5Z"
        />
        {/* color trait bras interieur */}
        <path
          stroke="black"
          strokeWidth="1.0195"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M83.0199 111.605C82.6271 116.518 82.17 123.887 82.0378 138.23
							M51.9854 111.605C52.3782 116.518 52.8692 123.887 52.9674 138.23"
        />
        {/* oeil droit */}
        <path
          fill="#61584F"
          stroke="black"
          strokeWidth="0.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M84.4885 55.8936C83.5065 55.8936 82.7209 56.6796 82.2298 57.2691C82.0334 57.5639 82.0334 57.8587 82.2298 58.1535C82.6226 58.6447 83.5065 59.5291 84.4885 59.5291C85.8634 59.5291 87.0419 57.7604 87.0419 57.7604C87.0419 57.7604 85.8634 55.8936 84.4885 55.8936Z"
        />
        {/* pupille */}
        <path
          fill="black"
          d="M84.588 59.4306C85.3473 59.4306 85.9629 58.6387 85.9629 57.6619C85.9629 56.6851 85.3473 55.8933 84.588 55.8933C83.8287 55.8933 83.2131 56.6851 83.2131 57.6619C83.2131 58.6387 83.8287 59.4306 84.588 59.4306Z"
        />
        {/* bulle blanche oeil */}
        <path
          fill="#DDDFE2"
          d="M83.6046 57.6622C83.93 57.6622 84.1938 57.3983 84.1938 57.0727C84.1938 56.7471 83.93 56.4832 83.6046 56.4832C83.2792 56.4832 83.0154 56.7471 83.0154 57.0727C83.0154 57.3983 83.2792 57.6622 83.6046 57.6622Z"
        />
        {/* oeil gauche */}
        <path
          fill="#61584F"
          stroke="black"
          strokeWidth="0.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M50.609 55.8938C51.591 55.8938 52.3767 56.6799 52.8677 57.2694C53.0641 57.5642 53.0641 57.8589 52.8677 58.1537C52.4749 58.645 51.591 59.5293 50.609 59.5293C49.2341 59.5293 48.0557 57.7607 48.0557 57.7607C48.0557 57.7607 49.1359 55.8938 50.609 55.8938Z"
        />
        {/* pupille */}
        <path
          fill="black"
          d="M50.4142 59.431C51.1735 59.431 51.789 58.6392 51.789 57.6624C51.789 56.6856 51.1735 55.8938 50.4142 55.8938C49.6549 55.8938 49.0393 56.6856 49.0393 57.6624C49.0393 58.6392 49.6549 59.431 50.4142 59.431Z"
        />
        {/* bulle blanche */}
        <path
          fill="#DDDFE2"
          d="M51.3981 57.6622C51.7235 57.6622 51.9873 57.3983 51.9873 57.0727C51.9873 56.7471 51.7235 56.4832 51.3981 56.4832C51.0726 56.4832 50.8088 56.7471 50.8088 57.0727C50.8088 57.3983 51.0726 57.6622 51.3981 57.6622Z"
        />
        {/* trait nez */}
        <path
          stroke="black"
          strokeWidth="1.0195"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M66.8147 56.0903C66.5201 58.9398 64.7524 62.5753 66.8147 62.9683C68.877 63.3613 70.9393 62.9683 70.9393 62.9683"
        />
      </g>
    </svg>
  );
};

export default Man;