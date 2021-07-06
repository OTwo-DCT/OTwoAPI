from mongoengine import Document, StringField, ListField, DateTimeField
from datetime import datetime


class User(Document):
    phone_number = StringField(regex=r'^\d{10}$', required=True, unique=True)
    virtual_id = ListField(StringField(
        regex=r'^[a-fA-F0-9]{8}$'), max_length=4, required=True)
    created = DateTimeField(default=datetime.now, required=True)
    updated = DateTimeField()
