# app.py
from flask import Flask, render_template

app = Flask(__name__)

# Route to serve the initial HTML page
@app.route('/')
def index():
    return render_template('index.html')

# Route to handle the HTMX request
@app.route('/api/data')
def get_data():
    # Replace this with your actual data retrieval logic
    data = "Hello from the server!"
    return data
