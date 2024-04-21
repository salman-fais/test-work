# Import the Flask class from the flask module
from flask import Flask

# Create an instance of the Flask class
app = Flask(__name__)

# Define the route for the root URL ('/')
@app.route('/')
def hello_world():
    # Return the text "Hello, World!" as a response
    return 'Hello, World!'

# Check if the script is run directly (and not imported)
if __name__ == '__main__':
    # Run the Flask app with debug mode on
    app.run(debug=True)
