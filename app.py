from flask import Flask
from routes import home

app = Flask(__name__)
app.secret_key = "june"


app.register_blueprint(home.bp)


if __name__ == "__main__":
    app.run(debug=True)