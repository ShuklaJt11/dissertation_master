const backendHost = "http://127.0.0.1:5000/api";

export const fetchImageApi = `${backendHost}/get-image-path`;
export const attackImageApi = `${backendHost}/attack/predictions`;
export const fetchAttackedImageApi = `${backendHost}/attack/get-image`;

export const imageLocation = '/file-server/';