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
           sentencia = 'INSERT INTO persona (nombre, apellido, email) VALUE (%S, %S, %S,'
           valores = (
               ('Carlos','Lara','carlara@gmail.com'),
               ('Marcos','Canto','mcanto@gmail.com'),
               ('Marcelo','Cuenca','CuencaM@gmail.com'))
           cursor.execute(sentencia,valores)
           #conexion.commit() esto no lo vamos a utilizar
           registros_insertados = cursor.rowcount
            print(f'los registros insertados son: {registros_insertados}')

except Exception as e:
    print(f'Ocurrió un error: {e}')
finally:
    conexion.close()