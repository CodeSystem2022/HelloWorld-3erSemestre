import psycopg2  # Esto es para poder conectarnos a Postgre

conexion = psycopg2.connect(user='postgres', password='admin', host='127.0.0.1', port='5432', database='test_bd')
try:
    with conexion:
        with conexion.cursor() as cursor:
            # Un cursor es un objeto que nos va a permitir ejecutar sentencias en sql
            sentencia = 'SELECT * FROM persona WHERE id_persona = %s' # Placeholder
            id_persona = input('Digite un número para el id_persona: ')
            cursor.execute(sentencia, (id_persona,))  # De esta manera ejecutamos la sentencia
            registros = cursor.fetchone()  # (fetchall) Recuperamos todos los registros de la sentencia y será una lista
            print(registros)

except Exception as e:
    print(f'Ocurrió un error: {e}')
finally:
    conexion.close()

