//written by Cleafspear#0001 on discord. contact him to update
//define all variables here with defaults. anything with an array, leave blank
//variables are GLOBAL to ALL FUNCTIONS on here.  you cannot redefine them elsewhere

var MapNameOverride = "Forest_Island",
    GameMode = 'Free_Roam',
    GrowthLimit = 100,
    bDisplayDiscordLink = false,
    DiscordLink = "",
    bRequireSteamGroupToJoin = false,
    SteamGroupName = "",
    bDisplayIntroMessage = false,
    bConsoleLocked = true,
    ReservedAdminSlots = 2,
    bDisableGlobalChat = false,
    CarcassRateMultiplier = 1,
    CarcassSpawnRatio = 1,
    DayLength = 7050,
    TunnelNetworkDespawnTime = 259200,
    bUseMixedHerdCaps = true,
    bUseHardGroupLimits = false,
    CreatureLimits = [],
    AdminRanks = [],
    AdminCommandRules = [],
    ServerAdmins = [],
    PlayerChatColors = [],
    PlayerChatTags = [],
    AutosaveTime = 135,
    bLiveMessagesToRCON = false,
    CommunicationPort = 27015,
    IP4Binding = "127.0.0.1",
    CompatibilityMode = false,//this will show a notice to the user that their config was loaded with paramaters that are outdated
    ErrorState = false;//used in case a parse error the user must know about generates and opens the console

function parsedata(data) {
    MapNameOverride = "Forest_Island";
    GameMode = 'Free_Roam';
    GrowthLimit = 100;
    bDisplayDiscordLink = false;
    DiscordLink = "";
    bRequireSteamGroupToJoin = false;
    SteamGroupName = "";
    bDisplayIntroMessage = false;
    bConsoleLocked = true;
    ReservedAdminSlots = 2;
    bDisableGlobalChat = false;
    CarcassRateMultiplier = 1;
    CarcassSpawnRatio = 1;
    DayLength = '7050';
    bUseHardGroupLimits = false;
    CreatureLimits = [];
    AdminRanks = [];
    AdminCommandRules = [];
    ServerAdmins = [];
    PlayerChatColors = [];
    PlayerChatTags = [];
    AutosaveTime = 135;
    bLiveMessagesToRCON = false;
    CommunicationPort = 27015;
    IP4Binding = "127.0.0.1";
    CompatibilityMode = false;
    ErrorState = false;
    //console.log(data);
    var index = 0;
    data = data.replace(/\r/g, '');//in case we have carrige returns in the file,strips them before processing. we will add them back when we generate a new file
    var dataarray = data.split(/\n/);
    InternalDebug('DBG: Reading File Header');
    InternalDebug('DBG: header recived: ' + dataarray[0]);
    if (dataarray[0] !== "[/Script/BeastsOfBermuda.ServerGameInstance]") {//grab the first line and verify this IS a config file for BoB.warn if there is an issue.
        alert("This file dose not appear to be a properly formatted Beast of Bermuda Configuration file. we will still attempt to parse it however. please check for warnings in the Debug console.");
    }//we have a file with a proper header! now to start running throught the array and parsing everything.
    for (index = 0; index < dataarray.length; index++) {
        var linedata = dataarray[index].split("=");//every line has to have an = in it to be valid.
        var selector = linedata[0];
        switch (linedata[0]) {//we trim any whitespaces to avoid needing to add multiple case statements
        case 'MapNameOverride':
            MapNameOverride = linedata[1].trim().replace(/['"]+/g, '');//regex to nuke any quotes within the map name
            break;
        case 'GameMode':
            GameMode = linedata[1].trim().replace(/['"]|EGameModes::/g, '');//will nuke quotes and the preceading gamemodes config var used in older configs
            break;
        case 'GrowthLimit':
            GrowthLimit = parseFloat(linedata[1]);
            break;
        case 'bDisplayDiscordLink':
            bDisplayDiscordLink = (linedata[1].toLowerCase().trim() === "true");//lazy hack to turn a string to a boolean value while accounting for any unncessicary spaces
            break;
        case 'DiscordLink':
            DiscordLink = linedata[1].replace(/['"]+/g, '');
            break;
        case 'bRequireSteamGroupToJoin':
            bRequireSteamGroupToJoin = (linedata[1].toLowerCase().trim() === "true");
            break;
        case 'SteamGroupName':
            SteamGroupName = linedata[1].replace(/['"]+/g, '');
            break;
        case 'bDisplayIntroMessage':
            bDisplayIntroMessage = (linedata[1].toLowerCase().trim() === "true");
            break;
        case 'bConsoleLocked':
            bConsoleLocked = (linedata[1].toLowerCase().trim() === "true");
            break;
        case 'ReservedAdminSlots':
            ReservedAdminSlots = parseFloat(linedata[1]);
            break;
        case 'bDisableGlobalChat':
            bDisableGlobalChat = (linedata[1].toLowerCase().trim() === "true");
            break;
        case 'CarcassRateModifier'://for VERY OLD config imports
            InternalDebug('WARN: Found CarcassRateModifier, this is a 2019 config option.it will be ported')
            CompatibilityMode = true;
        case 'CarcassRateMultiplier':
            CarcassRateMultiplier = parseFloat(linedata[1]);
            break;
        case 'CarcassSpawnRatio':
            CarcassSpawnRatio = parseFloat(linedata[1]);
            break;
        case 'DayLength':
            DayLength = parseFloat(linedata[1]);
            break;
        case 'bUseMixedHerdCaps':
            bUseMixedHerdCaps = (linedata[1].toLowerCase().trim() === "true");
            break;
        case 'bUseHardGroupLimits':
            bUseHardGroupLimits = (linedata[1].toLowerCase().trim() === "true");
            break;
        case '+CreatureLimits'://because its use in WAY old files and may exist in current files
            CompatibilityMode = true;
            InternalDebug('WARN: the + in creature limits may cause an error in the config interpreter!');
            InternalDebug('WARN: '+ linedata);
        case 'CreatureLimits'://needs pre-processing befor pushing to the table
            if (linedata[1].trim() !== '(CreatureType') {
                InternalDebug('WARN:'+ linedata + ' Is Invalid');
                CompatibilityMode = true;
                break;
            }
            var cr = linedata[2].replace(/[:,'"]|EDinoType|PercentAllowed/g, '').trim(),
                pa = parseFloat(linedata[3]),
                gl = parseInt(linedata[4], 10);
            if (linedata[4].includes('bRequiresVeteran')) {
                InternalDebug("ERROR: bRequiresVeteran is no longer supported and WILL cause the config to fail");
                InternalDebug('ERROR: '+ linedata)
                ErrorState = true;//done to warn users that their config contains a incorrect setting that will break it
            }
            CreatureLimits.push([cr, pa, gl]);
            break;
        case 'AdminRanks':
            var ra = linedata[2].trim().slice(1, -11).trim().replace(/['"]+/g, ''),//fix for when people space out data in their config files and cause offsets that leaves quotes in the string
                le = parseInt(linedata[3], 10);
            AdminRanks.push([ra, le]);
            break;
        case 'AdminCommandRules':
            var cmd = linedata[2].trim().slice(16, -12).trim().replace(/[ ,]+/g, ''),//again with the pesky spaces...
                rank = linedata[3].trim().slice(1, -2).trim();
            AdminCommandRules.push([cmd, rank]);
            break;
        case 'ServerAdmins':
            var id = linedata[2].trim().slice(0, 17).replace(/[^0-9]+/g, ""),//regex to replace "anything but numbers", someone thought a name was valid as an id
                rank = linedata[3].trim().slice(1, -2).trim();
            ServerAdmins.push([id, rank]);
            break;
        case 'PlayerChatColors':
            try {
                var id = linedata[2].slice(0, 17).replace(/[^0-9]+/g, ""),
                    cr = Math.floor(parseFloat(linedata[4]) * 255),
                    cg = Math.floor(parseFloat(linedata[5]) * 255),
                    cb = Math.floor(parseFloat(linedata[6]) * 255);
            } catch (err) {
                
                InternalDebug("ERROR: failed reading player chat colors, discarding: " + linedata);
                ErrorState = true;
                break;
            }
            var hexrgb = "#" + ((1 << 24) + (cr << 16) + (cg << 8) + cb).toString(16).slice(1);//we never actually use the float version of the colors, and ironically this will repair any configs that have incorrect floats setup as well
            PlayerChatColors.push([id, hexrgb]);
            break;
        case 'PlayerChatTags':
            try {
                var id = linedata[2].slice(0, 17).replace(/[^0-9]+/g, ""),
                    tag = linedata[3].trim().slice(1, -2).trim();
            } catch (err) {
                InternalDebug("ERROR: failed reading player chat tag, discarding: " + linedata);
                ErrorState = true;
                break;
            }
            PlayerChatTags.push([id, tag]);
            break;
        case 'AutosaveTime':
            AutosaveTime = parseInt(linedata[1], 10);
            break;
        case 'TunnelNetworkDespawnTime'://NEW minutes to despawn tunnel networks. ticks every 5 minutes. lags by 5  minutes
            TunnelNetworkDespawnTime = parseFloat(linedata[1]);
            break;
        case '[/Script/BeastsOfBermuda.ServerGameInstance]':
        case '[/Script/BeastsOfBermuda.SaveSystem]':
        case '[/Script/BeastsOfBermuda.RCONHandler]':
        case '[/Script/BeastsOfBermuda.BBGameModeBase]':
        case '!PlayerChatColors':
        case '!PlayerChatTags':
        case '!CreatureLimits'://these consume the lines that are valid so that they dont hit the logger
            break;
        case 'bLiveMessagesToRCON':
            bLiveMessagesToRCON = (linedata[1].toLowerCase().trim() === "true");
        case 'CommunicationPort':
            CommunicationPort = parseInt(linedata[1], 10);
            break;
        case 'IP4Binding':
            IP4Binding = linedata[1].trim().replace(/['"]+/g, '');
            break;
        default:
            if (linedata != ""){
                InternalDebug("WARN: " + linedata[0] +" is not a valid config option!");
                console.log(linedata[0] + " Was Discarded");
            }
        }
    }
    InternalDebug("DBG: file load complete, parsing and building page data")
}
function buildpage() {//you must call parsedata before buildpage, otherwise it will build with default Data
    if (!document.getElementById('maps').contains(MapNameOverride)){
        InternalDebug("ERROR: Map name is invalid! provided: "+ MapNameOverride)
        ErrorState = true;
    }
    document.getElementById('maps').value = MapNameOverride;//the fact this works so well is scary in a way, as well as set blank when an option is incorrect
    if (!document.getElementById('gamemode').contains(GameMode)){
        InternalDebug("ERROR: GameMode is invalid! provided: "+ GameMode)
        ErrorState = true;
    }
    document.getElementById('gamemode').value = GameMode;
    document.getElementById('growth').value = GrowthLimit;
    if (bDisplayDiscordLink & DiscordLink == '') {
        InternalDebug("WARN: Discord was enabled but there is no link!")
    }
    document.getElementById('discordenable').checked = bDisplayDiscordLink;
    if (bDisplayDiscordLink) {
        document.getElementById('discord').style.display = 'block';
    } else {
        document.getElementById('discord').style.display = 'none';
    }
    document.getElementById('discordlink').value = DiscordLink;
    if (bRequireSteamGroupToJoin & SteamGroupName == '') {
        InternalDebug("WARN: Steam was enabled but there is no Group link!")
    }
    document.getElementById('steamgroup').checked = bRequireSteamGroupToJoin;
    if (bRequireSteamGroupToJoin) {
        document.getElementById('steam').style.display = 'block';
    } else {
        document.getElementById('steam').style.display = 'none';
    }
    document.getElementById('steamname').value = SteamGroupName;
    document.getElementById('motd').checked = bDisplayIntroMessage;
    document.getElementById('console').checked = bConsoleLocked;
    document.getElementById('slots').value = ReservedAdminSlots;
    document.getElementById('gchat').checked = bDisableGlobalChat;
    document.getElementById('carcassrate').value = CarcassRateMultiplier;
    document.getElementById('carcassratio').value = CarcassSpawnRatio;
    document.getElementById('daycycle').value = DayLength;
    document.getElementById('grouplimit').checked = bUseHardGroupLimits;
    document.getElementById('TunnelLifetime').value = TunnelNetworkDespawnTime;
    document.getElementById('Mixherd').value = bUseMixedHerdCaps;
    if (bUseHardGroupLimits) {
        document.getElementById("dinoh").textContent = "Absolute Group limit";
    } else {
        document.getElementById("dinoh").textContent = "Soft Limit";
    }
    var dinotable = document.getElementById("dinos");//this is the same code we use to grab the values from the dino table to generate the ini
    for (i in dinotable.rows) {
        if (i === "length" || i === 'item') {break; }
        if (i !== 0) {
            var dname = dinotable.rows[i].cells[0].innerHTML,
                valid = false; //we use this to verify it was actually set after searching the config. if after searching we dont find it, we set a default in its place
            if (dname == 'Creature'){continue;}//so we dont attempt to process the first row
            for (crname in CreatureLimits) {
                if (CreatureLimits[crname][0] === dname) {
                    valid = true;
                    dinotable.rows[i].cells[1].firstChild.value = CreatureLimits[crname][2];//the datatable and how they are laid out on the html are swapped. 
                    dinotable.rows[i].cells[2].firstChild.value = CreatureLimits[crname][1];
                }
            }
            if (!valid) {//somehow we dont have a creature set in the config so build a default
                dinotable.rows[i].cells[1].firstChild.value = "999";
                dinotable.rows[i].cells[2].firstChild.value = "100";
                InternalDebug("WARN: Creature "+ dname +" was not found in the config, loading defaults");
            }
        }
    }
    var ranks = document.getElementById("Ranks").getElementsByTagName('tbody')[0],//this one has the largest effect of them all, since it has to build the rows first, then build the options into a fragment for the future scripts to grab and use
        rankscount = 0,//resets to 0 on 
        rankscount = ranks.rows.length;
    for (rowid = 0; rowid < rankscount; rowid++) {
        ranks.deleteRow(-1);//simply because deleteing in order row will cause all the indexes to shift, thereby breaking if you try to index from top to bottom
    }
    var rankfragment = document.createDocumentFragment(), //stores all options into here when we need to push it during a later entry
        opt = document.createElement("option");
    opt.innerHTML = ' ';//generates the "blank" option. when not of the future code selects another, will be the default
    opt.value = ' ';
    rankfragment.appendChild(opt);
    if (AdminRanks.length == 0){//somehow we have NO loaded admin ranks.
        InternalDebug('ERROR:No ranks where loaded from file! inserting a default rank');
        ErrorState = true;
        AdminRanks = [["Default",0]];//its a nested array for the data. 
    }
        var NamedRanks = [],
            RankPowers = [];
    for (newranks in AdminRanks) {
        var row = ranks.insertRow(-1),
            cell0 = row.insertCell(0),
            cell1 = row.insertCell(1),
            cell2 = row.insertCell(2),
            cell3 = row.insertCell(3);
        cell0.innerHTML = '<input type="text" value="' + AdminRanks[newranks][0] + '" onchange="updatename(this)">';
        cell1.innerHTML = '<input type="number" value=' + AdminRanks[newranks][1] + ' step= 1 onwheel="this.blur()" style="width:50px">';
        if (newranks === 0) {
            cell2.innerHTML = '<input type="button" value="X" disabled>';
        } else {
            cell2.innerHTML = '<input type="button" value="X" onclick="RankRemoveRow(this) ">';
        }
        cell3.innerHTML = '<input type="button" value="+" onclick="RankAddRow(this)">';
        var opt = document.createElement("option");//generates the option selectors for insertion later
        opt.innerHTML = AdminRanks[newranks][0];
        opt.value = AdminRanks[newranks][0];
        rankfragment.appendChild(opt);
        if (NamedRanks.includes(AdminRanks[newranks][0])){
            InternalDebug('ERROR: Duplicate rank name '+ AdminRanks[newranks][0] + " of power " + AdminRanks[newranks][1] + " found. Please correct");
            ErrorState = true;
        }
        NamedRanks.push(AdminRanks[newranks][0]);
         if (RankPowers.includes(AdminRanks[newranks][1])){
            InternalDebug('ERROR: Duplicate rank power on '+ AdminRanks[newranks][0] + " of power " + AdminRanks[newranks][1] + " found. Please correct");
            ErrorState = true;
        }
        RankPowers.push(AdminRanks[newranks][1]);
    }
    //permission settings. if a permission isnt set, we force it to be blank.
    var commands = document.getElementById("commands");
    for (i in commands.rows) {
        var valid = false;
        if (i === "length" || i === 'item') {break; }
        if (i != 0) {
            var cname = commands.rows[i].cells[0].firstChild.firstChild.innerHTML,
                crank = commands.rows[i].cells[1].firstChild;
            crank.innerHTML="";
            crank.appendChild(rankfragment.cloneNode(true));//destroy then instantly rebuild the options table
            for( perms in AdminCommandRules) {
                if(AdminCommandRules[perms][0] === cname) {
                    valid = true;
                    crank.value = AdminCommandRules[perms][1];
                    break;
                }
            }
            if(!valid) {
                InternalDebug('WARN: ' + cname + " was missing from the config. setting to blank")
                crank.value = ' ';
            }
        }
    }

    var stafftab = document.getElementById("staff").getElementsByTagName('tbody')[0];//this one is going to be a bit messy. we need to run through 3 diffrent arrays, verify and avoid duplicates, and process each row at a time.
    //we zipper the 3 diffrent arrays first so we only have to deal with 1 at the end
    var playersettings =[];
    //we start with appending all the staff ranks
    for(admins in ServerAdmins) {
        playersettings.push([ServerAdmins[admins][0],ServerAdmins[admins][1],'','#ffffff']);//push each entry but pre-add a blank tag and blank color to the data
    }
    for(count in PlayerChatTags) {
        var valid = false;
        for(players in playersettings){
            if(playersettings[players][0] === PlayerChatTags[count][0]) {//we found an existing entry!
                playersettings[players][2] = PlayerChatTags[count][1];//adds the data to the existing entry
                valid = true;//marks that there was something existing
                break;
            }
            
        }
        if(!valid) {
            playersettings.push([PlayerChatTags[count][0],' ',PlayerChatTags[count][1],'#ffffff']);//builds a new player with no rank but a tag
        }
    }
    for(count in PlayerChatColors) {//now we do the EXACT SAME THING to get colors in....
        var valid = false
        for(players in playersettings){
            if(playersettings[players][0] === PlayerChatColors[count][0]) {//we found an existing entry!
                playersettings[players][3] = PlayerChatColors[count][1];//adds the data to the existing entry
                valid = true;//marks that there was something existing
                break;
            }
            
        }
        if(!valid) {
            playersettings.push([PlayerChatColors[count][0],' ','',PlayerChatColors[count][1]]);
        }
    }
    //now with everything zippered together, we can finally buld the interface
    var staffcount = stafftab.rows.length;
    if (playersettings.length == 0){//we have NO configured players.
        InternalDebug("ERROR: No players where defined in the config. inserting a placeholder line");
        ErrorState = true;
        playersettings = [[0,' ','',"#ffffff"]];
    }
    for(rowid = 0;rowid < staffcount; rowid++) {
        stafftab.deleteRow(-1);
    }
    for(newstaff in playersettings) {
        var row = stafftab.insertRow(-1);
        var div = document.createElement('div');//since we have to add a tiny bit to it, we are going to drop our fragment into this
        div.appendChild(rankfragment.cloneNode(true));
        var cell0 = row.insertCell(0),//you have to define all the cells to variables before modifying them, else it will fail to populate the cells
            cell1 = row.insertCell(1),
            cell2 = row.insertCell(2),
            cell3 = row.insertCell(3),
            cell4 = row.insertCell(4),
            cell5 = row.insertCell(5),
            cell6 = row.insertCell(6);
        cell0.innerHTML = '<input type="number" value=' + playersettings[newstaff][0] + ' onchange="validateid(this)" onwheel="this.blur()">';
        if(playersettings[newstaff][0].length !== 17 || BigInt(playersettings[newstaff][0]) < 76561197960265729n || BigInt(playersettings[newstaff][0]) > 76561202255233023n ) {
            cell0.firstChild.style.backgroundColor = '#f66';//light red background to denote an error
            InternalDebug("WARN: "+ playersettings[newstaff][0] + ' is an invalid steam id')
        }
        cell1.innerHTML = '<select name="Ranks">' + div.innerHTML + '</select>';
        cell1.firstChild.value = playersettings[newstaff][1];
        cell2.innerHTML = '<input type="text" value="' + playersettings[newstaff][2] + '">';
        cell3.innerHTML = '<input type="color" value=' + playersettings[newstaff][3] + ' onchange="ValidateColor(this)">';
        cell4.innerHTML = '<input type = "text" pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$" onchange ="ValidateColor(this)" size=7 maxlength="7" value="' + playersettings[newstaff][3] + '" style="vertical-align: middle">';
        if(newstaff == 0) {
            cell5.innerHTML = '<input type="button" value="X" disabled>';
        } else {
            cell5.innerHTML = '<input type="button" value="X" onclick="StaffRemoveRow(this)">';
        }
        cell6.innerHTML = '<input type="button" value="+" onclick="StaffAddRow(this)">';
    }
    document.getElementById('asave').value = AutosaveTime;
    document.getElementById('enableRcon').checked = bLiveMessagesToRCON;
    if (bLiveMessagesToRCON){
        document.getElementById('Rcon').style.display = 'block';
    } else {
        document.getElementById('Rcon').style.display = 'none';
    }
    document.getElementById('asave').value = AutosaveTime;
    document.getElementById("Output").innerHTML='Click Generate Game.ini to output your new config here,or click Export Game.ini to download a ready to insert file';
    document.getElementById('RconPort').value = CommunicationPort;
    document.getElementById('Rconip').value = IP4Binding;
    document.getElementById("Output").innerHTML = 'Click Generate Game.ini to output your new config here,or click Download Game.ini to download a ready to insert file';
    if (ErrorState){
        confirm("Warning: your configuration file had errors that will cause issues on the server or the file to not load.We have opened the console at the bottom of the page so that you may review the errors generated");
        document.getElementById('Console').style.display = "block";
        document.getElementById('ConsoleButton').innerHTML ="Close Debug Console";
    }else {
        if (CompatibilityMode) {//we loaded the file in compatibility update mode. warn the user
            confirm("Notice: your configuration file was loaded with outdated settings that are no longer compatible with the current server version. we have attempted to update them to the matching correct settings. please use the configuration export option to export an up-to-date config after verifying all your settings");
        }
    }
    InternalDebug("DBG: Finished loading, updating page")
}
// used by the upload file 
function readdata(selector) {
    var fileList = selector.files;
    console.log(fileList);
    if(fileList.length !== 0) {
        document.getElementById("fileModal").style.display = "none"
        var proceed = confirm("Warning!\n Loading a Game.ini will overwrite all settings you have currently set on this page!\n do you want to proceed with this?");
        if(proceed){//user clicked ok
            var reader = new FileReader();
            reader.onload = function(event) {
                var content = event.target.result;
                parsedata(content);
                buildpage();
                document.getElementById("btnload").innerHTML="Reload Existing Game.ini";
            };
            var data = reader.readAsText(fileList[0]);//outputs a string to parse
        }
    }
}
function SubmitConfig() {
    var proceed = confirm("Warning!\n Loading a Game.ini will overwrite all settings you have currently set on this page!\n do you want to proceed with this?");
    if(proceed){//user clicked ok
        var content = document.getElementById("inputtxt").value;
        parsedata(content);
        buildpage();
        document.getElementById("btnload").innerHTML="Reload Existing Game.ini";
        document.getElementById("fileModal").style.display = "none"
    }
}
HTMLSelectElement.prototype.contains = function( value ) {//adds a oneliner prototype for JS selections
    for ( var i = 0, l = this.options.length; i < l; i++ ) {
        if ( this.options[i].value == value ) {
            return true;
        }
    }
    return false;
}