import React, { Component } from 'react';
import {perlin2, seed} from 'simplenoise';
import "./Hills.css";

export default class Hills extends Component {
    constructor(props) {
        super(props);
        // this.drawHill = this.drawHill.bind(this);
        // this.clearHills = this.clearHills.bind(this);
    }

    // drawHill(position) {
    //     const canvas = this.refs.canvas;
    //     const ctx = canvas.getContext("2d");

    //     // ctx.canvas.width = window.innerWidth;

    //     const initialHeight = 500;
    //     let addedHeight = (position)*55;

    //     ctx.beginPath();
    //     ctx.moveTo(0,initialHeight+addedHeight);

    //     seed(Math.random());

    //     for (var x = 0; x < canvas.width; x++) { 
    //         let value = Math.abs(perlin2(x/42, canvas.height/300));
    //         ctx.lineTo(x, canvas.height-(value*90)-450+addedHeight);
    //     }
    //     ctx.lineTo(canvas.width,initialHeight);
    //     ctx.closePath();
    //     var my_gradient = ctx.createLinearGradient(0, 0, 0, 550);
    //     my_gradient.addColorStop(0, 'white');
    //     my_gradient.addColorStop(1, this.props.palette[position]);
    //     ctx.fillStyle = my_gradient;
    //     ctx.fill();
    // }

    // clearHills() {
    //     const canvas = this.refs.canvas;
    //     const ctx = canvas.getContext("2d");
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    // }

    // componentDidMount() {
    //     for (let i = 1; i < this.props.palette.length; i++) {
    //         this.drawHill(i);
    //     }
    // }

    // componentDidUpdate() {
    //     this.props.palette.forEach(position => this.drawHill(position));
    //     this.drawHills();
    // }

    render() {
        return (
            // <canvas className="canvas" ref="canvas" width="1000px" height="500px"></canvas>
            <div className="mountain"><svg width="2212" height="1236" viewBox="0 0 2212 1236"  fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2105.54 368.441L2212 420.596V1204.86H7.6593V666.129L87.3158 636.44L125.612 621.195L176.929 600.077L238.97 621.195L438.111 636.44H465.684L562.191 606.61L589.765 611.566L721.504 711.865L736.823 721.25L752.141 726.309H805.756L873.158 714.273L906.093 681.375L952.815 636.44L992.643 611.566L1009.49 590.704H1037.07L1080.72 550.584L1138.94 566.632L1160.38 590.704L1246.93 498.429L1288.29 399.734L1399.35 345.171L1429.22 313.878L1502.75 267.339L1532.62 232.034L1595.43 183.89L1619.17 157.411L1691.94 69.9502L1718.74 61.9263L1741.72 98.034H1767L1776.95 112.477L1793.04 124.513L1821.38 141.363L1843.59 183.89L1899.5 246.477L1982.99 301.842L2105.54 368.441Z" fill="url(#paint0_linear)"/>
<path d="M1689.64 518.107L1628.36 494.347L1501.22 561.467L1467.52 601.264L1418.5 731.347L1363.35 862.618L1432.29 818.069L1467.52 731.347L1520.37 636.904L1593.9 579.881L1689.64 518.107Z" fill="url(#paint1_linear)"/>
<path d="M1678.15 105.287L1710.32 85.6855L1713.38 88.6555L1715.68 91.0314L1660.53 128.452L1626.83 194.979L1597.73 225.272L1581.64 288.234L1471.35 407.031L1431.52 538.896L1266.84 952.904H1190.25L1377.9 521.077L1471.35 378.52L1565.56 280.513L1581.64 221.708L1597.73 189.039L1632.96 155.776L1654.4 120.137L1678.15 105.287Z" fill="url(#paint2_linear)"/>
<path d="M1710.32 85.6858L1698.06 68.4602L1678.15 75.588L1580.11 191.415L1534.15 247.25L1597.73 189.039L1632.96 156.37L1654.4 120.137L1710.32 85.6858Z" fill="url(#paint3_linear)"/>
<path d="M1070.77 564.438L1079.19 556.716L1063.87 550.776L1030.94 581.663L1024.05 590.573H997.238L983.451 607.204L939.028 638.092L862.435 711.746L880.817 729.565L903.029 687.986L932.134 655.317L965.069 633.934L993.408 610.768L1011.79 597.701L1034 595.325L1050.85 590.573L1063.87 573.347L1070.77 564.438Z" fill="url(#paint4_linear)"/>
<path d="M557.596 608.393L545.341 606.017L533.086 610.174L500.917 619.678L489.428 623.242L466.45 630.37L450.366 635.716L412.069 680.265L335.476 753.919L353.859 771.738L376.071 730.159L405.176 697.49L428.154 672.543L454.961 642.844L475.641 635.716L500.917 628.588L521.597 624.43L542.277 622.054L557.596 608.393Z" fill="url(#paint5_linear)"/>
<path d="M161.611 606.016L166.972 603.046L158.547 600.076L125.612 613.738L106.464 620.866L85.018 629.776L59.7424 639.873L4.59558 664.883L3.06372 717.732L9.95707 680.264L42.126 662.445L70.4654 643.437L95.741 634.528L117.953 629.776L130.974 622.054L148.59 611.362L161.611 606.016Z" fill="url(#paint6_linear)"/>
<path d="M1755.51 117.167L1749.38 117.761L1737.89 133.204L1734.83 145.678L1729.47 159.934L1711.85 180.723L1705.72 206.264L1706.49 209.828L1717.21 181.911L1737.89 159.934L1745.55 133.204L1755.51 117.167Z" fill="url(#paint7_linear)"/>
<path d="M1749.38 118.355H1719.92L1693.41 133.799L1686.34 146.272L1673.97 160.528L1633.31 181.317L1619.17 206.859L1617.64 221.708L1645.68 182.505L1693.41 160.528L1711.08 133.799L1747.08 120.137L1749.38 118.355Z" fill="url(#paint8_linear)"/>
<path d="M1735.59 117.761H1753.98L1881.89 246.062L1828.27 182.505L1804.53 140.332L1776.19 123.107L1760.1 111.227L1750.91 96.9714H1735.59L1748.61 99.9414L1735.59 117.761Z" fill="url(#paint9_linear)"/>
<path d="M1745.55 133.205L1754.74 118.949L1763.17 119.543L1795.34 143.302L1827.5 185.475L1884.18 246.062L1988.35 313.182L2195.15 420.099L1982.99 319.122L1852.01 240.122L1769.29 202.107L1731.76 240.122L1685.04 250.814L1701.13 220.52L1717.21 181.911L1737.89 159.934L1745.55 133.205Z" fill="url(#paint10_linear)"/>
<path d="M1712.62 569.189L1593.13 577.505L1524.2 632.152L1593.13 625.024L1681.21 608.392L1710.32 577.505L1712.62 569.189Z" fill="url(#paint11_linear)"/>
<path d="M1698.06 68.4601L1701.89 61.3323L1674.32 68.4601L1580.88 182.505L1560.96 197.355L1580.88 190.821L1606.92 159.934L1648.28 115.385L1678.15 75.5879L1698.06 68.4601Z" fill="url(#paint12_linear)"/>
<path d="M1698.06 68.4601L1701.89 61.3323L1724.1 96.3774L1734.83 97.5654L1722.57 106.475L1704.19 109.445L1687.34 123.107L1649.81 149.242L1659.77 125.483L1685.04 106.475L1708.02 91.0315L1710.32 86.2796L1698.06 68.4601Z" fill="url(#paint13_linear)"/>
<path d="M1716.44 163.498L1734.83 145.678L1730.23 159.34L1712.62 181.317L1707.25 205.671L1687.34 245.468L1662.83 251.408L1632.96 262.693V249.032L1669.72 183.693L1716.44 163.498Z" fill="url(#paint14_linear)"/>
<path d="M1501.98 399.904L1432.29 529.987L1421.56 631.558L1531.86 491.378L1647.51 418.317H1710.32L2064.18 652.941L2212 890.066V665.649V566.845L2110.9 529.987L1920.95 418.317L1730.23 242.498L1667.43 273.385L1643.68 319.716L1501.98 399.904Z" fill="url(#paint15_linear)"/>
<path d="M1534.92 456.926L1653.64 386.242H1715.68L1681.21 412.378L1584.7 456.926L1465.99 598.889L1408.54 935.678L1306.67 962.408L1427.69 598.889L1534.92 456.926Z" fill="url(#paint16_linear)"/>
<path d="M416.665 707.588L535.384 636.904L562.957 632.746V663.039L466.45 707.588L446.536 745.009L354.625 749.167L416.665 707.588Z" fill="url(#paint17_linear)"/>
<path d="M1821.38 438.513L2104.77 657.693L2212 896.96V567.611L2107.07 525.485L1965.37 446.829L1801.46 327.438L1730.23 240.122L1633.72 264.475L1618.41 314.964L1475.18 408.814L1431.52 540.678L1515.77 453.956L1659.77 382.084L1708.79 377.332L1821.38 438.513Z" fill="url(#paint18_linear)"/>
<path d="M1773.12 222.896L1733.29 243.092L1800.7 326.844L1961.54 446.829L2097.11 522.265L2212 566.845V513.996L1999.07 349.415L1833.63 239.528L1773.12 222.896Z" fill="url(#paint19_linear)"/>
<path d="M1179.31 652.347L1188.72 646.716L1172.8 623.364L1142.76 589.385L1122.85 565.625L1079.96 556.122L1069.24 565.625L1062.34 575.129L1051.62 589.385L1073.83 582.851L1091.45 581.663L1128.21 614.332L1156.55 644.625L1201.74 703.43L1179.31 652.347Z" fill="url(#paint20_linear)"/>
<path d="M1501.22 400.498L1644.45 320.31L1632.96 339.911L1488.2 425.445L1501.22 400.498Z" fill="url(#paint21_linear)"/>
<path d="M1628.36 495.535L1683.51 412.377L1584.71 450.986L1499.69 563.25L1628.36 495.535Z" fill="url(#paint22_linear)"/>
<path d="M156.249 623.242L163.296 605.422L145.526 613.144L127.144 623.242L92.6772 635.122L156.249 623.242Z" fill="url(#paint23_linear)"/>
<path d="M899.2 695.114L882.349 730.753L975.026 695.114L1005.66 641.061L1086.09 587.603L1046.26 591.761L975.026 641.061L899.2 695.114Z" fill="url(#paint24_linear)"/>
<path d="M1128.21 614.926L1090.68 582.851L1086.85 583.445L1085.32 587.603L1109.06 606.61L1134.34 626.806L1159.61 649.971L1147.36 636.31L1128.21 614.926Z" fill="url(#paint25_linear)"/>
<path d="M620.402 648.19L572.914 610.769L556.064 608.393L549.17 616.114L579.808 635.716L610.445 649.378L630.359 661.257L644.911 666.009L620.402 648.19Z" fill="url(#paint26_linear)"/>
<path d="M370.709 725.407L353.859 761.046L445.77 711.746L479.471 661.851L543.809 622.054H517.767L453.429 642.843L370.709 725.407Z" fill="url(#paint27_linear)"/>
<path d="M1628.36 494.941L1679.68 418.317L1685.04 412.971L1712.61 419.505L2062.64 650.565L2044.26 667.197L1990.65 637.498L1835.93 564.438L1628.36 494.941Z" fill="url(#paint28_linear)"/>
<path d="M1513.47 231.806L1561.73 195.573L1492.03 274.573L1420.8 316.152L1380.97 350.603L1276.8 401.686L1266.84 443.264L1247.7 458.708L1266.84 401.686L1380.97 342.881L1410.84 311.994L1482.84 265.663L1513.47 231.806Z" fill="url(#paint29_linear)"/>
<path d="M1276.04 402.28L1382.5 351.197L1291.35 415.348L1267.61 441.483L1276.04 402.28Z" fill="url(#paint30_linear)"/>
<path d="M886.179 706.4L935.964 652.347L1015.62 595.325L1050.85 589.979L948.985 659.475L886.179 706.4Z" fill="url(#paint31_linear)"/>
<path d="M1560.2 197.949L1578.58 192.603L1540.28 239.528L1485.9 317.934L1234.68 495.535L1247.7 459.302L1265.31 446.829L1291.35 415.347L1380.97 352.385L1419.26 317.934L1492.79 275.167L1531.09 231.212L1560.2 197.949Z" fill="url(#paint32_linear)"/>
<path d="M1538.75 244.28L1596.96 189.633L1583.94 219.332L1567.09 277.543L1467.52 385.648L1380.2 516.325L1190.25 949.934L1065.41 962.407L1249.99 487.22L1485.9 318.528L1538.75 244.28Z" fill="url(#paint33_linear)"/>
<path d="M1246.93 459.896L1267.61 445.046L1261.48 482.467L1201.74 590.573H1148.89L1231.61 500.881L1246.93 459.896Z" fill="url(#paint34_linear)"/>
<path d="M1324.29 483.656L1483.6 318.528L1477.48 355.949L1367.95 472.37L1123.62 949.934L1043.96 944.588L1297.48 564.438L1324.29 483.656Z" fill="url(#paint35_linear)"/>
<path d="M1745.55 133.798L1755.51 117.761L1763.17 139.738L1768.53 203.295L1731.76 239.528L1685.04 250.813L1706.49 208.046L1717.21 182.505L1737.89 159.934L1745.55 133.798Z" fill="url(#paint36_linear)"/>
<path d="M1709.55 578.099L1714.15 570.377L1796.1 631.558L1956.18 822.821H1937.03L1779.25 638.092L1709.55 578.099Z" fill="url(#paint37_linear)"/>
<path d="M1954.65 826.385L1711.08 577.505L1681.98 588.791L1606.92 592.949L1529.56 644.625L1351.86 935.678L1933.2 928.55L1954.65 826.385Z" fill="url(#paint38_linear)"/>
<path d="M163.143 605.422L167.738 603.046L234.374 624.43L210.63 629.776L156.249 623.242L163.143 605.422Z" fill="url(#paint39_linear)"/>
<path d="M1057.75 868.621C591.296 831.856 0 831.856 0 831.856V1235.5H2212V851.004C2212 851.004 1537.22 895.428 1057.75 868.621Z" fill="url(#paint40_linear)"/>
<path d="M1018.15 973.434C855.859 942.581 0 880.109 0 880.109V1235.5H1675.85C1675.85 1235.5 1180.44 1004.29 1018.15 973.434Z" fill="url(#paint41_linear)"/>
<path d="M1998.22 781.935L2093.54 448.892L2188.85 731.474L2117.37 711.29L2153.11 792.028L2200.77 903.042L2117.37 872.765L2200.77 963.595L2212 973.552V1050.15V1084.61V1156.61V1184.95L2210.19 1184.74C2180.8 1181.6 2100.88 1182.09 1998.22 1205.81L2045.88 1175.53L1914.82 1205.81V1162.74L1950.56 1104.89L1923.25 1090.74L1998.22 940.618L2051.15 805.814L1992.94 847.94L2069.71 670.921L1998.22 781.935Z" 
fill={this.props.palette[6]}/>
<path d="M0 373.831V0.0581055L33.6253 141.755L16.8504 124.904L48.2535 248.219L28.3393 236.73L81.1884 540.037L33.6253 504.994L69.2952 657.531L116.855 867.269L33.6253 810.067L116.855 981.671L203.737 1071.39V1137.95L140.635 1210.48H1.16871e-05V933.724V682.5L0 582.163V427.446V373.831Z" 
fill={this.props.palette[6]}/>
<path d="M1908.86 798.47L1837.38 848.931L1933.97 655.692L2039.92 828.747L1956.52 798.47L2039.92 889.3L1968.43 879.208L2016.09 949.854L2063.75 1010.41L1956.52 1000.31L2051.84 1111.33L1968.43 1101.24L2051.84 1171.88L2075.66 1232.44L2028.01 1222.34L1944.61 1232.44H1861.21L1753.98 1222.34L1837.38 1131.51L1885.03 1101.24L1753.98 1131.51L1885.03 1010.41L1789.72 1030.59L1896.95 879.208L1849.29 889.3L1908.86 798.47Z" 
fill={this.props.palette[6]}/>
<path d="M132.761 760.948L89.6136 831.856L154.28 560.717L212.928 803.516L173.61 760.948L212.928 860.195L185.355 841.047L224.672 984.735L265.522 1058.17L173.61 1044.01L255.309 1199.7L183.823 1185.55L71.4866 1228L112.336 1185.55L0 1228L112.336 1058.17L30.6371 1086.47L129.442 874.748L82.7202 933.724L132.761 760.948Z" 
fill={this.props.palette[6]}/>
<path d="M259.681 843.618L227.76 880.875L275.453 677.138L328.583 860.195L297.106 824.963L342.015 949.526L289.621 917.64L342.015 1019.51L390.623 1099.16L289.621 1078.97L349.5 1208.41L297.106 1196.64L214.771 1231.95L244.711 1196.64L162.377 1231.95L244.711 1090.74L184.832 1114.27L255.102 929.895L222.256 949.526L259.681 843.618Z" 
fill={this.props.palette[6]}/>
<path d="M1808.78 755.389L1777.12 805.783L1819.9 612.801L1866.82 785.625L1829.89 755.389L1866.82 846.098L1835.16 836.019L1856.27 906.571L1877.37 967.044L1829.89 956.965L1872.1 1067.83L1835.16 1057.75L1872.1 1128.31L1882.65 1188.78L1861.55 1178.7L1824.61 1188.78H1787.68L1740.19 1178.7L1777.12 1087.99L1798.23 1057.75L1740.19 1087.99L1798.23 967.044L1756.02 987.202L1803.51 836.019L1782.4 846.098L1808.78 755.389Z" 
fill={this.props.palette[6]}/>
<path d="M1706.15 867.214L1674.49 917.608L1717.27 724.626L1764.19 897.451L1727.25 867.214L1764.19 957.924L1732.53 947.845L1753.63 1018.4L1774.74 1078.87L1727.25 1068.79L1769.46 1179.66L1732.53 1169.58L1771.59 1235.5H1661.3L1695.59 1169.58L1637.55 1199.82L1695.59 1078.87L1653.38 1099.03L1700.87 947.845L1679.77 957.924L1706.15 867.214Z" 
fill={this.props.palette[6]}/>
<defs>
<linearGradient id="paint0_linear" x1="1109.83" y1="61.9263" x2="1109.83" y2="1312.86" gradientUnits="userSpaceOnUse">
<stop stop-color={this.props.palette[4]}/>
<stop offset="1" stop-color={this.props.palette[5]}/>
</linearGradient>
<linearGradient id="paint1_linear" x1="1550.24" y1="494.347" x2="1471.95" y2="853.499" gradientUnits="userSpaceOnUse">
<stop stop-color={this.props.palette[5]}/>
<stop offset="1" stop-color={this.props.palette[6]} stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint2_linear" x1="1491.64" y1="86.2795" x2="1321.55" y2="909.897" gradientUnits="userSpaceOnUse">
<stop stop-color={this.props.palette[0]}/>
<stop offset="0.213542" stop-color={this.props.palette[2]} stop-opacity="0.526042"/>
<stop offset="0.46875" stop-color={this.props.palette[5]}/>
<stop offset="0.803704" stop-color={this.props.palette[6]} stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint3_linear" x1="1740.95" y1="115.385" x2="1658.83" y2="267.063" gradientUnits="userSpaceOnUse">
<stop stop-color={this.props.palette[1]}/>
<stop offset="0.28125" stop-color={this.props.palette[2]}/>
<stop offset="0.630208" stop-color={this.props.palette[4]}/>
<stop offset="1" stop-color={this.props.palette[0]}/>
</linearGradient>
<linearGradient id="paint4_linear" x1="898.433" y1="576.317" x2="895.208" y2="740.299" gradientUnits="userSpaceOnUse">
<stop stop-color={this.props.palette[0]}/>
<stop offset="0.143104" stop-color={this.props.palette[0]}/>
<stop offset="0.373419" stop-color={this.props.palette[0]}/>
<stop offset="0.791615" stop-color={this.props.palette[6]} stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint5_linear" x1="496.321" y1="591.167" x2="466.183" y2="752.69" gradientUnits="userSpaceOnUse">
<stop stop-color={this.props.palette[0]}/>
<stop offset="0.226063" stop-color={this.props.palette[1]}/>
<stop offset="0.46033" stop-color={this.props.palette[0]}/>
<stop offset="0.794262" stop-color={this.props.palette[6]} stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint6_linear" x1="109.528" y1="582.851" x2="15.3963" y2="721.468" gradientUnits="userSpaceOnUse">
<stop stop-color={this.props.palette[0]}/>
<stop offset="0.0729167" stop-color={this.props.palette[0]}/>
<stop offset="0.130208" stop-color={this.props.palette[0]}/>
<stop offset="1" stop-color={this.props.palette[0]} stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint7_linear" x1="1731.38" y1="120.137" x2="1755.62" y2="159.467" gradientUnits="userSpaceOnUse">
<stop stop-color={this.props.palette[0]}/>
<stop offset="1" stop-color={this.props.palette[0]} stop-opacity="0.23"/>
</linearGradient>
<linearGradient id="paint8_linear" x1="1678.38" y1="120.731" x2="1710.52" y2="161.659" gradientUnits="userSpaceOnUse">
<stop stop-color={this.props.palette[6]}/>
<stop offset="1" stop-color={this.props.palette[5]} stop-opacity="0.37"/>
</linearGradient>
<linearGradient id="paint9_linear" x1="1808.74" y1="96.9714" x2="1808.74" y2="246.062" gradientUnits="userSpaceOnUse">
<stop stop-color={this.props.palette[4]}/>
<stop offset="1" stop-color={this.props.palette[3]} stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint10_linear" x1="1723.34" y1="127.265" x2="1867.99" y2="452.199" gradientUnits="userSpaceOnUse">
<stop stop-color={this.props.palette[5]}/>
<stop offset="1" stop-color={this.props.palette[6]}/>
</linearGradient>
<linearGradient id="paint11_linear" x1="1618.41" y1="569.189" x2="1618.41" y2="632.152" gradientUnits="userSpaceOnUse">
<stop stop-color={this.props.palette[2]}/>
<stop offset="1" stop-color={this.props.palette[3]} stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint12_linear" x1="1631.43" y1="61.3323" x2="1631.43" y2="197.355" gradientUnits="userSpaceOnUse">
<stop stop-color={this.props.palette[0]}/>
<stop offset="0.520833" stop-color={this.props.palette[0]}/>
<stop offset="1" stop-color={this.props.palette[1]}/>
</linearGradient>
<linearGradient id="paint13_linear" x1="1690.02" y1="61.3323" x2="1690.02" y2="158.152" gradientUnits="userSpaceOnUse">
<stop stop-color={this.props.palette[6]}/>
<stop offset="1" stop-color={this.props.palette[6]}/>
</linearGradient>
<linearGradient id="paint14_linear" x1="1741.72" y1="145.084" x2="1705.09" y2="268.961" gradientUnits="userSpaceOnUse">
<stop stop-color={this.props.palette[6]}/>
<stop offset="1" stop-color={this.props.palette[5]} stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint15_linear" x1="1443.01" y1="286.453" x2="2016.38" y2="988.983" gradientUnits="userSpaceOnUse">
<stop stop-color={this.props.palette[5]}/>
<stop offset="0.713422" stop-color={this.props.palette[6]}/>
<stop offset="0.931048" stop-color={this.props.palette[6]} stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint16_linear" x1="1561.73" y1="386.242" x2="1561.73" y2="740.257" gradientUnits="userSpaceOnUse">
<stop stop-color={this.props.palette[5]}/>
<stop offset="0.197917" stop-color={this.props.palette[6]}/>
<stop offset="1" stop-color={this.props.palette[5]} stop-opacity="0.01"/>
</linearGradient>
<linearGradient id="paint17_linear" x1="443.472" y1="636.904" x2="464.074" y2="766.105" gradientUnits="userSpaceOnUse">
<stop stop-color={this.props.palette[3]}/>
<stop offset="0.197917" stop-color={this.props.palette[6]}/>
<stop offset="1" stop-color={this.props.palette[4]} stop-opacity="0.01"/>
</linearGradient>
<linearGradient id="paint18_linear" x1="1616.87" y1="240.122" x2="2032.99" y2="679.986" gradientUnits="userSpaceOnUse">
<stop stop-color={this.props.palette[2]}/>
<stop offset="0.089517" stop-color={this.props.palette[6]}/>
<stop offset="0.368642" stop-color={this.props.palette[5]}/>
<stop offset="0.991673" stop-color={this.props.palette[4]} stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint19_linear" x1="1734.06" y1="283.483" x2="2169.8" y2="632.779" gradientUnits="userSpaceOnUse">
<stop stop-color={this.props.palette[6]} stop-opacity="0"/>
<stop offset="1" stop-color={this.props.palette[6]}/>
</linearGradient>
<linearGradient id="paint20_linear" x1="1188.54" y1="635.454" x2="1072.82" y2="556.851" gradientUnits="userSpaceOnUse">
<stop stop-color={this.props.palette[5]} stop-opacity="0"/>
<stop offset="1" stop-color={this.props.palette[6]}/>
</linearGradient>
<linearGradient id="paint21_linear" x1="1566.32" y1="320.31" x2="1566.32" y2="425.445" gradientUnits="userSpaceOnUse">
<stop stop-color={this.props.palette[6]}/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint22_linear" x1="1531.09" y1="440.889" x2="1634.79" y2="573.86" gradientUnits="userSpaceOnUse">
<stop offset="0.156144" stop-color={this.props.palette[6]}/>
<stop offset="1" stop-color={this.props.palette[2]} stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint23_linear" x1="100.068" y1="616.091" x2="112.512" y2="661.511" gradientUnits="userSpaceOnUse">
<stop offset="0.156144" stop-color={this.props.palette[0]}/>
<stop offset="1" stop-color={this.props.palette[2]} stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint24_linear" x1="944.389" y1="623.242" x2="956.534" y2="705.761" gradientUnits="userSpaceOnUse">
<stop offset="0.156144" stop-color={this.props.palette[0]}/>
<stop offset="1" stop-color={this.props.palette[2]} stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint25_linear" x1="1098.34" y1="578.099" x2="1124.16" y2="622.483" gradientUnits="userSpaceOnUse">
<stop stop-color={this.props.palette[3]}/>
<stop offset="1" stop-color={this.props.palette[5]}/>
</linearGradient>
<linearGradient id="paint26_linear" x1="569.085" y1="607.205" x2="594.9" y2="651.588" gradientUnits="userSpaceOnUse">
<stop stop-color={this.props.palette[4]}/>
<stop offset="1" stop-color={this.props.palette[6]}/>
</linearGradient>
<linearGradient id="paint27_linear" x1="438.111" y1="621.46" x2="459.386" y2="681.431" gradientUnits="userSpaceOnUse">
<stop offset="0.156144" stop-color={this.props.palette[6]}/>
<stop offset="0.942743" stop-color={this.props.palette[3]} stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint28_linear" x1="1646.75" y1="431.979" x2="1906.12" y2="609.554" gradientUnits="userSpaceOnUse">
<stop stop-color={this.props.palette[6]}/>
<stop offset="1" stop-color={this.props.palette[5]} stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint29_linear" x1="1404.71" y1="195.573" x2="1404.71" y2="458.708" gradientUnits="userSpaceOnUse">
<stop stop-color={this.props.palette[0]}/>
<stop offset="1" stop-color={this.props.palette[2]} stop-opacity="0.57"/>
</linearGradient>
<linearGradient id="paint30_linear" x1="1268.38" y1="370.205" x2="1306.67" y2="450.276" gradientUnits="userSpaceOnUse">
<stop stop-color={this.props.palette[6]}/>
<stop offset="1" stop-color={this.props.palette[6]} stop-opacity="0.28"/>
</linearGradient>
<linearGradient id="paint31_linear" x1="926.007" y1="614.332" x2="947.602" y2="668.729" gradientUnits="userSpaceOnUse">
<stop stop-color={this.props.palette[0]}/>
<stop offset="1" stop-color={this.props.palette[2]} stop-opacity="0.28"/>
</linearGradient>
<linearGradient id="paint32_linear" x1="1406.63" y1="192.603" x2="1406.63" y2="495.535" gradientUnits="userSpaceOnUse">
<stop stop-color={this.props.palette[0]}/>
<stop offset="1" stop-color={this.props.palette[1]} stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint33_linear" x1="1360.67" y1="189.633" x2="1243.85" y2="843.091" gradientUnits="userSpaceOnUse">
<stop stop-color={this.props.palette[6]}/>
<stop offset="1" stop-color={this.props.palette[2]} stop-opacity="0.05"/>
</linearGradient>
<linearGradient id="paint34_linear" x1="1208.25" y1="445.046" x2="1208.25" y2="590.573" gradientUnits="userSpaceOnUse">
<stop stop-color={this.props.palette[0]}/>
<stop offset="1" stop-color={this.props.palette[2]} stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint35_linear" x1="1274.12" y1="508.603" x2="1274.12" y2="654.129" gradientUnits="userSpaceOnUse">
<stop stop-color={this.props.palette[6]}/>
<stop offset="1" stop-color={this.props.palette[1]} stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint36_linear" x1="1731.38" y1="117.761" x2="1762.68" y2="189.951" gradientUnits="userSpaceOnUse">
<stop stop-color={this.props.palette[0]}/>
<stop offset="1" stop-color={this.props.palette[0]} stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint37_linear" x1="1832.87" y1="570.377" x2="1901.37" y2="783.025" gradientUnits="userSpaceOnUse">
<stop stop-color={this.props.palette[5]}/>
<stop offset="1" stop-color={this.props.palette[3]} stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint38_linear" x1="1653.26" y1="592.949" x2="1653.26" y2="935.678" gradientUnits="userSpaceOnUse">
<stop stop-color={this.props.palette[6]}/>
<stop offset="0.593646" stop-color={this.props.palette[2]} stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint39_linear" x1="209.864" y1="597.107" x2="213.565" y2="643.039" gradientUnits="userSpaceOnUse">
<stop stop-color={this.props.palette[0]}/>
<stop offset="1" stop-color={this.props.palette[1]} stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint40_linear" x1="1106" y1="739.179" x2="1106" y2="1211.76" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="0.493675" stop-color={this.props.palette[3]}/>
<stop offset="0.839211" stop-color={this.props.palette[5]}/>
</linearGradient>
<linearGradient id="paint41_linear" x1="729.929" y1="880.875" x2="729.929" y2="1133.63" gradientUnits="userSpaceOnUse">
<stop stop-color={this.props.palette[3]}/>
<stop offset="0.493675" stop-color={this.props.palette[5]}/>
<stop offset="0.939211" stop-color={this.props.palette[6]}/>
</linearGradient>
</defs>
</svg>

            </div>
        )
    }
}