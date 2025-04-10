from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/data')
def get_data():
    return jsonify({
        "status": "active",
        "service": "Python API",
        "version": "1.0.0"
    })

if __name__ == '__main__':
    app.run(port=3000)
