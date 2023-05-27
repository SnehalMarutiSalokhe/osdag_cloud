
# Osdag_cloud

This is frontend and backend of Osdag Open steel design and graphic aplication which is coaded in react js laguage.

## Tools
  - Django 4
  - React Js
  - Python 3


## How to Run Project

  ### 1. Clone the project into local
  
```bash
  git clone https://github.com/SnehalMarutiSalokhe/osdag_cloud.git
```

  ### 2. Install  frontend dependencies
Install all the npm packages. Go into the project folder and type the following command to install all npm packages

#### Go to the project directory

```bash
  cd frontend
```
#### intall node modules
```bash
  npm install
```

#### Run Frontend
open new terminal in frontend directory and run this command.

```bash
npm start
```

 ### 3. Install  Backend dependencies

  #### 1. Make sure you have Python and pip installed on your system.

#### 2. Set up a virtual environment (optional but recommended)
Open a command prompt or terminal window, navigate to the project directory, and create a virtual environment by running the following commands:

  ```bash
     python -m venv myenv
  ```

  ```bash
    ./myenvir/Scripts/activate
  ```


#### 3. Migrate Backend Models

```bash
cd ..
```
```bash
cd backend
```

```bash
python manage.py makemigrations backend
```
```bash
python manage.py migrate
```

#### 4. Add Super User

```bash
python manage.py createsuperuser
```

#### 5. Run Django Server

```bash
python manage.py runserver
```

### 4. Open On Browser
#### int new tab 
   -  App Page localhost:3000


#### int new tab 

  - Django Admin Page 127.0.0.1:8000

#### in react app page 

remove localhost and paste 127.0.0.1

#### website will be now 

![Screenshot 2023-05-27 111023](https://github.com/SnehalMarutiSalokhe/osdag_cloud/assets/131335621/b9565923-bf1d-4c48-8f25-a31040642bfd)

http://127.0.0.1:3000/


