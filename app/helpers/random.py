from datetime import datetime
from main import config
import random


def createRandomHexString(length: int) -> str:
    random.seed(datetime.now())
    charset = '0123456789abcdef'
    #return ''.join(random.randint(0, len(charset)-1) for _ in range(length))
    hex_str = ''
    for _ in range(length):
        hex_str += charset[random.randint(0, len(charset)-1)]
    return hex_str