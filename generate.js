function Generate() {//the superfunction that builds all the configurations. any setting changes must be defined within this generator. used by both calling functions to control output location. this is a VERY repeditive function.
    //due to the large number of double quotes used for the output,use single quotes '' to contain strings.
    var output = [];//we are going to build the final config into this array. afterwards, we will iterate through and join it into a nice and neat formatted string. place EVERY variable as a new entry to avoid collisions.
    var temp = [];//the temp array is reused for constructing entries.yes its lazy.yes, its technically ineffecent, but this code dosent need to be fast, it needs to be smartly setup and EASY to add to and modify.
    var i = 0;
    output.push('[/Script/BeastsOfBermuda.ServerGameInstance]');//Header of the file
    output.push('MapNameOverride="'+document.getElementById("maps").value+'"');
    output.push('GameMode='+document.getElementById("gamemode").value);
    output.push('GrowthLimit='+document.getElementById("growth").value+'f');
    //discord setup function. only push the link if the variable is set to true.
    var discordenab = document.getElementById("discordenable").checked;//discord enable and link
    output.push('bDisplayDiscordLink='+discordenab);
    if (discordenab) {
        output.push('DiscordLink="'+document.getElementById("discordlink").value+'"');//we dont actually check of the link is valid or empty.this is entirely to the user.
    }
    //steam setup function. only push the link if the variable is set to true.
    var steamgroup = document.getElementById("steamgroup").checked;
    output.push('bRequireSteamGroupToJoin='+steamgroup);
    if (steamgroup) {
        output.push('SteamGroupName="'+document.getElementById("steamname").value+'"');
    }
    output.push('bDisplayIntroMessage='+document.getElementById("motd").checked);
    output.push('bConsoleLocked='+document.getElementById("console").checked);
    output.push('ReservedAdminSlots='+document.getElementById("slots").value);
    output.push('bDisableGlobalChat='+document.getElementById("gchat").checked);
    output.push('CarcassRateMultiplier='+document.getElementById("carcassrate").value+ 'f');
    output.push('CarcassSpawnRatio='+document.getElementById("carcassratio").value+'f');
    output.push('DayLength='+document.getElementById("daycycle").value+'f');
    output.push('TunnelNetworkDespawnTime='+document.getElementById('TunnelLifetime').value);
    output.push('bUseMixedHerdCaps='+document.getElementById('Mixherd').checked);//mixherdcaps
    output.push('bUseHardGroupLimits='+document.getElementById("grouplimit").checked);
    //contains the processing needed to build the dino table. we do not hard code any ids for rows, instead relying on the dino names as a key. this allows us to add to the table without needing to set id or touch this script.
    var dinotable = document.getElementById("dinos");
    var aData = ["!CreatureLimits=ClearArray"];//accumulator table that will contain the pre-formatted strings before they are piped to the main array
    for (i in dinotable.rows) {
        if (i === "length") {break; }
        if (i != 0) {
            var dname = dinotable.rows[i].cells[0].innerHTML;
            var dcount = dinotable.rows[i].cells[1].firstChild.value;
            var dpercent = dinotable.rows[i].cells[2].firstChild.value;
            temp = ['CreatureLimits=(CreatureType=EDinoType::', dname, ',PercentAllowed=', dpercent, 'f,GroupLimit=', dcount, ')'];
            aData.push(temp.join('')); 
        }//lazy skip of the header data
    }
    output.push(aData.join('\r\n'));//join using newlines to create a single entry in the output. already formatted and ready to go
    var ranks = document.getElementById("Ranks");
    aData = [];//wipe clean for another round
    for (i in ranks.rows) {
        if (i === "length") {break; }
        if (i != 0) {
            var rname = ranks.rows[i].cells[0].firstChild.value;
            var rlevel = ranks.rows[i].cells[1].firstChild.value;
            temp = ['AdminRanks=(AdminRank="', rname, '",RankLevel=', rlevel, ')'];
            aData.push(temp.join(''));
        }
    }
    output.push(aData.join('\r\n'));
    aData = [];
    var commands = document.getElementById("commands");//permission level data
    for (i in commands.rows) {
        if (i === "length") {break; }
        if (i != 0) {
            var cname = commands.rows[i].cells[0].firstChild.firstChild.innerHTML;
            var crank = commands.rows[i].cells[1].firstChild.value;
            temp = ['AdminCommandRules=(CommandType=EAdminCommands::', cname, ',MinimalRank="', crank, '")'];
            aData.push(temp.join(''));
        }
    }
    output.push(aData.join('\r\n'));
    var staff = document.getElementById('staff');//we are going to generate all 3 tables in parallel before pushing to the final string
    aData = [];//wipe aData to contain server admins
    var bData = ['!PlayerChatColors=ClearArray'];//used to contain the chat color array
    var cData = ['!PlayerChatTags=ClearArray'];//used to contain the chat tag array
    for (i in staff.rows) {
        if (i === "length") {break; }
        if (i != 0) {//skips headers
            var pID = staff.rows[i].cells[0].firstChild.value;
            var prank = staff.rows[i].cells[1].firstChild.value;
            var ptag = staff.rows[i].cells[2].firstChild.value;
            var pcolor = staff.rows[i].cells[3].firstChild.value;
            if (prank !== " ") {//is the value set to the 'blank' selection? dont push to the config
                temp = ['ServerAdmins=(UserSteamId64=', pID, ',AdminRank="', prank, '")'];
                aData.push(temp.join(''));
            }
            if (ptag !== "") {//if the value is blank
                temp = ['PlayerChatTags=(SteamID=', pID, ',ChatTag="', ptag, '")'];
                cData.push(temp.join(''));
            }
            if (pcolor !== "#ffffff") {//check if white. if it is, dont build to config. we use 6 digit in the value for the default
                var r = "0x00";
                var g = "0x00";
                var b = "0x00";//default to black then build
                if (pcolor.length == 4) {//takes care of splitting the hex to its RGB componets, while also taking care of user input when they input a hex value
                    r = "0x" + pcolor[1] + pcolor[1];
                    g = "0x" + pcolor[2] + pcolor[2];
                    b = "0x" + pcolor[3] + pcolor[3];
                } else if (pcolor.length == 7) {
                    r = "0x" + pcolor[1] + pcolor[2];
                    g = "0x" + pcolor[3] + pcolor[4];
                    b = "0x" + pcolor[5] + pcolor[6];
                }
                temp = ['PlayerChatColors=(SteamID=', pID, ',ChatColor=(R=', +(r / 255).toFixed(1), ',G=', +(g / 255).toFixed(1), ',B=', +(b / 255).toFixed(1), ',A=1.0', '))'];
                bData.push(temp.join(''));
            }
        }
    }
    output.push(aData.join('\r\n'));
    output.push(bData.join('\r\n'));
    output.push(cData.join('\r\n'));
    output.push('\r\n[/Script/BeastsOfBermuda.SaveSystem]');//lazy addition for the save system
    output.push('AutosaveTime='+document.getElementById("asave").value);
    var rcon = document.getElementById('enableRcon').checked;
    output.push('\r\n[/Script/BeastsOfBermuda.BBGameModeBase]');
    output.push('bLiveMessagesToRCON=' + rcon);
    if (rcon) {
        output.push('\r\n[/Script/BeastsOfBermuda.RCONHandler]');
        output.push('CommunicationPort=' + document.getElementById('RconPort').value);
        output.push('IP4Binding="' + document.getElementById('Rconip').value + '"')
    }
    return output.join('\r\n');//use a newline as the joining item before outputting.
}
function GenertateTXT() {//will call generate and direct the output to the output window on the form.
    var data = Generate();//the data should be parsed automatically to a formatted string that just needs to be output
    var output = document.getElementById("Output");
    output.innerHTML = data;
}
function GenerateFile() {//calls generate and parses the output to a game.ini text file. check documentation for all browsers for support
    var data = Generate();
    var filename = "Game.ini";//in case it EVER needs to change, here is the filename
    var element = document.createElement('a');//we are going to generate and click a link to force a download to the client. this is a hack but works on all but safari
    element.setAttribute('href','data:text/plain;charset=utf-8,'+encodeURIComponent(data));
    element.setAttribute('download',filename)
    element.style.display= 'none';
    document.body.appendChild(element);
    element.click();//yes. we are literally clicking an invis download link to make this work.
    document.body.removeChild(element);
}
