import os
import zipfile
import pandas as pd # type: ignore
from sklearn.impute import SimpleImputer # type: ignore

# Step 1: Download the dataset using Kaggle API
# Ensure that you have placed your 'kaggle.json' in the correct directory (~/.kaggle/)
os.system('kaggle datasets download -d bharatnatrayn/movies-dataset-for-feature-extracion-prediction')

# Step 2: Unzip the dataset
# Check if the zip file exists before attempting to open it
zip_path = r"C:\Users\dell\Downloads\archive.zip"
if os.path.exists(zip_path):
    with zipfile.ZipFile(zip_path, 'r') as zip_ref:
        zip_ref.extractall('archive')
else:
    print(f"Error: '{zip_path}' not found. Please download and place it in the correct directory.")

# Step 3: Load the dataset
csv_path = 'archive/movies.csv'
if os.path.exists(csv_path):
    df = pd.read_csv(csv_path)
else:
    raise FileNotFoundError(f"Error: '{csv_path}' not found after extraction.")

# Step 4: Inspect the dataset for missing values
print("Summary of Missing Data:\n")
print(df.isnull().sum())

# Step 5: Impute Missing Data

# Impute numerical columns with mean
numerical_cols = df.select_dtypes(include=['float64', 'int64']).columns
if not numerical_cols.empty:
    mean_imputer = SimpleImputer(strategy='mean')
    df[numerical_cols] = mean_imputer.fit_transform(df[numerical_cols])

# Impute categorical columns with most frequent value (mode)
categorical_cols = df.select_dtypes(include=['object']).columns
if not categorical_cols.empty:
    mode_imputer = SimpleImputer(strategy='most_frequent')
    df[categorical_cols] = mode_imputer.fit_transform(df[categorical_cols])

# Step 6: Check if missing values are imputed
print("\nMissing values after imputation:\n")
print(df.isnull().sum())

# Step 7: Save the cleaned dataset
df.to_csv('movies_cleaned.csv', index=False)
print("Imputation completed and saved as 'movies_cleaned.csv'.")
