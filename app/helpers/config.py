from dotenv import load_dotenv
import os


class Config:
    def __init__(self) -> None:
        load_dotenv()
        self.isDev = os.getenv("FLASK_ENV") == "development"
        self.isProd = os.getenv("FLASK_ENV") == "production"
        self.mongoURI = os.getenv("MONGODB_URI")
        self.mongoDB = os.getenv("MONGO_DATABASE")
        self.host = os.getenv("HOST")
        self.port = int(os.getenv("PORT"))
        self.virtualIDHexStringLength = int(os.getenv("HEX_STRING_LENGTH"))
        self.virtualIDHexArrayLength = int(os.getenv("HEX_ARRAY_LENGTH"))
