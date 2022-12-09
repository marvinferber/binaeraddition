function volladdierer (bitA: string, bitB: string, cin: string) {
    if (bitA == "0" && bitB == "0" && cin == "0") {
        sum = "0"
        cout = "0"
    }
    if (bitA == "0" && bitB == "0" && cin == "1") {
        sum = "1"
        cout = "0"
    }
    if (bitA == "0" && bitB == "1" && cin == "0") {
        sum = "1"
        cout = "0"
    }
    if (bitA == "0" && bitB == "1" && cin == "1") {
        sum = "0"
        cout = "1"
    }
    if (bitA == "1" && bitB == "0" && cin == "0") {
        sum = "1"
        cout = "0"
    }
    if (bitA == "1" && bitB == "0" && cin == "1") {
        sum = "0"
        cout = "1"
    }
    if (bitA == "1" && bitB == "1" && cin == "0") {
        sum = "0"
        cout = "1"
    }
    if (bitA == "1" && bitB == "1" && cin == "1") {
        sum = "1"
        cout = "1"
    }
}
function addition (bitstr1: string, bitstr2: string) {
    ergebnis = ""
    cout = "0"
    while (Index <= bitstr1.length - 1) {
        volladdierer(bitstr1.charAt(bitstr1.length - 1 - Index), bitstr2.charAt(bitstr1.length - 1 - Index), cout)
        ergebnis = "" + sum + ergebnis
        Index += 1
    }
    return ergebnis
}
let Index2 = 0
let Index = 0
let ergebnis = ""
let cout = ""
let sum = ""
let display = GAME_ZIP64.createZIP64Display()
display.setBrightness(20)
let input1 = "00000011"
let input2 = "00000111"
let anzeige = addition(input1, input2)
basic.forever(function () {
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
})
