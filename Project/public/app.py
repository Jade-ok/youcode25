from flask import Flask, request, jsonify, render_template


app = Flask(__name__)


# Sample in-memory trail data
trails = []


@app.route('/')
def home():
   return render_template("index.html")  # Basic frontend


@app.route('/add_trail', methods=['POST'])
def add_trail():
   data = request.json
   trails.append(data)
   return jsonify({"message": "Trail added!"})


@app.route('/get_trails', methods=['GET'])
def get_trails():
   return jsonify(trails)


if __name__ == '__main__':
   app.run(debug=True)




