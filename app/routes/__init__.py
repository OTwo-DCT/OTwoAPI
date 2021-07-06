from flask import Blueprint
routes = Blueprint('routes', __name__)

from .virtual_id_route import *