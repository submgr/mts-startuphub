<template>
    <ion-page>
      <!-- 

        @author:
        koby - https://www.koby.dev

        @credits:
        https://www.pexels.com/video/a-man-in-a-video-call-using-his-laptop-5197240/
        https://www.pexels.com/video/person-having-a-conversation-4872869/

        icons: 
        https://myicons.co/
        -->
        <section class="section-container">
        <div class="fullscreen-media-container video overlay">
            <video src="https://www.dropbox.com/s/ve0apo59semvv70/example-video-1.mp4?raw=1" autoplay playsinline muted loop></video>
            <div class="overlay-content-container">
            <div class="partner-text-container">
                <button class="button-mic-element size-s">
                <span class="icon icon-mic-inactive">
                    <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9.08786V9.08786C4.78197 9.08746 3.79467 8.10016 3.79428 6.88214V3.20571V3.20566C3.7947 1.98764 4.78202 1.00036 6.00005 1H6.00005C7.21807 1.00039 8.20537 1.98769 8.20576 3.20571V6.88214V6.8821C8.20618 8.09988 7.21931 9.08744 6.00152 9.08786C6.00103 9.08786 6.00054 9.08786 6.00005 9.08786L6 9.08786Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M11 7V7C11 9.76142 8.76142 12 6 12V12C3.23858 12 1 9.76142 1 7V7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6 13.5V12" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </span>
                </button>
                <span class="name">Marc Isaac</span>
            </div>
            <div class="ui-container">
                <div class="navigation-controls-container">
                <button class="button-mic-element switch">
                    <span class="icon icon-mic-active">
                    <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="active" fill-rule="evenodd" clip-rule="evenodd" d="M8.95576 3.20547C8.95523 1.57343 7.63209 0.250528 6.00004 0.25C4.368 0.250488 3.04484 1.57367 3.04428 3.20571V6.88238C3.04469 8.16353 4.10998 9.25418 5.25 9.6642V11.1317C3.38532 10.682 1.75 9.00277 1.75 7H0.25C0.25 9.92145 2.42874 12.334 5.25 12.7015V13.5C5.25 13.9142 5.58579 14.25 6 14.25C6.41421 14.25 6.75 13.9142 6.75 13.5V12.7015C9.57126 12.334 11.75 9.92144 11.75 7H10.25C10.25 9.00277 8.61468 10.682 6.75 11.1317V9.66461C7.89054 9.25478 8.95607 8.16336 8.95576 6.88184V3.20547ZM7.45576 6.88236C7.45604 7.68593 6.80386 8.33758 6.00029 8.33786C5.19637 8.3376 4.54467 7.68578 4.54428 6.8819V3.20566C4.5447 2.40186 5.19624 1.75036 6.00004 1.75C6.80385 1.75039 7.45537 2.40215 7.45576 3.20596V6.88236Z" fill="white" />
                        <path class="inactive" fill-rule="evenodd" clip-rule="evenodd" d="M6.00004 0.25C7.63209 0.250528 8.95523 1.57343 8.95576 3.20547V6.88184C8.95589 7.43109 8.76024 7.94543 8.4468 8.38614L9.42825 9.36759C9.9368 8.69098 10.25 7.87647 10.25 7H11.75C11.75 8.31745 11.3069 9.53141 10.5617 10.501L11.4298 11.3692C11.7227 11.6621 11.7227 12.1369 11.4298 12.4298C11.1369 12.7227 10.6621 12.7227 10.3692 12.4298L9.501 11.5617C8.71848 12.1631 7.7768 12.5678 6.75 12.7015V13.5C6.75 13.9142 6.41421 14.25 6 14.25C5.58579 14.25 5.25 13.9142 5.25 13.5V12.7015C2.42874 12.334 0.25 9.92145 0.25 7H1.75C1.75 9.00277 3.38532 10.682 5.25 11.1317V9.6642C4.10998 9.25418 3.04469 8.16353 3.04428 6.88238V5.10494L0.46967 2.53033C0.176777 2.23744 0.176777 1.76256 0.46967 1.46967C0.762563 1.17678 1.23744 1.17678 1.53033 1.46967L3.05201 2.99135C3.16233 1.45936 4.44008 0.250467 6.00004 0.25ZM4.54428 6.60494V6.8819C4.54467 7.68578 5.19637 8.3376 6.00029 8.33786C6.08714 8.33783 6.17223 8.33019 6.25491 8.31557L4.54428 6.60494ZM7.38688 7.32622L4.54428 4.48362V3.20566C4.5447 2.40186 5.19624 1.75036 6.00004 1.75C6.80385 1.75039 7.45537 2.40215 7.45576 3.20596V6.88236C7.45581 7.03714 7.43166 7.18628 7.38688 7.32622ZM7.33167 9.39233C7.14348 9.50189 6.94787 9.5935 6.75 9.66461V11.1317C7.3164 10.9951 7.86163 10.7451 8.3463 10.407L7.33167 9.39233Z" fill="white" />
                    </svg>
                    </span>
                </button>
                <button class="button-cam-element switch">
                    <span class="icon icon-cam-active">
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="active" fill-rule="evenodd" clip-rule="evenodd" d="M10 8.6732V8.70915C10 9.95203 8.99288 10.9591 7.75 10.9591H2.5C1.25712 10.9591 0.25 9.95203 0.25 8.70915V4.04248C0.25 2.7996 1.25712 1.79248 2.5 1.79248H7.75C8.99288 1.79248 10 2.7996 10 4.04248V4.07807L11.3098 3.02401C12.2916 2.23343 13.75 2.93294 13.75 4.1923V8.55897C13.75 9.81849 12.2912 10.518 11.3095 9.72699L10 8.6732ZM1.75 4.04248C1.75 3.62803 2.08555 3.29248 2.5 3.29248H7.75C8.16445 3.29248 8.5 3.62803 8.5 4.04248V5.64432C8.5 5.64462 8.5 5.64402 8.5 5.64432V7.1062C8.5 7.1064 8.5 7.106 8.5 7.1062V8.70915C8.5 9.1236 8.16445 9.45915 7.75 9.45915H2.5C2.08555 9.45915 1.75 9.1236 1.75 8.70915V4.04248ZM10 6.74781L12.25 8.5585V4.19277L10 6.00346V6.74781Z" fill="white" />
                        <path class="inactive" fill-rule="evenodd" clip-rule="evenodd" d="M1.58294 0.528126C1.32232 0.206181 0.850056 0.156469 0.528111 0.417091C0.206166 0.677714 0.156454 1.14998 0.417076 1.47192L1.08291 2.29442C0.574711 2.70691 0.250007 3.33662 0.250007 4.04234V8.70901C0.250007 9.95188 1.25713 10.959 2.50001 10.959H7.75001C7.86138 10.959 7.97087 10.9509 8.0779 10.9353L8.91708 11.9719C9.1777 12.2939 9.64996 12.3436 9.97191 12.083C10.2939 11.8223 10.3436 11.3501 10.0829 11.0281L9.42336 10.2133C9.78187 9.8148 10 9.28743 10 8.70901V8.67306L11.3095 9.72685C12.2913 10.5179 13.75 9.81834 13.75 8.55883V4.19216C13.75 2.93279 12.2916 2.23329 11.3098 3.02387L10 4.07794V4.04234C10 2.79946 8.99289 1.79234 7.75001 1.79234H2.60635L1.58294 0.528126ZM2.02674 3.46033C1.85783 3.59781 1.75001 3.8074 1.75001 4.04234V8.70901C1.75001 9.12346 2.08555 9.459 2.50001 9.459H6.88281L2.02674 3.46033ZM8.4414 9.00034L3.82064 3.29234H7.75001C8.16446 3.29234 8.50001 3.62789 8.50001 4.04234V8.70901C8.50001 8.81235 8.47914 8.91078 8.4414 9.00034ZM12.25 4.19263L10 6.0033V6.74769L12.25 8.55836V4.19263Z" fill="white" />
                    </svg>
                    </span>
                </button>
                <button class="button-share-element">
                    <span class="icon icon-share">
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="12" height="8" rx="2" stroke="white" stroke-width="1.5" stroke-linejoin="round" />
                        <path d="M3 12H11" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                    </span>
                </button>
                <router-link to="/tabs/special">
                    <button class="button-share-element" style="padding-right: 0 !important; margin-right: 0 !important;">
                        <span class="icon icon-share">
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="1" y1="14" 
                                x2="13" y2="1" 
                                stroke="white" 
                                stroke-width="2"/>
                            <line x1="1" y1="1" 
                                x2="14" y2="14" 
                                stroke="white" 
                                stroke-width="2"/>
                        </svg>
                        </span>
                    </button>
                </router-link>
                </div>
            </div>
            <div class="cam-container">
                <div class="video">
                <video src="https://www.dropbox.com/s/se8r4svvnt2qpfu/example-video-2.mp4?raw=1" autoplay playsinline muted loop></video>
                </div>
                <div class="content">
                <span class="name">You</span>
                </div>
            </div>
            </div>
        </div>
        </section>
    </ion-page>
  </template>
  
  <style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;600;700;800&display=swap");
.fullscreen-media-container {
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.fullscreen-media-container.video {
  position: relative;
}
.fullscreen-media-container.video video {
  width: 100vw;
  height: 100vh;
  -o-object-fit: cover;
     object-fit: cover;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
}
.fullscreen-media-container .overlay-content-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  padding: 0 30px 30px;
  display: flex;
}
.fullscreen-media-container .partner-text-container {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.fullscreen-media-container .partner-text-container button {
  margin-right: 15px;
  pointer-events: none;
}
.fullscreen-media-container .partner-text-container .name {
  display: block;
}
.fullscreen-media-container .cam-container {
  flex-basis: 0%;
  flex-grow: 1;
  width: 100%;
  max-width: 320px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  box-shadow: 0px 20px 20px -10px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease-in-out;
  transform-origin: 100% 100%;
}
.fullscreen-media-container .cam-container .content {
  position: absolute;
  left: 20px;
  bottom: 20px;
  z-index: 2;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.fullscreen-media-container .cam-container .content .name {
  display: block;
}
.fullscreen-media-container .cam-container .video {
  position: relative;
  padding-bottom: 56.25%;
}
.fullscreen-media-container .cam-container .video video {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
}
.fullscreen-media-container .cam-container .video::after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
  transition: opacity cubic-bezier(0.445, 0.05, 0.55, 0.95);
  background-color: #272727;
}
.fullscreen-media-container .cam-container.disabled {
  transform: translate(400px, 0);
  opacity: 0.1;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
}
.fullscreen-media-container .cam-container.disabled .video {
  opacity: 0.2;
}
.fullscreen-media-container .cam-container.disabled .video::after {
  opacity: 1;
}
.fullscreen-media-container .ui-container {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: row;
}
.fullscreen-media-container .ui-container .navigation-controls-container {
  padding: 12px 15px;
  border-radius: 120px;
  width: auto;
  display: flex;
  flex-direction: row;
  -webkit-backdrop-filter: blur(8px);
          backdrop-filter: blur(8px);
  background-color: rgba(255, 255, 255, 0.05);
  transform: translateZ(0);
}
@supports not ((-webkit-backdrop-filter: blur(8px)) or (backdrop-filter: blur(8px))) {
  .fullscreen-media-container .ui-container .navigation-controls-container {
    background-color: rgba(0, 0, 0, 0.35);
  }
}

span.name {
  font-size: 14px;
  line-height: 16px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 600;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

button {
  all: unset;
  cursor: pointer;
  width: 44px;
  height: 44px;
}
button.size-s {
  width: 28px;
  height: 28px;
}
button[class*=-cam-element], button[class*=-mic-element], button[class*=-share-element] {
  margin-right: 15px;
  border-radius: 70px;
  -webkit-backdrop-filter: blur(8px);
          backdrop-filter: blur(8px);
  transform: translateZ(0);
  background-color: rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.15s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}
button[class*=-cam-element].active, button[class*=-mic-element].active, button[class*=-share-element].active {
  background-color: #f8175a;
}
button[class*=-cam-element]:hover, button[class*=-mic-element]:hover, button[class*=-share-element]:hover {
  transform: scale(1.08);
}
button[class*=-share-element].active {
  background-color: #034ff4;
}
button[class*=-settings] {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
button[class*=-settings] span {
  width: 100%;
  max-width: 18px;
  height: 2px;
  border-radius: 10px;
  background-color: #fff;
  position: relative;
}
button[class*=-settings] span::before, button[class*=-settings] span::after {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  background-color: #fff;
  border-radius: 10px;
  transform-origin: 0 100%;
  transition: all 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}
button[class*=-settings] span::before {
  top: -6px;
}
button[class*=-settings] span::after {
  bottom: -6px;
}
button[class*=-settings]:hover span::before {
  transform: scaleX(0.5);
}
button span.icon {
  display: flex;
}
button span.icon svg [class*=inactive],
button span.icon span[class*=hide] {
  visibility: hidden;
}
button span.icon.active svg [class*=inactive],
button span.icon.active span[class*=hide] {
  visibility: visible;
}

@media (max-width: 1024px) {
  .fullscreen-media-container .overlay-content-container {
    height: 100%;
    padding: 20px;
    flex-direction: column;
    justify-content: space-between;
  }
  .fullscreen-media-container .overlay-content-container .cam-container {
    display: none;
  }
  .fullscreen-media-container .overlay-content-container .ui-container {
    margin: 0 auto;
  }
}
@media (min-width: 1024px) {
  .fullscreen-media-container .overlay-content-container {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
  .fullscreen-media-container .overlay-content-container .ui-container {
    flex-basis: 0%;
    flex-grow: 1;
    margin: 0 auto;
  }
  .fullscreen-media-container .overlay-content-container .partner-text-container {
    flex-basis: 0%;
    flex-grow: 1;
  }
}
.flex-col {
  display: flex;
  flex-wrap: wrap;
}

.box-start {
  justify-content: flex-start;
}

.box-end {
  justify-content: flex-end;
}

.box-center {
  justify-content: center;
}

.box-align-center {
  align-items: center;
}

.box-align-start {
  align-items: flex-start;
}

.box-align-end {
  align-items: flex-end;
}

@media (max-width: 767px) {
  .col {
    padding: 0 20px;
  }

  .row-inner {
    margin: -20px;
  }
}
@media (min-width: 768px) {
  .col {
    padding: 0 20px;
  }

  .row-inner {
    margin: -20px;
  }
}
.xs-1 {
  width: 8.3333333333%;
}

.xs-2 {
  width: 16.6666666667%;
}

.xs-3 {
  width: 25%;
}

.xs-4 {
  width: 33.3333333333%;
}

.xs-5 {
  width: 41.6666666667%;
}

.xs-6 {
  width: 50%;
}

.xs-7 {
  width: 58.3333333333%;
}

.xs-8 {
  width: 66.6666666667%;
}

.xs-9 {
  width: 75%;
}

.xs-10 {
  width: 83.3333333333%;
}

.xs-11 {
  width: 91.6666666667%;
}

.xs-12 {
  width: 100%;
}

@media (min-width: 420px) {
  .s-1 {
    width: 8.3333333333%;
  }

  .s-2 {
    width: 16.6666666667%;
  }

  .s-3 {
    width: 25%;
  }

  .s-4 {
    width: 33.3333333333%;
  }

  .s-5 {
    width: 41.6666666667%;
  }

  .s-6 {
    width: 50%;
  }

  .s-7 {
    width: 58.3333333333%;
  }

  .s-8 {
    width: 66.6666666667%;
  }

  .s-9 {
    width: 75%;
  }

  .s-10 {
    width: 83.3333333333%;
  }

  .s-11 {
    width: 91.6666666667%;
  }

  .s-12 {
    width: 100%;
  }
}
@media (min-width: 768px) {
  .m-1 {
    width: 8.3333333333%;
  }

  .m-2 {
    width: 16.6666666667%;
  }

  .m-3 {
    width: 25%;
  }

  .m-4 {
    width: 33.3333333333%;
  }

  .m-5 {
    width: 41.6666666667%;
  }

  .m-6 {
    width: 50%;
  }

  .m-7 {
    width: 58.3333333333%;
  }

  .m-8 {
    width: 66.6666666667%;
  }

  .m-9 {
    width: 75%;
  }

  .m-10 {
    width: 83.3333333333%;
  }

  .m-11 {
    width: 91.6666666667%;
  }

  .m-12 {
    width: 100%;
  }
}
@media (min-width: 1024px) {
  .l-1 {
    width: 8.3333333333%;
  }

  .l-2 {
    width: 16.6666666667%;
  }

  .l-3 {
    width: 25%;
  }

  .l-4 {
    width: 33.3333333333%;
  }

  .l-5 {
    width: 41.6666666667%;
  }

  .l-6 {
    width: 50%;
  }

  .l-7 {
    width: 58.3333333333%;
  }

  .l-8 {
    width: 66.6666666667%;
  }

  .l-9 {
    width: 75%;
  }

  .l-10 {
    width: 83.3333333333%;
  }

  .l-11 {
    width: 91.6666666667%;
  }

  .l-12 {
    width: 100%;
  }
}
@media (min-width: 1220px) {
  .xl-1 {
    width: 8.3333333333%;
  }

  .xl-2 {
    width: 16.6666666667%;
  }

  .xl-3 {
    width: 25%;
  }

  .xl-4 {
    width: 33.3333333333%;
  }

  .xl-5 {
    width: 41.6666666667%;
  }

  .xl-6 {
    width: 50%;
  }

  .xl-7 {
    width: 58.3333333333%;
  }

  .xl-8 {
    width: 66.6666666667%;
  }

  .xl-9 {
    width: 75%;
  }

  .xl-10 {
    width: 83.3333333333%;
  }

  .xl-11 {
    width: 91.6666666667%;
  }

  .xl-12 {
    width: 100%;
  }
}
@media (min-width: 1660px) {
  .xxl-1 {
    width: 8.3333333333%;
  }

  .xxl-2 {
    width: 16.6666666667%;
  }

  .xxl-3 {
    width: 25%;
  }

  .xxl-4 {
    width: 33.3333333333%;
  }

  .xxl-5 {
    width: 41.6666666667%;
  }

  .xxl-6 {
    width: 50%;
  }

  .xxl-7 {
    width: 58.3333333333%;
  }

  .xxl-8 {
    width: 66.6666666667%;
  }

  .xxl-9 {
    width: 75%;
  }

  .xxl-10 {
    width: 83.3333333333%;
  }

  .xxl-11 {
    width: 91.6666666667%;
  }

  .xxl-12 {
    width: 100%;
  }
}
html {
  min-height: 100%;
  overflow-y: scroll;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

ul,
ol {
  list-style: none;
  margin: 0;
}

ul li,
ol li {
  padding: 0;
}

img {
  height: auto;
  max-width: 100%;
  display: block;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  width: 100%;
  height: 100%;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  scroll-behavior: smooth;
}

body {
  background-color: #080808;
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 320px;
  font-size: 18px;
  color: #fff;
}

section {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.content-size-sm {
  max-width: 780px;
  margin: 0 auto;
  width: 100%;
}

.content-size-m {
  max-width: 1024px;
  margin: 0 auto;
  width: 100%;
}

.content-size-sl {
  max-width: 1224px;
  margin: 0 auto;
  width: 100%;
}

.content-size-l {
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
}
  </style>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { IonPage } from '@ionic/vue';
  
  import ChatListElement from '../components/ChatListElement.vue'
  
  export default  defineComponent({
    name: 'Tab1Page',
    components: { IonPage},
    mounted(){
        const tabsEl = document.querySelector('ion-tab-bar');
        if (tabsEl) {
            tabsEl.hidden = true;
            tabsEl.style.height = "1";
        }
    }
  });
  </script>
  