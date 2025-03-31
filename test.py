# Import necessary libraries
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.datasets import make_classification
from sklearn.preprocessing import StandardScaler


X, y = make_classification(n_samples=1000, n_features=10, n_classes=2, 
                           n_informative=5, random_state=42)

column_names = [f"Feature_{i}" for i in range(1, 11)]
df = pd.DataFrame(X, columns=column_names)
df["target"] = y  # Add the target column

print("\nFirst 5 rows of the dataset:")
print(df.head())

print("\nDataset Info:")
print(df.info())

print("\nSummary Statistics:")
print(df.describe())

print("\nMissing Values per Column:")
print(df.isnull().sum())

plt.figure(figsize=(6, 4))
sns.countplot(x='target', data=df, palette='coolwarm')
plt.title("Class Distribution")
plt.xlabel("Class")
plt.ylabel("Count")
plt.show()

df.hist(figsize=(12, 8), bins=30)
plt.suptitle("Feature Distributions", fontsize=14)
plt.show()

plt.figure(figsize=(12, 6))
sns.heatmap(df.corr(), annot=True, cmap='coolwarm', fmt=".2f")
plt.title("Feature Correlation Heatmap")
plt.show()

scaler = StandardScaler()
df_scaled = scaler.fit_transform(df.drop(columns=['target']))

print("\nEDA Completed Successfully ✅")
