import psycopg2 #Esto es para poder conectarnos al Postgre

conexion = psycopg2.connect(user='postgres', password='admin', host='127.0.0.1', port='5432', database='test_bd')
try:
     with conexion:
        with conexion.cursor() as cursor:
            #cursor = conexion.cursor() reemplazamos esta línea con la linea 10 y 11
            sentencia = 'SELECT * FROM persona WHERE id_persona IN %s' #Plaseholder
            entrada = input('Digite los id_persona a buscar (separados por coma): ')
            llaves_primarias = (tuple(entrada.split(', ')),)
            cursor.execute(sentencia, llaves_primarias) #De esta manera ejecutamos la sentencia
            #registros = cursor.fetchall()#recuperamos todos los registros que serán una lista
            registros = cursor.fetchall()#Recupra solo un elemento y lo devuelve en una tupla
            for registro in registros:
                print(registro)

except Exception as e:
    print(f'Ocurrió un error: {e}')
finally:
    conexion.close()
