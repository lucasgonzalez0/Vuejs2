from django.urls import path, include

urlpatterns = [
    path('', include('pedidos.urls')),
]

#curl -H 'Accept: application/json; indent=4' -u admin:password123 http://127.0.0.1:8000/users/ 
#to test with curl