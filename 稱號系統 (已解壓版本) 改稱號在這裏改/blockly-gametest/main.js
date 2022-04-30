import * as Minecraft from 'mojang-minecraft';
const log = function(message) {let okay_message = message.toString().replaceAll('\"',"''").replaceAll('\\',"/");Minecraft.world.getDimension("overworld").runCommand(`tellraw @a {"rawtext":[{"text":"${okay_message}"}]}`)}
var _E7_8E_A9_E5_AE_B6, _E8_A8_8A_E6_81_AF;



  Minecraft.world.events.beforeChat.subscribe(e => {
    e.cancel = true
    _E7_8E_A9_E5_AE_B6 = e.sender;
    _E8_A8_8A_E6_81_AF = e.message;
      if (_E7_8E_A9_E5_AE_B6.hasTag('mod')) {
    log((['[§e房主§r]',_E7_8E_A9_E5_AE_B6.name,'§l>>§r',_E8_A8_8A_E6_81_AF].join('')))
    //稱號1
  } else if (_E7_8E_A9_E5_AE_B6.hasTag('vips')) {
    log((['[§gVIP§r]',_E7_8E_A9_E5_AE_B6.name,'§l>>§r',_E8_A8_8A_E6_81_AF].join('')))
    //稱號2
  } else if (_E7_8E_A9_E5_AE_B6.hasTag('ops')) {
    log((['[§c管理員§r]',_E7_8E_A9_E5_AE_B6.name,'§l>>§r',_E8_A8_8A_E6_81_AF].join('')))
    //稱號3
  } else {
    log((['<',_E7_8E_A9_E5_AE_B6.name,'> ',_E8_A8_8A_E6_81_AF].join('')))
  }

  });
//by.alexkong1123
//Power by.GBS
