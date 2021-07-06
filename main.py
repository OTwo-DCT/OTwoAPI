from flask import Flask
from app.helpers import config, mongo
from app.routes import *


CONFIG = config.Config()
mongo.connectMongoDB(
    f"{CONFIG.mongoURI}/{CONFIG.mongoDB}?retryWrites=true&w=majority")
app = Flask(__name__)
app.register_blueprint(routes)

if __name__ == '__main__':
    app.run(host=CONFIG.host, port=CONFIG.port,
            debug=CONFIG.isDev, load_dotenv=True)
