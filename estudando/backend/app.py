# from flask import Flask, request, jsonify
# from flask_cors import CORS
# from db import get_connection

# app = Flask(__name__)
# CORS(app)

# # USERS
# @app.route("/users", methods=["GET"])
# def pegarUsuario():
#     conn = get_connection()
#     cursor = conn.cursor(dictionary=True)
#     cursor.execute("SELECT * FROM users")
#     users = cursor.fetchall()
#     return jsonify(users), 200

# @app.route("/users", methods=["POST"])
# def add_user():
#     data = request.json
#     conn = get_connection()
#     cursor = conn.cursor()
#     cursor.execute("""
#     INSERT INTO users(nome)
#     VALUES(%s)
#     """, (data["nome"],))
#     conn.commit()
#     return jsonify({"message": "User created successfully"}), 201

# # PRODUTOS
# @app.route("/produtos", methods=["POST"])
# def add_produto():
#     data = request.json
#     conn = get_connection()
#     cursor = conn.cursor()
#     cursor.execute("""
#     INSERT INTO produtos(nome,marca,valor)
#     VALUES(%s,%s,%s)
#     """, (data["nome"], data["marca"], data["valor"]))
#     conn.commit()
#     return jsonify({"message": "Product created successfully"}), 201

# @app.route("/produtos", methods=["GET"])
# def pegarProdutos():
#     conn = get_connection()
#     cursor = conn.cursor(dictionary=True)
#     cursor.execute("SELECT * FROM produtos")
#     products = cursor.fetchall()
#     return jsonify(products), 200



# @app.route("/users/<int:id>", methods=["PUT"])
# def update_user(id_usuario):
#     # request.json vai pegar os valos do json do front
#     data = request.json
 
#     try:
#         # Esse get_connection vai conectar com banco
#         conn = get_connection()
#         # O cursor vai mandar codigos sql  via String
#         cursor = conn.cursor()
#         cursor.execute("""
#         UPDATE users
#         SET  name=%s where id=%s;
#         """,(data["nome"],id_usuario))
 
#         conn.commit()
#         return jsonify({"message": "User update successfully"}), 200
#     except Exception as erro:
#          return jsonify({"message": "User not  update "}), 201
#     finally:
#         # Não importa ele vai fechar o banco de dados
#         cursor.close()
#         conn.close()


# if __name__ == '__main__':
#     app.run(debug=True)

from flask import Flask, request, jsonify
from flask_cors import CORS
from db import get_connection

app = Flask(__name__)
CORS(app)

# USERS
@app.route("/users", methods=["GET"])
def pegarUsuario():
    conn = get_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM users")
    users = cursor.fetchall()
    return jsonify(users), 200

@app.route("/users", methods=["POST"])
def add_user():
    data = request.json
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("""
    INSERT INTO users(nome)
    VALUES(%s)
    """, (data["nome"],))
    conn.commit()
    return jsonify({"message": "User  created successfully"}), 201

@app.route("/users/<int:id>", methods=["PUT"])
def update_user(id):
    data = request.json
    try:
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute("""
        UPDATE users
        SET nome=%s WHERE id=%s;
        """, (data["nome"], id))
        conn.commit()
        return jsonify({"message": "User  updated successfully"}), 200
    except Exception as erro:
        return jsonify({"message": "User  not updated", "error": str(erro)}), 400
    finally:
        cursor.close()
        conn.close()

@app.route("/users/<int:id>", methods=["DELETE"])
def delete_user(id):
    try:
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute("DELETE FROM users WHERE id=%s", (id,))
        conn.commit()
        return jsonify({"message": "User  deleted successfully"}), 200
    except Exception as erro:
        return jsonify({"message": "User  not deleted", "error": str(erro)}), 400
    finally:
        cursor.close()
        conn.close()

# PRODUTOS
@app.route("/produtos", methods=["POST"])
def add_produto():
    data = request.json
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("""
    INSERT INTO produtos(nome, marca, valor)
    VALUES(%s, %s, %s)
    """, (data["nome"], data["marca"], data["valor"]))
    conn.commit()
    return jsonify({"message": "Product created successfully"}), 201

@app.route("/produtos", methods=["GET"])
def pegarProdutos():
    conn = get_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM produtos")
    products = cursor.fetchall()
    return jsonify(products), 200

if __name__ == '__main__':
    app.run(debug=True)