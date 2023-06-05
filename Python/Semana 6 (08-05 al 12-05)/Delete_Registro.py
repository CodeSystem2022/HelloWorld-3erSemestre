import psycopg2

conexion = psycopg2.connect(
    user= 'postgres',
    password= 'admin',
    host= '127.0.0.1',
    port= '5432',
    database= 'test_bd'

)
try:
    with conexion:
        with conexion.cursor() as cursor:
           sentencia = 'DELETE FROM persona WHERE id_persona IN %s'
           entrada = input('Digite los números de registro a eliminar(separados por comas)')
           valores = (entrada,)#tupla de valores
           cursor.executemany(sentencia,valores)
           #conexion.commit() esto no lo vamos a utilizar
           registros_eliminados = cursor.rowcount
           print(f'los registros eliminados son: {registros_eliminados}')

except Exception as e:
    print(f'Ocurrió un error: {e}')
finally:
    conexion.close()