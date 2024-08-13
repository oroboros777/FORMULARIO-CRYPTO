import mysql.connector
## Dados dde conexão
config = {
    'username': 'root',
    'password': 'Proz@2023',
    'host': 'localhost',
    'database': 'hugão'    
}

try:
    # Estabelecer conexão
    conn = mysql.connector.connect(**config)
    cursor = conn.cursor()
    
    #Iniciando Transação
    cursor.execute("START TRANSACTION")
    #Inserir dados
    sql_insert= "INSERT INTO Dados_Pessoais (Nome, CPF, Idade, Endereco) VALUES (%s, %s, %s, %s)"
    values = ('Leo', '12345678', 27, 'Açaí')
    cursor.execute(sql_insert, values)
    
    # Verificar dados
    sql_select = "SELECT * FROM Dados_Pessoais  WHERE CPF = %s"
    cursor.execute(sql_select,('12345678',))
    
    #Amarzenar Dados
    resultado = cursor.fetchall()
    
    if resultado:
        conn.commit()
        print("Insercao bem-sucedida e transacao confirmada.")
        
    else:
        conn.rollback()
        print("Falha na insercao de dados e transacao revertida.")   
except Exception as e:
    print("Erro encontrado: ", e)
    conn.rollback()
    
finally:
    if conn.is_connected():
        cursor.close()
        conn.close
        print("Conexão encerrada.")