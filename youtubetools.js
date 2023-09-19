// ==UserScript==
// @name        Youtube Tools
// @namespace   Violentmonkey Scripts
// @match       https://*.youtube.com/*
// @grant       none
// @version     1.5
// @author      Nobody
// @description 5/3/2023, 3:38:35 AM
// ==/UserScript==

// ==UserScript==
// @name         Youtube Tools
// @name:zh-TW   本地 YouTube 下載器
// @name:zh-HK   本地 YouTube 下載器
// @name:zh-CN   本地 YouTube 下载器
// @name:ja      ローカル YouTube ダウンローダー
// @name:kr      로컬 YouTube 다운로더
// @name:ar      Youtube Tools
// @name:bg      Youtube Tools
// @name:cs      Youtube Tools
// @name:da      Youtube Tools
// @name:de      Youtube Tools
// @name:el      Youtube Tools
// @name:eo      Youtube Tools
// @name:es      Youtube Tools
// @name:fi      Youtube Tools
// @name:fr      Youtube Tools
// @name:fr-CA   Youtube Tools
// @name:he      Youtube Tools
// @name:hu      Youtube Tools
// @name:id      Youtube Tools
// @name:it      Youtube Tools
// @name:ko      Youtube Tools
// @name:nb      Youtube Tools
// @name:nl      Youtube Tools
// @name:pl      Youtube Tools
// @name:pt-BR   Youtube Tools
// @name:ro      Youtube Tools
// @name:ru      Youtube Tools
// @name:sk      Youtube Tools
// @name:sr      Youtube Tools
// @name:sv      Youtube Tools
// @name:th      Youtube Tools
// @name:tr      Youtube Tools
// @name:uk      Youtube Tools
// @name:ug      Youtube Tools
// @name:vi      Youtube Tools
// @description         Youtube Tools
// @description:ar      Youtube Tools
// @description:bg      Youtube Tools
// @description:da      Youtube Tools
// @description:de      Youtube Tools
// @description:el      Youtube Tools
// @description:eo      Youtube Tools
// @description:fi      Youtube Tools
// @description:fr-CA   Youtube Tools
// @description:he      Youtube Tools
// @description:hu      Youtube Tools
// @description:id      Youtube Tools
// @description:it      Youtube Tools
// @description:ko      Youtube Tools
// @description:nb      Youtube Tools
// @description:nl      Youtube Tools
// @description:pl      Youtube Tools
// @description:pt-BR   Youtube Tools
// @description:ro      Youtube Tools
// @description:ru      Youtube Tools
// @description:sk      Youtube Tools
// @description:sr      Youtube Tools
// @description:sv      Youtube Tools
// @description:th      Youtube Tools
// @description:tr      Youtube Tools
// @description:uk      Youtube Tools
// @description:ug      Youtube Tools
// @description:vi      Youtube Tools
// @homepage
//               https://github.com/justinbondsf/
// @version      1.5
// @description        Youtube Tools
// @description:zh-TW  無需第三方服務即可下載 YouTube 視頻等。
// @description:zh-HK  無需第三方服務即可下載 YouTube 視頻等
// @description:zh-CN  无需通过第三方服务等即可下载 YouTube 视频
// @description:ja     外部サービスなどを使わずに YouTube 動画をダウンロード
// @description:kr     외부 서비스 등 없이 YouTube 동영상 다운로드
// @description:fr     Obtenez un lien brut de YouTube sans service externe. et de plus
// @description:cs     Stahujte videa z YouTube bez externích služeb. a více
// @description:en     Download MP4, MP3 without without external services.
// @description:es     Youtube Tools
// @author       Nobody
// @match        https://*.youtube.com/*
// @exclude      *://music.youtube.com/*
// @exclude      *://*.music.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        GM_info
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        unsafeWindow
// @run-at       document-end
// @compatible chrome
// @compatible firefox
// @compatible opera
// @compatible safari
// @compatible edge
// @license MIT
// @namespace https://github.com/justinbondsf
// ==/UserScript==

(function () {
    // Youtube tools by: justinbondsf
    // https://github.com/justinbondsf/Youtubetools

    "use strict";

    function paramsVideoURL() {
        const parametersURL = new URLSearchParams(window.location.search); // Url parameters
        return parametersURL.get("v");
    }

    function loadScript() {
        console.log("Scrip en ejecución by:  Nobody Facelift by: Nobody ");


        // alert('Script by: justinbondsf', cat)
        let ad = true;
        // Menu Buttons
        const menubuttons = `
            <meta http-equiv="Expires" content="0">
            <meta http-equiv="Last-Modified" content="0">
            <meta http-equiv="Cache-Control" content="no-cache, mustrevalidate">
            <meta http-equiv="Pragma" content="no-cache">
            <style>
            .Nobody:hover {
              cursor: pointer;
            }
            .Nobody{
              font-size: 10px;
            }
            #subscribe-button > ytd-subscribe-button-renderer > yt-button-shape > button:hover {
            zoom: 0.9;
            }
            .containerButtons {
              position: relative;
              display: flex;
              justify-content: center;
              flex-wrap: wrap;
              user-select: none;

            }
              .active{
              background-color: #999;
              box-shadow: 0 2px #666;
              transform: translateY(4px);

              }
              .active:hover{
                 background-color: #eee;

              }
               .containerButtons button:hover , input:hover{
                 background-color: #999}

              .containerButtons button:active, input:active {
              background-color: #999;
              box-shadow: 0 2px #666;
              transform: translateY(4px);
              }
              #repeatvideo:active{
                background-color: #999;
              box-shadow: 0 3px #999
              transform: translateY(2px);
              }
              #repeatvideo:hover{
                background-color: #999;
              }

            .containerButtons button , input , checkbox{



              display: flex;
              flex-direction: column-reverse;
              margin: 0 2px;
              align-items: center;
              cursor: pointer;
              border-radius: 0px;

            }
            .containerButtons h1, h2 {
              user-select: none;
            }
            #Nobody {
              animation: Nobody 10s infinite alternate;
              position: relative;
              transition: 4s;
            }


            .containerButtons input  {
              width: 50px;
              height: 40px;
              background-color: #fff;
              box-shadow: 0 3px #999;
            }



            .containerButtons button .containerButtons button svg  {
              width: 50px;
              height: 40px;
              box-shadow: 0 3px #999;
              background-color: #fff;
            }
            #color, #eyes {
              opacity:0;position:absolute;height: 93%;bottom: 0; top: 2px; width: 62px;
            }
                      /* width */
          ::-webkit-scrollbar {
            width: 4px;
            height: 10px;
          }

          /* Track */
          ::-webkit-scrollbar-track {
            background: #d5d5d5;

          }

          /* Handle */
          ::-webkit-scrollbar-thumb {
            background: #000;

          }

            .containerAll {
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .container .qualityButton {
              margin: 2px 2px;
              width: 50%;
            }
            .qualityButton:first-child {
              background-color: #0af;
            }
            .qualityButton:last-child {
              background-color: red;
              width: 100px;
            }
            .containerQuality , .qualityButton, .selectAudioQuality{
              width: 50%;
              height: 27.8px;
              background-color: #fff;
              color: #000;
              font-size: 25px;
              text-align: center;
              border: none;
              font-size: 20px;
              margin: 10px 10px;
            }
            .qualityButton {
              width: 70px;
              height: 30px;
              background-color: rgb(25, 25, 112);
              border: 0px solid #000;
              color: #fff;
              font-size: 20px;
              border-radius: 10px;
              margin: 2px 2px;
            }
            .qualityButton:hover, .bntcontainer:hover {
              cursor: pointer;
            }
            .hideFrame, .hideFrameAudio {
              display: none;
            }
            .progress-button:hover {
              background-color: #000;
            }

            .progress-button {
                display: inline-block;
                font-size: 1em;
                color: #fff ;
                text-decoration: none;
                line-height: 1;
                overflow: hidden;
                position: relative;
                text-align: center;
                width: 100%;
                height: 100%;
                box-shadow: 0 1px 1px #ccc;
                border-radius: 2px;
                cursor: pointer;
                background-color: #000;
            }

            #downloadButton:hover .progress-button {
                filter: brightness(95%);
            }

            .progress-button.in-progress,
            .progress-button.finished {
                color: red !;
            }

            .progress-button.in-progress:after,
            .progress-button.finished:after {
                position: absolute;
                z-index: 2;
                width: 100%;
                height: 100%;
                text-align: center;
                top: 0;
                padding-top: inherit;
                color: #fff !;
                left: 0;
            }

            .progress-button.in-progress:after {
                content: attr(data-loading);
            }

            .progress-button.finished:after {
                content: attr(data-finished);
            }

            .progress-button .tz-bar {
                background-color: #f00;
                height: 3px;
                bottom: 0;
                left: 0;
                width: 0;
                position: absolute;
                z-index: 1;
                border-radius: 0 0 2px 2px;
                -webkit-transition: width 0.5s, height 0.5s;
                -moz-transition: width 0.5s, height 0.5s;
                transition: width 0.5s, height 0.5s;
            }

            .progress-button .tz-bar.background-horizontal {
                height: 100%;
                border-radius: 2px;
            }

            .progress-button .tz-bar.background-vertical {
                height: 0;
                top: 0;
                width: 100%;
                border-radius: 2px;
            }

            .buttonTitle {
                font-size: 0.5em;
                margin-top: 4px;
            }

            #containerButton {
                height: 100px;
                text-align: center;

            }

            #containerButton:before {
                content: '';
                display: inline-block;
                vertical-align: middle;
                height: 100%;

            }


            #percentageText {
                width: 95%;
                display: inline-block;
                position: relative;
                vertical-align: middle;
                z-index: 3;
            }

            .headerbutton {
                position: fixed;
                top: 0;
                z-index: 1;
                width: 100%;
                background-color: #f1f1f1;
            }

            .progress-containerButton {
                width: 99%;
                height: 20px;
                background: #3e3e3c;
            }

            .progress-bar {
                height: 20px;
                background: #f00;
                width: 0%;
            }

            .grecaptcha-badge {
                visibility: hidden;
            }

             .on {
                position: fixed;
                inset: 1px;
                pointer-events: none;

                filter: brightness(95%);
              }



            </style>
            <body>

            <div class="container">
            <form>
            <div class="containerButtons">
              <div style="position:relative; display:inline-block ">

              <button type="button" class="btn btn-secondary"><img width="35" src="https://cdn-icons-png.flaticon.com/512/51/51443.png">
              <input id="color"  list="presetColors1" type="color" value="#ffffff" ></button></div>
              <datalist id="presetColors1">
              <option value="#ff00aa"/>
              <option value="#fbff00"/>
              <option value="#ff0000"/>
              <option value="#00ff00"/>
              <option value="#0000ff"/>
              </datalist>
              <button type="button"  id="invertir"> <img width="35" src="https://cdn-icons-png.flaticon.com/128/9385/9385968.png"></button>
              <button type="button"  id="background"> <img width="35" src="https://static.thenounproject.com/png/61592-200.png"></button>
              <button type="button"  id="reset"> <img width="35" src="https://cdn-icons-png.flaticon.com/512/9899/9899316.png"></button>

              <div style="position:relative; display:none ">
              <button type="button" class="btn btn-secondary"><img width="35" src="https://cdn-icons-png.flaticon.com/512/5946/5946143.png">//
              <input id="eyes" list="presetColors" type="color" value="#ffffff" ></button>
              <datalist id="presetColors">
              <option value="#000000"/>
              <option value="#fbff00"/>
              <option value="#ff0000"/>
              <option value="#00ff00"/>
              <option value="#0000ff"/>
              </datalist>
              </div>
              <button type="button"  id="repeatvideo"> <img class="imarepeat" width="35" src="https://cdn-icons-png.flaticon.com/512/32/32161.png"></button>
              <button type="button"  class="btn1"> <img width="35" src="https://cdn-icons-png.flaticon.com/512/1146/1146203.png"></button>
              <button type="button"  class="btn2"> <img width="35" src="https://cdn-icons-png.flaticon.com/512/1/1449.png"></button>
              <button type="button"  class="btn3"> <img width="35" src="https://cdn-icons-png.flaticon.com/512/800/800878.png"></button>
              </div>
              <div>
              </div>
            </form>
            <div id="ojosprotect" style="position: fixed; pointer-events: none; width: 100%; height: 100%; left: 0px; top: 0px; opacity: 0.2; z-index: 10; display: block;"></div>
            </div>

            <form class="downloadForm" action="">
            <div class="containerAll">
            <select class="containerQuality  hideFrame" required>
              <option selected disabled>Video Codec/Quality</option>
              <option value="360">360p</option>
              <option value="480">480p</option>
              <option value="720">720p</option>
              <option value="1080">1080p</option>
              <option value="4k">2160p 4K</option>
              <option value="8k">4320p 8K</option>
              </select>
              <iframe id="downloading"  style="z-index: 99; border: none; height: 27.4px; width: 50%;"  class="containerAll hideFrame" src="" frameborder="0"></iframe>
            </div>
            </form>
            <form class="downloadFormAudio" action="">
            <div class="containerAll">
            <select class="selectAudioQuality hideFrameAudio" required>
              <option selected disabled> Audio Codec/Quality</option>
              <option value="flac">FLAC UHQ</option>
              <option value="wav">WAV UHQ</option>
              <option value="mp3">MP3</option>
              <option value="m4a">M4A</option>
              <option value="aac">AAC</option>
              <option value="opus">OPUS</option>
              <option value="ogg">OGG</option>
            </select>
              <iframe id="downloadingmp3"  style="z-index: 99; border: none; height: 27.4px; width: 50%;"  class="containerAll hideFrameAudio" src="" frameborder="0"></iframe>
            </div>
            </form>
            </a>
            <center>
            </center>
            </body>
            `;




        const addDislike = document.createElement("P"); // text count dislikes
        let validbuttons = true;
        // TODO: Inicia y inserta los buttons
        setInterval(() => {
            // se repite  1 vez



            const addButton = document.querySelector(".style-scope .ytd-watch-metadata");
            if (addButton != undefined && validbuttons) {
                validbuttons = false;
                addButton.insertAdjacentHTML("beforebegin", menubuttons);
                // document.querySelector("video").style.borderRadius = "30px";
                // form de buttons para downloadr
                const downloadForm = document.querySelector(".downloadForm");
                const downloadFormAudio = document.querySelector(".downloadFormAudio");
                const framedownload = document.querySelector("#downloading");
                const framedownloadmp3 = document.querySelector("#downloadingmp3");
                downloadForm.addEventListener('click', e => {
                    e.preventDefault();
                });
                downloadFormAudio.addEventListener('click', e => {
                    e.preventDefault();
                });
                const btn1mp4 = document.querySelector(".btn1");
                const btn2mp3 = document.querySelector(".btn2");
                const btn3cancel = document.querySelector(".btn3");
                const containerQuality = document.querySelector(".containerQuality");
                const selectAudioQuality = document.querySelector(".selectAudioQuality");

                containerQuality.addEventListener("change", (e) => {
                    framedownload.src = `https://loader.to/api/button/?url=${window.location.href}&f=${e.target.value}&color=0af`;
                    framedownload.classList.remove("hideFrame");
                });

                selectAudioQuality.addEventListener("change", (e) => {
                    framedownloadmp3.src = `https://loader.to/api/button/?url=${window.location.href}&f=${e.target.value}&color=0af`;
                    // console.log(e.target.value)
                    framedownloadmp3.classList.remove("hideFrameAudio");
                });

                btn3cancel.onclick = () => {
                    downloadForm.style.display = "none";
                    downloadFormAudio.style.display = "none";
                    btn2mp3.classList.remove("active");
                    btn1mp4.classList.remove("active");


                }

                btn1mp4.onclick = () => {
                    containerQuality.classList.remove("hideFrame");
                    framedownload.classList.add("hideFrame");
                    downloadForm.classList.remove("hideFrame");
                    downloadForm.style.display = ""
                    selectAudioQuality.classList.add("hideFrameAudio");
                    downloadFormAudio.classList.add("hideFrame");
                    downloadForm.reset();

                      if (btn1mp4.classList.contains("active")){
                        btn1mp4.classList.remove("active");
                      } else {
                        btn2mp3.classList.remove("active");
                        btn1mp4.classList.add("active");
                      }

                };
                btn2mp3.onclick = () => {
                    downloadFormAudio.classList.remove("hideFrame");
                    downloadForm.classList.add("hideFrame");
                    framedownloadmp3.classList.remove("hideFrameAudio");
                    downloadFormAudio.style.display = ""
                    selectAudioQuality.classList.remove("hideFrameAudio");
                    framedownloadmp3.classList.add("hideFrameAudio")
                    downloadFormAudio.reset();

                  if (btn2mp3.classList.contains("active")){
                        btn2mp3.classList.remove("active");
                      } else {
                        btn1mp4.classList.remove("active");
                        btn2mp3.classList.add("active");
                      }

                };

                const reverse = document.querySelector("#columns"); // Invertir contenido
                const btnReset = document.querySelector("#reset"); // Reset button
                const InputColor = document.querySelector("#color"); // Input color
                const btnimage = document.querySelector("#image"); // Download image video
                const formButtons = document.querySelector("#eyes"); // Filtro de pantalla
                const btnbackground = document.querySelector("#background"); // background cinematica completa
                const invertirVista = document.querySelector("#invertir"); // Intercambiar vista
                const active = document.querySelector(".active")
                const buttonsVideo = document.querySelector(
                    "#top-row.ytd-watch-metadata"
                ); // buttons para video

                reverse.style.flexDirection = "row";
                buttonsVideo.style = "display: flex;flex-direction: column;justify-content: center;align-items: center ;";
                document.querySelector("#title > h1").style = "text-align: center; color: red;";
                document.querySelector("#owner").style.justifyContent = "center";
                //document.querySelector("#search-icon-legacy.ytd-searchbox").style.backgroundColor = "gray";


                let countViewRow = 0; // Count
                invertirVista.onclick = () => {
                    countViewRow += 1;
                    switch (countViewRow) {
                        case 1:
                            reverse.style.flexDirection = "row-reverse";
                            break;
                        case 2:
                            reverse.style.flexDirection = "row";
                            countViewRow = 0;
                            break;
                    }
                };


                // valid modo oscuro y venta de video
                // Repeat video button
                let countRepeat = 0; // count
                const repeat = document.querySelector("#repeatvideo"); // Repeat button
                const imarepeat = document.querySelector(".imarepeat"); // img repeat
                const videoFull = document.querySelector("#movie_player > div.html5-video-container > video")
                const loop = document.querySelector("#repeatvideo")
                repeat.onclick = () => {
                    if (document.querySelector("#cinematics > div") != undefined || videoFull != undefined) {
                        countRepeat += 1;
                      loop.classList.remove("active")
                      if (loop.classList.contains("active")){
                        loop.classList.remove("active")
                      } else {
                        loop.classList.add("active")
                      }



                        setInterval(() => {
                            const videoRepeat = document.querySelector("video");// vIDEO PLAYER
                            let aux = videoRepeat.duration - 2;
                            const buttonLeft = document.querySelector("#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-left-controls > a.ytp-prev-button.ytp-button");
                            switch (countRepeat) {
                                case 1:
                                    if (videoRepeat.duration) {
                                        if (videoRepeat.currentTime >= aux) {
                                            videoRepeat.currentTime = 0;
                                            buttonLeft.click();

                                        }

                                      imarepeat.src = "https://cdn-icons-png.flaticon.com/512/32/32161.png";// icon

                                      // button pressed in, toggled


                                    }
                                    break;
                                case 2:
                                     imarepeat.src = "https://cdn-icons-png.flaticon.com/512/32/32161.png";
                                      loop.classList.remove("active")
                                    countRepeat = 0;

                                //    repeat.style = "filter: brightness(100%);inset: inherit; size: 100%";


                                    break;
                            }
                        }, 1000);
                    } else {
                        showAlert('Active Dark Theme in Youtube page')
                    }
                };
                // Background transparent
                btnbackground.onclick = function () {

                    if (document.querySelector("#cinematics > div") != undefined && videoFull != undefined) {
                        document.querySelector("#cinematics > div").style = "position: fixed; inset: 0px; pointer-events: none; transform: scale(1.5, 2)";
                        document.querySelector("#cinematics > div > canvas:nth-child(1)").style = "position: absolute; width: 100%; height: 100vh;";
                        document.querySelector("#cinematics > div > canvas:nth-child(2)").style = "position: absolute; width: 100vw; height: 100%; opacity: 0.2;";
                        document.querySelector("html[dark] [dark]").style.backgroundColor = "transparent";
                        document.body.style.setProperty("--yt-spec-general-background-a", "transparent");
                        document.querySelector("ytd-playlist-panel-renderer[modern-panels]:not([within-miniplayer]) #container.ytd-playlist-panel-renderer").style = "border: 3px solid red; background-color: #352e2e29";
                    } else if (document.querySelector("#cinematics > div") === null) {
                        alert('NOT support live video And Theme Light')
                    }

                    else {
                        showAlert('Active Dark Theme in Youtube page')
                    }
                };

                btnReset.addEventListener('click', function () {
                    localStorage.clear();
                    if (document.querySelector("#cinematics > div") != undefined) {

                        document.body.style.setProperty("--yt-spec-text-primary", "#ffffff");
                        // document.body.style.setProperty('--yt-spec-text-secondary', '#ffffff');
                        document.body.style.setProperty("--yt-spec-static-overlay-background-brand", "#ffffff");
                        document.body.style.setProperty("--yt-spec-static-overlay-background-brand", "red");
                        document.querySelector("#cinematics > div").style = "position: relative; inset: 0px; pointer-events: none; background: transparent";
                        document.body.style.setProperty("--yt-spec-static-brand-red", "#ff0000");
                        document.body.style.setProperty("--yt-spec-static-brand-white", "gray");
                        document.querySelector("#ojosprotect").style.backgroundColor = "transparent";
                        // document.body.style.setProperty("--ytd-searchbox-legacy-border-color", "#ffffff");
                        document.querySelector("#logo-icon").style.color = "#ffffff";
                        document.body.style.setProperty("--yt-spec-general-background-a", "#000000");
                        document.querySelector("html[dark] [dark]").style.backgroundColor = "#000000";
                        document.querySelector("ytd-playlist-panel-renderer[modern-panels]:not([within-miniplayer]) #container.ytd-playlist-panel-renderer").style = "";
                        document.querySelector(".active").classList.remove("")

                    } else if (document.querySelector("#cinematics > div") === null) {
                        document.body.style.setProperty("--yt-spec-text-primary", "#000");
                        document.body.style.setProperty("--yt-spec-static-brand-red", "#ff0000");
                        document.body.style.setProperty("--yt-spec-static-brand-white", "#fff");
                        document.querySelector("#ojosprotect").style.backgroundColor = "transparent";
                        document.querySelector("#logo-icon").style.color = "#000";
                        document.querySelector("ytd-playlist-panel-renderer[modern-panels]:not([within-miniplayer]) #container.ytd-playlist-panel-renderer").style = "";
                        active.classList.remove("active");
                    }

                    else {
                        showAlert('Active Dark Theme in Youtube page')
                    }
                })
                reverse.style.flexDirection = "row";

                btnimage.onclick = () => {
                    if (document.querySelector("#cinematics > div") != undefined || videoFull != undefined) {
                        const parametersURL = new URLSearchParams(window.location.search); // Url parameters
                        let enlace;
                        enlace = parametersURL.get("v");
                        window.open(
                            `https://i.ytimg.com/vi/${enlace}/maxresdefault.jpg`,
                            "popUpWindow",
                            "height=500,width=400,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes"
                        );
                    } else {
                        showAlert('Active Dark Theme in Youtube page')
                    }
                };
                // Input color
                InputColor.addEventListener("input", function () {
                    localStorage.setItem('colorTextPage', InputColor.value);
                    const colorTextPage = localStorage.getItem('colorTextPage');
                    //   console.log(colorTextPage);
                    if (document.querySelector("#cinematics > div") != undefined || videoFull != undefined) {
                        document.body.style.setProperty("--yt-spec-text-primary", colorTextPage);
                        //document.body.style.setProperty("--yt-spec-text-secondary", "#ffffff");
                        document.body.style.setProperty("--yt-spec-static-overlay-background-brand", colorTextPage);
                        document.body.style.setProperty("--yt-spec-static-brand-red", colorTextPage);
                        //document.body.style.setProperty("--yt-spec-static-brand-white", colorTextPage);
                        document.querySelector("#logo-icon").style.color = colorTextPage;
                        document.querySelector("#subscribe-button > ytd-subscribe-button-renderer > yt-button-shape > button").style = "color: black; background-color: white; border: 2px solid black; ";

                    } else {
                        showAlert('Active Dark Theme in Youtube page')
                    }

                });

                // Filtro de pantalla
                formButtons.addEventListener("input", function () {
                    if (document.querySelector("#cinematics > div") != undefined || videoFull != undefined) {
                        document.querySelector("#ojosprotect").style.backgroundColor =
                            formButtons.value;
                    } else {
                        showAlert('Active Dark Theme in Youtube page')
                    }
                });

            }

            //

        }, 1000); // Termina setIterval


        // Función para link github project
        const existeFormButton = document.querySelector("#below > ytd-watch-metadata > div.container > form");

        function Nobody() {
            if (!existeFormButton) {
                const Nobody = document.querySelector("#Nobody");
                const sms = document.querySelector("#below > ytd-watch-metadata");
                if (!Nobody) {
                    if (sms != undefined) {
                        const Nobody = document.createElement("P");
                        Nobody.innerHTML = '<a id="Nobody" target="_blank" style="margin: 10px 0; font-size: 14px; color: #24ff; text-decoration: none; display: flex; align-items: center; justify-content: center; font-style: italic;font-weight: 700;" href="https://github.com/justinbondsf/Youtubetools">GitHub Repository<h4></h4</a>';
                        sms.appendChild(Nobody);
                    }
                }
            }
        }
        // Función para adaptar dislikes
        let validUrl = document.location.href;
        async function loadDislikes() {
            const enlace = paramsVideoURL();
            validUrl = document.location.href;
            const btnDislike = document.querySelector("#segmented-dislike-button yt-button-shape > button");
            const validWindow = document.querySelector("#below > ytd-watch-metadata > div.container > form > div.containerButtons");
            const result = document.querySelector("#segmented-dislike-button > ytd-toggle-button-renderer > yt-button-shape > button > yt-touch-feedback-shape");
            if (
                validUrl.split("/")[3] !== "shorts" &&
                validWindow != undefined &&
                validUrl != "https://www.youtube.com/"
            ) {
                const url = `https://returnyoutubedislikeapi.com/Votes?videoId=${enlace}`;
                try {
                    const respuesta = await fetch(url);
                    const data = await respuesta.json();
                    const {
                        dislikes,
                        dateCreated,
                        rating
                    } = data; // Objeto
                    addDislike.textContent = `${FormatNumber(dislikes, 0)}`;
                    btnDislike.style = "width: 100px";
                    result.style = "margin: 0 6px";
                    result.insertAdjacentElement("afterend", addDislike);
                    const iconLike = document.querySelector("#segmented-like-button > ytd-toggle-button-renderer > yt-button-shape > button > div.yt-spec-button-shape-next__icon > yt-icon > yt-animated-icon");
                    const inconDislike = document.querySelector("#segmented-dislike-button > ytd-toggle-button-renderer > yt-button-shape > button > div > yt-icon");
                    if (iconLike != undefined && iconLike != inconDislike) {
                        document.querySelector("#segmented-like-button > ytd-toggle-button-renderer > yt-button-shape > button > div.yt-spec-button-shape-next__icon > yt-icon > yt-animated-icon").innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
          <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
          </svg>`;
                        document.querySelector("#segmented-dislike-button > ytd-toggle-button-renderer > yt-button-shape > button > div > yt-icon").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
          <path d="M15.73 5.25h1.035A7.465 7.465 0 0118 9.375a7.465 7.465 0 01-1.235 4.125h-.148c-.806 0-1.534.446-2.031 1.08a9.04 9.04 0 01-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.498 4.498 0 00-.322 1.672V21a.75.75 0 01-.75.75 2.25 2.25 0 01-2.25-2.25c0-1.152.26-2.243.723-3.218C7.74 15.724 7.366 15 6.748 15H3.622c-1.026 0-1.945-.694-2.054-1.715A12.134 12.134 0 011.5 12c0-2.848.992-5.464 2.649-7.521.388-.482.987-.729 1.605-.729H9.77a4.5 4.5 0 011.423.23l3.114 1.04a4.5 4.5 0 001.423.23zM21.669 13.773c.536-1.362.831-2.845.831-4.398 0-1.22-.182-2.398-.52-3.507-.26-.85-1.084-1.368-1.973-1.368H19.1c-.445 0-.72.498-.523.898.591 1.2.924 2.55.924 3.977a8.959 8.959 0 01-1.302 4.666c-.245.403.028.959.5.959h1.053c.832 0 1.612-.453 1.918-1.227z" />
        </svg>
        `;
                    }


                } catch (error) {
                    // Error
                    console.log(error);
                }
            }

        }
        // Función para formatear los dislikes
        function FormatNumber(num, digits) {
            const lookup = [{
                value: 1,
                symbol: "",
            },
            {
                value: 1e3,
                symbol: " K",
            },
            {
                value: 1e6,
                symbol: " M",
            },
            ];
            const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
            const item = lookup
                .slice()
                .reverse()
                .find((item) => {
                    return num >= item.value;
                });
            return item ?
                (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol :
                "0";
        }

        // Show the dislikes on YT shorts
        async function shortDislike() {
            validUrl = document.location.href;
            const validWindowShort = document.querySelectorAll(
                "#dislike-button > yt-button-shape > label > div > span"
            );
            if (
                validWindowShort != undefined &&
                document.location.href.split("/")[3] === "shorts"
            ) {
                validUrl = document.location.href.split("/")[4];
                const urlShorts = `https://returnyoutubedislikeapi.com/Votes?videoId=${validUrl}`;
                try {
                    const respuesta = await fetch(urlShorts);
                    const dataShort = await respuesta.json();
                    const {
                        dislikes
                    } = dataShort;
                    for (var i = 0; i < validWindowShort.length; i++) {
                        validWindowShort[i].textContent = `${FormatNumber(
                            dislikes,
                            0
                        )}`;
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }

        // Mshow obscure mode alert window
        function showAlert(message) {
            alert('Active Dark Theme in Youtube page')
            const addButton = document.querySelector(
                "#below > ytd-watch-metadata > div.container > form"
            );
            const existeAlerta = document.querySelector(".alerta");
            if (!existeAlerta) {
                if (addButton != undefined) {
                    const modeDark = document.createElement("P");
                    modeDark.innerHTML = `<h1 class="alerta" style="color: red; background-color: white; border: 2px solid white; text-aling: center; display: flex;  align-items: center; justify-content: center;">${message}</h1>`;
                    addButton.appendChild(modeDark);
                    setTimeout(() => {
                        modeDark.remove();
                    }, 7000);
                }
            }
        }
        // Función para eliminar los posibles anuncios
        function blockAds() {
            // Skip ads video / saltar publicidad
            const buttonSkip = document.querySelector(".ytp-ad-skip-button.ytp-button");
            const validated = undefined;
            let ytpminiplayerscrim = document.querySelector("ytp-miniplayer-scrim");
            let cross = document.getElementsByClassName("ytp-ad-overlay-close-container")[0];
            let skip = document.getElementsByClassName("ytp-ad-skip-button")[0];
            let ad1 = document.querySelector("#contents > ytd-promoted-sparkles-web-renderer");
            let ad2 = document.querySelector("#player-ads > ytd-player-legacy-desktop-watch-ads-renderer");
            let ad3 = document.querySelector("#action-companion-click-target");
            let ad4 = document.querySelector("#player-overlay\\:0 > div.ytp-ad-player-overlay-flyout-cta.ytp-ad-player-overlay-flyout-cta-rounded");
            let ad5 = document.querySelector("#invideo-overlay\\:0 > div > div.ytp-ad-image-overlay");
            let ad6 = document.querySelector("#root");
            let ad7 = document.querySelector("#rendering-content > ytd-video-masthead-ad-v3-renderer");
            let ad8 = document.querySelector("#player-ads > ytd-player-legacy-desktop-watch-ads-renderer");
            let ad9 = document.querySelector(".ytp-ad-text-overlay");
            const adVideo = document.querySelectorAll(".ad-showing")[0];
            const adTimeVideo = document.querySelector(".ytp-ad-text.ytp-ad-preview-text");
            const video = document.querySelector("video");
            if (adVideo != validated && video != validated && adTimeVideo != validated) {
                video.currentTime = video.duration;
            }
            if (ytpminiplayerscrim != validated) alert("eliminado");
            if (ad1 != validated) ad1.remove();
            if (ad2 != validated) ad2.remove();
            if (ad3 != validated) ad3.remove();
            if (ad4 != validated) ad4.remove();
            if (ad5 != validated) ad5.remove();
            if (ad6 != validated && ad) {
                ad6.style.display = "none";
                ad = false;
            }
            if (ad7 != validated) ad7.remove();
            if (ad8 != validated) ad8.remove();
            if (ad9 != validated) ad9.remove();
            if (cross != validated) cross.click();
            if (skip != validated) skip.click();
            if (buttonSkip != validated) {
                buttonSkip.click();
            }
        }


        // Vvalidate url as it changes to a new one
        let prevUrl = undefined; // no change
        setInterval(() => {
            // URL changed
            const currUrl2 = window.location.href;
            const video = document.querySelector("#movie_player > div.html5-video-container > video")
            if (currUrl2 != prevUrl && video != undefined) {
                setTimeout(() => {
                    loadDislikes();
                }, 1000)
            }
            const currUrl = window.location.href;
            if (currUrl != prevUrl) {
                Nobody();
                loadDislikes();
                setTimeout(() => {
                    shortDislike();
                }, 1000)
                const downloadForm = document.querySelector(".downloadForm");
                const downloadFormAudio = document.querySelector(".downloadFormAudio");
                setTimeout(() => {
                    if (downloadForm != undefined) {
                        downloadForm.classList.add("hideFrame");
                        downloadFormAudio.classList.add("hideFrame");
                    }
                }, 500);
                prevUrl = currUrl;
                setTimeout(() => {
                    loadDislikes();
                }, 1000)
                setTimeout(() => {
                    loadDislikes();
                }, 1000)
            }

            const windowCommentsShort = document.querySelector("body > ytd-app > ytd-popup-container > tp-yt-paper-dialog > ytd-engagement-panel-section-list-renderer");
            const history = document.querySelectorAll("#shorts-inner-container");
            if (windowCommentsShort && history) {
                cleanHTML();
            }
            blockAds();
        }, 500); // runs every 2 seconds as url changes
        blockAds();
    }



    // Variables for translating comments
    let translated; // text translated
    let urlList; // Url list
    //TODO: Translate button for commentts
    async function translate() {
        const text = document.querySelectorAll("#content-text");
        let o = `?client=dict-chrome-ex&sl=auto&tl=${navigator.language}&q=`;
        for (let i = 0; i < text.length; i++) {
            const buttonTranslate = document.createElement("BUTTON");
            buttonTranslate.classList.add("Nobody");
            buttonTranslate.textContent = "Translate";
            buttonTranslate.style.backgroundColor = "white";
            buttonTranslate.style.color = "black";
            buttonTranslate.style.borderRadius = "5px";
            buttonTranslate.setAttribute("id", `btn${i}`);
            text[i].insertAdjacentElement("afterend", buttonTranslate);
            const Nobody = document.querySelectorAll(`.Nobody`);
            Nobody[i].onclick = function () {
                translated = o;
                urlList = translated + text[i].textContent;
                fetch("https://translate.googleapis.com/translate_a/t" + urlList) //API
                    .then((response) => response.json())
                    .then((data) => {
                        text[i].textContent = data[0][0];
                        Nobody[i].textContent = "Translated";
                    });
            };
        }
    }

    // clean buttons de comentarios
    function cleanHTML() {
        const buttons = document.querySelectorAll(".Nobody");
        [].forEach.call(buttons, function (buttons) {

            buttons.remove();

        });
        translate();
    }

    // TODO: mostrar button de traducir en comentarios cuando sean visibles
    window.onscroll = () => {
        const divEl = document.querySelector("#content-text");
        if (divEl != undefined) {
            cleanHTML();
        }
    };
    setTimeout(() => {
        loadScript();
    }, 2000);
})();
