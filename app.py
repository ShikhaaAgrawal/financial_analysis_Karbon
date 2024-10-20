from flask import Flask, request, jsonify
from model import probe_model_5l_profit  # Import your model logic
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app) 

@app.route('/upload', methods=['POST'])
def upload_file():
    file = request.files['file']
    if file:
        data = json.load(file)
        result = probe_model_5l_profit(data["data"])
        return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
