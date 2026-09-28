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