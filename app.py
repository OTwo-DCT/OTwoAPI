# -----------------------------------------------------------------------------------------
# Copyright (c) Microsoft Corporation. All rights reserved.
# Licensed under the MIT License. See LICENSE in the project root for license information.
# -----------------------------------------------------------------------------------------

from flask import Flask, request
app = Flask(__name__)


@app.route("/")
def hello():
    return app.send_static_file("index.html")


@app.route("/vids", methods=['POST'])
def vids():
    print(request.json)
    return {"data": {"vids": ["1111aaaa", "2222bbbb", "3333cccc", "4444dddd"]}}
