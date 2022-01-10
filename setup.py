import setuptools
import os

here = os.path.abspath(os.path.dirname(__file__))

with open("README.md", "r", encoding="UTF-8") as fh:
    long_description = fh.read()


# Get the code version
version = {}
with open(os.path.join(here, "flaml/version.py")) as fp:
    exec(fp.read(), version)
__version__ = version["__version__"]

install_requires = [
    "NumPy>=1.16.2",
    "lightgbm>=2.3.1",
    "xgboost>=0.90,<=1.3.3",
    "scipy>=1.4.1",
    "pandas>=1.1.4",
    "scikit-learn>=0.24",
]


setuptools.setup(
    name="FLAML",
    version=__version__,
    author="Microsoft Corporation",
    author_email="hpo@microsoft.com",
    description="A fast library for automated machine learning and tuning",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/microsoft/FLAML",
    packages=setuptools.find_packages(include=["flaml*"]),
    install_requires=install_requires,
    extras_require={
        "notebook": [
            "openml==0.10.2",
            "jupyter",
            "matplotlib",
            "rgf-python",
            "catboost>=0.26",
        ],
        "test": [
            "flake8>=3.8.4",
            "pytest>=6.1.1",
            "coverage>=5.3",
            "pre-commit",
            "catboost>=0.26",
            "rgf-python",
            "optuna==2.8.0",
            "vowpalwabbit",
            "openml",
            "statsmodels>=0.12.2",
            "psutil==5.8.0",
            "dataclasses",
            "transformers>=4.14",
            "datasets",
            "torch",
            "nltk",
            "rouge_score",
            "seqeval",
            "hcrystalball==0.1.10",
        ],
        "catboost": ["catboost>=0.26"],
        "blendsearch": ["optuna==2.8.0"],
        "ray": [
            "ray[tune]==1.6.0",
            "pyyaml<5.3.1",
        ],
        "azureml": [
            "azureml-mlflow",
        ],
        "nni": [
            "nni",
        ],
        "vw": [
            "vowpalwabbit",
        ],
        "nlp": [
            "transformers>=4.14",
            "datasets",
            "torch",
            "seqeval",
            "nltk",
            "rouge_score",
        ],
        "ts_forecast": ["prophet>=1.0.1", "statsmodels>=0.12.2", "hcrystalball==0.1.10"],
        "forecast": ["prophet>=1.0.1", "statsmodels>=0.12.2", "hcrystalball==0.1.10"],
        "benchmark": ["catboost>=0.26", "psutil==5.8.0", "xgboost==1.3.3"],
    },
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    python_requires=">=3.6",
)
