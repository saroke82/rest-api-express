# Simple REST API with Express.js

## 🚀 Setup Instructions

1. Clone or download the project
2. Run npm install
3. Start server: npm start

## 📚 API Endpoints

### Root
- GET / → Hello, World!

### Items
- GET /items → List all items
- GET /items/:id → Get item by ID
- POST /items → Create item  
  *Body:* { "name": "Item Name", "description": "Details" }
- PUT /items/:id → Update item  
  *Body:* { "name": "New Name", "description": "Updated Desc" }
- DELETE /items/:id → Delete item

## ❌ Error Responses
- 404: Not found
- 400: Validation error
- 500: Server error
