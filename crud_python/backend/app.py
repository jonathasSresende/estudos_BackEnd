from flask import Flask, request, jsonify
from flask_cors import CORS
from db import get_connection

app = Flask (__name__)
CORS(app)

@app.rout('/user',methods=['POST'])
def create_user():
    data= request.json
    conn= get_connection()
    cursor= conn.cursor()
    cursor.execute("""
    ISERT INTO users(name,email,age)
    VALUES (%s,%s,%s)
    """,(data['name'],data['email'],data['age']))
    conn.commit()
    return jsonify({"message":"created successfully"}),201
