updateSettings();
if (localStorage.getItem("doc-Scribe Notes Guide") == null) {
    localStorage.setItem("doc-Scribe Notes Guide", `<h1><strong>Welcome&nbsp;to&nbsp;Scribe&nbsp;Notes!</strong></h1><h3><strong>This&nbsp;document&nbsp;is&nbsp;an&nbsp;introduction&nbsp;to&nbsp;writing&nbsp;notes&nbsp;and&nbsp;flashcards&nbsp;in&nbsp;this&nbsp;app.</strong></h3><p></p><p></p><h1>Basic&nbsp;Document&nbsp;Manipulation</h1><ul><li><strong>Renaming&nbsp;Documents:&nbsp;</strong>Upon&nbsp;creating&nbsp;a&nbsp;new&nbsp;document,&nbsp;you&nbsp;will&nbsp;be&nbsp;presented&nbsp;with&nbsp;a&nbsp;page&nbsp;similar&nbsp;to&nbsp;this&nbsp;one.&nbsp;At&nbsp;the&nbsp;top&nbsp;of&nbsp;the&nbsp;page,&nbsp;you&nbsp;can&nbsp;find&nbsp;the&nbsp;title&nbsp;of&nbsp;your&nbsp;new&nbsp;document.&nbsp;To&nbsp;change&nbsp;it,&nbsp;find&nbsp;the&nbsp;document&nbsp;in&nbsp;the&nbsp;&quot;Books&quot;&nbsp;collapsible&nbsp;in&nbsp;its&nbsp;respective&nbsp;folder&nbsp;(documents&nbsp;appear&nbsp;in&nbsp;the&nbsp;&quot;Uncollected&quot;&nbsp;folder&nbsp;by&nbsp;default).&nbsp;Click&nbsp;the&nbsp;pencil&nbsp;icon&nbsp;to&nbsp;choose&nbsp;a&nbsp;new&nbsp;name.</li><li><strong>Deleting&nbsp;Documents:&nbsp;</strong>If&nbsp;you&nbsp;wish&nbsp;to&nbsp;delete&nbsp;a&nbsp;document,&nbsp;open&nbsp;the&nbsp;&quot;Books&quot;&nbsp;collapsible&nbsp;in&nbsp;the&nbsp;sidebar,&nbsp;navigate&nbsp;to&nbsp;its&nbsp;folder&nbsp;(documents&nbsp;appear&nbsp;in&nbsp;the&nbsp;&quot;Uncollected&quot;&nbsp;folder&nbsp;by&nbsp;default),&nbsp;and&nbsp;click&nbsp;the&nbsp;trash&nbsp;can&nbsp;icon.&nbsp;<strong>IMPORTANT:&nbsp;Deleted&nbsp;documents&nbsp;<em>cannot&nbsp;</em>be&nbsp;recovered!</strong></li><li><strong>Creating&nbsp;New&nbsp;Documents:&nbsp;</strong>To&nbsp;create&nbsp;a&nbsp;new&nbsp;document,&nbsp;open&nbsp;the&nbsp;&quot;Books&quot;&nbsp;collapsible&nbsp;in&nbsp;the&nbsp;sidebar&nbsp;and&nbsp;click&nbsp;the&nbsp;&quot;New&nbsp;Doc&quot;&nbsp;button.&nbsp;You&nbsp;will&nbsp;be&nbsp;prompted&nbsp;for&nbsp;the&nbsp;name&nbsp;of&nbsp;your&nbsp;new&nbsp;document.&nbsp;</li><li><strong>Creating&nbsp;New&nbsp;Folders:&nbsp;</strong>To&nbsp;create&nbsp;a&nbsp;new&nbsp;folder,&nbsp;open&nbsp;the&nbsp;&quot;Books&quot;&nbsp;collapsible&nbsp;in&nbsp;the&nbsp;sidebar&nbsp;and&nbsp;click&nbsp;the&nbsp;&quot;New&nbsp;Folder&quot;&nbsp;button.&nbsp;You&nbsp;will&nbsp;be&nbsp;prompted&nbsp;for&nbsp;the&nbsp;name&nbsp;of&nbsp;your&nbsp;new&nbsp;folder.</li><li><strong>Deleting&nbsp;Folders:&nbsp;</strong>If&nbsp;you&nbsp;wish&nbsp;to&nbsp;delete&nbsp;a&nbsp;folder,&nbsp;open&nbsp;the&nbsp;&quot;Books&quot;&nbsp;collapsible&nbsp;in&nbsp;the&nbsp;sidebar,&nbsp;locate&nbsp;the&nbsp;target&nbsp;folder,&nbsp;click&nbsp;the&nbsp;trash&nbsp;can&nbsp;icon,&nbsp;and&nbsp;confirm&nbsp;that&nbsp;you&nbsp;wish&nbsp;to&nbsp;delete&nbsp;it.</li><li><strong>Renaming&nbsp;Folders</strong>:&nbsp;To&nbsp;rename&nbsp;a&nbsp;folder,&nbsp;open&nbsp;the&nbsp;&quot;Books&quot;&nbsp;collapsible&nbsp;in&nbsp;the&nbsp;sidebar,&nbsp;locate&nbsp;the&nbsp;target&nbsp;folder,&nbsp;and&nbsp;click&nbsp;the&nbsp;pencil&nbsp;icon.&nbsp;You&nbsp;will&nbsp;be&nbsp;prompted&nbsp;for&nbsp;the&nbsp;new&nbsp;name&nbsp;of&nbsp;your&nbsp;folder.</li><li><strong>Moving&nbsp;Documents&nbsp;Between&nbsp;Folders:&nbsp;</strong>If&nbsp;you&nbsp;wish&nbsp;to&nbsp;relocate&nbsp;a&nbsp;document,&nbsp;ensure&nbsp;that&nbsp;both&nbsp;its&nbsp;current&nbsp;folder&nbsp;and&nbsp;its&nbsp;target&nbsp;folder&nbsp;are&nbsp;open.&nbsp;Drag&nbsp;the&nbsp;document&#39;s&nbsp;title&nbsp;from&nbsp;the&nbsp;current&nbsp;folder&nbsp;to&nbsp;the&nbsp;target&nbsp;folder.</li></ul><p></p><h1>Flashcards</h1><p>Flashcards&nbsp;are&nbsp;the&nbsp;defining&nbsp;feature&nbsp;of&nbsp;this&nbsp;notes&nbsp;program.&nbsp;They&nbsp;are&nbsp;directly&nbsp;integrated&nbsp;into&nbsp;the&nbsp;document&nbsp;itself&nbsp;through&nbsp;special&nbsp;formatting&nbsp;that&nbsp;can&nbsp;be&nbsp;included&nbsp;inside&nbsp;the&nbsp;body&nbsp;of&nbsp;your&nbsp;notes.&nbsp;To&nbsp;format&nbsp;a&nbsp;flashcard&nbsp;in&nbsp;this&nbsp;program,&nbsp;enclose&nbsp;the&nbsp;card&nbsp;in&nbsp;brackets&nbsp;and&nbsp;separate&nbsp;the&nbsp;term&nbsp;and&nbsp;definition&nbsp;with&nbsp;an&nbsp;equal&nbsp;sign.&nbsp;Here&nbsp;is&nbsp;an&nbsp;example:</p><pre data-language="plain">
[Example Term=Example Definition]
</pre><p>These&nbsp;flashcards&nbsp;can&nbsp;be&nbsp;directly&nbsp;integrated&nbsp;into&nbsp;your&nbsp;notes.&nbsp;For&nbsp;example,&nbsp;a&nbsp;section&nbsp;regarding&nbsp;photosynthesis:</p><pre data-language="plain">
- [Photosynthesis=The process by which organisms synthesize food for themselves with the energy of the sun]
- Photosynthesis is used by plants, algae, certain bacteria, and some marine animals
- [The process of photosynthesis takes place in an organelle called the = chloroplast]
</pre><p>Any&nbsp;extra&nbsp;flashcards&nbsp;that&nbsp;you&nbsp;would&nbsp;not&nbsp;like&nbsp;to&nbsp;directly&nbsp;integrate&nbsp;into&nbsp;your&nbsp;notes&nbsp;can&nbsp;be&nbsp;placed&nbsp;at&nbsp;the&nbsp;bottom&nbsp;of&nbsp;your&nbsp;document&nbsp;in&nbsp;a&nbsp;dedicated&nbsp;section.</p><p></p><p>Flashcards&nbsp;can&nbsp;be&nbsp;studied&nbsp;and&nbsp;viewed&nbsp;thusly:</p><ul><li><strong>View&nbsp;flashcards&nbsp;in&nbsp;your&nbsp;document:&nbsp;</strong>To&nbsp;view&nbsp;a&nbsp;list&nbsp;of&nbsp;flashcards&nbsp;currently&nbsp;in&nbsp;your&nbsp;document,&nbsp;open&nbsp;the&nbsp;collapsible&nbsp;side&nbsp;menu&nbsp;by&nbsp;clicking&nbsp;the&nbsp;arrow&nbsp;button&nbsp;at&nbsp;the&nbsp;bottom&nbsp;right&nbsp;corner&nbsp;of&nbsp;the&nbsp;screen.&nbsp;There,&nbsp;you&nbsp;can&nbsp;find&nbsp;your&nbsp;cards&nbsp;and&nbsp;a&nbsp;button&nbsp;to&nbsp;study&nbsp;them.</li><li><strong>Study&nbsp;your&nbsp;flashcards:&nbsp;</strong>To&nbsp;study&nbsp;your&nbsp;flashcards,&nbsp;you&nbsp;can&nbsp;either&nbsp;open&nbsp;the&nbsp;collapsible&nbsp;side&nbsp;menu&nbsp;by&nbsp;clicking&nbsp;the&nbsp;arrow&nbsp;button&nbsp;at&nbsp;the&nbsp;bottom-right&nbsp;corner&nbsp;of&nbsp;the&nbsp;screen&nbsp;and&nbsp;selecting&nbsp;the&nbsp;option&nbsp;to&nbsp;study&nbsp;the&nbsp;document,&nbsp;or&nbsp;you&nbsp;can&nbsp;navigate&nbsp;to&nbsp;the&nbsp;&quot;Study&quot;&nbsp;page&nbsp;on&nbsp;the&nbsp;left&nbsp;sidebar&nbsp;and&nbsp;select&nbsp;the&nbsp;document&nbsp;you&nbsp;would&nbsp;like&nbsp;to&nbsp;study.&nbsp;There&nbsp;are&nbsp;a&nbsp;few&nbsp;methods&nbsp;to&nbsp;study&nbsp;your&nbsp;flashcards,&nbsp;which&nbsp;can&nbsp;be&nbsp;selected&nbsp;in&nbsp;the&nbsp;&quot;Study&quot;&nbsp;page&#39;s&nbsp;settings&nbsp;overlay.</li></ul><p></p><p>There&nbsp;are&nbsp;three&nbsp;study&nbsp;modes&nbsp;to&nbsp;choose&nbsp;from&nbsp;on&nbsp;the&nbsp;&quot;Study&quot;&nbsp;page:</p><ul><li><strong>Normal:&nbsp;</strong>Flashcards&nbsp;are&nbsp;presented&nbsp;to&nbsp;the&nbsp;user&nbsp;normally.&nbsp;The&nbsp;user&nbsp;can&nbsp;flip&nbsp;the&nbsp;cards&nbsp;over&nbsp;and&nbsp;navigate&nbsp;back&nbsp;and&nbsp;forth.</li><li><strong>Track&nbsp;Progress:&nbsp;</strong>On&nbsp;each&nbsp;card,&nbsp;the&nbsp;user&nbsp;is&nbsp;prompted&nbsp;to&nbsp;confirm&nbsp;or&nbsp;deny&nbsp;that&nbsp;they&nbsp;remembered&nbsp;the&nbsp;card&#39;s&nbsp;definition.&nbsp;The&nbsp;set&nbsp;of&nbsp;flashcards&nbsp;cycles&nbsp;through&nbsp;all&nbsp;cards&nbsp;until&nbsp;all&nbsp;of&nbsp;them&nbsp;have&nbsp;been&nbsp;answered&nbsp;correctly&nbsp;at&nbsp;least&nbsp;once.</li><li><strong>Write:&nbsp;</strong>Flashcards&nbsp;are&nbsp;presented&nbsp;with&nbsp;a&nbsp;prompt&nbsp;for&nbsp;the&nbsp;card&#39;s&nbsp;definition&nbsp;below.&nbsp;This&nbsp;mode&nbsp;is&nbsp;similar&nbsp;to&nbsp;the&nbsp;&quot;Track&nbsp;Progress&quot;&nbsp;mode&nbsp;except&nbsp;for&nbsp;the&nbsp;text&nbsp;prompt&nbsp;that&nbsp;determines&nbsp;whether&nbsp;or&nbsp;not&nbsp;the&nbsp;user&nbsp;got&nbsp;it&nbsp;right.&nbsp;Different&nbsp;levels&nbsp;of&nbsp;strictness&nbsp;are&nbsp;available&nbsp;for&nbsp;how&nbsp;the&nbsp;correctness&nbsp;of&nbsp;the&nbsp;answer&nbsp;is&nbsp;determined.</li></ul><p></p><p></p><p></p><p></p>`);
}
const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote', 'code-block'],
  ['link', 'image', 'video', 'formula'],

  [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],
  [{ 'indent': '-1'}, { 'indent': '+1' }],

  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],
  [{ 'font': ['sans-serif','serif','monospace','montserrat','roboto','roboto-slab'] }],
  [{ 'align': [] }],

  ['clean'],['saveButton'],['loadButton']
];

var Font = Quill.import('formats/font');
Font.whitelist = ['serif', 'monospace', 'sans-serif', 'roboto', 'roboto-slab', 'montserrat'];
Quill.register(Font, true);

const quill = new Quill('#textBox', {
  theme: 'snow',
  modules: {
    toolbar: {
      container: toolbarOptions,
      handlers: {
        saveButton: function () {
          const range = this.quill.getSemanticHTML();
          setDocument(currentDoc,range);
          notif("Document saved!");
        },
        loadButton: function () {
            loadDocument(currentDoc);
            notif("Document loaded!");
        }
      }
    }
  }
});

var currentDoc = localStorage.getItem("latestDoc");
var creatingNewDoc = false;
var creatingNewFolder = false;
var renamingDoc = false;
var renamingName = "";
var currentDocCards = [];
var firstBooksCollapseUpdate = true;
var renamingNameFolder = null;
var folderStates = [];
var isSwitchingDocs = false;

function getDocument(name) {
    const key = `doc-${name}`;
    const output = localStorage.getItem(key);

    if (output !== null) {
        return output;
    } else {
        console.log(key);
        return 'Choose or create a doc inside the "Books" menu to get started!';
    }
}

function setDocument(name,value) {
    var previousText = localStorage.getItem(`doc-${name}`);
    if (!(previousText == null)) {
        previousText = previousText.replace(/<[^>]*>/g, '');
        var newText = value.replace(/<[^>]*>/g, '');
        var difference = newText.length - previousText.length;
        if (difference >= 1) {
            function getWords(val) {
                if (typeof val !== "string") return 0;
                const cleanVal = val.replace(/&nbsp;|\u00a0/g, " ").trim();
                const matches = cleanVal.match(/\S+/g);
                return matches ? matches.length : 0;
            }
                        
            var energy = Math.floor(difference);
            localStorage.setItem("energyChange",(Number(localStorage.getItem("energyChange")) + energy));
            
            var org = getCharacter();
            var finished = false;
            org.data.quests.weekly.forEach((item) => {
                if (!finished) {
                    if (item.type.category == "write") {
                        item.progress += getWords(newText) - getWords(previousText);
                        if (item.progress >= item.progressMax && !item.notified) {
                            notif("Quest completed: write " + item.progressMax + " words.");
                            item.notified = true;
                        }
                        finished = true;
                    }
                }
            });
            localStorage.setItem("characterInfo", JSON.stringify(org));
        }
    }
    
    localStorage.setItem(`doc-${name}`,value);
}

function loadDocument(name = currentDoc) {
    const headerElement = document.getElementById("docTitle");
    headerElement.textContent = name;
    var input = getDocument(name);
    quill.clipboard.dangerouslyPasteHTML(input);
    
    if (name == null) {return;}
    var list = JSON.parse(localStorage.getItem("docsHistory")) || [];
    if (list.includes(name)) {
        list.splice(list.indexOf(name),1);
    }
    list = [name].concat(list);
    updateCardTable();
    localStorage.setItem("docsHistory", JSON.stringify(list));
}

function toggleBooksCollapse() {
    updateBooksCollapse();
    const element = document.getElementById("booksCollapse");
    const img = document.getElementById("booksCollapseArrow");

    const height = window.getComputedStyle(element).height;
    if (height === "0px") {
        localStorage.setItem("booksCollapseState","true");
        element.style.height = element.scrollHeight + "px";
        img.style.transform = "rotate(180deg)";
        element.addEventListener("transitionend", function handler() {
            element.style.height = "auto";
            element.removeEventListener("transitionend", handler);
        });
    } else {
        localStorage.setItem("booksCollapseState","false");
        element.style.height = element.scrollHeight + "px";
        element.offsetHeight;
        element.style.height = "0px";
        img.style.transform = "rotate(90deg)";
    }
}

function toggleNewDocPrompt() {
    const a = document.getElementById("booksCollapse");
    a.style.height = "auto";
    updateBooksCollapse();
    const element = document.getElementById("newDocPrompt");

    const height = window.getComputedStyle(element).height;

    if (height === "0px") {
        element.style.height = element.scrollHeight + "px";
        terminateRenameDoc();
        document.getElementById("newDocInput").value = "";
    } else {
        element.style.height = "0px";
    }
}

function updateBooksCollapse() {
    var org = initializeDocOrg();
    const div = document.getElementById("booksCollapse");
    var outputHtml = "";    
    
    if (firstBooksCollapseUpdate) {
        if(localStorage.getItem("folderStates") == null) {
            for (let key in org) {
                folderStates.push([key,false]);
            }
        } else {
            folderStates = JSON.parse(localStorage.getItem("folderStates")) || [];
        }
        firstBooksCollapseUpdate = false;
    }

    Object.keys(org).filter(key => key !== "Uncollected").sort().forEach(key => {
            outputHtml += getFolder(key);
    });
    
    if (org["Uncollected"]) {
        outputHtml += getFolder("Uncollected");
    }
        
    outputHtml = outputHtml + "<p id='newDocButton' onclick='creatingNewDoc = !creatingNewDoc;toggleNewDocPrompt();' class='button'>+ New Doc</p><p id='newFolderButton' onclick='toggleNewFolderPrompt()' class='button'>+ New Folder</p>";
    div.innerHTML = outputHtml;
    localStorage.setItem("folderStates",JSON.stringify(folderStates));
    
    folderStates.forEach(item => {
        if(item[1]) {
            const el = document.getElementById("folderLinkDiv-"+item[0]);
            el.style.height = "0px";
            el.offsetHeight;
            el.style.height = el.scrollHeight + "px";

            el.addEventListener("transitionend", function handler() {
                el.style.height = "auto";
                el.removeEventListener("transitionend", handler);
            });
        }
    });
    
    document.querySelectorAll(".editFolderBtn").forEach(el => {
        el.addEventListener("click", () => {
            const name = decodeURIComponent(el.dataset.name);
            editFolderName(name);
        });
    });
    document.querySelectorAll(".docName").forEach(el => {
        el.addEventListener("click", () => {
            goToDoc(el.textContent);
        });
    });
    document.querySelectorAll(".folderLinkP").forEach(el => {
        el.addEventListener("click", () => {
            const folderLink = el.parentElement;
            const folderDiv = folderLink.nextElementSibling;
            toggleFolderDiv(folderDiv.id);
        });
    });
    
    function getFolder(name) {
        const list = org[name];
        const folderState = folderStates.find(f => f[0] === name);
        const open = folderState ? folderState[1] : false;
        if (name == "Uncollected") {
            var output = 
        `       <div id="folderLink-${name}" class="folderLink">                    
                    <p class="folderLinkP">${name}</p>
                    <img src="images/nav-arrow-up.svg" style="transform:${open ? "rotate(180deg)" : "rotate(90deg)"}" id="arrowImg-${name}" class="folderLinkArrow button folderLinkP">
                </div>
                <div id="folderLinkDiv-${name}" class="folderLinkDiv">`;
        } else {
            var output = 
        `       <div id="folderLink-${name}" class="folderLink"><p class="folderLinkP">${name}</p>
                    <img src="images/edit-pencil-small.svg" class="button" data-name="${encodeURIComponent(name)}" class="folderLinkEdit" onclick="editFolderName('${name}')">
                    <img src="images/trash.svg" class="button" onclick="editFolderDelete('${name}')">
                    <img src="images/nav-arrow-up.svg" style="transform:${open ? "rotate(180deg)" : "rotate(90deg)"}" id="arrowImg-${name}" class="folderLinkArrow button folderLinkP">
                </div>
                <div id="folderLinkDiv-${name}" class="folderLinkDiv">`;
        }

        if (list.length == 0) {
            output += "<div class='emptyFolderFiller button'><i>Empty Folder</i></div>";
        } else {
            list.forEach((doc) => {
                if (doc == "Scribe Notes Guide") {
                    output += `<div draggable='true' class='booksCollapseLink button' id='docLink-${doc}'><p class='docName button'>${doc}</p></div>`;
                } else {
                    output += `<div draggable='true' class='booksCollapseLink button' id='docLink-${doc}'><p class='docName button'>${doc}</p><img src="images/edit-pencil-small.svg" onclick='editDocName("${doc}")' class='booksCollapseLinkEdit button' draggable='false' /><img src="images/trash.svg" onclick='editDocDelete("${doc}")' class='booksCollapseLinkEdit button' draggable='false' /></div>`;
                }
            });
        }
        output += "</div>";
        return output;
    }
}

function clearStoredDocs() {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if(/^doc-/.test(key)) {
            localStorage.removeItem(key);
        }
    }
}

function newDocNameSubmit() {
    const inputEl = document.getElementById("newDocInput");
    const buttonEl = document.getElementById("newDocSubmit");
    var inputVal = inputEl.value;
    
    if (inputVal) {
        const key = `doc-${inputVal}`;
        const output = localStorage.getItem(key);

        if (output !== null) {
            buttonEl.textContent = "Name Taken";
        } else if (!/^[^'"].*[^'"]$/.test(inputVal)) {
            buttonEl.textContent = "Invalid Input"
        } else {
            inputVal = inputVal;
            const range = quill.getSemanticHTML();
            setDocument(currentDoc,range);
            currentDoc = inputVal;
            setDocument(currentDoc,"");
            var docOrg = initializeDocOrg();
            docOrg.Uncollected.push(inputVal);
            localStorage.setItem('docOrg',JSON.stringify(docOrg));
            creatingNewDoc = false;
            loadDocument(currentDoc);
            toggleNewDocPrompt();
            updateBooksCollapse();
        }
    } else {
        buttonEl.textContent = "No Input";
    }
}

function goToDoc(name) {
    const range = quill.getSemanticHTML(); 
    setDocument(currentDoc,range);
    currentDoc = name;
    loadDocument();
}

function editDocDelete(name) {
    if (confirm("Are you sure you would like to delete '"+name+"'?") == true) {
        localStorage.removeItem("doc-"+name);
        var docOrg = initializeDocOrg();
        for (let key in docOrg) {
            if (docOrg[key].includes(name)) {
                docOrg[key] = docOrg[key].filter(tag => tag !== name);
                break;
            }
        }
        localStorage.setItem('docOrg', JSON.stringify(docOrg));
        if(currentDoc == name) {
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (/^doc-/.test(key)) {
                    currentDoc = key.substr(4);
                    loadDocument();
                    break;
                }
            }
        }
        var list = JSON.parse(localStorage.getItem("docsHistory")) || [];
        if (list.includes(name)) {
            list.splice(list.indexOf(name),1);
        }
        localStorage.setItem("docsHistory", JSON.stringify(list));
        updateBooksCollapse();
    }
}

function editDocName(name) {
    if (renamingDoc || creatingNewDoc) {
        return;
    }
    
    setDocument(currentDoc,quill.getSemanticHTML());
    
    renamingName = name;
    var valid = false;
    const element = document.getElementById("docLink-"+name);
    element.insertAdjacentHTML("afterend", `<div id="renameDocPrompt"><input type="text" placeholder="Rename Doc" id="renameDocInput"><div id="renameDocButtons"><button id="renameDocSubmit" onclick="renameDocSubmit()" class="button">Submit</button><button id="renameDocCancel" onclick="terminateRenameDoc()" class="button">X</button></div></div>`);
    renamingDoc = true;
    const a = document.getElementById("booksCollapse");
    const editDocInput = document.getElementById("renameDocPrompt");
    editDocInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            renameDocSubmit();
        }
    });
}

function renameDocSubmit() {
    const inputEl = document.getElementById("renameDocInput");
    const buttonEl = document.getElementById("renameDocSubmit");
    var inputVal = inputEl.value;
    const divEl = document.getElementById("renameDocPrompt");
    
    if (inputVal) {
        const key = `doc-${inputVal}`;
        const output = localStorage.getItem(key);

        if (output !== null) {
            buttonEl.textContent = "Name Taken";
        } else {
            inputEl.value = "";
            var textboxContent = getDocument(renamingName);
            localStorage.removeItem("doc-"+renamingName);
            setDocument(inputVal,textboxContent);
            if (currentDoc == renamingName) {
                document.getElementById("docTitle").innerHTML = inputVal;
                
            }
            divEl.remove();
            var docOrg = initializeDocOrg();
            for (let key in docOrg) {
                if (docOrg[key].includes(renamingName)) {
                    docOrg[key][docOrg[key].indexOf(renamingName)] = inputVal;
                    break;
                }
            }
            localStorage.setItem('docOrg', JSON.stringify(docOrg));
            
            var list = JSON.parse(localStorage.getItem("docsHistory")) || [];
            if (list.includes(renamingName)) {
                list[list.indexOf(renamingName)] = inputVal;
            }
            localStorage.setItem("docsHistory", JSON.stringify(list));
            
            updateBooksCollapse();
            renamingDoc = false;
        }
    } else {
        buttonEl.textContent = "No Input";
    }
}

function terminateRenameDoc() {
    const divEl = document.getElementById("renameDocPrompt");
    if (divEl) {
        divEl.remove();
    }
    renamingDoc = false;
}

const newDocInput = document.getElementById("newDocInput");
newDocInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        newDocNameSubmit();
    }
});
const newFolderInput = document.getElementById("newFolderInput");
newFolderInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        newFolderNameSubmit();
    }
});

function toggleDocOptions() {
    const divEl = document.getElementById("docOptions");
    const buttonEl = document.getElementById("toggleDocOptions");

    if (divEl.classList.contains("closed")) {
        divEl.classList.remove("closed");
        buttonEl.style.transform = "rotate(180deg)";
    } else {
        divEl.classList.add("closed");
        buttonEl.style.transform = "rotate(0deg)";
    }
}

function initializeDocOrg() {
    const stored = localStorage.getItem('docOrg');

    if (stored !== null) {
        try {
            return JSON.parse(stored);
        } catch (e) {
            console.warn("Corrupted docOrg, resetting...");
        }
    }

    const array = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (/^doc-/.test(key)) {
            array.push(key.substr(4));
        }
    }

    const output = {
        "Uncollected": array
    };

    localStorage.setItem("docOrg", JSON.stringify(output));
    return output;
}

function toggleFolderDiv(id) {
    const el = document.getElementById(id);
    
    const img = document.getElementById("arrowImg-"+id.substr(14));
    

    if (el.style.height && el.style.height !== "0px") {
        el.style.height = el.scrollHeight + "px";
        el.offsetHeight;
        el.style.height = "0px";
        img.style.transform = "rotate(90deg)";
    } else {
        el.style.height = "0px";
        el.offsetHeight;
        el.style.height = el.scrollHeight + "px";
        img.style.transform = "rotate(180deg)";

        el.addEventListener("transitionend", function handler() {
            el.style.height = "auto";
            el.removeEventListener("transitionend", handler);
        });
    }
    folderStates[folderStates.findIndex(f => f[0] === id.replace("folderLinkDiv-", ""))][1] = !folderStates[folderStates.findIndex(f => f[0] === id.replace("folderLinkDiv-", ""))][1];
    localStorage.setItem("folderStates",JSON.stringify(folderStates));
    const a = document.getElementById("booksCollapse");
}

function toggleNewFolderPrompt() {
    const a = document.getElementById("booksCollapse");
    a.style.height = "auto";
    updateBooksCollapse();
    const element = document.getElementById("newFolderPrompt");

    const height = window.getComputedStyle(element).height;

    if (height === "0px") {
        element.style.height = element.scrollHeight + "px";
        document.getElementById("newFolderInput").value = "";
    } else {
        element.style.height = "0px";
    }
}

function newFolderNameSubmit() {
    const inputEl = document.getElementById("newFolderInput");
    const buttonEl = document.getElementById("newFolderSubmit");
    var inputVal = inputEl.value;
    const org = initializeDocOrg();
    
    if (inputVal.trim()) {
        const exists = Object.hasOwn(org, inputVal);
        
        if (exists) {
            buttonEl.textContent = "Name Taken";
        } else if (!/^[^'"].*[^'"]$/.test(inputVal)) {
            buttonEl.textContent = "Invalid Input";
        } else {        
            org[inputVal] = [];
            folderStates.push([inputVal,false]);
            localStorage.setItem('docOrg',JSON.stringify(org));
            toggleNewFolderPrompt();
            updateBooksCollapse();
        }
    } else {
        buttonEl.textContent = "No Input";
    }
}

const booksCollapse = document.getElementById("booksCollapse");
booksCollapse.addEventListener("dragstart", event => {
    const doc = event.target.closest(".booksCollapseLink");
    if (!doc) return;
    event.dataTransfer.setData("text/plain", doc.id);
    doc.style.opacity = "0.5";
});
booksCollapse.addEventListener("dragend", event => {
    const doc = event.target.closest(".booksCollapseLink");
    if (!doc) return;
    doc.style.opacity = "1";
});
booksCollapse.addEventListener("dragover", event => {
    event.preventDefault();
    const folder = event.target.closest(".folderLinkDiv");
    if (folder) folder.style.backgroundColor = "#828282";
});
booksCollapse.addEventListener("dragleave", event => {
    const folder = event.target.closest(".folderLinkDiv");
    if (folder) folder.style.backgroundColor = "";
});
booksCollapse.addEventListener("drop", event => {
    event.preventDefault();
    const folder = event.target.closest(".folderLinkDiv");
    if (!folder) return;
    folder.style.backgroundColor = "";
    const docId = event.dataTransfer.getData("text/plain");
    const docEl = document.getElementById(docId);
    folder.appendChild(docEl);
    const folderName = folder.id.replace("folderLinkDiv-", "");
    moveDocToFolder(docId.replace("docLink-", ""), folderName);
});

function moveDocToFolder(docName, targetFolder) {
    const org = JSON.parse(localStorage.getItem("docOrg"));
    for (let key in org) {
        const index = org[key].indexOf(docName);
        if (index > -1) {
            org[key].splice(index, 1);
            break;
        }
    }
    if (!org[targetFolder]) org[targetFolder] = [];
    org[targetFolder].push(docName);

    localStorage.setItem("docOrg", JSON.stringify(org));
    updateBooksCollapse();
}

function updateCardTable() {
    currentDocCards = [];

    var html = quill.getSemanticHTML();
    //setDocument(currentDoc, html);

    const text = decodeHTML(quill.getText());

    const regex = /\[([^\]]*)=([^\]]*)\]/g;
    let match;
    const matches = [];

    while ((match = regex.exec(text)) !== null){
        matches.push({
            full: match[0],
            left: match[1],
            right: match[2],
            index: match.index
        });
    }

    matches.forEach((item) => {
        currentDocCards.push([item.left, item.right]);
    });
    const table = document.getElementById("docOptionsCardsTable");
    html = "<thead><tr id='docOptionsThead'><th>Term</th><th>Definition</th></tr></thead><tbody>";
    if(currentDocCards.length !== 0) {
        currentDocCards.forEach((item) => {
            html = html + `<tr><td>${item[0]}</td><td>${item[1]}</td></tr>`;
        });
    } else {
        html = html + "<tr><td colspan='2' class='blankCardTablePlaceholder'>You don't have any cards yet...</td></tr>";
    }
    html = html + "</tbody>";
    table.innerHTML = html;
}
quill.on("text-change", function (delta, oldDelta, source) {
    if (source !== "user") return;
    updateCardTable();
    const range = quill.getSemanticHTML();
    setDocument(currentDoc,range);
    localStorage.setItem("latestDoc",currentDoc);
});
function editFolderName(name) {
    if (renamingNameFolder !== null) {return;}
    renamingNameFolder = name;
    var valid = false;
    const element = document.getElementById("folderLink-"+name);
    element.insertAdjacentHTML("afterend", `<div id="renameFolderPrompt"><input type="text" placeholder="Rename Folder" id="renameFolderInput"><div id="renameFolderButtons"><button id="renameFolderSubmit" onclick="renameFolderSubmit()" class="button">Submit</button><button id="renameFolderCancel" onclick="terminateRenameFolder()" class="button">X</button></div></div>`);
    const a = document.getElementById("booksCollapse");
    const renameFolderInput = document.getElementById("renameFolderInput");
    renameFolderInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            renameFolderSubmit();
        }
    });
}

function renameFolderSubmit() {
    const inputEl = document.getElementById("renameFolderInput");
    const buttonEl = document.getElementById("renameFolderSubmit");
    const newName = inputEl.value.trim();
    const org = JSON.parse(localStorage.getItem("docOrg"));
    
    if (!newName) {
        buttonEl.textContent = "No Input";
        return;
    }
    if (org[newName]) {
        buttonEl.textContent = "Name Taken";
        return;
    }
    org[newName] = org[renamingNameFolder];
    delete org[renamingNameFolder];
    localStorage.setItem("docOrg", JSON.stringify(org));
    const index = folderStates.findIndex(subArray => subArray[0] === renamingNameFolder);
    folderStates[index] = [newName,folderStates[index][1]];
    terminateRenameFolder();
    updateBooksCollapse();
    renamingNameFolder = null;
}
function terminateRenameFolder() {
    const divEl = document.getElementById("renameFolderPrompt");
    if (divEl) {
        divEl.remove();
    }
    renamingNameFolder = null;
}
function editFolderDelete(name) {
    if (confirm("Are you sure you would like to delete '"+name+"'?") == false) {return;}
    var docOrg = initializeDocOrg();
    docOrg.Uncollected = docOrg.Uncollected.concat(docOrg[name]);
    delete docOrg[name];
    localStorage.setItem("docOrg", JSON.stringify(docOrg));
    folderStates.forEach(item => {
       if(item[0] === name) {
           folderStates.splice(folderStates.indexOf(item),1);
       }
    });
    updateBooksCollapse();
}
function initializeBooksCollapseState() {
    const img = document.getElementById("booksCollapseArrow");
    if(localStorage.getItem("booksCollapseState") == null) {
        localStorage.setItem("booksCollapseState", 'false');
        toggleBooksCollapse();
    } else {
        if (localStorage.getItem("booksCollapseState") == "false") {
            toggleBooksCollapse();
            img.style.transition = 'none';
            img.style.transform = "rotate(90deg)";
            requestAnimationFrame(() => {
                img.style.transition = 'transform 0.1s';
            });
        } else {
            img.style.transition = 'none';
            img.style.transform = "rotate(180deg)";
            requestAnimationFrame(() => {
                img.style.transition = 'transform 0.1s';
            });
        }
    }
}
document.getElementById("studyCardsButton").addEventListener("click", () => {
    localStorage.setItem("destinationDoc", currentDoc);
    updateBooksCollapse();
    window.location.href = "study.html";
});
function decodeHTML(html) {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}
function toggleSettings(state = "toggle") {
    const el = document.getElementById("settingsDiv");
    if (state == "toggle") {
        el.classList.toggle("disabled");
    } else if (state == "off") {
        el.classList.add("disabled");
    } else {
        el.classList.remove("disabled");
    }
}
document.querySelectorAll("#settingsTheme button").forEach(el => {
   el.addEventListener("click", event => {
       el.classList.add("active");
       const parent = el.parentElement;
       for (const child of parent.children) {
           if (child !== el) {child.classList.remove("active");}
       }
       const index = [...parent.children].indexOf(el);
       if (index == 1) {
           document.documentElement.classList.remove("dark-mode");
           var obj = initializeSettingsStorage();
           obj.theme = "light";
           localStorage.setItem("settings", JSON.stringify(obj));
       } else {
           document.documentElement.classList.add("dark-mode");
           var obj = initializeSettingsStorage();
           obj.theme = "dark";
           localStorage.setItem("settings", JSON.stringify(obj));
       }
       updateSettings();
   });
});

document.querySelectorAll("#settingsDyslexia input").forEach(el => {
   el.addEventListener("click", event => {
       var obj = initializeSettingsStorage();
       obj.dyslexia = el.checked;
       localStorage.setItem("settings", JSON.stringify(obj));
       updateSettings();
       location.reload();
   });
});

function initializeSettingsStorage(reset = false) {
    var obj = localStorage.getItem("settings");
    if (obj == null || reset) {
        obj = {
            "theme":"dark",
            "dyslexia":false
        };
        localStorage.setItem("settings", JSON.stringify(obj));
        return(obj);
    } else {
        obj = JSON.parse(obj);
        return(obj);
    }
}
function updateSettings(reset = false) {
    const root = document.documentElement;
    root.classList.add("no-transitions");
    
    var settings = initializeSettingsStorage(reset);
    if (settings.theme == "dark") {
        document.documentElement.classList.add("dark-mode");
        document.querySelector("#settingsTheme > button:nth-child(3)").classList = "active";
        document.querySelector("#navTitleContainer img").src = "images/logo-dm.svg";
    } else if (settings.theme == "light") {
        document.documentElement.classList.remove("dark-mode");
        document.querySelector("#settingsTheme > button:nth-child(2)").classList = "active";
        document.querySelector("#navTitleContainer img").src = "images/logo-lm.svg";
    }
    if (settings.dyslexia == true) {
        document.documentElement.classList.add("dyslexic-font");
        document.querySelector("#settingsDyslexia input").checked = true;
    } else {
        document.documentElement.classList.remove("dyslexic-font");
        document.querySelector("#settingsDyslexia input").checked = false;
    }
    
    void root.offsetHeight;
    requestAnimationFrame(() => {
        root.classList.remove("no-transitions");
    });
}
function getCharacter(reset = false) {
    var obj = localStorage.getItem("characterInfo")
    if (obj == null || reset) {
        obj = {
            "name": "New Character",
            "coins": 500,
            "attributes": {
                "level": 1,
                "xp": 0,
                "points": 0,
                "strength": 1,
                "dexterity": 1,
                "endurance": 1,
                "intelligence": 1,
                "wisdom": 1,
                "energy": 100
            },
            "inventory": {
                "equipped": {
                    "head": null,
                    "torso": null,
                    "legs": null,
                    "boots": null,
                    "primary": null,
                    "secondary": null
                },
                "unequipped":[
                ]
            },
            "data": {
                "shop": {
                    "lastUpdated": Date.now(),
                    "items": [],
                    "types": []
                },
                "quests": {
                    "weekly": [
                        
                    ],
                    "permanent": []
                },
                "achievements": {
                    "collectItems": {
                        "stage": 0,
                        "rewardsCollected": [false,false,false,false,false]
                    },
                    "completeWeeklies": {
                        "stage": 0,
                        "rewardsCollected": [false,false,false,false,false]
                    },
                    "level": {
                        "stage": 0,
                        "rewardsCollected": [false,false,false,false,false]
                    },
                    "totalMoney": {
                        "stage": 0,
                        "rewardsCollected": [false,false,false,false,false],
                        "previousMoney": 0
                    },
                    "winBattles": {
                        "stage": 0,
                        "rewardsCollected": [false,false,false,false,false]
                    }
                },
                "levelUpAmount": 0
            }
        };
        for (let i = 0; i<5; i++) {
            obj.data.quests.weekly.push(generateWeekly(obj));
        }
        /*obj.data.quests.weekly.push({"title":"Earn 1328 coins","description":"Earn 1328 coins by battling enemies, finishing quests, and selling extra equipment.","started":1782855690,"progress":0,"progressMax":1328,"type":{"category":"earn","data":0}});
        for (let i = 0; i<10;i++) {
            var newItem = rollItem();
            obj.inventory.unequipped.push(newItem);
            if (["Legendary","Exotic","Unique"].includes(newItem.rarity)) {
                obj.data.achievements.collectItems.stage++;
            }
        }*/
        localStorage.setItem("characterInfo", JSON.stringify(obj));
        return(obj);
    } else {
        obj = JSON.parse(obj);
        return(obj);
    }
}

function confettiAt(el, params) {
    const rect = el.getBoundingClientRect();
    const originX = (rect.left + rect.width / 2) / window.innerWidth;
    const originY = (rect.top + rect.height / 2) / window.innerHeight;
    
    params.origin = {y : originY, x : originX};
    confetti(params);
}

function generateWeekly(org) {
    var output = {"title":"","description":"","started":0,"progress":0,"progressMax":0, "type":{"category":"","data":0}, "notified":false};
    output.type.category = ["slay","study","write","advance","earn"][Math.floor(Math.random() * 5)];
    
    if (output.type.category == "slay") {
        var enemy = generateEnemy(Math.ceil(org.attributes.level / 10));
        output.progressMax = Math.ceil(Math.random() * 15);
        
        output.title = `Slay ${output.progressMax} ${enemy.name}`;
        output.description = `Slay ${output.progressMax} ${enemy.name} in the Arena tab to finish this quest.`;
        output.type.data = enemy;
    } else if (output.type.category == "study") {
        output.progressMax = Math.ceil(Math.random() * 200) + 100;
        
        output.title = `Study ${output.progressMax} cards`;
        output.description = `Study ${output.progressMax} cards from any of your documents.`;
    } else if (output.type.category == "write") {
        output.progressMax = Math.ceil(Math.random() * 500) + 500;
        
        output.title = `Write ${output.progressMax} words`;
        output.description = `Write ${output.progressMax} words in any document.`;
    } else if (output.type.category == "advance") {
        output.progressMax = Math.ceil(Math.random() * 3) + 2;
        
        output.title = `Level up ${output.progressMax} times`;
        output.description = `Level up ${output.progressMax} times by battling enemies and finishing quests.`;
    } else if (output.type.category == "earn") {
        output.progressMax = Math.ceil(Math.random() * 2000) + 1000;
        
        output.title = `Earn ${output.progressMax} coins`;
        output.description = `Earn ${output.progressMax} coins by battling enemies, finishing quests, and selling extra equipment.`;
    }
    
    output.started = Date.now();
    return output;
}
function generateEnemy(arena) {
    var level = (arena - 1) * 10 + Math.ceil(Math.random() * 10);
    const enemies = {
        1: {
            1: { name: "Tiny Slime", strength: 1, dexterity: 1, endurance: 3, intelligence: 1, wisdom: 1, encounterRarity: "Common", lootRarity: "Common" },
            2: { name: "Field Mouse", strength: 1, dexterity: 3, endurance: 1, intelligence: 1, wisdom: 1, encounterRarity: "Common", lootRarity: "Common" },
            3: { name: "Wild Rabbit", strength: 1, dexterity: 4, endurance: 1, intelligence: 1, wisdom: 1, encounterRarity: "Common", lootRarity: "Common" },
            4: { name: "Wandering Beetle", strength: 2, dexterity: 1, endurance: 3, intelligence: 1, wisdom: 1, encounterRarity: "Common", lootRarity: "Common" },
            5: { name: "Prairie Snake", strength: 2, dexterity: 3, endurance: 2, intelligence: 1, wisdom: 1, encounterRarity: "Common", lootRarity: "Common" },
            6: { name: "Baby Boar", strength: 3, dexterity: 1, endurance: 4, intelligence: 1, wisdom: 1, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            7: { name: "Grass Sprite", strength: 1, dexterity: 2, endurance: 1, intelligence: 3, wisdom: 3, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            8: { name: "Wooden Scarecrow", strength: 3, dexterity: 1, endurance: 5, intelligence: 1, wisdom: 1, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            9: { name: "Flower Imp", strength: 1, dexterity: 3, endurance: 1, intelligence: 4, wisdom: 2, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            10: { name: "Bloom Wolf", strength: 4, dexterity: 3, endurance: 3, intelligence: 1, wisdom: 1, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            11: { name: "Golden Hen", strength: 2, dexterity: 2, endurance: 2, intelligence: 2, wisdom: 2, encounterRarity: "Rare", lootRarity: "Rare" },
            12: { name: "Meadow Stag", strength: 4, dexterity: 4, endurance: 3, intelligence: 1, wisdom: 2, encounterRarity: "Rare", lootRarity: "Rare" },
            13: { name: "Sunlit Treant", strength: 3, dexterity: 1, endurance: 6, intelligence: 2, wisdom: 4, encounterRarity: "Rare", lootRarity: "Rare" },
            14: { name: "Guardian Ram", strength: 5, dexterity: 2, endurance: 4, intelligence: 1, wisdom: 1, encounterRarity: "Rare", lootRarity: "Rare" },
            15: { name: "Ancient Meadow Spirit", strength: 3, dexterity: 3, endurance: 4, intelligence: 6, wisdom: 6, encounterRarity: "Epic", lootRarity: "Epic" }
        },
        2: {
            1: { name: "Forest Spider", strength: 2, dexterity: 5, endurance: 2, intelligence: 1, wisdom: 1, encounterRarity: "Common", lootRarity: "Common" },
            2: { name: "Woodland Goblin", strength: 3, dexterity: 3, endurance: 2, intelligence: 2, wisdom: 1, encounterRarity: "Common", lootRarity: "Common" },
            3: { name: "Pine Wolf", strength: 4, dexterity: 4, endurance: 3, intelligence: 1, wisdom: 1, encounterRarity: "Common", lootRarity: "Common" },
            4: { name: "Moss Turtle", strength: 2, dexterity: 1, endurance: 6, intelligence: 1, wisdom: 2, encounterRarity: "Common", lootRarity: "Common" },
            5: { name: "Branch Mimic", strength: 4, dexterity: 2, endurance: 4, intelligence: 2, wisdom: 1, encounterRarity: "Common", lootRarity: "Common" },
            6: { name: "Forest Bandit", strength: 4, dexterity: 4, endurance: 2, intelligence: 2, wisdom: 1, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            7: { name: "Hollow Archer", strength: 2, dexterity: 6, endurance: 2, intelligence: 1, wisdom: 2, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            8: { name: "Emerald Boar", strength: 5, dexterity: 2, endurance: 5, intelligence: 1, wisdom: 1, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            9: { name: "Feral Druid", strength: 2, dexterity: 2, endurance: 2, intelligence: 4, wisdom: 5, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            10: { name: "Barkhide Bear", strength: 6, dexterity: 2, endurance: 6, intelligence: 1, wisdom: 2, encounterRarity: "Rare", lootRarity: "Rare" },
            11: { name: "Ancient Owl", strength: 1, dexterity: 4, endurance: 2, intelligence: 6, wisdom: 6, encounterRarity: "Rare", lootRarity: "Rare" },
            12: { name: "Forest Warden", strength: 5, dexterity: 4, endurance: 5, intelligence: 3, wisdom: 3, encounterRarity: "Rare", lootRarity: "Rare" },
            13: { name: "Venom Fang", strength: 4, dexterity: 6, endurance: 3, intelligence: 1, wisdom: 2, encounterRarity: "Rare", lootRarity: "Rare" },
            14: { name: "Living Oak", strength: 5, dexterity: 1, endurance: 6, intelligence: 2, wisdom: 5, encounterRarity: "Epic", lootRarity: "Epic" },
            15: { name: "Heartwood Guardian", strength: 6, dexterity: 3, endurance: 6, intelligence: 3, wisdom: 5, encounterRarity: "Epic", lootRarity: "Epic" }
        },
        3: {
            1: { name: "Cave Bat", strength: 2, dexterity: 6, endurance: 2, intelligence: 1, wisdom: 1, encounterRarity: "Common", lootRarity: "Common" },
            2: { name: "Tunnel Rat", strength: 3, dexterity: 4, endurance: 3, intelligence: 1, wisdom: 1, encounterRarity: "Common", lootRarity: "Common" },
            3: { name: "Stone Crawler", strength: 5, dexterity: 1, endurance: 6, intelligence: 1, wisdom: 1, encounterRarity: "Common", lootRarity: "Common" },
            4: { name: "Echo Spirit", strength: 1, dexterity: 4, endurance: 2, intelligence: 5, wisdom: 4, encounterRarity: "Common", lootRarity: "Common" },
            5: { name: "Crystal Beetle", strength: 4, dexterity: 2, endurance: 6, intelligence: 1, wisdom: 2, encounterRarity: "Common", lootRarity: "Common" },
            6: { name: "Blind Miner", strength: 5, dexterity: 2, endurance: 5, intelligence: 2, wisdom: 2, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            7: { name: "Cavern Lurker", strength: 5, dexterity: 5, endurance: 3, intelligence: 1, wisdom: 1, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            8: { name: "Gemstone Slime", strength: 3, dexterity: 1, endurance: 6, intelligence: 3, wisdom: 3, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            9: { name: "Shadow Mole", strength: 4, dexterity: 6, endurance: 3, intelligence: 1, wisdom: 1, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            10: { name: "Stalagmite Beast", strength: 6, dexterity: 1, endurance: 6, intelligence: 1, wisdom: 2, encounterRarity: "Rare", lootRarity: "Rare" },
            11: { name: "Crystal Wisp", strength: 1, dexterity: 5, endurance: 2, intelligence: 6, wisdom: 5, encounterRarity: "Rare", lootRarity: "Rare" },
            12: { name: "Ancient Excavator", strength: 6, dexterity: 2, endurance: 6, intelligence: 2, wisdom: 2, encounterRarity: "Rare", lootRarity: "Rare" },
            13: { name: "Obsidian Horror", strength: 6, dexterity: 3, endurance: 6, intelligence: 2, wisdom: 2, encounterRarity: "Rare", lootRarity: "Rare" },
            14: { name: "Deepcore Serpent", strength: 5, dexterity: 6, endurance: 4, intelligence: 1, wisdom: 2, encounterRarity: "Epic", lootRarity: "Epic" },
            15: { name: "Cavern King", strength: 6, dexterity: 4, endurance: 6, intelligence: 4, wisdom: 4, encounterRarity: "Epic", lootRarity: "Epic" }
        },
        4: {
            1: { name: "Frozen Hare", strength: 2, dexterity: 5, endurance: 2, intelligence: 1, wisdom: 1, encounterRarity: "Common", lootRarity: "Common" },
            2: { name: "Snow Fox", strength: 3, dexterity: 5, endurance: 2, intelligence: 1, wisdom: 2, encounterRarity: "Common", lootRarity: "Common" },
            3: { name: "Ice Beetle", strength: 3, dexterity: 2, endurance: 5, intelligence: 1, wisdom: 1, encounterRarity: "Common", lootRarity: "Common" },
            4: { name: "Frost Sprite", strength: 1, dexterity: 4, endurance: 2, intelligence: 5, wisdom: 4, encounterRarity: "Common", lootRarity: "Common" },
            5: { name: "Tundra Wolf", strength: 5, dexterity: 4, endurance: 3, intelligence: 1, wisdom: 1, encounterRarity: "Common", lootRarity: "Common" },
            6: { name: "Ice Goblin", strength: 4, dexterity: 3, endurance: 3, intelligence: 2, wisdom: 2, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            7: { name: "Snow Stalker", strength: 4, dexterity: 6, endurance: 2, intelligence: 1, wisdom: 2, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            8: { name: "Frost Boar", strength: 6, dexterity: 2, endurance: 5, intelligence: 1, wisdom: 1, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            9: { name: "Ice Shaman", strength: 1, dexterity: 2, endurance: 3, intelligence: 6, wisdom: 5, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            10: { name: "Glacier Ram", strength: 6, dexterity: 3, endurance: 6, intelligence: 1, wisdom: 2, encounterRarity: "Rare", lootRarity: "Rare" },
            11: { name: "Winter Owl", strength: 1, dexterity: 5, endurance: 2, intelligence: 6, wisdom: 6, encounterRarity: "Rare", lootRarity: "Rare" },
            12: { name: "Frozen Guardian", strength: 5, dexterity: 3, endurance: 6, intelligence: 3, wisdom: 4, encounterRarity: "Rare", lootRarity: "Rare" },
            13: { name: "Avalanche Beast", strength: 6, dexterity: 2, endurance: 6, intelligence: 1, wisdom: 1, encounterRarity: "Rare", lootRarity: "Rare" },
            14: { name: "Ice Drake", strength: 5, dexterity: 5, endurance: 4, intelligence: 3, wisdom: 2, encounterRarity: "Epic", lootRarity: "Epic" },
            15: { name: "Frost King", strength: 6, dexterity: 4, endurance: 6, intelligence: 4, wisdom: 5, encounterRarity: "Epic", lootRarity: "Epic" }
        },

        5: {
            1: { name: "Mud Crab", strength: 3, dexterity: 2, endurance: 5, intelligence: 1, wisdom: 1, encounterRarity: "Common", lootRarity: "Common" },
            2: { name: "Swamp Frog", strength: 2, dexterity: 5, endurance: 2, intelligence: 1, wisdom: 2, encounterRarity: "Common", lootRarity: "Common" },
            3: { name: "Bog Snake", strength: 3, dexterity: 4, endurance: 3, intelligence: 1, wisdom: 1, encounterRarity: "Common", lootRarity: "Common" },
            4: { name: "Rot Beetle", strength: 2, dexterity: 2, endurance: 6, intelligence: 1, wisdom: 1, encounterRarity: "Common", lootRarity: "Common" },
            5: { name: "Fen Imp", strength: 1, dexterity: 4, endurance: 2, intelligence: 5, wisdom: 3, encounterRarity: "Common", lootRarity: "Common" },
            6: { name: "Swamp Raider", strength: 4, dexterity: 4, endurance: 3, intelligence: 2, wisdom: 1, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            7: { name: "Marsh Stalker", strength: 4, dexterity: 6, endurance: 2, intelligence: 1, wisdom: 2, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            8: { name: "Bog Troll", strength: 6, dexterity: 1, endurance: 6, intelligence: 1, wisdom: 1, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            9: { name: "Plague Shaman", strength: 1, dexterity: 2, endurance: 3, intelligence: 6, wisdom: 5, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            10: { name: "Fen Beast", strength: 6, dexterity: 3, endurance: 6, intelligence: 1, wisdom: 1, encounterRarity: "Rare", lootRarity: "Rare" },
            11: { name: "Will-o'-Wisp", strength: 1, dexterity: 5, endurance: 2, intelligence: 6, wisdom: 6, encounterRarity: "Rare", lootRarity: "Rare" },
            12: { name: "Marsh Guardian", strength: 5, dexterity: 2, endurance: 6, intelligence: 3, wisdom: 4, encounterRarity: "Rare", lootRarity: "Rare" },
            13: { name: "Venom Hydra", strength: 6, dexterity: 4, endurance: 6, intelligence: 2, wisdom: 2, encounterRarity: "Rare", lootRarity: "Rare" },
            14: { name: "Rot Dragon", strength: 5, dexterity: 5, endurance: 5, intelligence: 3, wisdom: 2, encounterRarity: "Epic", lootRarity: "Epic" },
            15: { name: "Swamp Sovereign", strength: 6, dexterity: 4, endurance: 6, intelligence: 5, wisdom: 5, encounterRarity: "Epic", lootRarity: "Epic" }
        },

        6: {
            1: { name: "Dust Rat", strength: 2, dexterity: 4, endurance: 2, intelligence: 1, wisdom: 1, encounterRarity: "Common", lootRarity: "Common" },
            2: { name: "Sand Lizard", strength: 3, dexterity: 5, endurance: 2, intelligence: 1, wisdom: 1, encounterRarity: "Common", lootRarity: "Common" },
            3: { name: "Dune Beetle", strength: 3, dexterity: 2, endurance: 5, intelligence: 1, wisdom: 1, encounterRarity: "Common", lootRarity: "Common" },
            4: { name: "Cactus Mimic", strength: 4, dexterity: 2, endurance: 4, intelligence: 2, wisdom: 1, encounterRarity: "Common", lootRarity: "Common" },
            5: { name: "Scorpion", strength: 4, dexterity: 5, endurance: 2, intelligence: 1, wisdom: 1, encounterRarity: "Common", lootRarity: "Common" },
            6: { name: "Desert Bandit", strength: 4, dexterity: 4, endurance: 3, intelligence: 2, wisdom: 1, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            7: { name: "Vulture Rider", strength: 3, dexterity: 6, endurance: 2, intelligence: 2, wisdom: 2, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            8: { name: "Sand Brute", strength: 6, dexterity: 1, endurance: 6, intelligence: 1, wisdom: 1, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            9: { name: "Mirage Mage", strength: 1, dexterity: 3, endurance: 2, intelligence: 6, wisdom: 5, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            10: { name: "Dune Stalker", strength: 5, dexterity: 6, endurance: 3, intelligence: 1, wisdom: 2, encounterRarity: "Rare", lootRarity: "Rare" },
            11: { name: "Sand Wyrm", strength: 6, dexterity: 3, endurance: 6, intelligence: 1, wisdom: 1, encounterRarity: "Rare", lootRarity: "Rare" },
            12: { name: "Sun Priest", strength: 2, dexterity: 2, endurance: 3, intelligence: 6, wisdom: 6, encounterRarity: "Rare", lootRarity: "Rare" },
            13: { name: "Canyon Giant", strength: 6, dexterity: 2, endurance: 6, intelligence: 2, wisdom: 2, encounterRarity: "Rare", lootRarity: "Rare" },
            14: { name: "Crimson Wyvern", strength: 5, dexterity: 5, endurance: 4, intelligence: 3, wisdom: 2, encounterRarity: "Epic", lootRarity: "Epic" },
            15: { name: "Emperor of Sands", strength: 6, dexterity: 4, endurance: 6, intelligence: 5, wisdom: 5, encounterRarity: "Epic", lootRarity: "Epic" }
        },

        7: {
            1: { name: "Charred Rat", strength: 2, dexterity: 4, endurance: 2, intelligence: 1, wisdom: 1, encounterRarity: "Common", lootRarity: "Common" },
            2: { name: "Ash Bat", strength: 2, dexterity: 5, endurance: 2, intelligence: 1, wisdom: 1, encounterRarity: "Common", lootRarity: "Common" },
            3: { name: "Magma Beetle", strength: 4, dexterity: 2, endurance: 5, intelligence: 1, wisdom: 1, encounterRarity: "Common", lootRarity: "Common" },
            4: { name: "Lava Slime", strength: 3, dexterity: 1, endurance: 6, intelligence: 2, wisdom: 1, encounterRarity: "Common", lootRarity: "Common" },
            5: { name: "Fire Imp", strength: 2, dexterity: 4, endurance: 2, intelligence: 5, wisdom: 3, encounterRarity: "Common", lootRarity: "Common" },
            6: { name: "Ash Raider", strength: 4, dexterity: 4, endurance: 3, intelligence: 2, wisdom: 1, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            7: { name: "Blaze Hound", strength: 5, dexterity: 5, endurance: 2, intelligence: 1, wisdom: 1, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            8: { name: "Volcano Troll", strength: 6, dexterity: 1, endurance: 6, intelligence: 1, wisdom: 1, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            9: { name: "Flamecaller", strength: 1, dexterity: 3, endurance: 2, intelligence: 6, wisdom: 5, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            10: { name: "Inferno Stalker", strength: 5, dexterity: 6, endurance: 3, intelligence: 1, wisdom: 1, encounterRarity: "Rare", lootRarity: "Rare" },
            11: { name: "Magma Serpent", strength: 6, dexterity: 3, endurance: 6, intelligence: 1, wisdom: 1, encounterRarity: "Rare", lootRarity: "Rare" },
            12: { name: "Forge Spirit", strength: 2, dexterity: 2, endurance: 3, intelligence: 6, wisdom: 6, encounterRarity: "Rare", lootRarity: "Rare" },
            13: { name: "Obsidian Titan", strength: 6, dexterity: 2, endurance: 6, intelligence: 2, wisdom: 2, encounterRarity: "Rare", lootRarity: "Rare" },
            14: { name: "Fire Drake", strength: 5, dexterity: 5, endurance: 4, intelligence: 3, wisdom: 2, encounterRarity: "Epic", lootRarity: "Epic" },
            15: { name: "Volcanic Overlord", strength: 6, dexterity: 4, endurance: 6, intelligence: 5, wisdom: 5, encounterRarity: "Epic", lootRarity: "Epic" }
        },

        8: {
            1: { name: "Storm Crow", strength: 2, dexterity: 5, endurance: 2, intelligence: 1, wisdom: 2, encounterRarity: "Common", lootRarity: "Common" },
            2: { name: "Thunder Rat", strength: 2, dexterity: 4, endurance: 3, intelligence: 1, wisdom: 1, encounterRarity: "Common", lootRarity: "Common" },
            3: { name: "Wind Sprite", strength: 1, dexterity: 6, endurance: 1, intelligence: 4, wisdom: 3, encounterRarity: "Common", lootRarity: "Common" },
            4: { name: "Cloud Serpent", strength: 3, dexterity: 5, endurance: 3, intelligence: 1, wisdom: 2, encounterRarity: "Common", lootRarity: "Common" },
            5: { name: "Sky Goblin", strength: 3, dexterity: 4, endurance: 2, intelligence: 2, wisdom: 1, encounterRarity: "Common", lootRarity: "Common" },
            6: { name: "Tempest Archer", strength: 2, dexterity: 6, endurance: 2, intelligence: 2, wisdom: 2, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            7: { name: "Lightning Hound", strength: 5, dexterity: 5, endurance: 2, intelligence: 1, wisdom: 1, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            8: { name: "Storm Giant", strength: 6, dexterity: 2, endurance: 6, intelligence: 1, wisdom: 2, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            9: { name: "Thunder Mage", strength: 1, dexterity: 3, endurance: 2, intelligence: 6, wisdom: 5, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            10: { name: "Sky Stalker", strength: 4, dexterity: 6, endurance: 3, intelligence: 1, wisdom: 2, encounterRarity: "Rare", lootRarity: "Rare" },
            11: { name: "Tempest Roc", strength: 5, dexterity: 5, endurance: 4, intelligence: 1, wisdom: 2, encounterRarity: "Rare", lootRarity: "Rare" },
            12: { name: "Cloud Sage", strength: 1, dexterity: 3, endurance: 3, intelligence: 6, wisdom: 6, encounterRarity: "Rare", lootRarity: "Rare" },
            13: { name: "Thunder Colossus", strength: 6, dexterity: 2, endurance: 6, intelligence: 2, wisdom: 2, encounterRarity: "Rare", lootRarity: "Rare" },
            14: { name: "Storm Drake", strength: 5, dexterity: 6, endurance: 4, intelligence: 3, wisdom: 2, encounterRarity: "Epic", lootRarity: "Epic" },
            15: { name: "Lord of Tempests", strength: 6, dexterity: 5, endurance: 6, intelligence: 5, wisdom: 5, encounterRarity: "Epic", lootRarity: "Epic" }
        },
        9: {
            1: { name: "Grave Rat", strength: 2, dexterity: 4, endurance: 3, intelligence: 1, wisdom: 1, encounterRarity: "Common", lootRarity: "Common" },
            2: { name: "Restless Skeleton", strength: 3, dexterity: 3, endurance: 3, intelligence: 1, wisdom: 1, encounterRarity: "Common", lootRarity: "Common" },
            3: { name: "Lost Spirit", strength: 1, dexterity: 4, endurance: 2, intelligence: 4, wisdom: 3, encounterRarity: "Common", lootRarity: "Common" },
            4: { name: "Crypt Spider", strength: 3, dexterity: 5, endurance: 2, intelligence: 1, wisdom: 1, encounterRarity: "Common", lootRarity: "Common" },
            5: { name: "Bone Hound", strength: 5, dexterity: 4, endurance: 3, intelligence: 1, wisdom: 1, encounterRarity: "Common", lootRarity: "Common" },
            6: { name: "Ghoul", strength: 5, dexterity: 3, endurance: 4, intelligence: 1, wisdom: 1, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            7: { name: "Cursed Archer", strength: 3, dexterity: 6, endurance: 2, intelligence: 2, wisdom: 2, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            8: { name: "Grave Brute", strength: 6, dexterity: 1, endurance: 6, intelligence: 1, wisdom: 1, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            9: { name: "Necromancer Acolyte", strength: 1, dexterity: 2, endurance: 2, intelligence: 6, wisdom: 5, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            10: { name: "Wraith", strength: 2, dexterity: 6, endurance: 2, intelligence: 5, wisdom: 4, encounterRarity: "Rare", lootRarity: "Rare" },
            11: { name: "Bone Golem", strength: 6, dexterity: 1, endurance: 6, intelligence: 2, wisdom: 2, encounterRarity: "Rare", lootRarity: "Rare" },
            12: { name: "Death Priest", strength: 1, dexterity: 2, endurance: 3, intelligence: 6, wisdom: 6, encounterRarity: "Rare", lootRarity: "Rare" },
            13: { name: "Dread Knight", strength: 6, dexterity: 4, endurance: 6, intelligence: 2, wisdom: 2, encounterRarity: "Rare", lootRarity: "Rare" },
            14: { name: "Soul Reaper", strength: 5, dexterity: 6, endurance: 3, intelligence: 4, wisdom: 3, encounterRarity: "Epic", lootRarity: "Epic" },
            15: { name: "Lich King", strength: 4, dexterity: 4, endurance: 5, intelligence: 6, wisdom: 6, encounterRarity: "Epic", lootRarity: "Epic" }
        },

        10: {
            1: { name: "Clockwork Mouse", strength: 2, dexterity: 4, endurance: 3, intelligence: 2, wisdom: 1, encounterRarity: "Common", lootRarity: "Common" },
            2: { name: "Copper Automaton", strength: 4, dexterity: 2, endurance: 4, intelligence: 2, wisdom: 1, encounterRarity: "Common", lootRarity: "Common" },
            3: { name: "Steam Beetle", strength: 3, dexterity: 3, endurance: 5, intelligence: 1, wisdom: 1, encounterRarity: "Common", lootRarity: "Common" },
            4: { name: "Gear Sprite", strength: 1, dexterity: 5, endurance: 2, intelligence: 5, wisdom: 2, encounterRarity: "Common", lootRarity: "Common" },
            5: { name: "Boiler Hound", strength: 5, dexterity: 4, endurance: 3, intelligence: 1, wisdom: 1, encounterRarity: "Common", lootRarity: "Common" },
            6: { name: "Machinist", strength: 3, dexterity: 5, endurance: 2, intelligence: 4, wisdom: 2, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            7: { name: "Clockwork Archer", strength: 3, dexterity: 6, endurance: 2, intelligence: 3, wisdom: 1, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            8: { name: "Iron Sentinel", strength: 6, dexterity: 1, endurance: 6, intelligence: 2, wisdom: 1, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            9: { name: "Tesla Adept", strength: 1, dexterity: 3, endurance: 2, intelligence: 6, wisdom: 5, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            10: { name: "Steam Juggernaut", strength: 6, dexterity: 2, endurance: 6, intelligence: 2, wisdom: 1, encounterRarity: "Rare", lootRarity: "Rare" },
            11: { name: "Gear Dragonling", strength: 5, dexterity: 5, endurance: 4, intelligence: 2, wisdom: 2, encounterRarity: "Rare", lootRarity: "Rare" },
            12: { name: "Master Engineer", strength: 2, dexterity: 4, endurance: 3, intelligence: 6, wisdom: 5, encounterRarity: "Rare", lootRarity: "Rare" },
            13: { name: "Titan Construct", strength: 6, dexterity: 2, endurance: 6, intelligence: 3, wisdom: 2, encounterRarity: "Rare", lootRarity: "Rare" },
            14: { name: "Chrono Guardian", strength: 5, dexterity: 5, endurance: 4, intelligence: 5, wisdom: 4, encounterRarity: "Epic", lootRarity: "Epic" },
            15: { name: "Clockwork Emperor", strength: 6, dexterity: 4, endurance: 6, intelligence: 6, wisdom: 5, encounterRarity: "Epic", lootRarity: "Epic" }
        },

        11: {
            1: { name: "Corrupted Rabbit", strength: 3, dexterity: 4, endurance: 2, intelligence: 1, wisdom: 1, encounterRarity: "Common", lootRarity: "Common" },
            2: { name: "Twisted Crow", strength: 2, dexterity: 5, endurance: 2, intelligence: 1, wisdom: 2, encounterRarity: "Common", lootRarity: "Common" },
            3: { name: "Void Beetle", strength: 3, dexterity: 3, endurance: 5, intelligence: 2, wisdom: 1, encounterRarity: "Common", lootRarity: "Common" },
            4: { name: "Shadow Slime", strength: 2, dexterity: 2, endurance: 6, intelligence: 2, wisdom: 2, encounterRarity: "Common", lootRarity: "Common" },
            5: { name: "Dark Wolf", strength: 5, dexterity: 4, endurance: 3, intelligence: 1, wisdom: 1, encounterRarity: "Common", lootRarity: "Common" },
            6: { name: "Void Cultist", strength: 2, dexterity: 3, endurance: 2, intelligence: 5, wisdom: 4, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            7: { name: "Night Stalker", strength: 4, dexterity: 6, endurance: 2, intelligence: 1, wisdom: 2, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            8: { name: "Abyss Brute", strength: 6, dexterity: 1, endurance: 6, intelligence: 1, wisdom: 1, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            9: { name: "Voidcaller", strength: 1, dexterity: 2, endurance: 2, intelligence: 6, wisdom: 5, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            10: { name: "Shadow Wraith", strength: 2, dexterity: 6, endurance: 2, intelligence: 5, wisdom: 4, encounterRarity: "Rare", lootRarity: "Rare" },
            11: { name: "Corruption Golem", strength: 6, dexterity: 1, endurance: 6, intelligence: 2, wisdom: 2, encounterRarity: "Rare", lootRarity: "Rare" },
            12: { name: "Abyss Priest", strength: 1, dexterity: 2, endurance: 3, intelligence: 6, wisdom: 6, encounterRarity: "Rare", lootRarity: "Rare" },
            13: { name: "Void Knight", strength: 6, dexterity: 4, endurance: 6, intelligence: 2, wisdom: 2, encounterRarity: "Rare", lootRarity: "Rare" },
            14: { name: "Shadow Dragon", strength: 5, dexterity: 5, endurance: 4, intelligence: 4, wisdom: 3, encounterRarity: "Epic", lootRarity: "Epic" },
            15: { name: "Abyss Lord", strength: 5, dexterity: 4, endurance: 5, intelligence: 6, wisdom: 6, encounterRarity: "Epic", lootRarity: "Epic" }
        },

        12: {
            1: { name: "Temple Rat", strength: 2, dexterity: 4, endurance: 2, intelligence: 1, wisdom: 2, encounterRarity: "Common", lootRarity: "Common" },
            2: { name: "Stone Guardian", strength: 4, dexterity: 2, endurance: 5, intelligence: 1, wisdom: 2, encounterRarity: "Common", lootRarity: "Common" },
            3: { name: "Relic Beetle", strength: 3, dexterity: 3, endurance: 4, intelligence: 2, wisdom: 2, encounterRarity: "Common", lootRarity: "Common" },
            4: { name: "Temple Spirit", strength: 1, dexterity: 4, endurance: 2, intelligence: 5, wisdom: 4, encounterRarity: "Common", lootRarity: "Common" },
            5: { name: "Sacred Hound", strength: 5, dexterity: 4, endurance: 3, intelligence: 1, wisdom: 2, encounterRarity: "Common", lootRarity: "Common" },
            6: { name: "Relic Hunter", strength: 4, dexterity: 4, endurance: 2, intelligence: 3, wisdom: 2, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            7: { name: "Temple Archer", strength: 3, dexterity: 6, endurance: 2, intelligence: 2, wisdom: 2, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            8: { name: "Ancient Colossus", strength: 6, dexterity: 1, endurance: 6, intelligence: 2, wisdom: 2, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            9: { name: "Oracle Adept", strength: 1, dexterity: 2, endurance: 2, intelligence: 6, wisdom: 6, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            10: { name: "Sun Guardian", strength: 6, dexterity: 3, endurance: 6, intelligence: 2, wisdom: 2, encounterRarity: "Rare", lootRarity: "Rare" },
            11: { name: "Temple Sage", strength: 1, dexterity: 3, endurance: 3, intelligence: 6, wisdom: 6, encounterRarity: "Rare", lootRarity: "Rare" },
            12: { name: "Relic Champion", strength: 6, dexterity: 4, endurance: 5, intelligence: 2, wisdom: 2, encounterRarity: "Rare", lootRarity: "Rare" },
            13: { name: "Golden Sentinel", strength: 6, dexterity: 2, endurance: 6, intelligence: 3, wisdom: 3, encounterRarity: "Rare", lootRarity: "Rare" },
            14: { name: "Celestial Drake", strength: 5, dexterity: 5, endurance: 4, intelligence: 4, wisdom: 4, encounterRarity: "Epic", lootRarity: "Epic" },
            15: { name: "Eternal Pharaoh", strength: 5, dexterity: 4, endurance: 5, intelligence: 6, wisdom: 6, encounterRarity: "Epic", lootRarity: "Epic" }
        },

        13: {
            1: { name: "Star Mite", strength: 2, dexterity: 4, endurance: 2, intelligence: 2, wisdom: 2, encounterRarity: "Common", lootRarity: "Common" },
            2: { name: "Moon Hare", strength: 2, dexterity: 5, endurance: 2, intelligence: 1, wisdom: 3, encounterRarity: "Common", lootRarity: "Common" },
            3: { name: "Comet Beetle", strength: 3, dexterity: 4, endurance: 4, intelligence: 2, wisdom: 1, encounterRarity: "Common", lootRarity: "Common" },
            4: { name: "Nebula Spirit", strength: 1, dexterity: 4, endurance: 2, intelligence: 6, wisdom: 4, encounterRarity: "Common", lootRarity: "Common" },
            5: { name: "Meteor Wolf", strength: 5, dexterity: 4, endurance: 3, intelligence: 1, wisdom: 1, encounterRarity: "Common", lootRarity: "Common" },
            6: { name: "Astral Wanderer", strength: 2, dexterity: 4, endurance: 2, intelligence: 5, wisdom: 4, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            7: { name: "Star Archer", strength: 3, dexterity: 6, endurance: 2, intelligence: 2, wisdom: 2, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            8: { name: "Void Titan", strength: 6, dexterity: 1, endurance: 6, intelligence: 2, wisdom: 2, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            9: { name: "Cosmic Mage", strength: 1, dexterity: 2, endurance: 2, intelligence: 6, wisdom: 6, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            10: { name: "Meteor Drake", strength: 5, dexterity: 5, endurance: 4, intelligence: 2, wisdom: 2, encounterRarity: "Rare", lootRarity: "Rare" },
            11: { name: "Constellation Sage", strength: 1, dexterity: 3, endurance: 3, intelligence: 6, wisdom: 6, encounterRarity: "Rare", lootRarity: "Rare" },
            12: { name: "Galactic Knight", strength: 6, dexterity: 4, endurance: 5, intelligence: 2, wisdom: 2, encounterRarity: "Rare", lootRarity: "Rare" },
            13: { name: "Solar Colossus", strength: 6, dexterity: 2, endurance: 6, intelligence: 3, wisdom: 3, encounterRarity: "Rare", lootRarity: "Rare" },
            14: { name: "Astral Dragon", strength: 5, dexterity: 6, endurance: 4, intelligence: 4, wisdom: 4, encounterRarity: "Epic", lootRarity: "Epic" },
            15: { name: "Star Sovereign", strength: 5, dexterity: 5, endurance: 5, intelligence: 6, wisdom: 6, encounterRarity: "Epic", lootRarity: "Epic" }
        },
        14: {
            1: { name: "Infernal Imp", strength: 3, dexterity: 4, endurance: 2, intelligence: 2, wisdom: 1, encounterRarity: "Common", lootRarity: "Common" },
            2: { name: "Hell Hound Pup", strength: 4, dexterity: 4, endurance: 2, intelligence: 1, wisdom: 1, encounterRarity: "Common", lootRarity: "Common" },
            3: { name: "Ash Fiend", strength: 4, dexterity: 3, endurance: 4, intelligence: 1, wisdom: 1, encounterRarity: "Common", lootRarity: "Common" },
            4: { name: "Demon Bat", strength: 2, dexterity: 6, endurance: 2, intelligence: 1, wisdom: 1, encounterRarity: "Common", lootRarity: "Common" },
            5: { name: "Lava Spawn", strength: 4, dexterity: 2, endurance: 5, intelligence: 1, wisdom: 1, encounterRarity: "Common", lootRarity: "Common" },
            6: { name: "Infernal Raider", strength: 5, dexterity: 4, endurance: 3, intelligence: 2, wisdom: 1, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            7: { name: "Demon Archer", strength: 3, dexterity: 6, endurance: 2, intelligence: 2, wisdom: 2, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            8: { name: "Hell Brute", strength: 6, dexterity: 1, endurance: 6, intelligence: 1, wisdom: 1, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            9: { name: "Chaos Warlock", strength: 1, dexterity: 2, endurance: 2, intelligence: 6, wisdom: 5, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            10: { name: "Inferno Knight", strength: 6, dexterity: 4, endurance: 5, intelligence: 2, wisdom: 1, encounterRarity: "Rare", lootRarity: "Rare" },
            11: { name: "Abyssal Reaper", strength: 5, dexterity: 6, endurance: 3, intelligence: 3, wisdom: 2, encounterRarity: "Rare", lootRarity: "Rare" },
            12: { name: "Pit Lord", strength: 6, dexterity: 2, endurance: 6, intelligence: 3, wisdom: 3, encounterRarity: "Rare", lootRarity: "Rare" },
            13: { name: "Balor Champion", strength: 6, dexterity: 4, endurance: 6, intelligence: 2, wisdom: 2, encounterRarity: "Rare", lootRarity: "Rare" },
            14: { name: "Infernal Dragon", strength: 6, dexterity: 5, endurance: 5, intelligence: 4, wisdom: 3, encounterRarity: "Epic", lootRarity: "Epic" },
            15: { name: "Archdemon Xarthul", strength: 6, dexterity: 5, endurance: 6, intelligence: 6, wisdom: 5, encounterRarity: "Epic", lootRarity: "Epic" }
        },

        15: {
            1: { name: "Primordial Spark", strength: 2, dexterity: 4, endurance: 2, intelligence: 3, wisdom: 3, encounterRarity: "Common", lootRarity: "Common" },
            2: { name: "Ancient Wisp", strength: 1, dexterity: 5, endurance: 2, intelligence: 5, wisdom: 4, encounterRarity: "Common", lootRarity: "Common" },
            3: { name: "Titan Beetle", strength: 5, dexterity: 2, endurance: 5, intelligence: 1, wisdom: 1, encounterRarity: "Common", lootRarity: "Common" },
            4: { name: "World Serpent Spawn", strength: 5, dexterity: 4, endurance: 4, intelligence: 1, wisdom: 1, encounterRarity: "Common", lootRarity: "Common" },
            5: { name: "Elder Guardian", strength: 4, dexterity: 3, endurance: 5, intelligence: 2, wisdom: 3, encounterRarity: "Common", lootRarity: "Common" },
            6: { name: "Celestial Warrior", strength: 5, dexterity: 4, endurance: 4, intelligence: 3, wisdom: 2, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            7: { name: "Time Stalker", strength: 3, dexterity: 6, endurance: 3, intelligence: 4, wisdom: 2, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            8: { name: "Titan Colossus", strength: 6, dexterity: 1, endurance: 6, intelligence: 2, wisdom: 2, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            9: { name: "Reality Weaver", strength: 1, dexterity: 2, endurance: 2, intelligence: 6, wisdom: 6, encounterRarity: "Uncommon", lootRarity: "Uncommon" },
            10: { name: "Void Titan", strength: 6, dexterity: 3, endurance: 6, intelligence: 2, wisdom: 2, encounterRarity: "Rare", lootRarity: "Rare" },
            11: { name: "Astral Phoenix", strength: 5, dexterity: 6, endurance: 4, intelligence: 3, wisdom: 3, encounterRarity: "Rare", lootRarity: "Rare" },
            12: { name: "Chrono Sage", strength: 2, dexterity: 3, endurance: 3, intelligence: 6, wisdom: 6, encounterRarity: "Rare", lootRarity: "Rare" },
            13: { name: "Eternal Champion", strength: 6, dexterity: 5, endurance: 6, intelligence: 3, wisdom: 3, encounterRarity: "Rare", lootRarity: "Rare" },
            14: { name: "Cosmic Dragon", strength: 6, dexterity: 6, endurance: 5, intelligence: 4, wisdom: 4, encounterRarity: "Epic", lootRarity: "Epic" },
            15: { name: "The First One", strength: 6, dexterity: 6, endurance: 6, intelligence: 6, wisdom: 6, encounterRarity: "Epic", lootRarity: "Epic" }
        }
    };
    
    function scaleEnemyStat(baseStat, enemyLevel) {
        return Math.round(baseStat * (1.1 ** enemyLevel));
    }
    
    var level = (arena - 1) * 10 + Math.ceil(Math.random() * 10);
    var rarity = getRandomRarity();
    var rollEnemies = Object.values(enemies[arena]).filter(item => item.encounterRarity === rarity);
    while (rollEnemies.length === 0) {
        rarity = getRandomRarity();
        rollEnemies = Object.values(enemies[arena]).filter(item => item.encounterRarity === rarity);
    }
    var enemy = rollEnemies[Math.floor(Math.random() * rollEnemies.length)];
    enemy.strength = scaleEnemyStat(enemy.strength, level);
    enemy.dexterity = scaleEnemyStat(enemy.dexterity, level);
    enemy.endurance = scaleEnemyStat(enemy.endurance, level);
    enemy.intelligence = scaleEnemyStat(enemy.intelligence, level);
    enemy.wisdom = scaleEnemyStat(enemy.wisdom, level);
    
    return enemy;
}
function getRandomRarity(luck = 1) {
        const rarities = [
            { name: "Common", weight: 6000 },
            { name: "Uncommon", weight: 2500 },
            { name: "Rare", weight: 1000 },
            { name: "Epic", weight: 350 },
            { name: "Mythic", weight: 90 },
            { name: "Legendary", weight: 40 },
            { name: "Exotic", weight: 15 },
            { name: "Unique", weight: 5 }
        ];
        luck = Math.max(0, luck);
        const adjusted = rarities.map((rarity, index) => {
            let adjustedWeight = rarity.weight;

            if (index > 1) {
                adjustedWeight *= 1 + (luck * (index / 12));
            }

            return {
                name: rarity.name,
                weight: adjustedWeight
            };
        });

        const totalWeight = adjusted.reduce((sum, r) => sum + r.weight, 0);
        let rand = Math.random() * totalWeight;
        for (const rarity of adjusted) {
            rand -= rarity.weight;
            
            if (rand <= 0) {
                return rarity.name;
            }
        }
        return "Common";
    }

function rollItem(luck = 1,itemType = "") {
    const itemPrefixes = [
      { prefix: "Ancient", stats: { wisdom: 4, intelligence: 2 } },
      { prefix: "Arcane", stats: { intelligence: 5, wisdom: 2 } },
      { prefix: "Ashen", stats: { endurance: 2, wisdom: 1 } },
      { prefix: "Astral", stats: { wisdom: 4, dexterity: 2 } },
      { prefix: "Barbed", stats: { strength: 3 } },
      { prefix: "Blazing", stats: { strength: 4, endurance: 1 } },
      { prefix: "Bleeding", stats: { strength: 2, dexterity: 2 } },
      { prefix: "Blessed", stats: { wisdom: 4, endurance: 2 } },
      { prefix: "Bloodied", stats: { strength: 5 } },
      { prefix: "Bone", stats: { endurance: 3 } },
      { prefix: "Brass", stats: { endurance: 2, intelligence: 1 } },
      { prefix: "Bright", stats: { intelligence: 2, wisdom: 2 } },
      { prefix: "Bronze", stats: { endurance: 3 } },
      { prefix: "Burning", stats: { strength: 4 } },
      { prefix: "Cinder", stats: { endurance: 2, strength: 2 } },
      { prefix: "Cloud", stats: { dexterity: 4 } },
      { prefix: "Corrupted", stats: { strength: 5, wisdom: -1 } },
      { prefix: "Crimson", stats: { strength: 3, endurance: 1 } },
      { prefix: "Crystal", stats: { intelligence: 4 } },
      { prefix: "Cursed", stats: { strength: 6, wisdom: -2 } },
      { prefix: "Dark", stats: { dexterity: 2, intelligence: 2 } },
      { prefix: "Dawn", stats: { wisdom: 3, endurance: 1 } },
      { prefix: "Deadly", stats: { strength: 5, dexterity: 2 } },
      { prefix: "Deep", stats: { wisdom: 4 } },
      { prefix: "Demonic", stats: { strength: 6, endurance: 2 } },
      { prefix: "Divine", stats: { wisdom: 5, endurance: 2 } },
      { prefix: "Dragon", stats: { strength: 6, endurance: 3 } },
      { prefix: "Dread", stats: { strength: 4, wisdom: 1 } },
      { prefix: "Duskwalker", stats: { dexterity: 5, wisdom: 2 } },
      { prefix: "Ebon", stats: { endurance: 3, strength: 2 } },
      { prefix: "Echoing", stats: { wisdom: 3, intelligence: 1 } },
      { prefix: "Elder", stats: { wisdom: 5 } },
      { prefix: "Electric", stats: { dexterity: 5 } },
      { prefix: "Emerald", stats: { endurance: 4, wisdom: 1 } },
      { prefix: "Enchanted", stats: { intelligence: 4, wisdom: 2 } },
      { prefix: "Eternal", stats: { endurance: 5 } },
      { prefix: "Fading", stats: { dexterity: 2, wisdom: 1 } },
      { prefix: "Feral", stats: { strength: 4, dexterity: 2 } },
      { prefix: "Fiery", stats: { strength: 4 } },
      { prefix: "Frost", stats: { intelligence: 3, endurance: 2 } },
      { prefix: "Frozen", stats: { endurance: 4 } },
      { prefix: "Ghostly", stats: { dexterity: 4, wisdom: 2 } },
      { prefix: "Gilded", stats: { intelligence: 2, endurance: 1 } },
      { prefix: "Glacial", stats: { endurance: 5 } },
      { prefix: "Golden", stats: { wisdom: 3, intelligence: 2 } },
      { prefix: "Grim", stats: { strength: 3, wisdom: 2 } },
      { prefix: "Hallowed", stats: { wisdom: 5 } },
      { prefix: "Haunted", stats: { wisdom: 3, intelligence: 1 } },
      { prefix: "Heavy", stats: { endurance: 6, dexterity: -2 } },
      { prefix: "Hellfire", stats: { strength: 6, intelligence: 1 } },
      { prefix: "Hidden", stats: { dexterity: 5 } },
      { prefix: "Holy", stats: { wisdom: 5, endurance: 1 } },
      { prefix: "Hunter's", stats: { dexterity: 4, strength: 2 } },
      { prefix: "Icebound", stats: { endurance: 4, intelligence: 1 } },
      { prefix: "Infernal", stats: { strength: 6 } },
      { prefix: "Iron", stats: { endurance: 5 } },
      { prefix: "Jagged", stats: { strength: 4 } },
      { prefix: "King's", stats: { wisdom: 3, endurance: 3 } },
      { prefix: "Knight's", stats: { endurance: 4, strength: 2 } },
      { prefix: "Lethal", stats: { dexterity: 5, strength: 2 } },
      { prefix: "Light", stats: { dexterity: 4 } },
      { prefix: "Lost", stats: { wisdom: 2, intelligence: 2 } },
      { prefix: "Lunar", stats: { wisdom: 4, intelligence: 2 } },
      { prefix: "Mageborn", stats: { intelligence: 6 } },
      { prefix: "Mystic", stats: { wisdom: 4, intelligence: 3 } },
      { prefix: "Night", stats: { dexterity: 4, wisdom: 1 } },
      { prefix: "Obsidian", stats: { endurance: 4, strength: 2 } },
      { prefix: "Phantom", stats: { dexterity: 5, intelligence: 1 } },
      { prefix: "Poisoned", stats: { dexterity: 3, intelligence: 2 } },
      { prefix: "Primal", stats: { strength: 5, endurance: 2 } },
      { prefix: "Radiant", stats: { wisdom: 5, intelligence: 1 } },
      { prefix: "Raging", stats: { strength: 6 } },
      { prefix: "Royal", stats: { wisdom: 3, intelligence: 2 } },
      { prefix: "Runed", stats: { intelligence: 4, wisdom: 2 } },
      { prefix: "Savage", stats: { strength: 5 } },
      { prefix: "Scarlet", stats: { strength: 3, dexterity: 1 } },
      { prefix: "Shadow", stats: { dexterity: 5, intelligence: 1 } },
      { prefix: "Shattered", stats: { strength: 2, endurance: -1 } },
      { prefix: "Silver", stats: { dexterity: 2, wisdom: 2 } },
      { prefix: "Sky", stats: { dexterity: 4 } },
      { prefix: "Soul", stats: { wisdom: 4, intelligence: 2 } },
      { prefix: "Spectral", stats: { dexterity: 4, wisdom: 2 } },
      { prefix: "Steel", stats: { endurance: 5, strength: 1 } },
      { prefix: "Storm", stats: { dexterity: 5, strength: 1 } },
      { prefix: "Sun", stats: { wisdom: 4, endurance: 1 } },
      { prefix: "Swift", stats: { dexterity: 6 } },
      { prefix: "Thunder", stats: { strength: 5, dexterity: 1 } },
      { prefix: "Titan", stats: { strength: 7, endurance: 3 } },
      { prefix: "Twilight", stats: { wisdom: 3, dexterity: 2 } },
      { prefix: "Venomous", stats: { dexterity: 4, intelligence: 1 } },
      { prefix: "Void", stats: { intelligence: 5, wisdom: 2 } },
      { prefix: "War", stats: { strength: 5, endurance: 2 } },
      { prefix: "Wild", stats: { dexterity: 3, strength: 2 } },
      { prefix: "Winter", stats: { endurance: 4, wisdom: 1 } },
      { prefix: "Wrathful", stats: { strength: 6, endurance: 1 } }
    ];
    const itemNouns = {
        sword: ["Blade","Longsword","Broadsword","Edge","Sabre","Claymore","Rapier","Greatsword","Fang","Cutter","Slayer","Reaver","Piercer","Brand","Steel","Tooth"],
        shirt: ["Tunic","Chestplate","Armor","Vest","Robe","Mail","Cuirass","Wrap","Garb","Jacket","Battlegear","Hauberk","Coat","Raiment","Shroud","Mantle"],
        boots: ["Boots","Greaves","Treads","Stompers","Walkers","Sabatons","Footguards","Trailboots","Striders","Marchers","Steps","Talonboots","Pathwalkers","Warboots"],
        crossbow: ["Crossbow","Launcher","Piercer","Boltcaster","Repeater","Arbalest","Boltthrower","Siegebow","Stringer","Harpoon","Shotcaster","Skewer","Ballista"],
        crystalWand: ["Crystal Wand","Focus","Channeler","Rod","Catalyst","Spellstick","Scepter","Shard","Prism","Conduit","Soulwand","Gemrod","Caster"],
        eyeShield: ["Eye Shield","Watcher","Aegis","Ward","Barrier","Bulwark","Protector","Guardian","Sightguard","Eyewall","Defender","Shell"],
        fairyWand: ["Fairy Wand","Pixie Rod","Sprig","Dreamstick","Moonwand","Twinkle Rod","Fae Scepter","Lightbranch","Charmstick","Wishrod"],
        fireShield: ["Fire Shield","Flameguard","Inferno Ward","Burnwall","Cinder Bulwark","Blazeguard","Ember Shield","Heatguard","Pyre Wall","Ashguard"],
        heavyShield: ["Tower Shield","Bulwark","Heavy Guard","Wall","Ironwall","Bastion","Protector","Fortress Shield","Warwall","Defender"],
        helmet: ["Helmet","Helm","Headguard","Crown","Visor","Warhelm","Cap","Faceguard","Battlehelm","Ironhelm","Mindguard","Skullcap"],
        helmetHorns: ["Horned Helm","Warhelm","Skullhelm","Beast Helm","Raider Helm","Conqueror Helm","Horncrown","Warlord Helm","Bullhelm","Savage Helm"],
        jewel: ["Gem","Jewel","Stone","Ruby","Emerald","Sapphire","Crystal","Diamond","Opal","Relic","Shard","Charm","Pendant","Treasure"],
        lightningShield: ["Storm Shield","Thunder Guard","Voltwall","Lightning Ward","Spark Bulwark","Tempest Shield","Shockguard","Electro Aegis","Static Wall"],
        relic: ["Relic","Artifact","Idol","Totem","Charm","Ancient Relic","Sigil","Tablet","Rune","Heirloom","Curio","Keepsake","Talisman"],
        scythe: ["Scythe","Reaper","Harvester","Soulreaper","Grimblade","Moonscythe","Crescent","Deathscythe","Reapfang","Nightreaper"],
        shield: ["Shield","Aegis","Protector","Bulwark","Barrier","Guard","Defender","Wall","Buckler","Ward","Shell","Guardian"],
        sickle: ["Sickle","Hookblade","Reaper Hook","Crescent Blade","Harvester","Crook","Hook","Moonblade","Cutlass","Hookfang"],
        trident: ["Trident","Spearfork","Tidepiercer","Seaspike","Wavecaller","Fork","Storm Trident","Oceanfang","Deepfork","Leviathan Spear"],
        pants: ["Leggings","Pants","Greaves","Trousers","Legguards","Chausses","Battlepants","Strideguards","Legwraps","Warleggings","Kilt","Trackers","Legplates","Stormpants"]
    };
    
    var rarity = getRandomRarity(luck);
    var prefix = itemPrefixes[Math.floor(Math.random()*itemPrefixes.length)];
    Object.keys(prefix.stats).forEach(key => {
      var mult = {
            "Common": 0.5,
            "Uncommon": 0.75,
            "Rare": 1,
            "Epic": 1.5,
            "Mythic": 2,
            "Legendary": 3,
            "Exotic": 5,
            "Unique": 8
        }
        mult = mult[rarity];
        prefix.stats[key] = prefix.stats[key] * mult;
        prefix.stats[key] = Math.ceil(prefix.stats[key]);
    });
    var power = generateItemPower(rarity);
    var i = Math.floor(Math.random()*5);
    var name = "";
    var type = "";
    if (Math.floor(Math.random()*2)==0 && itemType=="") {
        switch(i) {
            case 0:
                type = "head";
                i = Math.floor(Math.random()*2);
                if (i == 0) {
                    i = Math.floor(Math.random()*itemNouns.helmet.length);
                    name = itemNouns.helmet[i];
                } else {
                    i = Math.floor(Math.random()*itemNouns.helmetHorns.length);
                    name = itemNouns.helmetHorns[i];
                }
                break;
            case 1:
                type = "torso";
                i = Math.floor(Math.random()*itemNouns.shirt.length);
                name = itemNouns.shirt[i];
                break;
            case 2:
                type = "legs";
                i = Math.floor(Math.random()*itemNouns.pants.length);
                name = itemNouns.pants[i];
                break;
            case 3:
                type = "boots";
                i = Math.floor(Math.random()*itemNouns.boots.length);
                name = itemNouns.boots[i];
                break;
            case 4:
                type = "secondary";
                i = Math.floor(Math.random()*2);
                if (i == 0) {
                    i = Math.floor(Math.random()*itemNouns.jewel.length);
                    name = itemNouns.jewel[i];
                } else if (i == 1) {
                    i = Math.floor(Math.random()*itemNouns.relic.length);
                    name = itemNouns.relic[i];
                }
                break;
        }
    } else if (itemType=="") {
        type = "primary";
        i = Math.floor(Math.random()*7);
        if (i == 0) {
            i = Math.floor(Math.random()*itemNouns.sword.length);
            name = itemNouns.sword[i];
        } else if (i == 1) {
            i = Math.floor(Math.random()*itemNouns.crossbow.length);
            name = itemNouns.crossbow[i];
        } else if (i == 2) {
            i = Math.floor(Math.random()*itemNouns.crystalWand.length);
            name = itemNouns.crystalWand[i];
        } else if (i == 3) {
            i = Math.floor(Math.random()*itemNouns.fairyWand.length);
            name = itemNouns.fairyWand[i];
        } else if (i == 4) {
            i = Math.floor(Math.random()*itemNouns.scythe.length);
            name = itemNouns.scythe[i];
        } else if (i == 5) {
            i = Math.floor(Math.random()*itemNouns.sickle.length);
            name = itemNouns.sickle[i];
        } else if (i == 6) {
            i = Math.floor(Math.random()*itemNouns.trident.length);
            name = itemNouns.trident[i];
        }
    }
    
    if (itemType !== "") {
        if(itemType == "armor") {
            i = Math.floor(Math.random()*4);
            switch(i) {
                case 0:
                    type = "head";
                    i = Math.floor(Math.random()*2);
                    if (i == 0) {
                        i = Math.floor(Math.random()*itemNouns.helmet.length);
                        name = itemNouns.helmet[i];
                    } else {
                        i = Math.floor(Math.random()*itemNouns.helmetHorns.length);
                        name = itemNouns.helmetHorns[i];
                    }
                    break;
                case 1:
                    type = "torso";
                    i = Math.floor(Math.random()*itemNouns.shirt.length);
                    name = itemNouns.shirt[i];
                    break;
                case 2:
                    type = "legs";
                    i = Math.floor(Math.random()*itemNouns.pants.length);
                    name = itemNouns.pants[i];
                    break;
                case 3:
                    type = "boots";
                    i = Math.floor(Math.random()*itemNouns.boots.length);
                    name = itemNouns.boots[i];
                    break;
            }
        } else if (itemType == "weapon") {
            type = "primary";
            i = Math.floor(Math.random()*7);
            if (i == 0) {
                i = Math.floor(Math.random()*itemNouns.sword.length);
                name = itemNouns.sword[i];
            } else if (i == 1) {
                i = Math.floor(Math.random()*itemNouns.crossbow.length);
                name = itemNouns.crossbow[i];
            } else if (i == 2) {
                i = Math.floor(Math.random()*itemNouns.crystalWand.length);
                name = itemNouns.crystalWand[i];
            } else if (i == 3) {
                i = Math.floor(Math.random()*itemNouns.fairyWand.length);
                name = itemNouns.fairyWand[i];
            } else if (i == 4) {
                i = Math.floor(Math.random()*itemNouns.scythe.length);
                name = itemNouns.scythe[i];
            } else if (i == 5) {
                i = Math.floor(Math.random()*itemNouns.sickle.length);
                name = itemNouns.sickle[i];
            } else if (i == 6) {
                i = Math.floor(Math.random()*itemNouns.trident.length);
                name = itemNouns.trident[i];
            }
        } else if (itemType == "second") {
            type = "secondary";
            i = Math.floor(Math.random()*2);
            if (i == 0) {
                i = Math.floor(Math.random()*itemNouns.jewel.length);
                name = itemNouns.jewel[i];
            } else if (i == 1) {
                i = Math.floor(Math.random()*itemNouns.relic.length);
                name = itemNouns.relic[i];
            }
        } else {
            i = Math.floor(Math.random()*itemNouns[itemType].length);
            name = itemNouns[itemType][i];
        }
    }
    
    var image = "";
    Object.keys(itemNouns).forEach(key => {
        if (itemNouns[key].includes(name)) {
            image = key;
        }
    });
    
    if (type == "secondary") {
        power = 0;
        Object.keys(prefix.stats).forEach(item => {
             prefix.stats[item] = prefix.stats[item] * 2;
        });
        Object.keys(prefix.stats).forEach(item => {
            power += prefix.stats[item];
        });
    }
    
    return {"name":(prefix.prefix + " " + name), "type":type, "power":power, "trait":prefix.stats, "rarity":rarity, "image":image};
    function generateItemPower(rarity) {
        const rarityPower = {
            Common:     [1, 10],
            Uncommon:   [8, 20],
            Rare:       [18, 35],
            Epic:       [30, 55],
            Mythic:     [50, 80],
            Legendary:  [75, 120],
            Exotic:     [110, 160],
            Unique:     [150, 250]
        };

        const [min, max] = rarityPower[rarity];

        // Bias toward lower values
        const roll = Math.random() ** 1.5;

        return Math.floor(min + (max - min) * roll);
    }
}

document.getElementById("settingsPortReload").addEventListener("click", (e) => {
    const field = document.getElementById("settingsPortInput");
    const exportData = Object.assign({}, localStorage); 
    field.value = JSON.stringify(exportData, null, 2)
});
document.getElementById("settingsPortConfirm").addEventListener("click", (e) => {
    const field = document.getElementById("settingsPortInput");
    if (confirm("Are you sure you want to replace your data?")) {
        try {
            const data = JSON.parse(field.value);
            localStorage.clear();
            for (const [key, value] of Object.entries(data)) {
                const valueToString = typeof value === "object" ? JSON.stringify(value) : value;
                localStorage.setItem(key, valueToString);
            }
            alert("Data overwrite succesful!");
            location.reload();
        } catch (error) {
            alert("Data overwrite unsucessful. Your input may be invalid or corrupted.");
        }
    }
});

async function notif(text, duration = 5) {
    const container = document.getElementById("notifsContainer");
    if (!container) return;

    const child = document.createElement("div");
    child.classList.add("notifDiv");
    child.innerHTML = `
        <div class="notifDivInner">
            <p></p>
            <button class="notifClose"><img src="images/close.svg" alt="Close"></button>
        </div>
        <div class="notifBar"></div>
    `;

    child.querySelector("p").textContent = text;

    const notifBar = child.querySelector(".notifBar");
    if (notifBar) {
        notifBar.style.animationDuration = `${duration}s`;
    }

    let isRemoved = false;
    const removeNotif = () => {
        if (!isRemoved) {
            isRemoved = true;
            child.remove();
        }
    };
    child.querySelector(".notifClose").addEventListener("click", removeNotif);

    container.append(child);
    await new Promise((resolve) => setTimeout(resolve, duration * 1000));
    removeNotif();
}


//localStorage.clear();location.reload();
updateBooksCollapse();
updateCardTable();
initializeBooksCollapseState();

const destination = localStorage.getItem("destinationDoc");
if (destination) {
    loadDocument(destination);
    currentDoc = destination;
    localStorage.removeItem("destinationDoc");
} else {
    var list = JSON.parse(localStorage.getItem("docsHistory"));
    if (list == null) {
        loadDocument("Scribe Notes Guide")
    } else {
        currentDoc = list[0];
        loadDocument(list[0]);
    }
}

if (!localStorage.getItem("dimensionsNotif")) {
    if (window.innerHeight < 500 || window.innerWidth < 750) {
        alert("This app is not meant for use on mobile devices or on small viewports. Some features may not work properly. It is recommended to use a viewport with a width of at least 750px and a height of 500px.");
    }
    window.addEventListener("resize", (e) => {
        if (window.innerHeight < 500 || window.innerWidth < 750) {
            alert("This app is not meant for use on mobile devices or on small viewports. Some features may not work properly. It is recommended to use a viewport with a width of at least 750px and a height of 500px.");
        }
    },{once: true});
    localStorage.setItem("dimensionsNotif",true);
}