## Steps to run this project

### 1. Clone this repository
```
    https://github.com/EternalSorcerer/DPhi-Assignment.git
```

### 2. cd into the directory
``` 
    cd DPhi-Assignment 
```

### 3 cd into backend & create virtual environment and activate it (for windows)
``` cd to backend 

    py -m venv env 

    .\env\Scripts\activate
```

### 4. cd into dphi
``` 
    cd dphi 
```

### 5. Install requiremnts file
``` 
    pip install -r requirements.txt 
```

### 6. Start server
``` 
    py manage.py runserver 
```

### 7. In other terminal, similarly go into frontend-courses directory and run
``` npm install

    npm start
```



# New task Info
### to make quiz and questions for a course

#### My approach  to this problem

```
Category --> category of quiz (categry can be easy, medium, hard)

Quiz --> ForeignKey to category i.e. many quizzes can belong to particular category

Question --> Foreign Key to Quiz model

Answer --> Foreign Key to Question model (Many answers can belong to one question)

```