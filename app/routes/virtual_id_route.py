from flask import request, Response, escape
from . import routes
from ..service.virtual_id_service import generateVirtualID


@routes.route("/requestVirtualID", methods=['POST'])
def requestVirtualID() -> dict:
    if request.json is None or type(request.json) is not dict:
        return Response('Invalid request', status=422)
    req: dict = request.json
    if 'phone_number' not in req:
        return Response('Required field missing', status=422)
    phone_number = escape(req.get('phone_number'))
    return generateVirtualID(phone_number)
