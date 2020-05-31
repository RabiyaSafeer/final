from django.db import models
from django import forms
from phonenumber_field.modelfields import PhoneNumberField

DEGREE_CHOICES = [
    ('bs', 'BS'),
    ('mcs', 'MCS'),
]
GENDER_CHOICES = [
    ('male', 'MALE'),
    ('female', 'FEMALE'),
]
MATH_CHOICES = [
    ('yes', 'Yes'),
    ('no', 'No')
]


PHYSTAT_CHOICES = [
    ('Yes', 'Yes'),
    ('No', 'No')
]
province_choice = [
    ('Punjab', 'Punjab'),
    ('Khyber_Pakhtunkhwa', 'Khyber_Pakhtunkhwa'),
    ('Sindh', 'Sindh'),
    ('Balochistan', 'Balochistan')
]
city_choice = [
    ('Lahore', 'Lahore'),
    ('Multan', 'Multan'),
    ('Faisalabad', 'Faisalabad'),
    ('Gujranwala', 'Gujranwala'),
    ('Rawalpindi', 'Rawalpindi'),
    ('Sargodha', 'Sargodha'),
    ('Bahawalpur', 'Bahawalpur'),
    ('Sialkot', 'Sialkot'),
    ('Sheikhupura', 'Sheikhupura'),
    ('Gujrat', 'Gujrat'),
    ('Jhang', 'Jhang'),
    ('Sahiwal', 'Sahiwal'),
    ('Peshawar', 'Peshawar'),
    ('Abbottabad', 'Abbottabad')

]


CHALLAN_STATUS = [
    ('paid', 'Paid'),
    ('unpaid', 'UnPaid')
]
CHECK_CHOICES = [
    ('true', 'TRUE'),
    ('false', 'FALSE')
]
Slip_YESNO = [
    ('yes', 'Yes'),
    ('no', 'NO')
]

Group_CHOICES = [
    ('1st Group', '1st GROUP'),
    ('2nd Group', '2nd GROUP'),
    ('3rd Group', '3rd GROUP'),
    ('4th Group', '4th GROUP'),
    ('5th Group', '5th GROUP')

]

class Login(models.Model):
    user_name = models.CharField(max_length=50, unique=True)
    email = models.EmailField()
    degree_choice = models.CharField(max_length=3, choices=DEGREE_CHOICES, default='null')
    password1 = models.CharField(max_length=50)
    password2 = models.CharField(max_length=50)
    def __str__(self):
        return self.user_name



class Registration(models.Model):

    image = models.ImageField(upload_to='item_images')
    cname = models.CharField(max_length=50)
    father_name = models.CharField(max_length=50)
    dob = models.DateField(null=True, blank=True)
    degree_choice = models.CharField(max_length=3, choices=DEGREE_CHOICES, default='bs')
    cnic = models.CharField(max_length=15)
    mobile = models.CharField(max_length=15)
    ptcl = models.CharField(max_length=15)
    email = models.EmailField()
    province = models.CharField(max_length=30,choices=province_choice, default='null')
    city = models.CharField(max_length=30,choices=city_choice, default='null')
    address = models.CharField(max_length=200)
    gender = models.CharField(max_length=6, choices=GENDER_CHOICES, default='male')
    math = models.CharField(max_length=4,choices=MATH_CHOICES, default='null')
    phystat = models.CharField(max_length=4,choices=PHYSTAT_CHOICES, default='null')
    user_name = models.CharField(max_length=50,unique=True)
    check = models.CharField(max_length=6, choices=CHECK_CHOICES,default='false')
    
    def __str__(self):
        return self.cname

class Challan(models.Model):
    user_name = models.CharField(max_length=50, unique=True)
    cname = models.CharField(max_length=50)
    session = models.CharField(max_length=20)
    program =models.CharField(max_length=3, choices=DEGREE_CHOICES, default='bs')
    cnic = models.CharField(max_length=15)
    challan_number = models.CharField(max_length=50,unique=True)
    account_number = models.CharField(max_length=50)
    date = models.DateField(null=True, blank=True)
    deposit_deadline = models.DateField(null=True, blank=True)
    challan_status = models.CharField(max_length=10, choices=CHALLAN_STATUS, default='null')


class Slip(models.Model):
    Form_ID=models.CharField(max_length=50, unique=True)
    shifts = models.CharField(max_length=10, choices=Group_CHOICES, default='null')
    date_time=models.DateTimeField(null=True, blank=True)
    center=models.CharField(max_length=200)
    hall_no=models.CharField(max_length=20)
    seat_no=models.CharField(max_length=20)
    cname = models.CharField(max_length=50)
    father_name = models.CharField(max_length=50)
    cnic = models.CharField(max_length=15)
    program = models.CharField(max_length=3, choices=DEGREE_CHOICES, default='')
    user_name = models.CharField(max_length=50, unique=True)
    Roll_No = models.CharField(max_length=50, unique=True)
    Slip_Show = models.CharField(max_length=3, choices=Slip_YESNO, default='no')
    Image_url = models.CharField(max_length=150)
    challan_number = models.CharField(max_length=50,unique=True)



