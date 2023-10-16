# a) Install dependencies
python3 -m venv venv
source venv/bin/activate
pip install flask

# b) Run all necessary parts of the codebase
FLASK_APP=app.py flask run
