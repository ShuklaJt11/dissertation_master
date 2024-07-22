from flask import request, Response, json, Blueprint

test = Blueprint("test", __name__)

@test.route('/hello', methods = ['GET'])
def hello():
    return Response(
        response=json.dumps({'status': "success", 
                             "message": "This was easy"}),
        status=200,
        mimetype='application/json'
    )