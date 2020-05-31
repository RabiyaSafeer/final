from django.contrib import admin
from .models import Login
from .models import Registration
from .models import Challan
from .models import Slip

class RegAdmin(admin.ModelAdmin):
    list_display = ['id','user_name','cname', 'father_name', 'cnic','degree_choice']
    ordering = ['id']
    search_fields = ['id','user_name','cname','cnic','degree_choice']


class LoginAdmin(admin.ModelAdmin):
    list_display = ['id','user_name', 'email', 'degree_choice']
    ordering = ['id']
    search_fields = ['id','user_name','degree_choice','email']

class ChallanAdmin(admin.ModelAdmin):
    list_display = ['id','user_name','cname', 'cnic','program','challan_number','challan_status']
    ordering = ['id']
    search_fields = ['id','user_name','cname','cnic','program','challan_number', 'challan_status']

class SlipAdmin(admin.ModelAdmin):
    list_display = ['id','user_name','cname', 'cnic','Form_ID','Roll_No','program','challan_number']
    ordering = ['id']
    search_fields = ['id','user_name','cname','cnic','Form_ID', 'Roll_No','program','challan_number']


admin.site.register(Login,LoginAdmin)
admin.site.register(Registration,RegAdmin)
admin.site.register(Challan,ChallanAdmin)
admin.site.register(Slip,SlipAdmin)

