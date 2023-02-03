import React from 'react';
import { Svg, SvgLink } from '../../core/theme';

const getGradient = () => {
  return (
    <defs>
      <linearGradient id="gradient">
        <stop offset="0%" stopColor="var(--color-stop)" />
        <stop offset="100%" stopColor="var(--color-bot)" />
      </linearGradient>
    </defs>
  );
};

export const SvgGenerator = ({ id }: { id: string }) => {
  switch (id) {
    case 'telegram':
      return (
        <SvgLink viewBox="0 0 25 25" height="45" width="45">
          {getGradient()}
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"></path>
        </SvgLink>
      );
    case 'linkendin':
      return (
        <SvgLink width="45" height="45" viewBox="0 0 25 25">
          <path d="M12.5 0.5C5.8725 0.5 0.5 5.8725 0.5 12.5C0.5 19.1275 5.8725 24.5 12.5 24.5C19.1275 24.5 24.5 19.1275 24.5 12.5C24.5 5.8725 19.1275 0.5 12.5 0.5ZM9.5625 17.4738H7.1325V9.65375H9.5625V17.4738ZM8.3325 8.69375C7.565 8.69375 7.06875 8.15 7.06875 7.4775C7.06875 6.79125 7.58 6.26375 8.36375 6.26375C9.1475 6.26375 9.6275 6.79125 9.6425 7.4775C9.6425 8.15 9.1475 8.69375 8.3325 8.69375ZM18.4375 17.4738H16.0075V13.14C16.0075 12.1313 15.655 11.4462 14.7763 11.4462C14.105 11.4462 13.7063 11.91 13.53 12.3563C13.465 12.515 13.4488 12.74 13.4488 12.9638V17.4725H11.0175V12.1475C11.0175 11.1713 10.9862 10.355 10.9537 9.6525H13.065L13.1763 10.7388H13.225C13.545 10.2288 14.3288 9.47625 15.64 9.47625C17.2388 9.47625 18.4375 10.5475 18.4375 12.85V17.4738Z" />
        </SvgLink>
      );
    case 'github':
      return (
        <SvgLink width="45px" height="45px" viewBox="0 -3.5 256 256">
          <g>
            <path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0" />
            <path d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398" />
          </g>
        </SvgLink>
      );
    case 'instagram':
      return (
        <SvgLink width="45" height="45" viewBox="0 0 260 260">
          <path
            d="M164.58,64H95.42C78.1,64,64,78.1,64,95.42v69.16C64,181.9,78.1,196,95.42,196h69.16c17.32,0,31.42-14.1,31.42-31.42V95.42
	C196,78.1,181.9,64,164.58,64z M130,171.1c-22.66,0-41.1-18.44-41.1-41.1s18.44-41.1,41.1-41.1s41.1,18.44,41.1,41.1
	S152.66,171.1,130,171.1z M172.22,97.3c-5.3,0-9.6-4.3-9.6-9.61c0-5.3,4.3-9.6,9.6-9.6c5.31,0,9.61,4.3,9.61,9.6
	C181.83,93,177.53,97.3,172.22,97.3z M130,102.9c-14.94,0-27.1,12.16-27.1,27.1s12.16,27.1,27.1,27.1s27.1-12.16,27.1-27.1
	S144.94,102.9,130,102.9z M130,2C59.31,2,2,59.31,2,130s57.31,128,128,128s128-57.31,128-128S200.69,2,130,2z M210,164.58
	c0,25.04-20.38,45.42-45.42,45.42H95.42C70.38,210,50,189.62,50,164.58V95.42C50,70.38,70.38,50,95.42,50h69.16
	C189.62,50,210,70.38,210,95.42V164.58z"
          />
        </SvgLink>
      );
    case 'mail':
      return (
        <SvgLink width="45px" height="45px" viewBox="0 0 20 20">
          <path d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zM6.231 7h7.52c.399 0 .193.512-.024.643-.217.13-3.22 1.947-3.333 2.014s-.257.1-.403.1a.793.793 0 0 1-.402-.1L6.255 7.643C6.038 7.512 5.833 7 6.231 7zM14 12.5c0 .21-.252.5-.444.5H6.444C6.252 13 6 12.71 6 12.5V8.853c0-.092-.002-.211.172-.11l3.417 2.015a.69.69 0 0 0 .402.1c.146 0 .252-.011.403-.1l3.434-2.014c.174-.102.172.018.172.11V12.5z" />
        </SvgLink>
      );
    case 'dark':
      return (
        <SvgLink width="45px" height="45px" viewBox="0 0 980 980">
          <g transform="translate(0.000000,980.000000) scale(0.100000,-0.100000)">
            <path
              d="M4560 9789 c-1035 -75 -1998 -463 -2800 -1128 -150 -123 -501 -475
-622 -621 -881 -1068 -1270 -2403 -1098 -3765 119 -934 501 -1801 1124 -2545
98 -117 370 -393 496 -504 1328 -1166 3158 -1531 4825 -962 895 305 1700 879
2281 1627 735 946 1100 2126 1024 3314 -70 1094 -491 2109 -1216 2935 -112
128 -386 398 -509 501 -763 642 -1665 1026 -2665 1134 -174 19 -664 27 -840
14z m1316 -1904 c152 -16 301 -42 439 -76 88 -22 367 -111 362 -116 -2 -1 -43
-14 -93 -28 -279 -81 -596 -241 -834 -421 -757 -572 -1122 -1485 -955 -2389
135 -729 591 -1354 1261 -1728 400 -223 842 -337 1314 -337 l175 0 -30 -25
c-16 -13 -79 -59 -139 -102 -688 -487 -1528 -678 -2362 -538 -875 147 -1649
660 -2099 1390 -506 822 -561 1828 -146 2690 153 317 340 575 602 830 332 323
705 549 1154 701 231 77 514 137 750 157 119 10 470 5 601 -8z"
            />
          </g>
        </SvgLink>
      );
    case 'light':
      return (
        <SvgLink width="45px" height="45px" viewBox="0 0 512.000000 512.000000">
          <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)">
            <path
              d="M2321 5110 c-497 -48 -990 -251 -1376 -565 -114 -92 -294 -274 -384
-387 -229 -287 -417 -675 -495 -1023 -49 -218 -60 -325 -60 -575 0 -250 11
-357 60 -575 79 -355 272 -749 509 -1040 92 -114 274 -294 387 -384 287 -229
675 -417 1023 -495 218 -49 325 -60 575 -60 250 0 357 11 575 60 261 58 603
204 828 353 389 259 688 599 893 1016 125 255 196 484 241 775 24 161 24 539
0 700 -45 291 -116 520 -241 775 -134 272 -283 480 -498 692 -211 209 -404
346 -673 478 -252 124 -486 197 -765 240 -126 19 -468 27 -599 15z m306 -777
c45 -30 53 -66 53 -258 0 -187 -7 -222 -50 -260 -15 -14 -36 -20 -70 -20 -54
0 -84 20 -106 72 -17 39 -20 367 -4 408 5 14 22 37 36 50 33 30 101 34 141 8z
m-1024 -373 c50 -40 240 -273 253 -311 33 -94 -54 -176 -154 -145 -22 7 -204
213 -256 290 -29 44 -33 83 -11 126 30 58 118 79 168 40z m2037 5 c62 -32 76
-108 34 -171 -52 -77 -234 -283 -256 -290 -56 -17 -125 5 -145 48 -21 44 -23
59 -9 97 13 38 203 271 253 311 31 24 82 26 123 5z m-839 -499 c173 -51 291
-120 402 -234 195 -203 272 -460 222 -746 -29 -167 -75 -268 -216 -481 -151
-228 -219 -381 -219 -490 0 -48 -22 -98 -53 -121 l-25 -19 30 -32 c41 -43 43
-101 4 -142 l-26 -28 20 -18 c45 -40 42 -121 -5 -162 -20 -18 -38 -23 -79 -23
-53 0 -53 0 -64 -38 -28 -93 -128 -164 -232 -164 -104 0 -204 71 -232 164 -11
38 -11 38 -64 38 -41 0 -59 5 -79 22 -47 42 -50 123 -5 163 l20 18 -26 28
c-39 40 -37 100 3 141 l30 29 -33 33 c-25 25 -34 44 -38 82 -22 177 -66 279
-225 519 -141 212 -187 314 -216 481 -85 488 221 913 722 1004 91 17 289 4
384 -24z m-1617 -456 c93 -17 177 -35 187 -40 36 -20 59 -61 59 -107 0 -38 -5
-50 -34 -79 -27 -27 -42 -34 -72 -34 -48 0 -329 48 -367 62 -44 17 -77 63 -77
109 0 51 13 75 53 99 42 26 52 25 251 -10z m2996 15 c41 -21 60 -53 60 -101 0
-49 -32 -95 -77 -112 -38 -14 -319 -62 -367 -62 -30 0 -45 7 -72 34 -29 29
-34 41 -34 81 0 40 5 52 33 80 28 28 44 34 132 50 55 10 129 23 165 30 89 18
126 18 160 0z"
            />
          </g>
        </SvgLink>
      );

    case 'web':
      return (
        <Svg width="45px" height="45px" viewBox="0 0 1000 1000">
          <g>
            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)">
              <path d="M4530.1,5007.9C3375.4,4889,2341.7,4400,1530.4,3588.6C751.6,2809.9,287.5,1860.5,124.4,723.1c-32.6-226.3-32.6-982,0-1208.3c163-1137.4,629.1-2086.8,1405.9-2865.5c776.8-776.8,1730-1244.8,2865.5-1405.9c226.3-32.6,982-32.6,1208.3,0c939.8,134.3,1779.9,491,2474.2,1053c987.8,797.9,1611.1,1916.1,1797.2,3218.4c32.6,226.3,32.6,982,0,1208.3c-161.1,1135.5-629.1,2088.7-1405.9,2865.5c-759.5,759.5-1687.8,1223.7-2779.2,1392.5C5448.8,5017.5,4775.6,5034.8,4530.1,5007.9z M5748,2150.1c0-15.3-740.3-2535.6-1047.2-3569.4c-9.6-30.7-38.4-34.5-258.9-34.5c-136.2,0-247.4,5.8-247.4,11.5c0,21.1,1035.7,3525.3,1054.9,3571.3c17.3,40.3,26.9,42.2,258.9,42.2C5667.5,2171.2,5748,2163.6,5748,2150.1z M3830,1137.4c0-174.5-7.7-251.3-23-264.7c-13.4-9.6-420-189.9-901.5-400.9c-483.3-209.1-878.4-387.4-878.4-393.2c0-5.8,402.8-188,897.6-402.8l895.7-393.2l5.7-262.8c1.9-143.8-1.9-262.8-9.6-260.9c-7.7,0-546.6,249.3-1194.9,550.5L1442.1-140V78.7v216.7l1170,544.7c644.5,299.2,1181.5,544.7,1194.9,544.7C3824.3,1384.9,3830,1323.5,3830,1137.4z M7234.5,857.4C7846.3,575.5,8366.1,335.7,8391,324.2c42.2-19.2,44.1-26.9,38.4-249.3l-5.8-230.2l-997.4-458.4c-548.5-251.3-1081.8-494.8-1183.4-540.9l-188-86.3v262.8v262.8l911,391.3C7466.5-109.3,7877,71,7877,78.7c0,5.8-410.5,188-911.1,402.8l-911,389.4v258.9c0,237.8,1.9,258.9,34.5,249.3C6106.7,1373.3,6622.6,1139.4,7234.5,857.4z" />
            </g>
          </g>
        </Svg>
      );

    case 'mobile':
      return (
        <Svg width="45px" height="45px" viewBox="0 0 980.000000 980.000000">
          <g transform="translate(0.000000,980.000000) scale(0.100000,-0.100000)">
            <path
              d="M4560 9789 c-1035 -75 -1998 -463 -2800 -1128 -150 -123 -501 -475
-622 -621 -881 -1068 -1270 -2403 -1098 -3765 119 -934 501 -1801 1124 -2545
98 -117 370 -393 496 -504 1328 -1166 3158 -1531 4825 -962 895 305 1700 879
2281 1627 735 946 1100 2126 1024 3314 -70 1094 -491 2109 -1216 2935 -112
128 -386 398 -509 501 -763 642 -1665 1026 -2665 1134 -174 19 -664 27 -840
14z m1740 -1472 c161 -49 305 -168 372 -307 68 -142 63 114 63 -3200 l0 -3015
-23 -75 c-46 -149 -143 -274 -273 -352 -76 -46 -137 -66 -244 -78 -110 -13
-2484 -13 -2598 0 -236 27 -426 183 -505 414 l-27 81 0 3020 c0 2505 2 3029
14 3075 24 101 80 199 156 276 100 100 202 154 335 174 30 4 645 7 1365 6
1198 -2 1315 -3 1365 -19z"
            />
            <path
              d="M4529 7857 c-48 -32 -67 -89 -46 -139 31 -73 29 -73 422 -76 192 -2
369 0 393 3 89 13 138 102 96 174 -35 60 -44 61 -457 61 -373 0 -374 0 -408
-23z"
            />
            <path
              d="M3350 4880 l0 -2330 1550 0 1550 0 0 2330 0 2330 -1550 0 -1550 0 0
-2330z"
            />
            <path
              d="M4840 2221 c-90 -29 -183 -113 -223 -199 -34 -72 -31 -207 5 -284 34
-73 104 -142 176 -176 47 -22 71 -27 142 -27 77 0 92 3 152 33 74 36 132 95
169 170 20 39 24 63 24 142 0 82 -4 103 -26 151 -33 70 -91 129 -161 165 -44
23 -68 28 -143 31 -49 1 -101 -1 -115 -6z"
            />
          </g>
        </Svg>
      );

    case 'games':
      return (
        <Svg width="45px" height="45px" viewBox="0 0 512.000000 512.000000">
          <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)">
            <path
              d="M2400 5114 c-479 -41 -879 -176 -1247 -420 -422 -280 -756 -680 -947
-1135 -293 -699 -270 -1452 64 -2134 377 -768 1118 -1292 1990 -1407 122 -16
478 -16 600 0 596 79 1129 344 1536 763 546 564 805 1351 698 2123 -101 733
-508 1380 -1127 1790 -319 211 -681 347 -1067 401 -112 15 -411 27 -500 19z
m1180 -1112 c0 -4 -230 -279 -511 -611 l-512 -603 -41 6 c-23 3 -365 33 -761
66 -396 33 -733 64 -749 68 -29 7 -16 21 513 525 l542 517 47 0 c69 0 1297 30
1367 33 33 2 70 4 83 5 12 1 22 -2 22 -6z m168 -124 c5 -18 107 -346 226 -729
119 -382 216 -700 216 -707 0 -20 -783 -1273 -790 -1265 -4 4 -164 347 -356
762 -244 529 -345 757 -338 767 25 36 1020 1204 1026 1204 4 0 11 -15 16 -32z
m-2253 -1159 c868 -73 1039 -89 1046 -97 11 -13 700 -1514 697 -1518 -6 -5
-1512 306 -1519 314 -10 12 -769 1321 -775 1337 -5 12 2 14 37 10 24 -3 256
-24 514 -46z"
            />
            <path
              d="M2324 3526 c-78 -29 -143 -67 -188 -110 -91 -85 4 -97 161 -19 78 38
168 113 161 135 -7 21 -69 19 -134 -6z"
            />
            <path
              d="M3606 3446 c-39 -41 -56 -94 -56 -175 0 -142 84 -170 144 -49 49 98
27 258 -35 258 -12 0 -36 -15 -53 -34z"
            />
            <path
              d="M3138 2779 c-10 -5 -30 -31 -45 -56 -21 -37 -28 -62 -31 -128 -4 -75
-3 -83 21 -110 25 -30 25 -30 60 -13 53 26 92 111 92 204 0 57 -4 76 -19 93
-21 23 -50 27 -78 10z"
            />
            <path
              d="M3560 2707 c-80 -40 -117 -228 -59 -301 11 -14 29 -26 38 -26 55 0
111 105 111 208 0 91 -40 144 -90 119z"
            />
            <path
              d="M3948 2625 c-15 -9 -38 -39 -55 -72 -36 -74 -40 -187 -9 -222 62 -68
156 42 159 185 0 50 -4 71 -20 92 -24 33 -40 36 -75 17z"
            />
            <path
              d="M3465 1909 c-81 -72 -89 -285 -10 -305 97 -24 170 259 82 321 -29 20
-31 20 -72 -16z"
            />
            <path
              d="M2162 2510 c-12 -5 -27 -20 -33 -34 -47 -102 172 -238 265 -165 19
15 26 29 26 57 0 30 -8 43 -48 82 -64 61 -146 85 -210 60z"
            />
            <path
              d="M1991 2131 c-37 -10 -65 -54 -57 -87 12 -48 84 -110 149 -129 58 -17
84 -14 125 11 35 23 31 84 -10 130 -49 56 -148 92 -207 75z"
            />
            <path
              d="M1785 1738 c-28 -16 -35 -28 -35 -66 0 -24 10 -44 41 -76 99 -108
278 -97 254 15 -20 91 -183 171 -260 127z"
            />
          </g>
        </Svg>
      );

    case 'mouse':
      return (
        <svg width="45px" height="45px" viewBox="0 0 512.000000 512.000000">
          <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)">
            <path
              d="M2370 5105 c-291 -41 -560 -175 -770 -385 -213 -214 -345 -481 -385
-780 -21 -155 -21 -2605 0 -2760 40 -299 172 -566 385 -780 214 -213 481 -345
780 -385 421 -57 838 84 1140 385 213 214 345 481 385 780 21 155 21 2605 0
2760 -40 299 -172 566 -385 780 -303 303 -726 444 -1150 385z m425 -170 c479
-100 838 -460 942 -945 17 -80 18 -167 18 -1430 0 -1263 -1 -1350 -18 -1430
-69 -321 -250 -592 -511 -765 -143 -94 -268 -146 -436 -182 -117 -24 -343 -24
-460 0 -486 103 -843 460 -947 947 -17 80 -18 167 -18 1430 0 1483 -3 1399 62
1590 125 367 446 668 817 766 173 46 387 53 551 19z"
            />
            <path d="M2480 4000 l0 -320 80 0 80 0 0 320 0 320 -80 0 -80 0 0 -320z" />
          </g>
        </svg>
      );
    case 'arrow':
      return (
        <svg id="arrow" width="15px" height="15px" viewBox="0 0 306 306">
          <g>
            <g>
              <polygon points="58.65,267.75 175.95,153 58.65,35.7 94.35,0 247.35,153 94.35,306 		" />
            </g>
          </g>
        </svg>
      );

    default:
      return <Svg></Svg>;
  }
};
