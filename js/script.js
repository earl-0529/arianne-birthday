/* ============================================
   BIRTHDAY WEBSITE
   SCENE CONTROLLER
============================================ */


/* ============================================
   VARIABLES
============================================ */

const scenes =
    document.querySelectorAll(".scene");

const navDots =
    document.querySelectorAll(".nav-dot");

const nextButtons =
    document.querySelectorAll("[data-next]");

const currentScene =
    document.getElementById("currentScene");


let currentSceneNumber = 1;

let isTransitioning = false;


/* ============================================
   SHOW SCENE
============================================ */

function showScene(sceneNumber) {

    if (
        sceneNumber === currentSceneNumber ||
        isTransitioning
    ) {
        return;
    }


    const targetScene =
        document.getElementById(
            `scene-${sceneNumber}`
        );


    if (!targetScene) {
        return;
    }


    isTransitioning = true;


    /* Remove active class */

    scenes.forEach((scene) => {

        scene.classList.remove("active");

    });


    /* Activate new scene */

    targetScene.classList.add("active");


    /* Update navigation */

    navDots.forEach((dot, index) => {

        dot.classList.toggle(
            "active",
            index + 1 === sceneNumber
        );

    });


    /* Update counter */

    currentScene.textContent =
        String(sceneNumber).padStart(2, "0");


    currentSceneNumber =
        sceneNumber;


    /* Allow another transition */

    setTimeout(() => {

        isTransitioning = false;

    }, 800);

}


/* ============================================
   NEXT BUTTONS
============================================ */

nextButtons.forEach((button) => {

    button.addEventListener(
        "click",
        () => {

            const nextScene =
                Number(
                    button.dataset.next
                );


            createHeartBurst();


            setTimeout(() => {

                showScene(nextScene);

            }, 250);

        }
    );

});


/* ============================================
   NAVIGATION DOTS
============================================ */

navDots.forEach((dot) => {

    dot.addEventListener(
        "click",
        () => {

            const sceneNumber =
                Number(
                    dot.dataset.sceneButton
                );


            showScene(sceneNumber);

        }
    );

});


/* ============================================
   KEYBOARD NAVIGATION
============================================ */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "ArrowDown" ||
            event.key === "ArrowRight"
        ) {

            if (
                currentSceneNumber < scenes.length
            ) {

                showScene(
                    currentSceneNumber + 1
                );

            }

        }


        if (
            event.key === "ArrowUp" ||
            event.key === "ArrowLeft"
        ) {

            if (
                currentSceneNumber > 1
            ) {

                showScene(
                    currentSceneNumber - 1
                );

            }

        }

    }
);






/* ============================================
   HEART BURST
============================================ */

function createHeartBurst() {

    const hearts = [
        "♥",
        "♡",
        "♥",
        "♡",
        "♥",
        "♡",
        "♥",
        "♡",
        "♥",
        "♡"
    ];


    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;


    hearts.forEach((heart, index) => {

        const element =
            document.createElement("span");


        element.className =
            "burst-heart";


        element.textContent =
            heart;


        const angle =
            (Math.PI * 2 / hearts.length)
            * index;


        const distance =
            100 + Math.random() * 100;


        const x =
            Math.cos(angle) * distance;


        const y =
            Math.sin(angle) * distance;


        element.style.left =
            `${centerX}px`;


        element.style.top =
            `${centerY}px`;


        element.style.setProperty(
            "--burst-x",
            `${x}px`
        );


        element.style.setProperty(
            "--burst-y",
            `${y}px`
        );


        element.style.setProperty(
            "--heart-delay",
            `${index * 0.04}s`
        );


        document.body.appendChild(
            element
        );


        setTimeout(() => {

            element.remove();

        }, 1500);

    });

}
/* ============================================
   BIRTHDAY LETTER
============================================ */

const letterButton =
    document.getElementById("letterButton");

const letterWrapper =
    document.querySelector(".letter-wrapper");

const letterContent =
    document.getElementById("letterContent");

    const closeLetterButton =
    document.getElementById("closeLetterButton");

if (
    letterButton &&
    letterWrapper &&
    letterContent
) {

    letterButton.addEventListener("click", () => {

/* ============================================
   CLOSE LETTER BUTTON
============================================ */

if (closeLetterButton) {

    closeLetterButton.addEventListener("click", (event) => {

        /* Prevent the envelope button from being triggered */
        event.stopPropagation();

        /* Start closing animation */
        letterWrapper.classList.add("closing");

        /* Hide the letter */
        letterWrapper.classList.remove(
            "letter-visible"
        );

        /* Wait for the letter to slide away */
        setTimeout(() => {

            letterWrapper.classList.remove(
                "open"
            );

        }, 650);

        /* Finish the envelope closing */
        setTimeout(() => {

            letterWrapper.classList.remove(
                "closing"
            );

            letterWrapper.classList.remove(
                "opening"
            );

        }, 900);

    });

}

        /* ================================
           CLOSE LETTER
        ================================= */

        if (letterWrapper.classList.contains("open")) {

    /* Start closing animation */
    letterWrapper.classList.add("closing");

    /* Hide the letter first */
    letterWrapper.classList.remove(
        "letter-visible"
    );

    /* Wait for the letter to go back */
    setTimeout(() => {

        letterWrapper.classList.remove(
            "open"
        );

    }, 650);

    /* Finish closing */
    setTimeout(() => {

        letterWrapper.classList.remove(
            "closing"
        );

        letterWrapper.classList.remove(
            "opening"
        );

    }, 900);

    return;
}


        /* ================================
           OPEN LETTER
        ================================= */

        createHeartBurst();

        letterWrapper.classList.add(
            "opening"
        );

        /* Open envelope flap */
        setTimeout(() => {

            letterWrapper.classList.add(
                "open"
            );

        }, 700);

        /* Reveal letter */
        setTimeout(() => {

            letterWrapper.classList.add(
                "letter-visible"
            );

        }, 1500);

    });

}
/* ============================================
   SCENE 6 — INTERACTIVE GIFT
============================================ */

const giftBox =
    document.getElementById("giftBox");

const giftArea =
    document.querySelector(".gift-area");

const giftNext =
    document.getElementById("giftNext");

if (
    giftBox &&
    giftArea
) {

    giftBox.addEventListener("click", () => {

        /* Prevent clicking again after opening */
        if (giftArea.classList.contains("open")) {
            return;
        }

        /* Open the gift */
        giftArea.classList.add("open");

        /* Heart burst */
        createHeartBurst();

    });

}
/* ============================================
   SCENE 7 — BIRTHDAY CAKE
============================================ */

const birthdayCake = document.getElementById("birthdayCake");
const cakeArea = document.getElementById("cakeArea");
const cakeMessage = document.getElementById("cakeMessage");
const cakeNext = document.getElementById("cakeNext");

if (birthdayCake && cakeArea) {

    birthdayCake.addEventListener("click", () => {

        if (cakeArea.classList.contains("blown")) {
            return;
        }

        cakeArea.classList.add("blown");

        setTimeout(() => {

            createHeartBurst();

            createConfetti();

        }, 1900);

        setTimeout(() => {

            if (cakeMessage) {
                cakeMessage.classList.add("show");
            }

            if (cakeNext) {
                cakeNext.classList.add("show");
            }

        }, 2600);

    });

}
/* =========================================================
   SCENE 8 — FINAL SURPRISE
   ========================================================= */

const finalRevealButton =
    document.getElementById("finalRevealButton");

const finalSurprise =
    document.getElementById("finalSurprise");

const finalEnding =
    document.getElementById("finalEnding");


if (finalRevealButton && finalSurprise) {

    finalRevealButton.addEventListener("click", () => {

    if (finalSurprise.classList.contains("show")) {
        return;
    }

    createHeartBurst();

    createConfetti();

    finalRevealButton.classList.add("hide");

    setTimeout(() => {

        finalSurprise.classList.add("show");

    }, 450);

    setTimeout(() => {

        if (finalEnding) {
            finalEnding.classList.add("show");
        }

        createHeartBurst();

    }, 1200);

});

}
/* =========================================================
   BACKGROUND MUSIC
   ========================================================= */

const musicButton =
    document.getElementById("musicButton");

const birthdayMusic =
    document.getElementById("birthdayMusic");

const musicIcon =
    document.getElementById("musicIcon");


let musicPlaying = false;


if (musicButton && birthdayMusic) {

    musicButton.addEventListener("click", () => {

        if (!musicPlaying) {

            birthdayMusic.play()
                .then(() => {

                    musicPlaying = true;

                    musicButton.classList.add("playing");

                    musicIcon.textContent = "♫";

                    musicButton.setAttribute(
                        "aria-label",
                        "Pause music"
                    );

                    musicButton.setAttribute(
                        "title",
                        "Pause music"
                    );

                })
                .catch(() => {

                    console.log(
                        "Music could not be played."
                    );

                });

        } else {

            birthdayMusic.pause();

            musicPlaying = false;

            musicButton.classList.remove("playing");

            musicIcon.textContent = "♫";

            musicButton.setAttribute(
                "aria-label",
                "Play music"
            );

            musicButton.setAttribute(
                "title",
                "Play music"
            );

        }

    });

}
/* =========================================================
   CONFETTI
   ========================================================= */

function createConfetti() {

    const pieces = [
        "♥",
        "♡",
        "✦",
        "✧",
        "•"
    ];

    const amount = 55;

    for (let i = 0; i < amount; i++) {

        const confetti =
            document.createElement("span");

        confetti.className =
            "confetti-piece";

        confetti.textContent =
            pieces[Math.floor(
                Math.random() * pieces.length
            )];

        const startX =
            Math.random() * window.innerWidth;

        const fallDistance =
            window.innerHeight +
            100 +
            Math.random() * 200;

        const horizontalMovement =
            (Math.random() - 0.5) * 300;

        const rotation =
            Math.random() * 720 - 360;

        const size =
            10 + Math.random() * 14;

        const duration =
            2.5 + Math.random() * 2;

        const delay =
            Math.random() * 0.5;

        confetti.style.left =
            `${startX}px`;

        confetti.style.setProperty(
            "--confetti-x",
            `${horizontalMovement}px`
        );

        confetti.style.setProperty(
            "--confetti-y",
            `${fallDistance}px`
        );

        confetti.style.setProperty(
            "--confetti-rotate",
            `${rotation}deg`
        );

        confetti.style.setProperty(
            "--confetti-size",
            `${size}px`
        );

        confetti.style.setProperty(
            "--confetti-duration",
            `${duration}s`
        );

        confetti.style.setProperty(
            "--confetti-delay",
            `${delay}s`
        );

        document.body.appendChild(confetti);

        setTimeout(() => {

            confetti.remove();

        }, (duration + delay) * 1000 + 500);

    }

}
/* =========================================================
   FUNNY VIDEO GIFT
   ========================================================= */

const videoGift =
    document.getElementById("videoGift");

const videoModal =
    document.getElementById("videoModal");

const videoClose =
    document.getElementById("videoClose");

const videoModalBackdrop =
    document.getElementById("videoModalBackdrop");

const birthdayVideo =
    document.getElementById("birthdayVideo");


function openVideoModal() {

    if (!videoModal) return;

    videoModal.classList.add("show");
    videoModal.setAttribute("aria-hidden", "false");

    createHeartBurst();

    if (birthdayVideo) {
        birthdayVideo.currentTime = 0;

        birthdayVideo.play().catch(() => {
            // Browser may require the visitor to press play.
        });
    }
}


function closeVideoModal() {

    if (!videoModal) return;

    videoModal.classList.remove("show");
    videoModal.setAttribute("aria-hidden", "true");

    if (birthdayVideo) {
        birthdayVideo.pause();
        birthdayVideo.currentTime = 0;
    }
}


if (videoGift) {
    videoGift.addEventListener("click", openVideoModal);
}


if (videoClose) {
    videoClose.addEventListener("click", closeVideoModal);
}


if (videoModalBackdrop) {
    videoModalBackdrop.addEventListener(
        "click",
        closeVideoModal
    );
}


document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        videoModal &&
        videoModal.classList.contains("show")
    ) {
        closeVideoModal();
    }

});
/* =========================================
   FOUR-PHOTO BIRTHDAY PHOTOBOOTH
   REAL FACE FILTER VERSION
========================================= */

import {
    FaceLandmarker,
    FilesetResolver
} from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.21/vision_bundle.mjs";


/* =========================================
   ELEMENTS
========================================= */

const photoboothButton =
    document.getElementById("photoboothButton");

const photoboothModal =
    document.getElementById("photoboothModal");

const photoboothClose =
    document.getElementById("photoboothClose");

const photoboothBackdrop =
    document.getElementById("photoboothBackdrop");

const cameraVideo =
    document.getElementById("cameraVideo");

const cameraCountdown =
    document.getElementById("cameraCountdown");

const cameraStickerLayer =
    document.getElementById("cameraStickerLayer");

const faceSticker =
    document.getElementById("faceSticker");

const takePhotoButton =
    document.getElementById("takePhotoButton");

const photoProgress =
    document.getElementById("photoProgress");

const filterButtons =
    document.querySelectorAll(".filter-button");

const photoboothCameraScreen =
    document.getElementById("photoboothCameraScreen");

const photoboothResultScreen =
    document.getElementById("photoboothResultScreen");

const photoStripCanvas =
    document.getElementById("photoStripCanvas");

const retakeButton =
    document.getElementById("retakeButton");

const downloadPhotoButton =
    document.getElementById("downloadPhotoButton");


/* =========================================
   VARIABLES
========================================= */

let cameraStream = null;

let faceLandmarker = null;

let faceTrackingActive = false;

let lastFaceLandmarks = null;

let selectedSticker = "birthday";

let capturedPhotos = [];

let isTakingPhoto = false;

let animationFrameId = null;


/* =========================================
   FILTER DATA
========================================= */

const stickerData = {

    birthday: {
        type: "birthday"
    },

    crown: {
        type: "crown"
    },

    bunny: {
        type: "bunny"
    },

    glasses: {
        type: "glasses"
    },

    hearts: {
        type: "hearts"
    }

};


/* =========================================
   INITIALIZE FACE LANDMARKER
========================================= */

async function initializeFaceLandmarker() {

    try {

        const vision =
            await FilesetResolver.forVisionTasks(
                "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.21/wasm"
            );

        faceLandmarker =
            await FaceLandmarker.createFromOptions(
                vision,
                {
                    baseOptions: {
                        modelAssetPath:
                            "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task",
                        delegate: "GPU"
                    },

                    runningMode: "VIDEO",

                    numFaces: 1,

                    minFaceDetectionConfidence: 0.5,

                    minFacePresenceConfidence: 0.5,

                    minTrackingConfidence: 0.5
                }
            );

        console.log("Face tracking ready.");

    } catch (error) {

        console.error(
            "Could not initialize face tracking:",
            error
        );

    }

}


/* =========================================
   OPEN PHOTOBOOTH
========================================= */

async function openPhotobooth() {

    if (!photoboothModal) return;

    photoboothModal.classList.add("show");

    photoboothModal.setAttribute(
        "aria-hidden",
        "false"
    );

    resetPhotobooth();

    try {

        cameraStream =
            await navigator.mediaDevices.getUserMedia({

                video: {
                    facingMode: "user",
                    width: {
                        ideal: 1280
                    },
                    height: {
                        ideal: 960
                    }
                },

                audio: false

            });

        cameraVideo.srcObject = cameraStream;

        await cameraVideo.play();

        startFaceTracking();

    } catch (error) {

        console.error(
            "Camera could not be opened:",
            error
        );

        alert(
            "Please allow camera access to use the birthday photobooth."
        );

    }

}


/* =========================================
   CLOSE PHOTOBOOTH
========================================= */

function closePhotobooth() {

    if (!photoboothModal) return;

    photoboothModal.classList.remove("show");

    photoboothModal.setAttribute(
        "aria-hidden",
        "true"
    );

    stopFaceTracking();

    if (cameraStream) {

        cameraStream
            .getTracks()
            .forEach(track => track.stop());

        cameraStream = null;

    }

    if (cameraVideo) {

        cameraVideo.srcObject = null;

    }

}


/* =========================================
   START FACE TRACKING
========================================= */

function startFaceTracking() {

    if (!faceLandmarker || !cameraVideo) {
        return;
    }

    faceTrackingActive = true;

    if (animationFrameId) {

        cancelAnimationFrame(
            animationFrameId
        );

    }

    trackFace();

}


/* =========================================
   STOP FACE TRACKING
========================================= */

function stopFaceTracking() {

    faceTrackingActive = false;

    if (animationFrameId) {

        cancelAnimationFrame(
            animationFrameId
        );

        animationFrameId = null;

    }

    lastFaceLandmarks = null;

}


/* =========================================
   TRACK FACE
========================================= */

function trackFace() {

    if (
        !faceTrackingActive ||
        !faceLandmarker ||
        !cameraVideo ||
        cameraVideo.readyState < 2
    ) {

        animationFrameId =
            requestAnimationFrame(trackFace);

        return;

    }


    const now = performance.now();


    try {

        const results =
            faceLandmarker.detectForVideo(
                cameraVideo,
                now
            );


        if (
            results &&
            results.faceLandmarks &&
            results.faceLandmarks.length > 0
        ) {

            lastFaceLandmarks =
                results.faceLandmarks[0];

            updateFaceSticker(
                lastFaceLandmarks
            );

        } else {

            lastFaceLandmarks = null;

            positionStickerFallback();

        }

    } catch (error) {

        console.warn(
            "Face tracking frame failed:",
            error
        );

    }


    animationFrameId =
        requestAnimationFrame(trackFace);

}


/* =========================================
   UPDATE FILTER POSITION
========================================= */

function updateFaceSticker(landmarks) {

    if (!faceSticker || !cameraStickerLayer) {
        return;
    }

    const filter = stickerData[selectedSticker];

    if (!filter) {
        return;
    }

    // Hide the separate heart stickers by default
    if (heartLeft) {
        heartLeft.style.display = "none";
    }

    if (heartRight) {
        heartRight.style.display = "none";
    }

    // Hide the normal sticker by default
    faceSticker.style.display = "none";

    // HEART FILTER
    if (filter.type === "hearts") {

        if (heartLeft) {
            heartLeft.style.display = "block";
        }

        if (heartRight) {
            heartRight.style.display = "block";
        }

        positionHeartEyes(landmarks);

        return;
    }

    // All other filters use the normal sticker
    faceSticker.style.display = "block";

    if (filter.type === "birthday") {
        positionBirthdayHat(landmarks);
    }

    if (filter.type === "crown") {
        positionCrown(landmarks);
    }

    if (filter.type === "bunny") {
        positionBunnyEars(landmarks);
    }

    if (filter.type === "glasses") {
        positionGlasses(landmarks);
    }
}

function setFaceFilterGraphic(type) {

    if (!faceSticker) return;

    let graphic = "";


    /* =========================================
       BIRTHDAY HAT
    ========================================= */

    if (type === "birthday") {

        graphic = `
            <svg
                viewBox="0 0 220 150"
                xmlns="http://www.w3.org/2000/svg">

                <path
                    d="M110 8
                       L35 125
                       Q110 142 185 125
                       Z"
                    fill="#d95784"/>

                <path
                    d="M35 125
                       Q110 142 185 125
                       L180 137
                       Q110 155 40 137
                       Z"
                    fill="#f6b5c9"/>

                <circle
                    cx="110"
                    cy="8"
                    r="10"
                    fill="#f5c85b"/>

                <circle
                    cx="82"
                    cy="73"
                    r="8"
                    fill="#fff4f7"/>

                <circle
                    cx="135"
                    cy="48"
                    r="7"
                    fill="#fff4f7"/>

                <circle
                    cx="113"
                    cy="100"
                    r="7"
                    fill="#f5c85b"/>

                <path
                    d="M60 112
                       Q110 126 160 112"
                    fill="none"
                    stroke="#ffffff"
                    stroke-width="6"
                    stroke-linecap="round"/>
            </svg>
        `;
    }


    /* =========================================
       CROWN
    ========================================= */

    if (type === "crown") {

        graphic = `
            <svg
                viewBox="0 0 240 130"
                xmlns="http://www.w3.org/2000/svg">

                <path
                    d="M25 92
                       L40 25
                       L88 65
                       L120 12
                       L152 65
                       L200 25
                       L215 92
                       Z"
                    fill="#f5c85b"
                    stroke="#d79f27"
                    stroke-width="5"
                    stroke-linejoin="round"/>

                <path
                    d="M25 92
                       Q120 112 215 92
                       L210 110
                       Q120 130 30 110
                       Z"
                    fill="#f7d66f"
                    stroke="#d79f27"
                    stroke-width="4"/>

                <circle
                    cx="40"
                    cy="25"
                    r="7"
                    fill="#d95784"/>

                <circle
                    cx="120"
                    cy="12"
                    r="7"
                    fill="#d95784"/>

                <circle
                    cx="200"
                    cy="25"
                    r="7"
                    fill="#d95784"/>

            </svg>
        `;
    }


    /* =========================================
       BUNNY EARS
    ========================================= */

    if (type === "bunny") {

        graphic = `
            <svg
                viewBox="0 0 240 180"
                xmlns="http://www.w3.org/2000/svg">

                <path
                    d="M62 150
                       C38 125 25 78 35 28
                       C39 8 57 5 66 24
                       C80 55 82 108 82 145
                       Z"
                    fill="#ffffff"
                    stroke="#d8a9b8"
                    stroke-width="5"/>

                <path
                    d="M178 150
                       C202 125 215 78 205 28
                       C201 8 183 5 174 24
                       C160 55 158 108 158 145
                       Z"
                    fill="#ffffff"
                    stroke="#d8a9b8"
                    stroke-width="5"/>

                <path
                    d="M57 112
                       C45 83 44 53 49 31
                       C52 22 58 24 62 34
                       C70 58 71 86 69 113
                       Z"
                    fill="#f5b7c9"/>

                <path
                    d="M183 112
                       C195 83 196 53 191 31
                       C188 22 182 24 178 34
                       C170 58 169 86 171 113
                       Z"
                    fill="#f5b7c9"/>

            </svg>
        `;
    }


    /* =========================================
       GLASSES
    ========================================= */

   if (type === "glasses") {
    graphic = getGlassesSVG();
}


    /* =========================================
       HEART EYES
    ========================================= */

    if (type === "hearts") {

        graphic = `
            <svg
                viewBox="0 0 260 120"
                xmlns="http://www.w3.org/2000/svg">

                <path
                    d="M65 91
                       C15 57 34 18 65 35
                       C96 18 115 57 65 91
                       Z"
                    fill="#d95784"/>

                <path
                    d="M195 91
                       C145 57 164 18 195 35
                       C226 18 245 57 195 91
                       Z"
                    fill="#d95784"/>

                <path
                    d="M55 49
                       Q64 42 73 49"
                    fill="none"
                    stroke="#ffffff"
                    stroke-width="6"
                    stroke-linecap="round"/>

                <path
                    d="M185 49
                       Q194 42 203 49"
                    fill="none"
                    stroke="#ffffff"
                    stroke-width="6"
                    stroke-linecap="round"/>

            </svg>
        `;
    }


    faceSticker.innerHTML = graphic;
}



function positionBirthdayHat(landmarks) {

    const forehead = landmarks[10];
    const leftSide = landmarks[234];
    const rightSide = landmarks[454];

    if (!forehead || !leftSide || !rightSide) {
        return;
    }

    const faceWidth =
        Math.abs(rightSide.x - leftSide.x);

    const x =
        (1 - forehead.x) * 100;

    /*
       Higher than before.

       This moves the hat well above
       the forehead instead of near the eyes.
    */

    const y =
        (forehead.y - faceWidth * 0.72) * 100;

    const width =
        Math.max(
            90,
            Math.min(
                220,
                faceWidth *
                cameraStickerLayer.clientWidth *
                1.25
            )
        );

    setFaceFilterGraphic("birthday");

    faceSticker.style.left = `${x}%`;
    faceSticker.style.top = `${y}%`;
    faceSticker.style.width = `${width}px`;
    faceSticker.style.height = `${width * 0.68}px`;
    faceSticker.style.transform =
        "translate(-50%, -50%)";
}


function positionCrown(landmarks) {

    const forehead = landmarks[10];
    const leftSide = landmarks[234];
    const rightSide = landmarks[454];

    if (!forehead || !leftSide || !rightSide) {
        return;
    }

    const faceWidth =
        Math.abs(rightSide.x - leftSide.x);

    const x =
        (1 - forehead.x) * 100;

    /*
       Crown sits higher than the hat.
    */

    const y =
        (forehead.y - faceWidth * 0.78) * 100;

    const width =
        Math.max(
            100,
            Math.min(
                240,
                faceWidth *
                cameraStickerLayer.clientWidth *
                1.30
            )
        );

    setFaceFilterGraphic("crown");

    faceSticker.style.left = `${x}%`;
    faceSticker.style.top = `${y}%`;
    faceSticker.style.width = `${width}px`;
    faceSticker.style.height = `${width * 0.55}px`;
    faceSticker.style.transform =
        "translate(-50%, -50%)";
}


function positionBunnyEars(landmarks) {

    const forehead = landmarks[10];
    const leftSide = landmarks[234];
    const rightSide = landmarks[454];

    if (!forehead || !leftSide || !rightSide) {
        return;
    }

    const faceWidth =
        Math.abs(rightSide.x - leftSide.x);

    const x =
        (1 - forehead.x) * 100;

    const y =
        (forehead.y - faceWidth * 0.62) * 100;

    const width =
        Math.max(
            100,
            Math.min(
                240,
                faceWidth *
                cameraStickerLayer.clientWidth *
                1.35
            )
        );

    setFaceFilterGraphic("bunny");

    faceSticker.style.left = `${x}%`;
    faceSticker.style.top = `${y}%`;
    faceSticker.style.width = `${width}px`;
    faceSticker.style.height = `${width * 0.75}px`;
    faceSticker.style.transform =
        "translate(-50%, -50%)";
}


function positionGlasses(landmarks) {

    const leftEyeA = landmarks[33];
    const leftEyeB = landmarks[133];

    const rightEyeA = landmarks[362];
    const rightEyeB = landmarks[263];

    if (
        !leftEyeA ||
        !leftEyeB ||
        !rightEyeA ||
        !rightEyeB
    ) {
        return;
    }

    const leftX =
        (leftEyeA.x + leftEyeB.x) / 2;

    const leftY =
        (leftEyeA.y + leftEyeB.y) / 2;

    const rightX =
        (rightEyeA.x + rightEyeB.x) / 2;

    const rightY =
        (rightEyeA.y + rightEyeB.y) / 2;

    const centerX =
        (leftX + rightX) / 2;

    const centerY =
        (leftY + rightY) / 2;

    const eyeDistance =
        Math.sqrt(
            Math.pow(rightX - leftX, 2) +
            Math.pow(rightY - leftY, 2)
        );

    const x =
        (1 - centerX) * 100;

    const y =
        centerY * 100;

    const width =
        Math.max(
            100,
            Math.min(
                240,
                eyeDistance *
                cameraStickerLayer.clientWidth *
                2.15
            )
        );

    setFaceFilterGraphic("glasses");

    faceSticker.style.left = `${x}%`;
    faceSticker.style.top = `${y}%`;
    faceSticker.style.width = `${width}px`;
    faceSticker.style.height = `${width * 0.42}px`;
    faceSticker.style.transform =
        "translate(-50%, -50%)";
}


function positionHeartEyes(landmarks) {

    if (!heartLeft || !heartRight) {
        return;
    }

    const leftEyeA = landmarks[33];
    const leftEyeB = landmarks[133];

    const rightEyeA = landmarks[362];
    const rightEyeB = landmarks[263];

    if (
        !leftEyeA ||
        !leftEyeB ||
        !rightEyeA ||
        !rightEyeB
    ) {
        return;
    }

    // Find the exact center of each eye
    const leftX =
        (leftEyeA.x + leftEyeB.x) / 2;

    const leftY =
        (leftEyeA.y + leftEyeB.y) / 2;

    const rightX =
        (rightEyeA.x + rightEyeB.x) / 2;

    const rightY =
        (rightEyeA.y + rightEyeB.y) / 2;

    // Distance between the eyes
    const eyeDistance =
        Math.sqrt(
            Math.pow(rightX - leftX, 2) +
            Math.pow(rightY - leftY, 2)
        );

    // Heart size
    const heartSize =
        eyeDistance * 0.90;

    // Put the heart graphics in place
    heartLeft.innerHTML =
        getSingleHeartSVG();

    heartRight.innerHTML =
        getSingleHeartSVG();

    // LEFT EYE
    heartLeft.style.left =
    `${(1 - leftX + 0.025) * 100}%`;

    heartLeft.style.top =
    `${(leftY + 0.07) * 100}%`;

    heartLeft.style.width =
        `${heartSize * 100}%`;

    heartLeft.style.height =
        `${heartSize * 100}%`;

    heartLeft.style.transform =
        "translate(-50%, -50%)";

    // RIGHT EYE
    heartRight.style.left =
    `${(1 - rightX - 0.025) * 100}%`;

heartRight.style.top =
    `${(rightY + 0.07) * 100}%`;

    heartRight.style.width =
        `${heartSize * 100}%`;

    heartRight.style.height =
        `${heartSize * 100}%`;

    heartRight.style.transform =
        "translate(-50%, -50%)";
}

function getSingleHeartSVG() {

    return `
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        style="width:100%;height:100%;">

        <path
            d="M50 82
               C44 73 15 55 15 33
               C15 18 26 10 39 10
               C46 10 52 14 57 22
               C62 14 68 10 76 10
               C89 10 99 18 99 33
               C99 55 70 73 50 82
               Z"
            fill="#ffb6c9"
            fill-opacity="0.65"
            stroke="#ff8eaa"
            stroke-opacity="0.50"
            stroke-width="3"/>
    </svg>`;
}

/* =========================================
   HEAD FILTER
========================================= */

function positionHeadFilter(
    landmarks,
    filter
) {

    /*
       Landmark 10 is around the forehead /
       upper center of the face.

       We use it as the main anchor.

       Landmarks 234 and 454 are used to
       estimate face width.
    */


    const forehead =
        landmarks[10];

    const leftSide =
        landmarks[234];

    const rightSide =
        landmarks[454];


    if (
        !forehead ||
        !leftSide ||
        !rightSide
    ) {

        positionStickerFallback();

        return;

    }


    const faceWidth =
        Math.abs(
            rightSide.x - leftSide.x
        );


    /*
       Move upward from forehead
       so the hat/crown/ears sit
       on the actual head.
    */

    const x =
        (1 - forehead.x) * 100;

    const y =
        (forehead.y - faceWidth * 0.32) * 100;


    const size =
        Math.max(
            45,
            Math.min(
                140,
                faceWidth *
                cameraStickerLayer.clientWidth *
                filter.scale
            )
        );


    faceSticker.textContent =
        filter.emoji;

    faceSticker.style.left =
        `${x}%`;

    faceSticker.style.top =
        `${y}%`;

    faceSticker.style.fontSize =
        `${size}px`;

    faceSticker.style.transform =
        "translate(-50%, -50%)";

}


/* =========================================
   EYE FILTER
========================================= */

function positionEyeFilter(
    landmarks,
    filter
) {

    /*
       Left eye center:
       landmarks around 33 and 133

       Right eye center:
       landmarks around 362 and 263
    */


    const leftEyeA =
        landmarks[33];

    const leftEyeB =
        landmarks[133];

    const rightEyeA =
        landmarks[362];

    const rightEyeB =
        landmarks[263];


    if (
        !leftEyeA ||
        !leftEyeB ||
        !rightEyeA ||
        !rightEyeB
    ) {

        positionStickerFallback();

        return;

    }


    const leftEyeX =
        (leftEyeA.x + leftEyeB.x) / 2;

    const leftEyeY =
        (leftEyeA.y + leftEyeB.y) / 2;


    const rightEyeX =
        (rightEyeA.x + rightEyeB.x) / 2;

    const rightEyeY =
        (rightEyeA.y + rightEyeB.y) / 2;


    const centerX =
        (leftEyeX + rightEyeX) / 2;

    const centerY =
        (leftEyeY + rightEyeY) / 2;


    const eyeDistance =
        Math.sqrt(
            Math.pow(
                rightEyeX - leftEyeX,
                2
            ) +
            Math.pow(
                rightEyeY - leftEyeY,
                2
            )
        );


    const x =
        (1 - centerX) * 100;

    const y =
        centerY * 100;


    const size =
        Math.max(
            35,
            Math.min(
                120,
                eyeDistance *
                cameraStickerLayer.clientWidth *
                filter.scale
            )
        );


    faceSticker.textContent =
        filter.emoji;

    faceSticker.style.left =
        `${x}%`;

    faceSticker.style.top =
        `${y}%`;

    faceSticker.style.fontSize =
        `${size}px`;

    faceSticker.style.transform =
        "translate(-50%, -50%)";

}


/* =========================================
   FALLBACK POSITION
========================================= */

function positionStickerFallback() {

    if (!faceSticker) return;

    setFaceFilterGraphic(selectedSticker);

    faceSticker.style.left = "50%";

    faceSticker.style.top =
        selectedSticker === "glasses" ||
        selectedSticker === "hearts"
            ? "45%"
            : "12%";

    faceSticker.style.width = "150px";
    faceSticker.style.height = "100px";

    faceSticker.style.transform =
        "translate(-50%, -50%)";
}


/* =========================================
   RESET PHOTOBOOTH
========================================= */

function resetPhotobooth() {

    capturedPhotos = [];

    isTakingPhoto = false;

    selectedSticker = "birthday";


    if (photoboothCameraScreen) {

        photoboothCameraScreen
            .classList.remove("hidden");

    }


    if (photoboothResultScreen) {

        photoboothResultScreen
            .classList.remove("show");

    }


    if (photoProgress) {

        photoProgress.textContent =
            "Photo 1 of 4";

    }


    filterButtons.forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.sticker === "birthday"
        );

    });


    if (faceSticker) {

        faceSticker.textContent = "🎂";

    }

}
/* =========================================
   COUNTDOWN
========================================= */

function runCountdown() {

    return new Promise(resolve => {

        if (!cameraCountdown) {

            resolve();

            return;

        }


        const numbers = [
            "3",
            "2",
            "1",
            "♡"
        ];

        let index = 0;


        function showNext() {

            if (index >= numbers.length) {

                cameraCountdown.textContent = "";

                resolve();

                return;

            }


            cameraCountdown.textContent =
                numbers[index];

            index++;

            setTimeout(
                showNext,
                650
            );

        }


        showNext();

    });

}


/* =========================================
   CAPTURE PHOTO
========================================= */

async function capturePhoto() {

    if (
        !cameraVideo ||
        isTakingPhoto
    ) {
        return;
    }


    if (!cameraVideo.videoWidth) {

        return;

    }


    isTakingPhoto = true;


    await runCountdown();


    const canvas =
        document.createElement("canvas");


    const width =
        cameraVideo.videoWidth;

    const height =
        cameraVideo.videoHeight;


    canvas.width = width;

    canvas.height = height;


    const ctx =
        canvas.getContext("2d");


    /*
       Mirror the photo so it matches
       the selfie preview.
    */

    ctx.save();

    ctx.translate(
        width,
        0
    );

    ctx.scale(
        -1,
        1
    );


    ctx.drawImage(
        cameraVideo,
        0,
        0,
        width,
        height
    );


    ctx.restore();


    /*
       Draw the actual selected filter
       onto the captured photo.
    */

    await drawFilterOnPhoto(
    ctx,
    width,
    height
);

capturedPhotos.push(canvas);


    const photoNumber =
        capturedPhotos.length;


    if (photoProgress) {

        if (photoNumber < 4) {

            photoProgress.textContent =
                `Photo ${photoNumber + 1} of 4`;

        } else {

            photoProgress.textContent =
                "Creating your memory...";

        }

    }


    if (capturedPhotos.length >= 4) {

        setTimeout(
            createPhotoStrip,
            350
        );

    } else {

        isTakingPhoto = false;

    }

}


/* =========================================
   DRAW FILTER ON CAPTURED PHOTO
========================================= */

async function drawFilterOnPhoto(
    ctx,
    width,
    height
) {

    if (!lastFaceLandmarks) {
        return;
    }

    const filter = stickerData[selectedSticker];

    if (!filter) return;


    let svg = "";


    if (filter.type === "birthday") {
        svg = getBirthdayHatSVG();
    }

    if (filter.type === "crown") {
        svg = getCrownSVG();
    }

    if (filter.type === "bunny") {
        svg = getBunnySVG();
    }

    if (filter.type === "glasses") {
        svg = getGlassesSVG();
    }

    if (filter.type === "hearts") {
        svg = getHeartsSVG();
    }


    const image =
        new Image();

    image.src =
        "data:image/svg+xml;charset=utf-8," +
        encodeURIComponent(svg);


    await new Promise(resolve => {

        image.onload = resolve;
        image.onerror = resolve;

    });


    if (!image.width) return;


    const filterType =
        filter.type;


    if (
        filterType === "birthday" ||
        filterType === "crown" ||
        filterType === "bunny"
    ) {

        drawHeadGraphicOnPhoto(
            ctx,
            width,
            height,
            image,
            filterType
        );

    } else {

        drawEyeGraphicOnPhoto(
            ctx,
            width,
            height,
            image,
            filterType
        );

    }

}


function drawHeadGraphicOnPhoto(
    ctx,
    width,
    height,
    image,
    type
) {

    const forehead =
        lastFaceLandmarks[10];

    const leftSide =
        lastFaceLandmarks[234];

    const rightSide =
        lastFaceLandmarks[454];

    if (!forehead || !leftSide || !rightSide) {
        return;
    }


    const faceWidth =
        Math.abs(
            rightSide.x -
            leftSide.x
        );


    const x =
        (1 - forehead.x) *
        width;


    let yOffset = 0;

    let sizeMultiplier = 1;


    if (type === "birthday") {

        yOffset =
            faceWidth * 0.72;

        sizeMultiplier =
            1.25;

    }


    if (type === "crown") {

        yOffset =
            faceWidth * 0.78;

        sizeMultiplier =
            1.30;

    }


    if (type === "bunny") {

        yOffset =
            faceWidth * 0.62;

        sizeMultiplier =
            1.35;

    }


    const y =
        (
            forehead.y -
            yOffset
        ) * height;


    const filterWidth =
        faceWidth *
        width *
        sizeMultiplier;


    const filterHeight =
        filterWidth * 0.65;


    ctx.drawImage(
        image,
        x - filterWidth / 2,
        y - filterHeight / 2,
        filterWidth,
        filterHeight
    );

}


function drawEyeGraphicOnPhoto(
    ctx,
    width,
    height,
    image,
    type
) {

    const leftEyeA =
        lastFaceLandmarks[33];

    const leftEyeB =
        lastFaceLandmarks[133];

    const rightEyeA =
        lastFaceLandmarks[362];

    const rightEyeB =
        lastFaceLandmarks[263];


    if (
        !leftEyeA ||
        !leftEyeB ||
        !rightEyeA ||
        !rightEyeB
    ) {
        return;
    }


    const leftX =
        (leftEyeA.x +
         leftEyeB.x) / 2;

    const leftY =
        (leftEyeA.y +
         leftEyeB.y) / 2;

    const rightX =
        (rightEyeA.x +
         rightEyeB.x) / 2;

    const rightY =
        (rightEyeA.y +
         rightEyeB.y) / 2;


    const centerX =
        (leftX + rightX) / 2;

    const centerY =
        (leftY + rightY) / 2;


    const eyeDistance =
        Math.sqrt(
            Math.pow(
                rightX - leftX,
                2
            ) +
            Math.pow(
                rightY - leftY,
                2
            )
        );


    const x =
        (1 - centerX) *
        width;

    const y =
        centerY *
        height;


    const filterWidth =
        eyeDistance *
        width *
        2.2;


    const filterHeight =
        filterWidth *
        0.46;


    ctx.drawImage(
        image,
        x - filterWidth / 2,
        y - filterHeight / 2,
        filterWidth,
        filterHeight
    );

}
/* =========================================
   FALLBACK CAPTURE FILTER
========================================= */

function drawFallbackFilter(
    ctx,
    width,
    height
) {

    const filter =
        stickerData[selectedSticker];


    if (!filter) return;


    ctx.save();

    ctx.font =
        "150px Arial";

    ctx.textAlign =
        "center";

    ctx.textBaseline =
        "middle";


    ctx.fillText(
        filter.emoji,
        width / 2,
        filter.type === "eyes"
            ? height * 0.45
            : height * 0.16
    );


    ctx.restore();

}


function getBirthdayHatSVG() {

    return `
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 220 150">

        <path
            d="M110 8
               L35 125
               Q110 142 185 125
               Z"
            fill="#d95784"/>

        <path
            d="M35 125
               Q110 142 185 125
               L180 137
               Q110 155 40 137
               Z"
            fill="#f6b5c9"/>

        <circle
            cx="110"
            cy="8"
            r="10"
            fill="#f5c85b"/>

        <circle
            cx="82"
            cy="73"
            r="8"
            fill="#ffffff"/>

        <circle
            cx="135"
            cy="48"
            r="7"
            fill="#ffffff"/>

        <circle
            cx="113"
            cy="100"
            r="7"
            fill="#f5c85b"/>

        <path
            d="M60 112
               Q110 126 160 112"
            fill="none"
            stroke="#ffffff"
            stroke-width="6"
            stroke-linecap="round"/>
    </svg>`;
}


function getCrownSVG() {

    return `
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 240 130">

        <path
            d="M25 92
               L40 25
               L88 65
               L120 12
               L152 65
               L200 25
               L215 92
               Z"
            fill="#f5c85b"
            stroke="#d79f27"
            stroke-width="5"
            stroke-linejoin="round"/>

        <path
            d="M25 92
               Q120 112 215 92
               L210 110
               Q120 130 30 110
               Z"
            fill="#f7d66f"
            stroke="#d79f27"
            stroke-width="4"/>

        <circle
            cx="40"
            cy="25"
            r="7"
            fill="#d95784"/>

        <circle
            cx="120"
            cy="12"
            r="7"
            fill="#d95784"/>

        <circle
            cx="200"
            cy="25"
            r="7"
            fill="#d95784"/>
    </svg>`;
}


function getBunnySVG() {

    return `
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 240 180">

        <path
            d="M62 150
               C38 125 25 78 35 28
               C39 8 57 5 66 24
               C80 55 82 108 82 145
               Z"
            fill="#ffffff"
            stroke="#d8a9b8"
            stroke-width="5"/>

        <path
            d="M178 150
               C202 125 215 78 205 28
               C201 8 183 5 174 24
               C160 55 158 108 158 145
               Z"
            fill="#ffffff"
            stroke="#d8a9b8"
            stroke-width="5"/>

        <path
            d="M57 112
               C45 83 44 53 49 31
               C52 22 58 24 62 34
               C70 58 71 86 69 113
               Z"
            fill="#f5b7c9"/>

        <path
            d="M183 112
               C195 83 196 53 191 31
               C188 22 182 24 178 34
               C170 58 169 86 171 113
               Z"
            fill="#f5b7c9"/>
    </svg>`;
}


function getGlassesSVG() {

    return `
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 130"
        style="width:100%;height:100%;">

        <!-- LEFT HEART GLASS -->
        <path
            d="M75 108
               C66 98 25 73 25 43
               C25 22 42 10 59 10
               C70 10 79 16 86 27
               C93 16 102 10 113 10
               C130 10 147 22 147 43
               C147 73 106 98 97 108
               Z"
            fill="#ffb6c9"
            fill-opacity="0.62"
            stroke="#d95784"
            stroke-opacity="0.75"
            stroke-width="6"/>

        <!-- RIGHT HEART GLASS -->
        <path
            d="M203 108
               C194 98 153 73 153 43
               C153 22 170 10 187 10
               C198 10 207 16 214 27
               C221 16 230 10 241 10
               C258 10 275 22 275 43
               C275 73 234 98 225 108
               Z"
            fill="#ffb6c9"
            fill-opacity="0.62"
            stroke="#d95784"
            stroke-opacity="0.75"
            stroke-width="6"/>

        <!-- BRIDGE -->
        <path
            d="M147 43
               Q150 34 153 43"
            fill="none"
            stroke="#d95784"
            stroke-opacity="0.75"
            stroke-width="7"
            stroke-linecap="round"/>

        <!-- LEFT TEMPLE -->
        <path
            d="M25 42
               L5 34"
            fill="none"
            stroke="#d95784"
            stroke-opacity="0.75"
            stroke-width="7"
            stroke-linecap="round"/>

        <!-- RIGHT TEMPLE -->
        <path
            d="M275 42
               L295 34"
            fill="none"
            stroke="#d95784"
            stroke-opacity="0.75"
            stroke-width="7"
            stroke-linecap="round"/>

        <!-- LEFT GLASS HIGHLIGHT -->
        <path
            d="M48 39
               Q64 25 79 39"
            fill="none"
            stroke="#ffffff"
            stroke-opacity="0.35"
            stroke-width="6"
            stroke-linecap="round"/>

        <!-- RIGHT GLASS HIGHLIGHT -->
        <path
            d="M176 39
               Q192 25 207 39"
            fill="none"
            stroke="#ffffff"
            stroke-opacity="0.35"
            stroke-width="6"
            stroke-linecap="round"/>

    </svg>`;
}


function getHeartsSVG() {

    return `
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 100"
        style="width:100%;height:100%;">

        <!-- LEFT EYE HEART -->
        <path
            d="M50 78
               C45 70 18 55 18 34
               C18 20 29 12 40 12
               C48 12 54 17 58 23
               C62 17 68 12 76 12
               C87 12 98 20 98 34
               C98 55 71 70 66 78
               Z"
            fill="#ffb6c9"
            fill-opacity="0.45"
            stroke="#ff8eaa"
            stroke-opacity="0.30"
            stroke-width="3"/>

        <!-- RIGHT EYE HEART -->
        <path
            d="M134 78
               C129 70 102 55 102 34
               C102 20 113 12 124 12
               C132 12 138 17 142 23
               C146 17 152 12 160 12
               C171 12 182 20 182 34
               C182 55 155 70 150 78
               Z"
            fill="#ffb6c9"
            fill-opacity="0.45"
            stroke="#ff8eaa"
            stroke-opacity="0.30"
            stroke-width="3"/>

    </svg>`;
}

/* =========================================
   CREATE FOUR-PHOTO BIRTHDAY FRAME
========================================= */

function createPhotoStrip() {

    if (
        !photoStripCanvas ||
        capturedPhotos.length !== 4
    ) {
        isTakingPhoto = false;
        return;
    }

    /*
        2 x 2 photo layout
    */

    const photoWidth = 900;

    const photoHeight =
        Math.round(
            photoWidth *
            (
                capturedPhotos[0].height /
                capturedPhotos[0].width
            )
        );

    const gap = 18;

    /*
        Extra space at the top and bottom
        for the birthday decorations.
    */

    const sidePadding = 45;
    const topSpace = 185;
    const bottomSpace = 125;

    const canvasWidth =
        sidePadding * 2 +
        photoWidth * 2 +
        gap;

    const canvasHeight =
        topSpace +
        photoHeight * 2 +
        gap +
        bottomSpace;

    photoStripCanvas.width =
        canvasWidth;

    photoStripCanvas.height =
        canvasHeight;

    const ctx =
        photoStripCanvas.getContext("2d");


    /* =========================================
       BACKGROUND
    ========================================= */

    const background =
        ctx.createLinearGradient(
            0,
            0,
            canvasWidth,
            canvasHeight
        );

    background.addColorStop(
        0,
        "#fff8fb"
    );

    background.addColorStop(
        0.5,
        "#ffeef4"
    );

    background.addColorStop(
        1,
        "#fff7fa"
    );

    ctx.fillStyle = background;

    ctx.fillRect(
        0,
        0,
        canvasWidth,
        canvasHeight
    );


    /* =========================================
       OUTER BORDER
    ========================================= */

    ctx.strokeStyle =
        "#d95784";

    ctx.lineWidth = 10;

    ctx.strokeRect(
        18,
        18,
        canvasWidth - 36,
        canvasHeight - 36
    );


    /*
        Inner decorative border
    */

    ctx.strokeStyle =
        "rgba(217, 87, 132, 0.28)";

    ctx.lineWidth = 4;

    ctx.strokeRect(
        32,
        32,
        canvasWidth - 64,
        canvasHeight - 64
    );


    /* =========================================
       SMALL HEART FUNCTION
    ========================================= */

    function drawHeart(
        x,
        y,
        size,
        color
    ) {

        ctx.save();

        ctx.translate(x, y);

        ctx.scale(
            size,
            size
        );

        ctx.beginPath();

        ctx.moveTo(
            0,
            0.3
        );

        ctx.bezierCurveTo(
            -0.6,
            -0.3,
            -1,
            0.15,
            -0.5,
            0.65
        );

        ctx.bezierCurveTo(
            -0.2,
            0.95,
            0,
            1.05,
            0,
            1.05
        );

        ctx.bezierCurveTo(
            0,
            1.05,
            0.2,
            0.95,
            0.5,
            0.65
        );

        ctx.bezierCurveTo(
            1,
            0.15,
            0.6,
            -0.3,
            0,
            0.3
        );

        ctx.fillStyle = color;

        ctx.fill();

        ctx.restore();
    }


    /* =========================================
       SMALL FLOWER FUNCTION
    ========================================= */

    function drawFlower(
        x,
        y,
        size
    ) {

        ctx.save();

        ctx.translate(
            x,
            y
        );

        ctx.fillStyle =
            "#f4a9c0";

        for (
            let i = 0;
            i < 5;
            i++
        ) {

            const angle =
                (Math.PI * 2 / 5) *
                i;

            const petalX =
                Math.cos(angle) *
                size;

            const petalY =
                Math.sin(angle) *
                size;

            ctx.beginPath();

            ctx.arc(
                petalX,
                petalY,
                size * 0.55,
                0,
                Math.PI * 2
            );

            ctx.fill();
        }

        ctx.beginPath();

        ctx.arc(
            0,
            0,
            size * 0.45,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
            "#f5c85b";

        ctx.fill();

        ctx.restore();
    }


    /* =========================================
       TOP DECORATIONS
    ========================================= */

    drawHeart(
        90,
        82,
        28,
        "#d95784"
    );

    drawFlower(
        165,
        82,
        18
    );

    drawHeart(
        canvasWidth - 90,
        82,
        28,
        "#d95784"
    );

    drawFlower(
        canvasWidth - 165,
        82,
        18
    );


    /*
        Small floating hearts
    */

    drawHeart(
        245,
        48,
        13,
        "#ef9ab5"
    );

    drawHeart(
        canvasWidth - 245,
        48,
        13,
        "#ef9ab5"
    );


    /* =========================================
       BIRTHDAY TEXT
    ========================================= */

    ctx.textAlign =
        "center";

    ctx.textBaseline =
        "middle";


    /*
        Small top text
    */

    ctx.font =
        "bold 25px Georgia, serif";

    ctx.fillStyle =
        "#9d536b";

    ctx.fillText(
        "HAPPY BIRTHDAY",
        canvasWidth / 2,
        62
    );


    /*
        Arianne's name
    */

    ctx.font =
        "bold 58px Georgia, serif";

    ctx.fillStyle =
        "#d95784";

    ctx.fillText(
        "ARIANNE ♡",
        canvasWidth / 2,
        122
    );


    /*
        Little separator
    */

    ctx.font =
        "bold 20px Arial";

    ctx.fillStyle =
        "#c97891";

    ctx.fillText(
        "✦  ♡  ✦",
        canvasWidth / 2,
        157
    );


    /* =========================================
       PHOTO AREA
    ========================================= */

    capturedPhotos.forEach(
        (photo, index) => {

            const column =
                index % 2;

            const row =
                Math.floor(index / 2);


            const x =
                sidePadding +
                column *
                (photoWidth + gap);


            const y =
                topSpace +
                row *
                (photoHeight + gap);


            /*
                White photo border
            */

            ctx.fillStyle =
                "#ffffff";

            ctx.fillRect(
                x - 8,
                y - 8,
                photoWidth + 16,
                photoHeight + 16
            );


            /*
                Photo
            */

            ctx.save();

/*
    Apply the selected enhancement
    to this photo.
*/

if (selectedEnhancement === "soft") {

    ctx.filter =
        "brightness(1.08) saturate(0.95) contrast(0.96)";

}

if (selectedEnhancement === "bright") {

    ctx.filter =
        "brightness(1.18) saturate(0.92) contrast(0.94)";

}

if (selectedEnhancement === "sweet") {

    ctx.filter =
        "brightness(1.10) saturate(1.08) contrast(0.96)";

}

if (selectedEnhancement === "dreamy") {

    ctx.filter =
        "brightness(1.12) saturate(0.90) contrast(0.92)";

}

if (selectedEnhancement === "vintage") {

    ctx.filter =
        "sepia(0.18) saturate(0.88) contrast(0.95) brightness(1.04)";

}

if (selectedEnhancement === "original") {

    ctx.filter =
        "none";

}


ctx.drawImage(
    photo,
    x,
    y,
    photoWidth,
    photoHeight
);

ctx.restore();


            /*
                Small heart on
                each photo corner
            */

            drawHeart(
                x + 30,
                y + 35,
                10,
                "rgba(217, 87, 132, 0.85)"
            );

            drawHeart(
                x + photoWidth - 30,
                y + photoHeight - 30,
                10,
                "rgba(217, 87, 132, 0.85)"
            );

        }
    );


    /* =========================================
       BOTTOM DECORATIONS
    ========================================= */

    const bottomY =
        canvasHeight -
        75;


    drawFlower(
        90,
        bottomY,
        18
    );

    drawHeart(
        145,
        bottomY,
        18,
        "#d95784"
    );

    drawHeart(
        canvasWidth - 145,
        bottomY,
        18,
        "#d95784"
    );

    drawFlower(
        canvasWidth - 90,
        bottomY,
        18
    );


    /* =========================================
       BOTTOM MESSAGE
    ========================================= */

    ctx.font =
        "bold 23px Georgia, serif";

    ctx.fillStyle =
        "#8d4a61";

    ctx.fillText(
        "A little memory to keep ♡",
        canvasWidth / 2,
        canvasHeight - 88
    );


    ctx.font =
        "18px Arial";

    ctx.fillStyle =
        "#b86a83";

    ctx.fillText(
        "Made with love for Arianne",
        canvasWidth / 2,
        canvasHeight - 48
    );


    /* =========================================
       SHOW RESULT
    ========================================= */

    if (photoboothCameraScreen) {

        photoboothCameraScreen
            .classList.add("hidden");

    }


    if (photoboothResultScreen) {

        photoboothResultScreen
            .classList.add("show");

    }


    isTakingPhoto = false;
}


/* =========================================
   RETAKE
========================================= */

function retakePhotos() {

    capturedPhotos = [];

    isTakingPhoto = false;


    if (photoboothCameraScreen) {

        photoboothCameraScreen
            .classList.remove("hidden");

    }


    if (photoboothResultScreen) {

        photoboothResultScreen
            .classList.remove("show");

    }


    if (photoProgress) {

        photoProgress.textContent =
            "Photo 1 of 4";

    }


    if (cameraCountdown) {

        cameraCountdown.textContent = "";

    }

}


/* =========================================
   DOWNLOAD
========================================= */

function downloadPhotoStrip() {

    if (!photoStripCanvas) return;


    const link =
        document.createElement("a");


    link.download =
        "arianne-birthday-photobooth.png";


    link.href =
        photoStripCanvas.toDataURL(
            "image/png"
        );


    link.click();

}


/* =========================================
   STICKER BUTTONS
========================================= */

filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            selectedSticker =
                button.dataset.sticker;


            filterButtons.forEach(
                otherButton => {

                    otherButton.classList.toggle(
                        "active",
                        otherButton === button
                    );

                }
            );


            if (lastFaceLandmarks) {

                updateFaceSticker(
                    lastFaceLandmarks
                );

            } else {

                positionStickerFallback();

            }

        }
    );

});


/* =========================================
   BUTTON EVENTS
========================================= */

if (photoboothButton) {

    photoboothButton.addEventListener(
        "click",
        openPhotobooth
    );

}


if (photoboothClose) {

    photoboothClose.addEventListener(
        "click",
        closePhotobooth
    );

}


if (photoboothBackdrop) {

    photoboothBackdrop.addEventListener(
        "click",
        closePhotobooth
    );

}


if (takePhotoButton) {

    takePhotoButton.addEventListener(
        "click",
        capturePhoto
    );

}


if (retakeButton) {

    retakeButton.addEventListener(
        "click",
        retakePhotos
    );

}


if (downloadPhotoButton) {

    downloadPhotoButton.addEventListener(
        "click",
        downloadPhotoStrip
    );

}


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            photoboothModal &&
            photoboothModal.classList.contains("show")
        ) {

            closePhotobooth();

        }

    }
);


/* =========================================
   INITIALIZE
========================================= */

initializeFaceLandmarker();

/* =========================================
   PHOTO ENHANCEMENT FILTERS
========================================= */

const enhanceButtons =
    document.querySelectorAll(".enhance-button");

let selectedEnhancement =
    "original";


enhanceButtons.forEach(button => {

    button.addEventListener("click", () => {

        selectedEnhancement =
            button.dataset.enhance;

        enhanceButtons.forEach(
            item => {
                item.classList.remove("active");
            }
        );

        button.classList.add("active");

        applyPhotoEnhancement();
    });

});


function applyPhotoEnhancement() {

    if (
        !photoStripCanvas ||
        capturedPhotos.length !== 4
    ) {
        return;
    }


    /*
        Rebuild the photo strip with
        the selected visual style.
    */

    createPhotoStrip();

}

const heartLeft =
    document.getElementById("heartLeft");

const heartRight =
    document.getElementById("heartRight");
