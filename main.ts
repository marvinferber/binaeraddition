function dez2bin (zahl22: number) {
    ret = ""
    while (true) {
        // Division mit Rest, speichere nur den Rest
        rest = zahl22 % 2
        // Division mit Rest, speichere den ganzzahligen Quotient
        zahl22 = Math.idiv(zahl22, 2)
        // füge dem Ergebnis ein weiteres Bit rechts hinzu
        ret = "" + rest + ret
        // Falls die Zahl 0 geworden ist, ist die Rechnung beendet
        if (zahl22 == 0) {
            break;
        }
    }
    while (ret.length < 8) {
        // füge dem Ergebnis ein weiteres Bit rechts hinzu
        ret = "0" + ret
    }
    return ret
}
function volladdierer (bitA: string, bitB: string, cin: string) {
    if (bitA == "0" && bitB == "0" && cin == "0") {
        sum2 = "0"
        cout = "0"
    }
    if (bitA == "0" && bitB == "0" && cin == "1") {
        sum2 = "1"
        cout = "0"
    }
    if (bitA == "0" && bitB == "1" && cin == "0") {
        sum2 = "1"
        cout = "0"
    }
    if (bitA == "0" && bitB == "1" && cin == "1") {
        sum2 = "0"
        cout = "1"
    }
    if (bitA == "1" && bitB == "0" && cin == "0") {
        sum2 = "1"
        cout = "0"
    }
    if (bitA == "1" && bitB == "0" && cin == "1") {
        sum2 = "0"
        cout = "1"
    }
    if (bitA == "1" && bitB == "1" && cin == "0") {
        sum2 = "0"
        cout = "1"
    }
    if (bitA == "1" && bitB == "1" && cin == "1") {
        sum2 = "1"
        cout = "1"
    }
}
GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Fire1, GAME_ZIP64.ZIP64ButtonEvents.Click, function () {
    summand1 += 1
    input1 = dez2bin(summand1)
    anzeige = addition(input1, input2)
})
function addition (bitstr1: string, bitstr2: string) {
    ergebnis = ""
    cout = "0"
    Index = 0
    while (Index <= bitstr1.length - 1) {
        volladdierer(bitstr1.charAt(bitstr1.length - 1 - Index), bitstr2.charAt(bitstr1.length - 1 - Index), cout)
        ergebnis = "" + sum2 + ergebnis
        Index += 1
    }
    return ergebnis
}
GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Fire2, GAME_ZIP64.ZIP64ButtonEvents.Click, function () {
    summand1 += -1
    input1 = dez2bin(summand1)
    anzeige = addition(input1, input2)
})
let Index2 = 0
let Index = 0
let ergebnis = ""
let cout = ""
let sum2 = ""
let zahl22 = 0
let rest = 0
let ret = ""
let anzeige = ""
let input2 = ""
let input1 = ""
let summand1 = 0
let zahl2222 = 0
let zahl222 = 0
summand1 = 3
let display = GAME_ZIP64.createZIP64Display()
display.setBrightness(20)
input1 = dez2bin(summand1)
input2 = "00000111"
anzeige = addition(input1, input2)
basic.forever(function () {
    Index2 = 0
    while (Index2 <= input1.length) {
        if (input1.charAt(Index2) == "1") {
            display.setMatrixColor(Index2, 0, GAME_ZIP64.colors(ZipLedColors.Red))
        } else {
            display.setMatrixColor(Index2, 0, GAME_ZIP64.colors(ZipLedColors.White))
        }
        if (input2.charAt(Index2) == "1") {
            display.setMatrixColor(Index2, 1, GAME_ZIP64.colors(ZipLedColors.Red))
        } else {
            display.setMatrixColor(Index2, 1, GAME_ZIP64.colors(ZipLedColors.White))
        }
        display.setMatrixColor(Index2, 2, GAME_ZIP64.colors(ZipLedColors.Green))
        if (anzeige.charAt(Index2) == "1") {
            display.setMatrixColor(Index2, 3, GAME_ZIP64.colors(ZipLedColors.Red))
        } else {
            display.setMatrixColor(Index2, 3, GAME_ZIP64.colors(ZipLedColors.White))
        }
        Index2 += 1
    }
    display.show()
    basic.pause(200)
})
