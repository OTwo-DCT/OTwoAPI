from datetime import datetime
from flask import Response
from ..helpers import random
from main import config
from ..entity import user
import traceback


def generateVirtualID(phone_number: str) -> Response:
    virtual_id = []
    try:
        for _ in range(config.virtualIDHexArrayLength):
            while True:
                hex_str = random.createRandomHexString(
                    config.virtualIDHexStringLength)
                if user.User.objects(virtual_id__contains=hex_str).count() == 0:
                    break
            virtual_id.append(hex_str)
        user.User.objects(phone_number=phone_number).update_one(set_on_insert__created=user.User(
        ).created, set__virtual_id=virtual_id, set__updated=datetime.now(), upsert=True)
        new_user: user.User = user.User.objects.get(phone_number=phone_number)
        return {'data': {'phone_number': phone_number, 'virtual_id': new_user.virtual_id}}
    except Exception:
        print(traceback.format_exc())
        return Response(status=500)
