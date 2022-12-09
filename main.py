def singleadd(bit1: str, bit2: str, cin: str):
    global bout, cout
    if bit1 == "0" and bit2 == "0" and cin == "0":
        bout = "0"
        cout = "0"
    if bit1 == "0" and bit2 == "0" and cin == "1":
        bout = "1"
        cout = "0"
    if bit1 == "0" and bit2 == "1" and cin == "0":
        bout = "1"
        cout = "0"
    if bit1 == "0" and bit2 == "1" and cin == "1":
        bout = "0"
        cout = "1"
    if bit1 == "1" and bit2 == "0" and cin == "0":
        bout = "1"
        cout = "0"
    if bit1 == "1" and bit2 == "0" and cin == "1":
        bout = "0"
        cout = "1"
    if bit1 == "1" and bit2 == "1" and cin == "0":
        bout = "0"
        cout = "1"
    if bit1 == "1" and bit2 == "1" and cin == "1":
        bout = "1"
        cout = "1"
def addition(bitstr1: str, bitstr2: str):
    global ergebnis, cout
    ergebnis = ""
    cout = "0"
    Index = 0
    while Index <= len(bitstr1) - 1:
        singleadd(bitstr1.char_at(len(bitstr1) - 1-Index), bitstr2.char_at(len(bitstr1) - 1-Index), cout)
        ergebnis = "" + bout + ergebnis
        Index += 1
    return ergebnis
Index2 = 0
ergebnis = ""
cout = ""
bout = ""
input1 = "001"
input2 = "001"
anzeige = addition(input1, input2)

def on_forever():
    global Index2
    while Index2 <= len(input1):
        if input1.char_at(Index2) == "1":
            led.plot(Index2, 0)
        if input2.char_at(Index2) == "1":
            led.plot(Index2, 1)
        if anzeige.char_at(Index2) == "1":
            led.plot(Index2, 3)
        Index2 += 1
basic.forever(on_forever)
