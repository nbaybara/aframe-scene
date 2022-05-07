<!DOCTYPE html>
<html>
  
  <head>
    <meta charset="utf-8"/>
    <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl+ '&gtm_auth=cLb1PXjI_x7Ib4L3HKvsBA&gtm_preview=env-5&gtm_cookies_win=x';f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WP6CMGP');</script>
<!-- End Google Tag Manager -->

    <title>2019 Silverado</title>
    <link rel="stylesheet" type="text/css" href="main.css">
    <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png">
<link rel="manifest" href="favicon/site.webmanifest">
<link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#5bbad5">
<meta name="msapplication-TileColor" content="#da532c">
<meta name="theme-color" content="#ffffff">
<meta property="og:image:width" content="1199">
<meta property="og:image:height" content="628">
<meta property="og:title" content="EXPLORE THE ALL-NEW SILVERADO IN 3D">
<meta property="og:description" content="See it now from home or on your mobile device.">
<meta property="og:image" content="https://d1vlj71acq3rf7.cloudfront.net/assets/og-imagev2.jpg">
<meta property="og:url" content="https://d1vlj71acq3rf7.cloudfront.net/index.html">
     
    <script src="aframe-master.min.js"></script>
    <!--
     <script src="main.js"></script>
    -->
     <script src="aframe-orbit-controls.min.js"></script>
          <script src="aframe-teleport-controls.min.js"></script>
            <script src="aframe-look-at-component.js"></script> 
        <script src="animation-mixer.js"></script>
<script src="light-map-geometry.js"></script>
 <script src="cube-env-map.js"></script>
 <script src="shine-map.js"></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/plugins/CSSPlugin.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/easing/EasePack.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenLite.min.js"></script>
<script src="current-device.min.js"></script>
<script>window.navigator.getVRDisplays = function() { return Promise && Promise.resolve([{ displayName: 'noVRDisplay' }]) }</script>

 <style>

 

#trimSelect{
      display: inline;
    position: absolute;
    z-index: 500;
    opacity: 1;
    overflow: hidden;
    left: 0px;
    top: 0px;
  }

  #xrCta{
      display: inline;
    position: absolute;
    z-index: 500;
    opacity: 1;
    overflow: hidden;
    right: 0px;
    bottom: 0px;
  }

  #rstVideo {
         width: 90%;
    height: auto;
    left: 0px;
    top: 0px;
  }

  #rstVideoClose {
     position: absolute;
    opacity: 1;
    width: 10%;
    overflow: hidden;
    margin-top: 100;
    display: inline;
    margin-top: -25%;
    margin-left: 43%;
  }

  #rstVideoContainer {
 position: fixed;
    z-index: 1099999;
    display: none;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
 
  }

  #rstSound {
    z-index: -1000;
    position: absolute;
    width: 0%;
    height: 0%;
  }

  #chevyLogo {
    z-index: 1000;
     position: absolute;
    width: 732px;
    height: 459px;
    left: 0px;
    top: 0px;
    display: inline;
     image-rendering: auto;
  image-rendering: crisp-edges;
  
    -webkit-user-select: none; /* Safari 3.1+ */
  -moz-user-select: none; /* Firefox 2+ */
  -ms-user-select: none; /* IE 10+ */
  user-select: none; /* Standard syntax */
  -ms-transform: scale(.5, .5); /* IE 9 */
  -webkit-transform: scale(.5, .5); /* Safari */
  transform: scale(.5, .5);
  -ms-transform-origin: 0% 0%; /* IE 9 */
    -webkit-transform-origin: 0% 0%; /* Safari 3-8 */
  transform-origin: 0% 0%;
  }

  #trimContainer {
    z-index: 1000;
     position: absolute;
    width: 732px;
    height: 459px;
    left: 0px;
    top: 0px;
    -ms-transform: scale(.5, .5); /* IE 9 */
  -webkit-transform: scale(.5, .5); /* Safari */
  transform: scale(.5, .5);
display:inline;
  -ms-transform-origin: 0% 0%; /* IE 9 */
    -webkit-transform-origin: 0% 0%; /* Safari 3-8 */
  transform-origin: 0% 0%;
  }

  #rtSelectImg1 {
   position: absolute;
     width: 732px;
    height: 459px;
    left: 0px;
    top: 0px;
     image-rendering: auto;
  image-rendering: crisp-edges;
 
  }

  #hcSelectImg1, #tbSelectImg1, {
   position: absolute;
     width: 732px;
    height: 459px;
    left: 0px;
    top: 0px;
    display: none;
     image-rendering: auto;
  image-rendering: crisp-edges;
 
  }

  #ctaOver {
   position: absolute;
     width: 732px;
    height: 459px;
    left: 0px;
    top: 0px;
    display: none;
     image-rendering: auto;
  image-rendering: crisp-edges;
 
  }

  #trimSLider {
    position: absolute;
     width: 732px;
    height: 459px;
    left: -330px;
    top: 0px;
     image-rendering: auto;
  image-rendering: crisp-edges;
   
  }

  #rtSelectImg2, #hcSelectImg2, #tbSelectImg2 {
   position: absolute;
     width: 732px;
    height: 459px;
    left: 0px;
    top: 0px;
    display: none;
    opacity: 0;
     image-rendering: auto;
  image-rendering: crisp-edges;
   
  }

  #tbSelectImg2 {
   position: absolute;
     width: 732px;
    height: 459px;
    left: 0px;
    top: 0px;
    display: inline;
    opacity: 0;
     image-rendering: auto;
  image-rendering: crisp-edges;
   
  }

  #tbTrimBtn {
    position: absolute;
    width: 240px;
    height: 50px;
    left: 440px;
    top: 104px;
  cursor: pointer;
 }

 #rtTrimBtn {
    position: absolute;
    width: 240px;
    height: 50px;
    left: 415px;
    top: 178px;
 cursor: pointer;
 }

 #hcTrimBtn {
    position: absolute;
    width: 240px;
    height: 50px;
    left: 378px;
    top: 250px;
cursor: pointer;
 }

 #trimCta {
    position: absolute;
    width: 240px;
    height: 50px;
    left: 326px;
    top: 407px;
    cursor: pointer;
    display: inline;
 }

#cta1 {
  position: absolute;
    width: 10%;
    height: auto;
    right: 0px;
    bottom: 0px;
cursor: pointer;
display: inline;
min-width: 150px;
}


.destopSoundClass {
z-index: 1002;
     position: absolute;
    width: 70px;
    height: 22px;
    right: 5px;
    top: 10px;
}

.mobileSoundClass {
z-index: 1002;
     position: absolute;
    width: 70px;
    height: 22px;
    right: 5px;
    bottom: 10px;
}

#soundImg {
     position: absolute;
    width: 27px;
    height: 19px;
    right: 40px;
    top: 0px;
}
#soundBtn {
     position: absolute;
    width: 27px;
    height: 19px;
    right: 40px;
    top: 0px;
    cursor: pointer;
}
  
  #shareImg {
     position: absolute;
    width: 19px;
    height: 22px;
    right: 5px;
    top: 0px;
}

#infoBtn {
  position: absolute;
  left: 5px;
  bottom: 5px;
  width: 70px;
    height: 22px;
    cursor: pointer;
}
#disc {
  position: absolute;
  left: 5px;
  bottom: 5px;
  display: none;
}

.resp-sharing-button__link,
.resp-sharing-button__icon {
  display: inline-block
}

.resp-sharing-button__link {
  text-decoration: none;
  color: #fff;
  margin: 0.5em
}

.resp-sharing-button {
  border-radius: 5px;
  transition: 25ms ease-out;
  padding: 0.5em 0.75em;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif
}

.resp-sharing-button__icon svg {
  width: 1em;
  height: 1em;
  margin-right: 0.4em;
  vertical-align: top
}

.resp-sharing-button--small svg {
  margin: 0;
  vertical-align: middle
}

/* Non solid icons get a stroke */
.resp-sharing-button__icon {
  stroke: #fff;
  fill: none
}

/* Solid icons get a fill */
.resp-sharing-button__icon--solid,
.resp-sharing-button__icon--solidcircle {
  fill: #fff;
  stroke: none
}

.resp-sharing-button--twitter {
  background-color: #55acee
}

.resp-sharing-button--twitter:hover {
  background-color: #2795e9
}

.resp-sharing-button--pinterest {
  background-color: #bd081c
}

.resp-sharing-button--pinterest:hover {
  background-color: #8c0615
}

.resp-sharing-button--facebook {
  background-color: #3b5998
}

.resp-sharing-button--facebook:hover {
  background-color: #2d4373
}

.resp-sharing-button--tumblr {
  background-color: #35465C
}

.resp-sharing-button--tumblr:hover {
  background-color: #222d3c
}

.resp-sharing-button--reddit {
  background-color: #5f99cf
}

.resp-sharing-button--reddit:hover {
  background-color: #3a80c1
}

.resp-sharing-button--google {
  background-color: #dd4b39
}

.resp-sharing-button--google:hover {
  background-color: #c23321
}

.resp-sharing-button--linkedin {
  background-color: #0077b5
}

.resp-sharing-button--linkedin:hover {
  background-color: #046293
}

.resp-sharing-button--email {
  background-color: #777
}

.resp-sharing-button--email:hover {
  background-color: #5e5e5e
}

.resp-sharing-button--xing {
  background-color: #1a7576
}

.resp-sharing-button--xing:hover {
  background-color: #114c4c
}

.resp-sharing-button--whatsapp {
  background-color: #25D366
}

.resp-sharing-button--whatsapp:hover {
  background-color: #1da851
}

.resp-sharing-button--hackernews {
background-color: #FF6600
}
.resp-sharing-button--hackernews:hover, .resp-sharing-button--hackernews:focus {   background-color: #FB6200 }

.resp-sharing-button--vk {
  background-color: #507299
}

.resp-sharing-button--vk:hover {
  background-color: #43648c
}

.resp-sharing-button--facebook {
  background-color: #3b5998;
  border-color: #3b5998;
}

.resp-sharing-button--facebook:hover,
.resp-sharing-button--facebook:active {
  background-color: #2d4373;
  border-color: #2d4373;
}

.resp-sharing-button--twitter {
  background-color: #55acee;
  border-color: #55acee;
}

.resp-sharing-button--twitter:hover,
.resp-sharing-button--twitter:active {
  background-color: #2795e9;
  border-color: #2795e9;
}

.resp-sharing-button--email {
  background-color: #777777;
  border-color: #777777;
}

.resp-sharing-button--email:hover,
.resp-sharing-button--email:active {
  background-color: #5e5e5e;
  border-color: #5e5e5e;
}

#shareContainer {
  position: absolute;
  width: 40%;
  height: 20%;
  left: 30%;
  top: 40%;
  background-color: rgba(255, 255, 255, .8);
  display: none;
  justify-content: center;
  align-items: center;

}

 #socialClose {
    position: absolute;
    opacity: 1;
    width: 5%;
    overflow: hidden;
    right: -2.5%;
    top: -8px;
    display: inline;
  }

  #loaderGif {
    width: 50%;
  }

  #loaderImg {
        width: 50%;
    position: absolute;
    top: 10px;
    opacity: 0;
    min-width: 450px;
  }

  #loaderFiller {
    width: 50%;
    opacity: 0;
  }

  #blocker {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 200000;
  }

  #mobileUi {
    position: absolute;
    z-index: 199999;
    width: 100%;
    left: 0px;
    top: 0px;
    display: flex;
  flex-direction: column;
  align-content: flex-start;
  opacity: 1;
  }

#mLogo {
    width: 100%;
    height: auto;
  }

  #mTrimContainer {
 width: 100%;
    height: auto;
  }

  #mTb {
   
    width: 100%;
    height: auto;
  }
  #mRst, #mHc  {

    width: 100%;
    height: auto;
    display: none;
  }

  #mColors {
 width: 100%;
    height: auto;
    justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
      margin-top: -5px;

  }

  #mC10 {
    width: 100%;
    height: auto;
    margin-top: -4px;

  }

  #mC2, #mC3, #mC4, #mC5, #mC6, #mC7, #mC8, #mC9, #mC1, #mC11 {
    width: 100%;
    height: auto;
    margin-top: -4px;
    display: none;
    
  }

  #mTrimTextContainer {
    width: 100%;
    height: auto;
    z-index: 299999;
        margin-top: -3px;
  }

  #mTbText {
    width: 100%;
    height: auto;
   }

   #mTbText  {
    width: 100%;
    height: auto;
    margin-top: -4px;
   }

   #mRstText, #mHcText  {
    width: 100%;
    height: auto;
    margin-top: -4px;
    display: none;
   }

   #m1, #m2, #m3, #m4, #m5, #m6, #m7, #m8, #m9, #m10, #m11 {
height: auto;
  width: 5%;
  background-color: white;
  border-radius: 50%;
  margin-right: 2%;
    z-index: 199999;

   }

   #swatchContainer {
    display: flex;
  justify-content: center;
   align-items: center;
   margin-top: -10px;
   width: 100%;
   height: 100%;
   position: absolute;
   }

   #menuBtn {
    width: 100%;
    height: auto;
    margin-top: -5px;
    z-index: 759999;
   }

   #mTrimBtnCon {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: inherit;
    display: flex;
    align-items: stretch;
   }

   #m1, #dm1 {
    background-color: #b90d0f;
   }

   #m2, #dm2 {
    background-color: #2f1808;
   }

   #m3, #dm3 {
    background-color: #74716e;
   }

   #m4, #dm4 {
    background-color: #b3afab;
   }

   #m5, #dm5 {
    background-color: #191818;
   }

   #m6, #dm6 {
    background-color: #273052;
   }
   #m7, #dm7 {
    background-color: #d2cfcc;
   }

   #m8, #dm8 {
    background-color: #966f5f;
   }
#m9, #dm9  {
    background-color: #394046;
   }

   #m10, #dm10 {
    background-color: #900e18;
   }

   #m11, #dm11 {
    background-color: #cecbbc;
   }

#mTbBtn {
  z-index: 659999;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

#mRstBtn {
  z-index: 659999;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

#mHcBtn {
  z-index: 659999;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

#mCta {
  bottom: 0px;
  position: absolute;
  z-index: 659999;
  width: 100%;
  height: auto;
}


#mDisclaimerContainer {
  position: fixed;
  z-index: 1099999;

  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  
  margin: auto;
}

#mDisc {
  width: 90%;
}

#desktopSwatchContainer {
      display: flex;
    flex-wrap: wrap;
    position: absolute;
    left: 16px;
    bottom: 17px;
    width: 119px;
    height: 156px;
    z-index: 759999;
    justify-content: left;
 }

#desktopColorizer {
    display: inline;
    position: absolute;
    left: -132px;
    top: 360px;
    width: 132px;
    height: 192px;
    z-index: 759999;
    background-color: rgb(99, 99, 99, .8);
}

 #dm1, #dm2, #dm3, #dm4, #dm5, #dm6, #dm7, #dm8, #dm9, #dm10, #dm11 {
    height: 25px;
    width: 25px;
    border-radius: 50%;
    margin-right: 10px;
    z-index: 199999;
    margin-bottom: 5px;

   }


   @font-face {
      font-family: cFont;
      src: url("https://s0.2mdn.net/ads/richmedia/studio/37306933/louisregularwebfont.woff");
    }

    #dColors {
font-size: 8.343px;
    font-family: cFont;
    color: rgb(255, 255, 255);
    line-height: 1.2;
    text-align: center;
    -moz-transform: matrix( 1.23211558349269,0,0,1.21529450439623,0,0);
    -webkit-transform: matrix( 1.23211558349269,0,0,1.21529450439623,0,0);
    -ms-transform: matrix( 1.23211558349269,0,0,1.21529450439623,0,0);
    position: absolute;
    left: 0px;
    top: 170.701px;
    width: 132px;
    height: 10.875px;
    }

    #colorTab {
      display: inline;
    position: absolute;
    left: 128px;
    top: 54px;
    
    }

     .rotateDevice1 {
          display: none;
    justify-content: center;
    align-items: center;
    z-index: 1059999;
    position: absolute;
    background-color: black;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
     }

     #rotateImg {
      width: 30%;
    height: auto;
     }


     @media only screen and (orientation : landscape) { 
.rotateDevice2 {
          display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1059999;
    position: absolute;
    background-color: black;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
     }
    }

    @media only screen and (orientation : landscape) { 
.rotateDevice2 {
          display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1059999;
    position: absolute;
    background-color: black;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
     }
    }

    @media only screen and (orientation : landscape) { 
.rotateDevice2 {
          display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1059999;
    position: absolute;
    background-color: black;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
     }
    }

    #splashBg {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0px;
      top: 0px;
      background-image: linear-gradient(rgba(0, 0, 0, 0.9) 45%, rgba(0, 0, 0, 0.1));
      background-color: transparent;
      z-index: -10;
    }


</style>
  </head>
  
  <body onload="sizerButton()">
    <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WP6CMGP&gtm_auth=cLb1PXjI_x7Ib4L3HKvsBA&gtm_preview=env-5&gtm_cookies_win=x"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->


    <script>
    bedPosx = 7.488;
bedPosy = -0.632;
 bedPosz = -2.899;
 bedRotz = 0;
 audio1 = 0;
  onMobile = false;
  onMobile2 = false;
 mOpen = true;

    

 AFRAME.registerComponent('scene-init-code', {
    init: function () {
      camActive = true;
    num1 = -3.705;
    num2 = 3.041;
    num3 = 7.656;
    rot1 = 0;
    rot2 = -0.42818266949615114;
    rot3 = 0
    rot4 = 0.9036922050915068;
    loadNum = 0;
    isMuted = false;
    currentScene = "tb";
    loadNum2 = 0;
    loadNum3 = 0;
    tbDown = false;
    mLoad1 = 0;
    sceneReady = false;


   
    checkMobile();
    resizeUi();

    document.getElementById("tbTrimBtn").addEventListener("mouseover", function(){
document.getElementById("tbSelectImg2").style.display = "inline";
document.getElementById("tbSelectImg2").style.opacity = 1;
document.getElementById("rtSelectImg2").style.display = "none";
document.getElementById("rtSelectImg2").style.opacity = 0;
document.getElementById("hcSelectImg2").style.display = "none";
document.getElementById("hcSelectImg2").style.opacity = 0;
document.getElementById("rtSelectImg1").style.display = "none";
});

    document.getElementById("rtTrimBtn").addEventListener("mouseover", function(){
document.getElementById("tbSelectImg2").style.display = "none";
document.getElementById("tbSelectImg2").style.opacity = 0;
document.getElementById("rtSelectImg2").style.display = "inline";
document.getElementById("rtSelectImg2").style.opacity = 1;
document.getElementById("hcSelectImg2").style.display = "none";
document.getElementById("hcSelectImg2").style.opacity = 0;
});

     document.getElementById("hcTrimBtn").addEventListener("mouseover", function(){
  document.getElementById("tbSelectImg2").style.display = "none";
document.getElementById("tbSelectImg2").style.opacity = 0;
document.getElementById("rtSelectImg2").style.display = "none";
document.getElementById("rtSelectImg2").style.opacity = 0;
document.getElementById("hcSelectImg2").style.display = "inline";
document.getElementById("hcSelectImg2").style.opacity = 1;
});

     document.getElementById("trimCta").addEventListener("mouseover", function(){
document.getElementById("ctaOver").style.display = "inline";
});

     document.getElementById("trimCta").addEventListener("mouseout", function(){
document.getElementById("ctaOver").style.display = "none";
});



    for (j = 1; j <= 11; j++) {
        document.getElementById("mC" + j).style.display = 'none';
        document.getElementById("m" + j).style.border = "0px solid #ffffff";
        document.getElementById("m" + j).style.transform = "scale(1)";
        document.getElementById("dm" + j).style.border = "0px solid #ffffff";
        document.getElementById("dm" + j).style.transform = "scale(1)";
      };

      document.getElementById("m10").style.border = "1px solid #ffffff";
document.getElementById("m10").style.transform = "scale(1.3)";
document.getElementById("dm10").style.border = "1px solid #ffffff";
document.getElementById("dm10").style.transform = "scale(1.3)";

  document.getElementById("mC10").style.display = 'inline';
  document.getElementById("dColors").innerHTML = "Cajun Red Tintcoat<sup>3</sup>";



//mainScene.addEventListener("mouseenter", closeUi);


    document.getElementById("m10").style.border = "1px solid #ffffff";
document.getElementById("m10").style.transform = "scale(1.3)";


 setTimeout(function(){ 
//document.getElementById("menuBtn").click();
document.getElementById("mobileUi").style.opacity = 1;
}, 10000)

    tbHotspot2.addEventListener('mousedown', function () {

tbHsVideoBtn.setAttribute("class", "clickable");

      });

    tbHsClose2.addEventListener('mousedown', function () {

tbHsVideoBtn.setAttribute("class", "");

      });

   

    int1Asset.addEventListener('progress', loaderTest);

    function loaderTest() {
//console.log('loaded*********');
    }
    
     mainScene.addEventListener('model-loaded', addEnvMap);

     tbTruckBody.addEventListener('model-loaded', function () {


if (loadNum3 == 0) {


setTimeout(function(){ 
mainTruck.setAttribute("position", {x: 0, y: .15, z: 0});

tbScene.setAttribute("visible",true);
  rstScene.setAttribute("visible",false);
  hcScene.setAttribute("visible",false);

  tbHotspots.setAttribute("visible",true);
  rstHotspots.setAttribute("visible",false);
  hcHotspots.setAttribute("visible",false);

  tbHotspots.setAttribute("scale", {x: 1, y: 1, z: 1});
  rstHotspots.setAttribute("scale", {x: 0, y: 0, z: 0});
  hcHotspots.setAttribute("scale", {x: 0, y: 0, z: 0});

document.getElementById("tbSelectImg1").style.display = 'inline';
document.getElementById("rtSelectImg1").style.display = 'none';
document.getElementById("hcSelectImg1").style.display = 'none';

 
 setTimeout(function(){ 
//truckBodyColorOld.setAttribute("gltf-model", "red/" + currentColor1);
//debug1 = document.getElementsByClassName("rs-base");
//debug1[0].style.left = "700px";
}, 2000)

 truckPlastic.getObject3D('mesh').getObjectByName('polySurface2343_M_Mirror_Accent_Color_0').material.roughness = .5;
truckPlastic.getObject3D('mesh').getObjectByName('polySurface2345_M_Grey_Plastic_0').material.roughness = .5;
 
 tbGrill.getObject3D('mesh').getObjectByName('TB_Grill_M_Grill_Base_0').material.color.setHex(0x1C1C1C);

truckInt3.getObject3D('mesh').getObjectByName('INT_CMN_SOCK_RT_BLQU_OUT_0').visible = false;
 
rstPlastic.getObject3D('mesh').getObjectByName('RST_BUMPER_M_RST_Bumper_0').visible = false;

truckPlastic.getObject3D('mesh').getObjectByName('polySurface2343_M_Mirror_Accent_Color_0').visible = true;
truckPlasticLeft.getObject3D('mesh').getObjectByName('mesh_5').visible = true;
truckPlastic.getObject3D('mesh').getObjectByName('polySurface2344_M_Mirror_TurnSignals_0').visible = true;
truckPlasticLeft.getObject3D('mesh').getObjectByName('mesh_6').visible = true;
rstMetal.getObject3D('mesh').getObjectByName('RST_Exaust_M_RT_Exaust_0').visible = true;
truckPlastic.getObject3D('mesh').getObjectByName('HC_01seatbelt_middle_MOD_shell_HC_01safety_belt_black_0').visible = false;

if (loadNum2 == 0) {
truckPlasticPlate.setObject3D('mesh', truckPlastic.getObject3D('mesh').getObjectByName('LicensePlate_M_License_plate_0'));
tbPlasticPart2.setObject3D('mesh', tbPlasticPart.getObject3D('mesh').getObjectByName('TB_Plastic_3'));
tbPlasticPart3.setObject3D('mesh', tbPlasticPart2.getObject3D('mesh').getObjectByName('TB_R_Bumper_2'));
truckLogoOuter.setObject3D('mesh', truckLogo.getObject3D('mesh').getObjectByName('shell_84133667_001_FRT_EMBLEM_BEZEL__CHEVY__2_M_Chevy_Logo_ext_0'));
rstPlastic.setObject3D('mesh', rstBumberBottom.getObject3D('mesh').getObjectByName('RST_BUMPER'));
loadNum2++;
}


//sensor.setAttribute("visible",false);

rstGrill.setAttribute("visible",false);

truckfoglight.setAttribute("visible",false);
rstPlastic.setAttribute("visible",false);
rstMetal.setAttribute("visible",false);
rstLogo.setAttribute("visible",false);
rstBadges.setAttribute("visible",false);
rimsRst.setAttribute("visible",false);
tiresRst.setAttribute("visible",false);
tiresHc.setAttribute("visible",false);
hcHandles.setAttribute("visible",false);
truckfoglightHc.setAttribute("visible",false);
truckfoglightHcChrome.setAttribute("visible",false);
truckfoglightHcChrome2.setAttribute("visible",false);
hcBumperPart.setAttribute("visible",false);
hcBumperPart2.setAttribute("visible",false);
hcLogo1.setAttribute("visible",false);
hcLogo2.setAttribute("visible",false);

tiresTb.setAttribute("visible",true);
rimsTb.setAttribute("visible",true);
rimsHc.setAttribute("visible",false);
tbPlasticPart.setAttribute("visible",true);
tbBumperPart.setAttribute("visible",true);
tbGrill.setAttribute("visible",true);
hcGrill.setAttribute("visible",false);
truckfoglightTb.setAttribute("visible",true);
tbHandles.setAttribute("visible",true);
tbPipes.setAttribute("visible",true);
tbLogo1.setAttribute("visible",true);
tbLogo.setAttribute("visible",true);
truckBedLogoRST_TB.setAttribute("visible",true);
truckBedLogoHc.setAttribute("visible",false);
hitch.setAttribute("visible",true);
rstBumberBottom.setAttribute("visible",false);

tiresRst.getObject3D('mesh').getObjectByName('Tire1_M_Tires_2').scale.set(-1,1,1);
tiresRst.getObject3D('mesh').getObjectByName('Tire1_M_Tires_1').scale.set(-1,1,1);
//tiresHc.getObject3D('mesh').getObjectByName('R_R_Wheel_15').scale.set(-1,1,1);

//tiresHc.getObject3D('mesh').getObjectByName('F_R_Wheel_23').position.set(190, 0, 0);


colorizer1.setAttribute("material","src:assets/swatches/2CajunRedTintcoatAsset.png;" + " shader: flat; side: double; transparent: true");


addEvents();




  //splash.style.display = 'none'; 

splash.style.background = "rgba(0, 0, 0, 0)";
loaderImg.src = 'assets/xrloader2.png';
spinner.style.opacity = 0;
blocker.style.display = 'none';

sceneReady = true;




}, 3500);

loadNum3++;

}




    });

     //var sound = document.querySelector("#sound");
      //            sound.components.sound.playSound();
 
     mainScene.addEventListener('loaded', function (e) {
  mainScene.object3D.traverse((o) => {
     if (o.isMesh && o.material.map)  {
      o.material.map.encoding = THREE.sRGBEncoding;
      o.material.needsUpdate = true;
    }
  });
});

function addEnvMap() {


 
     }

     rstVideoHotspotBtn2.addEventListener('mousedown', function () {
     //var vidHeight = document.getElementById('foo').offsetHeight;


       rstVideo.src = 'assets/videos/rstvideo.mp4';
       rstVideoContainer.style.display = 'flex';
       //rstVideoClose.style.top = rstVideo.offsetTop + "%";
       rstVideo.play();
       rstVideo.volume = 1;
       //console.log(vidHeight);
       rstSound.volume = 0;

       
      });


     rstVideoHotspot.addEventListener('mousedown', function () {
     //var vidHeight = document.getElementById('foo').offsetHeight;
rstVideoHotspotBtn2.setAttribute("scale", {x: 0.66, y: 0.22, z: 0.1});
      });

rstHsClose8.addEventListener('mousedown', function () {
     //var vidHeight = document.getElementById('foo').offsetHeight;
rstVideoHotspotBtn2.setAttribute("scale", {x: 0, y: 0, z: 0});
      });

     


     rstVideoClose.addEventListener('mousedown', function () {
     //var vidHeight = document.getElementById('foo').offsetHeight;


       rstVideo.src = 'assets/videos/rstvideo.mp4';
       rstVideoContainer.style.display = 'none';
       //rstVideoClose.style.top = rstVideo.offsetTop + "%";
       rstVideo.pause();
       rstVideo.volume = 0;
       //console.log(vidHeight);
       rstSound.volume = 1;


      });

     tbHsVideoBtn.addEventListener('mousedown', function () {
rstVideo.src = 'assets/videos/tbvideo.mp4';
       rstVideoContainer.style.display = 'flex';
       //rstVideoClose.style.top = rstVideo.offsetTop + "%";
       rstVideo.play();
       rstVideo.volume = 1;
       rstSound.volume = 0;

       dataLayer.push({
event: "analytics",
category: "Secondary",
action: "video",
label: "Start"
});

});

     tbHotspot6.addEventListener('mousedown', function () {

 //plug.setAttribute("visible",true);
 
      });

tbHsClose6.addEventListener('mousedown', function () {

 //plug.setAttribute("visible",false);
 
      });


      rstHotspot5.addEventListener('mousedown', function () {

truckBed1On.setAttribute("visible",true);
truckBed1.setAttribute("visible",false);

//truckBedLogoRST_TB2.setAttribute("visible",true);
  //   truckBedLogoRST_TB.setAttribute("visible",false);
//truckBed1.setAttribute("gltf-model", "assets/truckbed2/scene.gltf");
 
 

      });

rstHsClose5.addEventListener('mousedown', function () {

//truckBed1.setAttribute("gltf-model", "assets/truckbed/scene.gltf");
 truckBed1On.setAttribute("visible",false);
truckBed1.setAttribute("visible",true);
//truckBedLogoRST_TB2.setAttribute("visible",false);
  //   truckBedLogoRST_TB.setAttribute("visible",true);
 

      });


rstHotspot3.addEventListener('mousedown', function () {

sensor.setAttribute("visible",true);
 
 

      });

rstHsClose3.addEventListener('mousedown', function () {

sensor.setAttribute("visible",false);
 
 

      });

hcHotspot4.addEventListener('mousedown', function () {


tgButton.setAttribute("scale", {x: 0.49, y: 0.36, z: 1.25});
 tbDown = true;
 hcHs4Over.setAttribute("visible",true);

      });

hcHsClose4.addEventListener('mousedown', function () {

tgButton.setAttribute("scale", {x: 0, y: 0, z: 0});
 
 tbDown = false;

      });



tgButton.addEventListener('mouseenter', function () {

//hcHs4Over.setAttribute("visible",true);
 
 

      });

tgButton.addEventListener('mouseleave', function () {

//hcHs4Over.setAttribute("visible",false);
 
 

      });

tgButton.addEventListener('mousedown', function () {
 

if (tbDown == false) {

const bedPosx = 7.488;
const bedPosy = -0.632;
const bedPosz = -2.899;
const bedRotz = 0;
lightsOn();
hcHs4Over.setAttribute("visible",true);

  TweenLite.to(window, 2.5, {
            bedPosx: 8.438,
            bedPosy: -1.682,
            bedPosz: -3.249,
            bedRotz: -90.000,
            onUpdate: bedDown,
           }); 
  tbDown = true;
   

} else {

lightsOn();
hcHs4Over.setAttribute("visible",false);

  TweenLite.to(window, 2.5, {
            bedPosx: 7.488,
            bedPosy: -0.632,
            bedPosz: -2.899,
            bedRotz: 0,
            onUpdate: bedUp,
           }); 
  tbDown = false;

}

 
 

      });


     //---------------------- HOTSPOTS EVENTS ------------------

/*
     rstHotspotBtn1.addEventListener('click', function () {
       //rstHotspot1.setAttribute("visible",true);
       rstHotspot1.setAttribute("visible",false);
      });

     rstHotspotBtn1.addEventListener('click', function () {
       //rstHotspot1.setAttribute("visible",true);
       rstHotspot1.setAttribute("visible",false);
      });

     

     rstHotspotBtn2.addEventListener('click', function () {
       rstVideo.src = 'assets/videos/rstvideo.mp4';
       rstVideoContainer.style.display = 'inline';
       rstVideo.play();
       rstVideo.volume = 1;
      });

     rstVideoClose.addEventListener('click', function () {
       rstVideo.src = '';
       rstVideoContainer.style.display = 'none';
       rstVideo.stop();
      });
*/

    }


  });
    

    AFRAME.registerComponent('hotspots-component', {
      schema: {
    hstarget: {default: ''},
    hsshader: {default: ''},
    closetarget: {default: ''},
    beddown: {default: ''},
    assetlocation: {default: ''},
    hotspotname: {default: ''}
  },
    init: function () {
      // Code here.
      //console.log(this.el + "LLLLLLLLLL");
      const currenyHs = this.el;
      const hsTarget = this.data.hstarget;
      const hotspotName = this.data.hotspotname;
      const newTarget = this.el.sceneEl.querySelector(hsTarget);
      const closeTarget = this.data.closetarget;
      const newCloseTarget = this.el.sceneEl.querySelector(closeTarget);
      const assetLocation = this.data.assetlocation;
      const hsShader = this.data.hsshader;
      const allHotspots = this.el.sceneEl.querySelectorAll('.sceneHotspot');
      const allHotspotsIcon = this.el.sceneEl.querySelectorAll('.sceneHotspotIcon');
      const allTbHotspotsIcon = this.el.sceneEl.querySelectorAll('.tbHotspotIcon');



      //console.log(allHotspots + "HSHSHSHHSHSHS");
      //console.log(this.el.sceneEl.querySelector(hsTarget) + "TARGETTTTTTTTT");
      this.el.addEventListener('mousedown', function () {

        dataLayer.push({
event: "analytics",
category: "Secondary",
action: "HotSpot",
label: hotspotName
});

splash2.style.display = 'flex';
        for (var i = 0; i < allHotspots.length; i++) {
 
var hsObj2 = allHotspots[i].getObject3D('mesh');
 
  
  if(hsObj2.material){
      hsObj2.material.dispose();
      if(hsObj2.material.map){
        hsObj2.material.map.dispose();
         //console.log("MAP");
      }
      if(hsObj2.material.lightMap){
        hsObj2.material.lightMap.dispose();
         //console.log("lightMap");
      }
      if(hsObj2.material.aoMap){
        hsObj2.material.aoMap.dispose();
         //console.log("aoMap");
      }
      if(hsObj2.material.emissiveMap){
        hsObj2.material.emissiveMap.dispose();
         //console.log("emissiveMap");
      }
      if(hsObj2.material.bumpMap){
        hsObj2.material.bumpMap.dispose();
         //console.log("bumpMap");
      }
      if(hsObj2.material.normalMap){
        hsObj2.material.normalMap.dispose();
         //console.log("normalMap");
      }
      if(hsObj2.material.displacementMap){
        hsObj2.material.displacementMap.dispose();
         //console.log("displacementMap");
      }
      if(hsObj2.material.roughnessMap){
        hsObj2.material.roughnessMap.dispose();
        }
      if(hsObj2.material.metalnessMap){
        hsObj2.material.metalnessMap.dispose();
         //console.log("metalnessMap");
      }
      if(hsObj2.material.alphaMap){
        hsObj2.material.alphaMap.dispose();
         //console.log("alphaMap");
      }
      if(hsObj2.material.glossinessMap){
        hsObj.material.alphaMap.dispose();
         //console.log("glossinessMap");
      }
    }
    if(hsObj2.geometry){
      hsObj2.geometry.dispose();
       //console.log("geometry");
    }

allHotspots[i].setAttribute("material","src:");

 }


       sensor.setAttribute("visible",false);
     truckBed1On.setAttribute("visible",false);
     //plug.setAttribute("visible",false);
     //truckBedLogoRST_TB2.setAttribute("visible",false);
     //truckBedLogoRST_TB.setAttribute("visible",true);
truckBed1.setAttribute("visible",true);
colorizer1.setAttribute("visible",false);
colorBtn2.setAttribute("scale", {x: 0, y: 0, z: 0});
colorBtn1.setAttribute("scale", {x: 2, y: 2, z: 2});

for (var i = 0; i < allHotspots.length; i++) {
  allHotspots[i].setAttribute("visible",false);
  allHotspotsIcon[i].setAttribute("visible",true);
 }
//console.log
for (var i = 0; i < allTbHotspotsIcon.length; i++) {
allTbHotspotsIcon[i].setAttribute("visible",true);
}

var hsObj = newTarget.getObject3D('mesh');
 
  
  if(hsObj.material){
      hsObj.material.dispose();
      if(hsObj.material.map){
        hsObj.material.map.dispose();
         //console.log("MAP");
      }
      if(hsObj.material.lightMap){
        hsObj.material.lightMap.dispose();
         //console.log("lightMap");
      }
      if(hsObj.material.aoMap){
        hsObj.material.aoMap.dispose();
         //console.log("aoMap");
      }
      if(hsObj.material.emissiveMap){
        hsObj.material.emissiveMap.dispose();
         //console.log("emissiveMap");
      }
      if(hsObj.material.bumpMap){
        hsObj.material.bumpMap.dispose();
         //console.log("bumpMap");
      }
      if(hsObj.material.normalMap){
        hsObj.material.normalMap.dispose();
         //console.log("normalMap");
      }
      if(hsObj.material.displacementMap){
        hsObj.material.displacementMap.dispose();
         //console.log("displacementMap");
      }
      if(hsObj.material.roughnessMap){
        hsObj.material.roughnessMap.dispose();
        }
      if(hsObj.material.metalnessMap){
        hsObj.material.metalnessMap.dispose();
         //console.log("metalnessMap");
      }
      if(hsObj.material.alphaMap){
        hsObj.material.alphaMap.dispose();
         //console.log("alphaMap");
      }
      if(hsObj.material.glossinessMap){
        hsObj.material.alphaMap.dispose();
         //console.log("glossinessMap");
      }
    }
    if(hsObj.geometry){
      hsObj.geometry.dispose();
       //console.log("geometry");
    }

    //tbTruckBody.setAttribute("gltf-model", "red/" + currentColor1 + ".gltf");
    //truckBedColor.setAttribute("gltf-model", "red/" + "tb_" + currentColor1 + ".gltf");


newTarget.setAttribute("material","src:" + assetLocation + ";" + "shader:" + hsShader + "; transparent: true;");
        newTarget.addEventListener('materialtextureloaded', openHotSpot);

        function openHotSpot() {
          splash2.style.display = 'none';
 currenyHs.setAttribute("visible",false);
     newTarget.setAttribute("visible",true);
    // newTarget.setAttribute("material","src:" + assetLocation + ";" + "shader:" + hsShader + "; transparent: true;");
     //console.log("src:" + assetLocation + ";" + "shader:" + hsShader + "; transparent: true;");
     //hsTarget.setAttribute("visible",true);
        }
  


        /*
 
TweenLite.to(window, 1, {
            bedPosx: 8.438,
            bedPosy: -1.682,
            bedPosz: -3.249,
            bedRotz: -90.000,
            onUpdate: bedDown,
           }); 
    */


      });

      newCloseTarget.addEventListener('mousedown', function () {
     currenyHs.setAttribute("visible",true);


     newTarget.setAttribute("visible",false);

     hcHs4Over.setAttribute("visible",false);


var hsObj = newTarget.getObject3D('mesh');
 
  
  if(hsObj.material){
      hsObj.material.dispose();
      if(hsObj.material.map){
        hsObj.material.map.dispose();
         //console.log("MAP");
      }
      if(hsObj.material.lightMap){
        hsObj.material.lightMap.dispose();
         //console.log("lightMap");
      }
      if(hsObj.material.aoMap){
        hsObj.material.aoMap.dispose();
         //console.log("aoMap");
      }
      if(hsObj.material.emissiveMap){
        hsObj.material.emissiveMap.dispose();
         //console.log("emissiveMap");
      }
      if(hsObj.material.bumpMap){
        hsObj.material.bumpMap.dispose();
         //console.log("bumpMap");
      }
      if(hsObj.material.normalMap){
        hsObj.material.normalMap.dispose();
         //console.log("normalMap");
      }
      if(hsObj.material.displacementMap){
        hsObj.material.displacementMap.dispose();
         //console.log("displacementMap");
      }
      if(hsObj.material.roughnessMap){
        hsObj.material.roughnessMap.dispose();
        }
      if(hsObj.material.metalnessMap){
        hsObj.material.metalnessMap.dispose();
         //console.log("metalnessMap");
      }
      if(hsObj.material.alphaMap){
        hsObj.material.alphaMap.dispose();
         //console.log("alphaMap");
      }
      if(hsObj.material.glossinessMap){
        hsObj.material.alphaMap.dispose();
         //console.log("glossinessMap");
      }
    }
    if(hsObj.geometry){
      hsObj.geometry.dispose();
       //console.log("geometry");
    }



newTarget.setAttribute("material","src:");


     bedUp();
     rstHotspot4.setAttribute("visible",true);
     //hsTarget.setAttribute("visible",true);
     sensor.setAttribute("visible",false);
     truckBed1On.setAttribute("visible",false);
truckBed1.setAttribute("visible",true);
//truckBedLogoRST_TB2.setAttribute("visible",false);
  //   truckBedLogoRST_TB.setAttribute("visible",true);
      });




}


  });

      
 AFRAME.registerComponent('door-component', {
     schema: {
    dooraction: {default: ''}
  },
    init: function () {
     const dooractionValue = this.data.dooraction;
      this.el.addEventListener('mousedown', function () {
if (dooractionValue == 'open') {
  //intCameraRig.removeAttribute('raycaster');
 // maincamera.removeAttribute('raycaster');
 maincamera.setAttribute('camera', 'active', false);
 intCameraRig.setAttribute('rotation', {x: 0, y: 112.18, z: 0}); 
       intCamera.setAttribute('camera', 'active', true);
       intCamera.setAttribute('look-controls', 'enabled', true); 
      // intCamera.setAttribute('raycaster', 'objects', '.clickable');
      // maincamera.setAttribute('raycaster', 'objects', '.clickable');
      intLight1.setAttribute("visible",true);

}  if (dooractionValue == 'close') {
 // intCameraRig.removeAttribute('raycaster');
 // maincamera.removeAttribute('raycaster');
  intCamera.setAttribute('camera', 'active', false); 
   maincamera.setAttribute('camera', 'active', true);
       intCamera.setAttribute('look-controls', 'enabled', false); 
       //intCamera.setAttribute('raycaster', 'objects', '.clickable;');
       //maincamera.setAttribute('raycaster', 'objects', '.clickable;');
       intLight1.setAttribute("visible",false);

}
     

      });


    }
  });

    

     AFRAME.registerComponent('follow-cam', {
  tick: function () {
   wpVector = new THREE.Vector3();
   quaternion1 = new THREE.Quaternion();
   convert1 = new THREE.Vector3( 0, -70, 0 );



   lookCube.object3D.setRotationFromQuaternion(maincamera.getObject3D('camera').getWorldQuaternion(quaternion1));
 
    maincamera.getObject3D('camera').getWorldQuaternion(quaternion1);
    



    lookCube.setAttribute('position', maincamera.getObject3D('camera').getWorldPosition(wpVector));
   }
});



window.addEventListener("resize", resizeUi);
window.addEventListener("load", resizeUi);

      function resizeUi() {
        var winWidth = window.innerWidth;
        var winHeight = window.innerHeight;
        var newUiSize = "scale(" + winWidth/2700 + "," + winWidth/2700 +")";
        testSize = winWidth/2700;

        if (testSize < .5) {
         newUiSize = "scale(0.5,0.5)";
        } else {
        document.getElementById("trimContainer").style.transform = newUiSize;
        document.getElementById("chevyLogo").style.transform = newUiSize;
        }
        
        /*


trimBtnWidth = document.getElementById("mTrimContainer").offsetWidth;
trimBtnMargin = document.getElementById("mTb").offsetHeight;

         document.getElementById("mTrimBtnCon").style.height = document.getElementById("mTrimContainer").offsetHeight + "px";
         document.getElementById("mTbBtn").style.height = document.getElementById("mTrimContainer").offsetHeight + "px";
         document.getElementById("mRstBtn").style.height = document.getElementById("mTrimContainer").offsetHeight + "px";
         document.getElementById("mHcBtn").style.height = document.getElementById("mTrimContainer").offsetHeight + "px";
         document.getElementById("mTbBtn").style.width = trimBtnWidth + "px";
         document.getElementById("mRstBtn").style.width = trimBtnWidth + "px";
         document.getElementById("mHcBtn").style.width = trimBtnWidth + "px";
         document.getElementById("mTrimBtnCon").style.marginTop = trimBtnMargin + "px";
        //document.getElementById("soundContainer").style.transform = newUiSize;
var colorCon = document.getElementById("m1");
       //percent = (colorCon.offsetWidth/100) * 5;
        for (j = 1; j <= 11; j++) {
        document.getElementById("m" + j).style.height = colorCon.offsetWidth + "px";
      };
*/
      /*

      document.getElementById("mTrimBtnCon").style.height = newVal1;
         document.getElementById("mTbBtn").style.height = newVal1;
         document.getElementById("mRstBtn").style.height = newVal1;
         document.getElementById("mHcBtn").style.height = newVal1;
         document.getElementById("mTbBtn").style.width = newVal2;
         document.getElementById("mRstBtn").style.width = newVal2;
         document.getElementById("mHcBtn").style.width = newVal2;
         document.getElementById("mTrimBtnCon").style.marginTop = newVal3;
        //document.getElementById("soundContainer").style.transform = newUiSize;
var colorCon = document.getElementById("m1");
       //percent = (colorCon.offsetWidth/100) * 5;
        for (j = 1; j <= 11; j++) {
        document.getElementById("m" + j).style.height = newVal4;
      };


      */

    
        
//console.log(winWidth);
//console.log(winHeight);
//console.log("scale(" + winWidth/732 + "," + winWidth/732 +")");
      };

      function stopAllAnimations() {
        const allHotspots = mainScene.querySelectorAll('.sceneHotspot');
      const allHotspotsIcon = mainScene.querySelectorAll('.sceneHotspotIcon');
      const allTbHotspotsIcon = mainScene.querySelectorAll('.tbHotspotIcon');
      //console.log(allHotspots + "HSHSHSHHSHSHS");
      //console.log(this.el.sceneEl.querySelector(hsTarget) + "TARGETTTTTTTTT");
  

       sensor.setAttribute("visible",false);
     truckBed1On.setAttribute("visible",false);
     //truckBedLogoRST_TB2.setAttribute("visible",false);
     //truckBedLogoRST_TB.setAttribute("visible",true);
truckBed1.setAttribute("visible",true);
colorizer1.setAttribute("visible",false);
colorBtn2.setAttribute("scale", {x: 0, y: 0, z: 0});
colorBtn1.setAttribute("scale", {x: 2, y: 2, z: 2});

for (var i = 0; i < allHotspots.length; i++) {
  allHotspots[i].setAttribute("visible",false);
  allHotspotsIcon[i].setAttribute("visible",true);
}

for (var i = 0; i < allTbHotspotsIcon.length; i++) {
allTbHotspotsIcon[i].setAttribute("visible",true);
//console.log(allTbHotspotsIcon[i])
}


TweenLite.to(window, -5, {
            bedPosx: 7.488,
            bedPosy: -0.632,
            bedPosz: -2.899,
            bedRotz: 0,
            onUpdate: bedUp,
           });


      }




      /*

      setInterval(function(){  
stopAllAnimations();
currentScene = "tb";
//tbEnv.setAttribute("gltf-model", "tbenv/scene.gltf");
//tbTruckBody.setAttribute("gltf-model", "red/CajunRedTintAsset.gltf");

   
  tbEnv.setAttribute("visible",true);
   rstEnv.setAttribute("visible",false);
    hcEnv.setAttribute("visible",false);

 
removeMesh(rstEnv, "spheremesh"); 
  removeMesh(rstEnv, "shadowmesh"); 
  removeMesh(rstEnv, "f1"); 
  removeMesh(rstEnv, "f2"); 
  removeMesh(rstEnv, "f3"); 
  removeMesh(rstEnv, "f4"); 
  removeMesh(rstTruckBody, "LP_Base_Colored_Base_Colored_RST_M_Truck_Exterior_Color_0"); 
  removeMesh(rstTruckBodyBg, "LP_Base_Colored_Base_Colored_RST_M_Truck_Exterior_Color_0"); 
  //removeMesh2(truckBedColor, "Truck_EXT_RF_M_Truck_Exterior_Color_0", "red/tb_CajunRedTintAsset.gltf"); 

 
  
  rstTruckBodyBg.setAttribute("visible",false);
  tbTruckBodyBg.setAttribute("visible",true);
  tbTruckBody.setAttribute("visible",true);
 

  if (hcEnv.getAttribute('gltf-model') !== "") {
  removeMesh(hcEnv, "spheremesh"); 
  removeMesh(hcEnv, "groundmesh"); 
}

 
 

 tbScene.setAttribute("visible",true);
  rstScene.setAttribute("visible",false);
  hcScene.setAttribute("visible",false);


var bedBodyObj = truckBedColor.getObject3D('mesh');

 truckBed = bedBodyObj.getObjectByName('Truck_EXT_RF_M_Truck_Exterior_Color_0');
  
  

  if(truckBed.material){
      truckBed.material.dispose();
      if(truckBed.material.map){
         truckBed.material.map.dispose();
        //console.log("MAP");
      }
      if(truckBed.material.lightMap){
         truckBed.material.lightMap.dispose();
        //console.log("lightMap");
      }
      if(truckBed.material.aoMap){
         truckBed.material.aoMap.dispose();
        //console.log("aoMap");
      }
      if(truckBed.material.emissiveMap){
         truckBed.material.emissiveMap.dispose();
        //console.log("emissiveMap");
      }
      if(truckBed.material.bumpMap){
         truckBed.material.bumpMap.dispose();
        //console.log("bumpMap");
      }
      if(truckBed.material.normalMap){
         truckBed.material.normalMap.dispose();
        //console.log("normalMap");
      }
      if(truckBed.material.displacementMap){
         truckBed.material.displacementMap.dispose();
        //console.log("displacementMap");
      }
      if(truckBed.material.roughnessMap){
         truckBed.material.roughnessMap.dispose();
        //console.log("roughnessMap");
      }
      if(truckBed.material.metalnessMap){
         truckBed.material.metalnessMap.dispose();
        //console.log("metalnessMap");
      }
      if(truckBed.material.alphaMap){
         truckBed.material.alphaMap.dispose();
        //console.log("alphaMap");
      }
      if(truckBed.material.glossinessMap){
         truckBed.material.alphaMap.dispose();
        //console.log("glossinessMap");
      }
    }
    if(truckBed.geometry){
       truckBed.geometry.dispose();
      //console.log("geometry");
    }
 

    truckBedColor.setAttribute("gltf-model", "red/tb_CajunRedTintAsset.gltf");

 

 

       }, 12000);



 setInterval(function(){  
currentScene = "rst";

//rstEnv.setAttribute("gltf-model", "rstenv/scene.gltf");
//rstTruckBody.setAttribute("gltf-model", "red/rst_NorthskyBlueMetallicAsset.gltf");

   
 
 rstEnv.setAttribute("visible",true);
  tbEnv.setAttribute("visible",false);
  hcEnv.setAttribute("visible",false);

 
removeMesh(tbEnv, "spheremat"); 
  removeMesh(tbEnv, "groundmat"); 
  removeMesh(tbTruckBody, "LP_Base_Colored_Base_Colored_M_Truck_Exterior_Color_0"); 
  removeMesh2(truckBedColor, "Truck_EXT_RF_M_Truck_Exterior_Color_0", "red/tb_NorthskyBlueMetallicAsset.gltf"); 
  removeMesh(tbTruckBodyBg, "LP_Base_Colored_Base_Colored_M_Truck_Exterior_Color_0"); 
 
  
  tbTruckBodyBg.setAttribute("visible",false);
  //truckBedColor.setAttribute("visible",true);
  rstTruckBodyBg.setAttribute("visible",true);
  rstTruckBody.setAttribute("visible",true);
 

 if (hcEnv.getAttribute('gltf-model') !== "") {
  removeMesh(hcEnv, "spheremesh"); 
  removeMesh(hcEnv, "groundmesh"); 
}

 

 tbScene.setAttribute("visible",false);
  rstScene.setAttribute("visible",true);
  hcScene.setAttribute("visible",false);

 
  

       }, 17000);

       */


 //studio HDR provided by https://www.deviantart.com/zbyg/art/HDRi-Pack-1-97402522









      AFRAME.registerComponent('trim-component', {
     schema: {
  },
    init: function () {
      // Code here.

      const removeRst = this.el.sceneEl.querySelectorAll('.rstParts'); 
      const removeTb = this.el.sceneEl.querySelectorAll('.tbParts'); 


document.getElementById("tbTrimBtn").addEventListener("click", tbClick);
document.getElementById("mTbBtn").addEventListener("click", tbClick);


function tbClick() {
  document.getElementById("mTb").style.display = 'inline';
  document.getElementById("mRst").style.display = 'none';
  document.getElementById("mHc").style.display = 'none';
  document.getElementById("mTbText").style.display = 'inline';
   document.getElementById("mRstText").style.display = 'none';
    document.getElementById("mHcText").style.display = 'none';
 
document.getElementById("m1").style.display = 'block';
document.getElementById("m3").style.display = 'block';
document.getElementById("m4").style.display = 'block';
document.getElementById("m7").style.display = 'block';
document.getElementById("m9").style.display = 'block';

document.getElementById("dm1").style.display = 'block';
document.getElementById("dm3").style.display = 'block';
document.getElementById("dm4").style.display = 'block';
document.getElementById("dm7").style.display = 'block';
document.getElementById("dm9").style.display = 'block';

document.getElementById("desktopSwatchContainer").style.height = "156px";
document.getElementById("desktopSwatchContainer").style.bottom = "17px";

for (j = 1; j <= 11; j++) {
        document.getElementById("mC" + j).style.display = 'none';
        document.getElementById("m" + j).style.border = "0px solid #ffffff";
        document.getElementById("m" + j).style.transform = "scale(1)";
        document.getElementById("dm" + j).style.border = "0px solid #ffffff";
        document.getElementById("dm" + j).style.transform = "scale(1)";
      };

      document.getElementById("m10").style.border = "1px solid #ffffff";
document.getElementById("m10").style.transform = "scale(1.3)";
document.getElementById("dm10").style.border = "1px solid #ffffff";
document.getElementById("dm10").style.transform = "scale(1.3)";

  document.getElementById("mC10").style.display = 'inline';
  document.getElementById("dColors").innerHTML = "Cajun Red Tintcoat<sup>3</sup>";




  mainTruck.setAttribute("position", {x: 0, y: .15, z: 0});
stopAllAnimations();
currentScene = "tb";
//tbEnv.setAttribute("gltf-model", "tbenv/scene.gltf");
//tbTruckBody.setAttribute("gltf-model", "red/CajunRedTintAsset.gltf");

   
  tbEnv.setAttribute("visible",true);
   rstEnv.setAttribute("visible",false);
    hcEnv.setAttribute("visible",false);

 
removeMesh(rstEnv, "spheremesh"); 
  removeMesh(rstEnv, "shadowmesh"); 
  removeMesh(rstEnv, "f1"); 
  removeMesh(rstEnv, "f2"); 
  removeMesh(rstEnv, "f3"); 
  removeMesh(rstEnv, "f4"); 
  removeMesh(rstTruckBody, "LP_Base_Colored_Base_Colored_RST_M_Truck_Exterior_Color_0"); 
  removeMesh(rstTruckBodyBg, "LP_Base_Colored_Base_Colored_RST_M_Truck_Exterior_Color_0"); 
removeMesh(hcTruckBody, "LP_Base_Colored_Base_Colored_HC_M_Truck_Exterior_Color_0");

  //removeMesh2(truckBedColor, "Truck_EXT_RF_M_Truck_Exterior_Color_0", "red/tb_CajunRedTintAsset.gltf"); 

 
  
  rstTruckBodyBg.setAttribute("visible",false);
  tbTruckBodyBg.setAttribute("visible",true);
  hcTruckBodyBg.setAttribute("visible",false);
  tbTruckBody.setAttribute("visible",true);
 

 removeMesh3(tbTruckBody, "LP_Base_Colored_Base_Colored_M_Truck_Exterior_Color_0", "red/CajunRedTintAsset.gltf"); 

   
  removeMesh(hcEnv, "spheremesh"); 
  removeMesh(hcEnv, "groundmesh"); 
 

 
 

 tbScene.setAttribute("visible",true);
  rstScene.setAttribute("visible",false);
  hcScene.setAttribute("visible",false);
  //tbTruckBody.setAttribute("gltf-model", "");

var bedBodyObj = truckBedColor.getObject3D('mesh');
var tbBodyObj2 = tbTruckBody.getObject3D('mesh');

 truckBed = bedBodyObj.getObjectByName('Truck_EXT_RF_M_Truck_Exterior_Color_0');
   
  

  if(truckBed.material){
      truckBed.material.dispose();
      if(truckBed.material.map){
         truckBed.material.map.dispose();
         //console.log("MAP");
      }
      if(truckBed.material.lightMap){
         truckBed.material.lightMap.dispose();
         //console.log("lightMap");
      }
      if(truckBed.material.aoMap){
         truckBed.material.aoMap.dispose();
         //console.log("aoMap");
      }
      if(truckBed.material.emissiveMap){
         truckBed.material.emissiveMap.dispose();
         //console.log("emissiveMap");
      }
      if(truckBed.material.bumpMap){
         truckBed.material.bumpMap.dispose();
         //console.log("bumpMap");
      }
      if(truckBed.material.normalMap){
         truckBed.material.normalMap.dispose();
         //console.log("normalMap");
      }
      if(truckBed.material.displacementMap){
         truckBed.material.displacementMap.dispose();
         //console.log("displacementMap");
      }
      if(truckBed.material.roughnessMap){
         truckBed.material.roughnessMap.dispose();
         //console.log("roughnessMap");
      }
      if(truckBed.material.metalnessMap){
         truckBed.material.metalnessMap.dispose();
         //console.log("metalnessMap");
      }
      if(truckBed.material.alphaMap){
         truckBed.material.alphaMap.dispose();
         //console.log("alphaMap");
      }
      if(truckBed.material.glossinessMap){
         truckBed.material.alphaMap.dispose();
         //console.log("glossinessMap");
      }
    }
    if(truckBed.geometry){
       truckBed.geometry.dispose();
       //console.log("geometry");
    }
 //tbTruckBody.setAttribute("gltf-model", "");
  //removeMesh2(tbTruckBody, "LP_Base_Colored_Base_Colored_M_Truck_Exterior_Color_0", "red/CajunRedTintAsset.gltf"); 

    truckBedColor.setAttribute("gltf-model", "red/tb_CajunRedTintAsset.gltf");
   // tbTruckBody.setAttribute("gltf-model", "red/CajunRedTintAsset.gltf");

 



  tbHotspots.setAttribute("visible",true);
  rstHotspots.setAttribute("visible",false);
  hcHotspots.setAttribute("visible",false);

  tbHotspots.setAttribute("scale", {x: 1, y: 1, z: 1});
  rstHotspots.setAttribute("scale", {x: 0, y: 0, z: 0});
  hcHotspots.setAttribute("scale", {x: 0, y: 0, z: 0});

document.getElementById("tbSelectImg1").style.display = 'inline';
document.getElementById("tbSelectImg2").style.display = 'inline';
document.getElementById("rtSelectImg1").style.display = 'none';
document.getElementById("rtSelectImg2").style.display = 'none';
document.getElementById("hcSelectImg1").style.display = 'none';
document.getElementById("hcSelectImg2").style.display = 'none';



var rstTruckMr5 = rstPlastic.getObject3D('mesh').getObjectByName('RST_BUMPER_M_RST_Bumper_0').visible = false;

var rstTruckMr = truckPlastic.getObject3D('mesh').getObjectByName('polySurface2343_M_Mirror_Accent_Color_0').visible = true;
var rstTruckMr2 = truckPlasticLeft.getObject3D('mesh').getObjectByName('mesh_5').visible = true;
var rstTruckMr3 = truckPlastic.getObject3D('mesh').getObjectByName('polySurface2344_M_Mirror_TurnSignals_0').visible = true;
var rstTruckMr4 = truckPlasticLeft.getObject3D('mesh').getObjectByName('mesh_6').visible = true;
var rstTruckMr5 = rstMetal.getObject3D('mesh').getObjectByName('RST_Exaust_M_RT_Exaust_0').visible = true;

sensor.setAttribute("visible",false);

rstGrill.setAttribute("visible",false);

truckfoglight.setAttribute("visible",false);
rstPlastic.setAttribute("visible",false);
rstMetal.setAttribute("visible",false);
rstLogo.setAttribute("visible",false);
rstBadges.setAttribute("visible",false);
rimsRst.setAttribute("visible",false);
tiresRst.setAttribute("visible",false);
tiresHc.setAttribute("visible",false);
hcHandles.setAttribute("visible",false);
truckfoglightHc.setAttribute("visible",false);
truckfoglightHcChrome.setAttribute("visible",false);
truckfoglightHcChrome2.setAttribute("visible",false);
hcBumperPart.setAttribute("visible",false);
hcBumperPart2.setAttribute("visible",false);
hcLogo1.setAttribute("visible",false);
hcLogo2.setAttribute("visible",false);

tiresTb.setAttribute("visible",true);
rimsTb.setAttribute("visible",true);
rimsHc.setAttribute("visible",false);
tbPlasticPart.setAttribute("visible",true);
tbBumperPart.setAttribute("visible",true);
tbGrill.setAttribute("visible",true);
hcGrill.setAttribute("visible",false);
truckfoglightTb.setAttribute("visible",true);
tbHandles.setAttribute("visible",true);
tbPipes.setAttribute("visible",true);
tbLogo1.setAttribute("visible",true);
tbLogo.setAttribute("visible",true);
truckBedLogoRST_TB.setAttribute("visible",true);
truckBedLogoHc.setAttribute("visible",false);
hitch.setAttribute("visible",true);
truckLogo.setAttribute("visible",true);
truckLogo2.setAttribute("visible",false);
truckLogoChrome2.setAttribute("visible",false);
hcGrillChrome.setAttribute("visible",false);
hcGrillChrome2.setAttribute("visible",false);
hcGrillChrome3.setAttribute("visible",false);
tbPlasticPart3.setAttribute("visible",true);
 hcMirrorLight.setAttribute("visible",false);
 tbPlasticPart2.setAttribute("visible",true);
 rstBumberBottom.setAttribute("visible",false);

 rstMetal.getObject3D('mesh').getObjectByName('RST_Exaust_M_RT_Exaust_0').visible = false;
rstMetal.getObject3D('mesh').getObjectByName('L_Step1').visible = false;
rstMetal.getObject3D('mesh').getObjectByName('R_Step1').visible = false;

 const removeColorRst1 = mainScene.querySelectorAll('.truckColors'); 
  //colorizer1.setAttribute("material","src:" + swatchLocation + ";" + " shader: flat; side: double; transparent: true");
 
 for (var i = 0; i < removeColorRst1.length; i++) {
  //removeColorRst1[i].setAttribute("visible",false);
  //allHotspotsIcon[i].setAttribute("visible",true);


}



 
colorizer1.setAttribute("material","src:assets/swatches/2CajunRedTintcoatAsset.png;" + " shader: flat; side: double; transparent: true");



rstSound.src = "audio/Trail_mixdown.mp3";

dataLayer.push({
event: "analytics",
category: "Primary",
action: "trim",
label: "Trail Boss"
});

      }


      document.getElementById("rtTrimBtn").addEventListener("click", rtClick);
      document.getElementById("mRstBtn").addEventListener("click", rtClick);
 
function rtClick() {
currentScene = "rst";

document.getElementById("mTb").style.display = 'none';
  document.getElementById("mRst").style.display = 'inline';
  document.getElementById("mHc").style.display = 'none';
  document.getElementById("mTbText").style.display = 'none';
   document.getElementById("mRstText").style.display = 'inline';
    document.getElementById("mHcText").style.display = 'none';

    document.getElementById("m1").style.display = 'block';
document.getElementById("m3").style.display = 'block';
document.getElementById("m4").style.display = 'block';
document.getElementById("m7").style.display = 'block';
document.getElementById("m9").style.display = 'block';

document.getElementById("dm1").style.display = 'block';
document.getElementById("dm3").style.display = 'block';
document.getElementById("dm4").style.display = 'block';
document.getElementById("dm7").style.display = 'block';
document.getElementById("dm9").style.display = 'block';

document.getElementById("desktopSwatchContainer").style.height = "156px";
document.getElementById("desktopSwatchContainer").style.bottom = "17px";

mainTruck.setAttribute("position", {x: 0, y: 0, z: 0});

for (j = 1; j <= 11; j++) {
        document.getElementById("mC" + j).style.display = 'none';
        document.getElementById("m" + j).style.border = "0px solid #ffffff";
        document.getElementById("m" + j).style.transform = "scale(1)";
        document.getElementById("dm" + j).style.border = "0px solid #ffffff";
        document.getElementById("dm" + j).style.transform = "scale(1)";
      };

      document.getElementById("m6").style.border = "1px solid #ffffff";
document.getElementById("m6").style.transform = "scale(1.3)";
document.getElementById("dm6").style.border = "1px solid #ffffff";
document.getElementById("dm6").style.transform = "scale(1.3)";

  document.getElementById("mC6").style.display = 'inline';
  document.getElementById("dColors").innerHTML = "Northsky Blue Metallic";

//rstEnv.setAttribute("gltf-model", "rstenv/scene.gltf");
//rstTruckBody.setAttribute("gltf-model", "red/rst_NorthskyBlueMetallicAsset.gltf");

   
 
 rstEnv.setAttribute("visible",true);
  tbEnv.setAttribute("visible",false);
  hcEnv.setAttribute("visible",false);

 
removeMesh(tbEnv, "spheremat"); 
  removeMesh(tbEnv, "groundmat"); 
  removeMesh(tbTruckBody, "LP_Base_Colored_Base_Colored_M_Truck_Exterior_Color_0"); 
  removeMesh2(truckBedColor, "Truck_EXT_RF_M_Truck_Exterior_Color_0", "red/tb_NorthskyBlueMetallicAsset.gltf"); 
  removeMesh(tbTruckBodyBg, "LP_Base_Colored_Base_Colored_M_Truck_Exterior_Color_0"); 
  removeMesh(hcTruckBody, "LP_Base_Colored_Base_Colored_HC_M_Truck_Exterior_Color_0");
  
  tbTruckBodyBg.setAttribute("visible",false);
  //truckBedColor.setAttribute("visible",true);
  rstTruckBodyBg.setAttribute("visible",true);
  rstTruckBody.setAttribute("visible",true);
  hcTruckBodyBg.setAttribute("visible",false);


  rstTruckBody.setAttribute("gltf-model", "");
//var tbBodyObj = rstTruckBody.getObject3D('mesh');
 
//tbBody = tbBodyObj.getObjectByName('LP_Base_Colored_Base_Colored_RST_M_Truck_Exterior_Color_0');

removeMesh3(rstTruckBody, "LP_Base_Colored_Base_Colored_RST_M_Truck_Exterior_Color_0", "red/rst_NorthskyBlueMetallicAsset.gltf"); 
  

  
  removeMesh(hcEnv, "spheremesh"); 
  removeMesh(hcEnv, "groundmesh"); 
 

 

 tbScene.setAttribute("visible",false);
  rstScene.setAttribute("visible",true);
  hcScene.setAttribute("visible",false);

tbPlasticPart3.setAttribute("visible",false);

  stopAllAnimations();
 

  tbHotspots.setAttribute("visible",false);
  rstHotspots.setAttribute("visible",true);
  hcHotspots.setAttribute("visible",false);
  truckBedLogoRST_TB.setAttribute("visible",true);

  tbHotspots.setAttribute("scale", {x: 0, y: 0, z: 0});
  rstHotspots.setAttribute("scale", {x: 1, y: 1, z: 1});
  hcHotspots.setAttribute("scale", {x: 0, y: 0, z: 0});

  document.getElementById("tbSelectImg1").style.display = 'none';
  document.getElementById("tbSelectImg2").style.display = 'none';
document.getElementById("rtSelectImg1").style.display = 'inline';
document.getElementById("rtSelectImg2").style.display = 'inline';
document.getElementById("hcSelectImg1").style.display = 'none';
document.getElementById("hcSelectImg2").style.display = 'none';

var rstTruckMr = truckPlastic.getObject3D('mesh').getObjectByName('polySurface2343_M_Mirror_Accent_Color_0').visible = true;
var rstTruckMr2 = truckPlasticLeft.getObject3D('mesh').getObjectByName('mesh_5').visible = true;
var rstTruckMr3 = truckPlastic.getObject3D('mesh').getObjectByName('polySurface2344_M_Mirror_TurnSignals_0').visible = true;
var rstTruckMr4 = truckPlasticLeft.getObject3D('mesh').getObjectByName('mesh_6').visible = true;
var rstTruckMr5 = rstMetal.getObject3D('mesh').getObjectByName('RST_Exaust_M_RT_Exaust_0').visible = true;
var rstTruckMr5 = rstPlastic.getObject3D('mesh').getObjectByName('RST_BUMPER_M_RST_Bumper_0').visible = true;


rstGrill.setAttribute("visible",true);

truckfoglight.setAttribute("visible",true);
rstPlastic.setAttribute("visible",true);
rstMetal.setAttribute("visible",true);
truckBedLogoRST_TB.setAttribute("visible",true);
rstLogo.setAttribute("visible",true);
rstBadges.setAttribute("visible",true);
rimsRst.setAttribute("visible",true);
tiresRst.setAttribute("visible",true);

tiresTb.setAttribute("visible",false);
rimsTb.setAttribute("visible",false);
rimsHc.setAttribute("visible",false);
tbPlasticPart.setAttribute("visible",false);
tbBumperPart.setAttribute("visible",false);
tbGrill.setAttribute("visible",false);
hcGrill.setAttribute("visible",false);
truckfoglightTb.setAttribute("visible",false);
tbHandles.setAttribute("visible",false);
tbPipes.setAttribute("visible",false);
tbLogo1.setAttribute("visible",false);
tbLogo.setAttribute("visible",false);
tiresHc.setAttribute("visible",false);
hcHandles.setAttribute("visible",false);
truckfoglightHc.setAttribute("visible",false);
truckfoglightHcChrome.setAttribute("visible",false);
truckfoglightHcChrome2.setAttribute("visible",false);
hcBumperPart.setAttribute("visible",false);
hcBumperPart2.setAttribute("visible",false);
hcLogo1.setAttribute("visible",false);
hcLogo2.setAttribute("visible",false);
truckBedLogoHc.setAttribute("visible",false);
hitch.setAttribute("visible",false);
truckLogo.setAttribute("visible",true);
truckLogo2.setAttribute("visible",false);
truckLogoChrome2.setAttribute("visible",false);
hcGrillChrome.setAttribute("visible",false);
hcGrillChrome2.setAttribute("visible",false);
hcGrillChrome3.setAttribute("visible",false);
 hcMirrorLight.setAttribute("visible",false);
 tbPlasticPart2.setAttribute("visible",false);
 rstBumberBottom.setAttribute("visible",false);

 rstMetal.getObject3D('mesh').getObjectByName('RST_Exaust_M_RT_Exaust_0').visible = true;
rstMetal.getObject3D('mesh').getObjectByName('L_Step1').visible = false;
rstMetal.getObject3D('mesh').getObjectByName('R_Step1').visible = false;



rstSound.src = "audio/ocean.mp3";



 const removeColorRst1 = mainScene.querySelectorAll('.truckColors'); 
  //colorizer1.setAttribute("material","src:" + swatchLocation + ";" + " shader: flat; side: double; transparent: true");
 
 for (var i = 0; i < removeColorRst1.length; i++) {
  //removeColorRst1[i].setAttribute("visible",false);
  //allHotspotsIcon[i].setAttribute("visible",true);
}




//NorthskyBlueMetallicAsset_B.setAttribute("visible",true);
//NorthskyBlueMetallicAsset_TB.setAttribute("visible",true);
colorizer1.setAttribute("material","src:assets/swatches/1NorthskyBlueMetallicAsset.png;" + " shader: flat; side: double; transparent: true");
 
dataLayer.push({
event: "analytics",
category: "Primary",
action: "Trim",
label: "RST"
});

      }


      document.getElementById("hcTrimBtn").addEventListener("click", hcClick);
 document.getElementById("mHcBtn").addEventListener("click", hcClick);

function hcClick() {
  stopAllAnimations();
  currentScene = "hc";

  document.getElementById("mTb").style.display = 'none';
  document.getElementById("mRst").style.display = 'none';
  document.getElementById("mHc").style.display = 'inline';
  document.getElementById("mTbText").style.display = 'none';
   document.getElementById("mRstText").style.display = 'none';
    document.getElementById("mHcText").style.display = 'inline';

    document.getElementById("m1").style.display = 'none';
document.getElementById("m3").style.display = 'none';
document.getElementById("m4").style.display = 'none';
document.getElementById("m7").style.display = 'none';
document.getElementById("m9").style.display = 'none';

document.getElementById("dm1").style.display = 'none';
document.getElementById("dm3").style.display = 'none';
document.getElementById("dm4").style.display = 'none';
document.getElementById("dm7").style.display = 'none';
document.getElementById("dm9").style.display = 'none';

document.getElementById("desktopSwatchContainer").style.height = "76px";
document.getElementById("desktopSwatchContainer").style.bottom = "63px";

  mainTruck.setAttribute("position", {x: 0, y: 0, z: 0});

  for (j = 1; j <= 11; j++) {
        document.getElementById("mC" + j).style.display = 'none';
        document.getElementById("m" + j).style.border = "0px solid #ffffff";
        document.getElementById("m" + j).style.transform = "scale(1)";
        document.getElementById("dm" + j).style.border = "0px solid #ffffff";
        document.getElementById("dm" + j).style.transform = "scale(1)";
      };

      document.getElementById("m11").style.border = "1px solid #ffffff";
document.getElementById("m11").style.transform = "scale(1.3)";
document.getElementById("dm11").style.border = "1px solid #ffffff";
document.getElementById("dm11").style.transform = "scale(1.3)";

  document.getElementById("mC11").style.display = 'inline';
  document.getElementById("dColors").innerHTML = "Iridescent Pearl Metallic<sup>3</sup>";
 
  
 hcEnv.setAttribute("visible",true);
 rstEnv.setAttribute("visible",false);
  tbEnv.setAttribute("visible",false);


 
removeMesh(tbEnv, "spheremat"); 
  removeMesh(tbEnv, "groundmat");
  removeMesh(tbTruckBody, "LP_Base_Colored_Base_Colored_M_Truck_Exterior_Color_0"); 
  removeMesh(rstTruckBody, "LP_Base_Colored_Base_Colored_RST_M_Truck_Exterior_Color_0"); 
  //removeMesh(truckBedColor, "Truck_EXT_RF_M_Truck_Exterior_Color_0");  
  removeMesh2(truckBedColor, "Truck_EXT_RF_M_Truck_Exterior_Color_0", "red/tb_IridescentPearlAsset.gltf"); 
  removeMesh3(hcTruckBody, "LP_Base_Colored_Base_Colored_HC_M_Truck_Exterior_Color_0", "red/hc_IridescentPearlAsset.gltf"); 
  tbTruckBodyBg.setAttribute("visible",false);
  hcTruckBodyBg.setAttribute("visible",true);
 hcTruckBody.setAttribute("visible",true);
 
removeMesh(rstEnv, "spheremesh"); 
  removeMesh(rstEnv, "shadowmesh"); 
  removeMesh(rstEnv, "f1"); 
  removeMesh(rstEnv, "f2"); 
  removeMesh(rstEnv, "f3"); 
  removeMesh(rstEnv, "f4"); 
  rstTruckBodyBg.setAttribute("visible",false);

 
tbScene.setAttribute("visible",false);
  rstScene.setAttribute("visible",false);
  hcScene.setAttribute("visible",true);

 
 
 

 

hcEnv.addEventListener('model-loaded', function () {

  });
 

  tbHotspots.setAttribute("visible",false);
  rstHotspots.setAttribute("visible",false);
  hcHotspots.setAttribute("visible",true);

  tbHotspots.setAttribute("scale", {x: 0, y: 0, z: 0});
  rstHotspots.setAttribute("scale", {x: 0, y: 0, z: 0});
  hcHotspots.setAttribute("scale", {x: 1, y: 1, z: 1});

   document.getElementById("tbSelectImg1").style.display = 'none';
   document.getElementById("tbSelectImg2").style.display = 'none';
document.getElementById("rtSelectImg1").style.display = 'none';
document.getElementById("rtSelectImg2").style.display = 'none';
document.getElementById("hcSelectImg1").style.display = 'inline';
document.getElementById("hcSelectImg2").style.display = 'inline';

var rstTruckMr = truckPlastic.getObject3D('mesh').getObjectByName('polySurface2343_M_Mirror_Accent_Color_0').visible = false;
var rstTruckMr2 = truckPlasticLeft.getObject3D('mesh').getObjectByName('mesh_5').visible = false;
var rstTruckMr3 = truckPlastic.getObject3D('mesh').getObjectByName('polySurface2344_M_Mirror_TurnSignals_0').visible = false;
var rstTruckMr4 = truckPlasticLeft.getObject3D('mesh').getObjectByName('mesh_6').visible = false;
var rstTruckMr5 = rstMetal.getObject3D('mesh').getObjectByName('RST_Exaust_M_RT_Exaust_0').visible = false;
var rstTruckMr5 = rstPlastic.getObject3D('mesh').getObjectByName('RST_BUMPER_M_RST_Bumper_0').visible = false;

sensor.setAttribute("visible",false);

tiresTb.setAttribute("visible",false);
rimsTb.setAttribute("visible",false);
rimsHc.setAttribute("visible",true);
tbPlasticPart.setAttribute("visible",false);
tbBumperPart.setAttribute("visible",false);
tbGrill.setAttribute("visible",false);
truckfoglightTb.setAttribute("visible",false);
tbHandles.setAttribute("visible",false);
tbPipes.setAttribute("visible",true);
tbLogo1.setAttribute("visible",false);
tbLogo.setAttribute("visible",false);
truckBedLogoRST_TB.setAttribute("visible",false);


rstGrill.setAttribute("visible",false);

truckfoglight.setAttribute("visible",false);
//rstPlastic.setAttribute("visible",true);
rstMetal.setAttribute("visible",true);
rstLogo.setAttribute("visible",false);
rstBadges.setAttribute("visible",false);
rimsRst.setAttribute("visible",false);
tiresRst.setAttribute("visible",false);



tiresHc.setAttribute("visible",true);
hcGrill.setAttribute("visible",true);
hcHandles.setAttribute("visible",true);
truckfoglightHc.setAttribute("visible",true);
truckfoglightHcChrome.setAttribute("visible",true);
truckfoglightHcChrome2.setAttribute("visible",true);
hcLogo1.setAttribute("visible",true);


hcBumperPart.setAttribute("visible",true);
hcBumperPart2.setAttribute("visible",true);
hcLogo2.setAttribute("visible",true);
truckBedLogoHc.setAttribute("visible",true);
hitch.setAttribute("visible",true);

truckLogo.setAttribute("visible",false);
truckLogo2.setAttribute("visible",true);
truckLogoChrome2.setAttribute("visible",false);

hcGrillChrome.setAttribute("visible",true);
hcGrillChrome2.setAttribute("visible",true);
hcGrillChrome3.setAttribute("visible",true);

 tbPlasticPart3.setAttribute("visible",false);
 hcMirrorLight.setAttribute("visible",true);
 tbPlasticPart2.setAttribute("visible",true);
 rstBumberBottom.setAttribute("visible",true);

 rstMetal.getObject3D('mesh').getObjectByName('RST_Exaust_M_RT_Exaust_0').visible = false;
rstMetal.getObject3D('mesh').getObjectByName('L_Step1').visible = true;
rstMetal.getObject3D('mesh').getObjectByName('R_Step1').visible = true;


rstSound.src = "audio/ranch_mixdown.mp3";


 const removeColorRst1 = mainScene.querySelectorAll('.truckColors'); 
  //colorizer1.setAttribute("material","src:" + swatchLocation + ";" + " shader: flat; side: double; transparent: true");
 
 for (var i = 0; i < removeColorRst1.length; i++) {
  //removeColorRst1[i].setAttribute("visible",false);
  //allHotspotsIcon[i].setAttribute("visible",true);
}



 
colorizer1.setAttribute("material","src:assets/swatches/11IridescentPearlAsset.png;" + " shader: flat; side: double; transparent: true");
loadNum++;

if (loadNum == 1) {
  hcBumperPart2.setObject3D('mesh', hcBumperPart.getObject3D('mesh').getObjectByName('HC_BumperBlack_1'));
truckfoglightHcChrome.setObject3D('mesh', truckfoglightHc.getObject3D('mesh').getObjectByName('F_Hook_R_27'));
truckfoglightHcChrome2.setObject3D('mesh', truckfoglightHc.getObject3D('mesh').getObjectByName('L_Fog_Light_int_M_FogLight_INT_0_20'));
hcGrillChrome.setObject3D('mesh', hcGrill.getObject3D('mesh').getObjectByName('HC_Grill_Logo_M_Grill_Crosssection_0_32_45'));
hcGrillChrome2.setObject3D('mesh', hcGrill.getObject3D('mesh').getObjectByName('_32'));
hcGrillChrome3.setObject3D('mesh', hcGrill.getObject3D('mesh').getObjectByName('Grill_Rear_Mesh_22_33'));
truckLogoChrome2.setObject3D('mesh', truckLogo2.getObject3D('mesh').getObjectByName('shell_84133667_001_FRT_EMBLEM_BEZEL__CHEVY__2_1_2'));
}

dataLayer.push({
event: "analytics",
category: "Primary",
action: "Trim",
label: "High Country"
});
 


      }

    }
  });


AFRAME.registerComponent('colorizer', {
      schema: {
        swatchlocation: {default: ''},
    carcolor1: {default: ''},
  },
    init: function () {
      // Code here.
      const swatchLocation = this.data.swatchlocation;
      const currentColor1 = this.data.carcolor1;
      const currentColorVar1 = this.el.sceneEl.querySelector(currentColor1 + ".gltf");

this.el.addEventListener('mousedown', function () {
  splash2.style.display = 'flex';
  if (currentScene == "tb") {
colorizer1.setAttribute("material","src:" + swatchLocation + ";" + " shader: flat; side: double; transparent: true");
 //console.log("CURRRENT!!!!!" + currentColor1);

tbTruckBody.setAttribute("gltf-model", "");
var tbBodyObj = tbTruckBody.getObject3D('mesh');
var bedBodyObj = truckBedColor.getObject3D('mesh');

tbBody = tbBodyObj.getObjectByName('LP_Base_Colored_Base_Colored_M_Truck_Exterior_Color_0');
truckBed = bedBodyObj.getObjectByName('Truck_EXT_RF_M_Truck_Exterior_Color_0');
  }

   if (currentScene == "rst") {
colorizer1.setAttribute("material","src:" + swatchLocation + ";" + " shader: flat; side: double; transparent: true");
 //console.log("CURRRENT!!!!!" + currentColor1);

rstTruckBody.setAttribute("gltf-model", "");
var tbBodyObj = rstTruckBody.getObject3D('mesh');
var bedBodyObj = truckBedColor.getObject3D('mesh');

tbBody = tbBodyObj.getObjectByName('LP_Base_Colored_Base_Colored_RST_M_Truck_Exterior_Color_0');
truckBed = bedBodyObj.getObjectByName('Truck_EXT_RF_M_Truck_Exterior_Color_0');
  }

   if (currentScene == "hc") {
colorizer1.setAttribute("material","src:" + swatchLocation + ";" + " shader: flat; side: double; transparent: true");
 //console.log("CURRRENT!!!!!" + currentColor1);

hcTruckBody.setAttribute("gltf-model", "");
var tbBodyObj = hcTruckBody.getObject3D('mesh');
var bedBodyObj = truckBedColor.getObject3D('mesh');

tbBody = tbBodyObj.getObjectByName('LP_Base_Colored_Base_Colored_HC_M_Truck_Exterior_Color_0');
truckBed = bedBodyObj.getObjectByName('Truck_EXT_RF_M_Truck_Exterior_Color_0');
  }
  

  if(tbBody.material){
      tbBody.material.dispose();
      if(tbBody.material.map){
        tbBody.material.map.dispose();
        truckBed.material.map.dispose();
        //console.log("MAP");
      }
      if(tbBody.material.lightMap){
        tbBody.material.lightMap.dispose();
        truckBed.material.lightMap.dispose();
        //console.log("lightMap");
      }
      if(tbBody.material.aoMap){
        tbBody.material.aoMap.dispose();
        truckBed.material.aoMap.dispose();
        //console.log("aoMap");
      }
      if(tbBody.material.emissiveMap){
        tbBody.material.emissiveMap.dispose();
        truckBed.material.emissiveMap.dispose();
        //console.log("emissiveMap");
      }
      if(tbBody.material.bumpMap){
        tbBody.material.bumpMap.dispose();
        truckBed.material.bumpMap.dispose();
        //console.log("bumpMap");
      }
      if(tbBody.material.normalMap){
        tbBody.material.normalMap.dispose();
        truckBed.material.normalMap.dispose();
        //console.log("normalMap");
      }
      if(tbBody.material.displacementMap){
        tbBody.material.displacementMap.dispose();
        truckBed.material.displacementMap.dispose();
        //console.log("displacementMap");
      }
      if(tbBody.material.roughnessMap){
        tbBody.material.roughnessMap.dispose();
        truckBed.material.roughnessMap.dispose();
        //console.log("roughnessMap");
      }
      if(tbBody.material.metalnessMap){
        tbBody.material.metalnessMap.dispose();
        truckBed.material.metalnessMap.dispose();
        //console.log("metalnessMap");
      }
      if(tbBody.material.alphaMap){
        tbBody.material.alphaMap.dispose();
        truckBed.material.alphaMap.dispose();
        //console.log("alphaMap");
      }
      if(tbBody.material.glossinessMap){
        tbBody.material.alphaMap.dispose();
        truckBed.material.alphaMap.dispose();
        //console.log("glossinessMap");
      }
    }
    if(tbBody.geometry){
      tbBody.geometry.dispose();
      truckBed.geometry.dispose();
      //console.log("geometry");
    }

 if (currentScene == "tb") {
    tbTruckBody.setAttribute("gltf-model", "red/" + currentColor1 + ".gltf");

}

if (currentScene == "rst") {
    rstTruckBody.setAttribute("gltf-model", "red/rst_" + currentColor1 + ".gltf");
}

if (currentScene == "hc") {
    hcTruckBody.setAttribute("gltf-model", "red/hc_" + currentColor1 + ".gltf");
}

    truckBedColor.setAttribute("gltf-model", "red/" + "tb_" + currentColor1 + ".gltf");

  tbTruckBody.addEventListener('model-loaded', function () {
    splash2.style.display = 'none';
    sceneReady = true;

    });

  rstTruckBody.addEventListener('model-loaded', function () {
    splash2.style.display = 'none';

    });

  hcTruckBody.addEventListener('model-loaded', function () {
    splash2.style.display = 'none';

    });



      });

    }
  });

AFRAME.registerComponent('bed-animation-down', {
      schema: {
        swatchlocation: {default: ''},
    carcolor1: {default: ''},
  },
    init: function () {
      // Code here.
     
rstHotspot4.addEventListener('mousedown', function () {
const bedPosx = 7.488;
const bedPosy = -0.632;
const bedPosz = -2.899;
const bedRotz = 0;
lightsOn();


  TweenLite.to(window, 2.5, {
            bedPosx: 8.438,
            bedPosy: -1.682,
            bedPosz: -3.249,
            bedRotz: -90.000,
            onUpdate: bedDown,
           }); 
 

      });

hcHotspot4.addEventListener('mousedown', function () {
const bedPosx = 7.488;
const bedPosy = -0.632;
const bedPosz = -2.899;
const bedRotz = 0;
lightsOn();


  TweenLite.to(window, 2.5, {
            bedPosx: 8.438,
            bedPosy: -1.682,
            bedPosz: -3.249,
            bedRotz: -90.000,
            onUpdate: bedDown,
           }); 
 

      });


tbHotspot3.addEventListener('mousedown', function () {
const bedPosx = 7.488;
const bedPosy = -0.632;
const bedPosz = -2.899;
const bedRotz = 0;
lightsOn();


  TweenLite.to(window, 2.5, {
            bedPosx: 8.438,
            bedPosy: -1.682,
            bedPosz: -3.249,
            bedRotz: -90.000,
            onUpdate: bedDown,
           }); 
 

      });






    }
  });

function bedDown() {
truckRearWhole.setAttribute('position', {x: bedPosx, y: bedPosy, z: bedPosz});
truckRearWhole.setAttribute('rotation', {x: 0, y: 21.780, z: bedRotz});

}

AFRAME.registerComponent('bed-animation-up', {
      schema: {
        swatchlocation: {default: ''},
    carcolor1: {default: ''},
  },
    init: function () {
      // Code here.
     
rstHsClose4.addEventListener('mousedown', function () {
//lightsOn();

/* HC only
  TweenLite.to(window, 2.5, {
            bedPosx: 7.488,
            bedPosy: -0.632,
            bedPosz: -2.899,
            bedRotz: 0,
            onUpdate: bedUp,
           }); 
 */

 TweenLite.to(window, -5, {
            bedPosx: 7.488,
            bedPosy: -0.632,
            bedPosz: -2.899,
            bedRotz: 0,
            onUpdate: bedUp,
           }); 

      });

hcHsClose4.addEventListener('mousedown', function () {
lightsOn();


  TweenLite.to(window, 2.5, {
            bedPosx: 7.488,
            bedPosy: -0.632,
            bedPosz: -2.899,
            bedRotz: 0,
            onUpdate: bedUp,
           }); 
 



      });




tbHsClose3.addEventListener('mousedown', function () {
//lightsOn();

/* HC only
  TweenLite.to(window, 2.5, {
            bedPosx: 7.488,
            bedPosy: -0.632,
            bedPosz: -2.899,
            bedRotz: 0,
            onUpdate: bedUp,
           }); 
 */

 TweenLite.to(window, -5, {
            bedPosx: 7.488,
            bedPosy: -0.632,
            bedPosz: -2.899,
            bedRotz: 0,
            onUpdate: bedUp,
           }); 

      });



    }
  });

function bedUp() {
truckRearWhole.setAttribute('position', {x: bedPosx, y: bedPosy, z: bedPosz});
truckRearWhole.setAttribute('rotation', {x: 0, y: 21.780, z: bedRotz});

}


function lightsOn() {
setTimeout(function(){ 
truckLights.setAttribute("visible",false);
truckLightsOn.setAttribute("visible",true);
}, 50);


setTimeout(function(){ 
truckLights.setAttribute("visible",true);
truckLightsOn.setAttribute("visible",false);
}, 550);

setTimeout(function(){ 
truckLights.setAttribute("visible",false);
truckLightsOn.setAttribute("visible",true);
}, 1050);


setTimeout(function(){ 
truckLights.setAttribute("visible",true);
truckLightsOn.setAttribute("visible",false);
}, 1550);

}

AFRAME.registerComponent('color-up', {
      schema: {
        swatchlocation: {default: ''},
    carcolor1: {default: ''},
  },
    init: function () {
      // Code here.
     
colorBtn1.addEventListener('mousedown', function () {

//colorizer1.setAttribute("visible",true);
//colorBtn2.setAttribute("scale", {x: 2, y: 2, z: 2});
//colorBtn1.setAttribute("scale", {x: 0, y: 0, z: 0});

 
 

      });

colorBtn1.addEventListener('mousedown', function () {
slideIn2();
colorBtn2.setAttribute("scale", {x: 2, y: 2, z: 2});
colorBtn1.setAttribute("scale", {x: 0, y: 0, z: 0});

      });

    colorBtn2.addEventListener('mousedown', function () {
slideOut2();
colorBtn2.setAttribute("scale", {x: 0, y: 0, z: 0});
colorBtn1.setAttribute("scale", {x: 2, y: 2, z: 2});

      });


    }
  });

AFRAME.registerComponent('color-down', {
      schema: {
        swatchlocation: {default: ''},
    carcolor1: {default: ''},
  },
    init: function () {
      // Code here.
     
colorBtn2.addEventListener('mousedown', function () {

//colorizer1.setAttribute("visible",false);
//colorBtn2.setAttribute("scale", {x: 0, y: 0, z: 0});
//colorBtn1.setAttribute("scale", {x: 2, y: 2, z: 2});
 
 

      });


    }
  });


 /*
setTimeout(function(){ 
truck11.setAttribute("gltf-model", 'red/HavanaBrownMetallicAsset.gltf');
//truckLightsOn.setAttribute("visible",true);
}, 7000);


setTimeout(function(){ 
truckBodyColor.setAttribute("gltf-model", 'red/RedHotAsset.gltf');
//truckLightsOn.setAttribute("visible",true);
}, 11000);


setTimeout(function(){ 
truckBodyColor.setAttribute("gltf-model", 'red/ShadowGrayMetallicAsset.gltf');
//truckLightsOn.setAttribute("visible",true);
}, 15000);


setTimeout(function(){ 
truckBodyColor.setAttribute("gltf-model", 'red/SatinSteelMetallicAsset.gltf');
//truckLightsOn.setAttribute("visible",true);
}, 18000);

setTimeout(function(){ 
truckBodyColor.setAttribute("gltf-model", 'red/BlackAsset.gltf');
//truckLightsOn.setAttribute("visible",true);
}, 19000);

setTimeout(function(){ 
truckBodyColor.setAttribute("gltf-model", 'red/NorthskyBlueMetallicAsset.gltf');
//truckLightsOn.setAttribute("visible",true);
}, 20000);

setTimeout(function(){ 
truckBodyColor.setAttribute("gltf-model", 'red/CajunRedTintAsset.gltf');
//truckLightsOn.setAttribute("visible",true);
}, 21000);
    */   



    setTimeout(function(){ 
//var parent1 = document.getElementById("truckRemove1");
//var parent2 = document.getElementById("truckRemove2");
//var child1 = document.getElementById("truckBodyColor");
//var child2 = document.getElementById("truckTg");

//parent1.removeChild(child1);
//parent2.removeChild(child2);

}, 16000);

    function playAudio() {
      rstSound.play();
    }

    function slideIn() {
      TweenLite.to(document.getElementById("trimSLider"), 1, {
        left: "0px",
           }); 

       TweenLite.to(document.getElementById("tbSelectImg2"), .5, {
        opacity: 1,
           }); 
      TweenLite.to(document.getElementById("hcSelectImg2"), .5, {
        opacity: 1,
           }); 
      TweenLite.to(document.getElementById("rtSelectImg2"), .5, {
        opacity: 1,
           }); 
    }

    function slideOut() {
      if (currentScene == "rst") {
document.getElementById("rtSelectImg1").style.display = "inline";
TweenLite.from(document.getElementById("rtSelectImg1"), .2, {
        opacity: 0,
           }); 
      }
      TweenLite.to(document.getElementById("trimSLider"), 1, {
        left: "-337px",
           }); 

      TweenLite.to(document.getElementById("tbSelectImg2"), .5, {
        opacity: 0,
           }); 
      TweenLite.to(document.getElementById("hcSelectImg2"), .5, {
        opacity: 0,
           }); 
      TweenLite.to(document.getElementById("rtSelectImg2"), .5, {
        opacity: 0,
           }); 
    }


    function trimCtaClick() {
window.open("https://www.chevrolet.com/trucks/previous-year/silverado/1500#design", "_blank");
 dataLayer.push({
event: "analytics",
category: "Primary",
action: "CTA",
label: "https://www.chevrolet.com/trucks/silverado-1500-pickup-truck#design"
});
 rstSound.muted = true;
    }

    function cta1Click() {
window.open("https://www.chevrolet.com/trucks/previous-year/silverado/1500?cmp=OLA_DISPLAY_%ebuy!_%epid!_%eaid!_%ecid!", "_blank");
 dataLayer.push({
event: "analytics",
category: "Primary",
action: "CTA",
label: "https://www.chevrolet.com/trucks/silverado-1500-pickup-truck"
});
 rstSound.muted = true;
    }

    function soundClick() {

if (isMuted == true) {
rstSound.muted = false;
isMuted = false;
document.getElementById("soundImg").style.opacity = 1;
//console.log("MUTED");
} else {
rstSound.muted = true;
isMuted = true;
document.getElementById("soundImg").style.opacity = .3;
//console.log("NOT MUTED");
}


    }

    function disclaimerOver() {

      if (onMobile == true) {
      document.getElementById("mDisclaimerContainer").style.display = 'flex';
      } else {
      document.getElementById("disc").style.display = 'inline';
      document.getElementById("infoBtn").style.opacity = 0;
      }

    }

    function mDisclaimerCLose() {
      document.getElementById("mDisclaimerContainer").style.display = 'none';
    }

    function disclaimerOut() {
      document.getElementById("disc").style.display = 'none';
      document.getElementById("infoBtn").style.opacity = 1;
    }

    function socialClick() {
      document.getElementById("shareContainer").style.display = 'flex';
    }
    function socialClose() {
      document.getElementById("shareContainer").style.display = 'none';
    }

    function removeSplash() {

      if (sceneReady == true) {

        splash.style.display = 'none';
      playAudio();
maincamera.setAttribute('orbit-controls', 'autoRotate: false; autoRotateSpeed: 0.1; enableKeys: false; enablePan: false; minAzimuthAngle:  5;  maxAzimuthAngle:  5;  maxDistance:  23;  maxPolarAngle:  95;  minDistance:  15;  minPolarAngle:  65;  minZoom:  10; screenSpacePanning: false; target: 5 4 1');


mainScene.addEventListener('mouseenter', function () {

mColors.style.display = 'none';
mTrimTextContainer.style.display = 'none';
mOpen = true;
menuBtn.src = "mobileui/mbtn2.png";

      });

mainScene.addEventListener('mousedown', function () {

mColors.style.display = 'none';
mTrimTextContainer.style.display = 'none';
mOpen = true;
menuBtn.src = "mobileui/mbtn2.png";

      });

dataLayer.push({
event: "analytics",
category: "secondary",
action: "Experience",
label: "Start Now"
});

      }

    }

function removeMesh(meshObj, objName) {
  meshObj.setAttribute("visible",false);
meshObj.setAttribute("gltf-model", "");

var removeObjVar = meshObj.getObject3D('mesh');
//console.log(removeObjVar);
//console.log(objName);
 
removeObj = removeObjVar.getObjectByName(objName);
//console.log(removeObj);
  if(removeObj.material){
      removeObj.material.dispose();
      if(removeObj.material.map){
        removeObj.material.map.dispose();
         //console.log("MAP");
      }
      if(removeObj.material.lightMap){
        removeObj.material.lightMap.dispose();
         //console.log("lightMap");
      }
      if(removeObj.material.aoMap){
        removeObj.material.aoMap.dispose();
         //console.log("aoMap");
      }
      if(removeObj.material.emissiveMap){
        removeObj.material.emissiveMap.dispose();
         //console.log("emissiveMap");
      }
      if(removeObj.material.bumpMap){
        removeObj.material.bumpMap.dispose();
         //console.log("bumpMap");
      }
      if(removeObj.material.normalMap){
        removeObj.material.normalMap.dispose();
         //console.log("normalMap");
      }
      if(removeObj.material.displacementMap){
        removeObj.material.displacementMap.dispose();
         //console.log("displacementMap");
      }
      if(removeObj.material.roughnessMap){
        removeObj.material.roughnessMap.dispose();
         //console.log("roughnessMap");
      }
      if(removeObj.material.metalnessMap){
        removeObj.material.metalnessMap.dispose();
         //console.log("metalnessMap");
      }
      if(removeObj.material.alphaMap){
        removeObj.material.alphaMap.dispose();
         //console.log("alphaMap");
      }
      if(removeObj.material.glossinessMap){
        removeObj.material.alphaMap.dispose();
         //console.log("glossinessMap");
      }
    }
    if(removeObj.geometry){
       removeObj.geometry.dispose();
      //console.log("geometry");
    }

    meshObj.setAttribute("gltf-model", "");
 
}


function removeMesh2(meshObj, objName, newColor) {
  
  meshObj.setAttribute("visible",false);
//meshObj.setAttribute("gltf-model", "");

var removeObjVar = meshObj.getObject3D('mesh');
//console.log(removeObjVar);
//console.log(objName);
 
removeObj = removeObjVar.getObjectByName(objName);
//console.log(removeObj);
  if(removeObj.material){
      removeObj.material.dispose();
      if(removeObj.material.map){
        removeObj.material.map.dispose();
         //console.log("BED MAP");
      }
      if(removeObj.material.lightMap){
        removeObj.material.lightMap.dispose();
         //console.log("BED lightMap");
      }
      if(removeObj.material.aoMap){
        removeObj.material.aoMap.dispose();
         //console.log("BED aoMap");
      }
      if(removeObj.material.emissiveMap){
        removeObj.material.emissiveMap.dispose();
         //console.log("BED emissiveMap");
      }
      if(removeObj.material.bumpMap){
        removeObj.material.bumpMap.dispose();
         //console.log("BED bumpMap");
      }
      if(removeObj.material.normalMap){
        removeObj.material.normalMap.dispose();
         //console.log("BED normalMap");
      }
      if(removeObj.material.displacementMap){
        removeObj.material.displacementMap.dispose();
         //console.log("BED displacementMap");
      }
      if(removeObj.material.roughnessMap){
        removeObj.material.roughnessMap.dispose();
         //console.log("BED roughnessMap");
      }
      if(removeObj.material.metalnessMap){
        removeObj.material.metalnessMap.dispose();
         //console.log("BED metalnessMap");
      }
      if(removeObj.material.alphaMap){
        removeObj.material.alphaMap.dispose();
         //console.log("BED alphaMap");
      }
      if(removeObj.material.glossinessMap){
        removeObj.material.alphaMap.dispose();
         //console.log("BED glossinessMap");
      }
    }
    if(removeObj.geometry){
       removeObj.geometry.dispose();
      //console.log("BED geometry");
    }

    //meshObj.setAttribute("gltf-model", "");
 
 truckBedColor.setAttribute("gltf-model", newColor);

 meshObj.setAttribute("visible",true);
 
}


function removeMesh3(meshObj3, objName3, newColor3) {
  
 meshObj3.setAttribute("gltf-model", "");

var removeObjVar3 = meshObj3.getObject3D('mesh');
 
 
removeObj3 = removeObjVar3.getObjectByName(objName3);
   if(removeObj3.material){
      removeObj3.material.dispose();
      if(removeObj3.material.map){
        removeObj3.material.map.dispose();
         //console.log("BED MAP");
      }
      if(removeObj3.material.lightMap){
        removeObj3.material.lightMap.dispose();
         //console.log("BED lightMap");
      }
      if(removeObj3.material.aoMap){
        removeObj3.material.aoMap.dispose();
         //console.log("BED aoMap");
      }
      if(removeObj3.material.emissiveMap){
        removeObj3.material.emissiveMap.dispose();
         //console.log("BED emissiveMap");
      }
      if(removeObj3.material.bumpMap){
        removeObj3.material.bumpMap.dispose();
         //console.log("BED bumpMap");
      }
      if(removeObj3.material.normalMap){
        removeObj3.material.normalMap.dispose();
         //console.log("BED normalMap");
      }
      if(removeObj3.material.displacementMap){
        removeObj3.material.displacementMap.dispose();
         //console.log("BED displacementMap");
      }
      if(removeObj3.material.roughnessMap){
        removeObj3.material.roughnessMap.dispose();
         //console.log("BED roughnessMap");
      }
      if(removeObj3.material.metalnessMap){
        removeObj3.material.metalnessMap.dispose();
         //console.log("BED metalnessMap");
      }
      if(removeObj3.material.alphaMap){
        removeObj3.material.alphaMap.dispose();
         //console.log("BED alphaMap");
      }
      if(removeObj3.material.glossinessMap){
        removeObj3.material.alphaMap.dispose();
         //console.log("BED glossinessMap");
      }
    }
    if(removeObj3.geometry){
       removeObj3.geometry.dispose();
      //console.log("BED geometry");
    }
 
 
 meshObj3.setAttribute("gltf-model", newColor3);

  
}


function addEvents() {

  document.getElementById('rstVideo').addEventListener('ended',videoEnded,false);
    function videoEnded(e) {
        rstVideoContainer.style.display = 'none';
         dataLayer.push({
event: "analytics",
category: "secondary",
action: "video",
label: "complete"
});
    }

}

 function menuClick() {
  //console.log("MOBILE!!!!!!!");
if (mOpen == false) {
mColors.style.display = 'none';
mTrimTextContainer.style.display = 'none';
mOpen = true;
menuBtn.src = "mobileui/mbtn2.png";
//console.log("OPEN!!!!!!!");
 } else {
   mColors.style.display = 'flex';
mTrimTextContainer.style.display = 'block';
menuBtn.src = "mobileui/mbtn.png";
mOpen = false;
//console.log("Closed!!!!!!!");
 }

 function closeUi() {
mColors.style.display = 'none';
mTrimTextContainer.style.display = 'none';
mOpen = true;
menuBtn.src = "mobileui/mbtn2.png";
 }
 



} 

function triggerEvent(el, type){
   if ('createEvent' in document) {
        // modern browsers, IE9+
        var e = document.createEvent('HTMLEvents');
        e.initEvent(type, false, true);
        el.dispatchEvent(e);
    } else {
        // IE 8
        var e = document.createEventObject();
        e.eventType = type;
        el.fireEvent('on'+e.eventType, e);
    }
}


function colorClick(ele) {

  currentColor = document.getElementById(ele.id).getAttribute('data-color1');
  currentColor2 = document.getElementById(ele.id).getAttribute('data-color2');
  currentColor3 = document.getElementById(ele.id).getAttribute('data-color3');
  //document.getElementById(currentColor).mousedown();

  var el = document.getElementById(currentColor);
triggerEvent(el, 'mousedown');
 
  for (j = 1; j <= 11; j++) {
        document.getElementById("mC" + j).style.display = 'none';
        document.getElementById("m" + j).style.border = "0px solid #ffffff";
        document.getElementById("m" + j).style.transform = "scale(1)";
        document.getElementById("dm" + j).style.border = "0px solid #ffffff";
        document.getElementById("dm" + j).style.transform = "scale(1)";
      };

      document.getElementById(ele.id).style.border = "1px solid #ffffff";
document.getElementById(ele.id).style.transform = "scale(1.3)";

  document.getElementById(currentColor2).style.display = 'inline';
  document.getElementById("dColors").innerHTML = currentColor3;

  trackColor = document.getElementById(ele.id).getAttribute('data-color3');

dataLayer.push({
event: "analytics",
category: "Secondary",
action: "Color",
label: trackColor
});

}


function checkMobile() {

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    var element = document.getElementById('text');
    if (isMobile) {
        //console.log('MOBILE');
        document.getElementById("mobileUi").style.display = 'flex';
        document.getElementById("trimContainer").style.display = 'none';
        document.getElementById("chevyLogo").style.display = 'none';
        document.getElementById("cta1").style.display = 'none';
        document.getElementById("mCta").style.display = 'true';

        document.getElementById("soundContainer").className = "mobileSoundClass";
        document.getElementById("infoBtn").className = "mobileSoundClass";

document.getElementById("soundContainer").style.bottom = document.getElementById("mCta").offsetHeight + "px";
document.getElementById("infoBtn").style.bottom = document.getElementById("mCta").offsetHeight + "px";


        colorHostspot.setAttribute("visible",false);
        colorHostspot.setAttribute("scale", {x: 0, y: 0, z: 0});
 document.getElementById("loaderImg").style.opacity = 1;       
document.getElementById("loaderFiller").style.display = 'none';
document.getElementById("loaderImg").style.width = "90%";
document.getElementById("loaderImg").style.minWidth = "0px";
document.getElementById("loaderImg").style.position = "initial";
document.getElementById("shareContainer").style.width = "90%";
document.getElementById("shareContainer").style.left = "5%";

document.getElementById("socialClose").style.width = "10%";
document.getElementById("socialClose").style.top = "-18px";

document.getElementById("desktopColorizer").style.display = 'none';


onMobile = true;


    } else {
      //console.log('DESKTOP');
      document.getElementById("loaderImg").style.opacity = 1;      
      document.getElementById("mobileUi").style.display = 'none';
      document.getElementById("mCta").style.display = 'none';
    }

}

function ctaHover() {
  document.getElementById("cta1").src = "assets/xrctaover.png";
}

function ctaOff() {
  document.getElementById("cta1").src = "assets/xrcta.png";
}

/*

window.addEventListener("orientationchange", function() {
    //alert("the orientation of the device is now " + screen.orientation.angle);

    if (screen.orientation.angle == 90){
      document.getElementById("mobileUi").style.display = 'none';
      document.getElementById("mCta").style.display = 'none';


      document.getElementById("mobileUi").style.display = 'none';
        document.getElementById("trimContainer").style.display = 'inline';
        document.getElementById("chevyLogo").style.display = 'inline';
        document.getElementById("cta1").style.display = 'inline';
        document.getElementById("mCta").style.display = 'none';

        document.getElementById("soundContainer").className = "mobileSoundClass";

document.getElementById("soundContainer").style.bottom = "0px";


        colorHostspot.setAttribute("visible",true);
        //colorHostspot.setAttribute("scale", {x: 0, y: 0, z: 0});
        
document.getElementById("loaderImg").style.width = "50%";

    } else {
      document.getElementById("mobileUi").style.display = 'flex';
        document.getElementById("trimContainer").style.display = 'none';
        document.getElementById("chevyLogo").style.display = 'none';
        document.getElementById("cta1").style.display = 'none';
        document.getElementById("mCta").style.display = 'inline';

        document.getElementById("soundContainer").className = "desktopSoundClass";

document.getElementById("soundContainer").style.bottom = document.getElementById("mCta").offsetHeight + "px";


        colorHostspot.setAttribute("visible",false);
        colorHostspot.setAttribute("scale", {x: 0, y: 0, z: 0});
        
document.getElementById("loaderImg").style.width = "90%";
    }
});
*/

function sizerButton() {
  trimBtnWidth = document.getElementById("mTrimContainer").offsetWidth;
trimBtnMargin = document.getElementById("mTb").offsetHeight;

         document.getElementById("mTrimBtnCon").style.height = document.getElementById("mTrimContainer").offsetHeight + "px";
         document.getElementById("mTbBtn").style.height = document.getElementById("mTrimContainer").offsetHeight + "px";
         document.getElementById("mRstBtn").style.height = document.getElementById("mTrimContainer").offsetHeight + "px";
         document.getElementById("mHcBtn").style.height = document.getElementById("mTrimContainer").offsetHeight + "px";
         document.getElementById("mTbBtn").style.width = trimBtnWidth + "px";
         document.getElementById("mRstBtn").style.width = trimBtnWidth + "px";
         document.getElementById("mHcBtn").style.width = trimBtnWidth + "px";
         document.getElementById("mTrimBtnCon").style.marginTop = trimBtnMargin + "px";
        //document.getElementById("soundContainer").style.transform = newUiSize;
var colorCon = document.getElementById("m1");
       //percent = (colorCon.offsetWidth/100) * 5;
        for (j = 1; j <= 11; j++) {
        document.getElementById("m" + j).style.height = colorCon.offsetWidth + "px";
      };
document.getElementById("menuBtn").click();




if (onMobile == true) {
      
document.getElementById("soundContainer").className = "mobileSoundClass";
        document.getElementById("infoBtn").className = "mobileSoundClass";

document.getElementById("soundContainer").style.bottom = document.getElementById("mCta").offsetHeight + "px";
document.getElementById("infoBtn").style.bottom = document.getElementById("mCta").offsetHeight + "px";


        colorHostspot.setAttribute("visible",false);
        colorHostspot.setAttribute("scale", {x: 0, y: 0, z: 0});
        
document.getElementById("loaderImg").style.width = "90%";
document.getElementById("shareContainer").style.width = "90%";
document.getElementById("shareContainer").style.left = "5%";

document.getElementById("socialClose").style.width = "10%";
document.getElementById("socialClose").style.top = "-18px";

document.getElementById("rotateDevice").className = 'rotateDevice2';




      } else if (onMobile == false) {


document.getElementById("rstVideo").style.width = "50%";
document.getElementById("rstVideoClose").style.width = "4%";
document.getElementById("rstVideoClose").style.marginLeft = "25%";
document.getElementById("rstVideoClose").style.marginTop = "-14%";

 var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

 if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
     document.getElementById("rstVideoClose").style.marginLeft = "50%";
document.getElementById("rstVideoClose").style.marginTop = "-28%";
}
        
      }


}

window.addEventListener("orientationchange", function(newOrientation) {

/*

  var orientation = screen.msOrientation || (screen.orientation || screen.mozOrientation || {}).type;

if (orientation === "landscape-primary") {
  //console.log("That looks good.");
} else if (orientation === "landscape-secondary") {
  //console.log("Mmmh... the screen is upside down!");
} else if (orientation === "portrait-secondary" || orientation === "portrait-primary") {
  //console.log("Mmmh... you should rotate your device to landscape");
} else if (orientation === undefined) {
  //console.log("The orientation API isn't supported in this browser :("); 
}

*/

if (device.landscape() == true) {
  //document.getElementById("rotateDevice").style.display = 'flex';
} else {
//document.getElementById("rotateDevice").style.display = 'none';
}

//console.log(device.landscape());


}, false);

/*
device.onChangeOrientation(function (newOrientation) {
        //console.log("orientation is " + newOrientation);
if (newOrientation == 'landscape') {
  document.getElementById("rotateDevice").style.display = 'flex';
} else {
document.getElementById("rotateDevice").style.display = 'none';
}

      });

*/

function slideIn2() {
      TweenLite.to(document.getElementById("desktopColorizer"), 1, {
        left: "0px",
           }); 

        
    }

    function slideOut2() {
      TweenLite.to(document.getElementById("desktopColorizer"), 1, {
        left: "-132px",
           }); 

    }

 //console.log("device.landscape() === %s", device.landscape());

 
/*
function tbTrimOver() {
document.getElementById("tbSelectImg2").style.opacity = 1;
document.getElementById("tbSelectImg1").style.display = 'none';
document.getElementById("rtSelectImg2").style.opacity = 0;
document.getElementById("hcSelectImg2").style.opacity = 0;
}

function rstTrimOver() {
  document.getElementById("rtSelectImg2").style.opacity = 1;
  document.getElementById("rtSelectImg1").style.display = 'none';
  document.getElementById("tbSelectImg2").style.opacity = 0;
  document.getElementById("hcSelectImg2").style.opacity = 0;

}

function hcTrimOver() {
  document.getElementById("hcSelectImg2").style.opacity = 1;
  document.getElementById("hcSelectImg1").style.display = 'none';
document.getElementById("rtSelectImg2").style.opacity = 0;
document.getElementById("tbSelectImg2").style.opacity = 0;

}
*/


var _analytics = {};
_analytics.parentSite = '';
_analytics.currentLocation = '';
_analytics.currentTrim = '';
_analytics.openInteraction = '';


function facebookCLick() {
 dataLayer.push({
event: "analytics",
category: "Primary",
action: "Share",
label: "Facebook"
});
    }

    function twitterClick() {
 dataLayer.push({
event: "analytics",
category: "Primary",
action: "Share",
label: "Twitter"
});
    }

    function emailClick() {
 dataLayer.push({
event: "analytics",
category: "Primary",
action: "Share",
label: "Email"
});
    }




document.addEventListener("keydown", function(event) {
  if (event.which == 27) {
    rstSound.muted = true;
  }

  function emailClick() {
 dataLayer.push({
event: "analytics",
category: "Primary",
action: "Share",
label: "Email"
});
    }

});




 
</script>

    <div id="splash" onclick="removeSplash()">
      <div id="splashBg"></div>
      <img src="assets/xrloader.png" id="loaderImg">
      <img src="assets/xrloader.png" id="loaderFiller">
      <div id="spinner" class="loading"></div>
      <div class="start-button">Start</div>
     </div>

      <div id="splash2">
      <div id="loader2"></div>
     </div>

     <div id="blocker"></div>
    
    <a-scene id="mainScene" bed-animation-down bed-animation-up trim-component raycaster="objects: .clickable" cursor="rayOrigin: mouse" scene-init-code  follow-cam foo color-space="sRGB" renderer="gammaOutput: true, physicallyCorrectLights: false; antialias:  true" gltf-model="dracoDecoderPath: ./decoder/"  vr-mode-ui="enabled:  false">
      <a-assets>          
        <a-asset-item id="truckPlasticAsset" src="assets/plastics/scene.gltf"></a-asset-item>
        <a-asset-item id="truckRearIntAsset" src="assets/reardoorint/scene.gltf"></a-asset-item>
        <a-asset-item id="truckPlasticLeftAsset" src="assets/leftdoorplastic/scene.gltf"></a-asset-item>
        <a-asset-item id="truckGrillAsset" src="assets/grill/scene.gltf"></a-asset-item>
        <a-asset-item id="rstMetalAsset" src="assets/rstmetal/scene.gltf"></a-asset-item>
        <a-asset-item id="rstGrillAsset" src="assets/rstgrill/scene.gltf"></a-asset-item>
         <a-asset-item id="tbGrillAsset" src="assets/tbgrill/scene.gltf"></a-asset-item>
        <a-asset-item id="rstLogoAsset" src="assets/rstlogo/scene.gltf"></a-asset-item>
        <a-asset-item id="tbLogoasset1" src="assets/tblogo1/scene.gltf"></a-asset-item>
        <a-asset-item id="tbLogoasset2" src="assets/tblogo/scene.gltf"></a-asset-item>
        <a-asset-item id="rstBadgeAsset" src="assets/rstbadges/scene.gltf"></a-asset-item>
        <a-asset-item id="truckfoglightAsset" src="assets/foglight/scene.gltf"></a-asset-item>
        <a-asset-item id="truckfoglightTbAsset" src="assets/foglighttb/scene.gltf"></a-asset-item>
        <a-asset-item id="truckfoglightHcAsset" src="assets/hcfoglights/scene.gltf"></a-asset-item>
         <a-asset-item id="truckWindowsAsset" src="assets/allwindows/scene.gltf"></a-asset-item>
         <a-asset-item id="truckLogoAsset" src="assets/logo/scene.gltf"></a-asset-item>
         <a-asset-item id="truckLogoAsset2" src="assets/logo2/scene.gltf"></a-asset-item>
         <a-asset-item id="truckLightsAsset" src="assets/lights/scene.gltf"></a-asset-item>
         <a-asset-item id="truckLightsOnAsset" src="assets/lights/on.gltf"></a-asset-item>
        <a-asset-item id="tiresRstAsset" src="assets/rsttirev3/scene.gltf"></a-asset-item>
        <a-asset-item id="tiresTbAsset" src="assets/tbtiresv3/scene.gltf"></a-asset-item>
<a-asset-item id="tiresHcAsset" src="assets/hctiresv3/scene.gltf"></a-asset-item>
        <a-asset-item id="tbPlastic" src="assets/tbplastic/scene.gltf"></a-asset-item>
        <a-asset-item id="hitchAsset" src="assets/hitch/scene.gltf"></a-asset-item>
        <a-asset-item id="tbBumper" src="assets/tbbumper/scene.gltf"></a-asset-item>
 <a-asset-item id="rimsTbAsset" src="assets/tbrims/scene.gltf"></a-asset-item>
 <a-asset-item id="rimsHcAsset" src="assets/hcrims/scene.gltf"></a-asset-item>
 <a-asset-item id="int1Asset" src="int1/scene.gltf"></a-asset-item>
 <a-asset-item id="int2Asset" src="int2/scene.gltf"></a-asset-item>

        <a-asset-item id="tbHandlesAsset" src="assets/tbhandles/scene.gltf"></a-asset-item>
        <a-asset-item id="hcHandlesAsset" src="assets/hchandles/scene.gltf"></a-asset-item>
        <a-asset-item id="tbpipesAsset" src="assets/tbpipes/scene.gltf"></a-asset-item>
        <a-asset-item id="backWindowAsset" src="assets/backwindow/scene.gltf"></a-asset-item>

        <a-asset-item id="bedlines" src="assets/bedlines/scene.gltf"></a-asset-item>
        <a-asset-item id="rstPlasticAsset" src="assets/rstplastic/scene.gltf"></a-asset-item>
         <img id="hsIcon" src="assets/XR-Hotspot.png">
        <img id="colorIcon" src="assets/paint.png">
        <img id="NorthskyBlueMetallicAsset" src="assets/swatches/1NorthskyBlueMetallicAsset.png">
        <img id="CajunRedTintAsset" src="assets/swatches/2CajunRedTintcoatAsset.png">
        <img id="BlackAsset" src="assets/swatches/3BlackAsset.png">
        <img id="OakwoodMetallicAsset" src="assets/swatches/4OakwoodMetallicAsset.png">
        <img id="SummitWhiteAsset" src="assets/swatches/5SummitWhiteAsset.png">
        <img id="SilverIceMetallicAsset" src="assets/swatches/6SilverIceMetallicAsset.png">
        <img id="SatinSteelMetallicAsset" src="assets/swatches/7SatinSteelMetallicAsset.png">
        <img id="ShadowGrayMetallicAsset" src="assets/swatches/8ShadowGrayMetallicAsset.png">
        <img id="RedHotAsset" src="assets/swatches/9RedHotAsset.png">
        <img id="HavanaBrownMetallicAsset" src="assets/swatches/10HavanaBrownMetallicAsset.png">
        <img id="IridescentPearlAsset" src="assets/swatches/11IridescentPearlAsset.png">

      </a-assets>

      <a-entity id="maincameraContainer"  position="-5 -3 -0.6">

      <a-entity id="maincamera"  scale="1 1 1" static-body  orbit-controls="initialPosition: 10 4 40; autoRotate: true; autoRotateSpeed: 0.1; enableKeys: false; enablePan: false; minAzimuthAngle:  5;  maxAzimuthAngle:  5;  maxDistance:  23;  maxPolarAngle:  95;  minDistance:  15;  minPolarAngle:  65;  minZoom:  10; screenSpacePanning: false; target: 5 4 1" rotation="" look-controls="enabled: false" data-aframe-inspector-original-camera="" cursor="rayOrigin: mouse"  camera="active: true; fov: 45" wasd-controls="enabled: false">
       </a-entity>
     </a-entity>

<a-entity id="intCameraRig" position="-1.21 0.64 0.33" rotation="0 112.18 0">
     <a-entity id="intCamera"  camera="active: false; fov: 45" position="0 0 0"  look-controls="enabled: false"></a-entity>
   </a-entity>


   <a-entity id="intCameraRig2" position="-0.4 0.64 0.61" rotation="0 200.38 0">
     <a-entity id="intCamera2"  camera="active: false; fov: 45" position="0 0 0"  look-controls="enabled: true"></a-entity>
   </a-entity>


 

<a-entity id="mainTruck">
     

 
<a-entity id="tbTruckBodyBg" cube-env-map="path: ./tbenvmap/; extension: jpg; intensity:  1; roughness: 0.04; metalness: 0.6" position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="red/tbbgbody.gltf"  visible="true">
      </a-entity>
     

      <a-entity id="tbTruckBody" class="truckColors" cube-env-map="path: ./tbenvmap/; extension: jpg; intensity:  1; roughness: 0.04; metalness: 0.6" position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="red/CajunRedTintAsset.gltf"  visible="true">
      </a-entity>


<a-entity id="rstTruckBodyBg" cube-env-map="path: ./tbenvmap/; extension: jpg; intensity:  1; roughness: 0.04; metalness: 0.6" position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="red/rstbgbody.gltf"  visible="false">
      </a-entity>
     

      <a-entity id="rstTruckBody" class="truckColors" cube-env-map="path: ./tbenvmap/; extension: jpg; intensity:  1; roughness: 0.04; metalness: 0.6" position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="red/rst_NorthskyBlueMetallicAsset.gltf"  visible="false">
      </a-entity>


      <a-entity id="hcTruckBodyBg" cube-env-map="path: ./tbenvmap/; extension: jpg; intensity:  1; roughness: 0.04; metalness: 0.6" position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="red/hcbody.gltf"  visible="false">
      </a-entity>
     

      <a-entity id="hcTruckBody" class="truckColors" cube-env-map="path: ./tbenvmap/; extension: jpg; intensity:  1; roughness: 0.04; metalness: 0.6" position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="red/hc_IridescentPearlAsset.gltf"  visible="false">
      </a-entity>
      
 


      <a-entity id="rstGrill" class="rstParts1" position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="assets/rstgrill/scene.gltf" visible="true">
      </a-entity>

      <a-entity id="tbGrill" class="tbParts1" position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="assets/tbgrill/scene.gltf" visible="false">
      </a-entity>

      <a-entity id="hcGrill" cube-env-map="path: ./env3/; extension: jpg; intensity:  2; roughness: 0; metalness: 1"  class="tbParts1" position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="assets/hcgrill/scene.gltf" visible="false">
      </a-entity>

      <a-entity id="hcGrillChrome"  class="tbParts1" position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" visible="false">
      </a-entity>
      
<a-entity id="hcGrillChrome2" cube-env-map="path: ./env3/; extension: jpg; intensity:  .1" class="tbParts1" position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" visible="false">
      </a-entity>

      <a-entity id="hcGrillChrome3" cube-env-map="path: ./env3/; extension: jpg; intensity:  .1" class="tbParts1" position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" visible="false">
      </a-entity>


      <a-entity id="truckAo"  position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="assets/baseaov2/scene.gltf" visible="true">
      </a-entity>

      <a-entity id="lightFill"  position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="assets/lightfill/scene.gltf" visible="true">
      </a-entity>

      <a-entity id="wheelWell"  position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="assets/wheelwell/scene.gltf" visible="true">
      </a-entity>

      <a-entity id="axel1"  position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="assets/axel1/scene.gltf" visible="true">
      </a-entity>

      <a-entity id="axel2"  position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="assets/axel2/scene.gltf" visible="true">
      </a-entity>

      <a-entity id="truckInt1" position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.68" scale="0.03 0.03 0.03" gltf-model="assets/lpint/scene.gltf" shadow="" visible="">
      </a-entity>


<a-entity id="truckInt3"  position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="#int1Asset" shadow="cast: true; receive: true;" visible="true">
      </a-entity>

      
 

 <a-entity light="color: #C7CCFF; intensity: 0.96;" rotation="-32 -60.5 0" id="intLight1" visible="false" position="-13.48 7.12 7.26"></a-entity>


       

    <a-entity id="tbLogo1" class="tbParts" light-map-geometry="path: assets/mmap2.jpg; intensity: 1"  cube-env-map="path: ./env1/; extension: jpg; intensity: 6"  position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="#tbLogoasset1" visible="false">
      </a-entity>

      <a-entity id="hcLogo1" class="tbParts"    cube-env-map="path: ./env3/; extension: jpg; intensity: 15"  position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="assets/hclogo1/scene.gltf" visible="false">
      </a-entity>




<a-entity id="truckRearWhole" position="7.4879999999999995 -0.632 -2.899" rotation="0 21.779999999999998 0">

      <a-entity id="rstLogo" class="rstParts" cube-env-map="path: ./env1/; extension: jpg; intensity:  10"   position="-17.151 -3.515 0.013999999999999846" rotation="0 -360 0" scale="0.03 0.03 0.03" gltf-model="#rstLogoAsset" visible="true">
      </a-entity>

      <a-entity id="tbLogo" class="tbParts" cube-env-map="path: ./env1/; extension: jpg; intensity:  10"   position="-17.151 -3.515 0.013999999999999846" rotation="0 -360 0" scale="0.03 0.03 0.03" gltf-model="#tbLogoasset2" visible="false">
      </a-entity>

      <a-entity id="hcLogo2" class="tbParts" cube-env-map="path: ./tbenvmap/; extension: jpg; intensity:  .5; roughness: 0; metalness: 10"   position="-17.151 -3.515 0.013999999999999846" rotation="0 -360 0" scale="0.03 0.03 0.03" gltf-model="assets/hclogo2/scene.gltf" visible="false">
      </a-entity>


       <a-entity id="truckRearInt" light-map-geometry="path: assets/mmap2.jpg; intensity: .1" position="-17.151 -3.515 0.013999999999999846" rotation="0 -360 0" scale="0.03 0.03 0.03" gltf-model="assets/reardoorint/scene.gltf" visible="">
      </a-entity>


<a-entity id="truckBedColorBg" class="truckColors" cube-env-map="path: ./tbenvmap/; extension: jpg; intensity:  1; roughness: 0.04; metalness: 0.6" position="-17.151 -3.515 0.013999999999999846" rotation="0 -360 0" scale="0.03 0.03 0.03" gltf-model="red/tg_bg.gltf" visible="true">
      </a-entity>

      <a-entity id="truckBedColor" class="truckColors" cube-env-map="path: ./tbenvmap/; extension: jpg; intensity:  1; roughness: 0.04; metalness: 0.6" position="-17.151 -3.515 0.013999999999999846" rotation="0 -360 0" scale="0.03 0.03 0.03" gltf-model="red/tb_CajunRedTintAsset.gltf" visible="true">
      </a-entity>

       
 
       

  

</a-entity>





 

      <a-entity id="truckBed1" position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="assets/truckbed/scene.gltf" visible="true">
      </a-entity>



      
      <a-entity id="truckBed1On" position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="assets/truckbed2/scene.gltf" visible="false">
      </a-entity>
    

      <a-entity id="truckBed2"  light-map-geometry="path: assets/mmap2.jpg; intensity: .1"  position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="#bedlines" visible="false">
      </a-entity>

      <a-entity id="truckBedLogoRST_TB" position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="assets/ribbonlogo/scene.gltf" visible="true">
      </a-entity>

      <a-entity id="truckBedLogoRST_TB2" position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="assets/ribbonlogo/scene.gltf" visible="false">
      </a-entity>

      <a-entity id="truckBedLogoHc" position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="assets/hclogo3/scene.gltf" visible="false">
      </a-entity>

      <a-entity id="truckPlastic"  light-map-geometry="path: assets/mmap2.jpg; intensity: 5"  position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="#truckPlasticAsset" visible="true">
      </a-entity>

      <a-entity id="truckPlasticLeft"  light-map-geometry="path: assets/mmap2.jpg; intensity: 5"  position="-8.43077203542856 -4.535 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="#truckPlasticLeftAsset" visible="true">
      </a-entity>

  <a-entity id="truckPlasticPlate"  light-map-geometry="path: assets/mmap2.jpg; intensity: .2"  position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" visible="true">
      </a-entity>

      <a-entity id="rstMetal" class="rstParts1" cube-env-map="path: ./env3/; extension: jpg; intensity:  3"  position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="#rstMetalAsset" visible="true">
      </a-entity>

      

      <a-entity id="rstPlastic" class="rstParts1" cube-env-map="path: ./tbenvmap/; extension: jpg; intensity:  0; roughness: 1; metalness: 0.1"  position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="#rstPlasticAsset" visible="true">
      </a-entity>

      <a-entity id="rstBumberBottom" class="rstParts1" cube-env-map="path: ./env1/; extension: jpg; intensity:  .3" position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="#rstPlasticAsset" visible="true">
      </a-entity>


      <a-entity id="tbPlasticPart" class="tbParts1" cube-env-map="path: ./tbenvmap/; extension: jpg; intensity:  .3; roughness: 0.04; metalness: 0.6"  light-map-geometry="path: assets/mmap2.jpg; intensity: .1"  position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="#tbPlastic" visible="false">
      </a-entity>

      <a-entity id="tbPlasticPart2" cube-env-map="path: ./tbenvmap/; extension: jpg; intensity:  .001; roughness: 1; metalness: 0.6" class="tbParts1" position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="" visible="true">
      </a-entity>

      <a-entity id="tbPlasticPart3" cube-env-map="path: ./tbenvmap/; extension: jpg; intensity:  .3; roughness: 0.04; metalness: 0.6"  class="tbParts1" position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="" visible="true">
      </a-entity>

      <a-entity id="hitch" class=""  light-map-geometry="path: assets/mmap2.jpg; intensity: 1"  position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="#hitchAsset" visible="true">
      </a-entity>


      

      <a-entity id="tbBumperPart" class="tbParts1" cube-env-map="path: ./tbenvmap/; extension: jpg; intensity:  .3; roughness: 0.04; metalness: 0.6"  position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="#tbBumper" visible="false">
      </a-entity>

      <a-entity id="hcBumperPart" class="hcParts1" cube-env-map="path: ./env1/; extension: jpg; intensity:  .3"   position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="assets/hcbumper/scene.gltf" visible="false">
      </a-entity>

      <a-entity id="hcBumperPart2" class="hcParts1" cube-env-map="path: ./env3/; extension: jpg; intensity:  2; roughness: 0; metalness: 1"   position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" visible="false">
      </a-entity>

      <a-entity id="tbHandles" class="tbParts1" cube-env-map="path: ./env1/; extension: jpg; intensity:  .3"    position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="#tbHandlesAsset" visible="false">
      </a-entity>

      <a-entity id="hcHandles" class="tbParts1" cube-env-map="path: ./tbenvmap/; extension: jpg; intensity:  .5; roughness: 0; metalness: 3"  position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="#hcHandlesAsset" visible="false">
      </a-entity>

      <a-entity id="tbPipes" class="tbParts1" cube-env-map="path: ./tbenvmap/; extension: jpg; intensity:  .8; roughness: 0; metalness: 2"    position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="#tbpipesAsset" visible="false">

        <a-entity id="tbPipesBlocker" geometry="" material="color: #000000" scale="0.2 5.42 17.94" position="577.3104 46.46602 -55.94294" rotation="0 -3.45 0"></a-entity>

        <a-entity id="tbPipesBlocker2" geometry="" material="color: #000000" scale="0.2 5.42 17.94" position="577.3104 46.46602 55.94294" rotation="0 -3.45 0"></a-entity>

      </a-entity>




<a-entity id="rstBadges" class="rstParts"  light-map-geometry="path: assets/mmap2.jpg; intensity: 1"  position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="#rstBadgeAsset" visible="true">
      </a-entity>


      <a-entity id="truckWindows"  cube-env-map="path: ./env1/; extension: jpg; intensity:  .5"  position="0 0 0" rotation="0 0 0" scale="1 1 1" gltf-model="#truckWindowsAsset" visible="true">
      </a-entity>
 

      <a-entity id="rsideMirror"  cube-env-map="path: ./env1/; extension: jpg; intensity:  5"  position="-8.42587203542856 -4.355 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="assets/rsidemirror/scene.gltf" visible="true">
      </a-entity>

      <a-entity id="lsideMirror"  cube-env-map="path: ./env1/; extension: jpg; intensity:  5"  position="-8.43077203542856 -4.355 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="assets/lsidemirror/scene.gltf" visible="true">
      </a-entity>

      <a-entity id="truckWindowsBlack"  position="-8.43077203542856 -4.355 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="assets/frontdoorwindowblack/scene.gltf" visible="true">
      </a-entity>

      <a-entity id="truckfoglight"  light-map-geometry="path: assets/mmap2.jpg; intensity: .1"  position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="#truckfoglightAsset" visible="true">
      </a-entity>
       <a-entity id="truckfoglightTb"  light-map-geometry="path: assets/mmap2.jpg; intensity: .1"  position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="#truckfoglightTbAsset" visible="false">
      </a-entity>

      <a-entity id="truckfoglightHc"  light-map-geometry="path: assets/mmap2.jpg; intensity: .1"  position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="#truckfoglightHcAsset" visible="false">
      </a-entity>

      <a-entity id="truckfoglightHcChrome" cube-env-map="path: ./env3/; extension: jpg; intensity:  2; roughness: 0; metalness: 1"   position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" visible="false">
      </a-entity>

       <a-entity id="truckfoglightHcChrome2" cube-env-map="path: ./env3/; extension: jpg; intensity:  2; roughness: 0; metalness: 1"  position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" visible="false">
      </a-entity>


      <a-entity id="truckLogo" cube-env-map="path: ./env1/; extension: jpg; intensity:  1"  light-map-geometry="path: assets/mmap2.jpg; intensity: 1"  position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="#truckLogoAsset" visible="true">
      </a-entity>

      <a-entity id="truckLogoOuter" cube-env-map="path: ./tbenvmap/; extension: jpg; intensity:  10; roughness: 0; metalness: 3"  position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="" visible="true">
      </a-entity>

      <a-entity id="truckLogo2" cube-env-map="path: ./env1/; extension: jpg; intensity:  1"  light-map-geometry="path: assets/mmap2.jpg; intensity: 1"  position="0 0 0" rotation="0 0 0" scale="1 1 1" gltf-model="#truckLogoAsset2" visible="false">
      </a-entity>

      <a-entity id="truckLogoChrome2" position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03"  visible="false">
      </a-entity>

      <a-entity id="hcMirrorLight" cube-env-map="path: ./env3/; extension: jpg; intensity:  .5; roughness: 0; metalness: 1" position="" rotation="" scale="" gltf-model="assets/hcmirrorlight/scene.gltf" visible="false">
      </a-entity>

 

    <a-entity id="baseLights" cube-env-map="path: ./env1/; extension: jpg; intensity:  1"  position="-8.43077203542856 -4.355 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="assets/baselight/scene.gltf" visible="true">
      </a-entity>

      <a-entity id="baseLightsInt"  position="0 0 0" rotation="0 0 0" scale="1 1 1" gltf-model="assets/baselightint/scene.gltf" visible="true">
      </a-entity>


      <a-entity id="topLight" cube-env-map="path: ./env1/; extension: jpg; intensity:  1"   position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="assets/toplight/scene.gltf" visible="true">
      </a-entity>


      
      <a-entity id="truckLights" cube-env-map="path: ./env1/; extension: jpg; intensity:  3"  light-map-geometry="path: assets/mmap2.jpg; intensity: 1"  position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="#truckLightsAsset" visible="true">
      </a-entity>

      <a-entity id="truckLightsOn" cube-env-map="path: ./env1/; extension: jpg; intensity:  3"  light-map-geometry="path: assets/mmap2.jpg; intensity: 1"  position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="#truckLightsOnAsset" visible="false">
      </a-entity>
 
 

</a-entity>





<a-entity id="allTires">

<a-entity id="tiresRst" class="rstParts"  position="0 0 0" rotation="0 0 0" scale="1 1 1" gltf-model="#tiresRstAsset" visible="true">
          
      </a-entity>

      <a-entity id="tiresTb" class="tbParts"  position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="#tiresTbAsset" visible="false">
          
      </a-entity>

      <a-entity id="tiresHc" class="tbParts"  position="0 0 0" rotation="0 0 0" scale="1 1 1" gltf-model="#tiresHcAsset" visible="false">
          
      </a-entity>

      <a-entity id="rimsRst" class="rstParts"  position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="assets/rimsrst/scene.gltf" visible="true">
          
      </a-entity>

      <a-entity id="rimsTb" class="tbParts" position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="#rimsTbAsset" visible="false">
          
      </a-entity>

      <a-entity id="rimsHc" class="hcParts" position="-8.43077203542856 -4.355099755839431 3.3339808411798595" rotation="0 -338.67 0.680" scale="0.03 0.03 0.03" gltf-model="#rimsHcAsset" visible="false">
          
      </a-entity>

</a-entity>





<!-- ***************** COLORIZER ********************** -->

       <a-entity id="colorizer1" class="" position="-0.58 4.004 0.23" look-at="#lookCube" geometry="primitive: circle" material="src: ; shader: flat; side: double; transparent: true" scale="2 2 2" rotation="13.42 18.94 -4.08" visible="false">

<a-entity id="color1" colorizer="swatchlocation: #NorthskyBlueMetallicAsset; carcolor1: NorthskyBlueMetallicAsset;" geometry="" material="alphaTest: 0.99; opacity: 0; blending: none; depthTest: false; depthWrite: false" scale="0 0 0" position="0.20706633908337546 0.830225093506863 -0.06691980736175597" class=""></a-entity>

<a-entity id="color2" colorizer="swatchlocation: #CajunRedTintAsset; carcolor1: CajunRedTintAsset;" geometry="" material="alphaTest: 0.99; opacity: 0; blending: none; depthTest: false; depthWrite: false" scale="0 0 0" position="0.6867571752229237 0.540384021158877 0.07282021020977884" class=""></a-entity>

<a-entity id="color3" colorizer="swatchlocation: #BlackAsset; carcolor1: BlackAsset;" geometry="" material="alphaTest: 0.99; opacity: 0; blending: none; depthTest: false; depthWrite: false" scale="0 00" position="0.8612073820546801 0.11452252760697758 0.025164396268955377" class=""></a-entity>

<a-entity id="color4" colorizer="swatchlocation: #OakwoodMetallicAsset; carcolor1: OakwoodMetallicAsset" geometry="" material="alphaTest: 0.99; opacity: 0; blending: none; depthTest: false; depthWrite: false" scale="0 0 0" position="0.8769697451292839 -0.377779000390128 0.005545200930986094" class="" rotation=""></a-entity>

<a-entity id="color5" colorizer="swatchlocation: #SummitWhiteAsset; carcolor1: SummitWhiteAsset" geometry="" material="alphaTest: 0.99; opacity: 0; blending: none; depthTest: false; depthWrite: false" scale="0 0 0" position="0.4346803169570775 -0.7420246724525101 0.017809023509845506" class="" rotation=""></a-entity>

<a-entity id="color6" colorizer="swatchlocation: #SilverIceMetallicAsset; carcolor1: SilverIceMetallicAsset" geometry="" material="alphaTest: 0.99; opacity: 0; blending: none; depthTest: false; depthWrite: false" scale="0 0 0" position="-0.027 -0.8032945019122227 -0.034236077601030944" class="" rotation=""></a-entity>

<a-entity id="color7" colorizer="swatchlocation: #SatinSteelMetallicAsset; carcolor1: SatinSteelMetallicAsset" geometry="" material="alphaTest: 0.99; opacity: 0; blending: none; depthTest: false; depthWrite: false" scale="0 0 0" position="-0.5198834933726497 -0.7638805024441576 0.013201800879793033" class="" rotation=""></a-entity>

<a-entity id="color8" colorizer="swatchlocation: #ShadowGrayMetallicAsset; carcolor1: ShadowGrayMetallicAsset" geometry="" material="alphaTest: 0.99; opacity: 0; blending: none; depthTest: false; depthWrite: false" scale="0.33 0.35000000000000003 0.25" position="-0.7938683662327104 -0.36618656547283857 0.06888746797148945" class="" rotation=""></a-entity>

<a-entity id="color9" colorizer="swatchlocation: #RedHotAsset; carcolor1: RedHotAsset" geometry="" material="alphaTest: 0.99; opacity: 0; blending: none; depthTest: false; depthWrite: false" scale="0.33 0.35000000000000003 0.25" position="-0.8556916591693747 0.11770329005836297 -0.04661874140534303" class="" rotation=""></a-entity>

<a-entity id="color10" colorizer="swatchlocation: #HavanaBrownMetallicAsset; carcolor1: HavanaBrownMetallicAsset" geometry="" material="alphaTest: 0.99; opacity: 0; blending: none; depthTest: false; depthWrite: false" scale="0.33 0.35000000000000003 0.25" position="-0.625866642133783 0.5535285340475804 -0.10462446785864074" class="" rotation=""></a-entity>

<a-entity id="color11" colorizer="swatchlocation: #IridescentPearlAsset; carcolor1: IridescentPearlAsset" geometry="" material="alphaTest: 0.99; opacity: 0; blending: none; depthTest: false; depthWrite: false" scale="0.33 0.35000000000000003 0.25" position="-0.2893487207526587 0.8155183960238006 -0.025949441998488865" class="" rotation=""></a-entity>


       </a-entity>




<!-- *********** RST SCENE START *********** -->
<a-entity id="rstScene" visible="true">

      <a-entity id="rstLight1" position="0 1 -9.552" light="type: directional; intensity: .1;" visible=""></a-entity>

       <a-entity id="rstLight2" position="0 1 9.552" light="type: directional; intensity: .1;" visible=""></a-entity>

       <a-entity id="rstLight3" position="15.021 1 -9.552" light="type: directional; intensity: .1;" visible=""></a-entity>

 

       <!-- hot-spots -->

       <a-entity id="rstHotspots" scale="1 1 1" visible="true">

       <a-entity id="rstHotspot1" class="clickable sceneHotspotIcon" hotspots-component="hstarget: #rstHs1; closetarget: #rstHsClose1; assetlocation: assets/hotspots/rst/hs1.png; hsshader: flat; hotspotname: rstHotspot1" position="-7 0.395 2.879" look-at="#lookCube" geometry="primitive: circle" material="src: #hsIcon; shader: flat; side: double" scale="0.25 0.25 0.25" rotation="0 100 0">
      <a-entity id="rstHotspotBtn1" geometry="" scale="4 4 4" material="opacity: 0; transparent: true; depthTest: false"></a-entity>
      </a-entity>


      <a-entity id="rstHotspot2" class="clickable sceneHotspotIcon" hotspots-component="hstarget: #rstHs2; closetarget: #rstHsClose2; assetlocation: assets/hotspots/rst/hs2.png; hsshader: flat; hotspotname: rstHotspot2" position="-2.23 -1.15 5.10" look-at="#lookCube" geometry="primitive: circle" material="src: #hsIcon; shader: flat; side: double" scale="0.25 0.25 0.25" rotation="1.5416721951535655 20.538404772577874 4.971416234916939e-17">
      <a-entity id="rstHotspotBtn2" geometry="" scale="4 4 4" material="opacity: 0; transparent: true; depthTest: false"></a-entity>
      </a-entity>

      <a-entity id="rstHotspot3" class="clickable sceneHotspotIcon" hotspots-component="hstarget: #rstHs3; closetarget: #rstHsClose3; hsshader: flat; assetlocation: assets/hotspots/rst/hs3v3.png; hotspotname: rstHotspot3" position="-4.96 -0.044 -2.49" look-at="#lookCube" geometry="primitive: circle" material="src: #hsIcon; shader: flat; side: double" scale="0.25 0.25 0.25" rotation="-8.31632995900583 -40.417239772542636 -1.205383083966075e-15">
      <a-entity id="rstHotspotBtn3" geometry="" scale="4 4 4" material="opacity: 0; transparent: true; depthTest: false"></a-entity>
      </a-entity>

      <a-entity id="rstHotspot4" class="clickable sceneHotspotIcon" hotspots-component="hstarget: #rstHs4; closetarget: #rstHsClose4; hsshader: flat; assetlocation: assets/hotspots/rst/hs4.png; hotspotname: rstHotspot4" position="7.3088 -1.31 -6.23421" look-at="#lookCube" geometry="primitive: circle" material="src: #hsIcon; shader: flat; side: double" scale="0.25 0.25 0.25" rotation="-8.31 -40.41 -1.20">
      <a-entity id="rstHotspotBtn4" geometry="" scale="4 4 4" material="opacity: 0; transparent: true; depthTest: false"></a-entity>
      </a-entity>

       <a-entity id="rstHotspot5" class="clickable sceneHotspotIcon" hotspots-component="hstarget: #rstHs5; closetarget: #rstHsClose5; hsshader: flat; assetlocation: assets/hotspots/rst/hs5.png; hotspotname: rstHotspot5" position="5.73 1.16 -2.14" look-at="#lookCube" geometry="primitive: circle" material="src: #hsIcon; shader: flat; side: double" scale="0.25 0.25 0.25" rotation="-8.31 -40.41 -1.20">
      <a-entity id="rstHotspotBtn5" geometry="" scale="4 4 4" material="opacity: 0; transparent: true; depthTest: false"></a-entity>
      </a-entity>


      <a-entity id="rstVideoHotspot" class="clickable sceneHotspotIcon" hotspots-component="hstarget: #rstHs8; closetarget: #rstHsClose8; hsshader: flat; assetlocation: assets/hotspots/rst/hs8.png; hotspotname: rstHotspot6Video" position="9.20 -0.59 -0.47" look-at="#lookCube" geometry="primitive: circle" material="src: #hsIcon; shader: flat; side: double" scale="0.25 0.25 0.25" rotation="0 100 0">
   
      <a-entity id="rstVideoHotspotBtn" geometry="" scale="4 4 4" material="opacity: 0; transparent: true; depthTest: false"></a-entity>

      </a-entity>

<!-- hot-spot-pop-up -->

      <a-entity id="rstHs1" class="sceneHotspot" position="-8.144 2.79 2.221" look-at="#lookCube" geometry="" material="src: ; shader: flat; transparent: true; alphaTest:  0.1;" scale="8 8 0.001" rotation="-5.835578434948516 -66.6097267385972 0" visible="false">
     <a-entity id="rstHsClose1" geometry="" material="alphaTest: 0.99; opacity: 0; blending: none; depthTest: false; depthWrite: false" scale="0.27 0.2 -429.80" position="0.44 0.25 50" class="clickable"></a-entity>

</a-entity>


<a-entity id="rstHs2" class="sceneHotspot" position="-2.48 1.06 6.87" look-at="#lookCube" geometry="" material="src: ; shader: flat; transparent: true; alphaTest:  0.1;" scale="8 8 0.001" rotation="-3.211494155565775 -8.652685902755598 0" visible="false">
     <a-entity id="rstHsClose2" geometry="" material="alphaTest: 0.99; opacity: 0; blending: none; depthTest: false; depthWrite: false" scale="0.27 0.2 -429.8" position="0.22 0.16 -0.45" class="clickable"></a-entity>

</a-entity>


<a-entity id="rstHs3" class="sceneHotspot" position="-5.26 1.9 -4.72" look-at="#lookCube" geometry="" material="shader: flat; transparent: true; alphaTest:  0.1;" scale="5 5 0.001" rotation="-8.752448531335322 -131.2016515417702 8.045071492138407e-16" visible="false">
     <a-entity id="rstHsClose3" geometry="" material="alphaTest: 0.99; opacity: 0; blending: none; depthTest: false; depthWrite: false" scale="0.27 0.2 -429.8" position="0.4 0.33 0" class="clickable"></a-entity>

</a-entity>


<a-entity id="rstHs4" class="sceneHotspot" position="7.46625 2.471 -6.72895" look-at="#lookCube" geometry="" material="src: ; shader: flat; transparent: true; alphaTest:  0.1;" scale="5 5 0.001" rotation="-3.211494155565775 -8.652685902755598 0" visible="false">
     <a-entity id="rstHsClose4" geometry="" material="alphaTest: 0.99; opacity: 0; blending: none; depthTest: false; depthWrite: false" scale="0.27 0.2 -429.8" position="0.4 0.42 -0.45" class="clickable"></a-entity>

</a-entity>

<a-entity id="rstHs5" class="sceneHotspot" position="4.63 3.270 -2.24" look-at="#lookCube" geometry="" material="src: ; shader: flat; transparent: true; alphaTest:  0.1;" scale="5 5 0.001" rotation="-3.211494155565775 -8.652685902755598 0" visible="false">
     <a-entity id="rstHsClose5" geometry="" material="alphaTest: 0.99; opacity: 0; blending: none; depthTest: false; depthWrite: false" scale="0.27 0.2 -429.8" position="0.4 0.410 0" class="clickable"></a-entity>

</a-entity>
 

<a-entity id="rstHs8" class="sceneHotspot" position="9.19761 0.41933 2.40241" look-at="#lookCube" geometry="" material="src: ; shader: flat; transparent: true; alphaTest:  0.1;" scale="5 5 0.001" rotation="-3.211494155565775 -8.652685902755598 0" visible="false">
     <a-entity id="rstHsClose8" geometry="" material="alphaTest: 0.99; opacity: 0; blending: none; depthTest: false; depthWrite: false" scale="0.27 0.2 -429.8" position="0.4 0.410 0" class="clickable"></a-entity>
     <a-entity id="rstVideoHotspotBtn2" class="clickable" geometry="" scale="0 0 0" material="opacity: 0; transparent: true; depthTest: false" position="0.09 -0.24 0"></a-entity>

</a-entity>

</a-entity>

</a-entity>

<!-- *********** RST SCENE END *********** -->

 

      <a-entity id="colorHostspot" class="asceneHotspot" look-at="#lookCube" position="-0.551 4.149 0.3043561307331548" geometry="primitive: circle" material="src: #colorIcon; shader: flat; alphaTest:  0.1" scale="0.3 0.3 0.3" rotation="2.1588071879898876 -7.9060610336645425 -2.4865731726051742e-17">
      <a-entity id="colorBtn1" color-up class="clickable sceneHotspotIcon" geometry="" scale="2 2 2" material="opacity: 0; depthTest:  false; transparent: true"></a-entity>
      <a-entity id="colorBtn2" color-down class="clickable sceneHotspotIcon" geometry="" scale="0 0 0" material="opacity: 0; depthTest:  false; transparent: true" visible="false"></a-entity>
      </a-entity>

      

 



<!-- *********** HC SCENE START *********** -->

<a-entity id="hcScene" visible="false">

  <a-entity id="hcLight1" position="0 1 -9.552" light="type: directional; intensity: .1;" visible=""></a-entity>

       <a-entity id="hcLight2" position="0 1 9.552" light="type: directional; intensity: .1;" visible=""></a-entity>

       <a-entity id="hcLight3" position="15.021 1 -9.552" light="type: directional; intensity: .1;" visible=""></a-entity>
 
<a-entity id="hcParts">

 
       </a-entity>

<!-- hot-spots -->

       <a-entity id="hcHotspots" scale="0 0 0" visible="false">

       <a-entity id="hcHotspot1" class="clickable sceneHotspotIcon" hotspots-component="hstarget: #hcHs1; closetarget: #hcHsClose1; assetlocation: assets/hotspots/hc/hs1.png; hsshader: flat; hotspotname: hcHotspot1" position="-7 0.395 2.879" look-at="#lookCube" geometry="primitive: circle" material="src: #hsIcon; shader: flat; side: double" scale="0.25 0.25 0.25" rotation="0 100 0">
      <a-entity id="hcHotspotBtn1" geometry="" scale="4 4 4" material="opacity: 0; transparent: true; depthTest: false"></a-entity>
      </a-entity>

       <a-entity id="hcHotspot2" class="clickable sceneHotspotIcon" hotspots-component="hstarget: #hcHs2; closetarget: #hcHsClose2; assetlocation: assets/hotspots/hc/hs2v3.png; hsshader: flat; hotspotname: hcHotspot2" position="-4.05 -0.098 5.55" look-at="#lookCube" geometry="primitive: circle" material="src: #hsIcon; shader: flat; side: double" scale="0.25 0.25 0.25" rotation="0 100 0">
      <a-entity id="hcHotspotBtn2" geometry="" scale="4 4 4" material="opacity: 0; transparent: true; depthTest: false"></a-entity>
      </a-entity>

      <a-entity id="hcHotspot3" class="clickable sceneHotspotIcon" hotspots-component="hstarget: #hcHs3; closetarget: #hcHsClose3; assetlocation: assets/hotspots/hc/hs3.png; hsshader: flat; hotspotname: hcHotspot3" position="6.05 1.14 -0.83" look-at="#lookCube" geometry="primitive: circle" material="src: #hsIcon; shader: flat; side: double" scale="0.25 0.25 0.25" rotation="0 100 0">
      <a-entity id="hcHotspotBtn3" geometry="" scale="4 4 4" material="opacity: 0; transparent: true; depthTest: false"></a-entity>
      </a-entity>

      <a-entity id="hcHotspot4" class="clickable sceneHotspotIcon" hotspots-component="hstarget: #hcHs4; closetarget: #hcHsClose4; assetlocation: assets/hotspots/hc/hs4v3.png; hsshader: flat; hotspotname: hcHotspot4" position="7.20 -1.11 -6.37" look-at="#lookCube" geometry="primitive: circle" material="src: #hsIcon; shader: flat; side: double" scale="0.25 0.25 0.25" rotation="0 100 0">
      <a-entity id="hcHotspotBtn4" geometry="" scale="4 4 4" material="opacity: 0; transparent: true; depthTest: false"></a-entity>
      </a-entity>




 

<!-- hot-spot-pop-up -->

      <a-entity id="hcHs1" class="sceneHotspot" position="-8.144 2.79 2.221" look-at="#lookCube" geometry="" material="src: ; shader: flat; transparent: true;" scale="8 8 0.001" rotation="-5.835578434948516 -66.6097267385972 0" visible="false">
     <a-entity id="hcHsClose1" geometry="" material="alphaTest: 0.99; opacity: 0; blending: none; depthTest: false; depthWrite: false" scale="0.27 0.2 -429.80" position="0.44 0.25 50" class="clickable"></a-entity>
</a-entity>

<a-entity id="hcHs2" class="sceneHotspot" position="-3.60 0.640 7.113" look-at="#lookCube" geometry="" material="src: ; shader: flat; transparent: true;" scale="8 8 0.001" rotation="-5.835578434948516 -66.6097267385972 0" visible="false">
     <a-entity id="hcHsClose2" geometry="" material="alphaTest: 0.99; opacity: 0; blending: none; depthTest: false; depthWrite: false" scale="0.27 0.2 -429.80" position="0.21 0.22 0" class="clickable"></a-entity>
</a-entity>

<a-entity id="hcHs3" class="sceneHotspot" position="10 3.06 -1" look-at="#lookCube" geometry="" material="src: ; shader: flat; transparent: true;" scale="5 5 0.001" rotation="-5.835578434948516 -66.6097267385972 0" visible="false">
     <a-entity id="hcHsClose3" geometry="" material="alphaTest: 0.99; opacity: 0; blending: none; depthTest: false; depthWrite: false" scale="0.27 0.2 -429.80" position="0.42 0.43 0" class="clickable"></a-entity>
</a-entity>



<a-entity id="hcHs4" class="sceneHotspot" position="6.95 2.55 -5.25" look-at="#lookCube" geometry="" material="src: ; shader: flat; transparent: true;" scale="5 5 0.001" rotation="-5.835578434948516 -66.6097267385972 0" visible="false">
     <a-entity id="hcHsClose4" geometry="" material="alphaTest: 0.99; opacity: 0; blending: none; depthTest: false; depthWrite: false;" scale="0.37 0.26 -429.25" position="0.42 0.44 0" class="clickable"></a-entity>
<a-entity id="tgButton" geometry="" class="clickable" scale="0 0 0" position="0.340 -0.170 0" material="depthTest: false; opacity: 0"></a-entity>

</a-entity>

<a-entity id="hcHs4Over" class="clickable" position="6.95 2.55 -5.25" look-at="#lookCube" geometry="" material="src: assets/hotspots/hc/hs4over_v2.png; shader: flat; transparent: true;" scale="5 5 0.001" rotation="-5.835578434948516 -66.6097267385972 0" visible="false">
    
</a-entity>


<!--
  <a-entity id="hcHs5" class="sceneHotspot" position="0.98 -0.1 -0.350"  geometry="" material="src: ; shader: flat; transparent: true;" scale="1 1 0.00001" rotation="0 106.39 0" visible="false">
     <a-entity id="hcHsClose5" geometry="" material="alphaTest: 0.99; opacity: 0; blending: none; depthTest: false; depthWrite: false" scale="0.27 0.2 -429.80" position="-0.380 0.440 0" class="clickable"></a-entity>
</a-entity>

<a-entity id="hcHs6" class="sceneHotspot" position="-2.88892 0.3751303757089678 1.43875"  geometry="" material="src: ; shader: flat; transparent: true;" scale="2 2 0.00001" rotation="0 117.89 0" visible="false">
     <a-entity id="hcHsClose6" geometry="" material="alphaTest: 0.99; opacity: 0; blending: none; depthTest: false; depthWrite: false" scale="0.27 0.2 -429.80" position="0.44 0.15 0" class="clickable"></a-entity>
</a-entity>

<a-entity id="hcHs7" class="sceneHotspot" position="-3.3871545286512665 0.08206395599443984 0.5298197789514936"  geometry="" material="src: ; shader: flat; transparent: true;" scale="1 1 0.00001" rotation="0 97.89 0" visible="false">
     <a-entity id="hcHsClose7" geometry="" material="alphaTest: 0.99; opacity: 0; blending: none; depthTest: false; depthWrite: false" scale="0.27 0.2 -429.80" position="0.44 0.360 0" class="clickable"></a-entity>
</a-entity>

-->


  </a-entity>


</a-entity>



<!-- *********** TB SCENE START *********** -->

<a-entity id="tbScene" visible="false">



  <a-entity id="tbLight1" position="0 1 -9.552" light="type: directional; intensity: .100;" visible=""></a-entity>

       <a-entity id="tbLight2" position="0 1 9.552" light="type: directional; intensity: .100;" visible=""></a-entity>

       <a-entity id="tbLight3" position="15.021 1 -9.552" light="type: directional; intensity: .100;" visible=""></a-entity>


<!-- hot-spots -->
<a-entity id="tbHotspots" scale="0 0 0" visible="false">
 <a-entity id="tbHotspot1" class="clickable sceneHotspotIcon tbHotspotIcon" hotspots-component="hstarget: #tbHs1; closetarget: #tbHsClose1; assetlocation: assets/hotspots/tb/hs1.png; hsshader: flat; hotspotname: tbHotspot1" position="-7 0.395 2.879" look-at="#lookCube" geometry="primitive: circle" material="src: #hsIcon; shader: flat; side: double" scale="0.25 0.25 0.25" rotation="0 100 0">
      <a-entity id="tbHotspotBtn1" geometry="" scale="4 4 4" material="opacity: 0; transparent: true; depthTest: false"></a-entity>
      </a-entity>

<a-entity id="tbHotspot2" class="clickable sceneHotspotIcon tbHotspotIcon" hotspots-component="hstarget: #tbHs2; closetarget: #tbHsClose2; assetlocation: assets/hotspots/tb/hs2.png; hsshader: flat; hotspotname: tbHotspot2Video" position="-2.4837316444109874 -0.44438429663708945 5.290329286052987" look-at="#lookCube" geometry="primitive: circle" material="src: #hsIcon; shader: flat; side: double" scale="0.25 0.25 0.25" rotation="0 100 0">
      <a-entity id="tbHotspotBtn2" geometry="" scale="4 4 4" material="opacity: 0; transparent: true; depthTest: false"></a-entity>
      </a-entity>

<a-entity id="tbHotspot3" class="clickable sceneHotspotIcon tbHotspotIcon" hotspots-component="hstarget: #tbHs3; closetarget: #tbHsClose3; assetlocation: assets/hotspots/tb/hs3.png; hsshader: flat; hotspotname: tbHotspot3" position="8.719916328763487 0.25367212691156427 -0.2765201813968341" look-at="#lookCube" geometry="primitive: circle" material="src: #hsIcon; shader: flat; side: double" scale="0.25 0.25 0.25" rotation="0 100 0">
      <a-entity id="tbHotspotBtn3" geometry="" scale="4 4 4" material="opacity: 0; transparent: true; depthTest: false"></a-entity>
      </a-entity>

      <a-entity id="tbHotspot4" class="clickable sceneHotspotIcon tbHotspotIcon" hotspots-component="hstarget: #tbHs4; closetarget: #tbHsClose4; assetlocation: assets/hotspots/tb/hs4.png; hsshader: flat; hotspotname: tbHotspot4" position="5.6282938602269 -2.20906 -5.877875110393903" look-at="#lookCube" geometry="primitive: circle" material="src: #hsIcon; shader: flat; side: double" scale="0.25 0.25 0.25" rotation="0 100 0">
      <a-entity id="tbHotspotBtn4" geometry="" scale="4 4 4" material="opacity: 0; transparent: true; depthTest: false"></a-entity>
      </a-entity>

      <a-entity id="tbHotspot5" class="clickable sceneHotspotIcon tbHotspotIcon" hotspots-component="hstarget: #tbHs5; closetarget: #tbHsClose5; assetlocation: assets/hotspots/tb/hs5.png; hsshader: flat; hotspotname: tbHotspot5" position="-6.699505333124941 0.15006588312694502 -1.599645406143098" look-at="#lookCube" geometry="primitive: circle" material="src: #hsIcon; shader: flat; side: double" scale="0.25 0.25 0.25" rotation="0 100 0">
      <a-entity id="tbHotspotBtn5" geometry="" scale="4 4 4" material="opacity: 0; transparent: true; depthTest: false"></a-entity>
      </a-entity>

       <a-entity id="tbHotspot6" class="clickable sceneHotspotIcon tbHotspotIcon" hotspots-component="hstarget: #tbHs6; closetarget: #tbHsClose6; assetlocation: assets/hotspots/tb/hs6.png; hsshader: flat; hotspotname: tbHotspot6" position="8.530127960774513 -0.34494287615507124 -4.241175358863348" look-at="#lookCube" geometry="primitive: circle" material="src: #hsIcon; shader: flat; side: double" scale="0.25 0.25 0.25" rotation="0 100 0">
      <a-entity id="tbHotspotBtn6" geometry="" scale="4 4 4" material="opacity: 0; transparent: true; depthTest: false"></a-entity>
      </a-entity>

<!--
      <a-entity id="tbHotspot7" class="clickable sceneHotspotIcon tbHotspotIcon" hotspots-component="hstarget: #tbHs7; closetarget: #tbHsClose7; assetlocation: assets/hotspots/tb/hs7.png; hsshader: flat" position="1.3876202058646587 -0.3869857094954566 0.4033604497010467" geometry="primitive: circle" material="src: #hsIcon; shader: flat; side: double" scale="0.1 0.1 0.1" rotation="0 100 0">
      <a-entity id="tbHotspotBtn7" geometry="" scale="4 4 4" material="opacity: 0; transparent: true; depthTest: false"></a-entity>
      </a-entity>

-->

<!-- hot-spot-pop-up -->

      <a-entity id="tbHs1" class="sceneHotspot" position="-8.144 2.79 2.221" look-at="#lookCube" geometry="" material="src: ; shader: flat; transparent: true;" scale="8 8 0.001" rotation="-5.835578434948516 -66.6097267385972 0" visible="false">
     <a-entity id="tbHsClose1" geometry="" material="alphaTest: 0.99; opacity: 0; blending: none; depthTest: false; depthWrite: false" scale="0.27 0.2 -429.80" position="0.44 0.25 50" class="clickable"></a-entity>
</a-entity>

<a-entity id="tbHs2" class="sceneHotspot" position="1.03367 1.43952 6.13326" look-at="#lookCube" geometry="" material="src: ; shader: flat; transparent: true;" scale="8 8 0.001" rotation="-5.835578434948516 -66.6097267385972 0" visible="false">
     <a-entity id="tbHsClose2" geometry="" material="alphaTest: 0.99; opacity: 0; blending: none; depthTest: false; depthWrite: false" scale="0.27 0.2 -429.80" position="0.21 0.23 50" class="clickable"></a-entity>
     <a-entity id="tbHsVideoBtn" geometry="" material="alphaTest: 0.99; opacity: 0; blending: none; depthTest: false; depthWrite: false; visible: false" scale="0.41 0.2 -429.8" position="0.09 -0.39 50" class=""></a-entity>
</a-entity>



<a-entity id="tbHs3" class="sceneHotspot" position="10.20874 -0.35 1.89189" look-at="#lookCube" geometry="" material="src: ; shader: flat; transparent: true;" scale="5 5 0.001" rotation="-5.835578434948516 -66.6097267385972 0" visible="false">
     <a-entity id="tbHsClose3" geometry="" material="alphaTest: 0.99; opacity: 0; blending: none; depthTest: false; depthWrite: false" scale="0.27 0.2 -429.80" position="0.44 0.450 50" class="clickable"></a-entity>
</a-entity>

<a-entity id="tbHs4" class="sceneHotspot" position="4.61865 -0.31825 -7.83126" look-at="#lookCube" geometry="" material="src: ; shader: flat; transparent: true;" scale="5 5 0.001" rotation="-5.835578434948516 -66.6097267385972 0" visible="false">
     <a-entity id="tbHsClose4" geometry="" material="alphaTest: 0.99; opacity: 0; blending: none; depthTest: false; depthWrite: false" scale="0.27 0.2 -429.8" position="0.44 0.42 3000" class="clickable"></a-entity>
</a-entity>

<a-entity id="tbHs5" class="sceneHotspot" position="-6.74823 0.59479 -2.46359" look-at="#lookCube" geometry="" material="src: ; shader: flat; transparent: true;" scale="7 7 0.001" rotation="-5.835578434948516 -66.6097267385972 0" visible="false">
     <a-entity id="tbHsClose5" geometry="" material="alphaTest: 0.99; opacity: 0; blending: none; depthTest: false; depthWrite: false" scale="0.13 0.11 -429.8" position="0.22 0.21 50" class="clickable"></a-entity>
</a-entity>



<a-entity id="tbHs6" class="sceneHotspot" position="7.89714 2.59375 -2.59604" look-at="#lookCube" geometry="" material="src: ; shader: flat; transparent: true;" scale="5 5 0.001" rotation="-5.835578434948516 -66.6097267385972 0" visible="false">
     <a-entity id="tbHsClose6" geometry="" material="alphaTest: 0.99; opacity: 0; blending: none; depthTest: false; depthWrite: false" scale="0.27 0.2 -429.8" position="0.44 0.4 0" class="clickable"></a-entity>
</a-entity>



<!--
<a-entity id="plug" class="" position="6.3963 0.90575 -4.54224" look-at="#lookCube" geometry="" material="src: assets/hotspots/tb/plug.png; shader: flat; transparent: true" scale="2 2 0.001" rotation="0.46906191277845116 117.68388381721364 -7.454674845566144e-17" visible="false">
</a-entity>
-->


<a-entity id="tbHs7" class="sceneHotspot" position="1.2722446831882108 -0.02159878448898279 -0.1309481642419285" geometry="" material="src: ; shader: flat; transparent: true;" scale="2 2 0.001" rotation="-5.836 -75.91 0" visible="false">
     <a-entity id="tbHsClose7" geometry="" material="alphaTest: 0.99; opacity: 0; blending: none; depthTest: false; depthWrite: false" scale="0.27 0.2 -429.80" position="0.24 0.2 50"  class="clickable"></a-entity>
</a-entity>

 

</a-entity>

  </a-entity>

 <a-entity id="sensor"  visible="false">
<a-entity id="sensor1" visible="true" animation-mixer="clip: *; loop: repeat; timeScale:1; clampWhenFinished: false;"  position="-16.8587 -4.52228 7.00981" rotation="-90.00021045914971 -70.68 0" scale="7 7 0.06" gltf-model="assets/sensorv2/scene.gltf" shadow="cast: true; receive: true;" visible="true">
      </a-entity>

      <a-entity id="sensor2" visible="true" animation-mixer="clip: *; loop: repeat; timeScale:1; clampWhenFinished: false;"  position="17.4267 -4.52228 -6.05824" rotation="-89.99963750135457 104.63994 0" scale="7 7 0.06" gltf-model="assets/sensorv2/scene.gltf" shadow="cast: true; receive: true;" visible="true">
      </a-entity>
 
</a-entity>





 <a-entity id="lookCube" geometry="" static-body="shape: box" position="0 0 0" scale="0 0 0"></a-entity>
 


 <a-entity id="tbEnv"  position="0 0 0" rotation="0 0 0" scale="1 1 1" gltf-model="tbenv/scene.gltf" visible="true"></a-entity>

 <a-entity id="rstEnv"  position="0 0 0" rotation="0 0 0" scale="1 1 1" gltf-model="rstenv/scene.gltf" visible="false"></a-entity>

<a-entity id="hcEnv"  position="0 0 0" rotation="0 0 0" scale="1 1 1" gltf-model="hcenv/scene.gltf" visible="false"></a-entity>


    </a-scene>
<div id="rstVideoContainer" class="sceneHotspotIcon">

  <audio id="rstSound" src="audio/Trail_mixdown.mp3" type="audio/mpeg" loop autoplay>
 </audio>
  
    <video id="rstVideo" playsinline src="" controls> 
    </video>
    <img src="assets/close.png" id="rstVideoClose" poster="assets/videoload.png">
    
  </div>
<img src="assets/trimselect/logo.png" id="chevyLogo">

<div id="trimContainer" class="sceneHotspotIcon">
  <div id="trimSLider" onmouseover="slideIn()" onmouseleave="slideOut()">
<img src="assets/trimselect/tb1.png" id="tbSelectImg1">
<img src="assets/trimselect/tb2.png" id="tbSelectImg2">
<img src="assets/trimselect/rt1.png" id="rtSelectImg1">
<img src="assets/trimselect/rt2.png" id="rtSelectImg2">
<img src="assets/trimselect/hc1.png" id="hcSelectImg1">
<img src="assets/trimselect/hc2.png" id="hcSelectImg2">
<img src="assets/trimselect/ctaover1.png" id="ctaOver">
  <div id="tbTrimBtn"></div> 
<div id="rtTrimBtn"></div>
<div id="hcTrimBtn"></div>
<div id="trimCta" onclick="trimCtaClick()" ></div>
</div>
</div>

<div id="soundContainer" class="destopSoundClass">
  <img src="assets/soundui/sound.png" id="soundImg">
<img src="assets/soundui/share.png" id="shareImg" onclick="socialClick()">
<div id="soundBtn" onclick="soundClick()"> </div>
</div>
<img src="assets/disclaimer/disclaimer.png" id="disc">
<div id="mDisclaimerContainer" ontouchstart="mDisclaimerCLose()">
<img src="assets/disclaimer/mdisclaimer.png" id="mDisc">
</div>
<img src="assets/disclaimer/info.png" id="infoBtn" onmouseover="disclaimerOver()" onmouseout="disclaimerOut()">
<img src="assets/xrcta.png" id="cta1" onclick="cta1Click()" onmouseover="ctaHover()" onmouseout="ctaOff()">

<div id="mobileUi">
<img src="mobileui/mlogo.png" id="mLogo">
<div id="mTrimContainer">
  <img src="mobileui/tb.png" id="mTb">
  <img src="mobileui/rst.png" id="mRst">
  <img src="mobileui/hc.png" id="mHc">
  <div id="mTrimBtnCon">
    <div id="mTbBtn"></div>
    <div id="mRstBtn"></div>
    <div id="mHcBtn"></div>
  </div>

</div>
<div id="mTrimTextContainer" onclick="trimCtaClick()">
  <img src="mobileui/tbtext.png" id="mTbText" onclick="tbClick()">
  <img src="mobileui/rsttext.png" id="mRstText" onclick="rtClick()">
  <img src="mobileui/tbtext.png" id="mHcText" onclick="hcClick()">
</div>
<div id="mColors">
<img src="mobileui/1.png" id="mC1">
<img src="mobileui/2.png" id="mC2">
<img src="mobileui/3.png" id="mC3">
<img src="mobileui/4.png" id="mC4">
<img src="mobileui/5.png" id="mC5">
<img src="mobileui/6.png" id="mC6">
<img src="mobileui/7.png" id="mC7">
<img src="mobileui/8.png" id="mC8">
<img src="mobileui/9.png" id="mC9">
<img src="mobileui/10.png" id="mC10">
<img src="mobileui/11.png" id="mC11">
<div id="swatchContainer">
<div id="m1" onclick="colorClick(this)" data-color1="color9" data-color2="mC1" data-color3="Red Hot"></div>
<div id="m2" onclick="colorClick(this)" data-color1="color10" data-color2="mC2" data-color3="Havana Brown Metallic"></div>
<div id="m3" onclick="colorClick(this)" data-color1="color7" data-color2="mC3" data-color3="Satin Steel Metallic"></div>
<div id="m4" onclick="colorClick(this)" data-color1="color6" data-color2="mC4" data-color3="Silver Ice Metallic"></div>
<div id="m5" onclick="colorClick(this)" data-color1="color3" data-color2="mC5" data-color3="Black"></div>
<div id="m6" onclick="colorClick(this)" data-color1="color1" data-color2="mC6" data-color3="Northsky Blue Metallic"></div>
<div id="m7" onclick="colorClick(this)" data-color1="color5" data-color2="mC7" data-color3="Summit White"></div>
<div id="m8" onclick="colorClick(this)" data-color1="color4" data-color2="mC8" data-color3="Oakwood Metallic"></div>
<div id="m9" onclick="colorClick(this)" data-color1="color8" data-color2="mC9" data-color3="Shadow Gray Metallic"></div>
<div id="m10" onclick="colorClick(this)" data-color1="color2" data-color2="mC10" data-color3="Cajun Red Tintcoat<sup>3</sup>"></div>
<div id="m11" onclick="colorClick(this)" data-color1="color11" data-color2="mC11" data-color3="Iridescent Pearl Metallic<sup>3</sup>"></div>
</div>
  </div>
  <img src="mobileui/mbtn.png" id="menuBtn" onclick="menuClick()">
  </div>


<div id="desktopColorizer" onmouseover="slideIn2()" onmouseleave="slideOut2()">

  <div id="desktopSwatchContainer">
<div id="dm1" onclick="colorClick(this)"  data-color1="color9" data-color2="mC1" data-color3="Red Hot"></div>
<div id="dm2" onclick="colorClick(this)" data-color1="color10" data-color2="mC2" data-color3="Havana Brown Metallic"></div>
<div id="dm3" onclick="colorClick(this)" data-color1="color7" data-color2="mC3" data-color3="Satin Steel Metallic"></div>
<div id="dm4" onclick="colorClick(this)" data-color1="color6" data-color2="mC4" data-color3="Silver Ice Metallic"></div>
<div id="dm5" onclick="colorClick(this)" data-color1="color3" data-color2="mC5" data-color3="Black"></div>
<div id="dm6" onclick="colorClick(this)" data-color1="color1" data-color2="mC6" data-color3="Northsky Blue Metallic"></div>
<div id="dm7" onclick="colorClick(this)" data-color1="color5" data-color2="mC7" data-color3="Summit White"></div>
<div id="dm8" onclick="colorClick(this)" data-color1="color4" data-color2="mC8" data-color3="Oakwood Metallic"></div>
<div id="dm9" onclick="colorClick(this)" data-color1="color8" data-color2="mC9" data-color3="Shadow Gray Metallic"></div>
<div id="dm10" onclick="colorClick(this)" data-color1="color2" data-color2="mC10" data-color3="Cajun Red Tintcoat<sup>3</sup>"></div>
<div id="dm11" onclick="colorClick(this)" data-color1="color11" data-color2="mC11" data-color3="Iridescent Pearl Metallic<sup>3</sup>"></div>
</div>

<div id="dColors">Cajun Red Tintcoat<sup>3</sup></div>
<img src="mobileui/colortab.png" id="colorTab" onclick="menuClick()">

</div>

  <img src="mobileui/mcta.png" id="mCta" onclick="cta1Click()">

  <div id="rotateDevice" class="rotateDevice1"> 
<img src="assets/rotate.png" id="rotateImg" onclick="cta1Click()">
  </div>

<div id="shareContainer">
<!-- Sharingbutton Facebook -->
<a onclick="facebookCLick()" class="resp-sharing-button__link" href="https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fd1vlj71acq3rf7.cloudfront.net%2Findex.html" target="_blank" rel="noopener" aria-label="Share on Facebook">
  <div class="resp-sharing-button resp-sharing-button--facebook resp-sharing-button--large"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
    </div>Facebook It</div>
</a>

<!-- Sharingbutton Twitter -->
<a onclick="twitterClick()" class="resp-sharing-button__link" href="https://twitter.com/intent/tweet/?text=Choose%20your%20truck.%20Choose%20your%20story.%20A%20whole%20new%20way%20to%20experience%20the%20all-new%20Silverado.%20Check%20it%20out%20now%20in%203D.&amp;url=https%3A%2F%2Fd1vlj71acq3rf7.cloudfront.net%2Findex.html" target="_blank" rel="noopener" aria-label="Share on Twitter">
  <div class="resp-sharing-button resp-sharing-button--twitter resp-sharing-button--large"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"/></svg>
    </div>Tweet It</div>
</a>

<!-- Sharingbutton E-Mail -->
<a onclick="emailClick()" class="resp-sharing-button__link" href="mailto:?subject=Choose%20your%20truck.%20Choose%20your%20story.%20A%20whole%20new%20way%20to%20experience%20the%20all-new%20Silverado.%20Check%20it%20out%20now%20in%203D.&amp;body=https%3A%2F%2Fd1vlj71acq3rf7.cloudfront.net%2Findex.html" target="_self" rel="noopener" aria-label="Share by E-Mail">
  <div class="resp-sharing-button resp-sharing-button--email resp-sharing-button--large"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 4H2C.9 4 0 4.9 0 6v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7.25 14.43l-3.5 2c-.08.05-.17.07-.25.07-.17 0-.34-.1-.43-.25-.14-.24-.06-.55.18-.68l3.5-2c.24-.14.55-.06.68.18.14.24.06.55-.18.68zm4.75.07c-.1 0-.2-.03-.27-.08l-8.5-5.5c-.23-.15-.3-.46-.15-.7.15-.22.46-.3.7-.14L12 13.4l8.23-5.32c.23-.15.54-.08.7.15.14.23.07.54-.16.7l-8.5 5.5c-.08.04-.17.07-.27.07zm8.93 1.75c-.1.16-.26.25-.43.25-.08 0-.17-.02-.25-.07l-3.5-2c-.24-.13-.32-.44-.18-.68s.44-.32.68-.18l3.5 2c.24.13.32.44.18.68z"/></svg></div>Email It</div>
</a>




<img src="assets/close.png" id="socialClose" onclick="socialClose()">
</div>

 <script>
  isIE();

 function isIE() {
  ua = navigator.userAgent;
  /* MSIE used to detect old browsers and Trident used to newer ones*/
  var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
  
  return is_ie; 
}
/* Create an alert to show if the browser is IE or not */
if (isIE()){
   document.getElementById("loaderImg").src = "assets/ie.png"
   document.getElementById("loaderImg").style.opacity = 1;
   document.getElementById("loaderImg").style.left = "25%";
 } 
</script>
  

  </body>


</html>