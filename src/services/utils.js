import pc from "../assets/platforms/pc.jpg";
import ps1 from "../assets/platforms/ps1.jpg";
import ps2 from "../assets/platforms/ps2.jpg";
import ps3 from "../assets/platforms/ps3.jpg";
import ps4 from "../assets/platforms/ps4.jpg";
import ps5 from "../assets/platforms/ps5.jpg";
import psp from "../assets/platforms/psp.jpg";
import psvita from "../assets/platforms/psvita.jpg";
import xbox from "../assets/platforms/xbox.jpg";
import x360 from "../assets/platforms/x360.jpg";
import xone from "../assets/platforms/xone.jpg";
import xseries from "../assets/platforms/xseries.jpg";
import nes from "../assets/platforms/nes.jpg";
import snes from "../assets/platforms/snes.jpg";
import gameboy from "../assets/platforms/gameboy.jpg";
import gameboycolor from "../assets/platforms/gameboycolor.jpg";
import gameboyadvance from "../assets/platforms/gameboyadvance.jpg";
import n64 from "../assets/platforms/n64.jpg";
import gamecube from "../assets/platforms/gamecube.jpg";
import wii from "../assets/platforms/wii.jpg";
import wiiu from "../assets/platforms/wiiu.jpg";
import dsi from "../assets/platforms/dsi.jpg";
import ds from "../assets/platforms/ds.jpg";
import n3ds from "../assets/platforms/n3ds.jpg";
import nswitch from "../assets/platforms/nswitch.jpg";
import ios from "../assets/platforms/ios.jpg";
import android from "../assets/platforms/android.jpg";
import macos from "../assets/platforms/macos.jpg";
import linux from "../assets/platforms/linux.jpg";
import classicmacintosh from "../assets/platforms/classicmacintosh.jpg";
import apple2 from "../assets/platforms/apple2.jpg";
import commodore from "../assets/platforms/commodore.jpg";
import atari7800 from "../assets/platforms/atari7800.jpg";
import atari5200 from "../assets/platforms/atari5200.jpg";
import atari2600 from "../assets/platforms/atari2600.jpg";
import atari8bit from "../assets/platforms/atariflashback.jpg";
import atariflashback from "../assets/platforms/atari8bit.jpg";
import atarist from "../assets/platforms/atarist.jpg";
import atarilynx from "../assets/platforms/atarilynx.jpg";
import atarixegs from "../assets/platforms/atarixegs.jpg";
import genesis from "../assets/platforms/genesis.jpg";
import saturn from "../assets/platforms/saturn.jpg";
import segacd from "../assets/platforms/segacd.jpg";
import sega32x from "../assets/platforms/sega32x.jpg";
import mastersystem from "../assets/platforms/mastersystem.jpg";
import dreamcast from "../assets/platforms/dreamcast.jpg";
import g3do from "../assets/platforms/g3do.jpg";
import jaguar from "../assets/platforms/jaguar.jpg";
import gamegear from "../assets/platforms/gamegear.jpg";
import neogeo from "../assets/platforms/neogeo.jpg";
import gamepad from "../assets/icons/gamepad.svg";

export const getPlatforms = (platform) => {
  switch (platform) {
    case "PC":
      return pc;

    case "PlayStation":
      return ps1;

    case "PlayStation 2":
      return ps2;

    case "PlayStation 3":
      return ps3;

    case "PlayStation 4":
      return ps4;

    case "PlayStation 5":
      return ps5;

    case "PS Vita":
      return psvita;

    case "PSP":
      return psp;

    case "Xbox":
      return xbox;

    case "Xbox 360":
      return x360;

    case "Xbox One":
      return xone;

    case "Xbox Series S/X":
      return xseries;

    case "NES":
      return nes;

    case "SNES":
      return snes;

    case "Game Boy":
      return gameboy;

    case "Game Boy Color":
      return gameboycolor;

    case "Game Boy Advance":
      return gameboyadvance;

    case "Nintendo 64":
      return n64;

    case "GameCube":
      return gamecube;

    case "Wii":
      return wii;

    case "Wii U":
      return wiiu;

    case "Nintendo DSi":
      return dsi;

    case "Nintendo DS":
      return ds;

    case "Nintendo 3DS":
      return n3ds;

    case "Nintendo Switch":
      return nswitch;

    case "iOS":
      return ios;

    case "Android":
      return android;

    case "macOS":
      return macos;

    case "Linux":
      return linux;

    case "Classic Macintosh":
      return classicmacintosh;

    case "Apple II":
      return apple2;

    case "Commodore / Amiga":
      return commodore;

    case "Atari 7800":
      return atari7800;

    case "Atari 5200":
      return atari5200;

    case "Atari 2600":
      return atari2600;

    case "Atari Flashback":
      return atariflashback;

    case "Atari 8-bit":
      return atari8bit;

    case "Atari ST":
      return atarist;

    case "Atari Lynx":
      return atarilynx;

    case "Atari XEGS":
      return atarixegs;

    case "Genesis":
      return genesis;

    case "SEGA Saturn":
      return saturn;

    case "SEGA CD":
      return segacd;

    case "SEGA 32X":
      return sega32x;

    case "SEGA Master System":
      return mastersystem;

    case "Dreamcast":
      return dreamcast;

    case "3DO":
      return g3do;

    case "Jaguar":
      return jaguar;

    case "Game Gear":
      return gamegear;

    case "Neo Geo":
      return neogeo;

    default:
      return gamepad;
  }
};
