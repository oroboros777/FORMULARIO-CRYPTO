import mysql.connector

config = {
    'username': 'root',
    'password': 'Proz@2023',
    'host': 'localhost',
    'database': 'hugão'    
}

try:
    conn = mysql.connector.connect(**config)
    cursor = conn.cursor()
    
    sql_select = "SELECT * FROM Dados_Pessoais  WHERE Nome = %s"
    cursor.execute(sql_select,('Leo',))
    
    resultado = cursor.fetchall()
    print (f'resultado,{resultado}')
    
except Exception as e:
    print("Erro encontrado: ", e)
finally:
    if conn.is_connected():
        cursor.close()
        conn.close
        print("Conexão encerrada.")