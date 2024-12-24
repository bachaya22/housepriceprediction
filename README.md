# Home Price Prediction

This is a web application to predict home prices in Bangalore based on area (square feet), the number of bedrooms (BHK), bathrooms, and location. The frontend is built using HTML, CSS, and JavaScript, while the backend is powered by Flask.

---

## Features
- Predict home prices based on user input.
- Dynamic dropdown for locations populated from the backend.
- Backend API to handle price prediction and location data.

---

## Prerequisites
Ensure the following are installed:
- Python 3.x
- Flask
- Flask-CORS
- jQuery (for frontend AJAX requests)

---

## Installation

1. **Clone the repository**
```bash
git clone https://github.com/bachaaya22/housepriceprediction.git
cd housepriceprediction
```

2. **Set up the backend**
   - Install dependencies:
     ```bash
     pip install flask flask-cors
     ```
   - Run the Flask server:
     ```bash
     python app.py
     ```
   - The server will start at `http://127.0.0.1:5000`.

3. **Run the frontend**
   - Open `index.html` in a web browser.

---

## API Endpoints

### `POST /predict_home_price`
- **Description**: Predicts home prices based on input parameters.
- **Request Body (JSON)**:
  ```json
  {
    "total_sqft": 1000,
    "bhk": 2,
    "bath": 2,
    "location": "Electronic City"
  }
  ```
- **Response (JSON)**:
  ```json
  {
    "estimated_price": 75
  }
  ```

### `GET /get_location_names`
- **Description**: Fetches the list of available locations.
- **Response (JSON)**:
  ```json
  {
    "locations": ["Electronic City", "Rajaji Nagar"]
  }
  ```

---

## Folder Structure
```
|-- app.py              # Flask backend
|-- static/             # Static files
|   |-- app.js          # JavaScript functions for frontend
|   |-- app.css         # CSS styles for the application
|-- templates/
|   |-- index.html      # Frontend HTML file
```

---
##screen shoot
![Screenshot 2024-12-24 101218](https://github.com/user-attachments/assets/4d189402-ffc6-471f-a1a3-2369e5bbb321)
![Screenshot 2024-12-24 101314](https://github.com/user-attachments/assets/d10a35c3-e272-4d4c-bef3-943f20a382ff)
![Screenshot 2024-12-24 101646](https://github.com/user-attachments/assets/ea5d43df-f3e0-481b-b8de-367ce7db24ac)
![Screenshot 2024-12-24 101553](https://github.com/user-attachments/assets/4d6a265b-8a69-49eb-b4fe-3e2f356a4cde)
![Screenshot 2024-12-24 101733](https://github.com/user-attachments/assets/03dee550-923e-40f0-b051-1799ff6415e6)



## Known Issues
- Ensure the Flask server is running to avoid frontend API call errors.
- CORS errors may occur if Flask-CORS is not properly configured.

---

## Contributing
Contributions are welcome! Feel free to fork the repository and submit a pull request.

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Contact
For questions or support, please contact:
- **GitHub**:https://github.com/bachaya22/
- **Email**: bachayasb1@gmail.com
