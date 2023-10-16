python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

FLASK_APP=app.py flask run &
python game_state.py &
wait
