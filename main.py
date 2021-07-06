from flask import Flask
from app.helpers import config, mongo
from app.routes import *

config = config.Config()
mongo.connectMongoDB(f"{config.mongoURI}/{config.mongoDB}?retryWrites=true&w=majority")
app = Flask(__name__)
app.register_blueprint(routes)

if __name__ == '__main__':
    app.run(host=config.host, port=config.port,
            debug=config.isDev, load_dotenv=True)
