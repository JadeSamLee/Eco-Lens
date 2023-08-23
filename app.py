# app.py

import os
from flask import Flask, render_template, request, jsonify
import pandas as pd
import joblib

app = Flask(__name__)

# Load your pre-trained AI model
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/identify')
def diagnose():
    return render_template('identify.html')


@app.route('/identify', methods=['POST'])
def identify():
    return "Hello world"

if __name__ == '__main__':
    app.run(debug=True, port=5500)
