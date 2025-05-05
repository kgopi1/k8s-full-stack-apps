from flask import Flask, request, jsonify
from pymongo import MongoClient
from bson import ObjectId
import os

app = Flask(__name__)

# MongoDB Connection
client = MongoClient("mongodb://localhost:27017/")  # or use Atlas URI
db = client.todo_db
todos = db.todos

# Helpers
def serialize_todo(todo):
    return {
        "id": str(todo["_id"]),
        "title": todo["title"],
        "done": todo["done"]
    }

# Routes
@app.route('/todos', methods=['GET'])
def get_todos():
    all_todos = list(todos.find())
    return jsonify([serialize_todo(todo) for todo in all_todos])

@app.route('/todos', methods=['POST'])
def add_todo():
    data = request.get_json()
    new_todo = {
        "title": data["title"],
        "done": False
    }
    result = todos.insert_one(new_todo)
    return jsonify({"id": str(result.inserted_id)}), 201

@app.route('/todos/<id>', methods=['PUT'])
def update_todo(id):
    data = request.get_json()
    todos.update_one({"_id": ObjectId(id)}, {"$set": {"done": data["done"]}})
    return jsonify({"message": "Todo updated"})

@app.route('/todos/<id>', methods=['DELETE'])
def delete_todo(id):
    todos.delete_one({"_id": ObjectId(id)})
    return jsonify({"message": "Todo deleted"})

if __name__ == '__main__':
    app.run(debug=True)
