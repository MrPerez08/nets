from flask import Flask, jsonify, render_template
app = Flask(__name__)





my_string = "Hello from Flask!"




#Okay boi so @app.route('/') is a DECORATOR that binds URL path '/' to the function 'home()' 
@app.route('/')
def home(): #ts function handles logic for root URL. the return statement sends the 'index.html' file to the users browser
    return render_template('index.html')  # Serve the HTML

@app.route('/get_string')
def get_string():
    return jsonify({"data": my_string})

if __name__ == '__main__':
    app.run(debug=True)