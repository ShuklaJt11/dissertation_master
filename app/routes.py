from flask import Blueprint
from app.controllers.test import test

# main blueprint to be registered with application
api = Blueprint('api', __name__)

# register user with api blueprint
api.register_blueprint(test, url_prefix="/test")