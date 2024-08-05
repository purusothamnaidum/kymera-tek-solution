import React from "react";
import CourseCurriculum from "../ReUsableComponent/CourseCurriculum";

const DataScienceCourseContent = () => {
  // Define week content for the Data Science course
  const courseWeekContent = [
    {
      heading: "Introduction to Python",
      points: [
        "Data Types",
        "Data Structures",
        "Conditional Statements",
        "Loops",
        "File Handling",
        "Errors and Exception Handling",
        "Function",
        "Code Optimization and argument functions",
        "Lambda Function",
        "Lambda Expression with Map, Filter & Reduce functions",
        "Exception Handling",
        "Object Oriented Programming"
      ]
    },
    {
      heading: "Python - General Purpose",
      points: [
        "Data Structures",
        "List, Tuple, Set, Dictionary",
        "If Conditions & Looping",
        "For loop, While loop",
        "List & Dictionary Comprehensions",
        "Handling Strings",
        "Writing Functions (def keyword)",
        "Knowledge Check - I (Practice Interview Questions on Functions)",
        "Lambda Expressions with Map, Filter & Reduce functions",
        "*args & **kwargs",
        "Exception Handling",
        "Object Oriented Programming",
        "Class, Methods",
        "Understanding self & __init__",
        "Instance/Static/Class Methods",
        "Inheritance"
      ]
    },
    {
      heading: "Introduction to Machine Learning",
      points: [
        "Understanding Machine Learning Landscape",
        "Supervised Learning",
        "Unsupervised Learning",
        "Examples to demonstrate the above (Swiggy, Netflix, Amazon...)"
      ]
    },
    {
      heading: "Statistics",
      points: [
        "Measures of Central Tendency",
        "Mean, Mode, Median",
        "Mean vs Median: A Truth to be told with an example",
        "Measures of Spread",
        "Variance and Standard Deviation",
        "Practical understanding in the context of Stock Markets",
        "Data Visualization",
        "Histogram: How's the data distributed",
        "Box plot: Who's the outlier",
        "Scatter plot",
        "Normal/Gaussian Distribution",
        "Z-Score",
        "Empirical Rule",
        "Understanding Six Sigma",
        "Hypothesis Testing",
        "Z-test",
        "t-test",
        "Correlation",
        "Pearson Correlation",
        "Chi-Square",
        "ANOVA",
        "Bernoulli Distribution",
        "Probability & Bayes Theorem"
      ]
    },
   
    {
      heading: "Python For Data Science",
      points: [
        "Exploring Pandas with a Real Estate Market dataset",
        "Assignment - 1",
        "Analyze Movie Reviews from IMDb",
        "Assess the Weekly & Quarterly sales of a company",
        "Numpy Arrays",
        "Benefits of Vectorization with numpy arrays in python",
        "How e-commerce companies leverage these to find similar users/products",
        "Matplotlib/Seaborn libraries for data visualization",
        "Correlation implementation using Scipy library",
        "Knowledge Check - II (Correlation on different datasets)",
        "Skewness Check"
      ]
    },
    {
      heading: "Machine Learning",
      points: [
        "Linear Regression",
        "Mean Squared Error",
        "Gradient Descent (Stochastic/Batch/Mini-Batch)",
        "R2-Score",
        "Logistic Regression",
        "Difference between Odds Ratio & Probability",
        "Sigmoid Function",
        "Logit Function",
        "Decision Tree",
        "Entropy",
        "Information Gain",
        "Ensemble Models",
        "Bagging - Random Forest",
        "Boosting - Adaboost, Gradient Boost, XGBoost, LightGBM",
        "Support Vector Machines",
        "Kernels",
        "C and Gamma",
        "Naïve Bayes Classifier",
        "K Nearest Neighbors",
        "Hyperparameter Tuning",
        "GridSearchCV",
        "RandomizedSearchCV",
        "Bayesian Optimization"
      ]
    },
    {
      heading: "Model Evaluation Metrics",
      points: [
        "Confusion Matrix, Precision, Recall, F1-Score, AUC-ROC Curve",
        "Mean Squared Error (MSE)",
        "Mean Absolute Error (MAE)",
        "Knowledge Check - III (MCQs from Interviews)",
        "K Means Clustering, DBSCAN",
        "Elbow Curve",
        "Principal Component Analysis",
        "Understanding Eigen Values & Eigen Vectors"
      ]
    },
    {
      heading: "Data Preprocessing/Data Cleaning Strategies",
      points: [
        "Missing Values Treatment",
        "Scaling",
        "Standard Scaler",
        "MinMax Scaler",
        "Encoding",
        "One Hot Encoding",
        "Label Encoding",
        "Frequency Encoding",
        "Data splitting strategies",
        "Train - Test split",
        "K Fold Cross Validation",
        "Stratified Kfold",
        "Multicollinearity check using VIF",
        "Web Scraping using Beautiful Soup",
        "Handling Imbalanced Datasets using SMOTE",
        "Libraries: Sklearn",
        "Assignment - 2",
        "Work on a Credit Card Fraud Detection dataset"
      ]
    },
    {
      heading: "Natural Language Processing",
      points: [
        "Tokenization",
        "Bag of Words, CountVectorizer, Tf-Idf Vectorizer",
        "Stop words Removal",
        "Stemming & Lemmatization",
        "Libraries: Spacy, NLTK, Gensim",
        "Text Classification",
        "Topic Modelling",
        "Latent Dirichlet Allocation",
        "Non Negative Matrix Factorization",
        "Named Entity Recognition, Parts of Speech Tagging",
        "Understanding Chatbot Framework - Rasa",
        "Rasa NLU",
        "Rasa Core",
        "Word Embedding Techniques",
        "Word2Vec",
        "GloVe",
        "Assignment - 3",
        "Work on a Text dataset"
      ]
    },
    {
      heading: "Projects on the below datasets",
      points: [
        "Microsoft",
        "Mercedes",
        "Amazon",
        "Brazilian Insurance Company",
        "Telecommunications",
        "Image Classification"
      ]
    },
    {
      heading: "Hack-a-thon",
      points: []
    },
    {
      heading: "Assistance",
      points: [
        "Resume Writing",
        "Building a Data Scientist LinkedIn Profile",
        "GitHub Profile"
      ]
    }
  ];

  return (
    <div>
      <CourseCurriculum weekContent={courseWeekContent} />
    </div>
  );
};

export default DataScienceCourseContent;
