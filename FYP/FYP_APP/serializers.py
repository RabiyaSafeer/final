from rest_framework import serializers
from .models import Login
from .models import Registration
from .models import Challan
from .models import Slip

class LoginSerializers(serializers.ModelSerializer):

    class Meta:
        model = Login
        fields = '__all__'
class SignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Login
        # the fields mentioned below become the entry rows in the generated form
        fields = ['user_name', 'email', 'degree_choice','password1','password2']

class RegistrationSerializers(serializers.ModelSerializer):
    class Meta:
        model = Registration
        fields=['image','cname', 'father_name', 'dob', 'degree_choice', 'cnic',
                     'mobile', 'ptcl', 'email', 'province', 'city', 'address', 'gender',
                     'math', 'phystat','user_name','check']


class ChallanSerializers(serializers.ModelSerializer):
    class Meta:
        model = Challan
        fields = ['user_name', 'cname', 'session', 'program', 'cnic', 'challan_number',
                  'account_number', 'date', 'deposit_deadline', 'challan_status']


class SlipSerializers(serializers.ModelSerializer):
    class Meta:
        model = Slip
        fields = ['Form_ID', 'shifts', 'date_time', 'center', 'hall_no', 'seat_no',
                  'cname', 'father_name', 'cnic', 'program', 'user_name', 'Roll_No','Slip_Show']