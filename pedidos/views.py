from pedidos.models import Producto, TipoProducto
from pedidos.serializers import ProductoSerializer, TipoProductoSerializer
from rest_framework import generics


class TipoProductoList(generics.ListCreateAPIView):
    queryset = TipoProducto.objects.all()
    serializer_class = TipoProductoSerializer


class TipoProductoDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = TipoProducto.objects.all()
    serializer_class = TipoProductoSerializer


class ProductoList(generics.ListCreateAPIView):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer


class ProductoDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer