from django.db import models
import datetime

class Barrio(models.Model):
	nombre = models.CharField(max_length=40)
	descripcion = models.CharField(max_length=200)

	class Meta:
		ordering = ['nombre']
	def __str__(self):
		return self.nombre

class TipoProducto(models.Model):
	nombre = models.CharField(max_length=40)
	descripcion = models.CharField(max_length=200)
	class Meta:
		ordering = ['nombre']
	def __str__(self):
		return self.nombre

class Producto(models.Model):
	nombre = models.CharField(max_length=40)
	descripcion = models.CharField(max_length=200)
	precio = models.DecimalField(max_digits=10, decimal_places=2)
	tipoProducto = models.ForeignKey(TipoProducto, on_delete=models.PROTECT)
	class Meta:
		ordering = ['nombre']
	def __str__(self):
		return self.nombre

class Promocion(models.Model):
	nombre = models.CharField(max_length=40)
	descripcion = models.CharField(max_length=200)
	precio = models.DecimalField(max_digits=10, decimal_places=2)
	class Meta:
		ordering = ['nombre']
	def __str__(self):
		return self.nombre

class DetallePromocion(models.Model):
	cantidad = models.IntegerField()
	precio = models.DecimalField(max_digits=10, decimal_places=2)
	producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
	promocion = models.ForeignKey(Promocion, on_delete=models.CASCADE)
	class Meta:
		ordering = ['producto']
	def __str__(self):
		return self.producto

class Egreso(models.Model):
	fechayHora = models.DateTimeField(default=datetime.datetime.now())
	montoTotal = models.DecimalField(max_digits=10, decimal_places=2)
	proveedor = models.CharField(max_length=60)
	class Meta:
		ordering = ['proveedor']
	def __str__(self):
		return self.proveedor

class DetalleEgreso(models.Model):
	descripcion = models.CharField(max_length=200)
	cantidad = models.IntegerField()
	precio = models.DecimalField(max_digits=10, decimal_places=2)
	egreso = models.ForeignKey(Egreso, on_delete=models.CASCADE)
	class Meta:
		ordering = ['egreso']
	def __str__(self):
		return self.descripcion

class Estado(models.Model):
	nombre = models.CharField(max_length=40)
	descripcion = models.CharField(max_length=200)
	class Meta:
		ordering = ['nombre']
	def __str__(self):
		return self.nombre

class Pedido(models.Model):
	nombreCliente = models.CharField(max_length=50)
	fechayHora = models.DateTimeField(default=datetime.datetime.now())
	estado = models.ForeignKey(Estado, on_delete=models.PROTECT)
	barrio = models.ForeignKey(Barrio, on_delete=models.PROTECT)
	direccion = models.CharField(max_length=60)
	altura = models.CharField(max_length=10)
	piso = models.CharField(max_length=5)
	dpto = models.CharField(max_length=5)
	telefono = models.CharField(max_length=20)#
	observacionEnvio = models.CharField(max_length=200)
	observacionPedido = models.CharField(max_length=200)
	descuento = models.DecimalField(max_digits=10, decimal_places=2)
	class Meta:
		ordering = ['fechayHora']
	def __str__(self):
		return self.nombreCliente

class DetallePedido(models.Model):
	cantidad = models.IntegerField()
	precio = models.DecimalField(max_digits=10, decimal_places=2)
	pedido = models.ForeignKey(Pedido, on_delete=models.CASCADE)
	producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
	promocion = models.ForeignKey(Promocion, on_delete=models.PROTECT)
	class Meta:
		ordering = ['pedido']
	def __str__(self):
		return self.producto+' - '+self.promocion