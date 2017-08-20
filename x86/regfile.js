"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var R64;
(function (R64) {
    R64[R64["RAX"] = 0] = "RAX";
    R64[R64["RCX"] = 1] = "RCX";
    R64[R64["RDX"] = 2] = "RDX";
    R64[R64["RBX"] = 3] = "RBX";
    R64[R64["RSP"] = 4] = "RSP";
    R64[R64["RBP"] = 5] = "RBP";
    R64[R64["RSI"] = 6] = "RSI";
    R64[R64["RDI"] = 7] = "RDI";
    R64[R64["R8"] = 8] = "R8";
    R64[R64["R9"] = 9] = "R9";
    R64[R64["R10"] = 10] = "R10";
    R64[R64["R11"] = 11] = "R11";
    R64[R64["R12"] = 12] = "R12";
    R64[R64["R13"] = 13] = "R13";
    R64[R64["R14"] = 14] = "R14";
    R64[R64["R15"] = 15] = "R15";
})(R64 = exports.R64 || (exports.R64 = {}));
var R32;
(function (R32) {
    R32[R32["EAX"] = 0] = "EAX";
    R32[R32["ECX"] = 1] = "ECX";
    R32[R32["EDX"] = 2] = "EDX";
    R32[R32["EBX"] = 3] = "EBX";
    R32[R32["ESP"] = 4] = "ESP";
    R32[R32["EBP"] = 5] = "EBP";
    R32[R32["ESI"] = 6] = "ESI";
    R32[R32["EDI"] = 7] = "EDI";
    R32[R32["R8D"] = 8] = "R8D";
    R32[R32["R9D"] = 9] = "R9D";
    R32[R32["R10D"] = 10] = "R10D";
    R32[R32["R11D"] = 11] = "R11D";
    R32[R32["R12D"] = 12] = "R12D";
    R32[R32["R13D"] = 13] = "R13D";
    R32[R32["R14D"] = 14] = "R14D";
    R32[R32["R15D"] = 15] = "R15D";
})(R32 = exports.R32 || (exports.R32 = {}));
var R16;
(function (R16) {
    R16[R16["AX"] = 0] = "AX";
    R16[R16["CX"] = 1] = "CX";
    R16[R16["DX"] = 2] = "DX";
    R16[R16["BX"] = 3] = "BX";
    R16[R16["SP"] = 4] = "SP";
    R16[R16["BP"] = 5] = "BP";
    R16[R16["SI"] = 6] = "SI";
    R16[R16["DI"] = 7] = "DI";
    R16[R16["R8W"] = 8] = "R8W";
    R16[R16["R9W"] = 9] = "R9W";
    R16[R16["R10W"] = 10] = "R10W";
    R16[R16["R11W"] = 11] = "R11W";
    R16[R16["R12W"] = 12] = "R12W";
    R16[R16["R13W"] = 13] = "R13W";
    R16[R16["R14W"] = 14] = "R14W";
    R16[R16["R15W"] = 15] = "R15W";
})(R16 = exports.R16 || (exports.R16 = {}));
var R8;
(function (R8) {
    R8[R8["AL"] = 0] = "AL";
    R8[R8["CL"] = 1] = "CL";
    R8[R8["DL"] = 2] = "DL";
    R8[R8["BL"] = 3] = "BL";
    R8[R8["SPL"] = 4] = "SPL";
    R8[R8["BPL"] = 5] = "BPL";
    R8[R8["SIL"] = 6] = "SIL";
    R8[R8["DIL"] = 7] = "DIL";
    R8[R8["R8B"] = 8] = "R8B";
    R8[R8["R9B"] = 9] = "R9B";
    R8[R8["R10B"] = 10] = "R10B";
    R8[R8["R11B"] = 11] = "R11B";
    R8[R8["R12B"] = 12] = "R12B";
    R8[R8["R13B"] = 13] = "R13B";
    R8[R8["R14B"] = 14] = "R14B";
    R8[R8["R15B"] = 15] = "R15B";
})(R8 = exports.R8 || (exports.R8 = {}));
var R8H;
(function (R8H) {
    R8H[R8H["AH"] = 4] = "AH";
    R8H[R8H["CH"] = 5] = "CH";
    R8H[R8H["DH"] = 6] = "DH";
    R8H[R8H["BH"] = 7] = "BH";
})(R8H = exports.R8H || (exports.R8H = {}));
var SEG;
(function (SEG) {
    SEG[SEG["ES"] = 0] = "ES";
    SEG[SEG["CS"] = 1] = "CS";
    SEG[SEG["SS"] = 2] = "SS";
    SEG[SEG["DS"] = 3] = "DS";
    SEG[SEG["FS"] = 4] = "FS";
    SEG[SEG["GS"] = 5] = "GS";
})(SEG = exports.SEG || (exports.SEG = {}));
var CR;
(function (CR) {
    CR[CR["CR0"] = 0] = "CR0";
    CR[CR["CR1"] = 1] = "CR1";
    CR[CR["CR2"] = 2] = "CR2";
    CR[CR["CR3"] = 3] = "CR3";
    CR[CR["CR4"] = 4] = "CR4";
    CR[CR["CR5"] = 5] = "CR5";
    CR[CR["CR6"] = 6] = "CR6";
    CR[CR["CR7"] = 7] = "CR7";
    CR[CR["CR8"] = 8] = "CR8";
    CR[CR["CR9"] = 9] = "CR9";
    CR[CR["CR10"] = 10] = "CR10";
    CR[CR["CR11"] = 11] = "CR11";
    CR[CR["CR12"] = 12] = "CR12";
    CR[CR["CR13"] = 13] = "CR13";
    CR[CR["CR14"] = 14] = "CR14";
    CR[CR["CR15"] = 15] = "CR15";
})(CR = exports.CR || (exports.CR = {}));
var DR;
(function (DR) {
    DR[DR["DR0"] = 0] = "DR0";
    DR[DR["DR1"] = 1] = "DR1";
    DR[DR["DR2"] = 2] = "DR2";
    DR[DR["DR3"] = 3] = "DR3";
    DR[DR["DR4"] = 4] = "DR4";
    DR[DR["DR5"] = 5] = "DR5";
    DR[DR["DR6"] = 6] = "DR6";
    DR[DR["DR7"] = 7] = "DR7";
    DR[DR["DR8"] = 8] = "DR8";
    DR[DR["DR9"] = 9] = "DR9";
    DR[DR["DR10"] = 10] = "DR10";
    DR[DR["DR11"] = 11] = "DR11";
    DR[DR["DR12"] = 12] = "DR12";
    DR[DR["DR13"] = 13] = "DR13";
    DR[DR["DR14"] = 14] = "DR14";
    DR[DR["DR15"] = 15] = "DR15";
})(DR = exports.DR || (exports.DR = {}));
var X87;
(function (X87) {
    X87[X87["ST0"] = 0] = "ST0";
    X87[X87["ST1"] = 1] = "ST1";
    X87[X87["ST2"] = 2] = "ST2";
    X87[X87["ST3"] = 3] = "ST3";
    X87[X87["ST4"] = 4] = "ST4";
    X87[X87["ST5"] = 5] = "ST5";
    X87[X87["ST6"] = 6] = "ST6";
    X87[X87["ST7"] = 7] = "ST7";
})(X87 = exports.X87 || (exports.X87 = {}));
var MMX;
(function (MMX) {
    MMX[MMX["MMX0"] = 0] = "MMX0";
    MMX[MMX["MMX1"] = 1] = "MMX1";
    MMX[MMX["MMX2"] = 2] = "MMX2";
    MMX[MMX["MMX3"] = 3] = "MMX3";
    MMX[MMX["MMX4"] = 4] = "MMX4";
    MMX[MMX["MMX5"] = 5] = "MMX5";
    MMX[MMX["MMX6"] = 6] = "MMX6";
    MMX[MMX["MMX7"] = 7] = "MMX7";
})(MMX = exports.MMX || (exports.MMX = {}));
var XMM;
(function (XMM) {
    XMM[XMM["XMM0"] = 0] = "XMM0";
    XMM[XMM["XMM1"] = 1] = "XMM1";
    XMM[XMM["XMM2"] = 2] = "XMM2";
    XMM[XMM["XMM3"] = 3] = "XMM3";
    XMM[XMM["XMM4"] = 4] = "XMM4";
    XMM[XMM["XMM5"] = 5] = "XMM5";
    XMM[XMM["XMM6"] = 6] = "XMM6";
    XMM[XMM["XMM7"] = 7] = "XMM7";
    XMM[XMM["XMM8"] = 8] = "XMM8";
    XMM[XMM["XMM9"] = 9] = "XMM9";
    XMM[XMM["XMM10"] = 10] = "XMM10";
    XMM[XMM["XMM11"] = 11] = "XMM11";
    XMM[XMM["XMM12"] = 12] = "XMM12";
    XMM[XMM["XMM13"] = 13] = "XMM13";
    XMM[XMM["XMM14"] = 14] = "XMM14";
    XMM[XMM["XMM15"] = 15] = "XMM15";
    XMM[XMM["XMM16"] = 16] = "XMM16";
    XMM[XMM["XMM17"] = 17] = "XMM17";
    XMM[XMM["XMM18"] = 18] = "XMM18";
    XMM[XMM["XMM19"] = 19] = "XMM19";
    XMM[XMM["XMM20"] = 20] = "XMM20";
    XMM[XMM["XMM21"] = 21] = "XMM21";
    XMM[XMM["XMM22"] = 22] = "XMM22";
    XMM[XMM["XMM23"] = 23] = "XMM23";
    XMM[XMM["XMM24"] = 24] = "XMM24";
    XMM[XMM["XMM25"] = 25] = "XMM25";
    XMM[XMM["XMM26"] = 26] = "XMM26";
    XMM[XMM["XMM27"] = 27] = "XMM27";
    XMM[XMM["XMM28"] = 28] = "XMM28";
    XMM[XMM["XMM29"] = 29] = "XMM29";
    XMM[XMM["XMM30"] = 30] = "XMM30";
    XMM[XMM["XMM31"] = 31] = "XMM31";
})(XMM = exports.XMM || (exports.XMM = {}));
var YMM;
(function (YMM) {
    YMM[YMM["YMM0"] = 0] = "YMM0";
    YMM[YMM["YMM1"] = 1] = "YMM1";
    YMM[YMM["YMM2"] = 2] = "YMM2";
    YMM[YMM["YMM3"] = 3] = "YMM3";
    YMM[YMM["YMM4"] = 4] = "YMM4";
    YMM[YMM["YMM5"] = 5] = "YMM5";
    YMM[YMM["YMM6"] = 6] = "YMM6";
    YMM[YMM["YMM7"] = 7] = "YMM7";
    YMM[YMM["YMM8"] = 8] = "YMM8";
    YMM[YMM["YMM9"] = 9] = "YMM9";
    YMM[YMM["YMM10"] = 10] = "YMM10";
    YMM[YMM["YMM11"] = 11] = "YMM11";
    YMM[YMM["YMM12"] = 12] = "YMM12";
    YMM[YMM["YMM13"] = 13] = "YMM13";
    YMM[YMM["YMM14"] = 14] = "YMM14";
    YMM[YMM["YMM15"] = 15] = "YMM15";
    YMM[YMM["YMM16"] = 16] = "YMM16";
    YMM[YMM["YMM17"] = 17] = "YMM17";
    YMM[YMM["YMM18"] = 18] = "YMM18";
    YMM[YMM["YMM19"] = 19] = "YMM19";
    YMM[YMM["YMM20"] = 20] = "YMM20";
    YMM[YMM["YMM21"] = 21] = "YMM21";
    YMM[YMM["YMM22"] = 22] = "YMM22";
    YMM[YMM["YMM23"] = 23] = "YMM23";
    YMM[YMM["YMM24"] = 24] = "YMM24";
    YMM[YMM["YMM25"] = 25] = "YMM25";
    YMM[YMM["YMM26"] = 26] = "YMM26";
    YMM[YMM["YMM27"] = 27] = "YMM27";
    YMM[YMM["YMM28"] = 28] = "YMM28";
    YMM[YMM["YMM29"] = 29] = "YMM29";
    YMM[YMM["YMM30"] = 30] = "YMM30";
    YMM[YMM["YMM31"] = 31] = "YMM31";
})(YMM = exports.YMM || (exports.YMM = {}));
var ZMM;
(function (ZMM) {
    ZMM[ZMM["ZMM0"] = 0] = "ZMM0";
    ZMM[ZMM["ZMM1"] = 1] = "ZMM1";
    ZMM[ZMM["ZMM2"] = 2] = "ZMM2";
    ZMM[ZMM["ZMM3"] = 3] = "ZMM3";
    ZMM[ZMM["ZMM4"] = 4] = "ZMM4";
    ZMM[ZMM["ZMM5"] = 5] = "ZMM5";
    ZMM[ZMM["ZMM6"] = 6] = "ZMM6";
    ZMM[ZMM["ZMM7"] = 7] = "ZMM7";
    ZMM[ZMM["ZMM8"] = 8] = "ZMM8";
    ZMM[ZMM["ZMM9"] = 9] = "ZMM9";
    ZMM[ZMM["ZMM10"] = 10] = "ZMM10";
    ZMM[ZMM["ZMM11"] = 11] = "ZMM11";
    ZMM[ZMM["ZMM12"] = 12] = "ZMM12";
    ZMM[ZMM["ZMM13"] = 13] = "ZMM13";
    ZMM[ZMM["ZMM14"] = 14] = "ZMM14";
    ZMM[ZMM["ZMM15"] = 15] = "ZMM15";
    ZMM[ZMM["ZMM16"] = 16] = "ZMM16";
    ZMM[ZMM["ZMM17"] = 17] = "ZMM17";
    ZMM[ZMM["ZMM18"] = 18] = "ZMM18";
    ZMM[ZMM["ZMM19"] = 19] = "ZMM19";
    ZMM[ZMM["ZMM20"] = 20] = "ZMM20";
    ZMM[ZMM["ZMM21"] = 21] = "ZMM21";
    ZMM[ZMM["ZMM22"] = 22] = "ZMM22";
    ZMM[ZMM["ZMM23"] = 23] = "ZMM23";
    ZMM[ZMM["ZMM24"] = 24] = "ZMM24";
    ZMM[ZMM["ZMM25"] = 25] = "ZMM25";
    ZMM[ZMM["ZMM26"] = 26] = "ZMM26";
    ZMM[ZMM["ZMM27"] = 27] = "ZMM27";
    ZMM[ZMM["ZMM28"] = 28] = "ZMM28";
    ZMM[ZMM["ZMM29"] = 29] = "ZMM29";
    ZMM[ZMM["ZMM30"] = 30] = "ZMM30";
    ZMM[ZMM["ZMM31"] = 31] = "ZMM31";
})(ZMM = exports.ZMM || (exports.ZMM = {}));
