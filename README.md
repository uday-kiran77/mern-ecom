## Ecommerce App

#### Demo http://3.87.26.28:3000

### Local Setup

#### 1. Clone repo

#### 2. Install MongoDB and get Database url

#### 3. Run Backend

- check database url in `backend/config.js`

```
$ npm install
$ npm start
```

### 4. Run Frontend

- check API Base Url for frontend in `frontend/utils/constants.js`

```
# open new terminal
$ cd frontend
$ npm install
$ npm start
```

#### 5. Create Admin User

- Run this on chrome: `{api_base_url}/api/users/createadmin` (replace API base url )
- It returns admin email and password
