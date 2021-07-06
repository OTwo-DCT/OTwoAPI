from mongoengine import connect


def connectMongoDB(uri: str) -> None:
    connect(host=uri)
