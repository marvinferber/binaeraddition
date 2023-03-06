def dez2bin(zahl22: number):
    global ret, rest
    ret = ""
    while True:
        # Division mit Rest, speichere nur den Rest
        rest = zahl22 % 2
        # Division mit Rest, speichere den ganzzahligen Quotient
        zahl22 = Math.idiv(zahl22, 2)
        # füge dem Ergebnis ein weiteres Bit rechts hinzu
        ret = "" + str(rest) + ret
        # Falls die Zahl 0 geworden ist, ist die Rechnung beendet
        if zahl22 == 0:
            break
    while len(ret) < 8:
        # füge dem Ergebnis ein weiteres Bit rechts hinzu
        ret = "0" + ret
    return ret
def volladdierer(bitA: str, bitB: str, cin: str):
    global sum2, cout
    if bitA == "0" and bitB == "0" and cin == "0":
        sum2 = "0"
        cout = "0"
    if bitA == "0" and bitB == "0" and cin == "1":
        sum2 = "1"
        cout = "0"
    if bitA == "0" and bitB == "1" and cin == "0":
        sum2 = "1"
        cout = "0"
    if bitA == "0" and bitB == "1" and cin == "1":
        sum2 = "0"
        cout = "1"
    if bitA == "1" and bitB == "0" and cin == "0":
        sum2 = "1"
        cout = "0"
    if bitA == "1" and bitB == "0" and cin == "1":
        sum2 = "0"
        cout = "1"
    if bitA == "1" and bitB == "1" and cin == "0":
        sum2 = "0"
        cout = "1"
    if bitA == "1" and bitB == "1" and cin == "1":
        sum2 = "1"
        cout = "1"

def my_function():
    global summand1, input1, anzeige
    summand1 += 1
    input1 = dez2bin(summand1)
    basic.show_string(input1)
    anzeige = addition(input1, input2)
GAME_ZIP64.on_button_press(GAME_ZIP64.ZIP64ButtonPins.FIRE1,
    GAME_ZIP64.ZIP64ButtonEvents.CLICK,
    my_function)

def addition(bitstr1: str, bitstr2: str):
    global ergebnis, cout, Index
    ergebnis = ""
    cout = "0"
    while Index <= len(bitstr1) - 1:
        volladdierer(bitstr1.char_at(len(bitstr1) - 1 - Index),
            bitstr2.char_at(len(bitstr1) - 1 - Index),
            cout)
        ergebnis = "" + sum2 + ergebnis
        Index += 1
    return ergebnis
Index2 = 0
Index = 0
ergebnis = ""
cout = ""
sum2 = ""
zahl222 = 0
rest = 0
ret = ""
anzeige = ""
summand1 = 3
zahl2222 = 0
display = GAME_ZIP64.create_zip64_display()
display.set_brightness(20)
input1 = dez2bin(summand1)
input2 = "00000111"
anzeige = addition(input1, input2)

def on_forever():
    global Index2, anzeige, input1, input2
    while Index2 <= len(input1):
        if input1.char_at(Index2) == "1":
            display.set_matrix_color(Index2, 0, GAME_ZIP64.colors(ZipLedColors.RED))
        else:
            display.set_matrix_color(Index2, 0, GAME_ZIP64.colors(ZipLedColors.WHITE))
        if input2.char_at(Index2) == "1":
            display.set_matrix_color(Index2, 1, GAME_ZIP64.colors(ZipLedColors.RED))
        else:
            display.set_matrix_color(Index2, 1, GAME_ZIP64.colors(ZipLedColors.WHITE))
        display.set_matrix_color(Index2, 2, GAME_ZIP64.colors(ZipLedColors.GREEN))
        if anzeige.char_at(Index2) == "1":
            display.set_matrix_color(Index2, 3, GAME_ZIP64.colors(ZipLedColors.RED))
        else:
            display.set_matrix_color(Index2, 3, GAME_ZIP64.colors(ZipLedColors.WHITE))
        Index2 += 1
    display.show()
    basic.pause(200)
basic.forever(on_forever)
