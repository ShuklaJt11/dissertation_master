from flask import request, Response, json, Blueprint
from flask_cors import cross_origin

from app.helpers import get_random_image, get_attacked_image, get_model_prediction, get_unattacked_image

attack_api = Blueprint("attack", __name__)

@attack_api.route('/', methods=['POST'])
@cross_origin()
def attack_image():
    data = request.get_json()
    image_path = data.get('image')

    print(image_path)

    original = get_unattacked_image(image_path)
    image = get_attacked_image(image_path)

    original_output = get_model_prediction(original)
    image_output = get_model_prediction(image)

    return Response(
        response=json.dumps({
            "originalTable": original_output, 
            "attackedTable": image_output}),
        status=200,
        mimetype='application/json'
    )