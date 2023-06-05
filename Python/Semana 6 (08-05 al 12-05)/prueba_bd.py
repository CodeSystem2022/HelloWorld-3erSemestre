import psycopg2 #Esto es para poder conectarnos al Postgre

conexion = psycopg2.connect(user='postgres', password='admin', host='127.0.0.1', port='5432', database='test_bd')
try:
     with conexion:
        with conexion.cursor() as cursor:
            #cursor = conexion.cursor() reemplazamos esta línea con la linea 10 y 11
            sentencia = 'SELECT * FROM persona WHERE id_persona = %s' #Plaseholder
            id_persona = input('Dígite un número para el id_persona: ')
            cursor.execute(sentencia, (id_persona,)) #De esta manera ejecutamos la sentencia
            #registros = cursor.fetchall()#recuperamos todos los registros que serán una lista
            registros = cursor.fetchone()#Recupra solo un elemento y lo devuelve en una tupla
            print(registros)
except Exception as e:
    print(f'Ocurrió un error: {e}')
finally:
    conexion.close()

 # https://www.psycopg.org/docs/usage.html

#-----------------------
#la configuración por defecto de postgres no muestra los mensajes correctamente, necesiramos realizar cambios

