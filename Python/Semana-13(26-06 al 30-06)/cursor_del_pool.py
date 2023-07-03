from logger_base import log
from conexion import conecxion
class CursorDelPool:
    def __init__(self):
        self.conexion: None
        self.cursor: None

    def __enter__(self):
        log.debug('Inicio del método with y __enter__')
        self.conecxion = conecxion.obtenerconecxion()
        self.cursor = self._conecxion.cursor()
        return self._cursor


    def __exit__(self, tipo_exception, valor_exception, detalle_exception):
        log.debug('Se ejecuta el método exit')
        if valor_exception:
            self._conecxion.rollback()
            log.debug(f'Ocurrió una excepción:{valor_exception} ')
        else:
            self._conecxion.commit
            log.debug('commit de la transacción')
        self._cursor.close()
        conecxion.liberarconexion(self._conecxion)




if __name__=='__main__':
    with CursorDelPool() as cursor
        log.debug('Dentro del bloque with')
        cursor.excecute('SELECT * FROM persona')
        log.debug(cursor.fetchall())


