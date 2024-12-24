
import json
import pickle
import numpy as np


__locations = None
__model = None
__data_columns = None

  # Ensure this is imported at the top of your script
def get_estimated_price(location, sqft, bath, bhk):
    # Ensure artifacts are loaded
    if not __data_columns or not __model:
        raise ValueError("Artifacts (columns or model) are not loaded. Please call load_saved_artifacted() first.")
    
    # Model expects only the first 3 features: sqft, bath, bhk
    x = np.array([sqft, bath, bhk])
    
    # Ensure the input matches the model's expectations
    try:
        return round(__model.predict([x])[0], 2)
    except ValueError as e:
        raise ValueError(f"Model input mismatch: {e}")

# def get_estimated_price(location, sqft, bath, bhk):
#     try:
#         # Attempt to find the index of the location in the data columns
#         loc_index = __data_columns.index(location.lower())
#     except ValueError:
#         # If the location is not found, set index to -1
#         loc_index = -1

#     # Initialize a NumPy array of zeros with the same length as the number of data columns
#     x = np.zeros(len(__data_columns))
    
#     # Fill in the values for the numeric features
#     x[0] = sqft
#     x[1] = bath
#     x[2] = bhk
    
#     # Set the location feature to 1 if the location exists in the columns
#     if loc_index >= 0:
#         x[loc_index] = 1

#     # Use the model to predict the price
#     return round(__model.predict([x])[0], 2)  # Return the estimated price rounded to 2 decimal places


def get_location_names():
    return __locations

def load_saved_artifacted():
    print("loading artifacts")  # Changed message to reflect loading action
    global __data_columns
    global __locations
    # Load columns from JSON
    with open("./columns.json", "r") as json_file:
        __data_columns = json.load(json_file)['data_columns']
        __locations = __data_columns[3:]  # Assuming locations start from the 4th column
    
    # Load the model from pickle file
    with open("./price.pickle", "rb") as model_file:  # Corrected file open mode
        global __model
        __model = pickle.load(model_file)
    
    print("artifacts loaded successfully")  # Changed message to reflect loading action

if __name__ == '__main__':
    load_saved_artifacted()
   
    print(get_location_names())
    print(get_estimated_price('1st Phase JP Nagar', 1000, 3, 3))
    print(get_estimated_price('Random Location', 1500, 2, 2))
    print(get_estimated_price('yeshwanthpur', 1500, 2, 2))



