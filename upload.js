//written by Cleafspear#0001 on discord. contact him to update
//define all variables here with defaults. anything with an array, leave blank
//variables are GLOBAL to ALL FUNCTIONS on here.  you cannot redefine them elsewhere
var MapNameOverride = "Forest_Island",
    GameMode = 'Free_Roam',
	PreferredGameExperience = 'EGameExperience::PvPvE',
    GrowthLimit = 0,//Depreciated in 1.1.1404, used in conversion to new configs
    bDisplayDiscordLink = false,
    DiscordLink = "",
    bRequireSteamGroupToJoin = false,
    SteamGroupName = "",
    bDisplayIntroMessage = false,
    bConsoleLocked = true,
    ReservedAdminSlots = 2,
    bDisableGlobalChat = false,
    bDisableLocalChat = false,
    CarcassRateMultiplier = 1,
    CarcassSpawnRatio = 1,
    DayLength = 4441,
    bCapStormSurge = true,
    SpeedModifier = 1,
    IntensityModifier = 1,
    StormSpacingMultiplier = 1,
    StormSurgeMultiplier = 1,
    RainCommonness = 5,
    FogCommonness = 2,
    OvercastCommonness = 2,
    DryLightningCommonness = 1,
    bDisableResurrections = false,
    bDisableReincarnations = false,
    bStormsCauseStress = true,
    bSpawnsTornados = true,
    GrowthLimitsH = false,
    GrowthLimits = [],
    TunnelNetworkDespawnTime = 259200,
    bSpawnForestFires = true,
    bUseMixedHerdCaps = true,
    bUseHardGroupLimits = false,
    CreatureLimits = [],
    bForceIgnoreGroupSpeciesCheckOnLogin = false,
    AllowedSpeciesGroupsH = false,
    AllowedSpeciesGroups = [],
    AdminRanks = [],
    AdminCommandRules = [],
    ServerAdmins = [],
    PlayerChatColors = [],
    PlayerChatTags = [],
    AutosaveTime = 135,
    bLiveMessagesToRCON = false,
    CommunicationPort = 27015,
    IP4Binding = "127.0.0.1",
    GameReporter = false,
    bUseChatWebhook = false,
    ChatReportDiscordWebhook = "",
    ChatReportIconURL = "",
    bUseCombatActivityWebhook = false,
    CombatActivityDiscordWebhook = "",
    CombatActivityDiscordIconURL = "",
    bUseLoginReportWebhook = false,
    LoginDiscordWebhook = "",
    LoginDiscordIconURL = "",
    bUseAdminCommandUsageWebhook = false,
    AdminCmdDiscordWebhook = "",
    AdminCmdDiscordIcon = "",
    bUseGroupActivityWebhook = false,
    GroupActivityDiscordWebhook = "",
    GroupActivityDiscordIconURL = "",
    ChatWebhookFormatStyle='"[:x01]<{PlayerInfo}>[:x01] <ChatMode={ChatMode}> **>** _{msg}_"',
    LoginReportFormatStyle='"Player [:x01]<{PlayerInfo}>[:x01] joined server _{Server}_\n----"',
    LogoutReportFormatStyle='"Player [:x01]<{PlayerInfo}>[:x01] left server _{Server}_, played for {Hours} hours and {Minutes}"',
    AdminCommandUsageFormatStyle='"Player [:x01]<{PlayerInfo}>[:x01] used command [:x01]{Cmd}[:x01]\n----"',
    bDisableUseRandomName= false,
    OceanHeightAdd= 0,
    GrowthRate= "EGrowthRate::Normal",
    FoodDrainDifficulty= "EGameDifficulty::Normal",
	WaterDrainDifficulty="EGameDifficulty::Normal",
	WaterDirtinessDifficulty="EGameDifficulty::Normal",
	FoliageSpawnSpeed="EGrowthRate::Normal",
	MaxTalentsAllowed= -1,
	SkinLockGrowthTreshold = 0.7,
	bDisableRestlessDebuff = false,
	bDisableRandomEggSpawns = false,
	RandomEggSpawnChance = 0.05,
	bPortalsDisabled= false,
    bDisableAISpawning=false,
    bUseEventsWebhook=false,
    EventsDiscordWebhook = "",
    EventsDiscordIconURL = "",
	bDisableCharacterDeath=false,
    bSpawnWorldEvents=true,
    WorldEventPrepTime=30,
    WorldEventDuration=45,
    WorldEventSpacing=120,
    WorldEventBuffsToNotUse = [],
    AISpawnRateMultiplier=1,
    AISpawnCapMultiplier=1,
    DisabledAITypes =[],
    bDisableRevengeKillProtection=false,
    bDisableLeaderboard=false,
    CompatibilityMode = false,//this will show a notice to the user that their config was loaded with paramaters that are outdated
    ErrorState = false;//used in case a parse error the user must know about generates and opens the console

function parsedata(data) {
    MapNameOverride = "Forest_Island",
    GameMode = 'Free_Roam',
	PreferredGameExperience = 'EGameExperience::PvPvE',
    GrowthLimit = 0,
    bDisplayDiscordLink = false,
    DiscordLink = "",
    bRequireSteamGroupToJoin = false,
    SteamGroupName = "",
    bDisplayIntroMessage = false,
    bConsoleLocked = true,
    ReservedAdminSlots = 2,
    bDisableGlobalChat = false,
    bDisableLocalChat = false,
    CarcassRateMultiplier = 1,
    CarcassSpawnRatio = 1,
    DayLength = 4441,
    bCapStormSurge = true,
    SpeedModifier = 1,
    IntensityModifier = 1,
    StormSpacingMultiplier = 1,
    StormSurgeMultiplier = 1,
    RainCommonness = 5,
    FogCommonness = 2,
    OvercastCommonness = 2,
    DryLightningCommonness = 1,
    bDisableResurrections = false,
    bDisableReincarnations = false,
    bStormsCauseStress = true,
    bSpawnsTornados = true,
    GrowthLimitsH = false,
    GrowthLimits = [],
    TunnelNetworkDespawnTime = 259200,
    bSpawnForestFires = true,
    bUseHardGroupLimits = false,
    CreatureLimits = [],
    bForceIgnoreGroupSpeciesCheckOnLogin = false,
    AllowedSpeciesGroupsH = false,
    AllowedSpeciesGroups = [],
    AdminRanks = [],
    AdminCommandRules = [],
    ServerAdmins = [],
    PlayerChatColors = [],
    PlayerChatTags = [],
    AutosaveTime = 135,
    bLiveMessagesToRCON = false,
    CommunicationPort = 27015,
    IP4Binding = "127.0.0.1",
    GameReporter = false,
    bUseChatWebhook = false,
    ChatReportDiscordWebhook = "",
    ChatReportIconURL = "",
    bUseCombatActivityWebhook = false,
    CombatActivityDiscordWebhook = "",
    CombatActivityDiscordIconURL = "",
    bUseLoginReportWebhook = false,
    LoginDiscordWebhook = "",
    LoginDiscordIconURL = "",
    bUseAdminCommandUsageWebhook = false,
    AdminCmdDiscordWebhook = "",
    AdminCmdDiscordIcon = "",
    bUseGroupActivityWebhook = false,
    GroupActivityDiscordWebhook = "",
    GroupActivityDiscordIconURL = "",
    ChatWebhookFormatStyle='"[:x01]<{PlayerInfo}>[:x01] <ChatMode={ChatMode}> **>** _{msg}_"',
    LoginReportFormatStyle='"Player [:x01]<{PlayerInfo}>[:x01] joined server _{Server}_\n----"',
    LogoutReportFormatStyle='"Player [:x01]<{PlayerInfo}>[:x01] left server _{Server}_, played for {Hours} hours and {Minutes}"',
    AdminCommandUsageFormatStyle='"Player [:x01]<{PlayerInfo}>[:x01] used command [:x01]{Cmd}[:x01]\n----"',
    bDisableUseRandomName= false,
    OceanHeightAdd= 0,
    GrowthRate= "EGrowthRate::Normal",
    FoodDrainDifficulty= "EGameDifficulty::Normal",
	WaterDrainDifficulty="EGameDifficulty::Normal",
	WaterDirtinessDifficulty="EGameDifficulty::Normal",
	FoliageSpawnSpeed="EGrowthRate::Normal",
    bDisableAISpawning=false,
    bUseEventsWebhook=false,
    EventsDiscordWebhook = "",
    EventsDiscordIconURL = "",
	MaxTalentsAllowed= -1,
	SkinLockGrowthTreshold = 0.7,
	bDisableRestlessDebuff = false,
	bDisableRandomEggSpawns = false,
	RandomEggSpawnChance = 0.05,
	bDisableCharacterDeath=false,
    bDisableCharacterDeath=false,
    bSpawnWorldEvents=true,
    WorldEventPrepTime=30,
    WorldEventDuration=45,
    WorldEventSpacing=120,
    WorldEventBuffsToNotUse = [],
    AISpawnRateMultiplier=1,
    AISpawnCapMultiplier=1,
    DisabledAITypes =[],
    bDisableRevengeKillProtection=false,
    bDisableLeaderboard=false,
    CompatibilityMode = false,
	bPortalsDisabled= false,
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
        switch (linedata[0]) {
        case 'MapNameOverride':
            MapNameOverride = linedata[1].trim().replace(/['"]+/g, '');//regex to nuke any quotes within the map name
            break;
        case 'GameMode':
            GameMode = linedata[1].trim().replace(/['"]|EGameModes::/g, '');//will nuke quotes and the preceading gamemodes config var used in older configs
            break;
		case 'PreferredGameExperience':
            PreferredGameExperience = linedata[1].trim().replace(/['"]+/g, '');
            break;
        case 'GrowthLimit'://Depreciated but supported for inporting old configs
            GrowthLimit = parseFloat(linedata[1]);
            CompatibilityMode = true;
            InternalDebug("WARN:Your config contains the older Growth limit value. We will convert you to the new per-Creature limits");
            break;
        case 'bDisplayDiscordLink':
            bDisplayDiscordLink = (linedata[1].toLowerCase().trim() === "true");//lazy hack to turn a string to a boolean value while accounting for any unncessicary spaces
            break;
        case 'DiscordLink':
            DiscordLink = linedata[1].replace(/['"]+/g, '');
            if(DiscordLink.includes("https://discord.gg/",0)){
                CompatibilityMode = true;
                InternalDebug("WARN:Config contains an improper config link for discord. we have corrected this for you.");
                DiscordLink = DiscordLink.replace("https://discord.gg/", '');
            }
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
        case 'bDisableLocalChat':
            bDisableLocalChat = (linedata[1].toLowerCase().trim() === "true");
            break;
        case 'CarcassRateModifier'://for VERY OLD config imports
            InternalDebug('WARN: Found CarcassRateModifier, this is a 2019 config option.it will be ported');
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
        case 'bSpawnForestFires':
            bSpawnForestFires = (linedata[1].toLowerCase().trim() === "true");
            break;
        case 'bCapStormSurge':
            bCapStormSurge = (linedata[1].toLowerCase().trim() === "true");
            break;
        case 'SpeedModifier':
            SpeedModifier = parseFloat(linedata[1]);
            break;
        case 'IntensityModifier':
            IntensityModifier = parseFloat(linedata[1]);
            break;
        case 'StormSpacingMultiplier':
            StormSpacingMultiplier = parseFloat(linedata[1]);
            break;
        case 'StormSurgeMultiplier':
            StormSurgeMultiplier = parseFloat(linedata[1]);
            break;
        case 'RainCommonness':
            RainCommonness = parseInt(linedata[1],10);
            break;
        case 'FogCommonness':
            FogCommonness = parseInt(linedata[1],10);
            break;
        case 'OvercastCommonness':
            OvercastCommonness = parseInt(linedata[1],10);
            break;
        case 'DryLightningCommonness':
            DryLightningCommonness = parseInt(linedata[1],10);
            break;
        case 'bStormsCauseStress':
            bStormsCauseStress = (linedata[1].toLowerCase().trim() === "true");
            break;
        case 'bSpawnsTornados':
            bSpawnsTornados = (linedata[1].toLowerCase().trim() === "true");
            break;
        case 'bDisableResurrections':
            bDisableResurrections = (linedata[1].toLowerCase().trim() === "true");
            break;
        case 'bDisableReincarnations':
            bDisableReincarnations = (linedata[1].toLowerCase().trim() === "true");
            break;
        case 'bUseMixedHerdCaps':
            bUseMixedHerdCaps = (linedata[1].toLowerCase().trim() === "true");
            break;
        case 'bUseHardGroupLimits':
            bUseHardGroupLimits = (linedata[1].toLowerCase().trim() === "true");
            break;
		case 'SkinLockGrowthThreshold':
            SkinLockGrowthTreshold = parseFloat(linedata[1]);
            break;
        case '!GrowthLimits':
            GrowthLimitsH = true;
            break;
        case '+GrowthLimits':
            CompatibilityMode = true;
            InternalDebug('WARN: the + in Growth limits may cause an error in the config interpreter!');
            InternalDebug('WARN: '+ linedata);
        case 'GrowthLimits':
             if (linedata[1].trim() !== '(Type') {
                InternalDebug('WARN:'+ linedata + ' Is Invalid');
                CompatibilityMode = true;
                break;
            }
            var cr = linedata[2].replace(/[:,'"]|EDinoType|Limit/g, '').trim(),
                pa = parseFloat(linedata[3]);
            GrowthLimits.push([cr,pa]);
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
                InternalDebug("ERROR: bRequiresVeteran is no longer supported and MAY cause the config to fail");
                InternalDebug('ERROR: '+ linedata);
                ErrorState = true;//done to warn users that their config contains a incorrect setting that will break it
            } else {//done this way as if its this old, the additional data isnt in its proper location
				var mi = 0.7,
					ma = 1;
				if(!linedata[4] == null){ mi = parseFloat(linedata[4])}
				if(!linedata[5] == null){ ma = parseFloat(linedata[5])}
			}
            CreatureLimits.push([cr, pa, gl, mi, ma]);
            break;
        case 'bForceIgnoreGroupSpeciesCheckOnLogin':
            bForceIgnoreGroupSpeciesCheckOnLogin = (linedata[1].toLowerCase().trim() === "true");
            break;
        case '!AllowedSpeciesGroups':
            AllowedSpeciesGroupsH = true;
            break;
        case '+AllowedSpeciesGroups':
            InternalDebug('WARN:'+ linedata + ' Cannot have the +. we will automatically remove this for you');
            CompatibilityMode = true;
        case 'AllowedSpeciesGroups':
            if(linedata[1] == '(Group'){
                AllowedSpeciesGroups.push(linedata[2].replace(/[:)('" ]|EDinoType|/g, '').split(','));
            }
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
		case 'bDisableRestlessDebuff':
				bDisableRestlessDebuff = (linedata[1].toLowerCase().trim() === "true");
			break;	
		case 'bDisableRandomEggSpawns':
				bDisableRandomEggSpawns = (linedata[1].toLowerCase().trim() === "true");
			break;	
		case 'RandomEggSpawnChance':
				 RandomEggSpawnChance = parseFloat(linedata[1]);
			break;
        case 'AutosaveTime':
            AutosaveTime = parseInt(linedata[1], 10);
            break;
        case 'TunnelNetworkDespawnTime':// minutes to despawn tunnel networks. ticks every 5 minutes. lags by 5  minutes
            TunnelNetworkDespawnTime = parseFloat(linedata[1]);
            break;
        case '[/Script/BeastsOfBermuda.ServerGameInstance]':
        case '[/Script/BeastsOfBermuda.SaveSystem]':
        case '[/Script/BeastsOfBermuda.WeatherControllerBase]':
        case '[/Script/BeastsOfBermuda.RCONHandler]':
        case '[/Script/BeastsOfBermuda.BBGameModeBase]':
		case '[Skins]':
        case '!PlayerChatColors':
        case '!PlayerChatTags':
        case '!WorldEventBuffsToNotUse':
        case '!DisabledAITypes':
        case '!CreatureLimits'://these consume the lines that are valid so that they dont hit the logger
            break;
        case 'bLiveMessagesToRCON':
            bLiveMessagesToRCON = (linedata[1].toLowerCase().trim() === "true");
            break;
        case 'CommunicationPort':
            CommunicationPort = parseInt(linedata[1], 10);
            break;
        case 'IP4Binding':
            IP4Binding = linedata[1].trim().replace(/['"]+/g, '');
            break;
        case '[GameReporter]':
            GameReporter = true;
            break;
        case 'bUseChatWebhook':
            bUseChatWebhook = (linedata[1].toLowerCase().trim() === "true");
            break;
        case 'ChatReportDiscordWebhook':
            ChatReportDiscordWebhook = linedata[1].trim().replace(/['"]+/g, '');
            break;
        case 'ChatReportIconURL':
            ChatReportIconURL = linedata[1].trim().replace(/['"]+/g, '');
            break;
        case 'bUseCombatActivityWebhook':
            bUseCombatActivityWebhook = (linedata[1].toLowerCase().trim() === "true");
            break;
        case 'CombatActivityDiscordWebhook':
            CombatActivityDiscordWebhook = linedata[1].trim().replace(/['"]+/g, '');
            break;
        case 'CombatActivityDiscordIconURL':
            CombatActivityDiscordIconURL = linedata[1].trim().replace(/['"]+/g, '');
            break;
        case 'bUseLoginReportWebhook':
            bUseLoginReportWebhook = (linedata[1].toLowerCase().trim() === "true");
            break;
        case 'LoginDiscordWebhook':
            LoginDiscordWebhook = linedata[1].trim().replace(/['"]+/g, '');
            break;
        case 'LoginDiscordIconURL':
            LoginDiscordIconURL = linedata[1].trim().replace(/['"]+/g, '');
            break;
        case 'bUseAdminCommandUsageWebhook':
            bUseAdminCommandUsageWebhook = (linedata[1].toLowerCase().trim() === "true");
            break;
        case 'AdminCmdDiscordWebhook':
            AdminCmdDiscordWebhook = linedata[1].trim().replace(/['"]+/g, '');
            break;
        case 'AdminCmdDiscordIcon':
            AdminCmdDiscordIcon = linedata[1].trim().replace(/['"]+/g, '');
            break;
        case 'bUseGroupActivityWebhook':
            bUseGroupActivityWebhook = (linedata[1].toLowerCase().trim() === "true");
            break;
        case 'GroupActivityDiscordWebhook':
                GroupActivityDiscordWebhook = linedata[1].trim().replace(/['"]+/g, '');
            break;
        case 'GroupActivityDiscordIconURL':
            GroupActivityDiscordIconURL = linedata[1].trim().replace(/['"]+/g, '');
            break;
        case 'ChatWebhookFormatStyle':
            linedata.shift();
			ChatWebhookFormatStyle = linedata.join("=").trim().replace(/['"]+/g, '');//cheeky hack that will restore the original string back to its original form, agnostic to the splitting char
            break;
        case 'LoginReportFormatStyle':
			linedata.shift();
            LoginReportFormatStyle = linedata.join("=").trim().replace(/['"]+/g, '');
            break;
        case 'LogoutReportFormatStyle':
			linedata.shift();
            LogoutReportFormatStyle = linedata.join("=").trim().replace(/['"]+/g, '');
            break;
        case 'AdminCommandUsageFormatStyle':
			linedata.shift();
            AdminCommandUsageFormatStyle = linedata.join("=").trim().replace(/['"]+/g, '');
            break;
        case 'bUseEventsWebhook':
            bUseEventsWebhook = (linedata[1].toLowerCase().trim() === "true");
            break;
        case 'EventsDiscordWebhook':
            EventsDiscordWebhook = linedata[1].trim().replace(/['"]+/g, '');
            break;
        case 'EventsDiscordIconURL':
            EventsDiscordIconURL = linedata[1].trim().replace(/['"]+/g, '');
            break;
        case 'OceanHeightAdd':
            OceanHeightAdd = parseFloat(linedata[1]);
            break;
        case 'GrowthRate':
            GrowthRate = linedata[1].trim().replace(/['"]+/g, '');
            break;
        case 'FoodDrainDifficulty':
            FoodDrainDifficulty = linedata[1].trim().replace(/['"]+/g, '');
            break;
		case 'WaterDrainDifficulty':
            WaterDrainDifficulty = linedata[1].trim().replace(/['"]+/g, '');
            break;
		case 'WaterDirtinessDifficulty':
            WaterDirtinessDifficulty = linedata[1].trim().replace(/['"]+/g, '');
            break;
		case 'FoliageSpawnSpeed':
            FoliageSpawnSpeed = linedata[1].trim().replace(/['"]+/g, '');
            break;
		case 'MaxTalentsAllowed':
            MaxTalentsAllowed = parseInt(linedata[1],10);
            break;
		case 'bPortalsDisabled':
			bPortalsDisabled = (linedata[1].toLowerCase().trim() === "true");
			break;
		case 'bDisableCharacterDeath':
			bDisableCharacterDeath = (linedata[1].toLowerCase().trim() === "true");
			break;
        case 'bDisableUseRandomName':
			bDisableUseRandomName = (linedata[1].toLowerCase().trim() === "true");
			break;
        case 'bDisableAISpawning':
			bDisableAISpawning = (linedata[1].toLowerCase().trim() === "true");
			break;
        case 'bDisableCharacterDeath':
            bDisableCharacterDeath = (linedata[1].toLowerCase().trim() === "true");
            break;
        case 'bSpawnWorldEvents':
            bSpawnWorldEvents = (linedata[1].toLowerCase().trim() === "true");
            break;
        case 'bDisableRevengeKillProtection':
            bDisableRevengeKillProtection = (linedata[1].toLowerCase().trim() === "true");
            break;
        case 'bDisableLeaderboard':
            bDisableLeaderboard = (linedata[1].toLowerCase().trim() === "true");
            break;
        case 'WorldEventPrepTime':
            WorldEventPrepTime = parseFloat(linedata[1]);
            break;
        case 'WorldEventDuration':
            WorldEventDuration = parseFloat(linedata[1]);
            break;
        case 'WorldEventSpacing':
            WorldEventSpacing = parseFloat(linedata[1]);
            break;
        case 'AISpawnRateMultiplier':
            AISpawnRateMultiplier = parseFloat(linedata[1]);
            break;
        case 'AISpawnCapMultiplier':
            AISpawnCapMultiplier = parseFloat(linedata[1]);
            break;
        case 'WorldEventBuffsToNotUse':
            WorldEventBuffsToNotUse.push(linedata[1].trim().replace(/[:)('" ]|EVENT_|/g, ''));
            break;
        case '+DisabledAITypes':
            DisabledAITypes.push(linedata[1].trim().replace(/[:)('" ]|EDinoType|/g, ''));
            break;
        default:
            if (linedata != ""){
                InternalDebug("WARN: " + linedata[0] +" is not a valid config option!");
                console.log(linedata[0] + " Was Discarded");
            }
        }
    }
    InternalDebug("DBG: file load complete, parsing and building page data");
}
function buildpage() {//you must call parsedata before buildpage, otherwise it will build with default Data
    if (!document.getElementById('maps').contains(MapNameOverride)){
        InternalDebug("ERROR: Map name is invalid! provided: "+ MapNameOverride);
        ErrorState = true;
    }
    document.getElementById('maps').value = MapNameOverride;//the fact this works so well is scary in a way, as well as set blank when an option is incorrect
    if (!document.getElementById('gamemode').contains(GameMode)){
        InternalDebug("ERROR: GameMode is invalid! provided: "+ GameMode);
        ErrorState = true;
    }
    document.getElementById('gamemode').value = GameMode;
	document.getElementById('PreferredGameExperience').value = PreferredGameExperience;
    if (bDisplayDiscordLink & DiscordLink == '') {
        InternalDebug("WARN: Discord was enabled but there is no link!");
    }
    
    if (!document.getElementById('FoodDrainDifficulty').contains(FoodDrainDifficulty)){
        InternalDebug("ERROR: FoodDrainDifficulty is invalid! provided: "+ FoodDrainDifficulty);
        ErrorState = true;
    }
    document.getElementById('FoodDrainDifficulty').value = FoodDrainDifficulty;
	
	if (!document.getElementById('WaterDrainDifficulty').contains(WaterDrainDifficulty)){
        InternalDebug("ERROR: WaterDrainDifficulty is invalid! provided: "+ WaterDrainDifficulty);
        ErrorState = true;
    }
    document.getElementById('WaterDrainDifficulty').value = WaterDrainDifficulty;
	
	if (!document.getElementById('WaterDirtinessDifficulty').contains(WaterDrainDifficulty)){
        InternalDebug("ERROR: WaterDirtinessDifficulty is invalid! provided: "+ WaterDrainDifficulty);
        ErrorState = true;
    }
	
    document.getElementById('WaterDirtinessDifficulty').value = WaterDirtinessDifficulty;
    
    if (!document.getElementById('gamemode').contains(GameMode)){
        InternalDebug("ERROR: GameMode is invalid! provided: "+ GameMode);
        ErrorState = true;
    }
    document.getElementById('discordenable').checked = bDisplayDiscordLink;
    if (bDisplayDiscordLink) {
        document.getElementById('discord').style.display = 'block';
    } else {
        document.getElementById('discord').style.display = 'none';
    }
    document.getElementById('discordlink').value = DiscordLink;
    if (bRequireSteamGroupToJoin & SteamGroupName == '') {
        InternalDebug("WARN: Steam was enabled but there is no Group link!");
    }
    document.getElementById('steamgroup').checked = bRequireSteamGroupToJoin;
    if (bRequireSteamGroupToJoin) {
        document.getElementById('steam').style.display = 'block';
    } else {
        document.getElementById('steam').style.display = 'none';
    }
    
    if (!document.getElementById('GrowthRate').contains(GrowthRate)){
        InternalDebug("ERROR: GrowthRate is invalid! provided: "+ GrowthRate);
        ErrorState = true;
    }
    document.getElementById('GrowthRate').value = GrowthRate;
    document.getElementById('FoliageSpawnSpeed').value = FoliageSpawnSpeed;
	document.getElementById('MaxTalentsAllowed').value = MaxTalentsAllowed;
    document.getElementById('steamname').value = SteamGroupName;
    document.getElementById('OceanHeightAdd').value = OceanHeightAdd;
    document.getElementById('motd').checked = bDisplayIntroMessage;
    document.getElementById('console').checked = bConsoleLocked;
    document.getElementById('slots').value = ReservedAdminSlots;
    document.getElementById('gchat').checked = bDisableGlobalChat;
    document.getElementById('lchat').checked = bDisableLocalChat;
    document.getElementById('carcassrate').value = CarcassRateMultiplier;
    document.getElementById('carcassratio').value = CarcassSpawnRatio;
    document.getElementById('daycycle').value = DayLength;
    document.getElementById('DayMulti').value = 0;
    document.getElementById('daycycle').setAttribute("data-state",0);
    document.getElementById('grouplimit').checked = bUseHardGroupLimits;
    document.getElementById('grouplimit').checked = bUseHardGroupLimits;
    document.getElementById('TunnelMulti').value = 0;
    document.getElementById('TunnelLifetime').setAttribute("data-state",0);
    document.getElementById('TunnelLifetime').value = TunnelNetworkDespawnTime;
    document.getElementById('fire').checked = bSpawnForestFires;
    document.getElementById('StormS').checked = bCapStormSurge;
    document.getElementById('TunnelLifetime').value = TunnelNetworkDespawnTime;
    document.getElementById('bSpawnsTornados').checked = bSpawnsTornados;
    document.getElementById('bStormsCauseStress').checked = bStormsCauseStress;
    document.getElementById('SpeedMod').value = SpeedModifier;
    document.getElementById('IntensityModifier').value = IntensityModifier;
    document.getElementById('StormSpacingMultiplier').value = StormSpacingMultiplier;
    document.getElementById('StormSurgeMultiplier').value = StormSurgeMultiplier;
    document.getElementById('RainCommonness').value = RainCommonness;
    document.getElementById('FogCommonness').value = FogCommonness;
    document.getElementById('OvercastCommonness').value = OvercastCommonness;
    document.getElementById('DryLightningCommonness').value = DryLightningCommonness;
    document.getElementById('bDisableResurrections').checked = bDisableResurrections;
    document.getElementById('bDisableReincarnations').checked = bDisableReincarnations;
	document.getElementById('bDisableCharacterDeath').checked = bDisableCharacterDeath;
	document.getElementById('SkinLockGrowthTreshold').value = SkinLockGrowthTreshold;
	document.getElementById('bPortalsDisabled').checked = bPortalsDisabled;
	document.getElementById('bDisableRestlessDebuff').checked = bDisableRestlessDebuff;
    document.getElementById('bDisableAISpawning').checked = bDisableAISpawning;
    document.getElementById('bDisableUseRandomName').checked = bDisableUseRandomName;
	document.getElementById('bDisableRandomEggSpawns').checked = bDisableRandomEggSpawns;
    document.getElementById('bDisableCharacterDeath').checked = bDisableCharacterDeath;
    document.getElementById('bSpawnWorldEvents').checked = bSpawnWorldEvents;
    document.getElementById('bDisableRevengeKillProtection').checked = bDisableRevengeKillProtection;
    document.getElementById('bDisableLeaderboard').checked = bDisableLeaderboard;
    document.getElementById('WorldEventPrepTime').value = WorldEventPrepTime;
    document.getElementById('WorldEventDuration').value = WorldEventDuration;
    document.getElementById('WorldEventSpacing').value = WorldEventSpacing;
    document.getElementById('AISpawnRateMultiplier').value = AISpawnRateMultiplier;
    document.getElementById('AISpawnCapMultiplier').value = AISpawnCapMultiplier;
	if(bDisableRandomEggSpawns){
		document.getElementById("Eggs").style.display = 'none';
	}else{
		document.getElementById("Eggs").style.display = 'block';
	}
	document.getElementById('RandomEggSpawnChance').value = RandomEggSpawnChance;
    document.getElementById('Mixherd').value = bUseMixedHerdCaps;
    if (bUseHardGroupLimits) {
        document.getElementById("dinoh").textContent = "Absolute Group limit";
    } else {
        document.getElementById("dinoh").textContent = "Soft Limit";
    }
    var EventTable = document.getElementById('WorldEventBuffsToNotUse');
    var eventdat = EventTable.rows[1].cells[0].childNodes;
    if(eventdat.length != 1){
        for(var ele=eventdat.length;ele-->1;){
            if(eventdat[ele].tagName.toLowerCase() == 'input'){eventdat[ele].remove();}
        }
    }
    if(WorldEventBuffsToNotUse.count != 0 ){
        for(var i in WorldEventBuffsToNotUse){
                if (i == "length" || i === 'item') {break; }
                var btn = document.createElement('input');
                btn.type= 'button';
                btn.setAttribute('onclick','this.remove()');
                btn.value = WorldEventBuffsToNotUse[i];
                EventTable.rows[1].cells[0].appendChild(btn);
        }
    }
    var AITable =document.getElementById('DisabledAITypes');
    var AIdat = AITable.rows[1].cells[0].childNodes;
    if(AIdat.length != 1){
        for(var ele=AIdat.length;ele-->1;){
            if(AIdat[ele].tagName.toLowerCase() == 'input'){AIdat[ele].remove();}
        }
    }
    if(DisabledAITypes.count != 0 ){
        for(var i in DisabledAITypes){
                if (i == "length" || i === 'item') {break; }
                var btn = document.createElement('input');
                btn.type= 'button';
                btn.setAttribute('onclick','this.remove()');
                btn.value = DisabledAITypes[i];
                AITable.rows[1].cells[0].appendChild(btn);
        }
    }
    var dinotable = document.getElementById("dinos");//this is the same code we use to grab the values from the dino table to generate the ini
    for (var i in dinotable.rows) {
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
                    break;
					dinotable.rows[i].cells[4].firstChild.value = CreatureLimits[crname][3];
					dinotable.rows[i].cells[5].firstChild.value = CreatureLimits[crname][4];
                }
            }
            if (!valid) {//somehow we dont have a creature set in the config so build a default
                dinotable.rows[i].cells[1].firstChild.value = "999";
                dinotable.rows[i].cells[2].firstChild.value = "100";
				dinotable.rows[i].cells[4].firstChild.value = "0.7";
				dinotable.rows[i].cells[5].firstChild.value = "1.0";
                InternalDebug("WARN: Creature "+ dname +" was not found in the config, loading defaults");
            }
            valid = false;//variable reuse for this new part that adds the new growth system
            for (var grname in GrowthLimits) {
                if (GrowthLimits[grname][0] == dname) {
                    valid = true;
                    if(GrowthLimits[grname][1] <= 20) {dinotable.rows[i].cells[3].firstChild.value = GrowthLimits[grname][1];} else {
						dinotable.rows[i].cells[3].firstChild.value = 20;
						InternalDebug("WARN: Creature "+ dname +" growth exceeded game max, setting to game max");
					}
                    break;
                }
            }
            if(!valid && !GrowthLimit == 0 && GrowthLimit <= 20){
                InternalDebug("WARN: Creature "+ dname +" was missing its growth value, but there is a legacy Growth limit set. Porting to Creature");
                dinotable.rows[i].cells[3].firstChild.value = GrowthLimit;
            } else if(!valid && GrowthLimit == 0){//IN THEROY THIS SHOULD NEVER HAPPEN!!!! growth limits are REQUIRED in older configs!
                InternalDebug("WARN: Creature "+ dname +" was missing its growth value and there was no Legacy growth set. setting to default");
                dinotable.rows[i].cells[3].firstChild.value = 20;
            }
			
        }
    }
    document.getElementById('bForceIgnoreGroupSpeciesCheckOnLogin').checked = bForceIgnoreGroupSpeciesCheckOnLogin;
    var mixpack = document.getElementById("MPTable").getElementsByTagName('tbody')[0],
		MProw = 0,
		MProw = mixpack.rows.length;
    for (rowid = 0; rowid < MProw; rowid++) {
        mixpack.deleteRow(-1);
    }
    var mixfragment1 = document.createDocumentFragment();//we are going to be making allthe buttons here 
    if(!AllowedSpeciesGroupsH & (AllowedSpeciesGroups.length === 0 )){ //case where theres no configuration at all for creatures. builds a default config
        var row = mixpack.insertRow(-1),
        cell0 = row.insertCell(0),
        cell1 = row.insertCell(1),
        cell2 = row.insertCell(2),
		cell3 = row.insertCell(3);
        cell0.innerHTML = '<input type="button" value="+" onclick="addMPRow(this)">';
        cell1.innerHTML = '<input type="button" value="x" onclick="RemoveMPRow(this)">';
		cell2.innerHTML = '<input type="button" value="C" onclick="Setrow(this)" style="background-color:coral"><input type="button" value="H" onclick="Setrow(this)"><input type="button" value="A" onclick="Setrow(this)"><input type="button" value="F" onclick="Setrow(this)">';
        cell3.appendChild(AddCreatureCarnButton.cloneNode(true));
    } else {
        for(i in AllowedSpeciesGroups){
            var row = mixpack.insertRow(-1),
            cell0 = row.insertCell(0),
            cell1 = row.insertCell(1),
			cell2 = row.insertCell(2),
			cell3 = row.insertCell(3);
			cell0.innerHTML = '<input type="button" value="+" onclick="addMPRow(this)">';
            cell1.innerHTML = '<input type="button" value="x" onclick="RemoveMPRow(this)">';
			cell2.innerHTML = '<input type="button" value="C" onclick="Setrow(this)"><input type="button" value="H" onclick="Setrow(this)"><input type="button" value="A" onclick="Setrow(this)"><input type="button" value="F" onclick="Setrow(this)">';
			var MixedAllowed = [];
			if(Carnivores.includes(AllowedSpeciesGroups[i][0])){
				MixedAllowed = Carnivores;
				cell2.children[0].style.backgroundColor="coral";
				cell3.appendChild(AddCreatureCarnButton.cloneNode(true));
			} else if(Herbivores.includes(AllowedSpeciesGroups[i][0])){
				MixedAllowed = Herbivores;
				cell2.children[1].style.backgroundColor="aquamarine";
				cell3.appendChild(AddCreatureHerbButton.cloneNode(true));
			} else if(Aquatics.includes(AllowedSpeciesGroups[i][0])){
				MixedAllowed = Aquatics;
				cell2.children[2].style.backgroundColor="aqua";
				cell3.appendChild(AddCreatureAquaButton.cloneNode(true));
			} else if(Flyers.includes(AllowedSpeciesGroups[i][0])){
				MixedAllowed = Flyers;
				cell2.children[3].style.backgroundColor="darkturquoise";
				cell3.appendChild(AddCreatureFlyerButton.cloneNode(true));
			}
            for(y in AllowedSpeciesGroups[i]){
                if (y === "length" || y === 'item') {break; }
                if(!MixedAllowed.includes(AllowedSpeciesGroups[i][y])){
                    InternalDebug("WARN: Creature "+ dname +" is not allowed in this mixpacks config and has been removed.");
                    CompatibilityMode = true;
                    continue;
                }
                var btn = document.createElement('input');
                btn.type= 'button';
                btn.setAttribute('onclick','this.remove()');
                btn.value = AllowedSpeciesGroups[i][y];
                cell3.appendChild(btn);
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
                InternalDebug('WARN: ' + cname + " was missing from the config. setting to blank");
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
/**        if(playersettings.includes(ServerAdmins[admins][0])){
            InternalDebug('found duplicate admin id '+ServerAdmins[admins][0]+' with rank '+ServerAdmins[admins][1]+ ' ! please fix duplicates!');//warn for now.
            }//we have a duplicate entry in the admin list.
        playersettings.push([ServerAdmins[admins][0],ServerAdmins[admins][1],'','#ffffff']);//push each entry but pre-add a blank tag and blank color to the data*
    }**/
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
        var valid = false;
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
            cell6 = row.insertCell(6),
            cell7 = row.insertCell(7);
        cell0.innerHTML = '<input type="number" value=' + playersettings[newstaff][0] + ' onchange="validateid(this)" onwheel="this.blur()">';
        cell7.innerHTML = '<a href="#" target="_blank">Retrieving Steam Name...</a>';
        validateid(cell0.firstChild);
        //update to use the self contained function.why didnt i think to do this before?

        cell1.innerHTML = '<select name="Ranks">' + div.innerHTML + '</select>';
        cell1.firstChild.value = playersettings[newstaff][1];
        cell2.innerHTML = '<input type="text" value="' + playersettings[newstaff][2] + '">';
        cell3.innerHTML = '<input type="color" value=' + playersettings[newstaff][3] + ' onchange="ValidateColor(this)">';
        cell4.innerHTML = '<input type = "text" pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$" onchange ="ValidateColor(this)" size=7 maxlength="7" value="' + playersettings[newstaff][3] + '" style="vertical-align: middle">';
/*        if(newstaff == 0) {
            cell5.innerHTML = '<input type="button" value="X" disabled>'; removed since you may want to remove the first user in the row
        } else {*/
            cell5.innerHTML = '<input type="button" value="X" onclick="StaffRemoveRow(this)">';
//        }
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
    document.getElementById('Rconip').value = IP4Binding;
    document.getElementById('GameReporter').checked = GameReporter;
    if (GameReporter){
        document.getElementById('DiscordIntergration').style.display = 'block';
    } else {
        document.getElementById('DiscordIntergration').style.display = 'none';
    }
    document.getElementById('bUseChatWebhook').checked = bUseChatWebhook;
    if (bUseChatWebhook){
        document.getElementById('DiscordChat').style.display = 'block';
    } else {
        document.getElementById('DiscordChat').style.display = 'none';
    }
    document.getElementById('ChatReportDiscordWebhook').value = ChatReportDiscordWebhook;
    document.getElementById('ChatReportIconURL').value = ChatReportIconURL;
    document.getElementById('bUseCombatActivityWebhook').checked = bUseCombatActivityWebhook;
    document.getElementById('ChatWebhookFormatStyle').value = ChatWebhookFormatStyle;
    if (bUseCombatActivityWebhook){
        document.getElementById('DinoCombat').style.display = 'block';
    } else {
        document.getElementById('DinoCombat').style.display = 'none';
    }
    document.getElementById('CombatActivityDiscordWebhook').value = CombatActivityDiscordWebhook;
    document.getElementById('CombatActivityDiscordIconURL').value = CombatActivityDiscordIconURL;
    document.getElementById('bUseLoginReportWebhook').checked = bUseLoginReportWebhook;
    if (bUseLoginReportWebhook){
        document.getElementById('DiscordConnect').style.display = 'block';
    } else {
        document.getElementById('DiscordConnect').style.display = 'none';
    }
    document.getElementById('LoginDiscordWebhook').value = LoginDiscordWebhook;
    document.getElementById('LoginDiscordIconURL').value = LoginDiscordIconURL;
    document.getElementById('LoginReportFormatStyle').value = LoginReportFormatStyle;
    document.getElementById('LogoutReportFormatStyle').value = LogoutReportFormatStyle;
    document.getElementById('bUseAdminCommandUsageWebhook').checked = bUseAdminCommandUsageWebhook;
    if (bUseAdminCommandUsageWebhook){
        document.getElementById('DiscordCommands').style.display = 'block';
    } else {
        document.getElementById('DiscordCommands').style.display = 'none';
    }
    document.getElementById('AdminCmdDiscordWebhook').value = AdminCmdDiscordWebhook;
    document.getElementById('AdminCmdDiscordIcon').value = AdminCmdDiscordIcon;
    document.getElementById('bUseGroupActivityWebhook').checked = bUseGroupActivityWebhook;
    document.getElementById('AdminCommandUsageFormatStyle').value = AdminCommandUsageFormatStyle;
    if (bUseGroupActivityWebhook){
        document.getElementById('DiscordGroup').style.display = 'block';
    } else {
        document.getElementById('DiscordGroup').style.display = 'none';
    }
    document.getElementById('GroupActivityDiscordWebhook').value = GroupActivityDiscordWebhook;
    document.getElementById('GroupActivityDiscordIconURL').value = GroupActivityDiscordIconURL;
    document.getElementById('EventsDiscordWebhook').value = EventsDiscordWebhook;
    document.getElementById('EventsDiscordIconURL').value = EventsDiscordIconURL;
    document.getElementById('bUseEventsWebhook').checked = bUseEventsWebhook;
    if (bUseEventsWebhook){
        document.getElementById('EventsWebhook').style.display = 'block';
    } else {
        document.getElementById('EventsWebhook').style.display = 'none';
    }
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
    InternalDebug("DBG: Finished loading, updating page");
}
// used by the upload file 
function readdata(selector) {
    var fileList = selector.files;
    console.log(fileList);
    if(fileList.length !== 0) {
        document.getElementById('loadHeader').style.display = "block";
        document.getElementById("fileModal").style.display = "none";
        var proceed = confirm("Warning!\n Loading a Game.ini will overwrite all settings you have currently set on this page!\n do you want to proceed with this?\nThis may take a few seconds!");
        if(proceed){//user clicked ok
            var reader = new FileReader();
            reader.onload = function(event) {
                var content = event.target.result;
                parsedata(content);
                buildpage();
                document.getElementById("btnload").innerHTML="Reload Existing Game.ini";
            };
            document.getElementById('loadHeader').style.display = "none";
            var data = reader.readAsText(fileList[0]);//outputs a string to parse
        }
    }
}
function SubmitConfig() {
    document.getElementById('loadHeader').style.display = "block";
    var proceed = confirm("Warning!\n Loading a Game.ini will overwrite all settings you have currently set on this page!\n do you want to proceed with this?\nThis may take a few seconds!");
    if(proceed){//user clicked ok
        var content = document.getElementById("inputtxt").value;
        parsedata(content);
        buildpage();
        document.getElementById("btnload").innerHTML="Reload Existing Game.ini";
        document.getElementById("fileModal").style.display = "none";
    }
    document.getElementById('loadHeader').style.display = 'none';
}
HTMLSelectElement.prototype.contains = function( value ) {//adds a oneliner prototype for JS selections
    for ( var i = 0, l = this.options.length; i < l; i++ ) {
        if ( this.options[i].value == value ) {
            return true;
        }
    }
    return false;

};
