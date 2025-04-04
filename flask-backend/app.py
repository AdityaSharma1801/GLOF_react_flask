from flask import Flask, request, jsonify
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return "Flask server is up 🚀"

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({"error": "No file uploaded"}), 400
    
    file = request.files['file']
    data = pd.read_csv(file)
    
    # Dummy logic
    data['prediction'] = 'low risk'
    
    return jsonify({"prediction": data['prediction'].tolist()})

if __name__ == '__main__':
    app.run(debug=True)
