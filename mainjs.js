//Dynamically generated content variables. used on page load to build some of the creature list as well as a single location to validate entries against
const Creatures = [ 'Acrocanthosaurus','Apatosaurus','Archelon','Arganodus','Auroraceratops','Coahuilaceratops','Elasmosaurus','HorseshoeCrab','Kronosaurus','Ichthyovenator','Lurdusaurus','Malawania','Megalosaurus','Megaraptor','Mosasaurus','Oryctodromeus','Pachycephalosaurus','Palaeophis','Parasaurolophus','Pteranodon','Saichania','Tropeognathus','Tyrannosaurus','Utahraptor','Velociraptor'];
const Herbivores = ['Apatosaurus','Archelon','Auroraceratops','Coahuilaceratops','HorseshoeCrab','Lurdusaurus','Oryctodromeus','Pachycephalosaurus','Parasaurolophus','Saichania'];
const Carnivores = ['Acrocanthosaurus','Ichthyovenator','Megalosaurus','Megaraptor','Tyrannosaurus','Utahraptor','Velociraptor'];
const Flyers = ['Pteranodon','Tropeognathus'];
const Aquatics = ['Arganodus','Elasmosaurus','Kronosaurus','Malawania ','Mosasaurus','Palaeophis'];
const Events = ['WeatherImmunity','LowFoodWaterDrain','AutoResurrection','AISwarm','Nesting','GrowthBuff','PledgeAmplify','Reskin'];
const AI = ['Arganodus','Auroraceratops','HorseshoeCrab','Malawania'];
var AddCreatureCarnButton = document.createDocumentFragment();
var AddCreatureHerbButton = document.createDocumentFragment();
var AddCreatureAquaButton = document.createDocumentFragment();
var AddCreatureFlyerButton = document.createDocumentFragment();
var AddEventButton = document.createDocumentFragment();
var AddAIButton = document.createDocumentFragment();
//Modal logic
function OpenLoad() {
    document.getElementById("fileModal").style.display = "block";
}
window.onclick = function(event) {
  if (event.target == document.getElementById("fileModal")) {
    document.getElementById("fileModal").style.display = "none";
  }
};
function CloseLoad() {
    document.getElementById("fileModal").style.display = "none";
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//used by header buttons to set the div state as well as the button text
function SHfuntion(loc) {
    var select = document.getElementById(loc),
        but = document.getElementById(loc.concat("button"));
    if (select.style.display === "none") {
        select.style.display = "block";
        but.textContent = "Hide".concat(but.textContent.slice(4));
    } else {
        select.style.display = "none";
        but.textContent = "Show".concat(but.textContent.slice(4));
    }
}
//used by any checkbox that needs to hide another entry. check the checkbox state before using the value that the checkbox modifies
function SHSubSection(loc) {
    var select = document.getElementById(loc);
    if (select.style.display === "none") {
        select.style.display = "block";
    } else {
        select.style.display = "none";
    }
}
//used by the toggle on the dino screen to set the header for the list
function HLToggle() {
    var Tname = document.getElementById("dinoh");
    if (Tname.textContent === "Absolute Group limit") {
        Tname.textContent = "Soft Limit";
    } else {
        Tname.textContent = "Absolute Group limit";
    }
}
function SanatizeInvite(input){
    input.value = input.value.replace('https://discord.gg/','');
}
function addMPRow(dButton){
    var tabMP = document.getElementById("MPTable"),
        loc = dButton.parentNode.parentNode.rowIndex + 1,
        row = tabMP.insertRow(loc),
        cell0 = row.insertCell(0),
        cell1 = row.insertCell(1),
        cell2 = row.insertCell(2),
		cell3 = row.insertCell(3);
    cell0.innerHTML = '<input type="button" value="+" onclick="addMPRow(this)">';
    cell1.innerHTML = '<input type="button" value="x" onclick="RemoveMPRow(this)">';
	cell2.innerHTML = '<input type="button" value="C" onclick="Setrow(this)" style="background-color:coral"><input type="button" value="H" onclick="Setrow(this)"><input type="button" value="A" onclick="Setrow(this)"><input type="button" value="F" onclick="Setrow(this)">';
    cell3.appendChild(AddCreatureCarnButton.cloneNode(true));
}
function RemoveMPRow(dButton){
    var tabMP = document.getElementById("MPTable"),
        rIndex = dButton.parentNode.parentNode.rowIndex;
    tabMP.deleteRow(rIndex);
    if(rIndex == 1 && tabMP.rows.length == 1 ){
        row = tabMP.insertRow(-1),
        cell0 = row.insertCell(0),
        cell1 = row.insertCell(1),
        cell2 = row.insertCell(2),
		cell3 = row.insertCell(3);
    cell0.innerHTML = '<input type="button" value="+" onclick="addMPRow(this)">';
    cell1.innerHTML = '<input type="button" value="x" onclick="RemoveMPRow(this)">';
	cell2.innerHTML = '<input type="button" value="C" onclick="Setrow(this)" style="background-color:coral"><input type="button" value="H" onclick="Setrow(this)"><input type="button" value="A" onclick="Setrow(this)"><input type="button" value="F" onclick="Setrow(this)">';
    cell3.appendChild(AddCreatureCarnButton.cloneNode(true));
    }
}
function AddMPCreature(dSelect){
    var creature = dSelect.value;
    var btn = document.createElement('input');
    btn.type= 'button';
    btn.setAttribute('onclick','this.remove()');
    btn.value = creature;
    dSelect.parentNode.parentNode.parentNode.insertAdjacentElement ('beforeend',btn);
}
function Setrow(button){
	var btn = button.value,
	 	list = button.parentElement.children;
	
	for (var btns in list){
		if (btns == 'entries' || btns == 'item'|| btns == 'length'){break;}
		list[btns].style.backgroundColor = "revert";
		
	}
	switch(btn){
		case "C":
			button.style.backgroundColor="coral";
			button.parentElement.parentElement.cells[3].innerHTML="";
			button.parentElement.parentElement.cells[3].appendChild(AddCreatureCarnButton.cloneNode(true));
			break;
		case "H":
			button.style.backgroundColor="aquamarine";
			button.parentElement.parentElement.cells[3].innerHTML="";
			button.parentElement.parentElement.cells[3].appendChild(AddCreatureHerbButton.cloneNode(true));
			break;
		case "A":
			button.style.backgroundColor="aqua";
			button.parentElement.parentElement.cells[3].innerHTML="";
			button.parentElement.parentElement.cells[3].appendChild(AddCreatureAquaButton.cloneNode(true));
			break;
		case "F":
			button.style.backgroundColor="darkturquoise";
			button.parentElement.parentElement.cells[3].innerHTML="";
			button.parentElement.parentElement.cells[3].appendChild(AddCreatureFlyerButton.cloneNode(true));
			break;
		default:
			alert("Quit Breaking the config tool.");
			return;
	}
}
//general function to recompute the value based on a time multiplyer
function RecomputeTime(loc, caller){
    var select = document.getElementById(loc),
        mult = caller.value,
        oldmult = select.getAttribute("data-state"),//custom datavalue tied to the html object
        val = select.value,
        decompVal = 0,
        recompVal = 0;
    switch(oldmult) {
        case "0":
            decompVal = val;
            break;
        case "1":
            decompVal = val*60;
            break;
        case "2":
            decompVal = val*3600;
            break;
        case "3":
            decompVal = val*86400;
            break;
    }
    switch(mult) {
        case "0":
            recompVal = decompVal;
            break;
        case "1":
            recompVal = decompVal/60;
            break;
        case "2":
            recompVal = decompVal/3600;
            break;
        case "3":
            recompVal = decompVal/86400;
            break;
    }
    select.setAttribute("data-state",mult);
    select.value = recompVal;
}
//used to build and destroy the rank level lines. passes values over to the command and player configuration
function RankRemoveRow(oButton) {
    var tabRanks = document.getElementById("Ranks"),
        selections = document.getElementsByName("Ranks"),//grabs all selects that use this list
        rIndex = oButton.parentNode.parentNode.rowIndex,//the indexs match thanks to the blank space used as a placeholder of the rows
        select = 0;
    tabRanks.deleteRow(rIndex);
    for (select in selections) {
        if (select == 'entries' || select == 'item'){break;}//chrome why //firefox why
        selections[select].remove(rIndex);
    }
}
function RankAddRow(oButton) {
    var tab = document.getElementById("Ranks"),
        selections = document.getElementsByName("Ranks"),
        loc = oButton.parentNode.parentNode.rowIndex + 1,
        row = tab.insertRow(loc),
        cell0 = row.insertCell(0),//you have to define all the cells to variables before modifying them, else it will fail to populate the cells
        cell1 = row.insertCell(1),
        cell2 = row.insertCell(2),
        cell3 = row.insertCell(3),
        opt = document.createElement("option"),
        select = 0;
    cell0.innerHTML = '<input type="text" value="UnnamedRank" onchange="updatename(this)">';
    cell1.innerHTML = '<input type="number" value="1" step= 1 onwheel="this.blur()" style="width:50px">';
    cell2.innerHTML = '<input type="button" value="X" onclick="RankRemoveRow(this)">';
    cell3.innerHTML = '<input type="button" value="+" onclick="RankAddRow(this)">';
    opt.innerHTML = "UnnamedRank";
    opt.value = "UnnamedRank";
    for (select in selections) {
        if (select == 'entries' || select == 'item'){break;}//chrome why entries. and firefox...item?
        selections[select].add(opt.cloneNode(true), loc);
    }
         
}
function updatename(oText) {
    var loc = oText.parentNode.parentNode.rowIndex,
        selections = document.getElementsByName("Ranks"),
        select = 0;
    for (select in selections) {
        if (select == 'entries' || select == 'item'){break;}//chrome why entries. and firefox...item?
        selections[select].options[loc].value = oText.value;
        selections[select].options[loc].innerHTML = oText.value;
    }
}
//used to build and destroy the lines of the staff chart
function StaffRemoveRow(oButton) {
    var tab = document.getElementById("staff");
    tab.deleteRow(oButton.parentNode.parentNode.rowIndex);
}
//used by any dropdown that needs to build based on the permissions table generated by the user
function setlist() {
    var tab = document.getElementById("Ranks").getElementsByTagName('tbody')[0],
        aData = [' '],//this pushes a blank entry at the beginning of the list. allows us to select the blank when something needs it
        fragment = document.createDocumentFragment(),//collects all entries into a fragment to not cause Dom update spam when having a large number of ranks defined
        t = 0;
    for (t in tab.rows) {
        if (t == "length" || t == 'item') {break; }//because chrome for is dumb and adds extra data to the end of the array, starting with length and firefox....why item in an index?
        
        var da = tab.rows[t].cells[0].firstChild.value;
        if (da != undefined) {//gets rid of the undefined that is grabbed from the header row
            aData.push(da);
        }
    }
    aData.forEach(function (aData, index) {
        var opt = document.createElement("option");
        opt.innerHTML = aData;
        opt.value = aData;
        fragment.appendChild(opt);
    });
    var div = document.createElement('div');//hack to turn a fragment into a string
    div.appendChild(fragment.cloneNode(true));
    return '<select name="Ranks">' + div.innerHTML + '</select>';
}

function StaffAddRow(oButton) {
    var tab = document.getElementById("staff"),
        loc = oButton.parentNode.parentNode.rowIndex + 1,
        row = tab.insertRow(loc),
        cell0 = row.insertCell(0),//you have to define all the cells to variables before modifying them, else it will fail to populate the cells
        cell1 = row.insertCell(1),
        cell2 = row.insertCell(2),
        cell3 = row.insertCell(3),
        cell4 = row.insertCell(4),
        cell5 = row.insertCell(5),
        cell6 = row.insertCell(6),
        cell7 = row.insertCell(7);
    cell0.innerHTML = '<input type="number" value="" onchange="validateid(this)" onwheel="this.blur()">';
    cell1.innerHTML = setlist();
    cell2.innerHTML = '<input type="text" value="">';
    cell3.innerHTML = '<input type="color" value="#ffffff" onchange="ValidateColor(this)">';
    cell4.innerHTML = '<input type = "text" pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$" onchange ="ValidateColor(this)" size=7 maxlength="7" value="#ffffff" style="vertical-align: middle">';
    cell5.innerHTML = '<input type="button" value="X" onclick="StaffRemoveRow(this)">';
    cell6.innerHTML = '<input type="button" value="+" onclick="StaffAddRow(this)">';
    cell7.innerHTML = '<a href="#" target="_blank"></a>';
}

function validateid(id) {
    if (id.value.length !== 17 || BigInt(id.value) < 76561197960265729n || BigInt(id.value) > 76561202255233023n ) {//javascript limitation of comparing 64 bit numbers is very blatent here... also this is both the absolute min and max steam id possible
        id.style.backgroundColor = '#f66';//light red
        id.parentElement.parentElement.cells[7].firstChild.innerHTML = "";
        InternalDebug("WARN: " +id.value+ "is not a valid steam id");
    } else {
        id.style.backgroundColor = '#fff';
        var link = id.parentElement.parentElement.cells[7].firstChild;
        //we contact the api server here to get the steam name/link to put in the <a> tag
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState !=4) return;
            if (this.status == 200) {
                var data = JSON.parse(this.responseText);
                link.href = data.url;
                link.innerHTML = data.nickname;
            }
             if (this.status == 404) {
                id.style.backgroundColor = '#f66';//the id is invalid because it dosent exist
                id.parentElement.parentElement.cells[7].firstChild.innerHTML = "";
                 InternalDebug("WARN: " +id.value+ "is not a valid steam id");
             }
        };
        var APIURL = 'https://steamapi.raptorsystems.site/?id='+id.value ;//this API site is a NODE JS steam api site ran by Cleafspear. 
        xhr.open('GET',APIURL,true);
        xhr.send();
    }
}

function ValidateColor(colorbutton) {
    var pcolor = colorbutton.value;
    var r = "0x00";
    var g = "0x00";
    var b = "0x00";
    if (pcolor.length == 4) {//takes care of splitting the hex to its RGB componets, while also taking care of user input when they input a hex value
        r = "0x" + pcolor[1] + pcolor[1];
        g = "0x" + pcolor[2] + pcolor[2];
        b = "0x" + pcolor[3] + pcolor[3];
    } else if (pcolor.length == 7) {
        r = "0x" + pcolor[1] + pcolor[2];
        g = "0x" + pcolor[3] + pcolor[4];
        b = "0x" + pcolor[5] + pcolor[6];
    }
     var cr = Math.floor(parseFloat(+(r / 255).toFixed(1))*255);
     var cg = Math.floor(parseFloat(+(g / 255).toFixed(1))*255);
     var cb = Math.floor(parseFloat(+(b / 255).toFixed(1))*255);
    colorbutton.parentElement.parentElement.cells[3].firstChild.value = "#" + ((1 << 24) + (cr << 16) + (cg << 8) + cb).toString(16).slice(1);
    colorbutton.parentElement.parentElement.cells[4].firstChild.value = "#" + ((1 << 24) + (cr << 16) + (cg << 8) + cb).toString(16).slice(1);
}
function SanatizeHookInput(input){
    input.value = input.value.replace('https://discord.com/api/webhooks/','');
}
function TestWebhook(target,iconurl,webhookType){
    var webhook = document.getElementById(target).value,
        icon = document.getElementById(iconurl).value;
     var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState !=4) return;
            if (this.status == 204) {
                InternalDebug("NOTE: Webhook Test Sucessful for "+webhookType+". please verify on discord that the message is there");
            }else{
                InternalDebug("WARN: " +webhookType+ " Contains an error. this webhook will fail! Response code: "+this.status+" with message: "+this.responseText);
             }
        };
        var APIURL = 'https://discord.com/api/webhooks/'+webhook;
        xhr.open('POST',APIURL);
        xhr.setRequestHeader('Content-type', 'application/json');
        params = {
            username: "ConfigTool",
            avatar_url: icon,
            content: "If you see this message, your webhook configuration is correct for the "+webhookType+". if you have set an icon, please verify it as well."
        };
        xhr.send(JSON.stringify(params));
}
function DefaultData(DataTarget,Data){
	document.getElementById(DataTarget).value = Data;// this works ONLY if you escape your symbols first! ie use //n for /n to render the data properly
}
function ToggleConsole() {
        var select = document.getElementById('Console');
        var button = document.getElementById('ConsoleButton');
    if (select.style.display === "none") {
        button.innerHTML ="Close Debug Console";
        select.style.display = "block";
    } else {
        button.innerHTML ="Open Debug Console";
        select.style.display = "none";
    }
}
function InternalDebug(message) {
    var logger = document.getElementById('ConsoleArea');
        if (typeof message == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + "&#13;&#10;";//innerhtml dosent read \r\n here. so we use the code rep for it 
        } else {
            logger.innerHTML += message + "&#13;&#10;";
        }
}
function ReadyPage(){//this function is to replace a lot of the hand coded parts of the page with a runtime dynamic system.basically making updating parts a 1 line instead of multiline update. users should not be effected since all page data is already in ram. does cause a DOM update after load but performance hits should be negligable
    var DinoTable = document.getElementById("dinos");
    DinoTable.deleteRow(-1);
    for(index = 0; index < Creatures.length; index++)   {
        var row = DinoTable.insertRow(-1),
            cell0 = row.insertCell(0),
            cell1 = row.insertCell(1),
            cell2 = row.insertCell(2),
            cell3 = row.insertCell(3),
            cell4 = row.insertCell(4),
			cell5 = row.insertCell(5);
        cell0.innerHTML=Creatures[index];
        cell1.innerHTML='<input type="number" value="999" step = 1 style="width:50px">';
        cell2.innerHTML='<input type="number" value="100.0" min = 0 max = 100>';
        cell3.innerHTML='<input type="number" value="20.0" min = 0.1 max = 20>';
        cell4.innerHTML='<input type="number" value="0.7" min = 0 max = 20>';
		cell5.innerHTML='<input type="number" value="1.0" min = 0 max = 20>';
    }
    //this creates the "add creature" button dynamically and saves it to the global var for use elsewhere
    var innerdiv = document.createElement("div");
    innerdiv.className = "dropdown-content";
    for(var MPIndex in Carnivores){
        button = document.createElement("input");
        button.type = 'button';
        button.setAttribute('onclick','AddMPCreature(this)');
        button.value = Carnivores[MPIndex];
        innerdiv.appendChild(button);
    }
    hoverbutton = document.createElement("button");
    hoverbutton.className = 'dropbtn';
    hoverbutton.innerHTML = 'Add Creature';
    outerdiv = document.createElement("div");
    outerdiv.className = "dropdown";
    outerdiv.appendChild(hoverbutton);
    outerdiv.appendChild(innerdiv);
    AddCreatureCarnButton.appendChild(outerdiv);
    innerdiv = document.createElement("div");
    innerdiv.className = "dropdown-content";
    for(MPIndex in Herbivores){
        button = document.createElement("input");
        button.type = 'button';
        button.setAttribute('onclick','AddMPCreature(this)');
        button.value = Herbivores[MPIndex];
        innerdiv.appendChild(button);
    }
    hoverbutton = document.createElement("button");
    hoverbutton.className = 'dropbtn';
    hoverbutton.innerHTML = 'Add Creature';
    outerdiv = document.createElement("div");
    outerdiv.className = "dropdown";
    outerdiv.appendChild(hoverbutton);
    outerdiv.appendChild(innerdiv);
    AddCreatureHerbButton.appendChild(outerdiv);
    innerdiv = document.createElement("div");
    innerdiv.className = "dropdown-content";
    for(MPIndex in Aquatics){
        button = document.createElement("input");
        button.type = 'button';
        button.setAttribute('onclick','AddMPCreature(this)');
        button.value = Aquatics[MPIndex];
        innerdiv.appendChild(button);
    }
    hoverbutton = document.createElement("button");
    hoverbutton.className = 'dropbtn';
    hoverbutton.innerHTML = 'Add Creature';
    outerdiv = document.createElement("div");
    outerdiv.className = "dropdown";
    outerdiv.appendChild(hoverbutton);
    outerdiv.appendChild(innerdiv);
    AddCreatureAquaButton.appendChild(outerdiv);
    innerdiv = document.createElement("div");
    innerdiv.className = "dropdown-content";
    for(MPIndex in Flyers){
        button = document.createElement("input");
        button.type = 'button';
        button.setAttribute('onclick','AddMPCreature(this)');
        button.value = Flyers[MPIndex];
        innerdiv.appendChild(button);
    }
    hoverbutton = document.createElement("button");
    hoverbutton.className = 'dropbtn';
    hoverbutton.innerHTML = 'Add Creature';
    outerdiv = document.createElement("div");
    outerdiv.className = "dropdown";
    outerdiv.appendChild(hoverbutton);
    outerdiv.appendChild(innerdiv);
    AddCreatureFlyerButton.appendChild(outerdiv);
 	
    innerdiv = document.createElement("div");
    innerdiv.className = "dropdown-content";
    for(MPIndex in Events){
        button = document.createElement("input");
        button.type = 'button';
        button.setAttribute('onclick','AddMPCreature(this)');
        button.value = Events[MPIndex];
        innerdiv.appendChild(button);
    }
    hoverbutton = document.createElement("button");
    hoverbutton.className = 'dropbtn';
    hoverbutton.innerHTML = 'Disable Event';
    outerdiv = document.createElement("div");
    outerdiv.className = "dropdown";
    outerdiv.appendChild(hoverbutton);
    outerdiv.appendChild(innerdiv);
    AddEventButton.appendChild(outerdiv);
    innerdiv = document.createElement("div");
    innerdiv.className = "dropdown-content";
    for(MPIndex in AI){
        button = document.createElement("input");
        button.type = 'button';
        button.setAttribute('onclick','AddMPCreature(this)');
        button.value = AI[MPIndex];
        innerdiv.appendChild(button);
    }
    hoverbutton = document.createElement("button");
    hoverbutton.className = 'dropbtn';
    hoverbutton.innerHTML = 'Disable AI';
    outerdiv = document.createElement("div");
    outerdiv.className = "dropdown";
    outerdiv.appendChild(hoverbutton);
    outerdiv.appendChild(innerdiv);
    AddAIButton.appendChild(outerdiv);
 	
 	
}
document.addEventListener('DOMContentLoaded', function(event) {
  ReadyPage();
});
