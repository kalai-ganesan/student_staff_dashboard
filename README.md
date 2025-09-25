# Student & Staff Data Visualization (Django + React)
## What is included
- backend/: Minimal Django project with `api` app (Student, Staff models + DRF viewsets)
- frontend/: React app using Recharts for visualization

## Quick setup (development)
1. Backend:
   - Create a Python virtualenv, install requirements:
     ```
     cd backend
     python -m venv venv
     source venv/bin/activate   # on Windows: venv\Scripts\activate
     pip install -r requirements.txt
     python manage.py migrate
     python manage.py createsuperuser
     python manage.py runserver
     ```
   - The API will be available at http://127.0.0.1:8000/api/

2. Frontend:
   ```
   cd frontend
   npm install
   npm start
   ```
   - Open http://localhost:3000

## Notes
- This is a minimal starter project. For production, update SECRET_KEY, DEBUG, database, and CORS settings.
- Add sample data via Django admin or fixtures.
