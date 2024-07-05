from flask import Flask
from app.config.config import Config
from app.routes import api

app = Flask(__name__)

config = Config().dev_config

app.env = config.ENV

app.register_blueprint(api, url_prefix="/api")