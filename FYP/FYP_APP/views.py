import datetime
from .models import Login,Registration,Challan,Slip
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.sessions.models import Session
from .serializers import LoginSerializers, RegistrationSerializers,ChallanSerializers,SlipSerializers



class LoginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        if Login.objects.filter(user_name__contains=username,password1__contains=password):
            return Response({'status': 'true'})
        return Response({'status': 'false'})


class SignUpView(APIView):
    def post(self, request):
        user_name = request.data.get('user_name')
        reg = Registration(user_name=user_name)
        serializer = LoginSerializers(data=request.data)
        if serializer.is_valid():
            reg.save()
            serializer.save()
            return Response({'status': 'true'})
        else:
            return Response({'status': 'false'})

class UpdateRegistrationView(APIView):
    def post(self, request, *args, **kwargs):
        username = request.data.get('uname')
        snippet = Registration.objects.get(user_name=username)
        serializer = RegistrationSerializers(snippet)
        return Response(serializer.data)

class saveUpdatedData(APIView):
    def post(self, request, *args, **kwargs):
        username = request.data.get('user_name')
        image = request.data.get('image')
        cname = request.data.get('cname')
        father_name = request.data.get('father_name')
        dob = request.data.get('dob')
        degree_choice = request.data.get('degree_choice')
        cnic = request.data.get('cnic')
        mobile = request.data.get('mobile')
        ptcl = request.data.get('ptcl')
        email = request.data.get('email')
        province = request.data.get('province')
        city=request.data.get('city')
        address=request.data.get('address')
        gender = request.data.get('gender')
        math = request.data.get('math')
        phystat = request.data.get('phystat')
        check = request.data.get('check')
        challanno=1001
        while Challan.objects.filter(challan_number=challanno):
            challanno+=3
        now=datetime.datetime.now()
        serializer = Registration.objects.get(user_name=username)

        n='null'
        if image != n:
            serializer.image=image
        if cname:
            serializer.cname=cname
        if father_name:
                serializer.father_name = father_name
        if dob:
                serializer.dob = dob
        if degree_choice:
                serializer.degree_choice = degree_choice
        if cnic:
                serializer.cnic = cnic
        if mobile:
                serializer.mobile = mobile
        if ptcl:
                serializer.ptcl = ptcl
        if email:
                serializer.email = email
        if province:
                serializer.province = province
        if city:
                serializer.city = city
        if address:
                serializer.address = address
        if gender:
                serializer.gender = gender
        if math:
                serializer.math = math
        if phystat:
            serializer.phystat = phystat
        if check:
            serializer.check = check
        if check=='true':
            cname=serializer.cname
            cnic=serializer.cnic
            program = serializer.degree_choice
            challanForm = Challan(user_name=username, cname=cname, session='2020',program=program, cnic=cnic, challan_number=challanno,
                                  account_number='158956752',
                                  date=now.strftime("%Y-%m-%d"), deposit_deadline='2020-08-02', challan_status='unpaid')
            challanForm.save()
            rollNoSlip=Slip(user_name=username)
            rollNoSlip.save()

            serializerSlip = Slip.objects.get(user_name=username)
            serializerChallan = Challan.objects.get(user_name=username)
            serializerregis = Registration.objects.get(user_name=username)
            if serializerregis.degree_choice=='bs':

                        seatno = 1
                        finalseat = 'bs' + str(seatno)
                        while Slip.objects.filter(seat_no=finalseat):
                                seatno += 1
                                finalseat = 'bs' + str(seatno)


                        formidnum = 1000001
                        formid = 'bs20_' + str(formidnum)
                        while Slip.objects.filter(Form_ID=formid):
                            formidnum += 1
                            formid = 'bs20_' + str(formidnum)

                        RollNonum =1000001
                        Rollno = 'bs' + str(RollNonum)
                        while Slip.objects.filter(Roll_No =Rollno):
                            RollNonum += 1
                            Rollno = 'bs' + str(RollNonum)

                        if serializerSlip.Form_ID == '':
                            serializerSlip.Form_ID=formid
                        if serializerSlip.shifts == '':
                            serializerSlip.shifts="1st"
                        if serializerSlip.date_time=='':
                            serializerSlip.date_time = "2020-08-18 08:00:00"
                        if serializerSlip.center == '':
                            serializerSlip.center="BISE examination centre 49-a lawrence road lahore",
                        if serializerSlip.hall_no == '':
                            serializerSlip.hall_no="A"
                        if serializerSlip.seat_no == '':
                            serializerSlip.seat_no=finalseat
                        if serializerSlip.cname == '':
                            serializerSlip.cname = serializerregis.cname
                        if serializerSlip.father_name == '':
                            serializerSlip.father_name =serializerregis.father_name
                        if serializerSlip.cnic == '':
                            serializerSlip.cnic=serializerregis.cnic
                        if serializerSlip.program=='':
                            serializerSlip.program=serializerregis.degree_choice
                        if serializerSlip.Roll_No == '':
                            serializerSlip.Roll_No =Rollno
                        if serializerSlip.Image_url == '':
                            serializerSlip.Image_url = serializerregis.image
                        if serializerSlip.challan_number == '':
                            serializerSlip.challan_number = serializerChallan.challan_number
                        serializerSlip.save()
            elif serializerregis.degree_choice=='mcs':
                        seatno = 1
                        finalseat = 'mc' + str(seatno)
                        while Slip.objects.filter(seat_no=finalseat):
                                seatno += 1
                                finalseat = 'mc' + str(seatno)


                        formidnum=6000001
                        formid = 'mc20_'+str(formidnum)
                        while Slip.objects.filter(Form_ID=formid):
                            formidnum+=1
                            formid ='mc20_'+str(formidnum)

                        RollNonum =6000001
                        Rollno = 'mc' + str(RollNonum)
                        while Slip.objects.filter(Roll_No=Rollno):
                            RollNonum += 1
                            Rollno = 'mc' + str(RollNonum)

                        if serializerSlip.Form_ID == '':
                            serializerSlip.Form_ID=formid
                        if serializerSlip.shifts == '':
                            serializerSlip.shifts="1st"
                        if serializerSlip.date_time=='':
                            serializerSlip.date_time="2020-08-18 08:00:00"
                        if serializerSlip.center == '':
                            serializerSlip.center="PUNJAB UNIVERSITY COLLEGE OF INFORMATION AND TECHNOLOGY,ALLAMA IQBAL CAMPUS (OLD CAMPUS),SHAHRAH-E-QUIAD-E-AZAM,LAHORE."
                        if serializerSlip.hall_no == '':
                            serializerSlip.hall_no="A"
                        if serializerSlip.seat_no == '':
                            serializerSlip.seat_no=finalseat
                        if serializerSlip.cname == '':
                            serializerSlip.cname = serializerregis.cname
                        if serializerSlip.father_name == '':
                            serializerSlip.father_name =serializerregis.father_name
                        if serializerSlip.cnic == '':
                            serializerSlip.cnic=serializerregis.cnic
                        if serializerSlip.program=='':
                            serializerSlip.program=serializerregis.degree_choice
                        if serializerSlip.Roll_No == '':
                            serializerSlip.Roll_No =Rollno
                        if serializerSlip.Image_url == '':
                            link=serializerregis.image
                            serializerSlip.Image_url =link
                        if serializerSlip.challan_number == '':
                            serializerSlip.challan_number = serializerChallan.challan_number
                        serializerSlip.save()

        serializer.save()
        return Response("abc")


class ChallanView(APIView):
    def post(self, request, *args, **kwargs):
        username = request.data.get('uname')
        snippet = Challan.objects.get(user_name=username)
        serializer = ChallanSerializers(snippet)
        return Response(serializer.data)

class SlipView(APIView):
    def post(self, request, *args, **kwargs):
        username = request.data.get('uname')
        serializerSlip = Slip.objects.get(user_name=username)
        # serializerChallan = Challan.objects.get(user_name=username)
        # serializerregis = Registration.objects.get(user_name=username)
        # if serializerChallan.challan_status=='paid':
        #         if serializerregis.degree_choice=='bs':
        #
        #             seatno = 1
        #             finalseat = 'bs' + str(seatno)
        #             while Slip.objects.filter(seat_no=finalseat):
        #                     seatno += 1
        #                     finalseat = 'bs' + str(seatno)
        #
        #
        #             formidnum = 1000001
        #             formid = 'bs20_' + str(formidnum)
        #             while Slip.objects.filter(Form_ID=formid):
        #                 formidnum += 1
        #                 formid = 'bs20_' + str(formidnum)
        #
        #             RollNonum =1000001
        #             Rollno = 'bs' + str(RollNonum)
        #             while Slip.objects.filter(Roll_No =Rollno):
        #                 RollNonum += 1
        #                 Rollno = 'bs' + str(RollNonum)
        #
        #             if serializerSlip.Form_ID == '':
        #                 serializerSlip.Form_ID=formid
        #             if serializerSlip.shifts == '':
        #                 serializerSlip.shifts="1st"
        #             if serializerSlip.center == '':
        #                 serializerSlip.center="BISE examination centre 49-a lawrence road lahore",
        #             if serializerSlip.hall_no == '':
        #                 serializerSlip.hall_no="A"
        #             if serializerSlip.seat_no == '':
        #                 serializerSlip.seat_no=finalseat
        #             if serializerSlip.cname == '':
        #                 serializerSlip.cname = serializerregis.cname
        #             if serializerSlip.father_name == '':
        #                 serializerSlip.father_name =serializerregis.father_name
        #             if serializerSlip.cnic == '':
        #                 serializerSlip.cnic=serializerregis.cnic
        #             if serializerSlip.program:
        #                 serializerSlip.program=serializerregis.degree_choice
        #             if serializerSlip.Roll_No == '':
        #                 serializerSlip.Roll_No =Rollno
        #             if serializerSlip.Image_url == '':
        #                 serializerSlip.Image_url = serializerregis.image
        #             if serializerSlip.challan_number == '':
        #                 serializerSlip.challan_number = serializerChallan.challan_number
        #             serializerSlip.save()
        #         elif serializerregis.degree_choice=='mcs':
        #             seatno = 1
        #             finalseat = 'mc' + str(seatno)
        #             while Slip.objects.filter(seat_no=finalseat):
        #                     seatno += 1
        #                     finalseat = 'mc' + str(seatno)
        #
        #
        #             formidnum=6000001
        #             formid = 'mc20_'+str(formidnum)
        #             while Slip.objects.filter(Form_ID=formid):
        #                 formidnum+=1
        #                 formid ='mc20_'+str(formidnum)
        #
        #             RollNonum =6000001
        #             Rollno = 'mc' + str(RollNonum)
        #             while Slip.objects.filter(Roll_No=Rollno):
        #                 RollNonum += 1
        #                 Rollno = 'mc' + str(RollNonum)
        #
        #             if serializerSlip.Form_ID == '':
        #                 serializerSlip.Form_ID=formid
        #             if serializerSlip.shifts == '':
        #                 serializerSlip.shifts="1st"
        #             if serializerSlip.center == '':
        #                 serializerSlip.center="PUNJAB UNIVERSITY COLLEGE OF INFORMATION AND TECHNOLOGY,ALLAMA IQBAL CAMPUS (OLD CAMPUS),SHAHRAH-E-QUIAD-E-AZAM,LAHORE."
        #             if serializerSlip.hall_no == '':
        #                 serializerSlip.hall_no="A"
        #             if serializerSlip.seat_no == '':
        #                 serializerSlip.seat_no=finalseat
        #             if serializerSlip.cname == '':
        #                 serializerSlip.cname = serializerregis.cname
        #             if serializerSlip.father_name == '':
        #                 serializerSlip.father_name =serializerregis.father_name
        #             if serializerSlip.cnic == '':
        #                 serializerSlip.cnic=serializerregis.cnic
        #             if serializerSlip.program:
        #                 serializerSlip.program=serializerregis.degree_choice
        #             if serializerSlip.Roll_No == '':
        #                 serializerSlip.Roll_No =Rollno
        #             if serializerSlip.Image_url == '':
        #                 link=serializerregis.image
        #                 serializerSlip.Image_url =link
        #             if serializerSlip.challan_number == '':
        #                 serializerSlip.challan_number = serializerChallan.challan_number
        #             serializerSlip.save()
        sendserializer = SlipSerializers(serializerSlip)
        return Response(sendserializer.data)