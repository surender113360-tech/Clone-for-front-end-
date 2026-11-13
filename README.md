# Employee Management System — React Frontend

This is a separated React frontend starter for the Employee Management System.

## 1. Requirements
- Node.js (LTS)
- VS Code (recommended)
- FastAPI backend running at `http://localhost:8000`

## 2. Run the frontend
Open this folder in VS Code, open Terminal, then run:

```bash
npm install
npm run dev
```

Open the local URL shown by Vite, normally `http://localhost:5173`.

## 3. Backend API expectations
This frontend expects these endpoints:
- `POST /auth/login` with `{ "email": "...", "password": "..." }`
  - response should include `access_token` and `role` (`hr` or `employee`)
- `GET /hr/dashboard`
  - expected fields: `total_employees`, `total_departments`, `pending_leaves`, `present_today`
- `GET /hr/employees`
  - expected employee fields: `id`, `employee_code`, `full_name`, `email`, optional `department_name`

Change `baseURL` in `src/services/api.js` if your backend uses another address.

## 4. Folder organization
- `components/`: reusable UI components
- `pages/`: separate screen/page components
- `services/`: API communication
- `context/`: shared authentication state
- `hooks/`: custom React hooks (add as needed)
- `assets/`: images and static assets

## 5. Important
This ZIP contains the React frontend starter and separate page/component files. Some pages are UI placeholders and need their matching FastAPI endpoints and forms completed in the next development parts. Frontend route checks improve navigation but are not a replacement for backend authorization.
