from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from pedidos import views

urlpatterns = [
    path('tipo_producto/', views.TipoProductoList.as_view(), name='tipo_producto'),
    path('tipo_producto/<int:pk>/', views.TipoProductoDetail.as_view(), name='tipo_producto_detail'),
    path('producto/', views.ProductoList.as_view(), name='producto'),
    path('producto/<int:pk>/', views.ProductoDetail.as_view(), name='producto_detail'),
]

urlpatterns = format_suffix_patterns(urlpatterns)