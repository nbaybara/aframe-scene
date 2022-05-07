

AFRAME.registerComponent('scene-init-code', {

  init: function () {
    sceneReady = false;

    mainScene.addEventListener('loaded', function (e) {
      mainScene.object3D.traverse((o) => {
        if (o.isMesh && o.material.map) {
          o.material.map.encoding = THREE.sRGBEncoding;
          o.material.needsUpdate = true;
        }
      });
      sceneReady = true;
      setScene();
    });
  },
});

window.addEventListener("resize", resizeUi);
function setScene() {

  if (sceneReady == true) {
    maincamera.setAttribute('orbit-controls', 'autoRotate: false; autoRotateSpeed: 0.1; enableKeys: false; enablePan: false; minAzimuthAngle:  5;  maxAzimuthAngle:  5;  maxDistance:  23;  maxPolarAngle:  95;  minDistance:  15;  minPolarAngle:  65;  minZoom:  10; screenSpacePanning: false; target: 5 4 1');
  }
}


(function (w, d, s, l, i) {
  w[l] = w[l] || []; w[l].push({
    'gtm.start':
      new Date().getTime(), event: 'gtm.js'
  }); var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
      'https://www.googletagmanager.com/gtm.js?id=' + i + dl + '&gtm_auth=cLb1PXjI_x7Ib4L3HKvsBA&gtm_preview=env-5&gtm_cookies_win=x'; f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-WP6CMGP');
AFRAME.registerComponent('follow-cam', {
  tick: function () {
    wpVector = new THREE.Vector3();
    quaternion1 = new THREE.Quaternion();
    convert1 = new THREE.Vector3(0, -70, 0);

    lookCube.object3D.setRotationFromQuaternion(maincamera.getObject3D('camera').getWorldQuaternion(quaternion1));
    maincamera.getObject3D('camera').getWorldQuaternion(quaternion1);
    lookCube.setAttribute('position', maincamera.getObject3D('camera').getWorldPosition(wpVector));
  }
});

AFRAME.registerComponent('hotspots-component', {
  schema: {
    hstarget: { default: '' },
    hsshader: { default: '' },
    closetarget: { default: '' },
    beddown: { default: '' },
    assetlocation: { default: '' },
    hotspotname: { default: '' }
  },

  init: function () {

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
    const alldemoHotspotsIcon = this.el.sceneEl.querySelectorAll('.hotspotIcon');
    this.el.addEventListener('mousedown', function () {

      dataLayer.push({
        event: "analytics",
        category: "Secondary",
        action: "HotSpot",
        label: hotspotName
      });

      for (var i = 0; i < allHotspots.length; i++) {
        allHotspots[i].setAttribute("material", "src:");

      }

      for (var i = 0; i < allHotspots.length; i++) {
        allHotspots[i].setAttribute("visible", false);
        allHotspotsIcon[i].setAttribute("visible", true);
      }
      for (var i = 0; i < alldemoHotspotsIcon.length; i++) {
        alldemoHotspotsIcon[i].setAttribute("visible", true);
      }
      newTarget.setAttribute("material", "src:" + assetLocation + ";" + "shader:" + hsShader + "; transparent: true;");
      newTarget.addEventListener('materialtextureloaded', openHotSpot);

      function openHotSpot() {
        currenyHs.setAttribute("visible", false);
        newTarget.setAttribute("visible", true);
      }

    });

    newCloseTarget.addEventListener('mousedown', function () {
      currenyHs.setAttribute("visible", true);
      newTarget.setAttribute("visible", false);
      newTarget.setAttribute("material", "src:");
    });

  }
});


//we can call it like that, but there is a reason
//on click this method calling twice
function changeOptions(e) {
  e.stopPropagation();
  e.preventDefault();

  let firstmodal = document.getElementById("firstmodal");
  let secondmodal = document.getElementById("secondmodal");

  let firtmodalVisibility = firstmodal.getAttribute("visible") == true ? "true" : "false";
  let secondmodalVisibility = secondmodal.getAttribute("visible") == true ? "true" : "false";

  firstmodal.setAttribute("visible", firtmodalVisibility);
  secondmodal.setAttribute("visible", secondmodalVisibility);
}


function toFirst(e) {

  let option1Image = document.getElementById("optionfirstprice");
  console.log("1", option1Image);

  option1Image.setAttribute("visible", true);
  console.log("after1", option1Image);

  let option2Image = document.getElementById("optionsecondprice");
  option2Image.setAttribute("visible", false);

  let secondmodal = document.getElementById("secondmodal");
  secondmodal.setAttribute("visible", false);

  let firstmodal = document.getElementById("firstmodal");
  firstmodal.setAttribute("visible", true);
}

function toSecond(e) {

  let secondmodal = document.getElementById("secondmodal");
  secondmodal.setAttribute("visible", true);

  let firstmodal = document.getElementById("firstmodal");
  firstmodal.setAttribute("visible", false);

  let option1Image = document.getElementById("optionfirstprice");
  console.log("1", option1Image);
  option1Image.setAttribute("visible", false);
  console.log("after1", option1Image);


  let option2Image = document.getElementById("optionsecondprice");
  option2Image.setAttribute("visible", true);

}
function scene1() {

  let ascene1 = document.getElementById('scene1');
  ascene1.setAttribute('visible', true)

  let ascene2 = document.getElementById('scene2')
  ascene2.setAttribute("isactive", false);
  ascene2.setAttribute('visible', false)

  document.querySelector("#video").pause();

  let infotext = document.querySelector('.infotext')
  infotext.style.opacity = "0.6";

  let infotextvideo = document.querySelector('.infotextvideo')
  infotextvideo.style.opacity = "0";
}

function scene2() {

  let ascene1 = document.getElementById('scene1');
  ascene1.setAttribute('visible', false)

  let ascene2 = document.getElementById('scene2')
  ascene2.setAttribute("isactive", true);
  ascene2.setAttribute('visible', true);

  document.querySelector("#video").play();

  let infotextvideo = document.querySelector('.infotextvideo')
  infotextvideo.style.opacity = "0.6";

  let infotext = document.querySelector('.infotext')
  infotext.style.opacity = "0";
}

AFRAME.registerComponent('play-on-click', {
  init: function () {
    this.onClick = this.onClick.bind(this);
  },

  play: function () {
    let videoscene = document.getElementById("scene2")
    videoscene.addEventListener('click', this.onClick);
  },

  pause: function () {
    let videoscene = document.getElementById("scene2")
    videoscene.removeEventListener('click', this.onClick);
  },

  onClick: function (evt) {

    let scene2 = document.getElementById('scene2')
    let isActive = scene2.getAttribute("isactive");

    if (isActive == "false")
      return;
    var videoEl = this.el.getAttribute('material').src; if (!videoEl) { return; }
    this.el.object3D.visible = true; videoEl.play();
  }
});

AFRAME.registerComponent('hide-on-play',
  {
    schema: { type: 'selector' },
    init: function () {
      this.onPlaying = this.onPlaying.bind(this); this.onPause = this.onPause.bind(this);
      this.el.object3D.visible = !this.data.playing;
    },
    play: function () {
      if (this.data) {
        this.data.addEventListener('playing', this.onPlaying);
        this.data.addEventListener('pause', this.onPause);
      }
    },
    pause: function () {
      if (this.data) {
        this.data.removeEventListener('playing', this.onPlaying);
        this.data.removeEventListener('pause', this.onPause);
      }
    }, onPlaying: function (evt) { this.el.object3D.visible = false; },
    onPause: function (evt) { this.el.object3D.visible = true; }
  });