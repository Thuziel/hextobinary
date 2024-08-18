import random
import sys

def generateNibble():
    return [random.randint(0, 1) for i in range(4)]

def convertNibbleToNumber(nibble):
    return sum(bit * (2 ** (3 - inx)) for inx, bit in enumerate(nibble))

def convertNumberToHex(number):
    if number >= 10:
        return chr(ord("A")+ (number - 10))
    return str(number)

def generateBinaryByte():
    nibbles = [generateNibble(), generateNibble()]
    stringByte = "".join(str(bit) for nibble in nibbles for bit in nibble)
    return nibbles[0], nibbles[1], stringByte

def generateHexByte():
    nibbles = [generateNibble(), generateNibble()]
    nibbles = [convertNumberToHex(convertNibbleToNumber(nibble)) for nibble in nibbles]
    return nibbles[0]+nibbles[1]


def generateQuestion():
    binaryByte = generateBinaryByte()
    hex = convertNumberToHex(convertNibbleToNumber(binaryByte[0])) + convertNumberToHex(convertNibbleToNumber(binaryByte[1]))
    return binaryByte[2], hex

def askQuestion(question):
    userInput = input(f"\n{question[1]}: ")
    return userInput

def checkIfBinaryAndRespond(input):
    if all(char in "01" for char in input):
        return True
    print("Answer in binary. Only 1's and 0's.\nExample: 11110000")
    return False

def checkLengthAndRespond(input):
    if len(input) < 8:
        print("Your response is to short.\nYou need to return a byte. \nExample: 10101101")
        return False
    elif len(input) > 8:
        print("Your response is to long.\nYou need to return a byte. \nExample: 10101101")
        return False
    return True

def checkIfUserIsCorrect(userInput, question):
    if userInput == question[0]:
        print("Correct.")
        return True
    print("Wrong.")
    return False

def checkForCommandsAndRespond(userInput):
    if userInput.lower() == "help":
        print("This is a binary conversion quiz. Type your answer in binary (e.g., 10101101). Type 'quit' to exit.")
        return True
    elif userInput.lower() == "quit":
        sys.exit()
    return False

def runChecks(userInput, question):
    if checkForCommandsAndRespond(userInput):
        return True
    return (checkIfBinaryAndRespond(userInput) and
            checkLengthAndRespond(userInput) and
            checkIfUserIsCorrect(userInput, question))

def userInteraction():
    genQuestion = True
    while True:
        if genQuestion == True:
            question = generateQuestion()
            genQuestion = False
        userInput = askQuestion(question)

        if not runChecks(userInput, question):
            continue

        genQuestion = True

print("Convert this hex value to binary.")
userInteraction()   